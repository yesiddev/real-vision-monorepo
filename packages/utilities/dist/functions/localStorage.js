"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearLocalStorage = exports.persistLocalStorage = void 0;
const persistLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify({ ...value }));
};
exports.persistLocalStorage = persistLocalStorage;
const clearLocalStorage = (key) => {
    localStorage.removeItem(key);
};
exports.clearLocalStorage = clearLocalStorage;
//# sourceMappingURL=localStorage.js.map