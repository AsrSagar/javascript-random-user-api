const url ='https://randomuser.me/api/ ';

let avatar   = document.getElementById('avatar');
let fullname = document.getElementById('fullname');
let email    = document.getElementById('email');
let date     = document.getElementById('date');
let city     = document.getElementById('city');
let phone    = document.getElementById('phone');
let btn      = document.getElementById('btn');

btn.addEventListener("click", function() {
  fetch(url)
    .then(handleErrors)
    .then(updateProfile)
    .catch(printError)
});

function handleErrors (response){
  if(!response.ok){
    throw new Error("NETWORK RESPONSE ERROR");
  } else{
    console.log(response);
    return response.json();
  }
}

function updateProfile (profile){

  avatar.src         = profile.results[0].picture.medium;
  fullname.innerHTML = profile.results[0].name.first +" "+profile.results[0].name.last; 
  email.innerHTML    = profile.results[0].email;
  date.innerHTML     = profile.results[0].dob.date;
  city.innerHTML     = profile.results[0].location.city;
  phone.innerHTML    = profile.results[0].phone;


  let emailValue = document.querySelector('#emailValue');
  let dobValue = document.querySelector('#dobValue');
  let cityValue = document.querySelector('#cityValue');
  let phoneValue = document.querySelector('#phoneValue');
 
  emailValue.setAttribute('data-value', email.innerHTML);
  dobValue.setAttribute('data-value', date.innerHTML);
  cityValue.setAttribute('data-value', city.innerHTML);
  phoneValue.setAttribute('data-value', phone.innerHTML);

  return 1;

}

function printError (error){
  console.log(error);
}


document.getElementById("emailValue").addEventListener("mouseover", mouseOver);
document.getElementById("emailValue").addEventListener("mouseout", mouseOut);

document.getElementById("dobValue").addEventListener("mouseover", mouseOver);
document.getElementById("dobValue").addEventListener("mouseout", mouseOut);

document.getElementById("cityValue").addEventListener("mouseover", mouseOver);
document.getElementById("cityValue").addEventListener("mouseout", mouseOut);

document.getElementById("phoneValue").addEventListener("mouseover", mouseOver);
document.getElementById("phoneValue").addEventListener("mouseout", mouseOut);

 
function mouseOver() {

  // let text = this.innerHTML;
 
 
  let getText = this.getAttribute("data-value"); 

  // var text = this.innerHTML;

  var myheading = document.getElementById("fullname");

  myheading.innerHTML = getText;

  console.log(getText);

}

function mouseOut() {
    // let text = this.innerHTML;

    let getText = this.getAttribute("data-value"); 
  
    // var text = this.innerHTML;
  
    var myheading = document.getElementById("fullname");
  
    myheading.innerHTML = getText;
  
    console.log(getText);
}

