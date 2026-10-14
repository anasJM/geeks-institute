class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 2

    def fight(self, other_dog):
        winner = None
        if (self.run_speed() * self.weight) > (other_dog.run_speed() * other_dog.weight):
            return f"Winner is {self.name}"
        else:
            return f"Winner is {other_dog.name}"

dog1 = Dog("Alex", 4, 40)
dog2 = Dog("Tom", 3, 20)
dog3 = Dog("Rex", 2, 35)

print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

print(dog1.run_speed())
print(dog2.run_speed())
print(dog3.run_speed())

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))

