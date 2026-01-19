import { useRef, useState } from "react";
import { useSwipe } from "@/hooks/useSwipe";

interface UseCardGesturesProps {
  isActive: boolean;
  isMobileDevice: boolean;
  cardRef: React.RefObject<HTMLDivElement>;
  onNext: () => void;
  onPrevious: () => void;
  onSwipeStart?: () => void;
  onSwipeEnd?: () => void;
}

export function useCardGestures({
  isActive,
  isMobileDevice,
  cardRef,
  onNext,
  onPrevious,
  onSwipeStart,
  onSwipeEnd,
}: UseCardGesturesProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHorizontalDrag, setIsHorizontalDrag] = useState(false);

  // Track initial drag position to determine swipe vs scroll intent
  const dragStartPos = useRef({ x: 0, y: 0 });

  // Animate card exit on swipe
  const animateSwipeExit = (direction: "left" | "right") => {
    if (!cardRef.current || !isMobileDevice) return;

    setIsAnimating(true);
    const exitDistance =
      direction === "left" ? -window.innerWidth : window.innerWidth;

    cardRef.current.style.transform = `translateX(${exitDistance}px) rotate(${
      direction === "left" ? -15 : 15
    }deg)`;
    cardRef.current.style.opacity = "0";

    setTimeout(() => {
      setIsAnimating(false);
      if (cardRef.current) {
        cardRef.current.style.transform = "";
        cardRef.current.style.opacity = "";
      }
    }, 300);
  };

  // Enhanced swipe handlers with better sensitivity control (mobile only)
  const swipeHandlers = useSwipe({
    onSwipeLeft: () => {
      if (!isActive || !isMobileDevice || !isHorizontalDrag) return;
      animateSwipeExit("left");
      setTimeout(onNext, 200);
    },
    onSwipeRight: () => {
      if (!isActive || !isMobileDevice || !isHorizontalDrag) return;
      animateSwipeExit("right");
      setTimeout(onPrevious, 200);
    },
    threshold: 150, // Increased threshold for less sensitivity
    onDragStart: () => {
      if (!isActive || !isMobileDevice) return;
      setIsDragging(true);
      setIsHorizontalDrag(false);
      dragStartPos.current = { x: 0, y: 0 };
      onSwipeStart?.();
    },
    onDragEnd: () => {
      if (!isMobileDevice) return;
      setIsDragging(false);
      setDragOffset({ x: 0, y: 0 });
      setIsHorizontalDrag(false);
      onSwipeEnd?.();
    },
    onDrag: (offset) => {
      if (!isActive || !cardRef.current || !isMobileDevice) return;

      // Determine if this is a horizontal swipe or vertical scroll
      const absX = Math.abs(offset.x);
      const absY = Math.abs(offset.y);

      // Only consider it a horizontal drag if X movement is significantly greater than Y
      // This prevents accidental swipes when trying to scroll long content
      if (absX > absY * 1.5 && absX > 30) {
        setIsHorizontalDrag(true);
        setDragOffset(offset);
      } else if (absY > absX) {
        // Mostly vertical movement - allow normal scrolling
        setIsHorizontalDrag(false);
        setDragOffset({ x: 0, y: 0 });
      }
    },
  });

  return {
    isDragging,
    dragOffset,
    isAnimating,
    isHorizontalDrag,
    swipeHandlers,
    animateSwipeExit,
  };
}
