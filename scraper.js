const puppeteer = require('puppeteer');
const fs = require('fs');
const { buildUrl } = require('./utils');

async function scrapeProperties(propertyType, pageNumber, fileName) {
    const url = buildUrl(propertyType, pageNumber);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        const properties = await page.evaluate(() => {
            const list = document.querySelectorAll('.container-fluid');
            const basicData = [];
            
            list.forEach((item) => {
                const url = item.querySelector('.list-main-title a')?.href || null;
                const title = item.querySelector('.list-main-title a')?.innerText.trim() || null;
                const city = item.querySelector('.pull-left p')?.innerText.trim() || null;
                const price = item.querySelector('.col-xs-12 strong')?.innerText.trim() || null;
                basicData.push({ url, title, city, price });
            });
            
            return basicData.filter(prop => Object.values(prop).every(value => value !== null));
        });

        for (const property of properties) {
            await page.goto(property.url, { waitUntil: 'networkidle2' });

            const additionalData = await page.evaluate(() => {
                const description = document.querySelector('#home')?.innerText.trim() || null;
                const images = Array.from(document.querySelectorAll('.thumb img')).map((img) => img.src);
                const flyer = document.querySelector('.col-sm-4 span a')?.href || null;
                return { description, images, flyer };
            });

            Object.assign(property, additionalData);
        }

        fs.writeFileSync(fileName, JSON.stringify(properties, null, 2), 'utf-8');
        console.log(`Data has been saved to ${fileName}`);
    } catch (error) {
        console.error('Error during scraping:', error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

module.exports = { scrapeProperties };
