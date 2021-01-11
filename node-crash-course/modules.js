//when you mention a file inside require, node
//looks for that file and executes it
//putting ./ means to look in the same directory as current file

//const xyz = require('./people');

 //returns an empty object unless you export
//something in the original file which was imported
//console.log(xyz)

//how to access a single thing when
//multiple stuff is exported
//console.log(xyz.people, xyz.ages);


//console.log(people) gives an error in this case because even though we
//imported the js file, we can't access individual stuff from 
//inside the imported file

//executes people.js and
//only gets the people object from list of exported objects in
//people.js
const { people, ages } = require('./people');

console.log(people, ages);
//how to access a single thing when
//multiple stuff is exported 

//INBUILT functionalities or objects that you can import
//which means that they're already exported from some inbuilt
//libraries in node
//OS -> gives info about current OS
const os = require('os');
// calling different methods in OS can give whatever specfic
//info you need about the OS
console.log(os.platform(), os.homedir());
//the above gives info about the platform we are using and the
//home directory of our OS
