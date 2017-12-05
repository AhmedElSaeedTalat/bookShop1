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
</head>
<body>
    <section id="app" v-cloak>
        <?php
        
        require "topHeader.php";
           require "menu.php"; 
        ?>
        
        
	
<section class="headX mt-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
						<h4 class="color-white">
							Profile			
						</h4>
				</div>
				<div class="col-lg-4">
					<a href="http://libraryeg.tk/mylibrary" class="color-white homeLink">Home</a>
					<span class="color-white">\</span>
					<span class="color-white authorLink">Profile</span>
				</div>
			</div>
		</div>
</section>
	
<section class="personalData mt-5">
	<div class="container">
		<div class="row">
			<div class="col-lg-2">
				<div class="img" data-toggle="modal" data-target="#imageModal">
			    <?php if(empty($data[1])) :?>
			    	<img src="http://libraryeg.tk/public/images/profile.jpeg" alt="">
			    <?php endif ;?>
				<?php foreach($data[1] as $values) : ?>
						<?php foreach($values as $user) :?>
							<?php if(empty($user['images'])) : ?>
								<img src="http://libraryeg.tk/public/images/profile.jpeg" alt="">
							<?php else : ?>
								<img src="http://libraryeg.tk/public/images/<?php echo $user['images'];?>" alt="" class="imgH">
							<?php endif ;?>
						<?php endforeach ;?>
					<?php endforeach ;?>
				<div class="overlay"></div>
				</div>
				<?php if(!empty($data[2])) : ?>
					<p class="alert alert-danger error"><?php echo $data[2] ;?></p>
				<?php endif ;?>
				<div class="personalInfo">
					<h3 class="title">
						<?php echo $_SESSION['User'] ;?>
					</h3>
					<?php foreach($data[1] as $values) : ?>
						<?php foreach($values as $user) :?>
							<h3 class="email"><?php echo $user['Email'] ;?></h3>
						<?php endforeach ;?>
					<?php endforeach ;?>
				</div>
			</div><!-- col-lg-2 -->
			<div class="col-lg-7 offset-lg-3 mt-4">
					<div class="requests">
						<h4 :class="active1" @click="imTheActiveClass">
							My Activities
						</h4>
						<h4 :class="active2" @click = "beActive">
							Events
						</h4>
					</div>
						<!-- show activities in event tab -->
					<section v-show="showActivities">
					<?php foreach($data[0] as $requests) : ?>
						<?php foreach($requests as $request) :?>
							<?php if($request['type_activity'] == 'request') : ?>
							<div class="eachRequest">
								<p><i class="fa fa-book" aria-hidden="true"></i>
									you have requested <?php echo $request['Name'] ;?>
								</p>
								<p><?php echo $request['requestedDate'] ;?></p>
							</div>
							<?php else : ?>
							<div class="eachRequest">
								<p><i class="fa fa-heart" aria-hidden="true"></i>
									you have liked <?php echo $request['Name'] ;?>
								</p>
								<p><?php echo $request['requestedDate'] ;?></p>
							</div>
						<?php endif ;?>
						<?php endforeach ;?>
					<?php endforeach ;?>
					</section>
					<!-- show events in event tab -->
					<section class="joinedEventsProfile" v-for="user in userEvents" v-show="showEvents">
    					<div v-for="event in user" class="eachRequest">
    						<p>
    							<i class="fa fa-calendar-o" aria-hidden="true"></i>
    							You have decided to join {{event.event_name}}
    						</p>
    						<p>{{dateInfo}}</p>
    					</div>
					</section>	
			</div>	<!-- col-lg-10 -->
		</div>
	</div>
</section>



<!-- Modal -->
<div class="modal fade personalData" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
      	<div class="headModal">
      		<div class="img1 imageModal">
					<?php foreach($data[1] as $values) : ?>
						<?php foreach($values as $user) :?>
							<?php if(empty($user['images'])) : ?>
								<img src="http://libraryeg.tk/public/images/profile.jpeg" alt="">
							<?php else : ?>
								<img src="http://libraryeg.tk/public/images/<?php echo $user['images'];?>" alt="" class="imgH">
							<?php endif ;?>
						<?php endforeach ;?>
					<?php endforeach ;?>
				<div class="overlay"></div>
			</div>
			<p class="name">
			    <i class="fa fa-times" id="closeProfile" data-dismiss="modal"></i>    
			    <?php echo $_SESSION['User'] ;?>
		    </p>
      	</div>
		<div class="container">
			<div class="row">
				<div class="col-5">
					<?php foreach($data[1] as $values) : ?>
						<?php foreach($values as $user) :?>
							<h3 class="email1"><?php echo $user['Email'] ;?></h3>
						<?php endforeach ;?>
					<?php endforeach ;?>
				</div>
			</div>
			<div class="row">
   				<div class="col-12">
   					<form  action="/mylibrary/profile" method="post" class="mt-4" enctype="multipart/form-data"	>
   						<input type="file" name="image">
   						<input type="submit" class="btn btn-primary btn-block mt-3"  value="update image" >
   					</form>
 			     <button type="button" class="btn btn-primary btn-block">select image</button>
   				</div>
			</div>
		</div>	
        </div>
      </div>
     
       
    </div>
  </div>
        
        
        
    </section>




		<section class="margin">
			<?php require 'views/footer.php';?>
		</section>
<script src="../public/js/jquery.slim.min.js"></script>
<script src="../public/js/tether.min.js"></script>
<script src="../public/js/bootstrap.min.js"></script>
<script src="../public/js/jquery-3.1.1.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/vue"></script> -->
<script src="../public/js/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://momentjs.com/downloads/moment.js"></script>
<script src="../public/js/index.js"></script>
<script src="../public/js/main.js"></script>

</body>
</html>
