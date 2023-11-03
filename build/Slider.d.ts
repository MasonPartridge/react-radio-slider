import React from "react";
interface SliderProps {
    min: number;
    max: number;
    onChange: (value: number) => void;
    value?: number;
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
