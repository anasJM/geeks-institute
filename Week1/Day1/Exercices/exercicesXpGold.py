# Exercise 1:
month = input("Enter a month 1 to 12: ")
month = int(month)
if month >= 3 and month <= 5:
    print("Spring season!")
elif month >= 6 and month <= 8:
    print("Summer season!")
elif month >= 9 and month <= 11:
    print("Autumn season!")
elif month == 12 or month <= 2:
    print("Winter season!")

# Exercise 2:
for i in range(1, 21):
    print(i)

for i in range(1, 21):
    if i % 2 == 0:
        print(i)

# Exercise 3:
name = ""
while name != "anas":
    name = input("what's my name ?")
print("you got it!")

# Exercise 4:
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
userName = input("What's your name: ")
i = 0
for name in names:
    if name == userName:
        print(f"index: {i}")
        break
    i += 1

# Exercise 5:
num1 = input("Input the 1st number: ")
num2 = input("Input the 2st number: ")
num3 = input("Input the 3st number: ")
print(f"The greatest number is: {max(int(num1), int(num2), int(num3))}")

# Exercise 6:
import random

number = ""
totalRounds = 0
win = 0
lose = 0

while number != "exit":
    number = input("Enter a number form 1 to 9: ")
    if number != "exit":
        randomNumber = random.randint(1, 9)
        if int(number) == randomNumber:
            totalRounds += 1
            win += 1
            print("Winner!!")
        else:
            totalRounds += 1
            lose += 1
            print("Better Luck next time.")

print(f"Total Rounds: {totalRounds} \n Total Wins: {win} \n Total Loses: {lose}")