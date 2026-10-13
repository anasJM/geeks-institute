class MenuManager:

    def __init__(self, menu):
        self.menu = menu

    def add_item(self, name, price, spice, gluten):
        dishe = {
            "name": name,
            "price" : price,
            "spice": spice,
            "gluten": gluten
        }
        self.menu.append(dishe)

    def update_item(self,name, price, spice, gluten):
        i = 0
        for dishe in self.menu:
            if dishe["name"] == name:
                i = 1
                dishe["price"] = price
                dishe["spice"] = spice
                dishe["gluten"] = gluten
                break
        if i == 0:
            print("the dishe in not on the menu!")
    
    def remove_item(self, name):
        i = 0
        for dishe in self.menu:
            if dishe["name"] == name:
                i = 1
                self.menu.remove(dishe)
                break
        if i == 0:
            print("the dishe in not on the menu!")


menu = [
{
    "name": "Soup",
    "price": 10,
    "spice": "B",
    "gluten": False
},
{
    "name": "Hamburger",
    "price": 15,
    "spice": "A",
    "gluten": True
},
{
    "name": "Salad",
    "price": 18,
    "spice": "A",
    "gluten": False
},
{
    "name": "French Fries",
    "price": 5,
    "spice": "C",
    "gluten": False
},
{
    "name": "Beef bourguignon",
    "price": 25,
    "spice": "B",
    "gluten": True
},
]

menuManager = MenuManager(menu)

menuManager.add_item("tajine", 20, "B", False)
print(menuManager.menu, sep = " \n")

print("--------------------------------------")

menuManager.update_item("tajine", 50, "C", True)
print(menuManager.menu, sep = " \n")

print("--------------------------------------")

menuManager.remove_item("Hamburger")
print(menuManager.menu, sep = " \n")
