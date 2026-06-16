# oxc-repro

```sh
yarn
node --test repro.js
```

```
✖ keeps ignore comments after nullish colescing (1.786375ms)
✖ keeps ignore comments in ternary-if-branch (0.93825ms)
✖ keeps ignore comments in ternary-if-branch inside object property (0.325708ms)
✖ keeps ignore comments inside if, after && (0.301ms)
✖ keeps ignore comments inside if, after && (0.271542ms)
✖ keeps ignore comments inside if, after || (0.225416ms)
ℹ tests 6
ℹ suites 0
ℹ pass 0
ℹ fail 6
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 50.756875

✖ failing tests:

test at repro.js:11:1
✖ keeps ignore comments after nullish colescing (1.786375ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'const nullish_coleascing = 1 ?? 0;'
  - 'const nullish_coleascing = 1 ?? /* istanbul ignore next -- @preserve */ 0;'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:12:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async startSubtestAfterBootstrap (node:internal/test_runner/harness:358:3) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'const nullish_coleascing = 1 ?? 0;',
    expected: 'const nullish_coleascing = 1 ?? /* istanbul ignore next -- @preserve */ 0;',
    operator: 'strictEqual',
    diff: 'simple'
  }

test at repro.js:15:1
✖ keeps ignore comments in ternary-if-branch (0.93825ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'const foo = false ? "yes" : "no";'
  - 'const foo = false ? /* istanbul ignore next -- @preserve */ "yes" : "no";'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:16:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:787:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'const foo = false ? "yes" : "no";',
    expected: 'const foo = false ? /* istanbul ignore next -- @preserve */ "yes" : "no";',
    operator: 'strictEqual',
    diff: 'simple'
  }

test at repro.js:19:1
✖ keeps ignore comments in ternary-if-branch inside object property (0.325708ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'const foo = { ternary_if_broken: false ? "yes" : "no" };'
  - 'const foo = { ternary_if_broken: false ? /* istanbul ignore next -- @preserve */ "yes" : "no" };'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:20:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:787:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'const foo = { ternary_if_broken: false ? "yes" : "no" };',
    expected: 'const foo = { ternary_if_broken: false ? /* istanbul ignore next -- @preserve */ "yes" : "no" };',
    operator: 'strictEqual',
    diff: 'simple'
  }

test at repro.js:23:1
✖ keeps ignore comments inside if, after && (0.301ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'if (false && one === "true") { console.log("here"); }'
  - 'if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:24:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:787:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'if (false && one === "true") { console.log("here"); }',
    expected: 'if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }',
    operator: 'strictEqual',
    diff: 'simple'
  }

test at repro.js:27:1
✖ keeps ignore comments inside if, after && (0.271542ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'if (false && one === "true") { console.log("here"); }'
  - 'if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:28:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:787:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'if (false && one === "true") { console.log("here"); }',
    expected: 'if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }',
    operator: 'strictEqual',
    diff: 'simple'
  }

test at repro.js:31:1
✖ keeps ignore comments inside if, after || (0.225416ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 'if (true || one === "true") { console.log("here"); }'
  - 'if (true || /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }'
  
      at TestContext.<anonymous> (file:///Users/tss/code/github.com/sventschui/oxc-repro/repro.js:32:10)
      at async Test.run (node:internal/test_runner/test:1125:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:787:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'if (true || one === "true") { console.log("here"); }',
    expected: 'if (true || /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }',
    operator: 'strictEqual',
    diff: 'simple'
  }
```
