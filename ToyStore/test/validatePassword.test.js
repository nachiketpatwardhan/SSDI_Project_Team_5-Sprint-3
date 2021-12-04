const validatePassword = require("./validatePassword")

test("testcase1", () => {
  expect(validatePassword("")).toBe(false)
})
test("testcase2", () => {
  expect(validatePassword("fcvbngfdfg")).toBe(false)
})
test("testcase3", () => {
  expect(validatePassword("452765468")).toBe(false)
})
test("testcase4", () => {
  expect(validatePassword("12512ajskdhgk")).toBe(true)
})
test("testcase5", () => {
  expect(validatePassword("Hs34")).toBe(false)
})
test("testcase6", () => {
  expect(validatePassword("1FGHDFA466")).toBe(true)
})
test("rtestcase7", () => {
  expect(validatePassword("fv23fgVHGV7")).toBe(true)
})



