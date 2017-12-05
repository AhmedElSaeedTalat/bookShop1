<section id="author" class="mt-5">
	<div class="container">
		<div class="row">
			
			<!-- author information -->

			<?php foreach ($data[6] as $key => $value) : ?>
				<?php foreach($value as $author) : ?>
					<div class="col-lg-4 mb-4">
						<h3 class="title">ABOUT AUTHOR</h3>
							<p class="name"><?php echo $author['author_name'] ;?></p>
							<p><?php echo $author['dsc'] ;?></p>
					</div>
					<div class="col-lg-4 mb-4">
						<div class="image">
						    <?php if(empty($author['images'])) :?>
						    	<a href="http://libraryeg.tk/mylibrary/author/&<?php echo $author['author_name'];?>">
							    <img src="public/images/pen1.jpg" alt="" />
							</a>
							<?php else : ?>
							<a href="http://libraryeg.tk/mylibrary/author/&<?php echo $author['author_name'];?>">
							    <img src="public/images/<?php echo $author['images'] ;?>" alt="" />
							</a>
							<?php endif ;?>
						</div>
					</div>
				<?php endforeach ;?>
			<?php endforeach ;?>
			
			<!-- author related books -->
			
			<?php $numberCount = 0 ;?>
			<div class="col-lg-4">
				<div class="row">
					<?php foreach ($data[7] as $key => $val) : ?>
						<?php foreach($val as $da) : ?>
							<?php foreach($da as $relatedBooks) :?>
								<?php $numberCount++ ;?>
									<div class="col-6 hover">
										<div class="image1 
										<?php if($numberCount % 2 == 1 ) { echo "imageOdd";}
										elseif($numberCount % 2 == 0 )  { echo "imageEven" ;} ?>
										">
											<img src="public/images/<?php echo $relatedBooks['image'];?>" alt="">
											<a href="http://libraryeg.tk/mylibrary/book/&<?php echo $relatedBooks['Name'] ;?>"><div class="overlay1"></div></a>
										</div>
										<p class="bookName"><a href="http://libraryeg.tk/mylibrary/book/&<?php echo $relatedBooks['Name'] ;?>"><?php echo $relatedBooks['Name'];?></a></p>
									</div>
							<?php endforeach ;?>
						<?php endforeach ;?>
					<?php endforeach ;?>
				</div>
			</div>	
		</div><!-- row -->
	</div>
</section>
