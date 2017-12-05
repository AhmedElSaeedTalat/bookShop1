<section id="events">
	<div class="container pt-5">
		<div class="row mb-5">
			<div class="col-12 text-center">
				<h2 class="color-white eventTitle">Events</h2>
			</div>
		</div><!-- row -->
		<div class="row ">
			<?php $x = 0 ;?>
			<?php  foreach($data[5] as $value) : ?>
				<?php foreach($value as $events) : ?>
					<?php $x++ ;?>
					
						<?php if($x == 1) : ?>
							<div class="col-lg-6  padding pr-0">
								<div class="image">
									<img src="public/images/<?php echo $events['image'] ;?>" alt="" class="img-fluid">
								</div>
								<section class="background_white1 changes editContent arrows3" id="removeEvent">
									<p class="pt-3">Event</p>
								<p class="date pt-3">
									<i class="fa fa-calendar" aria-hidden="true"></i>
									<span>
										<?php echo $events['event_date'];?> |
									</span>
									<span>
										<i class="fa fa-clock-o" aria-hidden="true"></i> 
										<?php echo $events['event_time'];?> |
									</span>
									<span>
										<i class="fa fa-map-marker" aria-hidden="true"></i>
										<?php echo $events['event_location'];?>
									</span>
								</p>
								<p class="pt-3 pb-3 mb-5"><?php echo $events['event_description'] ;?></p>
								<?php foreach ($data[13] as $key => $value) : ?>
									<?php foreach ($value as $key => $joined) : ?> 
										<?php if($joined['id']== $events['id']) :?>
											<button class="btn btn-primary buttonEvent1"  id="exists" disabled>joined</button>
											<?php endif ;?>
										<?php endforeach ;?>	
								<?php  endforeach ;?>
								<button 
								class="btn btn-primary buttonEvent1"
								@click="eventAttendance1(`<?php echo $events['id'] ;?>`,
										`<?php echo $_SESSION['userId'];?>`)"
								:disabled="eventChecker">
							 		{{event}}
							 	</button>
							 	 <p v-show="event1" class="unjoin1" @click="unjoin1(`<?php echo $events['id'] ;?>`)">Unjoin Event</p>
								</section>
								
							</div>
							<?php endif;?>
						<?php endforeach ;?>	
					<?php  endforeach ;?>
						<div class="col-lg-6  padding ">
							<div class="row"  v-for = "user in eventInfo">
									<div 
								v-if="index > 0"
								:class=" {'col-lg-6':true,'p-0':true,'changeOrder1':index == 2,'changeOrder' : index ==1}"
								v-for="event,index in user"
								>
								<div class="image">
									<img :src="'public/images/'+ event.image" alt="" class="img">
								</div>
								</div>
								<div 
								v-if="index > 0"
								v-for="event,index in user"
								:class = "{'col-lg-6':true,'background_white':true,'editContent':true,
								 'changeOrder4':index == 2,'arrows2':index ==2,
								  'changeOrder3':index == 1,'arrows1': index == 1}"
								>
									<section class="background_white1 h-100" id="settings">
										<p :class="{'pt-3': index == 2 }">Event</p>
										<p class="date pt-3">
											<i class="fa fa-calendar" aria-hidden="true"></i>
											<span>
												{{event.event_date}} |
											</span>
											<span>
												<i class="fa fa-map-marker" aria-hidden="true"></i>
												{{event.event_location}}
											</span>
										</p>
										
										<p class="pt-3 pb-3 desc">{{event.event_description}}</p>
										<button
										:disabled = "joinedEvents.indexOf(+event.id) > -1"
										class="btn btn-primary buttonEvent2 attendEvent uniqueAdd"
										@click="eventAttendance($event,index,event.id,
										`<?php echo $_SESSION['userId'];?>`)"
										>
							 			{{event2}}
							 			 </button>
							 			 <p class="unjoin"
							 			 v-if="joinedEvents.indexOf(+event.id) > -1"
							 			  @click="unjoin($event,event.id,index)">Unjoin Event</p>
							 			  <p v-show="false" class="unjoin theUnjoin" @click="unjoin3($event,event.id,index)">
							 			  	Unjoin Event
						 				  </p>
									</section>
								</div>
							</div>
						</div>	
		</div><!-- row -->
	</div>
</section>
