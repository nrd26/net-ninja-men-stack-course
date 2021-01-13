//INBUILT functionalities or objects that you can import
//which means that they're already exported from some inbuilt
//libraries in node
//Note -> we already covered OS in modules.js


//THE FILE SYSTEM
const fs = require('fs');


//reading files-> readFile function of file system takes in
//2 arguments, 1st is string path to the file we want to read
// 2nd is the function we want it to execute on the data got 
//after reading. Thus this function is and asynchronous function
//because while it is reading the file, it doesn't stop the 
//execution of the code after the readFile function. Once it 
// is done reading, it executes the function on the read data
//err is the error present in the file if any and data is the
//data received from the file
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    //console.log(data); -> Returns buffer string instead of actual data that we wrote
    console.log(data.toString());
});
//the below line will execute before the console.log(data.toString)
//because while reading the file, the readFile function continues
//to execute the next code
console.log('last line');


//writing files
//This function is also asynchronous as well just like the
//readFile function. The extra argument it takes is the 
//content it need to write in the given file
//Note that it doesn't add content but replaces it

fs.writeFile('./docs/blog1.txt', 'Cats are the cutest!!!', () => {
    console.log('file was written');
});

//Note that if you give a path that doesn't exist, then node 
//just creates that file using the file system and writes the conten,
//executes the function on the newly created file

//fs.writeFile('./docs/blog2.txt', 'Cats are the cutest!!!', () => {
//    console.log('file was written');
//});


//directories
//using the existsSync function of the file system to check
//if the file that we are going to create already exists. Putting
//the ! mark will do the reverse so essentially, the below code will 
//run only if the ./asset file doesn't exist
if (!fs.existsSync('./assets')) {
    //mkdir function of fs makes a neew directory.The 2 arguments it
    //takes are the directory path to make and the function to
    //execute once the folder is created.
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder was created');

    });
}
else {
    //rmdir function is uded to delete folders/directories
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder was deleted')
    });
}



//deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file was deleted');
    });
}
else {
    fs.writeFile('./docs/deleteme.txt', 'delete me', () => {
        console.log('delete me file was created to be deleted next time!!!');
    });
}
