// bee cursor start:
document.addEventListener('mousemove', event => {
  const x = event.pageX - 25
  const y = event.pageY
  const targetX = window.innerWidth / 2
  const targetY = window.innerHeight / 2
  const cursor = document.querySelector('#cursor')
  cursor.style.left = x + 'px'
  cursor.style.top = y + 'px'
  cursor.style.transform = 'rotate(45deg)'
})

// queen bee start:
const queenTag = document.querySelector('.queen')
const openerTag = document.querySelector('.credit-opener')

openerTag.addEventListener('click', event => {
  queenTag.classList.toggle('open')
  if (queenTag.classList.contains('open')) {
    openerTag.innerHTML = "Go back to the main page..."
  } else {
    openerTag.innerHTML = "Find out where all this honey came from..."
  }
  event.preventDefault()
})

// fetching random videos from a YT playlist start:
const playerTag = document.querySelector('.player')
const underlineLoader = document.querySelector('.underline')
const API_KEY = "YOUR_API_KEY"
const playlistId = "YOUR_PLAYLIST_ID"
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=27&playlistId=${playlistId}&key=${API_KEY}`

function getVideo() {
fetch(url)
  .then(response => response.json())
  .then(data => {
    const items = data.items
    const id = items[Math.floor(items.length * Math.random())].snippet.resourceId.videoId
  	placeVideo(id)	
  })
	.catch(error => {
  	console.log(error)
    sectionTag.innerHTML = "The video you requested probably got lost in the groove. Try reloading the page!"
  })
}

function placeVideo(id) {
	playerTag.innerHTML = ''
  playerTag.innerHTML = playerTag.innerHTML + `
    	<div class="player-video">
    		<iframe width="480" height="360" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    	</div>
  `
}

underlineLoader.addEventListener('click', function() {
	getVideo()
})

document.addEventListener('keydown', function(event) {
	if (event.keyCode == '32') {
		getVideo()
	}
})


// surprise bee start:
const beeActivator = document.querySelector(".lilbee")
const beeContainer = document.querySelector(".surprise-bee")
const surpriseBee = document.querySelector(".surprise-bee span")

beeActivator.addEventListener('mouseover', () => {
	beeContainer.style.transform = `rotate(${Math.random() * 60}deg)`
  surpriseBee.animate([
    {transform: "translateX(0)"},
    {transform: "translateX(200vw)"}], {
    	duration: 2000,
    	iterations: 1
  })
})

// mobile span color start:
const mobileSpan = document.querySelectorAll('span.mobile-color')
mobileSpan.forEach((color, index) => {
  color.animate([
    {color: "rgba(238, 202, 14, 0.7)"}, 
    {color: "rgba(238, 193, 75, 0.6)"}, 
    {color: "rgba(238, 116, 0, 0.5)"}, 
    {color: "rgba(236, 182, 43, 0.7)"}], {
    	delay: 300 * index,
    	duration: 3000,
    	iterations: Infinity
  })
})