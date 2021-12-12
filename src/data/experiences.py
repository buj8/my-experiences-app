import csv
import random
import json

with open('src/data/paises.csv', newline='') as f:
    reader = csv.reader(f)
    arr = []
    for row in reader:
        arr.append(row)

exps = []

desc_template = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

for i in range(20):
    ran = arr[random.randint(0, len(arr)-1)]
    exps.append({
        "lugar": ran[1],
        "continente": ran[0],
        "nombre": "Descubriendo ",
        "descripcion": desc_template,
        "precio": random.randint(0, 2)
    })

with open("src/data/experiencias.json", "w") as outfile:
    json.dump(exps, outfile)
