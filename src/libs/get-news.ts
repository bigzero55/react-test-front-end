import ApiKey from "./news-api-key"

const url: string = 'https://newsapi.org/v2/top-headlines?' +
                    'country=id&' +
                    'apiKey=' + ApiKey

const req = new Request(url)

export function getNews () {
   return fetch(req)
   .then((response) => response.json())
}
