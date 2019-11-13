'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine(), 10);
    let nameArray = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];

        // using includes
        // if (emailID.includes('@gmail.com')) {
        //     nameArray.push(firstName);
        // }

        // using regex
        const regex = new RegExp('[a-z]+@gmail.com','gi');
        if (emailID.match(regex)) {
            nameArray.push(firstName);
        }
    }
    // nameArray = nameArray.sort((prev,next) =>  prev > next? 1 : -1);
    nameArray.sort((prev,next) =>  prev > next? 1 : -1).forEach(name => console.log(name));
    // console.log(nameArray);
}