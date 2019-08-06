/*Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.
*/

function repeatedString (s,n) {
    var infiniteString = ""
    var counter = 0
    for (var i = 0; i < n; i ++) {
        infiniteString = infiniteString + s
        infiniteString[i]
        if (i <= n) {
            if (infiniteString[i].toLowerCase() == "a"){
                counter = counter + 1
                console.log(infiniteString[i] + ": " + counter)
            }
        }
    }
    console.log(counter)
    console.log(infiniteString)
}

repeatedString("aaaaaaaahh", 10)