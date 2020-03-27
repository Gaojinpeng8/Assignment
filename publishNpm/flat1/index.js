const flatten = (arr) => {
    var result=[];
    for (let i of arr) {
        if (Array.isArray(i)) {
            result = result.concat(flatten(i))
        } else {
            result.push(i);
        }
    }
    return result;
}
module.exports.Flatten = (arr) => {
    return flatten(arr);
}