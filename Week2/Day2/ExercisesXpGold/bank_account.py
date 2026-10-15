import sys

class BankAccount:
    def __init__(self, balance, username, password, authenticated=False):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = authenticated

    def deposit(self, amount: int): 
        if self.authenticated:
            if amount < 0:
                raise Exception("Amount can not be negative")
            else:
                self.balance += amount
        else:
            raise Exception("You are not authenticated!")

    def withdraw(self, amount: int):
        if self.authenticated:
            if amount < 0:
                raise Exception("Amount can not be negative")
            elif self.balance >= amount:
                self.balance -= amount
            else:
                print("you don't have enough money to withdraw!")
        else:
            raise Exception("You are not authenticated!")

    def authenticate(self, username, password):
        if username == self.username and password == self.password:
            self.authenticated = True
        else:
            raise Exception("wrong username or password!")


# Minimum Balance Account class
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance, username, password, minimum_balance=0):
        super().__init__(balance, username, password, authenticated=False)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount: int):
        if self.authenticated:
            if self.balance - amount > self.minimum_balance:
                self.balance -= amount
            else:
                raise Exception("Balance can not be less than minimum balance!")
        else:
            raise Exception("You are not authenticated!")


#  ATM class
class ATM:
    def __init__(self, account_list, try_limit):
        # validate if account_list contains only instances of BankAccount and MinimumBalanceAccount
        count = 0
        for acc in account_list:
            if not isinstance(acc, BankAccount) and not isinstance(acc, MinimumBalanceAccount):
                count += 1
        if count == 0:
            self.account_list = account_list
        else:
            raise Exception("'account_list' can only contains intances of 'BankAccount' or 'MinimumBalanceAccount'")

        # validate try_limit is a positive number
        try:
            if try_limit > 0:
                self.try_limit = try_limit
            else:
                raise ValueError("'try_limit' can't be negative")
        except ValueError:
            self.try_limit = 2

        # current tries attributes
        self.current_tries = 0
        # call main menu
        self.show_main_menu()

    #  show main menu method
    def show_main_menu(self):
        while True:
            menu_choice = input("- (login) to show login forms\n- (exit) to quit\n ")
            if menu_choice == "login":
                username = input("Username: ")
                password = input("Password: ")
                self.log_in(username, password)
                break
            elif menu_choice == "exit":
                break

    def log_in(self, username, password):
        while True:
            count = 0
            for acc in self.account_list:
                if acc.username == username and acc.password == password:
                    acc.authenticate(username, password)
                    self.show_account_menu(acc)
                    break
                else:
                    count += 1
    
            if count == len(self.account_list):
                print("Username or Password incorrect! Try again.")
                self.current_tries += 1
                if self.current_tries == self.try_limit:
                    sys.exit("Error: you have reached the maximum of tries.")
                username = input("Username: ")
                password = input("Password: ")
            else:
                break

    def show_account_menu(self, instance:BankAccount | MinimumBalanceAccount):
        while True:
            print(f"\n\n**************   Welcome back {instance.username}!   **************\n")
            print("- Type (dep) to deposit money")
            print("- Type (with) to withdraw money")
            print("- Type (exit) to quit\n")
    
            user_input = input("choose from above: ")
            if user_input == "exit":
                print("Have a nice day!")
                break
            elif user_input == "dep":
                print(f"balance: {instance.balance}")
                amount = input("Amount to deposit: ")
                instance.deposit(int(amount))
                print(f"New balance: {instance.balance}")
            elif user_input == "with":
                print(f"balance: {instance.balance}")
                amount = input("Amount to withdraw: ")
                instance.withdraw(int(amount))
                print(f"New balance: {instance.balance}")

        sys.exit()


# testing the system
primary_account = BankAccount(2000, "anas", "anasjm")
secondary_account = BankAccount(1200, "user", "useruser", 500)

atm = ATM([primary_account, secondary_account], 2)
atm.show_main_menu()