string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

carList = string.split(", ")

print(f"There is {len(carList)} different companies in car list.\n")

print(sorted(carList, reverse=True))
print("\n")

i = 0
for car in carList:
    if "o" in car:
        i += 1
print(f"Manufacturers's name that have the letter 'o': {i}\n")

j = 0
for car in carList:
    if "a" not in car:
        j += 1
print(f"Manufacturers's name that haven't the letter 'i': {j}\n")
