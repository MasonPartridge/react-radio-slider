import React, { ReactNode, useState, useEffect } from "react";

export default function ReactRadioSlider(props: {
  value: number;
  onChange: (value: number) => void;
  radioOptions: ReactNode[];
  optionWidth: number;
  deselectedOpacity?: number;
  optionHeight?: number;
  max?: number;
  min?: number;
}) {
  const {
    value,
    onChange,
    radioOptions,
    optionWidth,
    max,
    min,
    optionHeight,
    deselectedOpacity,
  } = props;
  const [sliderPixelWidth, setSliderPixelWidth] = useState(0);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setSliderPixelWidth(optionWidth * radioOptions.length);
  }, [optionWidth, radioOptions.length]);

  useEffect(() => {
    setLocalValue(
      (value * sliderPixelWidth) / ((max ?? 100) - (min ?? 0)) + (min ?? 0)
    );
  }, [value, max, min, sliderPixelWidth]);

  function convertLocalValueToValue(input: number): number {
    const _min = min ?? 0;
    return ((input - _min) * ((max ?? 100) - _min)) / sliderPixelWidth;
  }

  function handleSliderChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    onChange(Math.round(convertLocalValueToValue(event.target.valueAsNumber)));
  }

  function handlesRadioOptionClick(index: number): void {
    onChange(
      Math.round(
        convertLocalValueToValue(index * optionWidth + optionWidth / 2)
      )
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        {radioOptions.map((radioOption, index) => {
          return (
            <div
              style={{
                width: optionWidth,
                height: optionHeight ?? "auto",
                overflow: "hidden",
                opacity:
                  localValue > optionWidth * (index + 1) ||
                  localValue < optionWidth * index
                    ? `${deselectedOpacity ?? "50"}%`
                    : "100%",
              }}
              key={index}
              onClick={() => {
                handlesRadioOptionClick(index);
              }}
            >
              {radioOption}
            </div>
          );
        })}
      </div>
      <input
        type="range"
        min="0"
        max={sliderPixelWidth}
        onChange={handleSliderChange}
        value={localValue}
        style={{ width: "100%" }}
      ></input>
    </div>
  );
}
