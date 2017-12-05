	<?php 
		require "topHeader.php";
	;?>				
<section class="logo mt-4">
	<div class="container">
		<div class="row d-flex align-items-center ">
							<!-- logo -->
			<div class="col-12 col-lg-4 text-center col-lg-2 mb-4">
				<div id="logo">
					<a href="http://libraryeg.tk/mylibrary">
					    <img src="public/images/logo.png" alt="" class="img-fluid">
					</a>
				</div>
			</div>
						<!-- Search -->
			<div class="col-12 col-lg-6  text-center mb-4">
				<input type="text" class="searchInput" placeholder="Search books here"  v-model="searchB">
				<!-- search results -->
				<section id="searchResults">
    				<div v-for="searchItem in compo" class="searchItem">
    					<a :href="'http://libraryeg.tk/mylibrary/book/&'+searchItem.Name">{{searchItem.Name}}</a>
    				</div>
				</section>
			</div>
			<div class="col-12 col-lg-2 BooksCart mb-4">
				<button class="btn btn-block btn-primary">Books &nbsp; | &nbsp; {{cart}}  <i class="fa fa-book" aria-hidden="true"></i></button>
			</div>
		</div>
					 <!-- Menu -->
			<div class="row customizeRow">
			<div class="col-12 col-lg-8 text-center mb-4">
				<div class="Menu mb-4">
					<p class="head">Menu</p>
				</div>
				<ul class="content text-left">
					<li class="menuList"><a href="http://libraryeg.tk">Home Page</a></li>
					<li class="menuList"><a href="http://libraryeg.tk/mylibrary/about">About Us</a></li>
					<li class="menuList"><a href="http://libraryeg.tk/mylibrary/contacts">Contacts</a></li>
				</ul>
				<!-- Carousel -->
				<section class="hidden-md-down mt-2">
					<?php require 'carousel.php';?>
				</section>
			</div>
			<div class="col-12 col-lg-4 mb-4">
				<div class="Category">
					<h3>
						Category
					</h3>
				</div>
				<section class="categoryList">
					<div class="the_category">
						<div class="mb-3 ml-3">
							<p >Novel</p>
							<?php iterateValues($data[8],"Name","<p class='catB'>","</p>","http://libraryeg.tk/mylibrary/book/&") ;?>
						</div>
						<div class="mb-3 ml-3">
							<p >Science</p>
							<?php iterateValues($data[9],"Name","<p class='catB'>","</p>","http://libraryeg.tk/mylibrary/book/&") ;?>
						</div>
						<div class="mb-3 ml-3">
							<p >Manga</p>
							<?php iterateValues($data[11],"Name","<p class='catB'>","</p>","http://libraryeg.tk/mylibrary/book/&") ;?>
						</div>
						<div class="mb-3 ml-3">
							<p >Space</p>
							<?php iterateValues($data[10],"Name","<p class='catB'>","</p>","http://localhost/eg/mylibrary/book/&") ;?>
						</div>
					</div>
				</section>
			
			</div>
		</div>
		<section class="mobileCarousel">
			<?php require 'carousel.php';?>
		</section>
		<!-- <div class="row">
			<div class="col-12"> -->
				
			<!-- </div> -->
		<!-- </div> -->
	</div>
</section>