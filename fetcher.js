const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const localFilePath = process.argv[3];


const fetcher = (url, local) => {
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body);
    fs.writeFile(local, body, function (err) {
      if (err) throw err;
      console.log(`Downloaded and saved 3261 bytes to ${local}`);
      console.log('Saved!');
    });
  });
};

fetcher(url, localFilePath);
