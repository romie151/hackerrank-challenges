/* 
Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. 
It is always possible to win the game.

Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. 
For example,  c = [0, 1, 0, 0, 0, 1, 0] indexed from 0...6 . 
The number on each cloud is its index in the list so she must avoid the clouds at indexes 1 and 5. 
She could follow the following two paths: 0 - 2 - 4 - 6 or 0 - 2 - 3 - 4 - 6. 
The first path takes 3 jumps while the second takes 4 . 

Complete the jumpingOnClouds function in the editor below. 
It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

c: an array of binary integers
*/

function jumpingOnClouds(c) {
    var path = []

    // loop checks for the safe clouds and puts the index into an array called path
    for (var i = 0; i < c.length; i++) {
        if (c[i] == 0) {
            path.push(i)
        }
    }
    
    //loops through path to find where I can eliminate a step to make the least amount of moves
    for (var i = 0; i < path.length; i++) {
        // console.log(path[i])
        if ((path[i - 1] == path[i] - 1) && (path[i + 1] == path[i] + 1)) {
            console.log(i, path[i])
            path.splice(i, 1)
        }
    }
    return path.length - 1
}

jumpingOnClouds([0, 0, 1, 0, 0, 0, 1, 0, 0, 0])

/*
    For a number to be conseutive it has to be -1 than the current and +1 than t he current value
*/
