<section class="logo mt-4">
	<div class="container">
		<div class="row d-flex align-items-center ">
							<!-- logo -->
			<div class="col-12 col-lg-4 text-center col-lg-2 mb-4">
				<div id="logo">
					<a href="/mylibrary"><img src="http://libraryeg.tk/public/images/logo.png" alt="" class="img-fluid"></a>
				</div>
			</div>
						<!-- Search -->
			<div class="col-12 col-lg-6  text-center mb-4">
				<input type="text" class="searchInput" placeholder="Search books here" v-model="searchB">
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
	</div>
</section>