const fs = require('fs');

//When the file you're reading is too large, then you can stream
//the data little by little and send small packets of data to the 
//browser as it keeps loading. These small packets of data are 
//buffers.

//Using the createReadStream function of the file system to 
// create a stream of the input file. 
//1st argument is the file path. 
//2nd argument is the encoding(or any other functions available) 
//which is the format you want
//to convert the read streams to because even though the data is of string,
//when you stream it, the buffers aren't strings but some other encoding
const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: "utf8" });

//Creates a Write Stream where you can write large chunks of data(buffers) to
//a file. If that file doesn't already exist, then the createWriteStream function
//will create it. 1st argument-> path to doc to be written in/created and written
//in. 2nd argument-> encoding or any other available manipulation
const writeStream = fs.createWriteStream('./docs/blog3.txt', { encoding: "utf8" })

// the on function starts listening for data to arrive from 
//readStream and then executes some function on the chunk of 
// data(buffers) that you receive from the stream
readStream.on('data', (chunk) => {

    console.log('-----NEW CHUNK-----');

    //logs the buffers that are converted to strings
    //using the toString() function, onto the console
    //This is used if the encoding is not mentioned in the createReadStreams
    //function
    //console.log(chunk.toString());

    console.log(chunk);

    //Puts NEW CHUNK everytime a new buffer is written to the file specified
    writeStream.write('\n NEW CHUNK \n');

    // Writes the huge chunk of data that we got from the readStream to the file
    //we specified
    writeStream.write(chunk);
});

//Instead of the above code in readStream.on, we can simply use piping instead
//to simultaneously write the read code to the specified file
//                                    ||
//                                    ||
//                                    ||
//                                    ||
//                                    \/


//PIPING
//Above code of 5 lines is simplified to a single line using Piping 

//readStream.pipe(writeStream);