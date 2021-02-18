//get http module
const http = require('http');
const fs = require('fs');

//create a server and stores the instance of the server in the server variable
//takes a function as argument which runs everytime server gets a request.
//function has 2 parameters which is request object and the response object.
// req object contains all information about the request made such as the url
// requested by the request. ress object is used to send our response to the browser
const server = http.createServer((req, res) => {
    console.log('request made');

    // outputs '/' which is the website visited(ie:localhost:3000/) and GET because
    // it was a method to get information
    console.log(req.url, req.method);

    //set header content type for response objext(res) as plain text
    //res.setHeader('Content-Type', 'text/plain');

    //set header content type for response objext(res) as html text
    res.setHeader('Content-Type', 'text/html');

    //initializing path variable as ./views/ because that is the
    //folder where all our html files are.
    let path = './views/';

    //We will add on the exact path of the html file based on the 
    //url that is asked in the request
    switch (req.url) {
        //if root path is asked by url
        case '/':
            path = path + 'index.html';
            break;
        //if url wants to see about page
        case '/about':
            path += 'about.html';
            break;
        //if url asks for a page that we haven't made yet
        //then we will redirect it to the 404 html page
        default:
            path += '404.html';
            break;
    }

    //sending a plain text response to the browser
    //res.write('Hello there Neko Senpai!!');

    //sending an html response to the browser
    //res.write('<head><link rel="stylesheet" href="#"></head>')
    //res.write('<h1>Hello there Neko Senpai!!</h1>');
    //res.write('<p>Cats are the cutest</p>')

    //read html file from the path variable that was made earlier, 
    //if there is an error, log it to the console else
    //write the data in response to the request sent by browser for data
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //If you are sending multiple things then you'll have many res.write()
            //res.write(data);
            //res.end();

            //STATUS CODES
            //100 range -> informational responses(like OK,etc)
            //200 range -> success codes
            //300 Range -> codes for redirects
            //400 Range -> user or client error codes
            //500 Range -> server error codes

            //But since we're sending only one thing, we can send it in res.end 
            //itself
            res.end(data);
        }
    })

    //ending the response
    //res.end();
});

//server listens for requests made to it. Here 3000 is the port number
// localhost is the host name. Default value of host name is always localhost
server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port number 3000');
});

//NOTE: localhost is like a domain name which loops back to the ip address of your 
// computer which is 127.0.0.1
// Port numbers represents a specific gateway through which information is communicated.
//Different apps on our system use tdifferent port numbers when communicating with the 
//internet.
// 3000 is the port number usually used for local web development. You can use any port
//number as long as it doesn't clash with a port number being used by some other
//application