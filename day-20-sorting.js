process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    let numSwaps = 0;
    let sorted = [...a];

    /*
    * Traditional for loop
    */
    // for (let i = 0; i < sorted.length; i++) {
    //     sorted = sorted.map((val, i) => {
    //         if (val > sorted[i+1]) {
    //             const nextVal = sorted[i+1];
    //             sorted[i + 1] = val;
    //             numSwaps += 1;
    //             return nextVal;
    //         }
    //         return val;
    //     })
    // }


    /*
    * Using Array.prototype.sort
    * fails checker in third test case.
    * it does way too many swaps..
    */
    // for (let i = 0; i < sorted.length; i++) {
    //     sorted.sort((prev, next) => {
    //         if (prev > next) {
    //             numSwaps += 1;
    //             return 1;
    //         }

    //         return -1;
    //     })
    // }

    /*
    * Using recursive function
    */
    let counter = 0;
    function swap() {
        if (counter === sorted.length) return;
        sorted = sorted.map((val, i) => {
            if (val > sorted[i+1]) {
                const nextVal = sorted[i+1];
                sorted[i + 1] = val;
                numSwaps += 1;
                return nextVal;
            }
            return val;
        })
        counter+=1
        swap()
    }

    swap();






    // console.log(sorted);
    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First Element: ${sorted[0]}`);
    console.log(`Last Element: ${sorted[sorted.length - 1]}`);


    // TODO recursive version
    // TODO use array.sort
}

