import React from "react";
interface SliderProps {
    min: number;
    max: number;
    onChange: (value: number) => void;
    value?: number;
    thumb?: React.ReactNode;
    slider?: React.ReactNode;
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
