"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-tsparticles";
exports.ids = ["vendor-chunks/react-tsparticles"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-tsparticles/esm/Particles.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-tsparticles/esm/Particles.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/index.js\");\n/* harmony import */ var deep_eql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-eql */ \"(ssr)/./node_modules/deep-eql/index.js\");\n/* harmony import */ var deep_eql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_eql__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst defaultId = \"tsparticles\";\nclass Particles extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            init: false,\n            library: undefined,\n        };\n    }\n    destroy() {\n        if (!this.state.library) {\n            return;\n        }\n        this.state.library.destroy();\n        this.setState({\n            library: undefined,\n        });\n    }\n    shouldComponentUpdate(nextProps) {\n        return !deep_eql__WEBPACK_IMPORTED_MODULE_1___default()(nextProps, this.props);\n    }\n    componentDidUpdate() {\n        this.refresh();\n    }\n    forceUpdate() {\n        this.refresh().then(() => {\n            super.forceUpdate();\n        });\n    }\n    componentDidMount() {\n        (async () => {\n            if (this.props.init) {\n                await this.props.init(tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.tsParticles);\n            }\n            this.setState({\n                init: true,\n            }, async () => {\n                await this.loadParticles();\n            });\n        })();\n    }\n    componentWillUnmount() {\n        this.destroy();\n    }\n    render() {\n        const { width, height, className, canvasClassName, id } = this.props;\n        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: className, id: id },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"canvas\", { className: canvasClassName, style: {\n                    ...this.props.style,\n                    width,\n                    height,\n                } })));\n    }\n    async refresh() {\n        this.destroy();\n        await this.loadParticles();\n    }\n    async loadParticles() {\n        if (!this.state.init) {\n            return;\n        }\n        const cb = async (container) => {\n            if (this.props.container) {\n                this.props.container.current = container;\n            }\n            this.setState({\n                library: container,\n            });\n            if (this.props.loaded) {\n                await this.props.loaded(container);\n            }\n        };\n        const id = this.props.id ?? Particles.defaultProps.id ?? defaultId, container = this.props.url\n            ? await tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.tsParticles.loadJSON(id, this.props.url)\n            : await tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.tsParticles.load(id, this.props.params ?? this.props.options);\n        await cb(container);\n    }\n}\nParticles.defaultProps = {\n    width: \"100%\",\n    height: \"100%\",\n    options: {},\n    style: {},\n    url: undefined,\n    id: defaultId,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Particles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHNwYXJ0aWNsZXMvZXNtL1BhcnRpY2xlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDUTtBQUNwQjtBQUM3QjtBQUNBLHdCQUF3Qiw0Q0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxnQkFBZ0IsK0NBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMkRBQVc7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdEQUFnRDtBQUNoRSxnQkFBZ0IsMERBQW1CLFVBQVUsOEJBQThCO0FBQzNFLFlBQVksMERBQW1CLGFBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFXO0FBQy9CLG9CQUFvQiwyREFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3JhamJlaGVyYS9Eb3dubG9hZHMvcmFqZW5kcmEtcG9ydGZvbGlvLWZpbmFsLWZpeGVkL25vZGVfbW9kdWxlcy9yZWFjdC10c3BhcnRpY2xlcy9lc20vUGFydGljbGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRzUGFydGljbGVzIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuaW1wb3J0IGVxdWFsIGZyb20gXCJkZWVwLWVxbFwiO1xuY29uc3QgZGVmYXVsdElkID0gXCJ0c3BhcnRpY2xlc1wiO1xuY2xhc3MgUGFydGljbGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbml0OiBmYWxzZSxcbiAgICAgICAgICAgIGxpYnJhcnk6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmxpYnJhcnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLmxpYnJhcnkuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxpYnJhcnk6IHVuZGVmaW5lZCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuICFlcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgICBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzdXBlci5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5pbml0KSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wcm9wcy5pbml0KHRzUGFydGljbGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGluaXQ6IHRydWUsXG4gICAgICAgICAgICB9LCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkUGFydGljbGVzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgY2xhc3NOYW1lLCBjYW52YXNDbGFzc05hbWUsIGlkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgaWQ6IGlkIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHsgY2xhc3NOYW1lOiBjYW52YXNDbGFzc05hbWUsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgfSB9KSkpO1xuICAgIH1cbiAgICBhc3luYyByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkUGFydGljbGVzKCk7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRQYXJ0aWNsZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbml0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2IgPSBhc3luYyAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbnRhaW5lci5jdXJyZW50ID0gY29udGFpbmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGlicmFyeTogY29udGFpbmVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnByb3BzLmxvYWRlZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgPz8gUGFydGljbGVzLmRlZmF1bHRQcm9wcy5pZCA/PyBkZWZhdWx0SWQsIGNvbnRhaW5lciA9IHRoaXMucHJvcHMudXJsXG4gICAgICAgICAgICA/IGF3YWl0IHRzUGFydGljbGVzLmxvYWRKU09OKGlkLCB0aGlzLnByb3BzLnVybClcbiAgICAgICAgICAgIDogYXdhaXQgdHNQYXJ0aWNsZXMubG9hZChpZCwgdGhpcy5wcm9wcy5wYXJhbXMgPz8gdGhpcy5wcm9wcy5vcHRpb25zKTtcbiAgICAgICAgYXdhaXQgY2IoY29udGFpbmVyKTtcbiAgICB9XG59XG5QYXJ0aWNsZXMuZGVmYXVsdFByb3BzID0ge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIG9wdGlvbnM6IHt9LFxuICAgIHN0eWxlOiB7fSxcbiAgICB1cmw6IHVuZGVmaW5lZCxcbiAgICBpZDogZGVmYXVsdElkLFxufTtcbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlcztcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-tsparticles/esm/Particles.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-tsparticles/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-tsparticles/esm/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Particles: () => (/* reexport safe */ _Particles__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Particles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particles */ \"(ssr)/./node_modules/react-tsparticles/esm/Particles.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Particles__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHNwYXJ0aWNsZXMvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUNwQyxpRUFBZSxrREFBUyxFQUFDO0FBQ0oiLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWpiZWhlcmEvRG93bmxvYWRzL3JhamVuZHJhLXBvcnRmb2xpby1maW5hbC1maXhlZC9ub2RlX21vZHVsZXMvcmVhY3QtdHNwYXJ0aWNsZXMvZXNtL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcIi4vUGFydGljbGVzXCI7XG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNsZXM7XG5leHBvcnQgeyBQYXJ0aWNsZXMgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-tsparticles/esm/index.js\n");

/***/ })

};
;