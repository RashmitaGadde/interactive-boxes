const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  const header = box.querySelector('.box-header');
  header.addEventListener('click', () => {
    boxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');
  });
});

