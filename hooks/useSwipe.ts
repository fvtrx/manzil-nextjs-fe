import { useState, useRef, useCallback, useEffect } from "react";

export interface UseSwipeProps {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onDragStart?: (startPos: { x: number; y: number }) => void;
  onDragEnd?: (
    endPos: { x: number; y: number },
    velocity: { x: number; y: number }
  ) => void;
  onDrag?: (
    offset: { x: number; y: number },
    velocity: { x: number; y: number }
  ) => void;
  threshold?: number;
  velocityThreshold?: number; // For detecting fast swipes
  dragThreshold?: number; // Minimum distance to start dragging
}

export function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  onDragStart,
  onDragEnd,
  onDrag,
  threshold = 50,
  velocityThreshold = 0.5,
  dragThreshold = 10,
}: UseSwipeProps) {
  const [isSwiping, setIsSwiping] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef<number>(0);
  const startY = useRef<number>(0);
  const currentX = useRef<number>(0);
  const currentY = useRef<number>(0);
  const lastX = useRef<number>(0);
  const lastY = useRef<number>(0);
  const startTime = useRef<number>(0);
  const lastTime = useRef<number>(0);
  const velocityX = useRef<number>(0);
  const velocityY = useRef<number>(0);

  // Calculate velocity
  const updateVelocity = useCallback((x: number, y: number, time: number) => {
    const deltaTime = time - lastTime.current;
    if (deltaTime > 0) {
      velocityX.current = (x - lastX.current) / deltaTime;
      velocityY.current = (y - lastY.current) / deltaTime;
    }
    lastX.current = x;
    lastY.current = y;
    lastTime.current = time;
  }, []);

  // Touch event handlers
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      const time = Date.now();

      setIsSwiping(true);
      startX.current = touch.clientX;
      startY.current = touch.clientY;
      currentX.current = touch.clientX;
      currentY.current = touch.clientY;
      lastX.current = touch.clientX;
      lastY.current = touch.clientY;
      startTime.current = time;
      lastTime.current = time;

      velocityX.current = 0;
      velocityY.current = 0;

      onDragStart?.({ x: touch.clientX, y: touch.clientY });
    },
    [onDragStart]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isSwiping) return;

      const touch = e.touches[0];
      const time = Date.now();

      currentX.current = touch.clientX;
      currentY.current = touch.clientY;

      const diffX = currentX.current - startX.current;
      const diffY = currentY.current - startY.current;

      // Start dragging if we've moved beyond the drag threshold
      if (
        !isDragging &&
        (Math.abs(diffX) > dragThreshold || Math.abs(diffY) > dragThreshold)
      ) {
        setIsDragging(true);
      }

      // Only handle horizontal swipes (ignore vertical scrolling)
      if (
        Math.abs(diffX) > Math.abs(diffY) &&
        Math.abs(diffX) > dragThreshold
      ) {
        e.preventDefault();
      }

      updateVelocity(currentX.current, currentY.current, time);

      if (isDragging) {
        onDrag?.(
          { x: diffX, y: diffY },
          { x: velocityX.current, y: velocityY.current }
        );
      }
    },
    [isSwiping, isDragging, onDrag, updateVelocity, dragThreshold]
  );

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!isSwiping) return;

      const touch = e.changedTouches[0];
      const endTime = Date.now();

      setIsSwiping(false);
      setIsDragging(false);

      const endX = touch.clientX;
      const endY = touch.clientY;
      const diffX = startX.current - endX;
      const diffY = startY.current - endY;
      const totalTime = endTime - startTime.current;

      // Calculate final velocity
      const finalVelocityX = totalTime > 0 ? -diffX / totalTime : 0;
      const finalVelocityY = totalTime > 0 ? -diffY / totalTime : 0;

      onDragEnd?.(
        { x: endX, y: endY },
        { x: finalVelocityX, y: finalVelocityY }
      );

      // Determine if it's a swipe based on distance or velocity
      const isHorizontalSwipe = Math.abs(diffX) > Math.abs(diffY);
      const exceedsThreshold = Math.abs(diffX) > threshold;
      const exceedsVelocity = Math.abs(finalVelocityX) > velocityThreshold;

      if (isHorizontalSwipe && (exceedsThreshold || exceedsVelocity)) {
        if (diffX > 0) {
          onSwipeLeft?.();
        } else {
          onSwipeRight?.();
        }
      }
    },
    [
      isSwiping,
      onSwipeLeft,
      onSwipeRight,
      onDragEnd,
      threshold,
      velocityThreshold,
    ]
  );

  // Mouse event handlers
  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      const time = Date.now();

      setIsSwiping(true);
      startX.current = e.clientX;
      startY.current = e.clientY;
      currentX.current = e.clientX;
      currentY.current = e.clientY;
      lastX.current = e.clientX;
      lastY.current = e.clientY;
      startTime.current = time;
      lastTime.current = time;

      velocityX.current = 0;
      velocityY.current = 0;

      onDragStart?.({ x: e.clientX, y: e.clientY });

      // Prevent text selection during drag
      e.preventDefault();
    },
    [onDragStart]
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isSwiping) return;

      const time = Date.now();

      currentX.current = e.clientX;
      currentY.current = e.clientY;

      const diffX = currentX.current - startX.current;
      const diffY = currentY.current - startY.current;

      // Start dragging if we've moved beyond the drag threshold
      if (
        !isDragging &&
        (Math.abs(diffX) > dragThreshold || Math.abs(diffY) > dragThreshold)
      ) {
        setIsDragging(true);
      }

      updateVelocity(currentX.current, currentY.current, time);

      if (isDragging) {
        onDrag?.(
          { x: diffX, y: diffY },
          { x: velocityX.current, y: velocityY.current }
        );
      }

      e.preventDefault();
    },
    [isSwiping, isDragging, onDrag, updateVelocity, dragThreshold]
  );

  const onMouseUp = useCallback(
    (e: React.MouseEvent) => {
      if (!isSwiping) return;

      const endTime = Date.now();

      setIsSwiping(false);
      setIsDragging(false);

      const diffX = startX.current - e.clientX;
      const diffY = startY.current - e.clientY;
      const totalTime = endTime - startTime.current;

      // Calculate final velocity
      const finalVelocityX = totalTime > 0 ? -diffX / totalTime : 0;
      const finalVelocityY = totalTime > 0 ? -diffY / totalTime : 0;

      onDragEnd?.(
        { x: e.clientX, y: e.clientY },
        { x: finalVelocityX, y: finalVelocityY }
      );

      // Determine if it's a swipe based on distance or velocity
      const isHorizontalSwipe = Math.abs(diffX) > Math.abs(diffY);
      const exceedsThreshold = Math.abs(diffX) > threshold;
      const exceedsVelocity = Math.abs(finalVelocityX) > velocityThreshold;

      if (isHorizontalSwipe && (exceedsThreshold || exceedsVelocity)) {
        if (diffX > 0) {
          onSwipeLeft?.();
        } else {
          onSwipeRight?.();
        }
      }
    },
    [
      isSwiping,
      onSwipeLeft,
      onSwipeRight,
      onDragEnd,
      threshold,
      velocityThreshold,
    ]
  );

  // Handle mouse leave to end dragging if mouse leaves the element
  const onMouseLeave = useCallback(
    (e: React.MouseEvent) => {
      if (!isSwiping) return;

      const endTime = Date.now();

      setIsSwiping(false);
      setIsDragging(false);

      const diffX = startX.current - e.clientX;
      const diffY = startY.current - e.clientY;
      const totalTime = endTime - startTime.current;

      // Calculate final velocity
      const finalVelocityX = totalTime > 0 ? -diffX / totalTime : 0;
      const finalVelocityY = totalTime > 0 ? -diffY / totalTime : 0;

      onDragEnd?.(
        { x: e.clientX, y: e.clientY },
        { x: finalVelocityX, y: finalVelocityY }
      );
    },
    [isSwiping, onDragEnd]
  );

  // Add global mouse event listeners when dragging
  useEffect(() => {
    if (isSwiping) {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        if (!isSwiping) return;

        const time = Date.now();
        currentX.current = e.clientX;
        currentY.current = e.clientY;

        const diffX = currentX.current - startX.current;
        const diffY = currentY.current - startY.current;

        if (
          !isDragging &&
          (Math.abs(diffX) > dragThreshold || Math.abs(diffY) > dragThreshold)
        ) {
          setIsDragging(true);
        }

        updateVelocity(currentX.current, currentY.current, time);

        if (isDragging) {
          onDrag?.(
            { x: diffX, y: diffY },
            { x: velocityX.current, y: velocityY.current }
          );
        }
      };

      const handleGlobalMouseUp = (e: MouseEvent) => {
        if (!isSwiping) return;

        const endTime = Date.now();
        setIsSwiping(false);
        setIsDragging(false);

        const diffX = startX.current - e.clientX;
        const diffY = startY.current - e.clientY;
        const totalTime = endTime - startTime.current;

        const finalVelocityX = totalTime > 0 ? -diffX / totalTime : 0;
        const finalVelocityY = totalTime > 0 ? -diffY / totalTime : 0;

        onDragEnd?.(
          { x: e.clientX, y: e.clientY },
          { x: finalVelocityX, y: finalVelocityY }
        );

        const isHorizontalSwipe = Math.abs(diffX) > Math.abs(diffY);
        const exceedsThreshold = Math.abs(diffX) > threshold;
        const exceedsVelocity = Math.abs(finalVelocityX) > velocityThreshold;

        if (isHorizontalSwipe && (exceedsThreshold || exceedsVelocity)) {
          if (diffX > 0) {
            onSwipeLeft?.();
          } else {
            onSwipeRight?.();
          }
        }
      };

      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleGlobalMouseMove);
        document.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }
  }, [
    isSwiping,
    isDragging,
    onDrag,
    onDragEnd,
    onSwipeLeft,
    onSwipeRight,
    threshold,
    velocityThreshold,
    dragThreshold,
    updateVelocity,
  ]);

  return {
    onTouchStart: (e: React.TouchEvent) => {
      e.currentTarget.addEventListener("touchmove", (e) => e.preventDefault(), {
        passive: false,
      });
      onTouchStart(e);
    },
    onTouchMove,
    onTouchEnd,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
    isSwiping,
    isDragging,
  };
}
