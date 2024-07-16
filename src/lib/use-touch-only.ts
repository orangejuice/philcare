import {MouseEvent, TouchEvent, useCallback, useState} from "react"

interface TouchPosition {
  x: number;
  y: number;
}

interface UseTouchOnlyOptions {
  onTouchOnly: (event: TouchEvent) => void;
  threshold?: number;
  preventDefault?: boolean;
}

const useTouchOnly = ({
  onTouchOnly,
  threshold = 10,
  preventDefault = true
}: UseTouchOnlyOptions) => {
  const [touchStart, setTouchStart] = useState<TouchPosition>({x: 0, y: 0})
  const [isTouching, setIsTouching] = useState(false)

  const handleTouchStart = useCallback((event: TouchEvent) => {
    const touch = event.touches[0]
    setTouchStart({x: touch.clientX, y: touch.clientY})
    setIsTouching(true)
  }, [])

  const handleTouchMove = useCallback(() => {
    setIsTouching(false)
  }, [])

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    if (!isTouching) return

    const touch = event.changedTouches[0]
    const touchEnd = {x: touch.clientX, y: touch.clientY}
    const distanceX = Math.abs(touchEnd.x - touchStart.x)
    const distanceY = Math.abs(touchEnd.y - touchStart.y)

    if (distanceX < threshold && distanceY < threshold) {
      onTouchOnly(event)
    }

    setIsTouching(false)
  }, [touchStart, onTouchOnly, threshold, isTouching])

  const handleClick = useCallback((event: MouseEvent) => {
    if (preventDefault) {
      event.preventDefault()
    }
  }, [preventDefault])

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onClick: handleClick
  }
}

export default useTouchOnly
