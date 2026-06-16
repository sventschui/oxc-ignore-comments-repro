# oxc-repro

```sh
yarn
node --test repro.js
```

```
✖ keeps ignore comments after nullish colescing (5.0505ms)
✖ keeps ignore comments in ternary-if-branch (1.143084ms)
✖ keeps ignore comments in ternary-if-branch inside object property (0.500834ms)
✖ keeps ignore comments inside if, after && (0.360416ms)
✖ keeps ignore comments inside if, after && (0.311375ms)
✖ keeps ignore comments inside if, after || (0.2545ms)
✖ keeps ignore comments in JSX props (0.545084ms)
✖ keeps ignore comments in JSX props (0.497208ms)
✖ keeps ignore comments in template literals (0.309708ms)
ℹ tests 9
ℹ suites 0
ℹ pass 0
ℹ fail 9
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 226.472042

✖ failing tests:

test at repro.js:16:1
✖ keeps ignore comments after nullish colescing (5.0505ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'const nullish_coleascing = 1 ?? 0;'
  - 'const nullish_coleascing = 1 ?? /* istanbul ignore next -- @preserve */ 0;'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:17:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async startSubtestAfterBootstrap (node:internal/test_runner/harness:358:3) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'const nullish_coleascing = 1 ?? 0;',
    expected: 'const nullish_coleascing = 1 ?? /* istanbul ignore next -- @preserve */ 0;',
    operator: 'strictEqual',
    diff: 'simple'
  }

test at repro.js:25:1
✖ keeps ignore comments in ternary-if-branch (1.143084ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'const foo = false ? "yes" : "no";'
  - 'const foo = false ? /* istanbul ignore next -- @preserve */ "yes" : "no";'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:26:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:787:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'const foo = false ? "yes" : "no";',
    expected: 'const foo = false ? /* istanbul ignore next -- @preserve */ "yes" : "no";',
    operator: 'strictEqual',
    diff: 'simple'
  }

test at repro.js:34:1
✖ keeps ignore comments in ternary-if-branch inside object property (0.500834ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'const foo = { ternary_if_broken: false ? "yes" : "no" };'
  - 'const foo = { ternary_if_broken: false ? /* istanbul ignore next -- @preserve */ "yes" : "no" };'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:35:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:787:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'const foo = { ternary_if_broken: false ? "yes" : "no" };',
    expected: 'const foo = { ternary_if_broken: false ? /* istanbul ignore next -- @preserve */ "yes" : "no" };',
    operator: 'strictEqual',
    diff: 'simple'
  }

test at repro.js:43:1
✖ keeps ignore comments inside if, after && (0.360416ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'if (false && one === "true") { console.log("here"); }'
  - 'if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:44:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:787:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'if (false && one === "true") { console.log("here"); }',
    expected: 'if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }',
    operator: 'strictEqual',
    diff: 'simple'
  }

test at repro.js:52:1
✖ keeps ignore comments inside if, after && (0.311375ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'if (false && one === "true") { console.log("here"); }'
  - 'if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:53:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:787:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'if (false && one === "true") { console.log("here"); }',
    expected: 'if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }',
    operator: 'strictEqual',
    diff: 'simple'
  }

test at repro.js:61:1
✖ keeps ignore comments inside if, after || (0.2545ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'if (true || one === "true") { console.log("here"); }'
  - 'if (true || /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:62:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:787:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'if (true || one === "true") { console.log("here"); }',
    expected: 'if (true || /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }',
    operator: 'strictEqual',
    diff: 'simple'
  }

test at repro.js:70:1
✖ keeps ignore comments in JSX props (0.545084ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'var _reactJsxRuntime = require("react/jsx-runtime"); function f({ onUpdate }) { return /* @__PURE__ */ _reactJsxRuntime.jsx(Inner, { removeSelection: () => onUpdate(null) }); }'
  - 'var _reactJsxRuntime = require("react/jsx-runtime"); function f({ onUpdate }) { return /* @__PURE__ */ _reactJsxRuntime.jsx(Inner, { removeSelection: /* istanbul ignore next -- @preserve */ () => onUpdate(null) }); }'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:71:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:787:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'var _reactJsxRuntime = require("react/jsx-runtime"); function f({ onUpdate }) { return /* @__PURE__ */ _reactJsxRuntime.jsx(Inner, { removeSelection: () => onUpdate(null) }); }',
    expected: 'var _reactJsxRuntime = require("react/jsx-runtime"); function f({ onUpdate }) { return /* @__PURE__ */ _reactJsxRuntime.jsx(Inner, { removeSelection: /* istanbul ignore next -- @preserve */ () => onUpdate(null) }); }',
    operator: 'strictEqual',
    diff: 'simple'
  }

test at repro.js:86:1
✖ keeps ignore comments in JSX props (0.497208ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'var _reactJsxRuntime = require("react/jsx-runtime"); function g({ items }) { return /* @__PURE__ */ _reactJsxRuntime.jsx("div", { children: items && /* @__PURE__ */ _reactJsxRuntime.jsx(Item, {}) }); }'
  - 'var _reactJsxRuntime = require("react/jsx-runtime"); function g({ items }) { return /* @__PURE__ */ _reactJsxRuntime.jsx("div", { children: [ /* istanbul ignore start -- @preserve */ items && /* @__PURE__ */ _reactJsxRuntime.jsx(Item, {}), /* istanbul ignore stop -- @preserve */ ] }) }'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:87:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:787:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'var _reactJsxRuntime = require("react/jsx-runtime"); function g({ items }) { return /* @__PURE__ */ _reactJsxRuntime.jsx("div", { children: items && /* @__PURE__ */ _reactJsxRuntime.jsx(Item, {}) }); }',
    expected: 'var _reactJsxRuntime = require("react/jsx-runtime"); function g({ items }) { return /* @__PURE__ */ _reactJsxRuntime.jsx("div", { children: [ /* istanbul ignore start -- @preserve */ items && /* @__PURE__ */ _reactJsxRuntime.jsx(Item, {}), /* istanbul ignore stop -- @preserve */ ] }) }',
    operator: 'strictEqual',
    diff: 'simple'
  }

test at repro.js:103:1
✖ keeps ignore comments in template literals (0.309708ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'const foo = `${() => undefined}`;'
  - 'const foo = `${/* istanbul ignore next -- @preserve */ () => undefined}`;'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:104:14)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:787:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'const foo = `${() => undefined}`;',
    expected: 'const foo = `${/* istanbul ignore next -- @preserve */ () => undefined}`;',
    operator: 'strictEqual',
    diff: 'simple'
  }
```