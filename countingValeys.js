// Complete the countingValleys function in the editor below. 
//It must return an integer that denotes the number of valleys Gary traversed.

// countingValleys has the following parameter(s):

// n: the number of steps Gary takes
// s: a string describing his path

function countingValleys(n, s) {
    var start = 0
    var valleys = 0
    var mountain = 0
    
    for (var i = 0; i < n; i++) {
        if(s[i] == "U") {
            start = start + 1
            console.log(s[i] + ": " + start)
            if (start == 1) {
                mountain = mountain + 1
                console.log("Mountains: ", mountain)
            }
        } else if (s[i] == "D") {
            start = start - 1
            console.log(s[i] + ": " + start)
            if (start == -1) {
                valleys = valleys + 1
                console.log("Valley: ", valleys)
            }
        }
    }
    // console.log("Mountains: ", mountain)
    // console.log("Valley: ", valleys)
    return valleys
}

countingValleys(6, "DDUUUD")