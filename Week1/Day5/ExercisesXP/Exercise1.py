class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

def oldestCat(catList):
    oldest = catList[0]

    for cat in catList:
        if cat.age > oldest.age:
            oldest = cat

    return oldest

cat1 = Cat("Luna", 2)
cat2 = Cat("Oliver", 3)
cat3 = Cat("Bella", 4)
cat4 = Cat("Milo", 1)

catList = [cat1, cat2, cat3, cat4]

oldest = oldestCat(catList)
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")