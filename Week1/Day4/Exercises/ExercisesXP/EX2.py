# Exercise 2:

family = {}

while 1 == 1:
    name = input("Enter a name ? ")
    if name == "quit":
        break
    age = input("Enter an age ? ")
    
    family[name] = age

familyPrice = {}

for name, age in family.items():
    if int(age) < 3:
        familyPrice[name] = 0
    if int(age) >= 3 and int(age) <= 12:
        familyPrice[name] = 10
    if int(age) > 12:
        familyPrice[name] = 15

# display the prices
for name, price in familyPrice.items():
    print(f"{name} has to pay: {price} $")

# calculate the family's total price
familyTotalPrice = 0
for price in familyPrice.values():
    familyTotalPrice += price

print(f"Family's total price: {familyTotalPrice} $")
