

<!-- Modal -->
<section id="booksMO">
  <div class="modal fade" id="booksModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
       <div class="container">
         <div class="row">
           <div class="col-5 bg-white"  v-for="value in values">
            <div class="image" v-for="val in value">
           
                  <img :src=`http://libraryeg.tk/public/images/${val.image}` alt="" class="imageFeatured"> 
            
            </div> 
          </div>
           <div class="col-7"  v-for="value in values">
               <h2 class="title" v-for="val in value">
                   {{val.Name}}
                </h2>
             <div v-for="value in values">
                <h2 class="price" v-for="val in value">
                  <p class="pb-3 price1"><strong>price: </strong><span>{{val.price}}$</span></p> 
                 <p class="pb-3 description"><strong>Description:</strong> <span>{{val.dsc}}</span></p>
               </h2>
             </div>
             <div>
                <p class="pb-2 ml-3">
                  Copy Type:
                </p>  
                <select name="" id="" class="options" v-model="copyType" @change="checkQuantity">
                     <option >original</option>
                     <option >copy</option>
                </select>
             </div>
              <div>
                <p class="pb-2 ml-3">
                  Number of copies:
                </p>  
                     <input type="number" class="options mb5" v-model="number">
             </div>
             <div class="btnMargin">
               <button 
                  class="btn btn-primary btnModal"
                  data-dismiss="modal" 
                  :disabled="!availability" 
                   data-toggle="modal"
                  data-target="#alertModal"
                  @click="toCart(`<?php echo $_SESSION['userId'] ;?>`)">
               Add to Cart
             </button>
             <span v-if="availability">
               <i class="fa fa-check" aria-hidden="true"></i>
             </span>
             <span v-if="notAvailable">
                <i class="fa fa-times" aria-hidden="true"></i>
             </span>
             <span class="pl-2">
               In Stock
             </span>   
             </div>
           </div><!-- col-6 -->
         </div>
       </div>
      </div>
    </div>
  </div>
</div>
</section>
