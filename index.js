// Your code here
function mapToNegativize(arrayToNegative) {
    let r = []
        for(let i = 0; i < arrayToNegative.length; i++) {
            r.push(-1 * arrayToNegative[i])
        }
    return r
}

function mapToNoChange(arrayToRemain) {
    let r = []
        for(let i = 0; i < arrayToRemain.length; i++) {
            r.push(arrayToRemain[i])
        }
    return r
}

function mapToDouble(arrayToDouble) {
    let r = []
        for(let i = 0; i < arrayToDouble.length; i++) {
            r.push(2 * arrayToDouble[i])
        }
    return r
}

function mapToSquare(arrayToSquare) {
    let r = []
        for(let i =0; i < arrayToSquare.length; i++) {
            r.push(arrayToSquare[i] * arrayToSquare[i])
        }
    return r
}

function reduceToTotal(arrayToTotal, startingPoint= 0) {
    let total = startingPoint
    for (let i = 0; i < arrayToTotal.length; i++) {
        total = total + arrayToTotal[i]
    }
    return total
}

function reduceToAllTrue(arrayToAllTrue) {
    for(let i = 0; i < arrayToAllTrue.length; i++) {
        if (!arrayToAllTrue[i]) return false
    }
    return true
}

function reduceToAnyTrue(arrayToAnyTrue) {
    for(let i = 0; i < arrayToAnyTrue.length; i++) {
        if (arrayToAnyTrue[i]) return true
    }
    return false
}