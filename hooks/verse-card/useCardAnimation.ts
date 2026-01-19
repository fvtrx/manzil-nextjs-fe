interface UseCardAnimationProps {
  isActive: boolean;
  stackIndex: number;
  isMobileDevice: boolean;
  isDragging: boolean;
  dragOffset: { x: number; y: number };
  isHorizontalDrag: boolean;
}

export function useCardAnimation({
  isActive,
  stackIndex,
  isMobileDevice,
  isDragging,
  dragOffset,
  isHorizontalDrag,
}: UseCardAnimationProps) {
  // Calculate transform based on stack position and drag state (mobile only for drag)
  const getCardTransform = () => {
    // For desktop, only show stacking effect if enabled
    if (!isMobileDevice) {
      if (!isActive && stackIndex > 2) {
        return "scale(0) translateY(100px)";
      }
      const baseScale = isActive ? 1 : 1 - stackIndex * 0.03;
      const baseTranslateY = isActive ? 0 : stackIndex * -5;
      return `translateY(${baseTranslateY}px) scale(${baseScale})`;
    }

    // Mobile: Full stacking with drag support
    if (!isActive && stackIndex > 2) {
      return "scale(0) translateY(100px)";
    }

    const baseScale = isActive ? 1 : 1 - stackIndex * 0.05;
    const baseTranslateY = isActive ? 0 : stackIndex * -8;
    const baseTranslateX = isActive ? 0 : 0;

    // Apply drag offset only to active card on mobile and only for horizontal drags
    const dragX =
      isActive && isMobileDevice && isHorizontalDrag ? dragOffset.x : 0;
    const dragY =
      isActive && isMobileDevice && isHorizontalDrag ? dragOffset.y : 0;

    // Add rotation based on drag for more natural feel (mobile only)
    const rotation =
      isActive && isMobileDevice && isHorizontalDrag ? dragOffset.x * 0.1 : 0;

    return `translateX(${baseTranslateX + dragX}px) translateY(${
      baseTranslateY + dragY
    }px) scale(${baseScale}) rotate(${rotation}deg)`;
  };

  // Calculate opacity based on drag distance (mobile only)
  const getCardOpacity = () => {
    if (!isActive) {
      return Math.max(0.4, 1 - stackIndex * 0.2);
    }

    // Only apply drag opacity on mobile for horizontal drags
    if (isDragging && isMobileDevice && isHorizontalDrag) {
      const maxDrag = 200;
      const opacity = 1 - (Math.abs(dragOffset.x) / maxDrag) * 0.3;
      return Math.max(0.7, opacity);
    }

    return 1;
  };

  // Calculate z-index for proper stacking
  const getZIndex = () => {
    return isActive ? 50 : Math.max(0, 10 - stackIndex);
  };

  return {
    getCardTransform,
    getCardOpacity,
    getZIndex,
  };
}
