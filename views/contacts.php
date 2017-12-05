<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="http://libraryeg.tk/public/css/bootstrap.min.css">
	<link rel="stylesheet" href="http://libraryeg.tk/public/style.css">
	<link rel="stylesheet" href="http://libraryeg.tk/public/font-awesome-4.7.0/css/font-awesome.min.css">
	 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<style>
		[v-cloak]{
			display: none;
		}
	</style>
</head>
<body>
	<section id="app" v-cloak>
		<?php 
	 require "views/topHeader.php";
	  require "views/menu.php";?>
	
<section class="headX mt-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
						<h4 class="color-white">
							Contacts			
						</h4>
				</div>
				<div class="col-lg-4">
					<a href="http://libraryeg.tk/mylibrary" class="color-white homeLink">Home</a>
					<span class="color-white">\</span>
					<span class="color-white authorLink">Contacts</span>
				</div>
			</div>
		</div>
</section>

<!-- Contact form -->

<section id="contacts" class="mt-5">
	<div class="container">
		<div class="row">
			<div class="col-lg-4">
				<h3 class="title">
					send a message
				</h3>
			</div>
			<div class="col-lg-12 mt-3">
				<div class="row">
					<div class="col-lg-4">
						<h4>Subject</h4>
							<select  v-model="selectTypeContact">
								<option value="Customer Service">Customer Service</option>
								<option value="Financial">Financial</option>
							</select>
							<h4 class="mt-3">Email</h4>
					    	<input type="email" class="input" placeholder="Email" v-model="emailContact">
							<h4 class="mt-3">Order Reference</h4>
							<input type="text" class="input" placeholder="Order Reference" v-model=orderRef>
					</div>
					<div class="col-lg-8">
						<h4 class="messageContact">Message</h4>
					<textarea name="" id="" cols="30" rows="10" class="input1" v-model="messageContact"></textarea>
					</div>
				</div>
			</div>
			<div class="col-lg-4">
			<input 
				type="submit" 
				class="btn btn-primary button" 
				value="Send" 
				@click="insertMessageContact(`<?php echo $_SESSION['userId'];?>`)">
			</div>
		</div>
	</div>
</section>

</section><!-- id="ch" -->
<!-- footer -->
<section class="margin">
			<?php require 'views/footer.php';?>
</section>



<script src="http://libraryeg.tk/public/js/jquery.slim.min.js"></script>
<script src="http://libraryeg.tk/public/js/tether.min.js"></script>
<script src="http://libraryeg.tk/public/js/bootstrap.min.js"></script>
<script src="http://libraryeg.tk/public/js/jquery-3.1.1.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/vue"></script> -->
<script src="http://libraryeg.tk/public/js/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://momentjs.com/downloads/moment.js"></script>
<script src="http://libraryeg.tk/public/js/animate/jquery.animateNumber.min.js"></script>
<script src="http://libraryeg.tk/public/js/main.js"></script>
<script src="http://libraryeg.tk/public/js/index.js"></script>

</body>
</html>
