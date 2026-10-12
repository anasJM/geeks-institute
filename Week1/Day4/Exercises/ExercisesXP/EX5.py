import random

def randomize(number):
    if number < 1 and number > 100:
        print("the number should be between 1 and 100")
    else:
        randomNumber = random.randint(1, 100)
        if number == randomNumber:
            print("good job! the numbers are the same.")
        else:
            print(f"Failed!\n Your number: {number}\n My number: {randomNumber}")

randomize(46)
