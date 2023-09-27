const homeBtn = document.getElementById('home');
const restartBtn = document.getElementById('restart');

//Home Button
function goHome() {
  const homeUrl = `https://lada-montcorbier.github.io/piskvorky/`;
  window.open(homeUrl, '_blank');
}

//Event Listeners
homeBtn.addEventListener('click', goHome);
restartBtn.addEventListener('click', restartGame);
