data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

correctCounter = 0
wrongCounter = 0
wrongAnswers = []

def askQuestion():
    for dict in data:
        global correctCounter
        global wrongCounter
        print(dict["question"])
        userAnswer = input("answer: ")
        if userAnswer == dict["answer"]:
            correctCounter += 1
        else:
            wrongCounter += 1
            wrongAnswers.append(userAnswer)

def result():
    print(f"Correct answers: {correctCounter} / {len(data)} \n Wrong answers: {wrongCounter}")

askQuestion()
result()