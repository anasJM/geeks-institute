import random

class MyList:

    def __init__(self, letterList):
        self.letterList = letterList

    def getLetterList(self):
        return self.letterList

    def reversedList(self):
        return self.letterList.reverse()

    def sortedList(self):
        return sorted(self.letterList)

    def sameLengthList(self):
        copyList = []
        for i in range(len(self.letterList)):
            copyList.append(random.randint())

myList = MyList(["whisper", "galaxy", "velvet", "thunder", "harbor", "mosaic", "lantern", "breeze"])

print("Normal List:")
for value in myList.getLetterList():
    print(f"- {value}")

myList.reversedList()
print("Reversed List:")
for value in myList.getLetterList():
    print(f"- {value}")

myList.sortedList()
print("Sorted List:")
for value in myList.sortedList():
    print(f"- {value}")