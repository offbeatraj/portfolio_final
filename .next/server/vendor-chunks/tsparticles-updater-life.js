"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-updater-life";
exports.ids = ["vendor-chunks/tsparticles-updater-life"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-updater-life/esm/LifeUpdater.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles-updater-life/esm/LifeUpdater.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LifeUpdater: () => (/* binding */ LifeUpdater)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n/* harmony import */ var _Options_Classes_Life__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options/Classes/Life */ \"(ssr)/./node_modules/tsparticles-updater-life/esm/Options/Classes/Life.js\");\n\n\nclass LifeUpdater {\n    constructor(container) {\n        this.container = container;\n    }\n    init(particle) {\n        const container = this.container, particlesOptions = particle.options, lifeOptions = particlesOptions.life;\n        if (!lifeOptions) {\n            return;\n        }\n        particle.life = {\n            delay: container.retina.reduceFactor\n                ? (((0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(lifeOptions.delay.value) * (lifeOptions.delay.sync ? 1 : (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)())) /\n                    container.retina.reduceFactor) *\n                    1000\n                : 0,\n            delayTime: 0,\n            duration: container.retina.reduceFactor\n                ? (((0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(lifeOptions.duration.value) * (lifeOptions.duration.sync ? 1 : (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)())) /\n                    container.retina.reduceFactor) *\n                    1000\n                : 0,\n            time: 0,\n            count: lifeOptions.count,\n        };\n        if (particle.life.duration <= 0) {\n            particle.life.duration = -1;\n        }\n        if (particle.life.count <= 0) {\n            particle.life.count = -1;\n        }\n        if (particle.life) {\n            particle.spawning = particle.life.delay > 0;\n        }\n    }\n    isEnabled(particle) {\n        return !particle.destroyed;\n    }\n    loadOptions(options, ...sources) {\n        if (!options.life) {\n            options.life = new _Options_Classes_Life__WEBPACK_IMPORTED_MODULE_1__.Life();\n        }\n        for (const source of sources) {\n            options.life.load(source?.life);\n        }\n    }\n    update(particle, delta) {\n        if (!this.isEnabled(particle) || !particle.life) {\n            return;\n        }\n        const life = particle.life;\n        let justSpawned = false;\n        if (particle.spawning) {\n            life.delayTime += delta.value;\n            if (life.delayTime >= particle.life.delay) {\n                justSpawned = true;\n                particle.spawning = false;\n                life.delayTime = 0;\n                life.time = 0;\n            }\n            else {\n                return;\n            }\n        }\n        if (life.duration === -1) {\n            return;\n        }\n        if (particle.spawning) {\n            return;\n        }\n        if (justSpawned) {\n            life.time = 0;\n        }\n        else {\n            life.time += delta.value;\n        }\n        if (life.time < life.duration) {\n            return;\n        }\n        life.time = 0;\n        if (particle.life.count > 0) {\n            particle.life.count--;\n        }\n        if (particle.life.count === 0) {\n            particle.destroy();\n            return;\n        }\n        const canvasSize = this.container.canvas.size, widthRange = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.setRangeValue)(0, canvasSize.width), heightRange = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.setRangeValue)(0, canvasSize.width);\n        particle.position.x = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.randomInRange)(widthRange);\n        particle.position.y = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.randomInRange)(heightRange);\n        particle.spawning = true;\n        life.delayTime = 0;\n        life.time = 0;\n        particle.reset();\n        const lifeOptions = particle.options.life;\n        if (lifeOptions) {\n            life.delay = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(lifeOptions.delay.value) * 1000;\n            life.duration = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(lifeOptions.duration.value) * 1000;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1saWZlL2VzbS9MaWZlVXBkYXRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkY7QUFDL0M7QUFDdkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpRUFBYSwwREFBMEQsNkRBQVM7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpRUFBYSxnRUFBZ0UsNkRBQVM7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVEQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLGlFQUFhLHFDQUFxQyxpRUFBYTtBQUNuSSw4QkFBOEIsaUVBQWE7QUFDM0MsOEJBQThCLGlFQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpRUFBYTtBQUN0Qyw0QkFBNEIsaUVBQWE7QUFDekM7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvcmFqYmVoZXJhL0Rvd25sb2Fkcy9yYWplbmRyYS1wb3J0Zm9saW8tZmluYWwtZml4ZWQvbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItbGlmZS9lc20vTGlmZVVwZGF0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UmFuZG9tLCBnZXRSYW5nZVZhbHVlLCByYW5kb21JblJhbmdlLCBzZXRSYW5nZVZhbHVlLCB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmltcG9ydCB7IExpZmUgfSBmcm9tIFwiLi9PcHRpb25zL0NsYXNzZXMvTGlmZVwiO1xuZXhwb3J0IGNsYXNzIExpZmVVcGRhdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfVxuICAgIGluaXQocGFydGljbGUpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIHBhcnRpY2xlc09wdGlvbnMgPSBwYXJ0aWNsZS5vcHRpb25zLCBsaWZlT3B0aW9ucyA9IHBhcnRpY2xlc09wdGlvbnMubGlmZTtcbiAgICAgICAgaWYgKCFsaWZlT3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRpY2xlLmxpZmUgPSB7XG4gICAgICAgICAgICBkZWxheTogY29udGFpbmVyLnJldGluYS5yZWR1Y2VGYWN0b3JcbiAgICAgICAgICAgICAgICA/ICgoZ2V0UmFuZ2VWYWx1ZShsaWZlT3B0aW9ucy5kZWxheS52YWx1ZSkgKiAobGlmZU9wdGlvbnMuZGVsYXkuc3luYyA/IDEgOiBnZXRSYW5kb20oKSkpIC9cbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJldGluYS5yZWR1Y2VGYWN0b3IpICpcbiAgICAgICAgICAgICAgICAgICAgMTAwMFxuICAgICAgICAgICAgICAgIDogMCxcbiAgICAgICAgICAgIGRlbGF5VGltZTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBjb250YWluZXIucmV0aW5hLnJlZHVjZUZhY3RvclxuICAgICAgICAgICAgICAgID8gKChnZXRSYW5nZVZhbHVlKGxpZmVPcHRpb25zLmR1cmF0aW9uLnZhbHVlKSAqIChsaWZlT3B0aW9ucy5kdXJhdGlvbi5zeW5jID8gMSA6IGdldFJhbmRvbSgpKSkgL1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmV0aW5hLnJlZHVjZUZhY3RvcikgKlxuICAgICAgICAgICAgICAgICAgICAxMDAwXG4gICAgICAgICAgICAgICAgOiAwLFxuICAgICAgICAgICAgdGltZTogMCxcbiAgICAgICAgICAgIGNvdW50OiBsaWZlT3B0aW9ucy5jb3VudCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHBhcnRpY2xlLmxpZmUuZHVyYXRpb24gPD0gMCkge1xuICAgICAgICAgICAgcGFydGljbGUubGlmZS5kdXJhdGlvbiA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0aWNsZS5saWZlLmNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHBhcnRpY2xlLmxpZmUuY291bnQgPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydGljbGUubGlmZSkge1xuICAgICAgICAgICAgcGFydGljbGUuc3Bhd25pbmcgPSBwYXJ0aWNsZS5saWZlLmRlbGF5ID4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0VuYWJsZWQocGFydGljbGUpIHtcbiAgICAgICAgcmV0dXJuICFwYXJ0aWNsZS5kZXN0cm95ZWQ7XG4gICAgfVxuICAgIGxvYWRPcHRpb25zKG9wdGlvbnMsIC4uLnNvdXJjZXMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLmxpZmUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMubGlmZSA9IG5ldyBMaWZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICAgICAgb3B0aW9ucy5saWZlLmxvYWQoc291cmNlPy5saWZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocGFydGljbGUsIGRlbHRhKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZWQocGFydGljbGUpIHx8ICFwYXJ0aWNsZS5saWZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGlmZSA9IHBhcnRpY2xlLmxpZmU7XG4gICAgICAgIGxldCBqdXN0U3Bhd25lZCA9IGZhbHNlO1xuICAgICAgICBpZiAocGFydGljbGUuc3Bhd25pbmcpIHtcbiAgICAgICAgICAgIGxpZmUuZGVsYXlUaW1lICs9IGRlbHRhLnZhbHVlO1xuICAgICAgICAgICAgaWYgKGxpZmUuZGVsYXlUaW1lID49IHBhcnRpY2xlLmxpZmUuZGVsYXkpIHtcbiAgICAgICAgICAgICAgICBqdXN0U3Bhd25lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcGFydGljbGUuc3Bhd25pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsaWZlLmRlbGF5VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgbGlmZS50aW1lID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobGlmZS5kdXJhdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydGljbGUuc3Bhd25pbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoanVzdFNwYXduZWQpIHtcbiAgICAgICAgICAgIGxpZmUudGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsaWZlLnRpbWUgKz0gZGVsdGEudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpZmUudGltZSA8IGxpZmUuZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsaWZlLnRpbWUgPSAwO1xuICAgICAgICBpZiAocGFydGljbGUubGlmZS5jb3VudCA+IDApIHtcbiAgICAgICAgICAgIHBhcnRpY2xlLmxpZmUuY291bnQtLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydGljbGUubGlmZS5jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgcGFydGljbGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbnZhc1NpemUgPSB0aGlzLmNvbnRhaW5lci5jYW52YXMuc2l6ZSwgd2lkdGhSYW5nZSA9IHNldFJhbmdlVmFsdWUoMCwgY2FudmFzU2l6ZS53aWR0aCksIGhlaWdodFJhbmdlID0gc2V0UmFuZ2VWYWx1ZSgwLCBjYW52YXNTaXplLndpZHRoKTtcbiAgICAgICAgcGFydGljbGUucG9zaXRpb24ueCA9IHJhbmRvbUluUmFuZ2Uod2lkdGhSYW5nZSk7XG4gICAgICAgIHBhcnRpY2xlLnBvc2l0aW9uLnkgPSByYW5kb21JblJhbmdlKGhlaWdodFJhbmdlKTtcbiAgICAgICAgcGFydGljbGUuc3Bhd25pbmcgPSB0cnVlO1xuICAgICAgICBsaWZlLmRlbGF5VGltZSA9IDA7XG4gICAgICAgIGxpZmUudGltZSA9IDA7XG4gICAgICAgIHBhcnRpY2xlLnJlc2V0KCk7XG4gICAgICAgIGNvbnN0IGxpZmVPcHRpb25zID0gcGFydGljbGUub3B0aW9ucy5saWZlO1xuICAgICAgICBpZiAobGlmZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIGxpZmUuZGVsYXkgPSBnZXRSYW5nZVZhbHVlKGxpZmVPcHRpb25zLmRlbGF5LnZhbHVlKSAqIDEwMDA7XG4gICAgICAgICAgICBsaWZlLmR1cmF0aW9uID0gZ2V0UmFuZ2VWYWx1ZShsaWZlT3B0aW9ucy5kdXJhdGlvbi52YWx1ZSkgKiAxMDAwO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-life/esm/LifeUpdater.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-life/esm/Options/Classes/Life.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-life/esm/Options/Classes/Life.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Life: () => (/* binding */ Life)\n/* harmony export */ });\n/* harmony import */ var _LifeDelay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LifeDelay */ \"(ssr)/./node_modules/tsparticles-updater-life/esm/Options/Classes/LifeDelay.js\");\n/* harmony import */ var _LifeDuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LifeDuration */ \"(ssr)/./node_modules/tsparticles-updater-life/esm/Options/Classes/LifeDuration.js\");\n\n\nclass Life {\n    constructor() {\n        this.count = 0;\n        this.delay = new _LifeDelay__WEBPACK_IMPORTED_MODULE_0__.LifeDelay();\n        this.duration = new _LifeDuration__WEBPACK_IMPORTED_MODULE_1__.LifeDuration();\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.count !== undefined) {\n            this.count = data.count;\n        }\n        this.delay.load(data.delay);\n        this.duration.load(data.duration);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1saWZlL2VzbS9PcHRpb25zL0NsYXNzZXMvTGlmZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFDTTtBQUN2QztBQUNQO0FBQ0E7QUFDQSx5QkFBeUIsaURBQVM7QUFDbEMsNEJBQTRCLHVEQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL3JhamJlaGVyYS9Eb3dubG9hZHMvcmFqZW5kcmEtcG9ydGZvbGlvLWZpbmFsLWZpeGVkL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLWxpZmUvZXNtL09wdGlvbnMvQ2xhc3Nlcy9MaWZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpZmVEZWxheSB9IGZyb20gXCIuL0xpZmVEZWxheVwiO1xuaW1wb3J0IHsgTGlmZUR1cmF0aW9uIH0gZnJvbSBcIi4vTGlmZUR1cmF0aW9uXCI7XG5leHBvcnQgY2xhc3MgTGlmZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB0aGlzLmRlbGF5ID0gbmV3IExpZmVEZWxheSgpO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gbmV3IExpZmVEdXJhdGlvbigpO1xuICAgIH1cbiAgICBsb2FkKGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuY291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jb3VudCA9IGRhdGEuY291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheS5sb2FkKGRhdGEuZGVsYXkpO1xuICAgICAgICB0aGlzLmR1cmF0aW9uLmxvYWQoZGF0YS5kdXJhdGlvbik7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-life/esm/Options/Classes/Life.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-life/esm/Options/Classes/LifeDelay.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-life/esm/Options/Classes/LifeDelay.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LifeDelay: () => (/* binding */ LifeDelay)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Options/Classes/ValueWithRandom.js\");\n\nclass LifeDelay extends tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ValueWithRandom {\n    constructor() {\n        super();\n        this.sync = false;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        super.load(data);\n        if (data.sync !== undefined) {\n            this.sync = data.sync;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1saWZlL2VzbS9PcHRpb25zL0NsYXNzZXMvTGlmZURlbGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFEO0FBQzlDLHdCQUF3QiwrREFBZTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvcmFqYmVoZXJhL0Rvd25sb2Fkcy9yYWplbmRyYS1wb3J0Zm9saW8tZmluYWwtZml4ZWQvbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItbGlmZS9lc20vT3B0aW9ucy9DbGFzc2VzL0xpZmVEZWxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWx1ZVdpdGhSYW5kb20gfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5leHBvcnQgY2xhc3MgTGlmZURlbGF5IGV4dGVuZHMgVmFsdWVXaXRoUmFuZG9tIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zeW5jID0gZmFsc2U7XG4gICAgfVxuICAgIGxvYWQoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5sb2FkKGRhdGEpO1xuICAgICAgICBpZiAoZGF0YS5zeW5jICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3luYyA9IGRhdGEuc3luYztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-life/esm/Options/Classes/LifeDelay.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-life/esm/Options/Classes/LifeDuration.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-life/esm/Options/Classes/LifeDuration.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LifeDuration: () => (/* binding */ LifeDuration)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Options/Classes/ValueWithRandom.js\");\n\nclass LifeDuration extends tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ValueWithRandom {\n    constructor() {\n        super();\n        this.random.minimumValue = 0.0001;\n        this.sync = false;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        super.load(data);\n        if (data.sync !== undefined) {\n            this.sync = data.sync;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1saWZlL2VzbS9PcHRpb25zL0NsYXNzZXMvTGlmZUR1cmF0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFEO0FBQzlDLDJCQUEyQiwrREFBZTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWpiZWhlcmEvRG93bmxvYWRzL3JhamVuZHJhLXBvcnRmb2xpby1maW5hbC1maXhlZC9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1saWZlL2VzbS9PcHRpb25zL0NsYXNzZXMvTGlmZUR1cmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbHVlV2l0aFJhbmRvbSB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmV4cG9ydCBjbGFzcyBMaWZlRHVyYXRpb24gZXh0ZW5kcyBWYWx1ZVdpdGhSYW5kb20ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJhbmRvbS5taW5pbXVtVmFsdWUgPSAwLjAwMDE7XG4gICAgICAgIHRoaXMuc3luYyA9IGZhbHNlO1xuICAgIH1cbiAgICBsb2FkKGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIubG9hZChkYXRhKTtcbiAgICAgICAgaWYgKGRhdGEuc3luYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnN5bmMgPSBkYXRhLnN5bmM7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-life/esm/Options/Classes/LifeDuration.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-life/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-updater-life/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadLifeUpdater: () => (/* binding */ loadLifeUpdater)\n/* harmony export */ });\n/* harmony import */ var _LifeUpdater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LifeUpdater */ \"(ssr)/./node_modules/tsparticles-updater-life/esm/LifeUpdater.js\");\n\nasync function loadLifeUpdater(engine, refresh = true) {\n    await engine.addParticleUpdater(\"life\", (container) => new _LifeUpdater__WEBPACK_IMPORTED_MODULE_0__.LifeUpdater(container), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1saWZlL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUNyQztBQUNQLCtEQUErRCxxREFBVztBQUMxRSIsInNvdXJjZXMiOlsiL1VzZXJzL3JhamJlaGVyYS9Eb3dubG9hZHMvcmFqZW5kcmEtcG9ydGZvbGlvLWZpbmFsLWZpeGVkL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLWxpZmUvZXNtL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpZmVVcGRhdGVyIH0gZnJvbSBcIi4vTGlmZVVwZGF0ZXJcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkTGlmZVVwZGF0ZXIoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRQYXJ0aWNsZVVwZGF0ZXIoXCJsaWZlXCIsIChjb250YWluZXIpID0+IG5ldyBMaWZlVXBkYXRlcihjb250YWluZXIpLCByZWZyZXNoKTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-life/esm/index.js\n");

/***/ })

};
;