<?php
namespace App;

class connection{


	public $dbname='u895102747_lib';
	public $user='u895102747_libra';
	public $password='3CNZeJatRP9F';
	

	public function connect(){
		try{
			$pdo = new \PDO("mysql:host=localhost;dbname=$this->dbname",$this->user,$this->password);
			return $pdo;
			}
		catch(PDOException $e){
			echo $e->getMessage();
		}
	}
}



