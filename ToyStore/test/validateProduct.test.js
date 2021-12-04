const validateProduct = require("./validateProduct");



test("testcase1", () => {
   expect(validateProduct(null,"/images/BatmanStrech.PNG",'DC','toy','high quality product',220,2,4.8,17)).toBe(false)
  })
test("testcase2", () => {
    expect(validateProduct('Batman Action Figure',"/images/BatmanStrech.PNG",'DC','toy','high quality product',-220,2,4.8,17)).toBe(false)
    
  })
test("testcase3", () => {
    expect(validateProduct('Batman Action Figure',"/images/BatmanStrech.PNG",'DC','toy','high quality product',220,2,-4.8,17)).toBe(false)

  }) 
test("testcase4", () => {
    expect(validateProduct('Batman Action Figure',"/images/BatmanStrech.PNG",'DC','toy','high quality product',220,null,4.8,17)).toBe(false)

  }) 

test("testcase5", () => {
    expect(validateProduct('Batman Action Figure',null,'DC','toy','high quality product',220,2,4.8,17)).toBe(false)
   })
test("testcase6", () => {
     expect(validateProduct('Batman Action Figure',"/images/BatmanStrech.PNG",null,'toy','high quality product',220,2,4.8,17)).toBe(false)
     
   })
test("testcase7", () => {
     expect(validateProduct('Batman Action Figure',"/images/BatmanStrech.PNG",'DC',null,'high quality product',220,2,4.8,17)).toBe(false)
 
   }) 
test("testcase8", () => {
     expect(validateProduct('Batman Action Figure',"/images/BatmanStrech.PNG",'DC','toy',null,220,2,4.8,17)).toBe(false)
 
   }) 

test("testcase9", () => {
    expect(validateProduct('Batman Action Figure',"/images/BatmanStrech.PNG",'DC','toy','high quality product',null,2,4.8,17)).toBe(false)
   })
test("testcase10", () => {
     expect(validateProduct('Batman Action Figure',"/images/BatmanStrech.PNG",'DC','toy','high quality product',220,-4,4.8,17)).toBe(false)
 }) 
 test("testcase11", () => {
    expect(validateProduct('Batman Action Figure',"/images/BatmanStrech.PNG",'DC','toy','high quality product',220,2,4.8,-17)).toBe(false)
   })
test("testcase12", () => {
     expect(validateProduct('Batman Action Figure',"/images/BatmanStrech.PNG",'DC','toy','high quality product',220,4,4.8,17)).toBe(true)
 }) 
  
  