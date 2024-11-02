"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/parse-entities";
exports.ids = ["vendor-chunks/parse-entities"];
exports.modules = {

/***/ "(rsc)/./node_modules/parse-entities/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/parse-entities/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseEntities: () => (/* binding */ parseEntities)\n/* harmony export */ });\n/* harmony import */ var character_entities_legacy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! character-entities-legacy */ \"(rsc)/./node_modules/character-entities-legacy/index.js\");\n/* harmony import */ var character_reference_invalid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! character-reference-invalid */ \"(rsc)/./node_modules/character-reference-invalid/index.js\");\n/* harmony import */ var is_decimal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-decimal */ \"(rsc)/./node_modules/is-decimal/index.js\");\n/* harmony import */ var is_hexadecimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! is-hexadecimal */ \"(rsc)/./node_modules/is-hexadecimal/index.js\");\n/* harmony import */ var is_alphanumerical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-alphanumerical */ \"(rsc)/./node_modules/is-alphanumerical/index.js\");\n/* harmony import */ var decode_named_character_reference__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! decode-named-character-reference */ \"(rsc)/./node_modules/decode-named-character-reference/index.js\");\n/**\n * @typedef {import('unist').Point} Point\n * @typedef {import('unist').Position} Position\n */\n\n\n\n\n\n\n\n\nconst fromCharCode = String.fromCharCode\n\n// Warning messages.\nconst messages = [\n  '',\n  /* 1: Non terminated (named) */\n  'Named character references must be terminated by a semicolon',\n  /* 2: Non terminated (numeric) */\n  'Numeric character references must be terminated by a semicolon',\n  /* 3: Empty (named) */\n  'Named character references cannot be empty',\n  /* 4: Empty (numeric) */\n  'Numeric character references cannot be empty',\n  /* 5: Unknown (named) */\n  'Named character references must be known',\n  /* 6: Disallowed (numeric) */\n  'Numeric character references cannot be disallowed',\n  /* 7: Prohibited (numeric) */\n  'Numeric character references cannot be outside the permissible Unicode range'\n]\n\n/**\n * Parse HTML character references.\n *\n * @param {string} value\n * @param {import('../index.js').Options} [options={}]\n */\nfunction parseEntities(value, options = {}) {\n  const additional =\n    typeof options.additional === 'string'\n      ? options.additional.charCodeAt(0)\n      : options.additional\n  /** @type {Array<string>} */\n  const result = []\n  let index = 0\n  let lines = -1\n  let queue = ''\n  /** @type {Point|undefined} */\n  let point\n  /** @type {Array<number>|undefined} */\n  let indent\n\n  if (options.position) {\n    if ('start' in options.position || 'indent' in options.position) {\n      // @ts-expect-error: points don’t have indent.\n      indent = options.position.indent\n      // @ts-expect-error: points don’t have indent.\n      point = options.position.start\n    } else {\n      point = options.position\n    }\n  }\n\n  let line = (point ? point.line : 0) || 1\n  let column = (point ? point.column : 0) || 1\n\n  // Cache the current point.\n  let previous = now()\n  /** @type {number|undefined} */\n  let character\n\n  // Ensure the algorithm walks over the first character (inclusive).\n  index--\n\n  while (++index <= value.length) {\n    // If the previous character was a newline.\n    if (character === 10 /* `\\n` */) {\n      column = (indent ? indent[lines] : 0) || 1\n    }\n\n    character = value.charCodeAt(index)\n\n    if (character === 38 /* `&` */) {\n      const following = value.charCodeAt(index + 1)\n\n      // The behavior depends on the identity of the next character.\n      if (\n        following === 9 /* `\\t` */ ||\n        following === 10 /* `\\n` */ ||\n        following === 12 /* `\\f` */ ||\n        following === 32 /* ` ` */ ||\n        following === 38 /* `&` */ ||\n        following === 60 /* `<` */ ||\n        Number.isNaN(following) ||\n        (additional && following === additional)\n      ) {\n        // Not a character reference.\n        // No characters are consumed, and nothing is returned.\n        // This is not an error, either.\n        queue += fromCharCode(character)\n        column++\n        continue\n      }\n\n      const start = index + 1\n      let begin = start\n      let end = start\n      /** @type {string} */\n      let type\n\n      if (following === 35 /* `#` */) {\n        // Numerical reference.\n        end = ++begin\n\n        // The behavior further depends on the next character.\n        const following = value.charCodeAt(end)\n\n        if (following === 88 /* `X` */ || following === 120 /* `x` */) {\n          // ASCII hexadecimal digits.\n          type = 'hexadecimal'\n          end = ++begin\n        } else {\n          // ASCII decimal digits.\n          type = 'decimal'\n        }\n      } else {\n        // Named reference.\n        type = 'named'\n      }\n\n      let characterReferenceCharacters = ''\n      let characterReference = ''\n      let characters = ''\n      // Each type of character reference accepts different characters.\n      // This test is used to detect whether a reference has ended (as the semicolon\n      // is not strictly needed).\n      const test =\n        type === 'named'\n          ? is_alphanumerical__WEBPACK_IMPORTED_MODULE_0__.isAlphanumerical\n          : type === 'decimal'\n          ? is_decimal__WEBPACK_IMPORTED_MODULE_1__.isDecimal\n          : is_hexadecimal__WEBPACK_IMPORTED_MODULE_2__.isHexadecimal\n\n      end--\n\n      while (++end <= value.length) {\n        const following = value.charCodeAt(end)\n\n        if (!test(following)) {\n          break\n        }\n\n        characters += fromCharCode(following)\n\n        // Check if we can match a legacy named reference.\n        // If so, we cache that as the last viable named reference.\n        // This ensures we do not need to walk backwards later.\n        if (type === 'named' && character_entities_legacy__WEBPACK_IMPORTED_MODULE_3__.characterEntitiesLegacy.includes(characters)) {\n          characterReferenceCharacters = characters\n          // @ts-expect-error: always able to decode.\n          characterReference = (0,decode_named_character_reference__WEBPACK_IMPORTED_MODULE_4__.decodeNamedCharacterReference)(characters)\n        }\n      }\n\n      let terminated = value.charCodeAt(end) === 59 /* `;` */\n\n      if (terminated) {\n        end++\n\n        const namedReference =\n          type === 'named' ? (0,decode_named_character_reference__WEBPACK_IMPORTED_MODULE_4__.decodeNamedCharacterReference)(characters) : false\n\n        if (namedReference) {\n          characterReferenceCharacters = characters\n          characterReference = namedReference\n        }\n      }\n\n      let diff = 1 + end - start\n      let reference = ''\n\n      if (!terminated && options.nonTerminated === false) {\n        // Empty.\n      } else if (!characters) {\n        // An empty (possible) reference is valid, unless it’s numeric (thus an\n        // ampersand followed by an octothorp).\n        if (type !== 'named') {\n          warning(4 /* Empty (numeric) */, diff)\n        }\n      } else if (type === 'named') {\n        // An ampersand followed by anything unknown, and not terminated, is\n        // invalid.\n        if (terminated && !characterReference) {\n          warning(5 /* Unknown (named) */, 1)\n        } else {\n          // If there’s something after an named reference which is not known,\n          // cap the reference.\n          if (characterReferenceCharacters !== characters) {\n            end = begin + characterReferenceCharacters.length\n            diff = 1 + end - begin\n            terminated = false\n          }\n\n          // If the reference is not terminated, warn.\n          if (!terminated) {\n            const reason = characterReferenceCharacters\n              ? 1 /* Non terminated (named) */\n              : 3 /* Empty (named) */\n\n            if (options.attribute) {\n              const following = value.charCodeAt(end)\n\n              if (following === 61 /* `=` */) {\n                warning(reason, diff)\n                characterReference = ''\n              } else if ((0,is_alphanumerical__WEBPACK_IMPORTED_MODULE_0__.isAlphanumerical)(following)) {\n                characterReference = ''\n              } else {\n                warning(reason, diff)\n              }\n            } else {\n              warning(reason, diff)\n            }\n          }\n        }\n\n        reference = characterReference\n      } else {\n        if (!terminated) {\n          // All nonterminated numeric references are not rendered, and emit a\n          // warning.\n          warning(2 /* Non terminated (numeric) */, diff)\n        }\n\n        // When terminated and numerical, parse as either hexadecimal or\n        // decimal.\n        let referenceCode = Number.parseInt(\n          characters,\n          type === 'hexadecimal' ? 16 : 10\n        )\n\n        // Emit a warning when the parsed number is prohibited, and replace with\n        // replacement character.\n        if (prohibited(referenceCode)) {\n          warning(7 /* Prohibited (numeric) */, diff)\n          reference = fromCharCode(65533 /* `�` */)\n        } else if (referenceCode in character_reference_invalid__WEBPACK_IMPORTED_MODULE_5__.characterReferenceInvalid) {\n          // Emit a warning when the parsed number is disallowed, and replace by\n          // an alternative.\n          warning(6 /* Disallowed (numeric) */, diff)\n          reference = character_reference_invalid__WEBPACK_IMPORTED_MODULE_5__.characterReferenceInvalid[referenceCode]\n        } else {\n          // Parse the number.\n          let output = ''\n\n          // Emit a warning when the parsed number should not be used.\n          if (disallowed(referenceCode)) {\n            warning(6 /* Disallowed (numeric) */, diff)\n          }\n\n          // Serialize the number.\n          if (referenceCode > 0xffff) {\n            referenceCode -= 0x10000\n            output += fromCharCode((referenceCode >>> (10 & 0x3ff)) | 0xd800)\n            referenceCode = 0xdc00 | (referenceCode & 0x3ff)\n          }\n\n          reference = output + fromCharCode(referenceCode)\n        }\n      }\n\n      // Found it!\n      // First eat the queued characters as normal text, then eat a reference.\n      if (reference) {\n        flush()\n\n        previous = now()\n        index = end - 1\n        column += end - start + 1\n        result.push(reference)\n        const next = now()\n        next.offset++\n\n        if (options.reference) {\n          options.reference.call(\n            options.referenceContext,\n            reference,\n            {start: previous, end: next},\n            value.slice(start - 1, end)\n          )\n        }\n\n        previous = next\n      } else {\n        // If we could not find a reference, queue the checked characters (as\n        // normal characters), and move the pointer to their end.\n        // This is possible because we can be certain neither newlines nor\n        // ampersands are included.\n        characters = value.slice(start - 1, end)\n        queue += characters\n        column += characters.length\n        index = end - 1\n      }\n    } else {\n      // Handle anything other than an ampersand, including newlines and EOF.\n      if (character === 10 /* `\\n` */) {\n        line++\n        lines++\n        column = 0\n      }\n\n      if (Number.isNaN(character)) {\n        flush()\n      } else {\n        queue += fromCharCode(character)\n        column++\n      }\n    }\n  }\n\n  // Return the reduced nodes.\n  return result.join('')\n\n  // Get current position.\n  function now() {\n    return {\n      line,\n      column,\n      offset: index + ((point ? point.offset : 0) || 0)\n    }\n  }\n\n  /**\n   * Handle the warning.\n   *\n   * @param {1|2|3|4|5|6|7} code\n   * @param {number} offset\n   */\n  function warning(code, offset) {\n    /** @type {ReturnType<now>} */\n    let position\n\n    if (options.warning) {\n      position = now()\n      position.column += offset\n      position.offset += offset\n\n      options.warning.call(\n        options.warningContext,\n        messages[code],\n        position,\n        code\n      )\n    }\n  }\n\n  /**\n   * Flush `queue` (normal text).\n   * Macro invoked before each reference and at the end of `value`.\n   * Does nothing when `queue` is empty.\n   */\n  function flush() {\n    if (queue) {\n      result.push(queue)\n\n      if (options.text) {\n        options.text.call(options.textContext, queue, {\n          start: previous,\n          end: now()\n        })\n      }\n\n      queue = ''\n    }\n  }\n}\n\n/**\n * Check if `character` is outside the permissible unicode range.\n *\n * @param {number} code\n * @returns {boolean}\n */\nfunction prohibited(code) {\n  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff\n}\n\n/**\n * Check if `character` is disallowed.\n *\n * @param {number} code\n * @returns {boolean}\n */\nfunction disallowed(code) {\n  return (\n    (code >= 0x0001 && code <= 0x0008) ||\n    code === 0x000b ||\n    (code >= 0x000d && code <= 0x001f) ||\n    (code >= 0x007f && code <= 0x009f) ||\n    (code >= 0xfdd0 && code <= 0xfdef) ||\n    (code & 0xffff) === 0xffff ||\n    (code & 0xffff) === 0xfffe\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcGFyc2UtZW50aXRpZXMvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEsMEJBQTBCO0FBQ3ZDOztBQUVpRTtBQUNJO0FBQ2pDO0FBQ1E7QUFDTTtBQUM0Qjs7QUFFOUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLCtCQUErQixXQUFXO0FBQ3JEO0FBQ08sMENBQTBDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQSxhQUFhLHlCQUF5QjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsa0JBQWtCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtEQUFnQjtBQUM1QjtBQUNBLFlBQVksaURBQVM7QUFDckIsWUFBWSx5REFBYTs7QUFFekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDhFQUF1QjtBQUN2RDtBQUNBO0FBQ0EsK0JBQStCLCtGQUE2QjtBQUM1RDtBQUNBOztBQUVBLHlEQUF5RDs7QUFFekQ7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QiwrRkFBNkI7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTLG1FQUFnQjtBQUN6QztBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBCQUEwQixrRkFBeUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtGQUF5QjtBQUMvQyxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMkJBQTJCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ydWJpeC1kb2N1bWVudHMvLi9ub2RlX21vZHVsZXMvcGFyc2UtZW50aXRpZXMvbGliL2luZGV4LmpzPzUxNzYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvaW50fSBQb2ludFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Qb3NpdGlvbn0gUG9zaXRpb25cbiAqL1xuXG5pbXBvcnQge2NoYXJhY3RlckVudGl0aWVzTGVnYWN5fSBmcm9tICdjaGFyYWN0ZXItZW50aXRpZXMtbGVnYWN5J1xuaW1wb3J0IHtjaGFyYWN0ZXJSZWZlcmVuY2VJbnZhbGlkfSBmcm9tICdjaGFyYWN0ZXItcmVmZXJlbmNlLWludmFsaWQnXG5pbXBvcnQge2lzRGVjaW1hbH0gZnJvbSAnaXMtZGVjaW1hbCdcbmltcG9ydCB7aXNIZXhhZGVjaW1hbH0gZnJvbSAnaXMtaGV4YWRlY2ltYWwnXG5pbXBvcnQge2lzQWxwaGFudW1lcmljYWx9IGZyb20gJ2lzLWFscGhhbnVtZXJpY2FsJ1xuaW1wb3J0IHtkZWNvZGVOYW1lZENoYXJhY3RlclJlZmVyZW5jZX0gZnJvbSAnZGVjb2RlLW5hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2UnXG5cbmNvbnN0IGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcblxuLy8gV2FybmluZyBtZXNzYWdlcy5cbmNvbnN0IG1lc3NhZ2VzID0gW1xuICAnJyxcbiAgLyogMTogTm9uIHRlcm1pbmF0ZWQgKG5hbWVkKSAqL1xuICAnTmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgbXVzdCBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uJyxcbiAgLyogMjogTm9uIHRlcm1pbmF0ZWQgKG51bWVyaWMpICovXG4gICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIG11c3QgYmUgdGVybWluYXRlZCBieSBhIHNlbWljb2xvbicsXG4gIC8qIDM6IEVtcHR5IChuYW1lZCkgKi9cbiAgJ05hbWVkIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBlbXB0eScsXG4gIC8qIDQ6IEVtcHR5IChudW1lcmljKSAqL1xuICAnTnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBjYW5ub3QgYmUgZW1wdHknLFxuICAvKiA1OiBVbmtub3duIChuYW1lZCkgKi9cbiAgJ05hbWVkIGNoYXJhY3RlciByZWZlcmVuY2VzIG11c3QgYmUga25vd24nLFxuICAvKiA2OiBEaXNhbGxvd2VkIChudW1lcmljKSAqL1xuICAnTnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBjYW5ub3QgYmUgZGlzYWxsb3dlZCcsXG4gIC8qIDc6IFByb2hpYml0ZWQgKG51bWVyaWMpICovXG4gICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBvdXRzaWRlIHRoZSBwZXJtaXNzaWJsZSBVbmljb2RlIHJhbmdlJ1xuXVxuXG4vKipcbiAqIFBhcnNlIEhUTUwgY2hhcmFjdGVyIHJlZmVyZW5jZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW5kZXguanMnKS5PcHRpb25zfSBbb3B0aW9ucz17fV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRW50aXRpZXModmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBhZGRpdGlvbmFsID1cbiAgICB0eXBlb2Ygb3B0aW9ucy5hZGRpdGlvbmFsID09PSAnc3RyaW5nJ1xuICAgICAgPyBvcHRpb25zLmFkZGl0aW9uYWwuY2hhckNvZGVBdCgwKVxuICAgICAgOiBvcHRpb25zLmFkZGl0aW9uYWxcbiAgLyoqIEB0eXBlIHtBcnJheTxzdHJpbmc+fSAqL1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBsZXQgaW5kZXggPSAwXG4gIGxldCBsaW5lcyA9IC0xXG4gIGxldCBxdWV1ZSA9ICcnXG4gIC8qKiBAdHlwZSB7UG9pbnR8dW5kZWZpbmVkfSAqL1xuICBsZXQgcG9pbnRcbiAgLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fHVuZGVmaW5lZH0gKi9cbiAgbGV0IGluZGVudFxuXG4gIGlmIChvcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgaWYgKCdzdGFydCcgaW4gb3B0aW9ucy5wb3NpdGlvbiB8fCAnaW5kZW50JyBpbiBvcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBwb2ludHMgZG9u4oCZdCBoYXZlIGluZGVudC5cbiAgICAgIGluZGVudCA9IG9wdGlvbnMucG9zaXRpb24uaW5kZW50XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBwb2ludHMgZG9u4oCZdCBoYXZlIGluZGVudC5cbiAgICAgIHBvaW50ID0gb3B0aW9ucy5wb3NpdGlvbi5zdGFydFxuICAgIH0gZWxzZSB7XG4gICAgICBwb2ludCA9IG9wdGlvbnMucG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBsZXQgbGluZSA9IChwb2ludCA/IHBvaW50LmxpbmUgOiAwKSB8fCAxXG4gIGxldCBjb2x1bW4gPSAocG9pbnQgPyBwb2ludC5jb2x1bW4gOiAwKSB8fCAxXG5cbiAgLy8gQ2FjaGUgdGhlIGN1cnJlbnQgcG9pbnQuXG4gIGxldCBwcmV2aW91cyA9IG5vdygpXG4gIC8qKiBAdHlwZSB7bnVtYmVyfHVuZGVmaW5lZH0gKi9cbiAgbGV0IGNoYXJhY3RlclxuXG4gIC8vIEVuc3VyZSB0aGUgYWxnb3JpdGhtIHdhbGtzIG92ZXIgdGhlIGZpcnN0IGNoYXJhY3RlciAoaW5jbHVzaXZlKS5cbiAgaW5kZXgtLVxuXG4gIHdoaWxlICgrK2luZGV4IDw9IHZhbHVlLmxlbmd0aCkge1xuICAgIC8vIElmIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXIgd2FzIGEgbmV3bGluZS5cbiAgICBpZiAoY2hhcmFjdGVyID09PSAxMCAvKiBgXFxuYCAqLykge1xuICAgICAgY29sdW1uID0gKGluZGVudCA/IGluZGVudFtsaW5lc10gOiAwKSB8fCAxXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IDM4IC8qIGAmYCAqLykge1xuICAgICAgY29uc3QgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChpbmRleCArIDEpXG5cbiAgICAgIC8vIFRoZSBiZWhhdmlvciBkZXBlbmRzIG9uIHRoZSBpZGVudGl0eSBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIuXG4gICAgICBpZiAoXG4gICAgICAgIGZvbGxvd2luZyA9PT0gOSAvKiBgXFx0YCAqLyB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IDEwIC8qIGBcXG5gICovIHx8XG4gICAgICAgIGZvbGxvd2luZyA9PT0gMTIgLyogYFxcZmAgKi8gfHxcbiAgICAgICAgZm9sbG93aW5nID09PSAzMiAvKiBgIGAgKi8gfHxcbiAgICAgICAgZm9sbG93aW5nID09PSAzOCAvKiBgJmAgKi8gfHxcbiAgICAgICAgZm9sbG93aW5nID09PSA2MCAvKiBgPGAgKi8gfHxcbiAgICAgICAgTnVtYmVyLmlzTmFOKGZvbGxvd2luZykgfHxcbiAgICAgICAgKGFkZGl0aW9uYWwgJiYgZm9sbG93aW5nID09PSBhZGRpdGlvbmFsKVxuICAgICAgKSB7XG4gICAgICAgIC8vIE5vdCBhIGNoYXJhY3RlciByZWZlcmVuY2UuXG4gICAgICAgIC8vIE5vIGNoYXJhY3RlcnMgYXJlIGNvbnN1bWVkLCBhbmQgbm90aGluZyBpcyByZXR1cm5lZC5cbiAgICAgICAgLy8gVGhpcyBpcyBub3QgYW4gZXJyb3IsIGVpdGhlci5cbiAgICAgICAgcXVldWUgKz0gZnJvbUNoYXJDb2RlKGNoYXJhY3RlcilcbiAgICAgICAgY29sdW1uKytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCArIDFcbiAgICAgIGxldCBiZWdpbiA9IHN0YXJ0XG4gICAgICBsZXQgZW5kID0gc3RhcnRcbiAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgICAgbGV0IHR5cGVcblxuICAgICAgaWYgKGZvbGxvd2luZyA9PT0gMzUgLyogYCNgICovKSB7XG4gICAgICAgIC8vIE51bWVyaWNhbCByZWZlcmVuY2UuXG4gICAgICAgIGVuZCA9ICsrYmVnaW5cblxuICAgICAgICAvLyBUaGUgYmVoYXZpb3IgZnVydGhlciBkZXBlbmRzIG9uIHRoZSBuZXh0IGNoYXJhY3Rlci5cbiAgICAgICAgY29uc3QgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChlbmQpXG5cbiAgICAgICAgaWYgKGZvbGxvd2luZyA9PT0gODggLyogYFhgICovIHx8IGZvbGxvd2luZyA9PT0gMTIwIC8qIGB4YCAqLykge1xuICAgICAgICAgIC8vIEFTQ0lJIGhleGFkZWNpbWFsIGRpZ2l0cy5cbiAgICAgICAgICB0eXBlID0gJ2hleGFkZWNpbWFsJ1xuICAgICAgICAgIGVuZCA9ICsrYmVnaW5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBU0NJSSBkZWNpbWFsIGRpZ2l0cy5cbiAgICAgICAgICB0eXBlID0gJ2RlY2ltYWwnXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5hbWVkIHJlZmVyZW5jZS5cbiAgICAgICAgdHlwZSA9ICduYW1lZCdcbiAgICAgIH1cblxuICAgICAgbGV0IGNoYXJhY3RlclJlZmVyZW5jZUNoYXJhY3RlcnMgPSAnJ1xuICAgICAgbGV0IGNoYXJhY3RlclJlZmVyZW5jZSA9ICcnXG4gICAgICBsZXQgY2hhcmFjdGVycyA9ICcnXG4gICAgICAvLyBFYWNoIHR5cGUgb2YgY2hhcmFjdGVyIHJlZmVyZW5jZSBhY2NlcHRzIGRpZmZlcmVudCBjaGFyYWN0ZXJzLlxuICAgICAgLy8gVGhpcyB0ZXN0IGlzIHVzZWQgdG8gZGV0ZWN0IHdoZXRoZXIgYSByZWZlcmVuY2UgaGFzIGVuZGVkIChhcyB0aGUgc2VtaWNvbG9uXG4gICAgICAvLyBpcyBub3Qgc3RyaWN0bHkgbmVlZGVkKS5cbiAgICAgIGNvbnN0IHRlc3QgPVxuICAgICAgICB0eXBlID09PSAnbmFtZWQnXG4gICAgICAgICAgPyBpc0FscGhhbnVtZXJpY2FsXG4gICAgICAgICAgOiB0eXBlID09PSAnZGVjaW1hbCdcbiAgICAgICAgICA/IGlzRGVjaW1hbFxuICAgICAgICAgIDogaXNIZXhhZGVjaW1hbFxuXG4gICAgICBlbmQtLVxuXG4gICAgICB3aGlsZSAoKytlbmQgPD0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZyA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKVxuXG4gICAgICAgIGlmICghdGVzdChmb2xsb3dpbmcpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYXJhY3RlcnMgKz0gZnJvbUNoYXJDb2RlKGZvbGxvd2luZylcblxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBjYW4gbWF0Y2ggYSBsZWdhY3kgbmFtZWQgcmVmZXJlbmNlLlxuICAgICAgICAvLyBJZiBzbywgd2UgY2FjaGUgdGhhdCBhcyB0aGUgbGFzdCB2aWFibGUgbmFtZWQgcmVmZXJlbmNlLlxuICAgICAgICAvLyBUaGlzIGVuc3VyZXMgd2UgZG8gbm90IG5lZWQgdG8gd2FsayBiYWNrd2FyZHMgbGF0ZXIuXG4gICAgICAgIGlmICh0eXBlID09PSAnbmFtZWQnICYmIGNoYXJhY3RlckVudGl0aWVzTGVnYWN5LmluY2x1ZGVzKGNoYXJhY3RlcnMpKSB7XG4gICAgICAgICAgY2hhcmFjdGVyUmVmZXJlbmNlQ2hhcmFjdGVycyA9IGNoYXJhY3RlcnNcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBhbHdheXMgYWJsZSB0byBkZWNvZGUuXG4gICAgICAgICAgY2hhcmFjdGVyUmVmZXJlbmNlID0gZGVjb2RlTmFtZWRDaGFyYWN0ZXJSZWZlcmVuY2UoY2hhcmFjdGVycylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdGVybWluYXRlZCA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKSA9PT0gNTkgLyogYDtgICovXG5cbiAgICAgIGlmICh0ZXJtaW5hdGVkKSB7XG4gICAgICAgIGVuZCsrXG5cbiAgICAgICAgY29uc3QgbmFtZWRSZWZlcmVuY2UgPVxuICAgICAgICAgIHR5cGUgPT09ICduYW1lZCcgPyBkZWNvZGVOYW1lZENoYXJhY3RlclJlZmVyZW5jZShjaGFyYWN0ZXJzKSA6IGZhbHNlXG5cbiAgICAgICAgaWYgKG5hbWVkUmVmZXJlbmNlKSB7XG4gICAgICAgICAgY2hhcmFjdGVyUmVmZXJlbmNlQ2hhcmFjdGVycyA9IGNoYXJhY3RlcnNcbiAgICAgICAgICBjaGFyYWN0ZXJSZWZlcmVuY2UgPSBuYW1lZFJlZmVyZW5jZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkaWZmID0gMSArIGVuZCAtIHN0YXJ0XG4gICAgICBsZXQgcmVmZXJlbmNlID0gJydcblxuICAgICAgaWYgKCF0ZXJtaW5hdGVkICYmIG9wdGlvbnMubm9uVGVybWluYXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gRW1wdHkuXG4gICAgICB9IGVsc2UgaWYgKCFjaGFyYWN0ZXJzKSB7XG4gICAgICAgIC8vIEFuIGVtcHR5IChwb3NzaWJsZSkgcmVmZXJlbmNlIGlzIHZhbGlkLCB1bmxlc3MgaXTigJlzIG51bWVyaWMgKHRodXMgYW5cbiAgICAgICAgLy8gYW1wZXJzYW5kIGZvbGxvd2VkIGJ5IGFuIG9jdG90aG9ycCkuXG4gICAgICAgIGlmICh0eXBlICE9PSAnbmFtZWQnKSB7XG4gICAgICAgICAgd2FybmluZyg0IC8qIEVtcHR5IChudW1lcmljKSAqLywgZGlmZilcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmFtZWQnKSB7XG4gICAgICAgIC8vIEFuIGFtcGVyc2FuZCBmb2xsb3dlZCBieSBhbnl0aGluZyB1bmtub3duLCBhbmQgbm90IHRlcm1pbmF0ZWQsIGlzXG4gICAgICAgIC8vIGludmFsaWQuXG4gICAgICAgIGlmICh0ZXJtaW5hdGVkICYmICFjaGFyYWN0ZXJSZWZlcmVuY2UpIHtcbiAgICAgICAgICB3YXJuaW5nKDUgLyogVW5rbm93biAobmFtZWQpICovLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIHRoZXJl4oCZcyBzb21ldGhpbmcgYWZ0ZXIgYW4gbmFtZWQgcmVmZXJlbmNlIHdoaWNoIGlzIG5vdCBrbm93bixcbiAgICAgICAgICAvLyBjYXAgdGhlIHJlZmVyZW5jZS5cbiAgICAgICAgICBpZiAoY2hhcmFjdGVyUmVmZXJlbmNlQ2hhcmFjdGVycyAhPT0gY2hhcmFjdGVycykge1xuICAgICAgICAgICAgZW5kID0gYmVnaW4gKyBjaGFyYWN0ZXJSZWZlcmVuY2VDaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgZGlmZiA9IDEgKyBlbmQgLSBiZWdpblxuICAgICAgICAgICAgdGVybWluYXRlZCA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgdGhlIHJlZmVyZW5jZSBpcyBub3QgdGVybWluYXRlZCwgd2Fybi5cbiAgICAgICAgICBpZiAoIXRlcm1pbmF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYXNvbiA9IGNoYXJhY3RlclJlZmVyZW5jZUNoYXJhY3RlcnNcbiAgICAgICAgICAgICAgPyAxIC8qIE5vbiB0ZXJtaW5hdGVkIChuYW1lZCkgKi9cbiAgICAgICAgICAgICAgOiAzIC8qIEVtcHR5IChuYW1lZCkgKi9cblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZvbGxvd2luZyA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKVxuXG4gICAgICAgICAgICAgIGlmIChmb2xsb3dpbmcgPT09IDYxIC8qIGA9YCAqLykge1xuICAgICAgICAgICAgICAgIHdhcm5pbmcocmVhc29uLCBkaWZmKVxuICAgICAgICAgICAgICAgIGNoYXJhY3RlclJlZmVyZW5jZSA9ICcnXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBbHBoYW51bWVyaWNhbChmb2xsb3dpbmcpKSB7XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyUmVmZXJlbmNlID0gJydcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3YXJuaW5nKHJlYXNvbiwgZGlmZilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2FybmluZyhyZWFzb24sIGRpZmYpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVmZXJlbmNlID0gY2hhcmFjdGVyUmVmZXJlbmNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRlcm1pbmF0ZWQpIHtcbiAgICAgICAgICAvLyBBbGwgbm9udGVybWluYXRlZCBudW1lcmljIHJlZmVyZW5jZXMgYXJlIG5vdCByZW5kZXJlZCwgYW5kIGVtaXQgYVxuICAgICAgICAgIC8vIHdhcm5pbmcuXG4gICAgICAgICAgd2FybmluZygyIC8qIE5vbiB0ZXJtaW5hdGVkIChudW1lcmljKSAqLywgZGlmZilcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gdGVybWluYXRlZCBhbmQgbnVtZXJpY2FsLCBwYXJzZSBhcyBlaXRoZXIgaGV4YWRlY2ltYWwgb3JcbiAgICAgICAgLy8gZGVjaW1hbC5cbiAgICAgICAgbGV0IHJlZmVyZW5jZUNvZGUgPSBOdW1iZXIucGFyc2VJbnQoXG4gICAgICAgICAgY2hhcmFjdGVycyxcbiAgICAgICAgICB0eXBlID09PSAnaGV4YWRlY2ltYWwnID8gMTYgOiAxMFxuICAgICAgICApXG5cbiAgICAgICAgLy8gRW1pdCBhIHdhcm5pbmcgd2hlbiB0aGUgcGFyc2VkIG51bWJlciBpcyBwcm9oaWJpdGVkLCBhbmQgcmVwbGFjZSB3aXRoXG4gICAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXJhY3Rlci5cbiAgICAgICAgaWYgKHByb2hpYml0ZWQocmVmZXJlbmNlQ29kZSkpIHtcbiAgICAgICAgICB3YXJuaW5nKDcgLyogUHJvaGliaXRlZCAobnVtZXJpYykgKi8sIGRpZmYpXG4gICAgICAgICAgcmVmZXJlbmNlID0gZnJvbUNoYXJDb2RlKDY1NTMzIC8qIGDvv71gICovKVxuICAgICAgICB9IGVsc2UgaWYgKHJlZmVyZW5jZUNvZGUgaW4gY2hhcmFjdGVyUmVmZXJlbmNlSW52YWxpZCkge1xuICAgICAgICAgIC8vIEVtaXQgYSB3YXJuaW5nIHdoZW4gdGhlIHBhcnNlZCBudW1iZXIgaXMgZGlzYWxsb3dlZCwgYW5kIHJlcGxhY2UgYnlcbiAgICAgICAgICAvLyBhbiBhbHRlcm5hdGl2ZS5cbiAgICAgICAgICB3YXJuaW5nKDYgLyogRGlzYWxsb3dlZCAobnVtZXJpYykgKi8sIGRpZmYpXG4gICAgICAgICAgcmVmZXJlbmNlID0gY2hhcmFjdGVyUmVmZXJlbmNlSW52YWxpZFtyZWZlcmVuY2VDb2RlXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFBhcnNlIHRoZSBudW1iZXIuXG4gICAgICAgICAgbGV0IG91dHB1dCA9ICcnXG5cbiAgICAgICAgICAvLyBFbWl0IGEgd2FybmluZyB3aGVuIHRoZSBwYXJzZWQgbnVtYmVyIHNob3VsZCBub3QgYmUgdXNlZC5cbiAgICAgICAgICBpZiAoZGlzYWxsb3dlZChyZWZlcmVuY2VDb2RlKSkge1xuICAgICAgICAgICAgd2FybmluZyg2IC8qIERpc2FsbG93ZWQgKG51bWVyaWMpICovLCBkaWZmKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNlcmlhbGl6ZSB0aGUgbnVtYmVyLlxuICAgICAgICAgIGlmIChyZWZlcmVuY2VDb2RlID4gMHhmZmZmKSB7XG4gICAgICAgICAgICByZWZlcmVuY2VDb2RlIC09IDB4MTAwMDBcbiAgICAgICAgICAgIG91dHB1dCArPSBmcm9tQ2hhckNvZGUoKHJlZmVyZW5jZUNvZGUgPj4+ICgxMCAmIDB4M2ZmKSkgfCAweGQ4MDApXG4gICAgICAgICAgICByZWZlcmVuY2VDb2RlID0gMHhkYzAwIHwgKHJlZmVyZW5jZUNvZGUgJiAweDNmZilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWZlcmVuY2UgPSBvdXRwdXQgKyBmcm9tQ2hhckNvZGUocmVmZXJlbmNlQ29kZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGb3VuZCBpdCFcbiAgICAgIC8vIEZpcnN0IGVhdCB0aGUgcXVldWVkIGNoYXJhY3RlcnMgYXMgbm9ybWFsIHRleHQsIHRoZW4gZWF0IGEgcmVmZXJlbmNlLlxuICAgICAgaWYgKHJlZmVyZW5jZSkge1xuICAgICAgICBmbHVzaCgpXG5cbiAgICAgICAgcHJldmlvdXMgPSBub3coKVxuICAgICAgICBpbmRleCA9IGVuZCAtIDFcbiAgICAgICAgY29sdW1uICs9IGVuZCAtIHN0YXJ0ICsgMVxuICAgICAgICByZXN1bHQucHVzaChyZWZlcmVuY2UpXG4gICAgICAgIGNvbnN0IG5leHQgPSBub3coKVxuICAgICAgICBuZXh0Lm9mZnNldCsrXG5cbiAgICAgICAgaWYgKG9wdGlvbnMucmVmZXJlbmNlKSB7XG4gICAgICAgICAgb3B0aW9ucy5yZWZlcmVuY2UuY2FsbChcbiAgICAgICAgICAgIG9wdGlvbnMucmVmZXJlbmNlQ29udGV4dCxcbiAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgIHtzdGFydDogcHJldmlvdXMsIGVuZDogbmV4dH0sXG4gICAgICAgICAgICB2YWx1ZS5zbGljZShzdGFydCAtIDEsIGVuZClcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBwcmV2aW91cyA9IG5leHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHdlIGNvdWxkIG5vdCBmaW5kIGEgcmVmZXJlbmNlLCBxdWV1ZSB0aGUgY2hlY2tlZCBjaGFyYWN0ZXJzIChhc1xuICAgICAgICAvLyBub3JtYWwgY2hhcmFjdGVycyksIGFuZCBtb3ZlIHRoZSBwb2ludGVyIHRvIHRoZWlyIGVuZC5cbiAgICAgICAgLy8gVGhpcyBpcyBwb3NzaWJsZSBiZWNhdXNlIHdlIGNhbiBiZSBjZXJ0YWluIG5laXRoZXIgbmV3bGluZXMgbm9yXG4gICAgICAgIC8vIGFtcGVyc2FuZHMgYXJlIGluY2x1ZGVkLlxuICAgICAgICBjaGFyYWN0ZXJzID0gdmFsdWUuc2xpY2Uoc3RhcnQgLSAxLCBlbmQpXG4gICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcnNcbiAgICAgICAgY29sdW1uICs9IGNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgIGluZGV4ID0gZW5kIC0gMVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBIYW5kbGUgYW55dGhpbmcgb3RoZXIgdGhhbiBhbiBhbXBlcnNhbmQsIGluY2x1ZGluZyBuZXdsaW5lcyBhbmQgRU9GLlxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gMTAgLyogYFxcbmAgKi8pIHtcbiAgICAgICAgbGluZSsrXG4gICAgICAgIGxpbmVzKytcbiAgICAgICAgY29sdW1uID0gMFxuICAgICAgfVxuXG4gICAgICBpZiAoTnVtYmVyLmlzTmFOKGNoYXJhY3RlcikpIHtcbiAgICAgICAgZmx1c2goKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWUgKz0gZnJvbUNoYXJDb2RlKGNoYXJhY3RlcilcbiAgICAgICAgY29sdW1uKytcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIHJlZHVjZWQgbm9kZXMuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcblxuICAvLyBHZXQgY3VycmVudCBwb3NpdGlvbi5cbiAgZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5lLFxuICAgICAgY29sdW1uLFxuICAgICAgb2Zmc2V0OiBpbmRleCArICgocG9pbnQgPyBwb2ludC5vZmZzZXQgOiAwKSB8fCAwKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgdGhlIHdhcm5pbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7MXwyfDN8NHw1fDZ8N30gY29kZVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAqL1xuICBmdW5jdGlvbiB3YXJuaW5nKGNvZGUsIG9mZnNldCkge1xuICAgIC8qKiBAdHlwZSB7UmV0dXJuVHlwZTxub3c+fSAqL1xuICAgIGxldCBwb3NpdGlvblxuXG4gICAgaWYgKG9wdGlvbnMud2FybmluZykge1xuICAgICAgcG9zaXRpb24gPSBub3coKVxuICAgICAgcG9zaXRpb24uY29sdW1uICs9IG9mZnNldFxuICAgICAgcG9zaXRpb24ub2Zmc2V0ICs9IG9mZnNldFxuXG4gICAgICBvcHRpb25zLndhcm5pbmcuY2FsbChcbiAgICAgICAgb3B0aW9ucy53YXJuaW5nQ29udGV4dCxcbiAgICAgICAgbWVzc2FnZXNbY29kZV0sXG4gICAgICAgIHBvc2l0aW9uLFxuICAgICAgICBjb2RlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZsdXNoIGBxdWV1ZWAgKG5vcm1hbCB0ZXh0KS5cbiAgICogTWFjcm8gaW52b2tlZCBiZWZvcmUgZWFjaCByZWZlcmVuY2UgYW5kIGF0IHRoZSBlbmQgb2YgYHZhbHVlYC5cbiAgICogRG9lcyBub3RoaW5nIHdoZW4gYHF1ZXVlYCBpcyBlbXB0eS5cbiAgICovXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIGlmIChxdWV1ZSkge1xuICAgICAgcmVzdWx0LnB1c2gocXVldWUpXG5cbiAgICAgIGlmIChvcHRpb25zLnRleHQpIHtcbiAgICAgICAgb3B0aW9ucy50ZXh0LmNhbGwob3B0aW9ucy50ZXh0Q29udGV4dCwgcXVldWUsIHtcbiAgICAgICAgICBzdGFydDogcHJldmlvdXMsXG4gICAgICAgICAgZW5kOiBub3coKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYGNoYXJhY3RlcmAgaXMgb3V0c2lkZSB0aGUgcGVybWlzc2libGUgdW5pY29kZSByYW5nZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY29kZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHByb2hpYml0ZWQoY29kZSkge1xuICByZXR1cm4gKGNvZGUgPj0gMHhkODAwICYmIGNvZGUgPD0gMHhkZmZmKSB8fCBjb2RlID4gMHgxMGZmZmZcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgY2hhcmFjdGVyYCBpcyBkaXNhbGxvd2VkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZGlzYWxsb3dlZChjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgKGNvZGUgPj0gMHgwMDAxICYmIGNvZGUgPD0gMHgwMDA4KSB8fFxuICAgIGNvZGUgPT09IDB4MDAwYiB8fFxuICAgIChjb2RlID49IDB4MDAwZCAmJiBjb2RlIDw9IDB4MDAxZikgfHxcbiAgICAoY29kZSA+PSAweDAwN2YgJiYgY29kZSA8PSAweDAwOWYpIHx8XG4gICAgKGNvZGUgPj0gMHhmZGQwICYmIGNvZGUgPD0gMHhmZGVmKSB8fFxuICAgIChjb2RlICYgMHhmZmZmKSA9PT0gMHhmZmZmIHx8XG4gICAgKGNvZGUgJiAweGZmZmYpID09PSAweGZmZmVcbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/parse-entities/lib/index.js\n");

/***/ })

};
;