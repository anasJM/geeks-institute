import random

def throw_dice():
    return random.randint(1, 6)


def throw_until_doubles():
    dice1 = 0
    dice2 = -1
    rollDiceCount = 0

    while dice1 != dice2:
        dice1 = throw_dice()
        dice2 = throw_dice()
        rollDiceCount += 1

    return rollDiceCount
    

def main():
    diceCounter = 0
    countList = []

    for i in range(100):
        diceCounter = throw_until_doubles()
        countList.append(diceCounter)

    print(f"Total throws: {sum(countList)} \n Average throws to reach doubles: {sum(countList) / len(countList)}")

main()