var box3 = document.getElementById('box3');
var poupuptext3 = document.getElementById('popupText3');
box3.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = "url('imags/quran.png')";
    document.body.style.backgroundSize = "contain"; // Ensures the image covers the entire body
    document.body.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
    document.body.style.backgroundPosition = "center";
    poupuptext3.textContent = "We offer actionable steps rooted in authentic Islamic principles to address the challenges you face. Solutions are carefully curated to align with both your spiritual and practical needs, promoting balance and harmony in your life.";
    poupuptext3.style.fontSize ='.8rem';
    poupuptext3.style.fontFamily = "poppins";
    poupuptext3.style.fontWeight ="400";
    poupuptext3.style.textAlign='justify';
    poupuptext3.style.color="white"; 
});
box3.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = "url('imags/pexels-pixabay-327540 1 copy.png')";
    document.body.style.backgroundSize = "contain"; // Ensures the image covers the entire body
    document.body.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
    document.body.style.backgroundPosition = "center";
    poupuptext3.textContent = "Islamic Solution";
    poupuptext3.style.fontSize = '1rem';
    poupuptext3.style.fontFamily = "poppins";
    poupuptext3.style.fontWeight ="600";
    poupuptext3.style.color="white"; 
});