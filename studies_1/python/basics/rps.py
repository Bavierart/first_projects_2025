#rock paper scisor game from freecodecamp python tutorial
#get the player choice
def rps_game():
    import random
    def get_player_choice():
        p_choice = input("Enter a choice (rock[1], paper[2], scissors[3]) \n")
        #if player choice isn't one of the three numbers
        while p_choice not in ["1", "2", "3"]:
            p_choice = input("Please, type 1, 2 or 3 for your choice! (rock[1], paper[2], scissors[3]) \n")

        return p_choice

    #conversion of numbers to rps answers
    def convert_choices_to_text(choice):
        if choice == "1": choice = "rock"
        if choice == "2": choice = "paper"
        if choice == "3": choice = "scissors"

        return choice

    #possible rps choices
    possible_choices = ["rock", "paper", "scissors"]

    #get a random rps choice
    def get_random_choice():
        rndm_choice = random.choice(possible_choices)

        return rndm_choice

    #set player and computer choices
    def get_choices():
        #choice variables
        p_choice = convert_choices_to_text(get_player_choice())
        c_choice = get_random_choice()

        choices = {"player" : p_choice, "computer" : c_choice}

        return choices

    #actual game system
    def check_win(player, computer):
        if player == computer:
                return "TIE"
        else:
            if player == "rock" and computer == "paper" or player == "paper" and computer == "scissors" or player == "scissors" and computer == "rock":
                return "YOU LOSE"
            else: 
                return "YOU WIN"

    #getting the results printed
    def get_result():
        choices = get_choices()
        player_choice = str(choices["player"]).upper()
        computer_choice = str(choices["computer"]).upper()
        print("YOU CHOSE " + player_choice)
        print("COMPUTER CHOSE " + computer_choice)
        result = check_win(choices["player"], choices["computer"])
        
        return result

    #showing the results
    print(get_result())

rps_game()