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
    const { value, onChange, radioOptions, optionWidth, max, min, optionHeight, deselectedOpacity, gap, } = props;
    const [sliderPixelWidth, setSliderPixelWidth] = (0, react_1.useState)(0);
    const [localValue, setLocalValue] = (0, react_1.useState)(value);
    const [localOptionWidthAndMargin, setLocalOptionWidthAndMargin] = (0, react_1.useState)(optionWidth);
    const [optionsMargin, setOptionsMargin] = (0, react_1.useState)(0);
    const sliderRef = (0, react_1.useRef)(null);
    const handleSliderSizeChange = (0, react_1.useCallback)(() => {
        var _a, _b;
        const newSliderPixelWidth = (_b = (_a = sliderRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0;
        console.log(newSliderPixelWidth);
        setSliderPixelWidth(newSliderPixelWidth);
        setLocalOptionWidthAndMargin(newSliderPixelWidth / radioOptions.length);
        setOptionsMargin((newSliderPixelWidth - radioOptions.length * optionWidth) /
            (radioOptions.length - 1));
    }, [sliderRef, radioOptions, optionWidth]);
    (0, react_1.useEffect)(() => {
        window.addEventListener("resize", handleSliderSizeChange);
        return () => {
            window.removeEventListener("resize", handleSliderSizeChange);
        };
    }, [handleSliderSizeChange]);
    (0, react_1.useEffect)(() => {
        handleSliderSizeChange();
    }, [handleSliderSizeChange]);
    (0, react_1.useEffect)(() => {
        setLocalValue((value * sliderPixelWidth) / ((max !== null && max !== void 0 ? max : 100) - (min !== null && min !== void 0 ? min : 0)) + (min !== null && min !== void 0 ? min : 0));
    }, [value, max, min, sliderPixelWidth]);
    function convertLocalValueToValue(input) {
        const _min = min !== null && min !== void 0 ? min : 0;
        return ((input - _min) * ((max !== null && max !== void 0 ? max : 100) - _min)) / sliderPixelWidth;
    }
    function handleSliderChange(event) {
        onChange(convertLocalValueToValue(event.target.valueAsNumber));
    }
    function handleRadioOptionClick(index) {
        onChange(convertLocalValueToValue(index * optionWidth + index * optionsMargin + optionWidth / 2));
        console.log("sliderPixelWidth:", sliderPixelWidth);
        console.log("index:", index);
        console.log("optionWidth:", optionWidth);
        console.log("optionsMargin:", optionsMargin);
        console.log("optionWidth / 2:", optionWidth / 2);
        console.log("index * optionWidth:", index * optionWidth);
        console.log("localValue:", index * optionWidth + index * optionsMargin + optionWidth / 2);
        console.log("convertLocalValueToValue:", convertLocalValueToValue(index * optionWidth + index * optionsMargin + optionWidth / 2));
    }
    return (react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", width: "100%", gap: gap !== null && gap !== void 0 ? gap : 0 } },
        react_1.default.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, radioOptions.map((radioOption, index) => {
            return (react_1.default.createElement("div", { style: {
                    width: optionWidth,
                    height: optionHeight !== null && optionHeight !== void 0 ? optionHeight : "auto",
                    overflow: "hidden",
                    opacity: localValue > localOptionWidthAndMargin * (index + 1) ||
                        localValue < localOptionWidthAndMargin * index
                        ? `${deselectedOpacity !== null && deselectedOpacity !== void 0 ? deselectedOpacity : "50"}%`
                        : "100%",
                }, key: index, onClick: () => {
                    handleRadioOptionClick(index);
                } }, radioOption));
        })),
        react_1.default.createElement("input", { type: "range", min: "0", max: sliderPixelWidth, onChange: handleSliderChange, value: localValue, style: { width: "100%" }, ref: sliderRef })));
}
exports.default = ReactRadioSlider;
//# sourceMappingURL=ReactRadioSlider.js.map