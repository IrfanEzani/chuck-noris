const button = document.getElementById('joke-btn')
const jokeContainer = document.querySelector('.joke-container')

button.addEventListener('click',() => {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
    change(data)
  })
})


function change(joke) {
  jokeContainer.classList.remove('hide')
  jokeContainer.innerHTML =
  `<h3>${joke.value}</h3>
  <img src="kick.png" alt="">
  `;
}
