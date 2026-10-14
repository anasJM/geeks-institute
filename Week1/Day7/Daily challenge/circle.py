import math

class Circle:
    def __init__(self, radius = None, diameter = None):
        if radius:
            self.radius = radius
            self.diameter = radius * 2

        if diameter:
            self.diameter = diameter
            self.radius = diameter / 2

    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"----------Attributes---------- \n- Radius: {self.radius}\n- Diameter: {self.diameter}\n- Area: {self.area()}\n"

    def __add__(self, otherCircle):
        return Circle(self.radius + otherCircle.radius)

    def __gt__(self, otherCircle):
        return self.radius > otherCircle.radius

    def __eq__(self, otherCircle):
        return self.radius == otherCircle.radius

c1 = Circle(radius = 5)
c2 = Circle(radius = 13)
c3 = Circle(radius = 2)
c4 = c1 + c3

print(c4 > c2)
print(c1 == c2)

circleList = [c1, c2, c3, c4]
sortedList = sorted(circleList, key=lambda c: c.radius)
for c in sortedList:
    print(c)