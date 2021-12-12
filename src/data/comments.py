import random
import json

comments = []

for i in range(20):
    comments.append({
        "u": "U" + str(random.randint(1, 20)),
        "exp": "E" + str(random.randint(1, 20)),
        "txt": "Mensaje generado automáticamente"})

with open("src/data/comments.json", "w") as outfile:
    json.dump(comments, outfile)
