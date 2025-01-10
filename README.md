# Web Scraper - Reality Realty Challenge

This project is a technical challenge to build a Command Line Interface (CLI) web scraper that extracts property listings from the [Reality Realty website](https://www.realityrealtypr.com). The scraper fetches details for either `HOUSE` or `APARTMENT` properties for a specified page number and saves the data in a JSON file.


## Project Overview

This scraper was built using **JavaScript** and the **Puppeteer** library, which allows for headless browsing and web scraping. The scraper fetches information for properties listed on the Reality Realty website. Given a property type (either `HOUSE` or `APARTMENT`) and a page number, it scrapes the following details for each property:
- URL of the property
- Title of the property
- City of the property
- Price of the property
- Description of the property
- Images of the property
- URL of the flyer (if available)

The scraped data is saved into a JSON file with the structure provided in the example.

## How to Run

To run the web scraper, use the following command:

```bash
node app.js <PROPERTY_TYPE> <PAGE_NUMBER> <OUTPUT_FILE_NAME>
