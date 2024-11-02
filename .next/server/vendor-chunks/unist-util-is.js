"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-is";
exports.ids = ["vendor-chunks/unist-util-is"];
exports.modules = {

/***/ "(rsc)/./node_modules/unist-util-is/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/unist-util-is/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convert: () => (/* binding */ convert),\n/* harmony export */   is: () => (/* binding */ is)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Parent} Parent\n */\n\n/**\n * @template Fn\n * @template Fallback\n * @typedef {Fn extends (value: any) => value is infer Thing ? Thing : Fallback} Predicate\n */\n\n/**\n * @callback Check\n *   Check that an arbitrary value is a node.\n * @param {unknown} this\n *   The given context.\n * @param {unknown} [node]\n *   Anything (typically a node).\n * @param {number | null | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} [parent]\n *   The node’s parent.\n * @returns {boolean}\n *   Whether this is a node and passes a test.\n *\n * @typedef {Record<string, unknown> | Node} Props\n *   Object to check for equivalence.\n *\n *   Note: `Node` is included as it is common but is not indexable.\n *\n * @typedef {Array<Props | TestFunction | string> | Props | TestFunction | string | null | undefined} Test\n *   Check for an arbitrary node.\n *\n * @callback TestFunction\n *   Check if a node passes a test.\n * @param {unknown} this\n *   The given context.\n * @param {Node} node\n *   A node.\n * @param {number | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | undefined} [parent]\n *   The node’s parent.\n * @returns {boolean | undefined | void}\n *   Whether this node passes the test.\n *\n *   Note: `void` is included until TS sees no return as `undefined`.\n */\n\n/**\n * Check if `node` is a `Node` and whether it passes the given test.\n *\n * @param {unknown} node\n *   Thing to check, typically `Node`.\n * @param {Test} test\n *   A check for a specific node.\n * @param {number | null | undefined} index\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} parent\n *   The node’s parent.\n * @param {unknown} context\n *   Context object (`this`) to pass to `test` functions.\n * @returns {boolean}\n *   Whether `node` is a node and passes a test.\n */\nconst is =\n  // Note: overloads in JSDoc can’t yet use different `@template`s.\n  /**\n   * @type {(\n   *   (<Condition extends string>(node: unknown, test: Condition, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &\n   *   (<Condition extends Props>(node: unknown, test: Condition, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &\n   *   (<Condition extends TestFunction>(node: unknown, test: Condition, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &\n   *   ((node?: null | undefined) => false) &\n   *   ((node: unknown, test?: null | undefined, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &\n   *   ((node: unknown, test?: Test, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => boolean)\n   * )}\n   */\n  (\n    /**\n     * @param {unknown} [node]\n     * @param {Test} [test]\n     * @param {number | null | undefined} [index]\n     * @param {Parent | null | undefined} [parent]\n     * @param {unknown} [context]\n     * @returns {boolean}\n     */\n    // eslint-disable-next-line max-params\n    function (node, test, index, parent, context) {\n      const check = convert(test)\n\n      if (\n        index !== undefined &&\n        index !== null &&\n        (typeof index !== 'number' ||\n          index < 0 ||\n          index === Number.POSITIVE_INFINITY)\n      ) {\n        throw new Error('Expected positive finite index')\n      }\n\n      if (\n        parent !== undefined &&\n        parent !== null &&\n        (!is(parent) || !parent.children)\n      ) {\n        throw new Error('Expected parent node')\n      }\n\n      if (\n        (parent === undefined || parent === null) !==\n        (index === undefined || index === null)\n      ) {\n        throw new Error('Expected both parent and index')\n      }\n\n      return looksLikeANode(node)\n        ? check.call(context, node, index, parent)\n        : false\n    }\n  )\n\n/**\n * Generate an assertion from a test.\n *\n * Useful if you’re going to test many nodes, for example when creating a\n * utility where something else passes a compatible test.\n *\n * The created function is a bit faster because it expects valid input only:\n * a `node`, `index`, and `parent`.\n *\n * @param {Test} test\n *   *   when nullish, checks if `node` is a `Node`.\n *   *   when `string`, works like passing `(node) => node.type === test`.\n *   *   when `function` checks if function passed the node is true.\n *   *   when `object`, checks that all keys in test are in node, and that they have (strictly) equal values.\n *   *   when `array`, checks if any one of the subtests pass.\n * @returns {Check}\n *   An assertion.\n */\nconst convert =\n  // Note: overloads in JSDoc can’t yet use different `@template`s.\n  /**\n   * @type {(\n   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &\n   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &\n   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &\n   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &\n   *   ((test?: Test) => Check)\n   * )}\n   */\n  (\n    /**\n     * @param {Test} [test]\n     * @returns {Check}\n     */\n    function (test) {\n      if (test === null || test === undefined) {\n        return ok\n      }\n\n      if (typeof test === 'function') {\n        return castFactory(test)\n      }\n\n      if (typeof test === 'object') {\n        return Array.isArray(test) ? anyFactory(test) : propsFactory(test)\n      }\n\n      if (typeof test === 'string') {\n        return typeFactory(test)\n      }\n\n      throw new Error('Expected function, string, or object as test')\n    }\n  )\n\n/**\n * @param {Array<Props | TestFunction | string>} tests\n * @returns {Check}\n */\nfunction anyFactory(tests) {\n  /** @type {Array<Check>} */\n  const checks = []\n  let index = -1\n\n  while (++index < tests.length) {\n    checks[index] = convert(tests[index])\n  }\n\n  return castFactory(any)\n\n  /**\n   * @this {unknown}\n   * @type {TestFunction}\n   */\n  function any(...parameters) {\n    let index = -1\n\n    while (++index < checks.length) {\n      if (checks[index].apply(this, parameters)) return true\n    }\n\n    return false\n  }\n}\n\n/**\n * Turn an object into a test for a node with a certain fields.\n *\n * @param {Props} check\n * @returns {Check}\n */\nfunction propsFactory(check) {\n  const checkAsRecord = /** @type {Record<string, unknown>} */ (check)\n\n  return castFactory(all)\n\n  /**\n   * @param {Node} node\n   * @returns {boolean}\n   */\n  function all(node) {\n    const nodeAsRecord = /** @type {Record<string, unknown>} */ (\n      /** @type {unknown} */ (node)\n    )\n\n    /** @type {string} */\n    let key\n\n    for (key in check) {\n      if (nodeAsRecord[key] !== checkAsRecord[key]) return false\n    }\n\n    return true\n  }\n}\n\n/**\n * Turn a string into a test for a node with a certain type.\n *\n * @param {string} check\n * @returns {Check}\n */\nfunction typeFactory(check) {\n  return castFactory(type)\n\n  /**\n   * @param {Node} node\n   */\n  function type(node) {\n    return node && node.type === check\n  }\n}\n\n/**\n * Turn a custom test into a test for a node that passes that test.\n *\n * @param {TestFunction} testFunction\n * @returns {Check}\n */\nfunction castFactory(testFunction) {\n  return check\n\n  /**\n   * @this {unknown}\n   * @type {Check}\n   */\n  function check(value, index, parent) {\n    return Boolean(\n      looksLikeANode(value) &&\n        testFunction.call(\n          this,\n          value,\n          typeof index === 'number' ? index : undefined,\n          parent || undefined\n        )\n    )\n  }\n}\n\nfunction ok() {\n  return true\n}\n\n/**\n * @param {unknown} value\n * @returns {value is Node}\n */\nfunction looksLikeANode(value) {\n  return value !== null && typeof value === 'object' && 'type' in value\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsd0JBQXdCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0VBQW9FO0FBQ2pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWEsZ0NBQWdDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5RkFBeUY7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLFlBQVk7QUFDWixnTEFBZ0wsZ0JBQWdCO0FBQ2hNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLE1BQU07QUFDckIsZUFBZSwyQkFBMkI7QUFDMUMsZUFBZSwyQkFBMkI7QUFDMUMsZUFBZSxTQUFTO0FBQ3hCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLFlBQVk7QUFDWixvTEFBb0wsZ0JBQWdCO0FBQ3BNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQ0FBc0M7QUFDakQsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQyx5QkFBeUI7O0FBRTVEOztBQUVBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGVBQWU7QUFDZjtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RCxpQkFBaUIsU0FBUztBQUMxQjs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnViaXgtZG9jdW1lbnRzLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtaXMvbGliL2luZGV4LmpzP2Q5YjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGblxuICogQHRlbXBsYXRlIEZhbGxiYWNrXG4gKiBAdHlwZWRlZiB7Rm4gZXh0ZW5kcyAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgaW5mZXIgVGhpbmcgPyBUaGluZyA6IEZhbGxiYWNrfSBQcmVkaWNhdGVcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBDaGVja1xuICogICBDaGVjayB0aGF0IGFuIGFyYml0cmFyeSB2YWx1ZSBpcyBhIG5vZGUuXG4gKiBAcGFyYW0ge3Vua25vd259IHRoaXNcbiAqICAgVGhlIGdpdmVuIGNvbnRleHQuXG4gKiBAcGFyYW0ge3Vua25vd259IFtub2RlXVxuICogICBBbnl0aGluZyAodHlwaWNhbGx5IGEgbm9kZSkuXG4gKiBAcGFyYW0ge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtpbmRleF1cbiAqICAgVGhlIG5vZGXigJlzIHBvc2l0aW9uIGluIGl0cyBwYXJlbnQuXG4gKiBAcGFyYW0ge1BhcmVudCB8IG51bGwgfCB1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiAgIFRoZSBub2Rl4oCZcyBwYXJlbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciB0aGlzIGlzIGEgbm9kZSBhbmQgcGFzc2VzIGEgdGVzdC5cbiAqXG4gKiBAdHlwZWRlZiB7UmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBOb2RlfSBQcm9wc1xuICogICBPYmplY3QgdG8gY2hlY2sgZm9yIGVxdWl2YWxlbmNlLlxuICpcbiAqICAgTm90ZTogYE5vZGVgIGlzIGluY2x1ZGVkIGFzIGl0IGlzIGNvbW1vbiBidXQgaXMgbm90IGluZGV4YWJsZS5cbiAqXG4gKiBAdHlwZWRlZiB7QXJyYXk8UHJvcHMgfCBUZXN0RnVuY3Rpb24gfCBzdHJpbmc+IHwgUHJvcHMgfCBUZXN0RnVuY3Rpb24gfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBUZXN0XG4gKiAgIENoZWNrIGZvciBhbiBhcmJpdHJhcnkgbm9kZS5cbiAqXG4gKiBAY2FsbGJhY2sgVGVzdEZ1bmN0aW9uXG4gKiAgIENoZWNrIGlmIGEgbm9kZSBwYXNzZXMgYSB0ZXN0LlxuICogQHBhcmFtIHt1bmtub3dufSB0aGlzXG4gKiAgIFRoZSBnaXZlbiBjb250ZXh0LlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiAgIEEgbm9kZS5cbiAqIEBwYXJhbSB7bnVtYmVyIHwgdW5kZWZpbmVkfSBbaW5kZXhdXG4gKiAgIFRoZSBub2Rl4oCZcyBwb3NpdGlvbiBpbiBpdHMgcGFyZW50LlxuICogQHBhcmFtIHtQYXJlbnQgfCB1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiAgIFRoZSBub2Rl4oCZcyBwYXJlbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbiB8IHVuZGVmaW5lZCB8IHZvaWR9XG4gKiAgIFdoZXRoZXIgdGhpcyBub2RlIHBhc3NlcyB0aGUgdGVzdC5cbiAqXG4gKiAgIE5vdGU6IGB2b2lkYCBpcyBpbmNsdWRlZCB1bnRpbCBUUyBzZWVzIG5vIHJldHVybiBhcyBgdW5kZWZpbmVkYC5cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGBub2RlYCBpcyBhIGBOb2RlYCBhbmQgd2hldGhlciBpdCBwYXNzZXMgdGhlIGdpdmVuIHRlc3QuXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSBub2RlXG4gKiAgIFRoaW5nIHRvIGNoZWNrLCB0eXBpY2FsbHkgYE5vZGVgLlxuICogQHBhcmFtIHtUZXN0fSB0ZXN0XG4gKiAgIEEgY2hlY2sgZm9yIGEgc3BlY2lmaWMgbm9kZS5cbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gaW5kZXhcbiAqICAgVGhlIG5vZGXigJlzIHBvc2l0aW9uIGluIGl0cyBwYXJlbnQuXG4gKiBAcGFyYW0ge1BhcmVudCB8IG51bGwgfCB1bmRlZmluZWR9IHBhcmVudFxuICogICBUaGUgbm9kZeKAmXMgcGFyZW50LlxuICogQHBhcmFtIHt1bmtub3dufSBjb250ZXh0XG4gKiAgIENvbnRleHQgb2JqZWN0IChgdGhpc2ApIHRvIHBhc3MgdG8gYHRlc3RgIGZ1bmN0aW9ucy5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGBub2RlYCBpcyBhIG5vZGUgYW5kIHBhc3NlcyBhIHRlc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBpcyA9XG4gIC8vIE5vdGU6IG92ZXJsb2FkcyBpbiBKU0RvYyBjYW7igJl0IHlldCB1c2UgZGlmZmVyZW50IGBAdGVtcGxhdGVgcy5cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxDb25kaXRpb24gZXh0ZW5kcyBzdHJpbmc+KG5vZGU6IHVua25vd24sIHRlc3Q6IENvbmRpdGlvbiwgaW5kZXg/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnQgfCBudWxsIHwgdW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gbm9kZSBpcyBOb2RlICYge3R5cGU6IENvbmRpdGlvbn0pICZcbiAgICogICAoPENvbmRpdGlvbiBleHRlbmRzIFByb3BzPihub2RlOiB1bmtub3duLCB0ZXN0OiBDb25kaXRpb24sIGluZGV4PzogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IG5vZGUgaXMgTm9kZSAmIENvbmRpdGlvbikgJlxuICAgKiAgICg8Q29uZGl0aW9uIGV4dGVuZHMgVGVzdEZ1bmN0aW9uPihub2RlOiB1bmtub3duLCB0ZXN0OiBDb25kaXRpb24sIGluZGV4PzogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IG5vZGUgaXMgTm9kZSAmIFByZWRpY2F0ZTxDb25kaXRpb24sIE5vZGU+KSAmXG4gICAqICAgKChub2RlPzogbnVsbCB8IHVuZGVmaW5lZCkgPT4gZmFsc2UpICZcbiAgICogICAoKG5vZGU6IHVua25vd24sIHRlc3Q/OiBudWxsIHwgdW5kZWZpbmVkLCBpbmRleD86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudCB8IG51bGwgfCB1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBub2RlIGlzIE5vZGUpICZcbiAgICogICAoKG5vZGU6IHVua25vd24sIHRlc3Q/OiBUZXN0LCBpbmRleD86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudCB8IG51bGwgfCB1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBib29sZWFuKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7dW5rbm93bn0gW25vZGVdXG4gICAgICogQHBhcmFtIHtUZXN0fSBbdGVzdF1cbiAgICAgKiBAcGFyYW0ge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtpbmRleF1cbiAgICAgKiBAcGFyYW0ge1BhcmVudCB8IG51bGwgfCB1bmRlZmluZWR9IFtwYXJlbnRdXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuICAgIGZ1bmN0aW9uIChub2RlLCB0ZXN0LCBpbmRleCwgcGFyZW50LCBjb250ZXh0KSB7XG4gICAgICBjb25zdCBjaGVjayA9IGNvbnZlcnQodGVzdClcblxuICAgICAgaWYgKFxuICAgICAgICBpbmRleCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGluZGV4ICE9PSBudWxsICYmXG4gICAgICAgICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInIHx8XG4gICAgICAgICAgaW5kZXggPCAwIHx8XG4gICAgICAgICAgaW5kZXggPT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSlcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBvc2l0aXZlIGZpbml0ZSBpbmRleCcpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGFyZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgcGFyZW50ICE9PSBudWxsICYmXG4gICAgICAgICghaXMocGFyZW50KSB8fCAhcGFyZW50LmNoaWxkcmVuKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcGFyZW50IG5vZGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChwYXJlbnQgPT09IHVuZGVmaW5lZCB8fCBwYXJlbnQgPT09IG51bGwpICE9PVxuICAgICAgICAoaW5kZXggPT09IHVuZGVmaW5lZCB8fCBpbmRleCA9PT0gbnVsbClcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGJvdGggcGFyZW50IGFuZCBpbmRleCcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb29rc0xpa2VBTm9kZShub2RlKVxuICAgICAgICA/IGNoZWNrLmNhbGwoY29udGV4dCwgbm9kZSwgaW5kZXgsIHBhcmVudClcbiAgICAgICAgOiBmYWxzZVxuICAgIH1cbiAgKVxuXG4vKipcbiAqIEdlbmVyYXRlIGFuIGFzc2VydGlvbiBmcm9tIGEgdGVzdC5cbiAqXG4gKiBVc2VmdWwgaWYgeW914oCZcmUgZ29pbmcgdG8gdGVzdCBtYW55IG5vZGVzLCBmb3IgZXhhbXBsZSB3aGVuIGNyZWF0aW5nIGFcbiAqIHV0aWxpdHkgd2hlcmUgc29tZXRoaW5nIGVsc2UgcGFzc2VzIGEgY29tcGF0aWJsZSB0ZXN0LlxuICpcbiAqIFRoZSBjcmVhdGVkIGZ1bmN0aW9uIGlzIGEgYml0IGZhc3RlciBiZWNhdXNlIGl0IGV4cGVjdHMgdmFsaWQgaW5wdXQgb25seTpcbiAqIGEgYG5vZGVgLCBgaW5kZXhgLCBhbmQgYHBhcmVudGAuXG4gKlxuICogQHBhcmFtIHtUZXN0fSB0ZXN0XG4gKiAgICogICB3aGVuIG51bGxpc2gsIGNoZWNrcyBpZiBgbm9kZWAgaXMgYSBgTm9kZWAuXG4gKiAgICogICB3aGVuIGBzdHJpbmdgLCB3b3JrcyBsaWtlIHBhc3NpbmcgYChub2RlKSA9PiBub2RlLnR5cGUgPT09IHRlc3RgLlxuICogICAqICAgd2hlbiBgZnVuY3Rpb25gIGNoZWNrcyBpZiBmdW5jdGlvbiBwYXNzZWQgdGhlIG5vZGUgaXMgdHJ1ZS5cbiAqICAgKiAgIHdoZW4gYG9iamVjdGAsIGNoZWNrcyB0aGF0IGFsbCBrZXlzIGluIHRlc3QgYXJlIGluIG5vZGUsIGFuZCB0aGF0IHRoZXkgaGF2ZSAoc3RyaWN0bHkpIGVxdWFsIHZhbHVlcy5cbiAqICAgKiAgIHdoZW4gYGFycmF5YCwgY2hlY2tzIGlmIGFueSBvbmUgb2YgdGhlIHN1YnRlc3RzIHBhc3MuXG4gKiBAcmV0dXJucyB7Q2hlY2t9XG4gKiAgIEFuIGFzc2VydGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnQgPVxuICAvLyBOb3RlOiBvdmVybG9hZHMgaW4gSlNEb2MgY2Fu4oCZdCB5ZXQgdXNlIGRpZmZlcmVudCBgQHRlbXBsYXRlYHMuXG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8Q29uZGl0aW9uIGV4dGVuZHMgc3RyaW5nPih0ZXN0OiBDb25kaXRpb24pID0+IChub2RlOiB1bmtub3duLCBpbmRleD86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudCB8IG51bGwgfCB1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBub2RlIGlzIE5vZGUgJiB7dHlwZTogQ29uZGl0aW9ufSkgJlxuICAgKiAgICg8Q29uZGl0aW9uIGV4dGVuZHMgUHJvcHM+KHRlc3Q6IENvbmRpdGlvbikgPT4gKG5vZGU6IHVua25vd24sIGluZGV4PzogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IG5vZGUgaXMgTm9kZSAmIENvbmRpdGlvbikgJlxuICAgKiAgICg8Q29uZGl0aW9uIGV4dGVuZHMgVGVzdEZ1bmN0aW9uPih0ZXN0OiBDb25kaXRpb24pID0+IChub2RlOiB1bmtub3duLCBpbmRleD86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudCB8IG51bGwgfCB1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBub2RlIGlzIE5vZGUgJiBQcmVkaWNhdGU8Q29uZGl0aW9uLCBOb2RlPikgJlxuICAgKiAgICgodGVzdD86IG51bGwgfCB1bmRlZmluZWQpID0+IChub2RlPzogdW5rbm93biwgaW5kZXg/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnQgfCBudWxsIHwgdW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gbm9kZSBpcyBOb2RlKSAmXG4gICAqICAgKCh0ZXN0PzogVGVzdCkgPT4gQ2hlY2spXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUZXN0fSBbdGVzdF1cbiAgICAgKiBAcmV0dXJucyB7Q2hlY2t9XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRlc3QpIHtcbiAgICAgIGlmICh0ZXN0ID09PSBudWxsIHx8IHRlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gb2tcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjYXN0RmFjdG9yeSh0ZXN0KVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRlc3QpID8gYW55RmFjdG9yeSh0ZXN0KSA6IHByb3BzRmFjdG9yeSh0ZXN0KVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0eXBlRmFjdG9yeSh0ZXN0KVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uLCBzdHJpbmcsIG9yIG9iamVjdCBhcyB0ZXN0JylcbiAgICB9XG4gIClcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PFByb3BzIHwgVGVzdEZ1bmN0aW9uIHwgc3RyaW5nPn0gdGVzdHNcbiAqIEByZXR1cm5zIHtDaGVja31cbiAqL1xuZnVuY3Rpb24gYW55RmFjdG9yeSh0ZXN0cykge1xuICAvKiogQHR5cGUge0FycmF5PENoZWNrPn0gKi9cbiAgY29uc3QgY2hlY2tzID0gW11cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IHRlc3RzLmxlbmd0aCkge1xuICAgIGNoZWNrc1tpbmRleF0gPSBjb252ZXJ0KHRlc3RzW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBjYXN0RmFjdG9yeShhbnkpXG5cbiAgLyoqXG4gICAqIEB0aGlzIHt1bmtub3dufVxuICAgKiBAdHlwZSB7VGVzdEZ1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gYW55KC4uLnBhcmFtZXRlcnMpIHtcbiAgICBsZXQgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBjaGVja3MubGVuZ3RoKSB7XG4gICAgICBpZiAoY2hlY2tzW2luZGV4XS5hcHBseSh0aGlzLCBwYXJhbWV0ZXJzKSkgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIFR1cm4gYW4gb2JqZWN0IGludG8gYSB0ZXN0IGZvciBhIG5vZGUgd2l0aCBhIGNlcnRhaW4gZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7UHJvcHN9IGNoZWNrXG4gKiBAcmV0dXJucyB7Q2hlY2t9XG4gKi9cbmZ1bmN0aW9uIHByb3BzRmFjdG9yeShjaGVjaykge1xuICBjb25zdCBjaGVja0FzUmVjb3JkID0gLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gKi8gKGNoZWNrKVxuXG4gIHJldHVybiBjYXN0RmFjdG9yeShhbGwpXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGFsbChub2RlKSB7XG4gICAgY29uc3Qgbm9kZUFzUmVjb3JkID0gLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gKi8gKFxuICAgICAgLyoqIEB0eXBlIHt1bmtub3dufSAqLyAobm9kZSlcbiAgICApXG5cbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICBsZXQga2V5XG5cbiAgICBmb3IgKGtleSBpbiBjaGVjaykge1xuICAgICAgaWYgKG5vZGVBc1JlY29yZFtrZXldICE9PSBjaGVja0FzUmVjb3JkW2tleV0pIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuLyoqXG4gKiBUdXJuIGEgc3RyaW5nIGludG8gYSB0ZXN0IGZvciBhIG5vZGUgd2l0aCBhIGNlcnRhaW4gdHlwZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY2hlY2tcbiAqIEByZXR1cm5zIHtDaGVja31cbiAqL1xuZnVuY3Rpb24gdHlwZUZhY3RvcnkoY2hlY2spIHtcbiAgcmV0dXJuIGNhc3RGYWN0b3J5KHR5cGUpXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gdHlwZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUgJiYgbm9kZS50eXBlID09PSBjaGVja1xuICB9XG59XG5cbi8qKlxuICogVHVybiBhIGN1c3RvbSB0ZXN0IGludG8gYSB0ZXN0IGZvciBhIG5vZGUgdGhhdCBwYXNzZXMgdGhhdCB0ZXN0LlxuICpcbiAqIEBwYXJhbSB7VGVzdEZ1bmN0aW9ufSB0ZXN0RnVuY3Rpb25cbiAqIEByZXR1cm5zIHtDaGVja31cbiAqL1xuZnVuY3Rpb24gY2FzdEZhY3RvcnkodGVzdEZ1bmN0aW9uKSB7XG4gIHJldHVybiBjaGVja1xuXG4gIC8qKlxuICAgKiBAdGhpcyB7dW5rbm93bn1cbiAgICogQHR5cGUge0NoZWNrfVxuICAgKi9cbiAgZnVuY3Rpb24gY2hlY2sodmFsdWUsIGluZGV4LCBwYXJlbnQpIHtcbiAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgIGxvb2tzTGlrZUFOb2RlKHZhbHVlKSAmJlxuICAgICAgICB0ZXN0RnVuY3Rpb24uY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicgPyBpbmRleCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwYXJlbnQgfHwgdW5kZWZpbmVkXG4gICAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gb2soKSB7XG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZVxuICogQHJldHVybnMge3ZhbHVlIGlzIE5vZGV9XG4gKi9cbmZ1bmN0aW9uIGxvb2tzTGlrZUFOb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICd0eXBlJyBpbiB2YWx1ZVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unist-util-is/lib/index.js\n");

/***/ })

};
;