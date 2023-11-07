const deleteBetweenBrackets = require("./script-test");

describe('deleteBetweenBrackets', () => {
   test('видаляє символи між дужками', () => {
       expect(deleteBetweenBrackets("Це рядок з (декількома) дужками, (в тому числі (вкладеними) дужками)."))
           .toBe("Це рядок з  дужками, .");
   });

   test('не видаляє символи, якщо немає дужок', () => {
       expect(deleteBetweenBrackets("Це рядок без дужок."))
           .toBe("Це рядок без дужок.");
   });

   test('видаляє вкладені дужки', () => {
       expect(deleteBetweenBrackets("Це рядок з (декількома (вкладеними) дужками)."))
           .toBe("Це рядок з .");
   });
});