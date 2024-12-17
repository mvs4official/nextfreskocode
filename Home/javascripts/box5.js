var box5 = document.getElementById('box5');
var poupuptext5 = document.getElementById('popupText5');
box5.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = "url('imags/camera-7903435 1.png')";
    document.body.style.backgroundSize = "contain"; // Ensures the image covers the entire body
    document.body.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
    document.body.style.backgroundPosition = "center";
    poupuptext5.textContent = "For immediate support and real-time interaction, our live mentoring feature allows you to connect with Islamic scholars, counselors, and mentors via live sessions. These sessions are designed to address your concerns promptly, provide tailored advice, and offer practical steps to resolve your challenges.";
    poupuptext5.style.fontSize ='0.7rem';
    poupuptext5.style.fontFamily = "poppins";
    poupuptext5.style.fontWeight ="400";
    poupuptext5.style.textAlign= 'justify';
    poupuptext5.style.color="white"; 
});
box5.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = "url('imags/pexels-pixabay-327540 1 copy.png')";
    document.body.style.backgroundSize = "contain"; // Ensures the image covers the entire body
    document.body.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
    document.body.style.backgroundPosition = "center";
    poupuptext5.textContent = "live Mentoring ";
    poupuptext5.style.fontSize = '1rem';
    poupuptext5.style.fontFamily = "poppins";
    poupuptext5.style.fontWeight ="600";
    poupuptext5.style.color="white"; 
});