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
const Slider = ({ min, max, onChange, value: propValue, }) => {
    const [value, setValue] = (0, react_1.useState)(propValue !== null && propValue !== void 0 ? propValue : min);
    const sliderRef = (0, react_1.useRef)(null);
    const thumbRef = (0, react_1.useRef)(null);
    const [dragging, setDragging] = (0, react_1.useState)(false);
    const calculateValue = (0, react_1.useCallback)((clientX) => {
        if (sliderRef.current) {
            const { left, width } = sliderRef.current.getBoundingClientRect();
            const ratio = Math.min(Math.max((clientX - left) / width, 0), 1);
            return min + ratio * (max - min);
        }
        return min;
    }, [max, min]);
    (0, react_1.useEffect)(() => {
        if (propValue !== undefined) {
            setValue(propValue);
        }
    }, [propValue]);
    const handleDrag = (0, react_1.useCallback)((clientX) => {
        const newValue = calculateValue(clientX);
        if (propValue === undefined) {
            setValue(newValue);
        }
        onChange(newValue);
    }, [calculateValue, onChange, propValue]);
    const handleInteractionStart = (0, react_1.useCallback)((clientX) => {
        setDragging(true);
        handleDrag(clientX);
    }, [handleDrag]);
    const handleMouseDown = (e) => {
        handleInteractionStart(e.clientX);
    };
    const handleTouchStart = (e) => {
        handleInteractionStart(e.touches[0].clientX);
        e.preventDefault();
    };
    (0, react_1.useEffect)(() => {
        const handleMouseMove = (e) => {
            if (dragging) {
                handleDrag(e.clientX);
            }
        };
        const handleTouchMove = (e) => {
            if (dragging) {
                handleDrag(e.touches[0].clientX);
                e.preventDefault();
            }
        };
        const handleInteractionEnd = () => {
            setDragging(false);
        };
        if (dragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleInteractionEnd);
            window.addEventListener("touchmove", handleTouchMove, { passive: false });
            window.addEventListener("touchend", handleInteractionEnd);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleInteractionEnd);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleInteractionEnd);
        };
    }, [dragging, handleDrag]);
    (0, react_1.useEffect)(() => {
        if (thumbRef.current) {
            const percentage = ((value - min) / (max - min)) * 100;
            thumbRef.current.style.left = `${percentage}%`;
        }
    }, [value, min, max]);
    return (react_1.default.createElement("div", { ref: sliderRef, style: {
            position: "relative",
            height: "5px",
            background: "#ddd",
            borderRadius: "5px",
            cursor: "pointer",
        }, onMouseDown: handleMouseDown, onTouchStart: handleTouchStart },
        react_1.default.createElement("div", { ref: thumbRef, style: {
                position: "absolute",
                top: "-7px",
                left: `${((value - min) / (max - min)) * 100}%`,
                width: "20px",
                height: "20px",
                background: "#333",
                borderRadius: "50%",
                cursor: "grab",
                transform: "translate(-50%)",
            } })));
};
exports.default = Slider;
//# sourceMappingURL=Slider.js.map