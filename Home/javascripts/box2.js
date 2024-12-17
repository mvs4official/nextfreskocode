var box2 = document.getElementById('box2');
var poupuptext2 = document.getElementById('popupText2');
box2.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = "url('imags/pexels-cottonbro-4100661 1.png')";
    document.body.style.backgroundSize = "contain"; // Ensures the image covers the entire body
    document.body.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
    document.body.style.backgroundPosition = "center";
    poupuptext2.textContent = "One-on-one personal mentoring connects you with compassionate, highly trained professionals who specialize in Islamic counseling. These mentors work closely with you to provide emotional support, practical advice, and spiritual guidance tailored to your individual needs.";
    poupuptext2.style.fontSize ='75%';
    poupuptext2.style.fontFamily = "poppins";
    poupuptext2.style.fontWeight ="400";
    poupuptext2.style.textAlign='justify';
    poupuptext2.style.color="white"; 

});
box2.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = "url('imags/pexels-pixabay-327540 1 copy.png')";
    document.body.style.backgroundSize = "contain"; // Ensures the image covers the entire body
    document.body.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
    document.body.style.backgroundPosition = "center";
    poupuptext2.textContent= "Personal \nMentoring";
    poupuptext2.style.fontSize = '1rem';
    poupuptext2.style.fontFamily = "poppins";
    poupuptext2.style.fontWeight ="600";
    poupuptext2.style.color="white"; 
});