const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    // Print the response status code if a response was received
    console.log('statusCode:', response && response.statusCode);
    if (error){
      callback(error, null);
      return;
    }
    //need to parse string, which returns it as an object
    const data = JSON.parse(body);
    // TODO: Edge Case: Breed Not Found
    if (data.length === 0){ // Finds there is no object within data
      const err1 = new Error('No breed found');
      callback(err1, null);
      return;
    }
    // from data array, find the value of the description key
    const description = data[0]["description"];
    // print out the description of the breed to the terminal
    callback(null, description);
  })
};

module.exports = { fetchBreedDescription };