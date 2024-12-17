var box1 = document.getElementById('box1');
var poupuptext1 = document.getElementById('popupText1');
box1.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = "url('imags/pexels-cottonbro-4100665 1.png')";
    
    document.body.style.backgroundSize = "contain"; // Ensures the image covers the entire body
    document.body.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
    document.body.style.backgroundPosition = "center";
    poupuptext1.textContent = "Our problem assessment system is designed to pinpoint the core challenges you face. By using structured questionnaires, advanced analysis, and Al- driven insights, we identify the root causes of mental struggles such as addiction, behavioral patterns, and emotional turmoil.";
    poupuptext1.style.fontSize ='77%';
    poupuptext1.style.fontFamily = "poppins";
    poupuptext1.style.fontWeight ="400";
    poupuptext1.style.textAlign='justify'; 
    poupuptext1.style.color="white"; 
});
box1.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = "url('imags/pexels-pixabay-327540 1 copy.png')";
    ;
    document.body.style.backgroundSize = "contain"; // Ensures the image covers the entire body
    document.body.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
    document.body.style.backgroundPosition = "center";
    poupuptext1.textContent = "Assessment";
    poupuptext1.style.fontSize = '1rem';
    poupuptext1.style.fontFamily = "poppins";
    poupuptext1.style.fontWeight ="600";
    poupuptext1.style.color="white"; 
});