<?php
use Books\booksController;
$url = $_SERVER['REQUEST_URI'];
$uri = ltrim($url,"/");
if(strpos($uri,"/&") !== false){
	$dynamicParam = explode("/&",$uri);
	$generalId = "&".$dynamicParam[1];
}
$routes = [
	"mylibrary/books" => "booksController&index",
	"mylibrary/borrow" => "borrowController",
	"mylibrary/valueFeautured" => "booksController&featured",
	"mylibrary/login" => "booksController&login",
	"mylibrary/logedin" => "booksController&userRegister",
	"mylibrary/profile" => "booksController&profile",
	"mylibrary/logout" => "booksController&logout",
	"mylibrary/sign" => "booksController&sign",
    "mylibrary/availability"=>"booksController&availability",
    "mylibrary/insertrequest" => "booksController&insertrequest",
	"mylibrary/newreq" => "booksController&cancelRequest",
	"mylibrary/recentbooks" => "booksController&recentBooks",
	"mylibrary/book/".$generalId => "booksController&book",
	"mylibrary/authCheck0104" => "booksController&authCheck0104",
	"mylibrary/submitreviews" => "booksController&reviews",
	"mylibrary/author/".$generalId => "booksController&author",
	"mylibrary/getpercentage" => "booksController&getPercentage",
	"mylibrary/about" => "booksController&about",
	"mylibrary/likes" => "booksController&likes",
	"mylibrary/storedlikes" => "booksController&storedLikes",
    "mylibrary/profile/joinedevents" => "booksController&joinedEvents",
    "mylibrary/profile/usersevents" => "booksController&eventParticipants",
	"mylibrary/changeattendance" => "booksController&changeAttendance",
	"mylibrary/passEventInfoJs" => "booksController&passEventInfoJs",
	"mylibrary/booksnames" => "booksController&booksNames",
	"mylibrary/contacts" => "booksController&contacts",
	"mylibrary/contactmessage" => "booksController&contactmessage",

];

if(array_key_exists($uri, $routes)){
	$myUri =  explode("&",$routes[$uri]);
	$controller =  $myUri[0];
	$method = $myUri[1];
}else{
	$home = new booksController;
	$home->home();
	return;
}
$namespace = '\Books\\'.$controller;
$obj = new $namespace;
$obj->$method();
