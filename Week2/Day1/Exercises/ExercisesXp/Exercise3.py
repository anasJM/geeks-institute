class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print("Congratulations! new baby joined the family!!")

    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                if member["age"] > 18:
                    return True
        return False

    def family_presentation(self):
        print(f"{self.last_name}'s family members:")
        for member in self.members:
            print("-------------------")
            for key, detail in member.items():
                print(f"{key}: {detail}")


if __name__ == "__main__":
    members = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]

    family = Family(members, "Amraoui")

    family.born(name="Tom", age=0, gender="male", is_child=True)

    print(family.is_18("Tom"))
    print(family.is_18("Sarah"))

    family.family_presentation()