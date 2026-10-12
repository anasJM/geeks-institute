import random

def get_random_temp(season):
    if season == "summer":
        return random.randint(25, 45)
    if season == "autumn":
        return random.randint(16, 25)
    if season == "winter":
        return random.randint(-10, 15)
    if season == "spring":
        return random.randint(15, 25)

def main():
    season = input("Enter a season: ")

    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp >= 0 and temp < 16:
        print("Quite chilly! Don’t forget your coat")
    elif temp >= 16 and temp < 23:
        print("It's good today, wear a light jacket")
    elif temp >= 24 and temp < 32:
        print("It's warm today")
    elif temp >= 32 and temp < 40:
            print("very hot today!, put a sunscreen.")

main()