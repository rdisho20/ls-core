function p(str, regex) {
  console.log(str.match(regex));
}

let text = "cat\ncot\nCATASTROPHE\nWILDCAUGHT\n" +
            "wildcat\n-GET-\nYacht"

p(text, /^c.t/mig);
p(text, /c.t$/mig);

/*
The match method returns a list of all matches that it finds.
For the first test, the matches were for "cat\n", "cot\n", and
"CATASTROPHE\n"; for the second test, "cat\n", "cot\n", "wildcat\n",
and "Yacht" all matched
*/