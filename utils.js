// Function to build the URL for the property search with pagination
function buildUrl(propertyType, pageNumber) {
    // Destructure the configuration values from the 'config' module
    const { baseUrl, properties, pagination } = require('./config');
    const type = properties[propertyType]; 
    // Construct the URL using the base URL, property type, and pagination parameters
    const url = `${baseUrl}/type:venta/pagination:size%7C${pagination.size}%7Cpage%7C${pageNumber}/?search%5Barea%5D=&search%5Bprice_from%5D=&search%5Bkeywords%5D=&search%5Bproperty_type%5D=${type}&search%5Bprice_to%5D=`;
    return url
}

module.exports = { buildUrl };
