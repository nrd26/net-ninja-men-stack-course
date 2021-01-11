//Global Object

//console.log(global);

//setTimeout function of the global object which takes something
//that we want to occur at some point after the start of program
//execution and then makes it happen after some particular
//time interval which is 3 sec in the below case
setTimeout(() => {
    console.log('in the timeout');
    //Used to stop the setInterval function of the global
    //object from running
    clearInterval(int);
}, 3000);

//setInterval function of the global object which takes
//something that we want to repeat once every particular time
//interval and also takes the time interval as a parameter
//which is 1 sec in this case. This keeps on running until
//you press Ctrl+C or you use the clearInterval function of 
//the global object
const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

//displays current directory path of file
console.log(__dirname);
//displays current directory path of file
//along with file name added to path
console.log(__filename);