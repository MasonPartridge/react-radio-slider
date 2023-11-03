import React, { ReactNode } from "react";
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
declare const Radio: React.FC<RadioProps>;
export default Radio;
