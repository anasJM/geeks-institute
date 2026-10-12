
birthdays = {
    "anas jamlaoui": "2001/11/21",
    "mohamed amraoui": "2000/08/16",
    "hicham serghini": "2000/01/03",
    "azedine hamdaoui": "1990/05/19",
    "aymane zidane": "2000/07/09",
}

name = input("Enter a name to know his birthday: ")

birthday = birthdays[name]
print(f"{name.capitalize()}'s birthday is in {birthday}!")  