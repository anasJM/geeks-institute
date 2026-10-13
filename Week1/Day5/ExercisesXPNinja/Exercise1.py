class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        history = f"{self.phone_number} called {other_phone.phone_number}"
        self.call_history.append(history)
        print(history)

    def show_call_history(self):
        print("Call history: ")
        for call in self.call_history:
            print(f"- {call}")
        print("\n")

    def send_message(self, other_phone, message):
        messageDict = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": message
        }
        other_phone.messages.append(messageDict)
        self.messages.append(messageDict)

    def show_incoming_messages(self):
        print(f"{self.phone_number} Incoming messages: \n")
        for message in self.messages:
            if message["to"] == self.phone_number:
                print(f"From: {message["from"]}")
                print(f"Message: {message["content"]}")
                print("------------------------------")
        print("\n")

    def show_outgoing_messages(self):
        print(f"{self.phone_number} Outgoing messages: \n")
        for message in self.messages:
            if message["from"] == self.phone_number:
                print(f"To: {message["to"]}")
                print(f"Message: {message["content"]}")
                print("------------------------------")
        print("\n")

    def show_messages_from(self, other_phone):
        print(f"Messages from: {other_phone.phone_number}\n")
        for message in other_phone.messages:
            if message["from"] == other_phone.phone_number:
                print(f"- {message["content"]}")
                print("------------------------------")
        print("\n")


anasPhone = Phone("0708161795")
mohamedPhone = Phone("0617840939")
abdellahPhone = Phone("0610234573")

anasPhone.call(mohamedPhone)
anasPhone.call(abdellahPhone)
print("\n")
anasPhone.show_call_history()

mohamedPhone.send_message(anasPhone, "Hi anas send me 100$")
anasPhone.send_message(mohamedPhone, "i have only 70$")
mohamedPhone.send_message(anasPhone, "ok no problem, send it")

anasPhone.show_outgoing_messages()
anasPhone.show_incoming_messages()

mohamedPhone.show_messages_from(anasPhone)