#Exercise 1:
print("Hello World \n" * 4)

#Exercise 2:
print((99**3)*8)

#Exercise 3:
name = input("yo, what's your name? ")
if name == "anas":
    print("Oh! we share the same name!")
else:
    print("Nice to meet you, " + name + "!")

#Exercise 4:
height = input("What's your height in centimeters? ")
if int(height) > 145:
    print("Have fun Boy!")
else:
    print("Sorry, you need to grow some more to ride.")

#Exercise 5:
my_fav_numbers = {13, 7, 9, 3, 24}
my_fav_numbers.add(8)
my_fav_numbers.add(10)
my_fav_numbers.remove(10)

friend_fav_numbers = {1, 2, 3, 4, 5}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#Exercise 6:
# No, we can't add more integers to the tuple because tuples are immutable

#Exercise 7:
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
basket.count("Apples")
basket.clear()
print(basket)

#Exercise 8:
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
print(sandwich_orders)

finished_sandwiches = []
while len(sandwich_orders) > 0:
    finished_sandwiches.append(sandwich_orders.pop(0))

for item in finished_sandwiches:
    print(f'I made your {item}')