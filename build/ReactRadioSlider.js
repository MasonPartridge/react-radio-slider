"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function ReactRadioSlider(props) {
    const { value, onChange, radioOptions, optionWidth, max, min, optionHeight, deselectedOpacity, } = props;
    const [sliderPixelWidth, setSliderPixelWidth] = (0, react_1.useState)(0);
    const [localValue, setLocalValue] = (0, react_1.useState)(value);
    (0, react_1.useEffect)(() => {
        setSliderPixelWidth(optionWidth * radioOptions.length);
    }, [optionWidth, radioOptions.length]);
    (0, react_1.useEffect)(() => {
        setLocalValue((value * sliderPixelWidth) / ((max !== null && max !== void 0 ? max : 100) - (min !== null && min !== void 0 ? min : 0)) + (min !== null && min !== void 0 ? min : 0));
    }, [value, max, min, sliderPixelWidth]);
    function convertLocalValueToValue(input) {
        const _min = min !== null && min !== void 0 ? min : 0;
        return ((input - _min) * ((max !== null && max !== void 0 ? max : 100) - _min)) / sliderPixelWidth;
    }
    function handleSliderChange(event) {
        onChange(Math.round(convertLocalValueToValue(event.target.valueAsNumber)));
    }
    function handlesRadioOptionClick(index) {
        onChange(Math.round(convertLocalValueToValue(index * optionWidth + optionWidth / 2)));
    }
    return (react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column" } },
        react_1.default.createElement("div", { style: { display: "flex" } }, radioOptions.map((radioOption, index) => {
            return (react_1.default.createElement("div", { style: {
                    width: optionWidth,
                    height: optionHeight !== null && optionHeight !== void 0 ? optionHeight : "auto",
                    overflow: "hidden",
                    opacity: localValue > optionWidth * (index + 1) ||
                        localValue < optionWidth * index
                        ? `${deselectedOpacity !== null && deselectedOpacity !== void 0 ? deselectedOpacity : "50"}%`
                        : "100%",
                }, key: index, onClick: () => {
                    handlesRadioOptionClick(index);
                } }, radioOption));
        })),
        react_1.default.createElement("input", { type: "range", min: "0", max: sliderPixelWidth, onChange: handleSliderChange, value: localValue, style: { width: "100%" } })));
}
exports.default = ReactRadioSlider;
//# sourceMappingURL=ReactRadioSlider.js.map