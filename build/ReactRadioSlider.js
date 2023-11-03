"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Slider_1 = __importDefault(require("./Slider"));
const Radio_1 = __importDefault(require("./Radio"));
function ReactRadioSlider(props) {
    const { value, onChange, radioOptions, optionWidth, max, min, optionHeight, deselectedOpacity, gap, } = props;
    const handleSliderChange = (newValue) => {
        console.log("slider value: ", newValue);
        onChange(newValue);
    };
    const handleRadioChange = (newValue) => {
        console.log("radio value: ", newValue);
        onChange(newValue);
    };
    return (react_1.default.createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: gap !== null && gap !== void 0 ? gap : 0,
        } },
        react_1.default.createElement(Radio_1.default, { radioOptions: radioOptions, optionWidth: optionWidth, onChange: handleRadioChange, min: min !== null && min !== void 0 ? min : 0, max: max !== null && max !== void 0 ? max : 100, value: value, deselectedOpacity: deselectedOpacity, optionHeight: optionHeight }),
        react_1.default.createElement(Slider_1.default, { min: min !== null && min !== void 0 ? min : 0, max: max !== null && max !== void 0 ? max : 100, onChange: handleSliderChange, value: value })));
}
exports.default = ReactRadioSlider;
//# sourceMappingURL=ReactRadioSlider.js.map