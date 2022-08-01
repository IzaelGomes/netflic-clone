const question = document.querySelectorAll('.question');

question.forEach((q) => {
  q.addEventListener('click', () => {
    q.classList.toggle('active');
  });
});
