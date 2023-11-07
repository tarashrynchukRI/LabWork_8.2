// Гринчук Тарас
// Лабораторна робота № 8.2
// Варіант №4

function deleteBetweenBrackets(string) {
   let stack = [];
   let result = "";

   for (let i = 0; i < string.length; i++) {
      if (string[i] === "(") {
         stack.push(i);
      } else if (string[i] === ")") {
         stack.pop();
      } else if (stack.length === 0) {
         result += string[i];
      }
   }

   return result;
}

let string = "Це рядок з (декількома) дужками, (в тому числі (вкладеними) дужками).";
console.log(string);
console.log(deleteBetweenBrackets(string));
