morse_code = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".",
    "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---",
    "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---",
    "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
    "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--",
    "Z": "--..", "1": ".----", "2": "..---", "3": "...--", 
    "4": "....-", "5": ".....", "6": "-....", "7": "--...", 
    "8": "---..", "9": "----.", "0": "-----", " ": "/"
}

def textToMorseConverter(text):
    text = text.upper()
    result = []
    for letter in text:
        result.append(morse_code[f"{letter}"])

    return " ".join(result)

def MorseToTextConverter(morse):
    morse = morse.split(" ")
    result = []
    letter = ""
    for code in morse:
        for key, value in morse_code.items():
            if value == code:
                letter = key
        result.append(letter)
        
    return "".join(result).lower()

print(textToMorseConverter("anas jamlaoui"))
print(MorseToTextConverter(".- -. .- ... / .--- .- -- .-.. .- --- ..- .."))