<?php 
namespace Books;
use App\connection;
use App\queries;

class controller{

	
	public $query;

	public function __construct(){
		$connection = new connection;
		$pdo = $connection->connect();
		$this->query = new queries($pdo);
	}
}