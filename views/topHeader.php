							<!-- top header -->
<header class="topHeader">
	<div class="container">
		<div class="row">
			<div class="col-6">
				<div class="text">
					Welcome  <a href="/mylibrary/profile" class="User">
					<?php
					if($_SESSION["User"]){
					    	echo $_SESSION["User"] ;
					}
					?></a>   to the Site
				</div>
			</div>
			<div class="col-6 sideTop">
				<div class="floatDivs">
					<div class="options">
					<a :href="url" class="textAccount">{{location}}</a>
						<?php if($_SESSION["User"]) :?>
							<i class="fa fa-angle-down" id="out" aria-hidden="true"  @click="slider"></i>
							<a href="/mylibrary/logout" class="out">Sign out</a>
						<?php endif;?>
					</div>
					<div class="changeFlags">
						<img src="http://libraryeg.tk/public/images/1.jpg" alt="" id="flag"  @click="flag">
						<div class="flag">
							<img src="http://libraryeg.tk/public/images/3.jpg" alt="">
							<span>Español</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>