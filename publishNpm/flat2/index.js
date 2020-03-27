function flatten(arr) {
while (arr.some(item => Array.isArray(item))) {
arr = [].concat(...arr);
}
return arr;
}
module.exports.Flatten = (arr) => {
    return flatten(arr);
}