const axios = require("axios")
const cheerio = require("cheerio")

const fetchShelves = async () =>{
    try {
        const response = await axios.get('https://www.amazon.com/s?crid=36QNR0DBY6M7J&k=shelves&ref=glow_cls&refresh=1&sprefix=s%2Caps%2C309');
        const html = response.data;

    }catch(error){
        throw error;
    }
} 