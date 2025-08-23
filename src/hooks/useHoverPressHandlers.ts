export function useHoverPressHandlers<T extends HTMLElement>(
  apply: (el: T) => void,
  revert: (el: T) => void
) {
  const onPointerEnter = (e: React.PointerEvent<T>) => {
    if (e.pointerType === 'mouse') {
      apply(e.currentTarget);
    }
  };

  const onPointerLeave = (e: React.PointerEvent<T>) => {
    if (e.pointerType === 'mouse') {
      revert(e.currentTarget);
    }
  };

  const onPointerDown = (e: React.PointerEvent<T>) => {
    apply(e.currentTarget);
  };

  const onPointerUp = (e: React.PointerEvent<T>) => {
    revert(e.currentTarget);
  };

  const onPointerCancel = (e: React.PointerEvent<T>) => {
    revert(e.currentTarget);
  };

  return {
    onPointerEnter,
    onPointerLeave,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  } as const;
}
