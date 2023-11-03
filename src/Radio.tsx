import React, { useState, useEffect, ReactNode, useRef } from "react";

interface RadioProps {
  radioOptions: ReactNode[];
  optionWidth: number;
  deselectedOpacity?: number;
  optionHeight?: number;
  max?: number;
  min?: number;
  gap?: number;
  onChange?: (value: number) => void;
  value?: number;
}

const Radio: React.FC<RadioProps> = ({
  radioOptions,
  optionWidth,
  optionHeight,
  deselectedOpacity,
  max,
  min,
  value: propValue,
  onChange,
}) => {
  const [value, setValue] = useState(0);
  const [radioWidth, setRadioWidth] = useState(0);
  const [optionGap, setOptionGap] = useState(0);
  const radioRef = useRef<HTMLInputElement>(null);

  function handleRadioOptionClick(index: number): void {
    const newValue =
      (max ?? 100) *
      ((index * optionWidth + index * optionGap + optionWidth / 2) /
        radioWidth);
    if (onChange) {
      onChange(newValue);
      return;
    }
    setValue(newValue);
  }

  useEffect(() => {
    const handleResize = () => {
      const newRadioWidth = radioRef.current?.clientWidth ?? 0;
      setRadioWidth(newRadioWidth);
      setOptionGap(
        (radioWidth - radioOptions.length * optionWidth) /
          (radioOptions.length - 1)
      );
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [optionWidth, radioOptions.length, radioRef, radioWidth]);

  function determindOpacity(index: number) {
    console.log("value: ", value, " index: ", index, " opacityEquation: ", ((index + 1) * optionWidth + index * optionGap + optionGap / 2) /
    radioWidth, " lower Opacity Equation: ", ((index) * optionWidth + index * optionGap - optionGap / 2) /
    radioWidth);
    if (
        (propValue ?? value) / (max ?? 100) >
        ((index + 1) * optionWidth + index * optionGap + optionGap / 2) /
          radioWidth ||
          (propValue ?? value) / (max ?? 100) <
        ((index) * optionWidth + index * optionGap - optionGap / 2) /
          radioWidth
    ) {
      return `${deselectedOpacity ?? "50"}%`;
    }
    return "100%";
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between" }}
      ref={radioRef}
    >
      {radioOptions.map((radioOption, index) => {
        return (
          <div
            style={{
              width: optionWidth,
              height: optionHeight ?? "auto",
              overflow: "hidden",
              opacity: determindOpacity(index),
            }}
            key={index}
            onClick={() => {
              handleRadioOptionClick(index);
            }}
          >
            {radioOption}
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
