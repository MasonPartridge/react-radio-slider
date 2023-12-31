import React, { useState, useEffect, useRef, useCallback } from "react";

interface SliderProps {
  min: number;
  max: number;
  onChange: (value: number) => void;
  value?: number;
  thumb?: React.ReactNode;
  slider?: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  onChange,
  value: propValue,
  thumb,
  slider,
}) => {
  const [value, setValue] = useState<number>(propValue ?? min);
  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<boolean>(false);

  const calculateValue = useCallback(
    (clientX: number) => {
      if (sliderRef.current) {
        const { left, width } = sliderRef.current.getBoundingClientRect();
        const ratio = Math.min(Math.max((clientX - left) / width, 0), 1);
        return min + ratio * (max - min);
      }
      return min;
    },
    [max, min]
  );

  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  const handleDrag = useCallback(
    (clientX: number) => {
      const newValue = calculateValue(clientX);
      if (propValue === undefined) {
        setValue(newValue);
      }
      onChange(newValue);
    },
    [calculateValue, onChange, propValue]
  );

  const handleInteractionStart = useCallback(
    (clientX: number) => {
      setDragging(true);
      handleDrag(clientX);
    },
    [handleDrag]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleInteractionStart(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleInteractionStart(e.touches[0].clientX);
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging) {
        handleDrag(e.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (dragging) {
        handleDrag(e.touches[0].clientX);
        e.preventDefault();
      }
    };

    const handleInteractionEnd = () => {
      setDragging(false);
    };

    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleInteractionEnd);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleInteractionEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleInteractionEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleInteractionEnd);
    };
  }, [dragging, handleDrag]);

  useEffect(() => {
    if (thumbRef.current) {
      const percentage = ((value - min) / (max - min)) * 100;
      thumbRef.current.style.left = `${percentage}%`;
    }
  }, [value, min, max]);

  return (
    <div
      ref={sliderRef}
      style={{
        position: "relative",
        height: "5px",
        background: "#ddd",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div
        ref={thumbRef}
        style={{
          position: "absolute",
          left: `${((value - min) / (max - min)) * 100}%`,
          zIndex: 1,
        }}
      >
        {thumb ?? (
          <div
            style={{
              position: "absolute",
              top: "-12px",
              width: "30px",
              height: "30px",
              background: "#333",
              borderRadius: "50%",
              transform: "translate(-50%)",
              cursor: "grab",
            }}
          />
        )}
      </div>
      {slider ?? (
        <div
          style={{
            position: "absolute",
            top: "-5px",
            left: "0",
            width: "100%",
            height: "15px",
            background: "transparent",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        />
      )}
    </div>
  );
};

export default Slider;
