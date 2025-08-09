

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//sending message to email
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone", "email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");



function sendEmail(){

   //const bodyMess = 'Full Name: ${fullName.value}<br> Email:${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}' ;
    const bo = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}` ;
   

    Email.send({
        SecureToken : "37f32cc4-7787-4984-ae58-03ab39bed944 ",
       // Host : "smtp.elasticemail.com",
       // Username : "metricslearningcentre@gmail.com",
      //  Password : "FB6DF87B6977FCEC9BB238017F2698B82CC2",
        To : 'metricslearningcentre@gmail.com',
        From : "metricslearningcentre@gmail.com",
        Subject : subject.value,
        Body : bo
    }).then(
      message => {
        if (message=="OK"){
            Swal.fire({
                title: "Success!",
                text:"Message sent successfully! Thanks for contacting Metrics Learning Center",
                icon: "success"
            })
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item");

    for (const item of items){
        if(item.value==""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();

        });




        item.addEventListener("keyup", () => {
            if (item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail=document.querySelector(".error-text.email");

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");


        if(email.value != ""){
            errorTxtEmail.innerText = "Enter a valid email address";
        }else{
            errorTxtEmail.innerText = "Email Address can't be blank";
        }

    }else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error")&& !subject.classList.contains("error") && !mess.classList.contains("error")){
        
        sendEmail();
        console.log("OK");

        form.reset();
        return false;
    }

    
});