var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import './App.css';
import Speak from './Speak';
function App() {
    var _a = React.useState(""), speakInput = _a[0], setSpeakInput = _a[1];
    var handleOnChange = function (event) {
        setSpeakInput(event.target.value);
    };
    return (_jsx("div", __assign({ className: "App" }, { children: _jsxs("header", __assign({ className: "App-header" }, { children: [_jsx("input", { type: "text", value: speakInput, onChange: handleOnChange }, void 0), _jsx(Speak, __assign({ lang: "it" }, { children: speakInput }), void 0)] }), void 0) }), void 0));
}
export default App;
//# sourceMappingURL=App.js.map