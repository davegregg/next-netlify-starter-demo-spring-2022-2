const md5 = require("md5")
const fetch = require("cross-fetch")

const apiBaseURL = "https://gateway.marvel.com/v1/public"
const endpoint = "/characters?"

exports.handler = async function (event, context) {
    console.log(event)
    
    const timestamp = Date.now()
    const publicKey = process.env.MARVEL_API_PUBLIC_KEY
    const privateKey = process.env.MARVEL_API_PRIVATE_KEY
    const hash = md5(timestamp + privateKey + publicKey)
    console.log(process.env)

    const {searchTerm, limit, offset} = event.queryStringParameters
    const queryParameters = new URLSearchParams({
        nameStartsWith: searchTerm,
        limit: limit,
        offset: offset,
        ts: timestamp,
        apikey: publicKey,
        hash: hash,
    })

    const url = apiBaseURL + endpoint + queryParameters.toString()

    const response = await fetch(url)
    const payload = await response.json()
    const matchedCharacters = payload.data.results

    return {
        statusCode: 200,
        body: JSON.stringify(matchedCharacters),
    }
}