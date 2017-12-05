<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="public/css/bootstrap.min.css">
	<link rel="stylesheet" href="public/style.css">
	<link rel="stylesheet" href="public/font-awesome-4.7.0/css/font-awesome.min.css">
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
<div id="app" v-cloak>
	<?php

	require 'views/header.php';?>
	<?php require 'views/body.php';?>
	<?php require 'views/footer.php';?>
</div>

<script src="public/js/jquery.slim.min.js"></script>
<script src="public/js/tether.min.js"></script>
<script src="public/js/bootstrap.min.js"></script>
<script src="public/js/jquery-3.1.1.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/vue"></script> -->
<script src="public/js/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://momentjs.com/downloads/moment.js"></script>
<script src="../../public/js/animate/jquery.animateNumber.min.js"></script>
<!--<script src="public/js/main.js"></script>-->
<script src="http://libraryeg.tk/public/js/main.js"></script>
<script src="public/js/index.js"></script>

</body>
</html>