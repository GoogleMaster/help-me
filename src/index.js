module.exports = function count(s, pairs) {
  // your implementation
    var answerMod = 1000000007;
    var k = 1;
    if (s == "1"){
        for (let i = 0; i < pairs.length; i++) {
            k *= (pairs[i][0] - 1);
        }
        return k % answerMod;
    }
    return k % answerMod;
}