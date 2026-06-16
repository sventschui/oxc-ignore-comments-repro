import { transform } from "oxc-transform";
import assert from "node:assert/strict";
import test from "node:test";

async function t(code) {
  const result = await transform("test.js", code, {
    jsx: { runtime: "automatic" },
    lang: "jsx",
  });

  assert.deepEqual(result.errors, []);

  return result.code.trim().replace(/[\n\t]+/g, " ");
}

test("keeps ignore comments after nullish colescing", async () => {
  assert.equal(
    await t(
      `const nullish_coleascing = 1 ?? /* istanbul ignore next -- @preserve */ 0;`
    ),
    `const nullish_coleascing = 1 ?? /* istanbul ignore next -- @preserve */ 0;`
  );
});

test("keeps ignore comments in ternary-if-branch", async () => {
  assert.equal(
    await t(
      `const foo = false ? /* istanbul ignore next -- @preserve */ "yes" : "no";`
    ),
    `const foo = false ? /* istanbul ignore next -- @preserve */ "yes" : "no";`
  );
});

test("keeps ignore comments in ternary-if-branch inside object property", async () => {
  assert.equal(
    await t(
      `const foo = { ternary_if_broken: false ? /* istanbul ignore next -- @preserve */ "yes" : "no" };`
    ),
    `const foo = { ternary_if_broken: false ? /* istanbul ignore next -- @preserve */ "yes" : "no" };`
  );
});

test("keeps ignore comments inside if, after &&", async () => {
  assert.equal(
    await t(
      `if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }`
    ),
    `if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }`
  );
});

test("keeps ignore comments inside if, after &&", async () => {
  assert.equal(
    await t(
      `if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }`
    ),
    `if (false && /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }`
  );
});

test("keeps ignore comments inside if, after ||", async () => {
  assert.equal(
    await t(
      `if (true || /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }`
    ),
    `if (true || /* istanbul ignore next -- @preserve */ one === "true") { console.log("here"); }`
  );
});

test("keeps ignore comments in JSX props", async () => {
  assert.equal(
    await t(`
function f({ onUpdate }) {
  return (
    <Inner
      removeSelection={
        /* istanbul ignore next -- @preserve */ () => onUpdate(null)
      }
    />
  )
}`),
    `var _reactJsxRuntime = require("react/jsx-runtime"); function f({ onUpdate }) { return /* @__PURE__ */ _reactJsxRuntime.jsx(Inner, { removeSelection: /* istanbul ignore next -- @preserve */ () => onUpdate(null) }); }`
  );
});

test("keeps ignore comments in JSX props", async () => {
  assert.equal(
    await t(`
function g({ items }) {
  return (
    <div>
      {/* istanbul ignore start -- @preserve */}
      {items && <Item />}
      {/* istanbul ignore stop -- @preserve */}
    </div>
  )
}`),
    `var _reactJsxRuntime = require("react/jsx-runtime"); function g({ items }) { return /* @__PURE__ */ _reactJsxRuntime.jsx("div", { children: [ /* istanbul ignore start -- @preserve */ items && /* @__PURE__ */ _reactJsxRuntime.jsx(Item, {}), /* istanbul ignore stop -- @preserve */ ] }) }`
  );
});
