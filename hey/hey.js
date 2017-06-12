// create prompt for devilish experience
var likesAlive = confirm("Do you like being alive");
if (likesAlive) {
 alert("We will see...");
} else {
 alert("I knew you were pitiful");
}

// start with variables for script
var can_play = true;
var words = new Array("ARCHER", "LANA", "CERIL", "MALERIE", "DR KREIGER", "PAM", "CAROL");
 
var to_guess = "";
var display_word = "";
var used_letters = "";
var wrong_guesses = 0;
  // move into functions for actions
function selectLetter(l)
{
if (can_play == false)
{
return;
}
 
if (used_letters.indexOf(l) != -1)
{
return;
}
 
used_letters += l;
document.game.usedLetters.value = used_letters;
 
if (to_guess.indexOf(l) != -1)
{
 // correct letter guess 
pos = 0;
temp_mask = display_word;
 
while (to_guess.indexOf(l, pos) != -1)
{
pos = to_guess.indexOf(l, pos);			
end = pos + 1;
 
start_text = temp_mask.substring(0, pos);
end_text = temp_mask.substring(end, temp_mask.length);
 
temp_mask = start_text + l + end_text;
pos = end;
}
 
display_word = temp_mask;
document.game.displayWord.value = display_word;
 
if (display_word.indexOf("#") == -1)
{
// won
alert("You've survived for now...mwuahahahaha...");
can_play = false;
}
}
else
{
// incorrect letter guess
wrong_guesses += 1;

 
if (wrong_guesses == 8)
{
// lost
alert("Your attempts were futile!");
can_play = false;
}
}
}
 
function reset()
{
selectWord();
document.game.usedLetters.value = "";
used_letters = "";
wrong_guesses = 0;
}
 
function selectWord()
{
can_play = true;
random_number = Math.round(Math.random() * (words.length - 1));
to_guess = words[random_number]; 
 
// display masked word
masked_word = createMask(to_guess);
document.game.displayWord.value = masked_word;
display_word = masked_word;
}
 
function createMask(m)
{
mask = "";
word_lenght = m.length;
 
for (i = 0; i < word_lenght; i ++)
{
mask += "#";
}
return mask;
}