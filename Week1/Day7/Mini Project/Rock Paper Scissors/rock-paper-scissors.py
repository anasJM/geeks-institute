from game import Game

def get_user_menu_choice():
    menu_choise = input("Menu:\nEnter (game) to play a new game\nEnter (exit) to show scores and exit\n: ")

    return menu_choise

def print_results(results):
    total_games = results["win"] + results["loss"] + results["draw"]
    print(f"\n------------------Results:------------------\nGames played: {total_games}\nWin: {results["win"]}\nLoss: {results["loss"]}\nDraw: {results["draw"]}")
    print("--------------Thanks fo playing!--------------")

def main():
    menu_choise = ""
    results = {
        "win": 0,
        "loss": 0,
        "draw": 0
    }

    while 1 == 1:
        menu_choise = get_user_menu_choice()
        if menu_choise == "exit":
            print_results(results)
            break
        elif menu_choise == "game":
            game = Game()
            roundResult = game.play()
            results[f"{roundResult}"] += 1

main()
            

