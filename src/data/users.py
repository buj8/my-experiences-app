import requests
import random
import json

URL = "https://randomuser.me/api/?results=20&inc=gender,name,dob,email,picture,login&nat=es&password=upper,lower,number,10-12&noinfo&seed=myexp"

req = requests.get(url=URL)
APIusers = req.json()["results"]
print(APIusers)
users = []

for u in APIusers:
    users.append(
        {
            "username": u["login"]["username"],
            "pass": u["login"]["password"],
            "name": u["name"]["first"],
            "surname": u["name"]["last"],
            "email": u["email"],
            "bdate": u["dob"]["date"],
            "interest": random.randint(0, 3),
            "gender": u["gender"],
            "picture": u["picture"]["large"]
        }
    )

with open("src/data/users.json", "w") as outfile:
    json.dump(users, outfile)
