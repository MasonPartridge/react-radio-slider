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
const Radio = ({ radioOptions, optionWidth, optionHeight, deselectedOpacity, max, min, value: propValue, onChange, }) => {
    const [value, setValue] = (0, react_1.useState)(0);
    const [radioWidth, setRadioWidth] = (0, react_1.useState)(0);
    const [optionGap, setOptionGap] = (0, react_1.useState)(0);
    const radioRef = (0, react_1.useRef)(null);
    function handleRadioOptionClick(index) {
        const newValue = (max !== null && max !== void 0 ? max : 100) *
            ((index * optionWidth + index * optionGap + optionWidth / 2) /
                radioWidth);
        if (onChange) {
            onChange(newValue);
            return;
        }
        setValue(newValue);
    }
    (0, react_1.useEffect)(() => {
        const handleResize = () => {
            var _a, _b;
            const newRadioWidth = (_b = (_a = radioRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0;
            setRadioWidth(newRadioWidth);
            setOptionGap((radioWidth - radioOptions.length * optionWidth) /
                (radioOptions.length - 1));
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [optionWidth, radioOptions.length, radioRef, radioWidth]);
    function determindOpacity(index) {
        console.log("value: ", value, " index: ", index, " opacityEquation: ", ((index + 1) * optionWidth + index * optionGap + optionGap / 2) /
            radioWidth, " lower Opacity Equation: ", ((index) * optionWidth + index * optionGap - optionGap / 2) /
            radioWidth);
        if ((propValue !== null && propValue !== void 0 ? propValue : value) / (max !== null && max !== void 0 ? max : 100) >
            ((index + 1) * optionWidth + index * optionGap + optionGap / 2) /
                radioWidth ||
            (propValue !== null && propValue !== void 0 ? propValue : value) / (max !== null && max !== void 0 ? max : 100) <
                ((index) * optionWidth + index * optionGap - optionGap / 2) /
                    radioWidth) {
            return `${deselectedOpacity !== null && deselectedOpacity !== void 0 ? deselectedOpacity : "50"}%`;
        }
        return "100%";
    }
    return (react_1.default.createElement("div", { style: { display: "flex", justifyContent: "space-between" }, ref: radioRef }, radioOptions.map((radioOption, index) => {
        return (react_1.default.createElement("div", { style: {
                width: optionWidth,
                height: optionHeight !== null && optionHeight !== void 0 ? optionHeight : "auto",
                overflow: "hidden",
                opacity: determindOpacity(index),
            }, key: index, onClick: () => {
                handleRadioOptionClick(index);
            } }, radioOption));
    })));
};
exports.default = Radio;
//# sourceMappingURL=Radio.js.map