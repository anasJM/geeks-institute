class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        return self.animals

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sortedAnimals = {}

        for animal in self.animals:
            if animal[0] not in sortedAnimals.keys():
                sortedAnimals[f"{animal[0]}"] = animal
            elif type(sortedAnimals[f"{animal[0]}"]) is str:
                sortedAnimals[f"{animal[0]}"] = [sortedAnimals[f"{animal[0]}"], animal]
            elif type(sortedAnimals[f"{animal[0]}"]) is list:
                sortedAnimals[f"{animal[0]}"].append(animal)

        return dict(sorted(sortedAnimals.items()))

    def get_groups(self):
        sortedAnimals = self.sort_animals()

        for key, group in sortedAnimals.items():
            if type(group) is str:
                print(f"Group {key}:\n- {group}\n")
            else:
                print(f"Group {key}:")
                for animal in group:
                    print(f"- {animal}")
                print("\n")


new_york_zoo = Zoo("New York")

new_york_zoo.add_animal("Lion")
new_york_zoo.add_animal("Albatross")
new_york_zoo.add_animal("Anaconda")
new_york_zoo.add_animal("Tiger")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Bat")
new_york_zoo.add_animal("Bee")
new_york_zoo.add_animal("Beetle")
new_york_zoo.add_animal("Crocodile")
new_york_zoo.add_animal("Jacana")
new_york_zoo.add_animal("Jaguar")
new_york_zoo.add_animal("Zebra")
new_york_zoo.add_animal("Zokor")

for animal in new_york_zoo.get_animals():
    print(animal)

print("\n")

new_york_zoo.sell_animal("Tiger")

new_york_zoo.get_groups()