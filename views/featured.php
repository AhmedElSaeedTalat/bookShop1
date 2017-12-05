<section id="featuredBooks" class="mt-4">
	<div class="container hiddenFlow">
		<div class="row">
			<div class="col-12 text-center mb-5">
				<h2 class="header">Featured Books</h2>
			</div>
		</div>
		<!-- main values -->
			<div v-for="value in featuredBooks" class="row active" >
					<div  v-for="featured,index in value" class="col-12 col-sm-6 col-md-4 col-lg-2 mb-5 image99">
					  <div v-if="index % 2 == 0" class="imageEven mb-3 images">
					  	<div class="overlayFeatured">
								<section class="likes">
									<div 
									class="cart"
									 <?php if($_SESSION['User']):?>
									data-toggle="modal" 
									data-target="#booksModal"
									 @click="addCart(featured.id)" 
									 <?php else:?>
							  		@click="showMessage"
									<?php endif;?>
									 >
										<i class="fa fa-book" aria-hidden="true" ></i>
									</div>
							    <div 
									v-if="valuesXZ.indexOf(featured.id) > -1"
									class="like likedByUser"
									<?php if($_SESSION['User']):?>
									@click = "addLike(`<?php echo $_SESSION['userId'];?>`,featured.id,index)"
								 	<?php else:?>
							  		@click="showMessage2"
									<?php endif;?>
									>
									<i class="fa fa-heart" aria-hidden="true"></i>
								</div>	
								<div 
									v-else
									class="like"
								    <?php if($_SESSION['User']):?>
									@click = "addLike(`<?php echo $_SESSION['userId'];?>`,featured.id,index)"
								 	<?php else:?>
							  		@click="showMessage2"
									<?php endif;?>
									>
									<i class="fa fa-heart" aria-hidden="true"></i>
								</div>			
							</section>
							</div>
							<img :src=`public/images/${featured.image}` alt="" class="img-fluid imageFeatured">
					  </div><!-- imageEven --> 
						 <div v-else class="imageOdd mb-3 images">
					  	<div class="overlayFeatured">
								<section class="likes">
									<div 
									class="cart"
									 <?php if($_SESSION['User']):?>
									data-toggle="modal" 
									data-target="#booksModal"
									 @click="addCart(featured.id)" 
									 <?php else:?>
							  		@click="showMessage"
									<?php endif;?>
									 >
										<i class="fa fa-book" aria-hidden="true" ></i>
									</div>
								<div 
									v-if="valuesXZ.indexOf(featured.id) > -1"
									class="like likedByUser"
									<?php if($_SESSION['User']):?>
									@click = "addLike(`<?php echo $_SESSION['userId'];?>`,featured.id,index)"
								 	<?php else:?>
							  		@click="showMessage2"
									<?php endif;?>
									>
									<i class="fa fa-heart" aria-hidden="true"></i>
								</div>	
								<div 
									v-else
									class="like"
								    <?php if($_SESSION['User']):?>
									@click = "addLike(`<?php echo $_SESSION['userId'];?>`,featured.id,index)"
								 	<?php else:?>
							  		@click="showMessage2"
									<?php endif;?>
									>
									<i class="fa fa-heart" aria-hidden="true"></i>
								</div>			
							</section>
							</div>
							<img :src=`public/images/${featured.image}` alt="" class="img-fluid imageFeatured">
					  </div><!-- imageOdd -->
					  <p class="featuredName"><a :href=`http://libraryeg.tk/mylibrary/book/&${featured.name}`>{{featured.name}}</a></p>
					</div>
				</div>	<!-- main values -->

	</div><!-- container -->
	<div class="right" @click="nextBooks">
		<i class="fa fa-angle-right" aria-hidden="true"></i>
	</div>
	<div class="left" @click="previousBooks" v-if="rowId > 0">
		<i class="fa fa-angle-left" aria-hidden="true"></i>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				<span  @click="previousBooks" class="prev pr-3" >prev</span>
				<span @click="nextBooks" class="next">next</span>
			</div>
		</div>		
	</div>
</section>