// let Girl = (function() {
//     var _weight = 0

//     function P(name, weight) {
//         this.name = name
//         _weight = weight
//     }
//     P.prototype.getWeight = function() {
//         return _weight
//     }
//     return P
// })()

// let girl = new Girl('zizi', 49)

let Girl = (function() {
    var n = Symbol('weight')

    function P(name, weight) {
        this.name = name
        this[n] = weight
    }
    P.prototype.getWeight = function() {
        return this[n]
    }
    return P
})()

let girl = new Girl('zizi', 49)
console.log(girl)
console.log(girl.getWeight())