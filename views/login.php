<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="../public/css/bootstrap.min.css">
	<link rel="stylesheet" href="../public/style.css">
	<link rel="stylesheet" href="../public/font-awesome-4.7.0/css/font-awesome.min.css">
	 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<style>
		[v-cloak]{
			display: none;
		}
	</style>
</head>
<body>
	<section id="login" v-cloak>
	    	<?php 
		        require "topHeader.php";
	        	$token  = md5(uniqid(mt_rand(),true));
	;?>
		<div class="container mt-4">
		<div class="row">
			<div class="col-lg-8">
				<form action="/mylibrary/sign" method="post" @submit="checkLoginInput">
					<input 
					 type="text" 
					 name="loginUser"
					 class="inputField mr-3" 
					 placeholder="username" 
					 v-model="loginUser">
					
					<input 
					 type="password"
					 name="loginPass"
					 class="inputField mr-3"
					 placeholder="password" 
					 v-model="loginPass"
					 > 
					
					<input 
					type="submit"
					class="btn btn-primary modified"
					value="sign in" 
					:disabled="loginCheck">
				</form>
				<?php if(!empty($_SESSION['error'])) :?>
			    	<p class="alert-danger alertMessages"><?php echo $_SESSION['error'];?></p>
			    <?php endif;?>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-lg-6 centerItems ">
				<h2 class="w-100 addSize">Register your new Account</h2>
				<form action="/mylibrary/logedin" method="post"  @submit="checkForm($event)" class="w-100 registerForm">
					<p>
					<input 
					type="text" 
					placeholder="username" 
					class="inputField" 
					required
					name="username" 
					v-model="userName">	
					</p>
					
					<p>
					<input 
					type="email" 
					placeholder="email" 
					class="inputField" 
					required
					name="email" 
					v-model="email">	
					</p>
					
					<p>
					<input 
					type="password"
					 v-model="main_password"
					  @keyup="submit" 
					  class="inputField" 
					  placeholder="password"
					  name="password" 
					  required> 	
					</p>
					
					<p 
					v-if="message"
					 class="alert alert-danger alertMessages">
					{{message}}
					</p>
					<p>
					<input 
						type="password"
						class="inputField"
						placeholder="confirm password"
					  	v-model="password_confirmation"
					    required>	
					</p>
					<p v-if="confirmation" class="alertMessages">{{confirmation}}</p>
					<?php if(!empty($_SESSION['exist'])) :?>
				    	<p class="alert-danger alertMessages mb-2"><?php echo $_SESSION['exist'] ;?></p>
			    	<?php endif;?>
					<input type="hidden" value="<?php echo $token ;?>" name="token">
					<input type="submit" :disabled="checkInput" class="btn btn-primary modified">
				</form>
			</div><!-- col-4 -->
			<div class="col-lg-6">
				<img src="../public/images/libro.png" alt="" class="img-fluid loginImage">
			</div>
		</div>
	</div>
	</section>
	<section class="margin">
			<?php require 'views/footer.php';?>
	</section>



<script src="../public/js/jquery.slim.min.js"></script>
<script src="../public/js/tether.min.js"></script>
<script src="../public/js/bootstrap.min.js"></script>
<script src="../public/js/jquery-3.1.1.js"></script>
<script src="../public/js/index.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/vue"></script> -->
<script src="../public/js/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="../public/js/login.js"></script>

</body>
</html>
