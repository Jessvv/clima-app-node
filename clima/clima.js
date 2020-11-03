const axios = require('axios');

const getClima = async ( lat, lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=454ee51c1a0b7aeee20fe14e515dcd40`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}