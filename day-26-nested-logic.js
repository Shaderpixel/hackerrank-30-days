function processData(input) {
    //Enter your code here
    const [actual, due] = input.split('\n');

    const [actualDate, actualMonth, actualYear] = actual.split(' ').map(Number);
    const actualDateObj = new Date(actualYear, actualMonth, actualDate);

    const [dueDate, dueMonth, dueYear] = due.split(' ').map(Number);
    const dueDateObj = new Date(dueYear, dueMonth, dueDate);

    let fine = null;

    if (actualDateObj.valueOf() <= dueDateObj.valueOf()) {
        fine = 0;
    } else if (actualYear === dueYear) {
        if (actualMonth === dueMonth) {
            fine = Math.abs(actualDate - dueDate)*15;
        } else {
            // can't use actualDateObj.getMonth(), dates such as 5/31/year will produce 6 instead of 5
            // console.log(actualDateObj.getMonth(), dueDateObj.getMonth());
            fine = Math.abs(actualMonth - dueMonth)*500;
        }
    } else {
        fine = 10000;
    }
    process.stdout.write(`${fine}`);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
