# Exercise 3:

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton" ],
    "number_stores": 7000,
    "major_color": {
        "France": "blue", 
        "Spain": "red", 
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2

print(f"Zara clients: {brand["type_of_clothes"][0]}, {brand["type_of_clothes"][1]}, {brand["type_of_clothes"][2]} and {brand["type_of_clothes"][3]}\n")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print(f"the last international competitor: \n{brand["international_competitors"][-1]}\n")

print("major clothes colors in the US are:")
for color in brand["major_color"]["US"]:
    print(color)

print(f"\namount of key value pairs: {len(brand)}\n")

print("the keys of the dictionairy:")
for key in brand.keys():
    print(key)

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000,
}

for key, value in more_on_zara.items():
    brand[key] = value

print(brand["number_stores"])