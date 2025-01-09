function buildUrl(propertyType, pageNumber) {
    const { baseUrl, properties, pagination } = require('./config');
    const type = properties[propertyType];
    return `${baseUrl}/type:venta/pagination:size%7C${pagination.size}%7Cpage%7C${pageNumber}/?search%5Barea%5D=&search%5Bprice_from%5D=&search%5Bkeywords%5D=&search%5Bproperty_type%5D=${type}&search%5Bprice_to%5D=`;
}

module.exports = { buildUrl };
