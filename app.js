const { scrapeProperties } = require('./scraper');

// Get command-line arguments, excluding the first two (node and script path)
const args = process.argv.slice(2);
if (args.length !== 3) {
    console.error('Usage: node app.js <PROPERTY_TYPE> <PAGE> <FILE_NAME>');
    process.exit(1);
}
// Destructure the command-line arguments into variables
const [propertyType, pageNumber, fileName] = args;
// Call the scrapeProperties function with the provided arguments
scrapeProperties(propertyType, pageNumber, fileName);
