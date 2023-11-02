import React, {
  ReactNode,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

interface ReactRadioSliderProps {
  value: number;
  onChange: (value: number) => void;
  radioOptions: ReactNode[];
  optionWidth: number;
  deselectedOpacity?: number;
  optionHeight?: number;
  max?: number;
  min?: number;
  gap?: number;
}

export default function ReactRadioSlider(props: ReactRadioSliderProps) {
  const {
    value,
    onChange,
    radioOptions,
    optionWidth,
    max,
    min,
    optionHeight,
    deselectedOpacity,
    gap,
  } = props;
  const [sliderPixelWidth, setSliderPixelWidth] = useState(0);
  const [localValue, setLocalValue] = useState(value);
  const [localOptionWidthAndMargin, setLocalOptionWidthAndMargin] = useState(optionWidth);
  const [optionsMargin, setOptionsMargin] = useState(0);
  const sliderRef = useRef<HTMLInputElement>(null);

  const handleSliderSizeChange = useCallback(() => {
    const newSliderPixelWidth = sliderRef.current?.clientWidth ?? 0;
    console.log(newSliderPixelWidth);
    setSliderPixelWidth(newSliderPixelWidth);
    setLocalOptionWidthAndMargin(newSliderPixelWidth / radioOptions.length);
    setOptionsMargin(
      (newSliderPixelWidth - radioOptions.length * optionWidth) /
        (radioOptions.length - 1)
    );
  }, [sliderRef, radioOptions, optionWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleSliderSizeChange);
    return () => {
      window.removeEventListener("resize", handleSliderSizeChange);
    };
  }, [handleSliderSizeChange]);

  useEffect(() => {
    handleSliderSizeChange();
  }, [handleSliderSizeChange]);

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
    onChange(convertLocalValueToValue(event.target.valueAsNumber));
  }

  function handleRadioOptionClick(index: number): void {
    onChange(
        convertLocalValueToValue(
          index * optionWidth + index * optionsMargin + optionWidth / 2
        )
    );
    console.log("sliderPixelWidth:", sliderPixelWidth)
    console.log("index:", index)
    console.log("optionWidth:", optionWidth)
    console.log("optionsMargin:", optionsMargin)
    console.log("optionWidth / 2:", optionWidth / 2)
    console.log("index * optionWidth:", index * optionWidth)
    console.log("localValue:", index * optionWidth + index * optionsMargin + optionWidth / 2)
    console.log("convertLocalValueToValue:", convertLocalValueToValue(index * optionWidth + index * optionsMargin + optionWidth / 2))
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: gap ?? 0}}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {radioOptions.map((radioOption, index) => {
          return (
            <div
              style={{
                width: optionWidth,
                height: optionHeight ?? "auto",
                overflow: "hidden",
                opacity:
                  localValue > localOptionWidthAndMargin * (index + 1) ||
                  localValue < localOptionWidthAndMargin * index
                    ? `${deselectedOpacity ?? "50"}%`
                    : "100%",
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
      <input
        type="range"
        min="0"
        max={sliderPixelWidth}
        onChange={handleSliderChange}
        value={localValue}
        style={{ width: "100%" }}
        ref={sliderRef}
      ></input>
    </div>
  );
}
