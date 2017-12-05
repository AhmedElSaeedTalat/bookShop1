<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="../../public/css/bootstrap.min.css">
	<link rel="stylesheet" href="../../public/style.css">
	<link rel="stylesheet" href="../../public/font-awesome-4.7.0/css/font-awesome.min.css">
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
	 require "topHeader.php";
	  require "menu.php";?>
	
	<section class="headX mt-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-7">
						<?php foreach($data[0] as $value) :?>
							<?php foreach ($value as $key => $author) : ?>
								<h4 class="color-white links">
									<?php echo $author['author_name'] ;?>
								</h4>
							<?php endforeach ;?>
						<?php endforeach ;?>
				</div>
				<div class="col-lg-5">
					<a href="http://libraryeg.tk/mylibrary" class="color-white homeLink">Home</a>
					<span class="color-white">\</span>
					<a href="http://libraryeg.tk/mylibrary#authorsAbout" class="color-white homeLink">Authors</a>
					<span class="color-white">\</span>
					<span class="color-white authorLink">{{decoded}}</span>
				</div>
			</div>
		</div>
	</section>
<section id="authorBio" >

	<div class="container">
		<div class="row">
			<?php foreach($data[0] as $value) :?>
				<?php foreach ($value as $key => $author) : ?>
				  	<div class="col-lg-5">
				  		<div class="image mt-3  mb-3">
				  		    <?php if(empty($author['images'])) : ?>
							<img src="../../public/images/bookAlt.jpg" alt="" />
							<?php else :?>	
				  			<img src="http://libraryeg.tk/public/images/<?php echo $author['images'];?>" alt="">
				  		    <?php endif;?>
				  		</div>
				  	</div><!-- col-lg-5 -->
					<div class="col-lg-7">
						<div class="info">
							<h3 class="title">
								<?php echo $author['author_name'] ;?>
							</h3>
							<p class="pt-3 styleText">
								<?php echo $author['dsc'] ;?>
							</p>
						</div>
						<div class="infoAnimation">
							<div class="headTitle">
								<h2>Drama</h2>
								<p class="number"><span id="dramaNumber"></span>%</p>
							</div>
							<div class="animationDrama">
								<div class="color" id="extendedColor"></div>
							</div>
						</div>
						<div class="infoAnimation">
							<div class="headTitle">
								<h2>Romance</h2>
								<p class="number"><span id="romanceNumber"></span>%</p>
							</div>
							<div class="animationRomance">
								<div class="color1" id="extendedColor1"></div>
							</div>
						</div>
						<div class="infoAnimation">
							<div class="headTitle">
								<h2>Comedy</h2>
								<p class="number"><span id="comedyNumber"></span>%</p>
							</div>
							<div class="animationComedy">
								<div class="color2" id="extendedColor2"></div>
							</div>
						</div>
					</div><!-- col-lg-7 -->
				<?php endforeach ;?>
			<?php endforeach ;?>
		</div><!-- row -->
	</div><!-- container -->
</section><!-- id="authorBio" -->

<!-- author works -->

<section id="relatedBooksAuthor" class="mt-5">
	<div class="container">
		<div class="row">
			<div class="col-12 text-center mb-5">
				<h3>Authour's Work</h3>
			</div>
		</div>
		<div class="row">
			<?php $counter = 0 ;?>
			<?php foreach($data[1] as $value) : ?>
				<?php foreach($value as $books) :?>
					<?php $counter++ ;?>
					<div class="col-lg-2 mb-3">
						<?php if($counter % 2 == 0) :?>
						<div class="imageEven mb-3">
							<a href="http://libraryeg.tk/mylibrary/book/&<?php echo $books['Name'] ;?>">
								<div class="overlay"></div>
							</a>
							<img src="http://libraryeg.tk/public/images/<?php echo $books['image'] ;?>" alt="">
						</div>
						<p class="title">
						    <a  href="http://libraryeg.tk//mylibrary/book/&<?php echo $books['Name'] ;?>"><?php echo $books['Name'] ;?>
						    </a>
					    </p>
						<p class="title"><?php echo $books['price'] ;?>$</p>
					<?php else :?>
						<div class="imageOdd mb-3">
							<a href="http://libraryeg.tk/mylibrary/book/&<?php echo $books['Name'] ;?>">
								<div class="overlay"></div>
							</a>
							<img src="http://libraryeg.tk/public/images/<?php echo $books['image'] ;?>" alt="">
						</div>
						<p class="title">
						    <a href="http://libraryeg.tk/mylibrary/book/&<?php echo $books['Name'] ;?>">
						        <?php echo $books['Name'] ;?>
						    </a>
				        </p>
						<p class="title"><?php echo $books['price'] ;?>$</p>
					<?php endif ;?>
					</div>
				<?php endforeach ;?>
			<?php endforeach ;?>
		</div>
	</div>
</section>
</section><!-- id="app" -->
<!-- footer -->
<section class="margin">
			<?php require 'views/footer.php';?>
</section>



<script src="../../public/js/jquery.slim.min.js"></script>
<script src="../../public/js/tether.min.js"></script>
<script src="../../public/js/bootstrap.min.js"></script>
<script src="../../public/js/jquery-3.1.1.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/vue"></script> -->
<script src="../../public/js/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://momentjs.com/downloads/moment.js"></script>
<script src="../../public/js/animate/jquery.animateNumber.min.js"></script>
<script src="../../public/js/main.js"></script>
<script src="../../public/js/index.js"></script>

</body>
</html>
