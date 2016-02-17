"use strict";
class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}

console.log("hey there");
var stuff = new Startup();
Startup.main(); 
 
async function other() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('value'), 3000);
  });;
}

(async function() {
  console.log('Hello, world!');
  console.log(await other());
  console.log('Hello, world!');
})();