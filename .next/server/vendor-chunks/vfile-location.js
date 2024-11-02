"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/vfile-location";
exports.ids = ["vendor-chunks/vfile-location"];
exports.modules = {

/***/ "(rsc)/./node_modules/vfile-location/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vfile-location/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   location: () => (/* binding */ location)\n/* harmony export */ });\n/**\n * @import {VFile, Value} from 'vfile'\n * @import {Location} from 'vfile-location'\n */\n\n/**\n * Create an index of the given document to translate between line/column and\n * offset based positional info.\n *\n * Also implemented in Rust in [`wooorm/markdown-rs`][markdown-rs].\n *\n * [markdown-rs]: https://github.com/wooorm/markdown-rs/blob/main/src/util/location.rs\n *\n * @param {VFile | Value} file\n *   File to index.\n * @returns {Location}\n *   Accessors for index.\n */\nfunction location(file) {\n  const value = String(file)\n  /**\n   * List, where each index is a line number (0-based), and each value is the\n   * byte index *after* where the line ends.\n   *\n   * @type {Array<number>}\n   */\n  const indices = []\n\n  return {toOffset, toPoint}\n\n  /** @type {Location['toPoint']} */\n  function toPoint(offset) {\n    if (typeof offset === 'number' && offset > -1 && offset <= value.length) {\n      let index = 0\n\n      while (true) {\n        let end = indices[index]\n\n        if (end === undefined) {\n          const eol = next(value, indices[index - 1])\n          end = eol === -1 ? value.length + 1 : eol + 1\n          indices[index] = end\n        }\n\n        if (end > offset) {\n          return {\n            line: index + 1,\n            column: offset - (index > 0 ? indices[index - 1] : 0) + 1,\n            offset\n          }\n        }\n\n        index++\n      }\n    }\n  }\n\n  /** @type {Location['toOffset']} */\n  function toOffset(point) {\n    if (\n      point &&\n      typeof point.line === 'number' &&\n      typeof point.column === 'number' &&\n      !Number.isNaN(point.line) &&\n      !Number.isNaN(point.column)\n    ) {\n      while (indices.length < point.line) {\n        const from = indices[indices.length - 1]\n        const eol = next(value, from)\n        const end = eol === -1 ? value.length + 1 : eol + 1\n        if (from === end) break\n        indices.push(end)\n      }\n\n      const offset =\n        (point.line > 1 ? indices[point.line - 2] : 0) + point.column - 1\n      // The given `column` could not exist on this line.\n      if (offset < indices[point.line - 1]) return offset\n    }\n  }\n}\n\n/**\n * @param {string} value\n * @param {number} from\n */\nfunction next(value, from) {\n  const cr = value.indexOf('\\r', from)\n  const lf = value.indexOf('\\n', from)\n  if (lf === -1) return cr\n  if (cr === -1 || cr + 1 === lf) return lf\n  return cr < lf ? cr : lf\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdmZpbGUtbG9jYXRpb24vbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLFlBQVksY0FBYztBQUMxQixZQUFZLFVBQVU7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUEsVUFBVTs7QUFFVixhQUFhLHFCQUFxQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3J1Yml4LWRvY3VtZW50cy8uL25vZGVfbW9kdWxlcy92ZmlsZS1sb2NhdGlvbi9saWIvaW5kZXguanM/ZjQ0YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge1ZGaWxlLCBWYWx1ZX0gZnJvbSAndmZpbGUnXG4gKiBAaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSAndmZpbGUtbG9jYXRpb24nXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5kZXggb2YgdGhlIGdpdmVuIGRvY3VtZW50IHRvIHRyYW5zbGF0ZSBiZXR3ZWVuIGxpbmUvY29sdW1uIGFuZFxuICogb2Zmc2V0IGJhc2VkIHBvc2l0aW9uYWwgaW5mby5cbiAqXG4gKiBBbHNvIGltcGxlbWVudGVkIGluIFJ1c3QgaW4gW2B3b29vcm0vbWFya2Rvd24tcnNgXVttYXJrZG93bi1yc10uXG4gKlxuICogW21hcmtkb3duLXJzXTogaHR0cHM6Ly9naXRodWIuY29tL3dvb29ybS9tYXJrZG93bi1ycy9ibG9iL21haW4vc3JjL3V0aWwvbG9jYXRpb24ucnNcbiAqXG4gKiBAcGFyYW0ge1ZGaWxlIHwgVmFsdWV9IGZpbGVcbiAqICAgRmlsZSB0byBpbmRleC5cbiAqIEByZXR1cm5zIHtMb2NhdGlvbn1cbiAqICAgQWNjZXNzb3JzIGZvciBpbmRleC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2F0aW9uKGZpbGUpIHtcbiAgY29uc3QgdmFsdWUgPSBTdHJpbmcoZmlsZSlcbiAgLyoqXG4gICAqIExpc3QsIHdoZXJlIGVhY2ggaW5kZXggaXMgYSBsaW5lIG51bWJlciAoMC1iYXNlZCksIGFuZCBlYWNoIHZhbHVlIGlzIHRoZVxuICAgKiBieXRlIGluZGV4ICphZnRlciogd2hlcmUgdGhlIGxpbmUgZW5kcy5cbiAgICpcbiAgICogQHR5cGUge0FycmF5PG51bWJlcj59XG4gICAqL1xuICBjb25zdCBpbmRpY2VzID0gW11cblxuICByZXR1cm4ge3RvT2Zmc2V0LCB0b1BvaW50fVxuXG4gIC8qKiBAdHlwZSB7TG9jYXRpb25bJ3RvUG9pbnQnXX0gKi9cbiAgZnVuY3Rpb24gdG9Qb2ludChvZmZzZXQpIHtcbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ251bWJlcicgJiYgb2Zmc2V0ID4gLTEgJiYgb2Zmc2V0IDw9IHZhbHVlLmxlbmd0aCkge1xuICAgICAgbGV0IGluZGV4ID0gMFxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBsZXQgZW5kID0gaW5kaWNlc1tpbmRleF1cblxuICAgICAgICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCBlb2wgPSBuZXh0KHZhbHVlLCBpbmRpY2VzW2luZGV4IC0gMV0pXG4gICAgICAgICAgZW5kID0gZW9sID09PSAtMSA/IHZhbHVlLmxlbmd0aCArIDEgOiBlb2wgKyAxXG4gICAgICAgICAgaW5kaWNlc1tpbmRleF0gPSBlbmRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmQgPiBvZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGluZTogaW5kZXggKyAxLFxuICAgICAgICAgICAgY29sdW1uOiBvZmZzZXQgLSAoaW5kZXggPiAwID8gaW5kaWNlc1tpbmRleCAtIDFdIDogMCkgKyAxLFxuICAgICAgICAgICAgb2Zmc2V0XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBAdHlwZSB7TG9jYXRpb25bJ3RvT2Zmc2V0J119ICovXG4gIGZ1bmN0aW9uIHRvT2Zmc2V0KHBvaW50KSB7XG4gICAgaWYgKFxuICAgICAgcG9pbnQgJiZcbiAgICAgIHR5cGVvZiBwb2ludC5saW5lID09PSAnbnVtYmVyJyAmJlxuICAgICAgdHlwZW9mIHBvaW50LmNvbHVtbiA9PT0gJ251bWJlcicgJiZcbiAgICAgICFOdW1iZXIuaXNOYU4ocG9pbnQubGluZSkgJiZcbiAgICAgICFOdW1iZXIuaXNOYU4ocG9pbnQuY29sdW1uKVxuICAgICkge1xuICAgICAgd2hpbGUgKGluZGljZXMubGVuZ3RoIDwgcG9pbnQubGluZSkge1xuICAgICAgICBjb25zdCBmcm9tID0gaW5kaWNlc1tpbmRpY2VzLmxlbmd0aCAtIDFdXG4gICAgICAgIGNvbnN0IGVvbCA9IG5leHQodmFsdWUsIGZyb20pXG4gICAgICAgIGNvbnN0IGVuZCA9IGVvbCA9PT0gLTEgPyB2YWx1ZS5sZW5ndGggKyAxIDogZW9sICsgMVxuICAgICAgICBpZiAoZnJvbSA9PT0gZW5kKSBicmVha1xuICAgICAgICBpbmRpY2VzLnB1c2goZW5kKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvZmZzZXQgPVxuICAgICAgICAocG9pbnQubGluZSA+IDEgPyBpbmRpY2VzW3BvaW50LmxpbmUgLSAyXSA6IDApICsgcG9pbnQuY29sdW1uIC0gMVxuICAgICAgLy8gVGhlIGdpdmVuIGBjb2x1bW5gIGNvdWxkIG5vdCBleGlzdCBvbiB0aGlzIGxpbmUuXG4gICAgICBpZiAob2Zmc2V0IDwgaW5kaWNlc1twb2ludC5saW5lIC0gMV0pIHJldHVybiBvZmZzZXRcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tXG4gKi9cbmZ1bmN0aW9uIG5leHQodmFsdWUsIGZyb20pIHtcbiAgY29uc3QgY3IgPSB2YWx1ZS5pbmRleE9mKCdcXHInLCBmcm9tKVxuICBjb25zdCBsZiA9IHZhbHVlLmluZGV4T2YoJ1xcbicsIGZyb20pXG4gIGlmIChsZiA9PT0gLTEpIHJldHVybiBjclxuICBpZiAoY3IgPT09IC0xIHx8IGNyICsgMSA9PT0gbGYpIHJldHVybiBsZlxuICByZXR1cm4gY3IgPCBsZiA/IGNyIDogbGZcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/vfile-location/lib/index.js\n");

/***/ })

};
;