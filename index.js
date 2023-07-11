class PersonInfo{
  constructor (){
   this.$firstName = document.querySelector(".first-name");
   this.$lastName = document.querySelector(".last-name");
   this.$email = document.querySelector(".email");
   this.$password = document.querySelector(".password");
   this.$submitBtn = document.querySelector(".submit-btn");
   this.$errorMessageOne = document.querySelector(".invalid-first-name");
   this.$errorMessageTwo = document.querySelector(".invalid-last-name");
   this.$errorMessageThree = document.querySelector(".invalid-email");
   this.$errorMessageFour = document.querySelector(".invalid-password");
   this.$errorOne = document.querySelector(".error-one");
   this.$errorTwo = document.querySelector(".error-two");
   this.$errorThree = document.querySelector(".error-three");
   this.$errorFour = document.querySelector(".error-four");
   this.$one = document.querySelector(".one");
   this.$two = document.querySelector(".two");
   this.$three = document.querySelector(".three");
   this.$four = document.querySelector(".four");

   this.addEventListeners();
  }

  addEventListeners(){
    document.body.addEventListener('click', (event)=>{
     this.onclickHandler(event);
     event.preventDefault();
    });
  }

  onclickHandler(event){
    const onclickBtn = this.$submitBtn.contains(event.target);
    const firstNamameInfo = this.$firstName.value;
    const lastNameInfo = this.$lastName.value;
    const emailInfo = this.$email.value;
    const passwordInfo = this.$password.value;

    const email = this.$email.value;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
    const isValidEmail = emailRegex.test(email);

    
   if(onclickBtn && (!firstNamameInfo == "" && !lastNameInfo == "" && !emailInfo == "" && !passwordInfo == "")){
    console.log('hi');
   }

   if (onclickBtn && (firstNamameInfo == "" && lastNameInfo == "" && emailInfo == "" && passwordInfo == "")){
    this.$errorMessageOne.style.display='inline'; 
    this.$errorMessageTwo.style.display='inline';
    this.$errorMessageThree.style.display='inline';
    this.$errorMessageFour.style.display='inline';

    this.$errorOne.style.display= 'inline';
    this.$errorTwo.style.display= 'inline';
    this.$errorThree.style.display = 'inline';
    this.$errorFour.style.display = 'inline';

    this.$one.style.border = '1px solid #ff7979';
    this.$two.style.border = '1px solid #ff7979';
    this.$three.style.border = '1px solid #ff7979';
    this.$four.style.border = '1px solid #ff7979';
   } else if (onclickBtn && (!firstNamameInfo == "" && lastNameInfo == "" && emailInfo == "" && passwordInfo == "")){
    // this.$errorMessageOne.style.display='inline'; 
    this.$errorMessageTwo.style.display='inline';
    this.$errorMessageThree.style.display='inline';
    this.$errorMessageFour.style.display='inline';

    // this.$errorOne.style.display= 'inline';
    this.$errorTwo.style.display= 'inline';
    this.$errorThree.style.display = 'inline';
    this.$errorFour.style.display = 'inline';

    // this.$one.style.border = '1px solid #ff7979';
    this.$two.style.border = '1px solid #ff7979';
    this.$three.style.border = '1px solid #ff7979';
    this.$four.style.border = '1px solid #ff7979';
   } else if (onclickBtn && (!firstNamameInfo == "" && !lastNameInfo == "" && emailInfo == "" && passwordInfo == "")){
    // this.$errorMessageOne.style.display='inline'; 
    // this.$errorMessageTwo.style.display='inline';
    this.$errorMessageThree.style.display='inline';
    this.$errorMessageFour.style.display='inline';

    // this.$errorOne.style.display= 'inline';
    // this.$errorTwo.style.display= 'inline';
    this.$errorThree.style.display = 'inline';
    this.$errorFour.style.display = 'inline';

    // this.$one.style.border = '1px solid #ff7979';
    // this.$two.style.border = '1px solid #ff7979';
    this.$three.style.border = '1px solid #ff7979';
    this.$four.style.border = '1px solid #ff7979';
   } else if (onclickBtn && (!firstNamameInfo == "" && lastNameInfo == "" && !emailInfo == "" && passwordInfo == "")){
    // this.$errorMessageOne.style.display='inline'; 
    this.$errorMessageTwo.style.display='inline';
    // this.$errorMessageThree.style.display='inline';
    this.$errorMessageFour.style.display='inline';

    // this.$errorOne.style.display= 'inline';
    this.$errorTwo.style.display= 'inline';
    // this.$errorThree.style.display = 'inline';
    this.$errorFour.style.display = 'inline';

    // this.$one.style.border = '1px solid #ff7979';
    this.$two.style.border = '1px solid #ff7979';
    // this.$three.style.border = '1px solid #ff7979';
    this.$four.style.border = '1px solid #ff7979';
   } else if (onclickBtn && (!firstNamameInfo == "" && lastNameInfo == "" && emailInfo == "" && !passwordInfo == "")){
    // this.$errorMessageOne.style.display='inline'; 
    this.$errorMessageTwo.style.display='inline';
    this.$errorMessageThree.style.display='inline';
    // this.$errorMessageFour.style.display='inline';

    // this.$errorOne.style.display= 'inline';
    this.$errorTwo.style.display= 'inline';
    this.$errorThree.style.display = 'inline';
    // this.$errorFour.style.display = 'inline';

    // this.$one.style.border = '1px solid #ff7979';
    this.$two.style.border = '1px solid #ff7979';
    this.$three.style.border = '1px solid #ff7979';
    // this.$four.style.border = '1px solid #ff7979';
   } else if (onclickBtn && (!firstNamameInfo == "" && !lastNameInfo == "" && !emailInfo == "" && passwordInfo == "")){
    // this.$errorMessageOne.style.display='inline'; 
    // this.$errorMessageTwo.style.display='inline';
    // this.$errorMessageThree.style.display='inline';
    this.$errorMessageFour.style.display='inline';

    // this.$errorOne.style.display= 'inline';
    // this.$errorTwo.style.display= 'inline';
    // this.$errorThree.style.display = 'inline';
    this.$errorFour.style.display = 'inline';

    // this.$one.style.border = '1px solid #ff7979';
    // this.$two.style.border = '1px solid #ff7979';
    // this.$three.style.border = '1px solid #ff7979';
    this.$four.style.border = '1px solid #ff7979';
   } else if (onclickBtn && (!firstNamameInfo == "" && !lastNameInfo == "" && emailInfo == "" && !passwordInfo == "")){
    // this.$errorMessageOne.style.display='inline'; 
    // this.$errorMessageTwo.style.display='inline';
    this.$errorMessageThree.style.display='inline';
    // this.$errorMessageFour.style.display='inline';

    // this.$errorOne.style.display= 'inline';
    // this.$errorTwo.style.display= 'inline';
    this.$errorThree.style.display = 'inline';
    // this.$errorFour.style.display = 'inline';

    // this.$one.style.border = '1px solid #ff7979';
    // this.$two.style.border = '1px solid #ff7979';
    this.$three.style.border = '1px solid #ff7979';
    // this.$four.style.border = '1px solid #ff7979';
   } else if (onclickBtn && (!firstNamameInfo == "" && lastNameInfo == "" && !emailInfo == "" && !passwordInfo == "")){
    // this.$errorMessageOne.style.display='inline'; 
    this.$errorMessageTwo.style.display='inline';
    // this.$errorMessageThree.style.display='inline';
    // this.$errorMessageFour.style.display='inline';

    // this.$errorOne.style.display= 'inline';
    this.$errorTwo.style.display= 'inline';
    // this.$errorThree.style.display = 'inline';
    // this.$errorFour.style.display = 'inline';

    // this.$one.style.border = '1px solid #ff7979';
    this.$two.style.border = '1px solid #ff7979';
    // this.$three.style.border = '1px solid #ff7979';
    // this.$four.style.border = '1px solid #ff7979';
   } 
   
   else if (onclickBtn && (firstNamameInfo == "" && !lastNameInfo == "" && emailInfo == "" && passwordInfo == "")){
    this.$errorMessageOne.style.display='inline'; 
    // this.$errorMessageTwo.style.display='inline';
    this.$errorMessageThree.style.display='inline';
    this.$errorMessageFour.style.display='inline';

    this.$errorOne.style.display= 'inline';
    // this.$errorTwo.style.display= 'inline';
    this.$errorThree.style.display = 'inline';
    this.$errorFour.style.display = 'inline';

    this.$one.style.border = '1px solid #ff7979';
    // this.$two.style.border = '1px solid #ff7979';
    this.$three.style.border = '1px solid #ff7979';
    this.$four.style.border = '1px solid #ff7979';
   } else if (onclickBtn && (firstNamameInfo == "" && !lastNameInfo == "" && !emailInfo == "" && passwordInfo == "")){
    this.$errorMessageOne.style.display='inline'; 
    // this.$errorMessageTwo.style.display='inline';
    // this.$errorMessageThree.style.display='inline';
    this.$errorMessageFour.style.display='inline';

    this.$errorOne.style.display= 'inline';
    // this.$errorTwo.style.display= 'inline';
    // this.$errorThree.style.display = 'inline';
    this.$errorFour.style.display = 'inline';

    this.$one.style.border = '1px solid #ff7979';
    // this.$two.style.border = '1px solid #ff7979';
    // this.$three.style.border = '1px solid #ff7979';
    this.$four.style.border = '1px solid #ff7979';
   }else if (onclickBtn && (firstNamameInfo == "" && !lastNameInfo == "" && emailInfo == "" && !passwordInfo == "")){
    this.$errorMessageOne.style.display='inline'; 
    // this.$errorMessageTwo.style.display='inline';
    this.$errorMessageThree.style.display='inline';
    // this.$errorMessageFour.style.display='inline';

    this.$errorOne.style.display= 'inline';
    // this.$errorTwo.style.display= 'inline';
    this.$errorThree.style.display = 'inline';
    // this.$errorFour.style.display = 'inline';

    this.$one.style.border = '1px solid #ff7979';
    // this.$two.style.border = '1px solid #ff7979';
    this.$three.style.border = '1px solid #ff7979';
    // this.$four.style.border = '1px solid #ff7979';
   } else if (onclickBtn && (firstNamameInfo == "" && !lastNameInfo == "" && !emailInfo == "" && !passwordInfo == "")){
    this.$errorMessageOne.style.display='inline'; 
    // this.$errorMessageTwo.style.display='inline';
    // this.$errorMessageThree.style.display='inline';
    // this.$errorMessageFour.style.display='inline';

    this.$errorOne.style.display= 'inline';
    // this.$errorTwo.style.display= 'inline';
    // this.$errorThree.style.display = 'inline';
    // this.$errorFour.style.display = 'inline';

    this.$one.style.border = '1px solid #ff7979';
    // this.$two.style.border = '1px solid #ff7979';
    // this.$three.style.border = '1px solid #ff7979';
    // this.$four.style.border = '1px solid #ff7979';
   } else if (onclickBtn && (firstNamameInfo == "" && lastNameInfo == "" && !emailInfo == "" && passwordInfo == "")){
    this.$errorMessageOne.style.display='inline'; 
    this.$errorMessageTwo.style.display='inline';
    // this.$errorMessageThree.style.display='inline';
    this.$errorMessageFour.style.display='inline';

    this.$errorOne.style.display= 'inline';
    this.$errorTwo.style.display= 'inline';
    // this.$errorThree.style.display = 'inline';
    this.$errorFour.style.display = 'inline';

    this.$one.style.border = '1px solid #ff7979';
    this.$two.style.border = '1px solid #ff7979';
    // this.$three.style.border = '1px solid #ff7979';
    this.$four.style.border = '1px solid #ff7979';
   } else if (onclickBtn && (firstNamameInfo == "" && lastNameInfo == "" && !emailInfo == "" && !passwordInfo == "")){
    this.$errorMessageOne.style.display='inline'; 
    this.$errorMessageTwo.style.display='inline';
    // this.$errorMessageThree.style.display='inline';
    // this.$errorMessageFour.style.display='inline';

    this.$errorOne.style.display= 'inline';
    this.$errorTwo.style.display= 'inline';
    // this.$errorThree.style.display = 'inline';
    // this.$errorFour.style.display = 'inline';

    this.$one.style.border = '1px solid #ff7979';
    this.$two.style.border = '1px solid #ff7979';
    // this.$three.style.border = '1px solid #ff7979';
    // this.$four.style.border = '1px solid #ff7979';
   } else if (onclickBtn && (firstNamameInfo == "" && lastNameInfo == "" && emailInfo == "" && !passwordInfo == "")){
    this.$errorMessageOne.style.display='inline'; 
    this.$errorMessageTwo.style.display='inline';
    this.$errorMessageThree.style.display='inline';
    // this.$errorMessageFour.style.display='inline';

    this.$errorOne.style.display= 'inline';
    this.$errorTwo.style.display= 'inline';
    this.$errorThree.style.display = 'inline';
    // this.$errorFour.style.display = 'inline';

    this.$one.style.border = '1px solid #ff7979';
    this.$two.style.border = '1px solid #ff7979';
    this.$three.style.border = '1px solid #ff7979';
    this.$four.style.border = '1px solid #ff7979';
   } else if (onclickBtn && isValidEmail) {
    this.$errorMessageThree.style.display='none';
    this.$errorThree.style.display = 'none';
    this.$three.style.border = '1px solid black';
   } else if (onclickBtn && !isValidEmail){
    this.$errorMessageThree.style.display='inline';
    this.$errorThree.style.display = 'inline';
    this.$three.style.border = '1px solid #ff7979';
   }
   
  }
}


const personInfo = new PersonInfo();
