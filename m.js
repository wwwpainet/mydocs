function findLongestWord(arr) {
    // 第1步：将传给str的值"May the force be with you"
    var array = arr.split(' '); // 得到数组 ["May", "the", "force", "be", "with", "you"]
    var longest = 0;

    // 第2步：对数组array做遍历，并且将符合条件的值赋值给longest
    for (var i = 0, len = array.length; i < len; i++) {
        if (array[i].length > longest) {
            longest = array[i].length;
        }
    }
    return longest;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));  // 6
console.log(findLongestWord("May the force be with you"));  // 5