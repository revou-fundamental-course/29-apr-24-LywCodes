

document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan elemen-elemen yang diperlukan
    var form = document.forms["message-form"];
    var nameInput = form.elements["name-input"];
    var errorName = document.getElementById("error-name");
    var nameSpan = document.getElementById("name");

    // Menyembunyikan pesan kesalahan awal
    errorName.style.display = "none";

    // Menambahkan event listener untuk saat form disubmit
    form.addEventListener("submit", function(event) {
        // Menghentikan aksi default dari form (pengiriman)
        event.preventDefault();

        // Validasi input
        if (nameInput.value === "") {
            // Jika input kosong, tampilkan pesan kesalahan
            errorName.style.display = "block";
        } else {
            // Jika input tidak kosong, sembunyikan pesan kesalahan
            errorName.style.display = "none";

            // Ubah teks pada elemen span menjadi nilai input
            nameSpan.textContent = nameInput.value;
        }
    });
});

function initBannerSlider() {
    var openingDiv = document.querySelector('.opening');
    var titles = ['experience a memorable and enjoyable journey', 'many holiday destinations are waiting for you', 'New Experience', 'Register now'];
    var currentIndex = 0;
    var intervalId;

    function changeTitle() {
        openingDiv.innerHTML = `
            <h2>Yupi Tour and Travel</h2>
            <p><i>${titles[currentIndex]}</i></p>
        `;
        currentIndex = (currentIndex + 1) % titles.length; 
    }

    function startAutoSlide() {
        intervalId = setInterval(changeTitle, 7000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    startAutoSlide();

    openingDiv.addEventListener('mouseenter', stopAutoSlide);

    openingDiv.addEventListener('mouseleave', startAutoSlide);
}

document.addEventListener('DOMContentLoaded', function() {
    initBannerSlider();
});


document.addEventListener('DOMContentLoaded', function() {
    initBannerSlider();
});

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}


var slideInterval = setInterval(plusSlides.bind(null, 1), 7000); 


function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var interest = document.getElementById("interest").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (interest === "select") {
        alert("Please select your interest.");
        return false;
    }

    alert("Thank You for your attention, we will submit your form");
    
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}