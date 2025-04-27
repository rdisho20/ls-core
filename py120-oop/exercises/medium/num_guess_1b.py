import random


class GuessingGame:
    def __init__(self):
        self._number = random.randint(1, 100)
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

        return True

    def display_guess_high_low(self, guess):
        if guess < self._number:
            print("Your guess is too low.\n")
        elif guess > self._number:
            print("Your guess is too high.\n")

    def decrement_remaining_guesses(self, guess_result):
        if not guess_result:
            self._guesses_remaining -= 1

    def display_guesses_remaining(self):
        print(f"You have {self._guesses_remaining} guesses remaining.")

    def get_results(self, results):
        if not results:
            return False

        return True

    def process_results(self, result):
        remaining = self._guesses_remaining

        if result is False and remaining == 0:
            return False

        if result is True:
            return True

        return None

    def display_results(self, results):
        win = self.get_results(results)

        if win:
            print("That's the number! \n\nYou won!\n")
        elif not win:
            print("You have no more guesses. You lost!\n")

    def start_gameplay(self):
        while self._guesses_remaining > 0:
            self.display_guesses_remaining()

            guess = self.get_guess()
            guess_result = self.check_guess(guess)

            self.display_guess_high_low(guess)
            self.decrement_remaining_guesses(guess_result)

            results = self.process_results(guess_result)

            if results in (True, False):
                self.display_results(results)
                break

    def play(self):
        self.start_gameplay()
        self.__init__()


game = GuessingGame()
game.play()

game.play()



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
