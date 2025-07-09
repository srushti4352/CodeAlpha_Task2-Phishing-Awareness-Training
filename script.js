// static/script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quiz-form');
  const resultDiv = document.getElementById('result');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let score = 0;
      const answers = {
        q1: 'B',
        q2: 'B'
      };

      for (let q in answers) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
          score++;
        }
      }

      resultDiv.innerHTML = `<h3>Your Score: ${score}/2</h3>`;
    });
  }
});
