function flatten(arr) {
return arr.reduce(function(result, next){
return result.concat(Array.isArray(next) ? flatten(next) : next)
}, [])
}
module.exports.Flatten = (arr) => {
    return flatten(arr);
}