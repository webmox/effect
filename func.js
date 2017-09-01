$(document).ready(function(e){
	
$('.list_elements .item_element').on('mouseover', function(){
	console.log('t');
	 var $this = $(this),
	     wrap = $this.closest('.layout'),
		 height_this = $this.outerHeight(),
		 top = $this.position().top,
		 speed = 150,
		 lava_item = wrap.find('.el_move');
		 
		 lava_item.fadeIn()
		 	.css({})
		 	.stop()
		 	.animate({
		 		'top':top,
		 		'height':height_this
		 	}, speed);
 });


})