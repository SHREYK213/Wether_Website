const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=cb59896bb9b67b6f8ea1dace18704a28&query=' + latitude + ',' + longitude + '&unit=f'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to reach the internet', undefined)
        } else if (body.error) {
            callback('Coordinate error try with differnt coordinate', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' feels like ' + body.current.feelslike)
        }
    })

}

module.exports = forecast