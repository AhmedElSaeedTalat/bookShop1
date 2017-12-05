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
	<script>
	function now(){
    window.location.reload(true);
}
</script>
</head>
<body>
	<section id="app" v-cloak>
		<?php 
	 require "topHeader.php";
	  require "menu.php";?>
<section class="headX mt-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
						<h4 class="color-white">
							About US			
						</h4>
				</div>
				<div class="col-lg-4">
					<a href="http://libraryeg.tk/mylibrary" class="color-white homeLink">Home</a>
					<span class="color-white">\</span>
					<span class="color-white authorLink">About Us</span>
				</div>
			</div>
		</div>
</section>

<!-- page body -->

<section id="about">
	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				<h3 class="aboutTitle">
					About Us
				</h3>
			</div>
			<div class="col-md-6 col-lg-3 mt-5 divWrapper">
				<div class="wrapper">
					<i class="fa fa-ship" aria-hidden="true"></i>
				</div>
				<h4 class="wrapperText">Free Shipping</h4>
				<p class="mt-3 getText">Lorem adipisicing elit. Similique praesentium quo deserunt</p>
			</div> <!-- col-lg-3 -->
			<div class="col-md-6 col-lg-3 mt-5 divWrapper">
				<div class="wrapper">
					<i class="fa fa-repeat" aria-hidden="true"></i>
				</div>
				<h4 class="wrapperText">Easy Return</h4>
				<p class="mt-3 getText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique praesentium quo deserunt</p>
			</div> <!-- col-lg-3 -->
			<div class="col-md-6 col-lg-3 mt-5 divWrapper">
				<div class="wrapper">
					<i class="fa fa-book" aria-hidden="true"></i>
				</div>
				<h4 class="wrapperText">Events</h4>
				<p class="mt-3 getText">Lorem ipsum , consectetur adipisicing elit. Similique praesentium quo deserunt</p>
			</div> <!-- col-lg-3 -->
			<div class="col-md-6 col-lg-3 mt-5 divWrapper">
				<div class="wrapper">
					<i class="fa fa-users" aria-hidden="true"></i>
				</div>
				<h4 class="wrapperText">Constant Follow Up</h4>
				<p class="mt-3 getText">Lorem ipsum dolor sit. Similique praesentium quo deserunt</p>
			</div> <!-- col-lg-3 -->
		</div>
	</div><!-- container -->
	<div class="whyUs mt-5">
		<div class="img">
			<img src="http://libraryeg.tk/public/images/library.jpg" alt="" >
		</div>
		<div class="contentX">
			<h3 class="title">
				Why choose Us
			</h3>
			<p class="dsc">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cupiditate vel voluptatibus unde quidem magnam beatae iure, odit et nihil corrupti ipsum similique modi esse quis eveniet ullam quaerat distinctio?
			</p>
			<div class="info">
				<div class="info1">
					<h4 class="pb-2">Good Location</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium officiis unde consequatur velit suscipit repudiandae eius natus</p>
				</div>
				<div class="info2">
					<h4 class="pb-2">Good Team</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium officiis unde consequatur velit suscipit repudiandae eius natus</p>
				</div>
				<div class="info1">
					<h4 class="pb-2">Structured Facilities</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium officiis unde consequatur velit suscipit repudiandae eius natus</p>
				</div>
				<div class="info2">
					<h4 class="pb-2">Good Online System</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium officiis unde consequatur velit suscipit repudiandae eius natus</p>
				</div>
			</div>
		</div>
	</div>
	<div class="container mt-5" id="authorsAbout">
		<div class="row">
			<div class="col-12 text-center">
				<h3 class="aboutTitle">
					Our Authors
				</h3>
			</div>
			<?php foreach ($data[0] as $key => $value) : ?>
				<?php foreach ($value as $key => $author) : ?>
					<div class="col-sm-6 col-md-4 col-lg-2">
						<a href="http://libraryeg.tk/mylibrary/author/&<?php echo $author['author_name'];?>">
							<div class="content3 mt-5">
							<div class="img3 mb-3">
								<?php if(empty($author['images'])) :?>
								<img src="http://libraryeg.tk/public/images/bookAlt.jpg" alt="" />
								<?php else : ?>	
								<img src="http://libraryeg.tk/public/images/<?php echo $author['images'];?>" alt="" />
								<?php endif ;?>
							</div>
							<div class="overlay2"></div>
							<div class="name2"><?php echo $author['author_name'];?></div>
						</div>
						</a>
					</div>
				<?php endforeach ;?>
			<?php endforeach ;?>	
		</div>
	</div><!-- container -->
</section>

<!-- footer -->
<section class="margin">
			<?php require 'views/footer.php';?>
</section>

</section>
<script src="../public/js/jquery.slim.min.js"></script>
<script src="../public/js/tether.min.js"></script>
<script src="../public/js/bootstrap.min.js"></script>
<script src="../public/js/jquery-3.1.1.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/vue"></script> -->
<script src="../public/js/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="../public/js/ui/jquery-ui.min.js"></script>
<script src="https://momentjs.com/downloads/moment.js"></script>
<script src="../public/js/main.js"></script>
<script src="../public/js/index.js"></script>

</body>
</html>