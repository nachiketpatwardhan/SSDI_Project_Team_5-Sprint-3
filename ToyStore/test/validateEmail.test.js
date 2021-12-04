//const { register } = require("../frontend/src/actions/userActions")
const validateEmail = require("./validateEmail")

// test("testcase1", () => {
//   expect(register).toMatchObject({
//     subject: expect.any(String),
//     body: expect.any(String),
//     recipientAddress: expect.stringMatching(
//       /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
//     ),
//   })
// })

test("testcase1", () => {
    expect(validateEmail("")).toBe(false)
  })
test("testcase2", () => {
    expect(validateEmail("sdrfg")).toBe(false)
  })
test("testcase3", () => {
    expect(validateEmail("abc@test.com")).toBe(true)
  })
test("testcase4", () => {
    expect(validateEmail("@xdfg.com")).toBe(false)
  })
test("testcase5", () => {
    expect(validateEmail("123@testcom")).toBe(true)
  })


  

  