<footer>
	<div class="container">
		<div class="row pt-4">
			<div class="col-md-3 mb-5">
					<h2>My library</h2>
				
				<p class="mt-4 color-white">
					<span class="icons">
						<i class="fa fa-home" aria-hidden="true"></i>
					</span>
					NYC 
				</p>
				<p class="pt-2 color-white">
					<span class="icons">
						<i class="fa fa-mobile " aria-hidden="true"></i>
					</span>
					994-110-1455
				</p>
				<p class="pt-2 border color-white">
					<span class="icons">
						<i class="fa fa-envelope-o icons" aria-hidden="true"></i>
					</span>
					example@.com
				</p>
				<a href="#">
					<i class="fa fa-facebook social" aria-hidden="true"></i>
				</a>
				<a href="#">
					<i class="fa fa-twitter social" aria-hidden="true"></i>
				</a>
				<a href="#">
					<i class="fa fa-instagram social" aria-hidden="true"></i>
				</a>
			</div>
			<div class="col-md-3 mb-5 shopping">
				<h2 class="wdth1">Shop</h2>
				<p class=" mt-4"><a href="" class="color-white">My Orders</a></p>
				<p class=" pt-2"><a href=""  class="color-white">gift cards</a></p>
				<p class="pt-2"><a href=""class="color-white" >get help</a></p>
			</div>
			<div class="col-md-3 mb-5 shopping">
				<h2 class="wdth1">find</h2>
				<p class="mt-4"><a href="" class="color-white">hot line</a></p>
				<p class="pt-3"><a href="" class="color-white ">events</a></p>
			</div>
			<div class="col-md-3 mb-5">
				<h2 class="wdth">HOTTEST WEEK</h2>
				<?php foreach($commonValue as $val):?>
					<?php foreach($val as $hottest) :?>
						<div class="image mt-4">
							<a href="http://libraryeg.tk/mylibrary/book/&<?php echo $hottest['Name'];?>">
							    <img src="http://libraryeg.tk/public/images/<?php echo $hottest['image'];?>" alt="">
							</a> 	
							<a href="http://libraryeg.tk/mylibrary/book/&<?php echo $hottest['Name'];?>">
							 <span class="adjustText"><?php echo $hottest['Name'];?></span> 
							 </a>
						</div>
					<?php endforeach;?>
				<?php endforeach;?>
			</div>
		</div>
	</div>
</footer>
<section id="bottom">
	<div class="container h-100">
		<div class="row h-100">
			<div class="col-md-7 col-lg-8 d-flex align-items-center h-100 inline">
				<a href=""><i class="fa fa-cc-visa" aria-hidden="true"></i></a>
				<a href=""><i class="fa fa-cc-paypal" aria-hidden="true"></i></a>
				<a href=""><i class="fa fa-cc-mastercard" aria-hidden="true"></i></a>
			</div>
			<div class="col-md-5 col-lg-4 d-flex align-items-center h-100 inline1">
				<p class="color-white">
					Copyright 2017 © theme.com
				</p>
			</div>
		</div>
	</div>
	
</section>