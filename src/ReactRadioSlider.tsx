import React, {
  ReactNode,
} from "react";
import Slider from './Slider';
import Radio from "./Radio";

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
  thumb?: ReactNode;
  slider?: ReactNode;
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
    thumb,
    slider,
  } = props;

  const handleSliderChange = (newValue: number) => {
    console.log("slider value: ", newValue);
    onChange(newValue);
  };

  const handleRadioChange = (newValue: number) => {
    console.log("radio value: ", newValue);

    onChange(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: gap ?? 0,
      }}
    >
      <Radio
        radioOptions={radioOptions}
        optionWidth={optionWidth}
        onChange={handleRadioChange}
        min={min ?? 0}
        max={max ?? 100}
        value={value}
        deselectedOpacity={deselectedOpacity}
        optionHeight={optionHeight}
      />
      <Slider
        min={min ?? 0}
        max={max ?? 100}
        onChange={handleSliderChange}
        value={value}
        thumb={thumb}
        slider={slider}
      />
    </div>
  );
}
