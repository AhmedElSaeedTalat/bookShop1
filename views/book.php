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
	 require "topHeader.php";
	  require "menu.php";?>
	
<section class="headX mt-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
						<?php foreach($data[0] as $value) :?>
							<?php foreach ($value as $key => $book) : ?>
								<h4 class="color-white links">
									<?php echo $book['Name'] ;?>
								</h4>
							<?php endforeach ;?>
						<?php endforeach ;?>
				</div>
				<div class="col-lg-6">
					<a href="http://libraryeg.tk/mylibrary" class="color-white homeLink">Home</a>
					<span class="color-white">\</span>
					<a href="http://libraryeg.tk/mylibrary#featuredBooks" class="color-white homeLink">Featured Books</a>
					<span class="color-white">\</span>
					<span class="color-white authorLink">{{decoded}}</span>
				</div>
			</div>
		</div>
	</section>	
<section id="bookLink">
	<div class="container">
		<div class="row">
		  <?php foreach($data[0] as $value) : ?>
		  	 <?php foreach($value as $book) : ?>
			<div class="col-lg-4">
				<div class="image">
					<img src="http://libraryeg.tk/public/images/<?php echo $book['image'] ;?>" alt="" />
				</div>
			</div>
			<div class="col-lg-7">
				<h2 class="Name"><?php echo $book['Name'] ;?></h2>
				<p><?php echo $book['category'] ;?></p>
				<p class="pb-3"><strong>By:</strong> <?php echo $book['authors'] ;?></p>
				<p class="desc"><?php echo $book['description'] ;?></p>
				<h2><?php echo $book['price'] ;?>$</h2>
				<button 
				class="btn btn-primary"
				 <?php if($_SESSION['User']):?>
				data-toggle="modal" 
				data-target="#booksModal"
				 @click="addCart(`<?php echo $book['id'];?>`)" 
				 <?php else:?>
		  		@click="showMessage"
				<?php endif;?>
				>
					Add to cart
				</button>
			</div>
			<?php endforeach ;?>
		<?php endforeach ;?>
		</div>
	</div>
</section>

<!-- BooksModal -->
<?php require "booksModal.php";?>

<!-- alertModal -->
<div class="modal fade" id="alertModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>thanks for adding to the cart</p>
        <a href="#">My Cart</a>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="cancelTransaction">cancel</button>
        <button type="button" class="btn btn-primary"  data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- related books -->

<section id="aboutAuthor">
	<div class="container">
		<div class="row">
			<?php foreach($data[1] as $value) : ?>
	  			 <?php foreach($value as $author) : ?>
					<div class="col-lg-3">
						<div class="image">
							<?php if(empty($author['images'])) : ?>
								<a 
								href="http://libraryeg.tk/mylibrary/author/&<?php echo $author['author_name'] ;?> ">
								<img 
								src="http://libraryeg.tk/public/images/profile.jpeg" 
								alt=""
								class="img-fluid img-thumbnail"
								>
								</a>
							<?php else :?>
							<a 
							href="http://libraryeg.tk/mylibrary/author/&<?php echo $author['author_name'] ;?> ">
							<img 
							 src="http://libraryeg.tk/public/images/<?php echo $author['images'] ;?> " 
							 alt=""
							 class="img-thumbnail">
							</a>
							<?php endif ;?>
						</div>
					</div>
					<div class="col-lg-9">
						<h2 class="title">
							Auhor history
						</h2>
						<div class="row pt-3">
							<div class="col-lg-7">
								<p>
									<span class="name">
										<?php echo $author['author_name'] ;?>	
									</span>
									<span class="styled">Book Writer</span>
								</p>
								<p class="pt-3">
									<?php echo $author['dsc'] ;?>
								</p>
								<div class="sociaMedia mt-3">
									<span class="text-capitalize ">Follow us:</span>
									<a href="http://facebook.com" class="wrappingFace">
										<i class="fa fa-facebook"></i>
									</a>
									<a href="http://twitter.com" class="wrappingTwitter">
										<i class="fa fa-twitter"></i>
									</a>
									<a href="http://instagram.com" class="wrappingInst">
										<i class="fa fa-instagram"></i>
									</a>
								</div>
							</div>
							<?php endforeach ;?>
						<?php endforeach ;?>
							<div class="col-lg-5">
								<div class="row">
									<?php foreach($data[2] as $value) : ?>
	  									 <?php foreach($value as $author) : ?>
											<?php foreach ($author as $key => $auth) :?>
											<div class="col-4">
												<div class="imageX"> 
													<img
													src="http://libraryeg.tk/public/images/<?php echo $auth['image'] ;?>" 
													 alt=""/>
													<a href="http://libraryeg.tk/mylibrary/book/&<?php echo $auth['Name'] ;?>">
														<div class="overlayX"></div>
													</a> 
												</div>
												<p class="bookName pt-2">
													<?php echo $auth['Name'] ;?>
												</p>		
											</div>
											<?php endforeach ;?>
										<?php endforeach ;?>
									<?php endforeach ;?>
								</div>
							</div>
						</div>
					</div>
				
		</div>
	</div>
