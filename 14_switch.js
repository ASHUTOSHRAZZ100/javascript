// switch syntax

/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

const stringMonth = "Mar"

switch (stringMonth) {
    case "Jan":
        console.log("January")
        break;
    case "Feb":
        console.log("Feb")
        break;
    case "Mar":
        console.log("Mar")
        break;
    case "Apr":
        console.log("Apr")
        break;
    case "May":
        console.log("May")
        break;

    default:
        console.log("key does not match")
        break;
}
const numberMonth = 3

switch (numberMonth) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        break;
    case 4:
        console.log("Apr")
        break;
    case 3:
        console.log("May")
        break;

    default:
        console.log("key does not match")
        break;
}