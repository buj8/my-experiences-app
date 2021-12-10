import requests

url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities"

headers = {
    'x-rapidapi-host': "wft-geo-db.p.rapidapi.com",
    'x-rapidapi-key': "38ed56f695mshb3cfc9a9c549eebp19b7b1jsn1c6d877758f8"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
