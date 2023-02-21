/*
	Designed by: Hash Elias
	Original image: https://dribbble.com/shots/5425482-LOST
*/

const startTrigger = document.querySelector("#start")
const a = document.querySelector("#a")

const startAnimation = () => {
	startTrigger.classList.add("is-start-visible")
	a.loop = true;
	a.play()
	startTrigger.removeEventListener("click", startAnimation)
	setTimeout(() => startTrigger.classList.add("is-start-hidden"), 2001)
};

startTrigger.addEventListener("click", startAnimation)