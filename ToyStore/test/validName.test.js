const validateName = require("./validName");

test("testcase1", () => {
   expect(validateName(null)).toBe(false)
  })
test("testcase2", () => {
    expect(validateName("John")).toBe(true)
  })
test("testcase3", () => {
    expect(validateName("john")).toBe(true)
  }) 
test("testcase4", () => {
    expect(validateName("john234")).toBe(false)
  }) 