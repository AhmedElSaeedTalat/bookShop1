new Vue({
  el: '#app',
  data:{
  	cart:0,
  	id:"",
    values:"",
    availability:false,
    copyType:"",
    notAvailable:false,
    number:"",
    error:"",
    rowId:0,
    featuredBooks:[],
    authId:"",
    location:"",
    url:"",
    rating:0,
    review:"",
    name_review:"",
    review_email:"",
    reviewContent:[],
    ratingCommented:[],
    day:moment(),
    date:"",
    bookName:"",
    percentage:"",
    decoded:"",
    valuesXZ: [],
    eventChecker:false,
    event:"Attend Event",
     userEvents:[],
    joinedEvents:[],
    event1:false,
    event2:"Attend Event",
    eventInfo:[],
    theUnjoin:"",
    active1:"titles active",
    active2:"titles",
    dateInfo: moment(new Date()).format("YY-MM-DD"),
    searchB:"",
    booksNames:[],
    selectTypeContact:"",
    emailContact:"",
    messageContact:"",
    orderRef:"",
      },
  mounted(){
    axios.post("/mylibrary/recentbooks",{
      id:+this.rowId,
    }).then(response => this.featuredBooks = response.data);
     if(window.location.href.indexOf("login") > -1 || window.location.href.indexOf("profile") > -1){
      this.location = "home";
      this.url = "/mylibrary"
    }
    else{
      this.location="my account";
      this.url = "/mylibrary/profile"
    }
     var x = window.location.href.split("&");
     this.bookName = x[1];
     this.decoded =  decodeURIComponent(this.bookName);
     
     //get info drama and romance percentage 

    axios.post("/mylibrary/getpercentage",{
      author:this.bookName,
    }).then(response =>{ 

    $("#extendedColor").animate({"width":response.data[0][0].Drama+"%"},"slow");
    $("#extendedColor1").animate({"width":response.data[0][0].Romance+"%"},"slow");
    $("#extendedColor2").animate({"width":response.data[0][0].Comedy+"%"},"slow");
    $("#dramaNumber").animateNumber({"number":response.data[0][0].Drama});
    $("#romanceNumber").animateNumber({"number":response.data[0][0].Romance});
    $("#comedyNumber").animateNumber({"number":response.data[0][0].Comedy});

    });
    
     axios.get("/mylibrary/storedlikes").then(response =>{ this.storedLikes = response.data
                for( let x= 0;x<this.storedLikes[0].length;x++){
                  this.valuesXZ.push(this.storedLikes[0][x].bookId);
}
               });   
               
 //events button sequence

$(".exist").next().css("display","none");
$("#exists").next().css("display","none");


if($("#exists").length > 0){
  this.event1 = true;
}
     // get the events the user will attend

          axios.get("/mylibrary/profile/usersevents").then(response => {this.userEvents = response.data 
            response.data[0].map( (event) => {
              this.joinedEvents.push(+event.id);
            });
          });
          
          // get the information of our events 
          
          axios.get("/mylibrary/passEventInfoJs").then(response => this.eventInfo = response.data ); 
          
        // get books names from db 

        axios.get("/mylibrary/booksnames").then(response => this.booksNames = response.data);

  },
  computed:{
       compo(){
    
      if(this.searchB == ""){
        return [];
      }else{
          return this.booksNames[0].filter(array => {
          return array.Name.toUpperCase().indexOf(this.searchB.toUpperCase()) > -1;
      });
      }
   
    },
   showActivities(){
      if(this.active1 == "titles active" ){
        return true;
      }else{
        return false;
      }
    },
  showEvents(){
     if(this.active2 == "titles active" ){
        return true;
      }else{
        return false;
      }
    },
   reviewCheck(){
      if(this.review == "" || this.name_review == "" || this.review_email == ""){
        return true;
      }else{
        return false;
      }
    },
    stars(){
      for(let x = 0; x < this.reviewContent[0].rating ; x++){
          this.ratingCommented.push(x);
      }
      return this.ratingCommented;
    }
  },
  methods:{
  insertMessageContact(id){
      axios.post("/mylibrary/contactmessage",{
        message : this.messageContact,
        email : this.emailContact,
        userId : id,
        type : this.selectTypeContact,
        orderRef: +this.orderRef,
      });
       this.messageContact = "";
       this.emailContact = "";
       this.selectTypeContact = "";
       this.orderRef = "";
       alert("Thanks, We have received the message and, we will get in contact in 5 business days")
    },
  	addCart(id){
  		this.cart +=1;
      this.id = id;
  		axios.post("/mylibrary/valueFeautured",{
      id:id,
    }).then(response => this.values= response.data);
    
  	},
    checkQuantity(){
axios.post("/mylibrary/availability",{
      id:this.id,
      copyType:this.copyType
    }).then(response =>{ 
      if(response.data==1){
               this.availability = true;
               this.notAvailable = false;
      }else{
               this.availability = false;
               this.notAvailable = true;
      }
    });

    },
    toCart(id){
      this.cart +=1;
      axios.post("/mylibrary/insertrequest",{
      id:this.id,
      quantity:this.number,
      user:+id,
      request:this.copyType,
    }).then(response => {
      if(response.status !== 200){
        this.error ="something went wrong";
      }
    });
    },
    showMessage(){
      alert("you must be registered to add to cart");
    },
      showMessage2(){
      alert("you must be registered to like");
    },
slider(){
  $(".out").slideToggle();
},
flag(){
  $(".flag").slideToggle();
},
cancelTransaction(){
  this.cart -=1;
   axios.post("/mylibrary/newreq",{
      id:+this.id,
    }).then(response => {console.log(response.data)})
},
nextBooks(){
   if($(document).width() > 992){
    this.rowId += 74 ;
    $(".image99").animate({"right":this.rowId+"rem"});
  }
    if($(document).width() <= 992 && $(document).width() > 520){
     this.rowId += 30 ;
    $(".image99").animate({"right":this.rowId+"rem"});
    }

    if($(window).width() <= 520){
     this.rowId += 20 ;
    $(".image99").animate({"right":this.rowId+"rem"});
    }
},
previousBooks(){
  if($(document).width() > 992){
 if(this.rowId >= 74 ){
    this.rowId -= 74;
     $(".image99").animate({"right":this.rowId+"rem"});

 } 
}
if($(document).width() <= 992 && $(document).width() > 520){
   if(this.rowId >= 30 ){
     this.rowId -= 30 ;
    $(".image99").animate({"right":this.rowId+"rem"});
  }
    }

 if($(document).width() <= 520){
  if(this.rowId >= 20 ){
    this.rowId -= 20;
     $(".image99").animate({"right":this.rowId+"rem"});

 } 
  }
  },
   classX(){
    if($(".star").hasClass("fa-star-o")){
       $(".star").removeClass("fa-star-o");
       $(".star").addClass("fa-star");
       if(this.reviewContent.length==0){
         this.rating +=1;
       }
    }else{
       $(".star").removeClass("fa-star");
       $(".star").addClass("fa-star-o");
          if(this.reviewContent.length==0){
         this.rating -=1;
       }
    }
    
   },
  classXX(){
    if($(".star1").hasClass("fa-star-o")){
       $(".star1").removeClass("fa-star-o");
       $(".star1").addClass("fa-star");
         if(this.reviewContent.length==0){
         this.rating +=1;
       }
    }else{
       $(".star1").removeClass("fa-star");
       $(".star1").addClass("fa-star-o");
       if(this.reviewContent.length==0){
         this.rating -=1;
       }
    }
    
   },
     classXXX(){
    if($(".star2").hasClass("fa-star-o")){
       $(".star2").removeClass("fa-star-o");
       $(".star2").addClass("fa-star");
         if(this.reviewContent.length==0){
         this.rating +=1;
       }
    }else{
       $(".star2").removeClass("fa-star");
       $(".star2").addClass("fa-star-o");
       if(this.reviewContent.length==0){
         this.rating -=1;
       }
    }
    
   },
     classXXXX(){
    if($(".star3").hasClass("fa-star-o")){
       $(".star3").removeClass("fa-star-o");
       $(".star3").addClass("fa-star");
         if(this.reviewContent.length==0){
         this.rating +=1;
       }
    }else{
       $(".star3").removeClass("fa-star");
       $(".star3").addClass("fa-star-o");
      if(this.reviewContent.length==0){
         this.rating -=1;
       }
    }
    
   },
     classXXXXX(){
    if($(".star4").hasClass("fa-star-o")){
       $(".star4").removeClass("fa-star-o");
       $(".star4").addClass("fa-star");
         if(this.reviewContent.length==0){
         this.rating +=1;
       }
    }else{
       $(".star4").removeClass("fa-star");
       $(".star4").addClass("fa-star-o");
       if(this.reviewContent.length==0){
         this.rating -=1;
       }
    }
    
   },
   submitReview(){
       this.date=moment(new Date()).format("YY-MM-DD");
       this.reviewContent.push({
        review : this.review,
        email : this.review_email,
        name : this.name_review,
        rating : this.rating,
        date:moment(new Date()).format("YY-MM-DD"),
       });
       axios.post("/mylibrary/submitreviews",{
        review : this.review,
        email : this.review_email,
        user : this.name_review,
        rating : this.rating,
        userId : this.authId,
        date : this.date,
        bookName:this.bookName,
       });
       this.review = "";
       this.review_email = "";
       this.name_review = "";
       this.rating = "" ;
   },
      addLike(userId,bookId,index){
    if( $(".like .fa").eq(index).css('color') == 'rgb(255, 0, 0)'){

     $(".like .fa").eq(index).css("color","white");
     
     axios.post("/mylibrary/likes",{
        
        userId : +userId,
        bookId : +bookId,
        like : 0,
        }).then(response => console.log("done"));

    }else{

      $(".like .fa").eq(index).css("color","red");
      axios.post("/mylibrary/likes",
        {
        userId : +userId,
        bookId : +bookId,
        like : 1
        }).then(response => console.log(response.data));
    }
   },
   relod(){
       setTimeout(()=>{
           window.location.reload();
       },10);
   },
  eventAttendance1(eventId,userId){
      this.eventChecker=true;
      this.event = "joined";
      this.event1 =true;
      alert("thanks for deciding to join our event");
        axios.post("/mylibrary/profile/joinedevents",{
        eventId:eventId,
        userId:userId,
       });
        },

   
   eventAttendance(e,index,eventId,userId){
       alert("thanks for deciding to join our event");
       axios.post("/mylibrary/profile/joinedevents",{
        eventId:eventId,
        userId:userId,
       });
       $(e.target).prop("disabled",true);
       $(e.target).html("joined");
        $(e.target).siblings(".theUnjoin").css("display","block");
        },

        unjoin(e,id,counter){
          axios.post("/mylibrary/changeattendance",{
            eventId : +id,
          });
          $(e.target).siblings(".uniqueAdd").prop("disabled",false);
          $(e.target).siblings(".uniqueAdd").html("Attend Event");
          $(e.target).css("display","none");
        },

          unjoin1(id){
          axios.post("/mylibrary/changeattendance",{
            eventId : +id,
          });
           this.eventChecker=false;
           this.event = "Attend Event";
           this.event1 = false;
           $("#exists").html("Attend Event");
           $("#exists").prop("disabled",false);
        },
                 unjoin3(e,id,counter){
          axios.post("/mylibrary/changeattendance",{
            eventId : +id,
          });
          $(e.target).siblings(".uniqueAdd").prop("disabled",false);
          $(e.target).siblings(".uniqueAdd").html("Attend Event");
          $(e.target).css("display","none");
          $(e.target).css("display","none");

        },
          imTheActiveClass(){
      this.active1 ="titles active";
      this.active2 ="titles";
    },
    beActive(){
       this.active2 ="titles active";
       this.active1 = "titles";
    },
  }
  });
