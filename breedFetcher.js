const request = require('request');
const breed = process.argv[2]; // command line argument input
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const breedFetcher = (url, breed) => {
  request(url, (error, response, body) => {
    // Print the response status code if a response was received
    console.log('statusCode:', response && response.statusCode);
    //need to parse string, which returns it as an object
    const data = JSON.parse(body);
    // TODO: Edge Case: Request Failed
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      return;
    }
    // TODO: Edge Case: Breed Not Found
    if (data.length === 0){ // Finds there is no object within data
      console.log("no breed found");
      return;
    }
    // from data array, find the value of the description key
    const description = data[0]["description"];
    // print out the description of the breed to the terminal
    console.log(description);
    console.log(typeof description);
  })
};

breedFetcher(url, breed);