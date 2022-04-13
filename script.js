let secretNumber = Math.trunc(Math.random()*20)+1
//This is how we get a random number between 1 and 20.
//math.random generates a random num btw 0 and 1.Multiplying 
//with 20 gives number btw 0 and 19 with decimal digits.To remove the 
//decimal digits we use math.trunc.We add 1 to make it a range from 1 to 20.
let score = 20
let highscore = 0


document.querySelector('.check').addEventListener
('click' , function() {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!'
    } else if (guess===secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('.number').textContent =secretNumber 
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if(score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too High!'
        score--
        document.querySelector('.score').textContent = score
      } else {
        document.querySelector('.message').textContent ='You lost the Game!'
        document.querySelector('.score').textContent = 0
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!'
            score--
            document.querySelector('.score').textContent = score
      } else {
            document.querySelector('.message').textContent ='You lost the Game!'
            document.querySelector('.score').textContent = 0
      }  
        
    }
})

document.querySelector('.again').addEventListener
('click', function() {
   score = 20 
   
   secretNumber = Math.trunc(Math.random()*20)+1
   document.querySelector('.message').textContent = 'Start Guessing....'
   document.querySelector('.score').textContent = score
   document.querySelector('.number').textContent = '?'
   document.querySelector('.guess').value = ''
   document.querySelector('body').style.backgroundColor = '#222'
   document.querySelector('.number').style.width = '15rem'
   
})