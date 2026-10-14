from Exercise3 import Family

class TheIncredibles(Family):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)

    def use_power(self, name):
        if self.is_18(name):
            for member in self.members:
                if member["name"] == name:
                    print(f"{name}'s power: {member["power"]}")
                else:
                    print("you are not old enough to use your power.")

    def incredible_presentation(self):
        print("\n\n******Here is our powerful family******")
        super().family_presentation()

superMembers = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]

superFamily = TheIncredibles(superMembers, "fistjerald")
superFamily.incredible_presentation()
superFamily.born(name="Tom", age=0, gender="male", is_child=True, power="Unknown Power", incredible_name="Unknown")
superFamily.incredible_presentation()