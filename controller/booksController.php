<?php 
namespace Books;
use App\queries;
use App\connection;
class booksController extends controller{

	public function index(){

		return view("books",$info);
		
	}
	public function home(){
			//get categories names and related values

				$categories1 = $this->query->selectRaw("category from Books group by category ")->get();

				//get releted to categories
				$Novel = $this->query->select("Name","books")
									->take("2")
									->whereX("category","Novel")
									->get();
				$Science = $this->query->select("Name","books")
									->take("2")
									->whereX("category","Science")
									->get();
				$space = $this->query->select("Name","books")
									   ->take("2")
									   ->whereX("category","Space")
									   ->get();
				$manga =$this->query->select("Name","books")
										->take("2")
										->whereX("category","Manga")
										->get();
				
				// get info for the featured books in the page
				
				$featuredBooks= $this->query->select("id,name,image,authors,Status","books")->take("6")->get();
			
				//get info about the most popular authors in the page
				
				$authors = $this->query->select("author_name,images","authors")->take("8")->get();
				$input  = $this->query->select("Name,image","books")->take("1")->get();
				
				//get info of hottest topic placed in the footer
				
				$commonValue  = $this->query->select("Name,image","books")->take("1")->get();
				
				//get info about the most request books by customers

				$mostRequestedBooks = $this->query
				->selectRaw("book_id from requests group by book_id order by max(number_request) desc limit 0,7")
				->get();
				$array = [];
				foreach ($mostRequestedBooks as $key => $value) {
					foreach ($value as $key => $value1) {
						foreach ($value1 as $key => $mostRequested) {
							$array[] =  $mostRequested;
						}
					}
				}
				$the_most_requested = [];
				$arrayUnique = array_unique($array);
				foreach ($arrayUnique as $key => $value) {
					 $query = $this->query->select("Name,image,price,id,authors,image_second","books")
					 					 ->where("id","=",$value)
					 					 ->get();
					 $the_most_requested[] = $query;
				}
				
				//get info about the Events
				
				$events = $this->query
						->select("id,event_name,event_description,event_date,event_time,event_location,image","events")
						->take("3")
						->get();
						
					// get author of the day information

				$author = $this->query
								->selectRaw("author_name,images,id,dsc from authors order by rand() limit 1")
								->get();
				$relatedBooksToAuthor = [];
				foreach($author as $auth){
					foreach ($auth as $key => $value) {
						$query = $this->query
									->select("Name,image,price,id","books")
									->where("author_id","=",$value['id'])
									->get();
						$relatedBooksToAuthor[] = $query;
					}
				}
				
				$likes = $this->query->selectRaw("bookId from usersLikes where userId = '{$_SESSION['userId']}' ")->get();
				
				// info about users's jointEvents

            	$jointEvents = $this->query->selectRaw("events.id from events join joinedEvents 
											on events.id = joinedEvents.event_id 
										and joinedEvents.user_id = '{$_SESSION['userId']}' ")->get();
	return view(
			"home",
			[$categories1,$featuredBooks,#2
			 $authors,$input,#4
			 $the_most_requested,$events,$author,#6
			 $relatedBooksToAuthor,$Novel,#8
			 $Science,$space,#10
			 $manga,$likes,
			 $jointEvents],
			$commonValue);
	}
	public function featured(){
				$_POST = json_decode(file_get_contents('php://input'), true);
				$id = $_POST['id'];
				$query = $this->query->select("id,Name,image,price,description,dsc","books")
				->where("id","=",$id)
				->get();
				$query1 = json_encode($query);
				echo $query1;
}

public function login(){
	if($_SESSION["User"]){
		return view("profile");
	}
	$commonValue  = $this->query->select("Name,image","books")->take("1")->get();
	return view("login",[],$commonValue);
}
public function userRegister(){
	$user = $_POST['username'];
	$pass = $_POST['password'];
	$bcrypt = password_hash($pass, PASSWORD_DEFAULT);
	$confirmation = $_POST['confirmation'];
	$email = $_POST['email'];
	$token = $_POST['token'];
$query = $this->query->select("Email","Users")->where("Email","=",$email)->get();
	if(!empty($query[0])){
		$_SESSION['exist'] = "given email already exists";
		header("location:/mylibrary/login");
		die();
	}
		$insert = $this->query->insertX("Users",[
			"Name" => $user,
			"Password" =>$bcrypt,
			"Email" => $email,
			"token" =>$token
		]);
		$_SESSION['User'] = $user;
		$getId = $this->query->select("id","Users")->where("Name","=",$user)->get();
		foreach($getId as $val){
		    foreach($val as $newVal){
		        	$_SESSION['userId'] = $newVal['id'];
		    }
		}
	
        if($insert){
		return view("profile");
	}else{
		return view("home");
	}
	
	
}
public function profile(){
	if($_SESSION["User"]){
	$query = $this->query->selectRaw("activities.book_id,activities.type_activity,
											books.Name,
											activities.number_request,activities.request_type,requestedDate
											from activities join books on activities.book_id = books.id 
											and activities.user_id ={$_SESSION['userId']}")->get();
		$userInfo = $this->query->select("Email,images","Users")
		->where("id","=",$_SESSION['userId'])
		->get();

		// user image information
		$imageName = $_FILES['image']['name'];
		$destination = $_SERVER['DOCUMENT_ROOT']."/public/images/";
		$target_dir = "uploads/";
		$target_file = $target_dir . basename($_FILES["image"]["name"]);
		$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
		$type = $_FILES['image']['type'];
		$error = "";
		if($imageFileType == "jpg" || $imageFileType == "png" ){
			move_uploaded_file($_FILES['image']['tmp_name'], $destination.$imageName);
		}
		// add image to db 
		if(!empty($imageName) && $imageFileType == "jpg" || !empty($imageName) && $imageFileType=="png" ){
			$update = $this->query->updates("Users set images = '{$imageName}' where id = '{$_SESSION['userId']}' ");
			if($update){
				header("Refresh:0");
			}
		}

		$commonValue  = $this->query->select("Name,image","Books")->take("1")->get();
		return view("profile",[$query,$userInfo,$error],$commonValue);
	}else{
		return view("login");
	}
	
}
public function logout(){
	session_destroy();
  return   header("location:/mylibrary");
}
public function sign(){
	$user = $_POST['loginUser'];
	$password = $_POST['loginPass'];
	
		$query = $this->query->selectRaw("id,Name,Password from Users where Name='$user' ")->get();
		if(empty($query[0])){
			$_SESSION['error']="the credentials provided arent correct";
			header("location:/mylibrary/login");
		}
			foreach($query as $value){
			foreach($value as $foundPassword){
				$pass = password_verify($password,$foundPassword['Password']);
				if($pass==true){
					$_SESSION['User']=$foundPassword['Name'];
					$_SESSION['userId']=$foundPassword['id'];
					header("location:/mylibrary/profile");
				}
				else{
					header("location:/mylibrary/login");
				}
			}
		}
	
}
// this function is meant to chech if the requested book is available

public function availability(){
		$_POST = json_decode(file_get_contents('php://input'), true);
		$id = $_POST['id'];
		$copyType = $_POST['copyType'];
		$query = $this->query
		->selectRaw("availableQuantity from booksInStore where book_id = '$id' and copyType = '$copyType' ")
		->get();
		foreach($query as $x){
			foreach($x as $booksQuantityCheck){
				if($booksQuantityCheck[0] > 0){
					echo "1";
				}
			}
		}
}
// here to insert the resquests for purchases
public function insertrequest(){
	$_POST = json_decode(file_get_contents('php://input'), true);
	$bookId = $_POST['id'];
	$numberRequested =  $_POST['quantity'];
	$user = $_POST['user'];
	$request = $_POST['request'];
	$insert = $this->query->insertX("requests",[
			"book_id" => $bookId,
			"number_request"	=> $numberRequested,
			"user_id"	=> $user,
			"request_type" => $request,
		]);
			$insert2 = $this->query->insertX("activities",[
			"book_id" => $bookId,
			"number_request"	=> $numberRequested,
			"user_id"	=> $user,
			"request_type" => $request,
			"requestedDate" => date("Y-m-d"),
			'type_activity' => "request"
		]);
}
// cancel requests
public function cancelRequest(){
	$_POST = json_decode(file_get_contents('php://input'), true);
	$bookId = $_POST['id'];
	$query = $this->query->delete("book_id",$bookId,"requests");
	echo "Done";
}
public function recentBooks (){
	$query = $this->query
				  ->selectRaw("id,name,image,authors,Status from books order by id desc")
				  ->get();
	$featured = json_encode($query);
	echo $featured;
}

// get book's details

public function book(){
$url = $_SERVER['REQUEST_URI'];
	$uri = ltrim($url,"/");
	if(strpos($uri,"/&") !== false){
	$dynamicParam = explode("/&",$uri);
	$bookName = urldecode($dynamicParam[1]);


}
$query = $this->query->
selectRaw("Name,price,image,authors,description,category,id,author_id from books where Name = '{$bookName}'")->get();

$authorId="";
foreach ($query as $key => $value) {
	foreach ($value as $key => $value2) {
		$authorId = $value2['author_id'];
	}
			}
$authorInfo = $this->query->selectRaw("author_name,images,dsc from authors where id = '{$authorId}' ")->get();			
$authors = [];
foreach ($authorInfo as $key => $value) {
	foreach ($value as $key => $value1) {
		$authors[] =  $this->query->selectRaw("Name,image from books where authors = '{$value1['author_name']}'
		limit 0,3")->get();
	}
}

//get reviews of each book

$reviews = $this->query->selectRaw("guest_name,review,rating,dates from reviews  where book_name = '{$bookName}' limit 0,6 ")->get();

//get info of hottest topic placed in the footer

$commonValue  = $this->query->select("Name,image","books")->take("1")->get();

return view("book",[$query,$authorInfo,$authors,$reviews],$commonValue);
}

public function reviews(){
	$_POST = json_decode(file_get_contents('php://input'), true);
	$email = $_POST['email'];
	$user = $_POST['user'];
	$review = $_POST['review'];
	$userId = $_POST['userId'];
	$rating = $_POST['rating'];
	$date = $_POST['date'];
 	$bookName = urldecode($_POST['bookName']);
 	
	if(empty($userId)){
		$query = $this->query->insertX("reviews",[
			'guest_email' => $email,
			'guest_name' => $user,
			'review' => $review,
			'rating' => $rating,
			'dates' => $date,
			'book_name' => $bookName
		]);
	}else{
		$query = $this->query->insertX("reviews",[
			'guest_email' => $email,
			'guest_name' => $user,
			'review' => $review,
			'user_id' => $userId,
			'rating' => $rating,
			'dates' => $date,
			'book_name' => $bookName
		]);
	}
}

//get the info about each author

public function author(){
	$url = $_SERVER['REQUEST_URI'];
	$uri = ltrim($url,"/");
	if(strpos($uri,"/&") !== false){
	$dynamicParam = explode("/&",$uri);
	$authorName = urldecode($dynamicParam[1]);
}
	$query = $this->query->select("author_name,images,dsc","authors")
	->where("author_name","=",$authorName)
	->get();
	
	//get info about related books
	
	$relatedBooks = $this->query->select("Name,image,price","books")
								->where("authors","=",$authorName)
								->get();
	
	//get info of hottest topic placed in the footer

	$commonValue  = $this->query->select("Name,image","books")->take("1")->get();

	return view("authorPage",[$query,$relatedBooks],$commonValue);

}
// getPercentage

public function getPercentage(){
	$_POST = json_decode(file_get_contents('php://input'), true);
	$author = urldecode($_POST['author']);
	$query = $this->query->select("Drama,Romance,Comedy","authors")
						 ->where("author_name","=",$author)
						 ->get();
	$authors = json_encode($query);
	echo $authors;
}
// get about page

public function about()
{
	$query = $this->query->select("author_name,images","authors")->take(6)->get();
	$commonValue  = $this->query->select("Name,image","Books")->take("1")->get();

	return view("about",[$query],$commonValue);
}

//get likes in featured 

public function likes (){
	$_POST = json_decode(file_get_contents('php://input'), true);

	$userId = $_POST['userId'];
	$bookId = $_POST['bookId'];
	$like = $_POST['like'];

// check if user liked bofre

	$check = $this->query->selectRaw("bookId from usersLikes where userId = {$userId} and bookId = {$bookId}")->get();
	if(!empty($check[0])){
		$query = $this->query->deleteVls("from usersLikes where userId = $userId and bookId = $bookId");
	}
	if($like == 1){
		$query = $this->query->insertX("usersLikes",
			[
			"userId" => $userId,
			"bookId" => $bookId,
			"likes" => $like
		]
		);
				$query2 = $this->query->insertX("activities",
			[
			"user_id" => $userId,
			"book_id" => $bookId,
			"likes" => $like,
			"requestedDate" => date("Y-m-d"),
			'type_activity' => 'like',
		]
		);
	}

}
public function storedLikes(){
$likes = $this->query->selectRaw("bookId from usersLikes where userId = '{$_SESSION['userId']}' ")->get();
$theLikes = json_encode($likes);
echo $theLikes;
}

// instert what events the users decided to join 

public function joinedEvents(){

	$_POST = json_decode(file_get_contents('php://input'), true);

	$userId = $_POST['userId'];
	$eventId = $_POST['eventId'];
	$event = $this->query->insertX("joinedEvents",[
		"user_id" => $userId,
		"event_id" => $eventId,
	]);
}

	//events that were joined

public function eventParticipants(){

	$jointEvents = $this->query->selectRaw("events.id,events.event_name,events.event_date,events.event_time
											from events join joinedEvents 
											on events.id = joinedEvents.event_id 
											and joinedEvents.user_id = '{$_SESSION['userId']}' ")->get();
	$events = json_encode($jointEvents);
	echo $events;
}

// delete your participance in an event

public function changeAttendance(){
	
	$_POST = json_decode(file_get_contents('php://input'), true);
	
	$eventId = $_POST['eventId'];

	$query = $this->query->deleteVls("from joinedEvents where event_id = {$eventId} ");
	echo $eventId;
}

//get info about the Events
	
public function passEventInfoJs(){
	$events = $this->query
			->select("id,event_name,event_description,event_date,event_time,event_location,image","events")
			->take("3")
			->get();
			$x = json_encode($events);
			echo $x;
}

// get all book Names

public function booksNames(){
	$query = $this->query->select("Name","books")->get();
	$names = json_encode($query);
	echo $names;
}
// view the contact page

public function contacts(){

	$commonValue  = $this->query->select("Name,image","books")->take("1")->get();
	return view("contacts",[],$commonValue);
}
// insert message to db from contact page

public function contactmessage(){

	$_POST = json_decode(file_get_contents('php://input'), true);
	$email = $_POST['email'];
	$message = $_POST['message'];
	$userId = $_POST['userId'];
	$type = $_POST['type'];
	$orderRef = $_POST['orderRef'];

$query = $this->query->insertX("complaints",[
		"email" => $email,
		"information" => $message,
		"user_id" => $userId,
		"complaint_type" => $type,
		"orderRef" => $orderRef,
	]);	

}
}
