import random

class InitGame:
    pass

class GuessingGame:
    def __init__(self):
        self._number = random.randint(0, 101)
        self._guesses_remaining = 7
    
    def get_guess(self):
        while True:
            user_input = input("Enter a number between 1 and 100: ")

            try:
                user_input = int(user_input)

                if user_input < 1 or user_input > 100:
                    print("Invalid guess.")
                else:
                    return user_input

            except ValueError:
                print("Invalid guess.")
    
    def check_guess(self, guess):
        if guess != self._number:
            return False

        else:
            return True
    
    def decrement_remaining_guesses(self, guess_result):
        if not guess_result:
            self._guesses_remaining -= 1
    
    def display_guesses_remaining(self):
        print(f"You have guesses {self._guesses_remaining} remaining.")
    
    def get_results(self, results):
        if results:
            return True
        elif not results:
            return False
    
    def process_results(self, result):
        remaining = self._guesses_remaining

        if result == False and remaining == 0:
            return False

        elif result == True:
            return True
    
    def display_results(self, results):
        win = self.get_results(results)

        if win:
            print("That's the number! \n\nYou won!\n")
        if not win:
            print("You have no more guesses. You lost!")

    def process_play(self):
        while self._guesses_remaining > 0:
            self.display_guesses_remaining()

            guess = self.get_guess()
            guess_result = self.check_guess(guess)

            self.decrement_remaining_guesses(guess_result)

            results = self.process_results(guess_result)

            print(self._number)

            if results == True or results == False:
                self.display_results(results)
                break

    def play(self):
        self.process_play()


game = GuessingGame()
game.play()

# NEED RESET GUESSES REMAINING

'''
- generate random number (initialized)
- remaining guesses

rnd 1
- take input from user: validate input
- check guess => boolean value (True if correct), (False if incorrect)
- process results
- if results == None, No results: decrement guesses remaining

- get results

- display results
-- get results, to determine what to display

- display 'You won!'
- or display 'You have no more guesses. You lost!'


'''

