const emptyCart = require("./emptyCart")

test("testcase1", () => {
    expect(emptyCart(0)).toBe(true)
  })
test("testcase2", () => {
      expect(emptyCart(4)).toBe(false)
    })