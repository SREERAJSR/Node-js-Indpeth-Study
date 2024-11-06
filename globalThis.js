console.log(global)  // global refers to global object in nodejs
console.log(this) //this refers to empty object in node js 
console.log(globalThis === global) //globalThis also refers to global object in node js


// which means globalThis will be global object in every platforms , node js , browsers etc
// consistent way to access the global object in all platforms

 