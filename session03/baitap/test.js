let currentImageIndex = 0;
const images = [
  "https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/10/nuoi-meo-can-gi-0-1024x713.jpg",
  "https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
  "https://letrungpet.com/upload/product/2-7223.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_tabby_and_white_kitten_n01.jpg/1200px-Golden_tabby_and_white_kitten_n01.jpg",

  "https://thepet.vn/wp-content/uploads/2023/05/angry_cat_2-scaled-1-1024x683.webp",
  "https://doraemonpet.com/wp-content/uploads/2022/05/10-dieu-cam-ky%CC%A3-khi-nuoi-meo-2.jpg",
  "https://nld.mediacdn.vn/291774122806476800/2023/1/16/607ee4eb6992b2cceb83-1673836768050766942484.jpg",
];

function showImage(index) {
  if (index >= 0 && index < images.length) {
    const imageList = document.querySelectorAll("#imageList li img");

    // Loops through all images and darken them
    imageList.forEach((img, idx) => {
      img.style.filter = idx === index ? "brightness(100%)" : "brightness(50%)";
    });

    // Brightens the selected image
    document.getElementById("mainImage").src = images[index];
    document.getElementById("mainImage").style.filter = "brightness(100%)";

    currentImageIndex = index;
  }
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

document.addEventListener("DOMContentLoaded", function () {
  showImage(currentImageIndex);
});
