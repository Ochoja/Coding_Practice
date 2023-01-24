/*using `throw` keyword*/

function add(a, b) {
    if (isNaN(a)) {
	throw new Error("a is not a number");
    } else if (isNaN(b)) {
	throw new Error("b is not a number");
    } else
	return (a + b);
}

try {
    console.log(add(5, "string"))
} catch(error) {
    console.log("Something went wrong " + error)
}
