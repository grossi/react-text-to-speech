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
import './Speak.css';
var Speak = function (_a) {
    var children = _a.children, lang = _a.lang;
    var synth = window.speechSynthesis;
    var speak = function () {
        var utterThis = new SpeechSynthesisUtterance(children);
        if (lang) {
            synth.getVoices().find(function (l) {
                console.log("rawr", l, lang);
                if (l.lang.includes(lang)) {
                    utterThis.voice = l;
                    return true;
                }
                return false;
            });
        }
        synth.speak(utterThis);
    };
    return (_jsxs("div", __assign({ className: "App" }, { children: [_jsx("button", __assign({ className: "Speak-button", onClick: function () { speak(); } }, { children: "\u25B6\uFE0F" }), void 0), _jsx("p", { children: children }, void 0)] }), void 0));
};
export default Speak;
//# sourceMappingURL=Speak.js.map