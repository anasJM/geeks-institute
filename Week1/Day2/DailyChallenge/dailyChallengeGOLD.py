from datetime import date

# calculate the user's age
birthday = input("Input your birthday in DD/MM/YYYY format: ")
birthdayList = birthday.split("/")
birthDay = birthdayList[0]
birthMonth = birthdayList[1]
birthYear = birthdayList[2]

today = date.today()
birthdayDate = date(int(birthYear), int(birthMonth), int(birthDay))

# difference
difference = today - birthdayDate
age = int(difference.days / 365)
print(f"your age is: {age} years old")

# display the birthday cake

# candles
if age > 10:
    candles = int(str(age)[1])
elif age == 10:
    candles = 1
else:
    candles = age
    
candlesString = ""
for i in range(0, candles):
    candlesString = candlesString + "i"

# underscore
underscore = 9 - candles
underscoreString = ""
for i in range(0, int(underscore / 2)):
    underscoreString = underscoreString + "_"

print(f"    _{underscoreString}{candlesString}{underscoreString}_    ")
print("   |:H:a:p:p:y:|   ")
print(" __|___________|__ ")
print("|^^^^^^^^^^^^^^^^^|")
print("|:B:i:r:t:h:d:a:y:|")
print("|                 |")
print("~~~~~~~~~~~~~~~~~~~")