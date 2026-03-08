// Automatic Slider
let images = ["shoe1_collection.jpg", "shoe2_collection.jpg", "shoe3_collection.jpg", "shoe4_collection.jpg", "shoe5_collection.jpg"];
let i = 0;

function changeImage() {
    let slide = document.getElementById("slide");
    if (slide) {
        i = (i + 1) % images.length;
        slide.src = images[i];
    }
}
setInterval(changeImage, 2000);

// Focus Mode with Custom WhatsApp Message
function showImage(element) {
    document.getElementById("imageFocus").style.display = "flex";
    document.getElementById("focusedImg").src = element.src;
    
    let shoeName = element.parentElement.querySelector('h3').innerText;
    document.getElementById("focusName").innerText = shoeName;
    
    // Fixed WhatsApp link (No spaces)
    let message = encodeURIComponent("Hi Nase, I want to buy the " + shoeName);
    document.getElementById("focusWA").href = "https://wa.me/254743639278?text=" + message;
}

function closeImage() {
    document.getElementById("imageFocus").style.display = "none";
}