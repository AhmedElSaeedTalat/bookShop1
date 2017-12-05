<?php 
use App\connection;

// function view($file,$data="",$info="",$extra=""){
// 	$data;
// 	$info;
// 	$extra;
// 	require ("views/".$file.".php");
// }
function view($file,$data=[],$commonValue=""){
	if($data){
		for($x=0;$x<count($data);$x++){
			$data[$x];
}
	require ("views/".$file.".php");
}else{
	$commonValue;
	require ("views/".$file.".php");
}

}

function redirect($path){
	header("location:$path");
}
function session($arg){
	return $_SESSION[$arg];
}
function iterateValues($argumen1,$data,$html,$closingHtml,$href=""){
	foreach ($argumen1 as $key => $value) {
		foreach ($value as $key => $value2) {
			if(!empty($href)){
				$href1 = $href;
				$href1 .= $value2[$data]; 
				echo $html."<a href='{$href1}'>".$value2[$data]."</a>".$closingHtml;
			}
			else{
				echo $html.$value2[$data].$closingHtml;
			}
		}
	}
}