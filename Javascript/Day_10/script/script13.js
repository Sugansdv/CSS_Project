const images = [
  "assets/flower5.jpeg",
  "assets/flower2.jpeg",
  "assets/flower3.jpeg",
  "assets/flower4.jpeg"
];

let currentImageIndex = 0;

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  
  const image1 = document.getElementById("image1");
  
  image1.src = images[currentImageIndex];
  
  imageElement.style.width = "300px";
  imageElement.style.height = "200px";
  imageElement.alt = "Image " + (currentImageIndex + 1);
}