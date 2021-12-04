const addItem = require("./addItem")



test("testcase1", () => {
  expect(addItem(200)).toBe(700)
})
test("testcase2", () => {
  expect(addItem(500)).toBe(1000)
})
