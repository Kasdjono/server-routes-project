const diagnostics = require('express').Router();
const { application } = require('express');
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const diagnosticsJSON = require('../db/diagnostics.json');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  res.json(diagnosticsJSON)
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file

  // Destructuring assignment for the items in req.body
  const { product, review, username } = req.body;

  if (product && review && username) {
    // Variable for the object we will save
    const newReview = {
      product,
      review,
      username,
      review_id: uuid(),
    }};

  fs.readFile(diagnosticJSON, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // Convert string into JSON object
      const parsedReviews = JSON.parse(data);

      // Add a new review
      parsedReviews.push(newReview);

      // Write updated reviews back to the file
      fs.writeFile(
        './db/reviews.json',
        JSON.stringify(parsedReviews, null, 4),
        (writeErr) =>
          writeErr
            ? console.error(writeErr)
            : console.info('Successfully updated reviews!')
      );
    }
  });
});

module.exports = diagnostics;
