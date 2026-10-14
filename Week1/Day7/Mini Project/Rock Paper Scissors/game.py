import random

class Game:

    def get_user_item(self):
        user_input = ""
        while user_input != "rock" and user_input != "paper" and user_input != "scissors":
            user_input = input("\nSelect rock, paper, or scissors: ")
        
        return user_input

    def get_computer_item(self):
        choices = ["rock", "paper", "scissors"]
        computer_choice = random.choice(choices)
        return computer_choice

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"

        # check if the user win
        if user_item == "rock" and computer_item == "scissors":
            return "win"
        if user_item == "paper" and computer_item == "rock":
            return "win"
        if user_item == "scissors" and computer_item == "paper":
            return "win"
        
        # check if the computer win
        if computer_item == "rock" and user_item == "scissors":
            return "loss"
        if computer_item == "paper" and user_item == "rock":
            return "loss"
        if computer_item == "scissors" and user_item == "paper":
            return "loss"
        
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"\nYou selected: {user_item}\nComputer selected: {computer_item}\nresult: {result}\n")

        return result