</section>

<!-- reviews -->

<section class="mt-5" id="reviews">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h3 class="mainTitle">Reviews</h3>
					<?php if(empty($data[3])) : ?>
						<p v-if="reviewContent.length === 0">There are no reviews yet.</p>
					<?php endif ; ?>
				</div>
				<!-- print values with php -->
				<?php foreach($data[3] as $value) :?>
					<?php foreach($value as $review) :?>
						<div class="col-12">
							<div class="comments" >
								<div class="userDiv" >
									<p class="user"><?php echo $review['guest_name'] ;?></p>
									<p class="user"><?php echo $review['dates'] ;?></p>
								</div>
								<div class="commentDiv">
									<?php for($x=0; $x < $review['rating']; $x++) :?>
										<i class='fa fa-star ratedComment'></i>
									<?php endfor ;?>
									<p class="comment"><?php echo $review['review'] ;?></p>
								</div>
							</div>
						</div>
					<?php endforeach ;?>
				<?php endforeach ;?>
				<div class="col-12" v-for="review,index in reviewContent" v-if="reviewContent.length > 0">
					<!-- print values with js -->
					<div class="comments" >
						<div class="userDiv" >
							<p class="user">{{review.name}}</p>
							<p class="user">{{review.date}}</p>
						</div>
						<div class="commentDiv">
							<i class='fa fa-star ratedComment' v-for="star in stars"></i>
							<p class="comment">{{review.review}}</p>
						</div>
					</div>
				</div>
			</div><!-- row -->
			<div class="row mt-5">
				<div class="col-12">
					<div>
						 <?php foreach($data[0] as $value) : ?>
		  	 				<?php foreach($value as $book) : ?>
									<h3 class="reviewTitle">
										<?php if(empty($data[3])) : ?>
											<span class="border" v-if="reviewContent.length === 0">Be the first</span>
										<?php endif ;?>
								 to review "<?php echo $book['Name'] ;?>"</h3>
						     <?php endforeach ;?>
					 	 <?php endforeach ;?>
					</div>
					 <p>Required fields are marked *</p>
				</div>
			</div><!-- row -->
			<div class="row mt-4">
				<div class="col-12 mb-3 the_Rating">
					<i class="fa fa-star-o star" aria-hidden="true"  @mouseover="classX" ></i>
					<i class="fa fa-star-o star1" aria-hidden="true"   @mouseover="classXX"></i>
					<i class="fa fa-star-o star2" aria-hidden="true"  @mouseover="classXXX"></i>
					<i class="fa fa-star-o star3" aria-hidden="true"  @mouseover="classXXXX"></i>
					<i class="fa fa-star-o star4" aria-hidden="true"  @mouseover="classXXXXX"></i>
					<span class="rating">Your Rating</span>
				</div>
				<div class="col-12">
					<form @submit.prevent="submitReview">
						<h3 class="title">Your Review *</h3>
						<p>
							<textarea name="review" v-model="review"></textarea>
						</p>
						<h3 class="title pt-3">Your Name *</h3>
						<p>
							<input type="name" v-model="name_review" class="reviewInput">
						</p>
						<h3 class="title pt-3">Your Email *</h3>
						<p>
							<input type="email" v-model="review_email" class="reviewInput" required>
						</p>
						<button class="btn btn-primary float-right" :disabled="reviewCheck">
							Submit
						</button>
					</form>
					
				</div>
			</div>
		</div>
	</section>


</section>
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
