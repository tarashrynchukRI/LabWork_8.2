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

module.exports = deleteBetweenBrackets;
