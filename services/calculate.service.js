
//NOTE: url issue disruptive operators value like +- etc...
OPERATIONS = {
    "addition": (n1,n2) => { return n1 + n2},
    "subtraction": (n1,n2) => { return n1 - n2},
    "multiply": (n1,n2) => { return n1 * n2},
    "division": (n1,n2) => { return n1 / n2},
}

module.exports = {
    OPERATIONS: OPERATIONS
}