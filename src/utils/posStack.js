const request = require('request')


const posStack = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=54c688b8cf5e775c5a84cb10060b4d8c&limit=1&query=' + encodeURIComponent(address)

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to Connect to location service!', undefined)
        } else if (body.data.length === 0) {
            callback('Unable to find location, try differnt location', undefined)
        } else {
            callback(undefined, {
                location: body.data[0].label,
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude
            })
        }
    })
}

module.exports = posStack