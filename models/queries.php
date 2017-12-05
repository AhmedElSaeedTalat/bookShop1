<?php 

namespace App;
use App\connection;

class queries{

	private $pdo;
	public $results = [];
	public $table;
	public $column;
	public $limit;

	public function __construct($pdo)
	{
		$this->pdo = $pdo;
	}

	public function all($table){
		$query = $this->pdo->prepare("select * from {$table} ");
		$query->execute();
		$results = $query->fetchall();
		return $results;
	}
	public function select($column,$table){
		$this->column = $column;
		$this->table = $table;
		$query = $this->pdo->prepare("select {$column} from {$table}");
		$query->execute();
		$result = $query->fetchall();
		$this->results[] = $result;
		return $this;
	}
		public function where($col_name,$operator,$value){
				$query = $this->pdo->prepare("select {$this->column} from {$this->table}
				 where {$col_name} {$operator} '{$value}' ");
				$query->execute();
				$result = $query->fetchall();
				$this->results = [];
				$this->results[] = $result;
				return $this;
		}
		public function take($number){
		    $this->limit= $number;
			$query = $this->pdo->prepare("select {$this->column} from {$this->table}
				 limit 0,{$number} ");
				$query->execute();
				$result = $query->fetchall();
				$this->results = [];
				$this->results[] = $result;
				return $this;
		}
		public function selectRaw($info){
				$query = $this->pdo->prepare("select {$info}");
				$query->execute();
				$result = $query->fetchall();
				$this->results = [];
				$this->results[] = $result;
				return $this;
		}
	public function whereX($title,$value){
				$query = $this->pdo->prepare("select {$this->column} from {$this->table}
				 where {$title} =  '{$value}' limit 0,{$this->limit} ");

				$query->execute();
				$result = $query->fetchall();
				$this->results = [];
				$this->results[] = $result;
				return $this;
		}
		public function insert($table,$name,$value){
			$stmt=  "INSERT INTO {$table} ({$name}) VALUES ('{$value}')";
			// $stmt->bind_param("value",'{$value}');
			return $this->pdo->exec($stmt);

					}
					public function insertX($table,$name=[]){
						$keys=[];
						$values=[];
						foreach($name as $key => $value){
							$keys[] = $key;
							$values[]=$value;
						}
						$value= implode("','",$values);
						$key = implode(",",$keys);
						$stmt=  "INSERT INTO {$table} ($key) VALUES ('$value')";
						return $this->pdo->exec($stmt);
					}
					public function delete($condition_name,$condition_value,$table){
			$stmt = "delete from {$table} where {$condition_name} = {$condition_value} ";
			return $this->pdo->exec($stmt);
		} 
		public function deleteVls($info){
			$stmt = "delete $info";
			return $this->pdo->exec($stmt);
		} 
		public function updates($info){
			$query = $this->pdo->prepare("update {$info} ");
			$query->execute();
		}
		public function get(){
			return $this->results;
		}
}


