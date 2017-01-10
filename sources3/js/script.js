$(document).ready(function(){
	
	$(".like-btn").on("click", function(event){
		event.preventDefault();
		
		$(".s3-txt").fadeIn(200);
		$(".treker").addClass("active")
		
		$(this).closest(".btn-line").addClass("active").find(".btn-txt").animate({"opacity": 1}, 200)
		
	})
	
	
	
	
	
	
	
	
});

$(window).load(function(){
	
	
})





