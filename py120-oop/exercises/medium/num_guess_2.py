import random
import math


class GuessingGame:
    def __init__(self, low, high):
        self._number = random.randint(low, high)
        self._guesses_remaining = int(math.log2(high - low + 1)) + 1
        self._low = low
        self._high = high

    def get_guess(self):
        while True:
            user_input = input(f"Enter a number between {self._low} and {self._high}: ")

            try:
                user_input = int(user_input)

                if user_input < self._low or user_input > self._high:
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
        self.__init__(self._low, self._high)


game = GuessingGame(501, 1500)
game.play()

game.play()



'''
update, accepting low and high value
- use values -> compute secret number


'''
