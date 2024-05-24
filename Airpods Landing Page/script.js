const images = ["Images/black.png", "Images/blue.png", "Images/green.png",  "Images/orange.png"];

const imageElement = document.getElementById('airpod-img');
let currentIndex = 0;
function changeImage(){
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex]
}

const interval = setInterval(changeImage, 2500);


