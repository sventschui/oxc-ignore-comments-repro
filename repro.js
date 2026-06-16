import { transform } from 'oxc-transform';
import assert from 'node:assert/strict';
import test from 'node:test'

async function t(code) {
    const result = await transform('test.js', code);

    return result.code.trim().replace(/[\n\t]+/g, ' ');
}

test('keeps ignore comments after nullish colescing', async () => {
  assert.equal(await t(`const nullish_coleascing = 1 ?? /* istanbul ignore next -- @preserve */ 0;`), `const nullish_coleascing = 1 ?? /* istanbul ignore next -- @preserve */ 0;`);
});

test('keeps ignore comments in ternary-if-branch', async () => {
  assert.equal(await t(`const foo = false ? /* istanbul ignore next -- @preserve */ "yes" : "no";`), `const foo = false ? /* istanbul ignore next -- @preserve */ "yes" : "no";`);
});

test('keeps ignore comments in ternary-if-branch inside object property', async () => {
  assert.equal(await t(`const foo = { ternary_if_broken: false ? /* istanbul ignore next -- @preserve */ "yes" : "no" };`), `const foo = { ternary_if_broken: false ? /* istanbul ignore next -- @preserve */ "yes" : "no" };`);
});

test('keeps ignore comments inside if, after &&', async () => {
  assert.equal(await t(`if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }`), `if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }`);
});

test('keeps ignore comments inside if, after &&', async () => {
  assert.equal(await t(`if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }`), `if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }`);
});

test('keeps ignore comments inside if, after ||', async () => {
  assert.equal(await t(`if (true || /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }`), `if (true || /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }`);
});
