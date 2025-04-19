class Candidate:

    def __init__(self, name):
        self.name = name
        self.counter = 0
    
    def __iadd__(self, other):
        if not isinstance(other, int):
            return NotImplemented

        self.counter += other
        return self

class Election:

    def __init__(self, candidates):
        self.candidates = candidates
    
    def get_results(self):
        candidate_results = {candidate.name: candidate.counter
                             for candidate in candidates}

        return candidate_results

    def print_individual_results(self):
        results = self.get_results()

        for candidate, votes in results.items():
            print(f'{candidate}: {votes} votes')
    
    def get_winner(self, winner):
        _, vote_count = winner
        
        return vote_count

    def print_winner(self):
        results = self.get_results()
        total = sum(results.values())
        winner = max(results.items(), key=self.get_winner)
        print(f'{winner[0]} won: {(winner[1] / total) * 100}% of votes')
    
    def results(self):
        self.print_individual_results()
        self.print_winner()
        

mike_jones = Candidate('Mike Jones')
susan_dore = Candidate('Susan Dore')
kim_waters = Candidate('Kim Waters')

candidates = {
    mike_jones,
    susan_dore,
    kim_waters,
}

votes = [
    mike_jones,
    susan_dore,
    mike_jones,
    susan_dore,
    susan_dore,
    kim_waters,
    susan_dore,
    mike_jones,
]

for candidate in votes:
    candidate += 1

election = Election(candidates)
election.results()


'''Output
Mike Jones: 3 votes
Susan Dore: 4 votes
Kim Waters: 1 votes

Susan Dore won: 50.0% of votes
'''

'''results()
input: self
output: print statement showing names of candidates,
their number of votes, & winner w/ percentage votes won

Algorithm:
High Lvl:
- For each candidate - calculate total number of votes
- divide the winning candidate (has most votes) by 'total' number of votes
- print each candidates name and their total number of votes

'''