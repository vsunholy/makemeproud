document.addEventListener('DOMContentLoaded', () => {
    let secretNumber = generateSecretNumber();
    let guessCount = 0;
    
    function generateSecretNumber() {
        let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let number = [];
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * digits.length);
            number.push(digits.splice(index, 1)[0]);
        }
        return number.join('');
    }

    function checkGuess(guess) {
        guessCount++;
        let correct = 0;
        let correctPosition = 0;
        for (let i = 0; i < 4; i++) {
            if (guess[i] === secretNumber[i]) {
                correctPosition++;
                correct++;
            } else if (secretNumber.includes(guess[i])) {
                correct++;
            }
        }
        return { correct, correctPosition };
    }

    function updateDOM(result) {
        const resultsDiv = document.getElementById('results');
        const guessCounter = document.getElementById('counter');
        const guessInput = document.getElementById('guessInput').value;

        resultsDiv.innerHTML += `<p>Spėjimas: ${guessInput} - Atspėti: ${result.correct}, Vietoje: ${result.correctPosition}</p>`;
        guessCounter.textContent = guessCount;
        
        if (result.correctPosition === 4) {
            alert('Sveikinu, jūs atspėjote!');
            document.getElementById('newGame').click();
        }
    }

    document.getElementById('submitGuess').addEventListener('click', () => {
        const guess = document.getElementById('guessInput').value;
        if (guess.length !== 4 || new Set(guess).size !== 4) {
            alert('Įveskite keturis unikalius skaitmenis');
            return;
        }
        
        const result = checkGuess(guess);
        updateDOM(result);
        document.getElementById('guessInput').value = '';
    });

    document.getElementById('newGame').addEventListener('click', () => {
        secretNumber = generateSecretNumber();
        guessCount = 0;
        document.getElementById('results').innerHTML = '';
        document.getElementById('counter').textContent = '0';
        document.getElementById('guessInput').value = '';
    });
});