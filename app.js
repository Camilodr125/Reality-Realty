const { scrapeProperties } = require('./scraper');

const args = process.argv.slice(2);
if (args.length !== 3) {
    console.error('Usage: node app.js <PROPERTY_TYPE> <PAGE> <FILE_NAME>');
    process.exit(1);
}

const [propertyType, pageNumber, fileName] = args;
scrapeProperties(propertyType, pageNumber, fileName);
