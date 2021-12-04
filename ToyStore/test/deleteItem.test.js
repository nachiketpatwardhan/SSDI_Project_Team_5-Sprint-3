const deleteItem = require("./deleteItem")


test("testcase1", () => {
  expect(deleteItem(200)).toBe(800)
})
test("testcase2", () => {
  expect(deleteItem(500)).toBe(500)
})
