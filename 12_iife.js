// Immediately Invoked Function Expression (IIFE)


// named IIFE
(function chai(){
    console.log("DB connected")
})(); //  DB connected


(() => {
    console.log("DB Connected Two")
})(); // DB Connected Two


// Parameter IIFE
((name) => {
    console.log(`DB Connected Three ${name}`)
})("Ashutosh"); // DB Connected Three Ashutosh




