new Vue({
  el:"#login",
  data:{
     main_password:"",
     message:"",
     password_confirmation:"",
     confirmation:"",
     userName:"",
     email:"",
     loginUser:"",
     loginPass:"",
     loginError:"",
     location:"",
     url:"",
   },
   mounted(){
      if(window.location.href.indexOf("login") > -1 || window.location.href.indexOf("profile") > -1){
      this.location = "home";
      this.url = "/mylibrary"
    }
    else{
      this.location="my account";
      this.url = "/mylibrary/profile"
    }  
   },
   computed:{
    loginCheck(){
     if(!this.loginUser == "" && !this.loginPass == "" && !this.loginPass.match(/=/) && !this.loginUser.match(/=/)){
      return false;
     }else{
      return true;
     }
    },
    checkInput(){
      if(this.main_password.match(/(?=.*?[A-Z])(?=.*?[0-9]).{8}/) 
        && this.userName !== "" 
        && this.email !=="" 
        && this.password_confirmation !=="" 
        && !this.password_confirmation.match(/=/)
        ){
        return false;
      }
      else{
        return true;
      }
    },
  },
   methods:{
      submit(){
        if(!this.main_password.match(/(?=.*?[A-Z])(?=.*?[0-9])/)){
         this.message = "there should be at least on capital letter and one digit and 8 characters";
      }
      else{
        this.message="";
      }
      },
      checkForm(e){
        if(this.password_confirmation !== this.main_password){
          this.confirmation = "the passwords aren't identical";
          e.preventDefault();
        }
      },
      checkLoginInput(e){
         if(this.loginUser == "" || this.loginPass == ""){
          this.loginError="please don't leave an empty field";
          e.preventDefault();
         }
      },
      slider(){
         $(".out").slideToggle();
},
flag(){
        $(".flag").slideToggle();
},
    }
})