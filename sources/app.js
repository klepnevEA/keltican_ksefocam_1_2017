		$(function(){
			var ev = 'mouseup touchend'
			/*popups*/
			$('.btn_popup').on(ev, popopOpen);
			$('.close_popup').on(ev, popopClose);

			/*taps*/
			$('.btn_tap').on(ev, tapOpen);

			/*цвет ссылок*/
			$('body').on(ev, colorLinck);
		});

		/*popups*/		
		function popopOpen() {
			var popup = $(this).data('popup');
			$('#' + popup).addClass('active');
		
		}

		function popopClose() {
			var popup = $(this).data('popup');
			setTimeout(function() {$('#' + popup).removeClass('active')}, 300);
			$('.data_nav').removeClass('active');
			$('.btn_popup').removeClass('active');						
		}		

		/*taps*/
		function tapOpen() {
			var tap = $(this).data('tap');
			$('.btn_tap').removeClass('active');
			$(this).addClass('active');
			$('.taps').removeClass('active');				
			$('#' + tap).addClass('active');
		}


		function colorLinck(e) {
			var page = e.target.dataset.num;

			if(e.target.dataset.num) {
				$('.btn_nav').removeClass('active');
				$('.btn_' + page).addClass('active');                     

				var event = new Event("click");  

				setTimeout(function() {document.getElementById('btn_' + page).dispatchEvent(event)}, 500);		    	
				
			}
		}



