const imageInput = document.getElementById('imageInput');
const previewImage = document.getElementById('imagePreview');

imageInput.addEventListener('change', function () {
  const file = this.files[0];

  if (file) {
    const objectURL = URL.createObjectURL(file);

    previewImage.src = objectURL;
    previewImage.style.display = 'block';
  } else {
    previewImage.src = '#';
    previewImage.style.display = 'none';
  }
});