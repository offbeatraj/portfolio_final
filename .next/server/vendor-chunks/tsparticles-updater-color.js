"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-updater-color";
exports.ids = ["vendor-chunks/tsparticles-updater-color"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-updater-color/esm/ColorUpdater.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles-updater-color/esm/ColorUpdater.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ColorUpdater: () => (/* binding */ ColorUpdater)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/ColorUtils.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-updater-color/esm/Utils.js\");\n\n\nclass ColorUpdater {\n    constructor(container) {\n        this.container = container;\n    }\n    init(particle) {\n        const hslColor = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.rangeColorToHsl)(particle.options.color, particle.id, particle.options.reduceDuplicates);\n        if (hslColor) {\n            particle.color = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getHslAnimationFromHsl)(hslColor, particle.options.color.animation, this.container.retina.reduceFactor);\n        }\n    }\n    isEnabled(particle) {\n        const { h: hAnimation, s: sAnimation, l: lAnimation } = particle.options.color.animation, { color } = particle;\n        return (!particle.destroyed &&\n            !particle.spawning &&\n            ((color?.h.value !== undefined && hAnimation.enable) ||\n                (color?.s.value !== undefined && sAnimation.enable) ||\n                (color?.l.value !== undefined && lAnimation.enable)));\n    }\n    update(particle, delta) {\n        (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.updateColor)(particle, delta);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1jb2xvci9lc20vQ29sb3JVcGRhdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4RTtBQUN4QztBQUMvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1FQUFlO0FBQ3hDO0FBQ0EsNkJBQTZCLDBFQUFzQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQThDLHNDQUFzQyxRQUFRO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBVztBQUNuQjtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvcmFqYmVoZXJhL0Rvd25sb2Fkcy9yYWplbmRyYS1wb3J0Zm9saW8tZmluYWwtZml4ZWQvbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItY29sb3IvZXNtL0NvbG9yVXBkYXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRIc2xBbmltYXRpb25Gcm9tSHNsLCByYW5nZUNvbG9yVG9Ic2wsIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuaW1wb3J0IHsgdXBkYXRlQ29sb3IgfSBmcm9tIFwiLi9VdGlsc1wiO1xuZXhwb3J0IGNsYXNzIENvbG9yVXBkYXRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH1cbiAgICBpbml0KHBhcnRpY2xlKSB7XG4gICAgICAgIGNvbnN0IGhzbENvbG9yID0gcmFuZ2VDb2xvclRvSHNsKHBhcnRpY2xlLm9wdGlvbnMuY29sb3IsIHBhcnRpY2xlLmlkLCBwYXJ0aWNsZS5vcHRpb25zLnJlZHVjZUR1cGxpY2F0ZXMpO1xuICAgICAgICBpZiAoaHNsQ29sb3IpIHtcbiAgICAgICAgICAgIHBhcnRpY2xlLmNvbG9yID0gZ2V0SHNsQW5pbWF0aW9uRnJvbUhzbChoc2xDb2xvciwgcGFydGljbGUub3B0aW9ucy5jb2xvci5hbmltYXRpb24sIHRoaXMuY29udGFpbmVyLnJldGluYS5yZWR1Y2VGYWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzRW5hYmxlZChwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCB7IGg6IGhBbmltYXRpb24sIHM6IHNBbmltYXRpb24sIGw6IGxBbmltYXRpb24gfSA9IHBhcnRpY2xlLm9wdGlvbnMuY29sb3IuYW5pbWF0aW9uLCB7IGNvbG9yIH0gPSBwYXJ0aWNsZTtcbiAgICAgICAgcmV0dXJuICghcGFydGljbGUuZGVzdHJveWVkICYmXG4gICAgICAgICAgICAhcGFydGljbGUuc3Bhd25pbmcgJiZcbiAgICAgICAgICAgICgoY29sb3I/LmgudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBoQW5pbWF0aW9uLmVuYWJsZSkgfHxcbiAgICAgICAgICAgICAgICAoY29sb3I/LnMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBzQW5pbWF0aW9uLmVuYWJsZSkgfHxcbiAgICAgICAgICAgICAgICAoY29sb3I/LmwudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBsQW5pbWF0aW9uLmVuYWJsZSkpKTtcbiAgICB9XG4gICAgdXBkYXRlKHBhcnRpY2xlLCBkZWx0YSkge1xuICAgICAgICB1cGRhdGVDb2xvcihwYXJ0aWNsZSwgZGVsdGEpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-color/esm/ColorUpdater.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-color/esm/Utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/tsparticles-updater-color/esm/Utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateColor: () => (/* binding */ updateColor)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nfunction updateColorValue(delta, colorValue, valueAnimation, max, decrease) {\n    if (!colorValue ||\n        !valueAnimation.enable ||\n        ((colorValue.maxLoops ?? 0) > 0 && (colorValue.loops ?? 0) > (colorValue.maxLoops ?? 0))) {\n        return;\n    }\n    if (!colorValue.time) {\n        colorValue.time = 0;\n    }\n    if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {\n        colorValue.time += delta.value;\n    }\n    if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {\n        return;\n    }\n    const offset = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.randomInRange)(valueAnimation.offset), velocity = (colorValue.velocity ?? 0) * delta.factor + offset * 3.6, decay = colorValue.decay ?? 1;\n    if (!decrease || colorValue.status === \"increasing\") {\n        colorValue.value += velocity;\n        if (colorValue.value > max) {\n            if (!colorValue.loops) {\n                colorValue.loops = 0;\n            }\n            colorValue.loops++;\n            if (decrease) {\n                colorValue.status = \"decreasing\";\n                colorValue.value -= colorValue.value % max;\n            }\n        }\n    }\n    else {\n        colorValue.value -= velocity;\n        if (colorValue.value < 0) {\n            if (!colorValue.loops) {\n                colorValue.loops = 0;\n            }\n            colorValue.loops++;\n            colorValue.status = \"increasing\";\n            colorValue.value += colorValue.value;\n        }\n    }\n    if (colorValue.velocity && decay !== 1) {\n        colorValue.velocity *= decay;\n    }\n    if (colorValue.value > max) {\n        colorValue.value %= max;\n    }\n}\nfunction updateColor(particle, delta) {\n    const { h: hAnimation, s: sAnimation, l: lAnimation } = particle.options.color.animation, { color } = particle;\n    if (!color) {\n        return;\n    }\n    const { h, s, l } = color;\n    if (h) {\n        updateColorValue(delta, h, hAnimation, 360, false);\n    }\n    if (s) {\n        updateColorValue(delta, s, sAnimation, 100, true);\n    }\n    if (l) {\n        updateColorValue(delta, l, lAnimation, 100, true);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1jb2xvci9lc20vVXRpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlFQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxZQUFZLDhDQUE4QyxzQ0FBc0MsUUFBUTtBQUN4RztBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWpiZWhlcmEvRG93bmxvYWRzL3JhamVuZHJhLXBvcnRmb2xpby1maW5hbC1maXhlZC9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1jb2xvci9lc20vVXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmFuZG9tSW5SYW5nZSwgfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5mdW5jdGlvbiB1cGRhdGVDb2xvclZhbHVlKGRlbHRhLCBjb2xvclZhbHVlLCB2YWx1ZUFuaW1hdGlvbiwgbWF4LCBkZWNyZWFzZSkge1xuICAgIGlmICghY29sb3JWYWx1ZSB8fFxuICAgICAgICAhdmFsdWVBbmltYXRpb24uZW5hYmxlIHx8XG4gICAgICAgICgoY29sb3JWYWx1ZS5tYXhMb29wcyA/PyAwKSA+IDAgJiYgKGNvbG9yVmFsdWUubG9vcHMgPz8gMCkgPiAoY29sb3JWYWx1ZS5tYXhMb29wcyA/PyAwKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWNvbG9yVmFsdWUudGltZSkge1xuICAgICAgICBjb2xvclZhbHVlLnRpbWUgPSAwO1xuICAgIH1cbiAgICBpZiAoKGNvbG9yVmFsdWUuZGVsYXlUaW1lID8/IDApID4gMCAmJiBjb2xvclZhbHVlLnRpbWUgPCAoY29sb3JWYWx1ZS5kZWxheVRpbWUgPz8gMCkpIHtcbiAgICAgICAgY29sb3JWYWx1ZS50aW1lICs9IGRlbHRhLnZhbHVlO1xuICAgIH1cbiAgICBpZiAoKGNvbG9yVmFsdWUuZGVsYXlUaW1lID8/IDApID4gMCAmJiBjb2xvclZhbHVlLnRpbWUgPCAoY29sb3JWYWx1ZS5kZWxheVRpbWUgPz8gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvZmZzZXQgPSByYW5kb21JblJhbmdlKHZhbHVlQW5pbWF0aW9uLm9mZnNldCksIHZlbG9jaXR5ID0gKGNvbG9yVmFsdWUudmVsb2NpdHkgPz8gMCkgKiBkZWx0YS5mYWN0b3IgKyBvZmZzZXQgKiAzLjYsIGRlY2F5ID0gY29sb3JWYWx1ZS5kZWNheSA/PyAxO1xuICAgIGlmICghZGVjcmVhc2UgfHwgY29sb3JWYWx1ZS5zdGF0dXMgPT09IFwiaW5jcmVhc2luZ1wiKSB7XG4gICAgICAgIGNvbG9yVmFsdWUudmFsdWUgKz0gdmVsb2NpdHk7XG4gICAgICAgIGlmIChjb2xvclZhbHVlLnZhbHVlID4gbWF4KSB7XG4gICAgICAgICAgICBpZiAoIWNvbG9yVmFsdWUubG9vcHMpIHtcbiAgICAgICAgICAgICAgICBjb2xvclZhbHVlLmxvb3BzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yVmFsdWUubG9vcHMrKztcbiAgICAgICAgICAgIGlmIChkZWNyZWFzZSkge1xuICAgICAgICAgICAgICAgIGNvbG9yVmFsdWUuc3RhdHVzID0gXCJkZWNyZWFzaW5nXCI7XG4gICAgICAgICAgICAgICAgY29sb3JWYWx1ZS52YWx1ZSAtPSBjb2xvclZhbHVlLnZhbHVlICUgbWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb2xvclZhbHVlLnZhbHVlIC09IHZlbG9jaXR5O1xuICAgICAgICBpZiAoY29sb3JWYWx1ZS52YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIGlmICghY29sb3JWYWx1ZS5sb29wcykge1xuICAgICAgICAgICAgICAgIGNvbG9yVmFsdWUubG9vcHMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3JWYWx1ZS5sb29wcysrO1xuICAgICAgICAgICAgY29sb3JWYWx1ZS5zdGF0dXMgPSBcImluY3JlYXNpbmdcIjtcbiAgICAgICAgICAgIGNvbG9yVmFsdWUudmFsdWUgKz0gY29sb3JWYWx1ZS52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29sb3JWYWx1ZS52ZWxvY2l0eSAmJiBkZWNheSAhPT0gMSkge1xuICAgICAgICBjb2xvclZhbHVlLnZlbG9jaXR5ICo9IGRlY2F5O1xuICAgIH1cbiAgICBpZiAoY29sb3JWYWx1ZS52YWx1ZSA+IG1heCkge1xuICAgICAgICBjb2xvclZhbHVlLnZhbHVlICU9IG1heDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29sb3IocGFydGljbGUsIGRlbHRhKSB7XG4gICAgY29uc3QgeyBoOiBoQW5pbWF0aW9uLCBzOiBzQW5pbWF0aW9uLCBsOiBsQW5pbWF0aW9uIH0gPSBwYXJ0aWNsZS5vcHRpb25zLmNvbG9yLmFuaW1hdGlvbiwgeyBjb2xvciB9ID0gcGFydGljbGU7XG4gICAgaWYgKCFjb2xvcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgaCwgcywgbCB9ID0gY29sb3I7XG4gICAgaWYgKGgpIHtcbiAgICAgICAgdXBkYXRlQ29sb3JWYWx1ZShkZWx0YSwgaCwgaEFuaW1hdGlvbiwgMzYwLCBmYWxzZSk7XG4gICAgfVxuICAgIGlmIChzKSB7XG4gICAgICAgIHVwZGF0ZUNvbG9yVmFsdWUoZGVsdGEsIHMsIHNBbmltYXRpb24sIDEwMCwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChsKSB7XG4gICAgICAgIHVwZGF0ZUNvbG9yVmFsdWUoZGVsdGEsIGwsIGxBbmltYXRpb24sIDEwMCwgdHJ1ZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-color/esm/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-color/esm/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/tsparticles-updater-color/esm/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadColorUpdater: () => (/* binding */ loadColorUpdater)\n/* harmony export */ });\n/* harmony import */ var _ColorUpdater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorUpdater */ \"(ssr)/./node_modules/tsparticles-updater-color/esm/ColorUpdater.js\");\n\nasync function loadColorUpdater(engine, refresh = true) {\n    await engine.addParticleUpdater(\"color\", (container) => new _ColorUpdater__WEBPACK_IMPORTED_MODULE_0__.ColorUpdater(container), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1jb2xvci9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFDdkM7QUFDUCxnRUFBZ0UsdURBQVk7QUFDNUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWpiZWhlcmEvRG93bmxvYWRzL3JhamVuZHJhLXBvcnRmb2xpby1maW5hbC1maXhlZC9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1jb2xvci9lc20vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3JVcGRhdGVyIH0gZnJvbSBcIi4vQ29sb3JVcGRhdGVyXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENvbG9yVXBkYXRlcihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZFBhcnRpY2xlVXBkYXRlcihcImNvbG9yXCIsIChjb250YWluZXIpID0+IG5ldyBDb2xvclVwZGF0ZXIoY29udGFpbmVyKSwgcmVmcmVzaCk7XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-color/esm/index.js\n");

/***/ })

};
;