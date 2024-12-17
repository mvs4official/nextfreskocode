var box4 = document.getElementById('box4');
var poupuptext4 = document.getElementById('popupText4');
box4.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = "url('imags/pexels-pixabay-159711 1.png')";
    document.body.style.backgroundSize = "contain"; // Ensures the image covers the entire body
    document.body.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
    document.body.style.backgroundPosition = "center";
    poupuptext4.textContent = "Our research pool is a comprehensive library of resources, including scholarly articles, Quranic insights, Hadith explanations, and case studies. These resources provide you with deeper knowledge about your struggles and evidence-based Islamic perspectives for overcoming them.";
    poupuptext4.style.fontSize ='.7rem';
    poupuptext4.style.fontFamily = "poppins";
    poupuptext4.style.fontWeight ="400";
    poupuptext4.style.textAlign='justify';
    poupuptext4.style.color="white"; 
});
box4.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = "url('imags/pexels-pixabay-327540 1 copy.png')";
    document.body.style.backgroundSize = "contain"; // Ensures the image covers the entire body
    document.body.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
    document.body.style.backgroundPosition = "center";
    poupuptext4.textContent = "Research Pool";
    poupuptext4.style.fontSize = '1rem';
    poupuptext4.style.fontFamily = "poppins";
    poupuptext4.style.fontWeight ="600";
    poupuptext4.style.color="white"; 
});