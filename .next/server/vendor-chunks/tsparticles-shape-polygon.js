"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-polygon";
exports.ids = ["vendor-chunks/tsparticles-shape-polygon"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-polygon/esm/PolygonDrawer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles-shape-polygon/esm/PolygonDrawer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PolygonDrawer: () => (/* binding */ PolygonDrawer)\n/* harmony export */ });\n/* harmony import */ var _PolygonDrawerBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PolygonDrawerBase */ \"(ssr)/./node_modules/tsparticles-shape-polygon/esm/PolygonDrawerBase.js\");\n\nclass PolygonDrawer extends _PolygonDrawerBase__WEBPACK_IMPORTED_MODULE_0__.PolygonDrawerBase {\n    getCenter(particle, radius) {\n        return {\n            x: -radius / (particle.sides / 3.5),\n            y: -radius / (2.66 / 3.5),\n        };\n    }\n    getSidesData(particle, radius) {\n        const sides = particle.sides;\n        return {\n            count: {\n                denominator: 1,\n                numerator: sides,\n            },\n            length: (radius * 2.66) / (sides / 3),\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtcG9seWdvbi9lc20vUG9seWdvbkRyYXdlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3RDtBQUNqRCw0QkFBNEIsaUVBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL3JhamJlaGVyYS9Eb3dubG9hZHMvcmFqZW5kcmEtcG9ydGZvbGlvLWZpbmFsLWZpeGVkL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1wb2x5Z29uL2VzbS9Qb2x5Z29uRHJhd2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHlnb25EcmF3ZXJCYXNlIH0gZnJvbSBcIi4vUG9seWdvbkRyYXdlckJhc2VcIjtcbmV4cG9ydCBjbGFzcyBQb2x5Z29uRHJhd2VyIGV4dGVuZHMgUG9seWdvbkRyYXdlckJhc2Uge1xuICAgIGdldENlbnRlcihwYXJ0aWNsZSwgcmFkaXVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAtcmFkaXVzIC8gKHBhcnRpY2xlLnNpZGVzIC8gMy41KSxcbiAgICAgICAgICAgIHk6IC1yYWRpdXMgLyAoMi42NiAvIDMuNSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFNpZGVzRGF0YShwYXJ0aWNsZSwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IHNpZGVzID0gcGFydGljbGUuc2lkZXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb3VudDoge1xuICAgICAgICAgICAgICAgIGRlbm9taW5hdG9yOiAxLFxuICAgICAgICAgICAgICAgIG51bWVyYXRvcjogc2lkZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVuZ3RoOiAocmFkaXVzICogMi42NikgLyAoc2lkZXMgLyAzKSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-polygon/esm/PolygonDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-polygon/esm/PolygonDrawerBase.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles-shape-polygon/esm/PolygonDrawerBase.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PolygonDrawerBase: () => (/* binding */ PolygonDrawerBase)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nclass PolygonDrawerBase {\n    draw(context, particle, radius) {\n        const start = this.getCenter(particle, radius), side = this.getSidesData(particle, radius), sideCount = side.count.numerator * side.count.denominator, decimalSides = side.count.numerator / side.count.denominator, interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides, interiorAngle = Math.PI - (Math.PI * interiorAngleDegrees) / 180;\n        if (!context) {\n            return;\n        }\n        context.beginPath();\n        context.translate(start.x, start.y);\n        context.moveTo(0, 0);\n        for (let i = 0; i < sideCount; i++) {\n            context.lineTo(side.length, 0);\n            context.translate(side.length, 0);\n            context.rotate(interiorAngle);\n        }\n    }\n    getSidesCount(particle) {\n        const polygon = particle.shapeData;\n        return Math.round((0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(polygon?.sides ?? polygon?.nb_sides ?? 5));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtcG9seWdvbi9lc20vUG9seWdvbkRyYXdlckJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUQ7QUFDNUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUVBQWE7QUFDdkM7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL3JhamJlaGVyYS9Eb3dubG9hZHMvcmFqZW5kcmEtcG9ydGZvbGlvLWZpbmFsLWZpeGVkL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1wb2x5Z29uL2VzbS9Qb2x5Z29uRHJhd2VyQmFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRSYW5nZVZhbHVlIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuZXhwb3J0IGNsYXNzIFBvbHlnb25EcmF3ZXJCYXNlIHtcbiAgICBkcmF3KGNvbnRleHQsIHBhcnRpY2xlLCByYWRpdXMpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmdldENlbnRlcihwYXJ0aWNsZSwgcmFkaXVzKSwgc2lkZSA9IHRoaXMuZ2V0U2lkZXNEYXRhKHBhcnRpY2xlLCByYWRpdXMpLCBzaWRlQ291bnQgPSBzaWRlLmNvdW50Lm51bWVyYXRvciAqIHNpZGUuY291bnQuZGVub21pbmF0b3IsIGRlY2ltYWxTaWRlcyA9IHNpZGUuY291bnQubnVtZXJhdG9yIC8gc2lkZS5jb3VudC5kZW5vbWluYXRvciwgaW50ZXJpb3JBbmdsZURlZ3JlZXMgPSAoMTgwICogKGRlY2ltYWxTaWRlcyAtIDIpKSAvIGRlY2ltYWxTaWRlcywgaW50ZXJpb3JBbmdsZSA9IE1hdGguUEkgLSAoTWF0aC5QSSAqIGludGVyaW9yQW5nbGVEZWdyZWVzKSAvIDE4MDtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC50cmFuc2xhdGUoc3RhcnQueCwgc3RhcnQueSk7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKDAsIDApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhzaWRlLmxlbmd0aCwgMCk7XG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZShzaWRlLmxlbmd0aCwgMCk7XG4gICAgICAgICAgICBjb250ZXh0LnJvdGF0ZShpbnRlcmlvckFuZ2xlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRTaWRlc0NvdW50KHBhcnRpY2xlKSB7XG4gICAgICAgIGNvbnN0IHBvbHlnb24gPSBwYXJ0aWNsZS5zaGFwZURhdGE7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGdldFJhbmdlVmFsdWUocG9seWdvbj8uc2lkZXMgPz8gcG9seWdvbj8ubmJfc2lkZXMgPz8gNSkpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-polygon/esm/PolygonDrawerBase.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-polygon/esm/TriangleDrawer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles-shape-polygon/esm/TriangleDrawer.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TriangleDrawer: () => (/* binding */ TriangleDrawer)\n/* harmony export */ });\n/* harmony import */ var _PolygonDrawerBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PolygonDrawerBase */ \"(ssr)/./node_modules/tsparticles-shape-polygon/esm/PolygonDrawerBase.js\");\n\nclass TriangleDrawer extends _PolygonDrawerBase__WEBPACK_IMPORTED_MODULE_0__.PolygonDrawerBase {\n    getCenter(particle, radius) {\n        return {\n            x: -radius,\n            y: radius / 1.66,\n        };\n    }\n    getSidesCount() {\n        return 3;\n    }\n    getSidesData(particle, radius) {\n        return {\n            count: {\n                denominator: 2,\n                numerator: 3,\n            },\n            length: radius * 2,\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtcG9seWdvbi9lc20vVHJpYW5nbGVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0Q7QUFDakQsNkJBQTZCLGlFQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvcmFqYmVoZXJhL0Rvd25sb2Fkcy9yYWplbmRyYS1wb3J0Zm9saW8tZmluYWwtZml4ZWQvbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLXBvbHlnb24vZXNtL1RyaWFuZ2xlRHJhd2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHlnb25EcmF3ZXJCYXNlIH0gZnJvbSBcIi4vUG9seWdvbkRyYXdlckJhc2VcIjtcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZURyYXdlciBleHRlbmRzIFBvbHlnb25EcmF3ZXJCYXNlIHtcbiAgICBnZXRDZW50ZXIocGFydGljbGUsIHJhZGl1cykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogLXJhZGl1cyxcbiAgICAgICAgICAgIHk6IHJhZGl1cyAvIDEuNjYsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFNpZGVzQ291bnQoKSB7XG4gICAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgICBnZXRTaWRlc0RhdGEocGFydGljbGUsIHJhZGl1cykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY291bnQ6IHtcbiAgICAgICAgICAgICAgICBkZW5vbWluYXRvcjogMixcbiAgICAgICAgICAgICAgICBudW1lcmF0b3I6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVuZ3RoOiByYWRpdXMgKiAyLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-polygon/esm/TriangleDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-polygon/esm/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/tsparticles-shape-polygon/esm/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadGenericPolygonShape: () => (/* binding */ loadGenericPolygonShape),\n/* harmony export */   loadPolygonShape: () => (/* binding */ loadPolygonShape),\n/* harmony export */   loadTriangleShape: () => (/* binding */ loadTriangleShape)\n/* harmony export */ });\n/* harmony import */ var _PolygonDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PolygonDrawer */ \"(ssr)/./node_modules/tsparticles-shape-polygon/esm/PolygonDrawer.js\");\n/* harmony import */ var _TriangleDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TriangleDrawer */ \"(ssr)/./node_modules/tsparticles-shape-polygon/esm/TriangleDrawer.js\");\n\n\nasync function loadGenericPolygonShape(engine, refresh = true) {\n    await engine.addShape(\"polygon\", new _PolygonDrawer__WEBPACK_IMPORTED_MODULE_0__.PolygonDrawer(), refresh);\n}\nasync function loadTriangleShape(engine, refresh = true) {\n    await engine.addShape(\"triangle\", new _TriangleDrawer__WEBPACK_IMPORTED_MODULE_1__.TriangleDrawer(), refresh);\n}\nasync function loadPolygonShape(engine, refresh = true) {\n    await loadGenericPolygonShape(engine, refresh);\n    await loadTriangleShape(engine, refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtcG9seWdvbi9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0Q7QUFDRTtBQUMzQztBQUNQLHlDQUF5Qyx5REFBYTtBQUN0RDtBQUNPO0FBQ1AsMENBQTBDLDJEQUFjO0FBQ3hEO0FBQ087QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWpiZWhlcmEvRG93bmxvYWRzL3JhamVuZHJhLXBvcnRmb2xpby1maW5hbC1maXhlZC9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtcG9seWdvbi9lc20vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9seWdvbkRyYXdlciB9IGZyb20gXCIuL1BvbHlnb25EcmF3ZXJcIjtcbmltcG9ydCB7IFRyaWFuZ2xlRHJhd2VyIH0gZnJvbSBcIi4vVHJpYW5nbGVEcmF3ZXJcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2VuZXJpY1BvbHlnb25TaGFwZShlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZFNoYXBlKFwicG9seWdvblwiLCBuZXcgUG9seWdvbkRyYXdlcigpLCByZWZyZXNoKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkVHJpYW5nbGVTaGFwZShlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZFNoYXBlKFwidHJpYW5nbGVcIiwgbmV3IFRyaWFuZ2xlRHJhd2VyKCksIHJlZnJlc2gpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRQb2x5Z29uU2hhcGUoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGxvYWRHZW5lcmljUG9seWdvblNoYXBlKGVuZ2luZSwgcmVmcmVzaCk7XG4gICAgYXdhaXQgbG9hZFRyaWFuZ2xlU2hhcGUoZW5naW5lLCByZWZyZXNoKTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-polygon/esm/index.js\n");

/***/ })

};
;