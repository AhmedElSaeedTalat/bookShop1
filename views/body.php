<!-- author of the day  -->

<?php require 'author.php' ;?>

<!-- featured books -->

<?php require 'featured.php' ;?>

<section id="seperator">
	<div class="container h-100">
		<div class="row h-100">
			<div class="col-12 text-center h-100 d-flex align-items-center">
				<h3 class="color-white edditText">
					recently built for the taste of every ready for a better tomorrow
				</h3>
			</div>
		</div>
	</div>
</section>

<!-- Best selling Books -->

<section id="bestSellers">
	<div class="container">
		<div class="row">
			<div class="col-12 text-center mb-5">
				<h2 class="header2">best sellers Books</h2>
				<h1 class="header0">
					Recently Most Requested Books
				</h1>
			</div>
		</div>
				<div class="row">
			<?php $counterX=-1 ;?>
			<?php foreach ($data[4] as $key => $value) : ?>
				<?php foreach ($value as $key => $val1) : ?>
					<?php foreach ($val1 as $key => $most) : ?>
						<?php $counterX++ ;?>
			<div class="col-md-6 col-lg-4 mb-4">
				<div class="imageContainer">
					<div class="overlay">
						<section class="likes">
									<div 
									class="cart"
									 <?php if($_SESSION['User']):?>
									data-toggle="modal" 
									data-target="#booksModal"
									 @click="addCart(`<?php echo $most['id'];?>`)" 
									 <?php else:?>
							  		@click="showMessage"
									<?php endif;?>
									 >
										<i class="fa fa-book" aria-hidden="true" ></i>
									</div>
							</section>
					</div>
					<div class="image">
						<img src="public/images/<?php echo $most['image'] ;?>" alt="" class="imageFeatured first">
						<img src="public/images/<?php echo $most['image_second'] ;?>" alt="" class="imageFeatured second_image">
					</div>
				</div>
				<div class="body">
					<p class="author"><a href="http://libraryeg.tk/mylibrary/author/&<?php echo $most['authors'];?>"><?php echo $most['authors'] ;?></a></p>
					<p class="name"><a href="http://libraryeg.tk/mylibrary/book/&<?php echo $most['Name'] ;?>"><?php echo $most['Name'] ;?></a></p>
					<p class="price"><a href=""><?php echo $most['price'] ;?>$</a></p>
				</div>
			</div>	
		<?php endforeach ;?>
		<?php endforeach ;?>
		<?php endforeach ;?>
		</div><!-- row -->
	</div>
</section>
											<!-- %%% authors %%% -->
<section class="authors" id="authorsAbout">
		<div class="col-12 text-center mb-5">
				<h2 class="header1">Popular Authors</h2>
			</div>
			<div class="container">
				<div class="row">
					<?php foreach($data[2] as $value) : ?>
					<?php foreach($value as $author) : ?>
					<div class="col-6 col-md-3  mb-5">
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
				<?php endforeach;?>
				<?php endforeach;?>
				</div>
			</div>
</section>
<!-- events -->
<?php require 'events.php' ;?>

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