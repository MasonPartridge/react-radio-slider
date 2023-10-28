import React, { ReactNode } from "react";
interface ReactRadioSliderProps {
    value: number;
    onChange: (value: number) => void;
    radioOptions: ReactNode[];
    optionWidth: number;
    deselectedOpacity?: number;
    optionHeight?: number;
    max?: number;
    min?: number;
}
export default function ReactRadioSlider(props: ReactRadioSliderProps): React.JSX.Element;
export {};
