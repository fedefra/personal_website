  $(document).ready(function(){
	  
	  $('#menu_button').click(function(){
		 
			 if($('#menu_mobile').is(":visible"))
		  {	 
				 $('#icon-2').toggleClass('icon_bar_2_animate');
				 $('#menu_mobile').delay(50).slideUp(200);
				 $('#icon-1').toggleClass('icon_bar_1_animate');			  	
				 $('#icon-3').toggleClass('icon_bar_3_animate');
				
				 }
			 else{
				 $('#icon-2').toggleClass('icon_bar_2_animate');
			  $('#menu_mobile').delay(50).slideDown(200);		 
			  	$('#icon-1').toggleClass('icon_bar_1_animate');		  	
				 $('#icon-3').toggleClass('icon_bar_3_animate');
			 }
		  });
	  
	  var sezione_chi_sono=$('#sezione_chi_sono').offset().top;
	  var sezione_skill=$('#sezione_skill').offset().top;
	  var sezione_contatti=$('#sezione_contatti').offset().top;
	  
		$(window).scroll(function () {
			 if($('#menu_mobile').is(":visible"))
			  {
					 $('#menu_mobile').delay(50).slideUp(200);
					 $('#icon-2').removeClass('icon_bar_2_animate');
					 $('#icon-1').removeClass('icon_bar_1_animate');			  	
					 $('#icon-3').removeClass('icon_bar_3_animate');
					
					 }
			 
			        if ($(this).scrollTop() > 100) {
			        	$('#navbar-fixed-top').addClass( "navbar-scroll" );
			            
			        } else {
			        	$('#navbar-fixed-top').removeClass( "navbar-scroll" );
			        }
			        
			        if ($(this).scrollTop() < sezione_chi_sono) {
			        	$('#a-index').addClass( "active" );
			        	$('#a-chi-sono').removeClass( "active" );
			        	$('#a-skill').removeClass( "active" );
			        	$('#a-port').removeClass( "active" );
			        	$('#a-blog').removeClass( "active" );
			        	$('#a-contatti').removeClass( "active" );
			            
			        } 
			        if ($(this).scrollTop() > sezione_chi_sono-500) {
			        	$('#sezione_chi_sono').css("opacity", "1");
			        	$('.hr-1').css("width", "99%");
			        	$('.foto-my').css("margin-right", "100px");
			        	$('.bio-text').css("margin-left", "0px");
			        	$('#a-index').removeClass( "active" );
			        	$('#a-chi-sono').addClass( "active" );
			        	$('#a-skill').removeClass( "active" );
			        	$('#a-port').removeClass( "active" );
			        	$('#a-blog').removeClass( "active" );
			        	$('#a-contatti').removeClass( "active" );
			        }
			        if ($(this).scrollTop() > sezione_skill-500) {
				        $('#sezione_skill').css("opacity", "1");
				        $('.hr-2').css("width", "99%");			        
				    	$('#a-index').removeClass( "active" );
			        	$('#a-chi-sono').removeClass( "active" );
			        	$('#a-skill').addClass( "active" );
			        	$('#a-port').removeClass( "active" );
			        	$('#a-blog').removeClass( "active" );
			        	$('#a-contatti').removeClass( "active" );
			        	bar_1.animate(0.90);	//HTML5
			        	bar_2.animate(0.80);	//CSS	
			        	bar_3.animate(0.70);	//javascript
			        	bar_4.animate(0.80);	//jquery
			        	bar_5.animate(0.70);	//php
			        	bar_6.animate(0.60);	//mysql
			        	bar_7.animate(0.70);	//boot
			        	bar_8.animate(0.70);	//ajax
			        	bar_9.animate(0.70);	//wordpress
			        	bar_10.animate(0.60);	//presta
			        	bar_11.animate(0.70);	//seo
			        	bar_12.animate(0.50);	//photoshop
				       } 
			        if ($(this).scrollTop() > sezione_contatti-500) {
			        	  $('#sezione_contatti').css("opacity", "1");
					        $('.hr-3').css("width", "99%");			        
					    	$('#a-index').removeClass( "active" );
				        	$('#a-chi-sono').removeClass( "active" );
				        	$('#a-skill').removeClass( "active" );
				        	$('#a-port').removeClass( "active" );
				        	$('#a-blog').removeClass( "active" );
				        	$('#a-contatti').addClass( "active" );

			        }
			    });


			$('a[href^="#"]').on('click', function (e) {
			    e.preventDefault();
				 if($('#menu_mobile').is(":visible"))
				  {
						 $('#menu_mobile').delay(50).slideUp(200);
						
						 }
				 
			    var target = this.hash;
			    var $target = $(target);
			
			    $('html, body').stop().animate({
			        'scrollTop': $target.offset().top-60
			    }, 900, 'swing', function () {
			        window.location.hash = target;
			    });
			});
			
//INVIO EMAIL			
		$('#invia').on('click',function(event){
			  
			if(validate())
				{
				 event.preventDefault();
			 var formData = new FormData($('#form_contatti')[0]);
		          	   $.ajax({
		          	        url:'php/email.php',
		          	        type: 'POST',
		          	        data: formData,		          	          
		          	        dataType: 'text',
		          	       
		          	        success: function (data) {
		          	            if (data=="ok")
		          	            	{
		          	            	$('#confirm-alert').fadeOut(300, function() {
		          	            	$('#confirm-alert').html('<span class="glyphicon glyphicon-ok"></span> Messaggio Inviato').fadeIn(300);
		          	            	});
		          	            	}
		          	            else{
		          	            	console.log("errore invio mail")
		          	            }
		          	        },
		          	  
		          	      error: function (request, status, error) {
		          	        
		          	    	var text='<label for="btn_form" generated="true" class="text-danger text-success">Errore di connessione, riprova in seguito</label>';
	      	            	$( "#btn_form" ).after(text);
		          	    },
		          	        cache: false,
		          	        contentType: false,
		          	        processData: false
		          	    });	
				}
			else{
				 event.preventDefault();
			}
		        });
		
		
//VALIDAZIONE ON KEYCHANGE		
	$('#nome').on('input',function(){
			if ($('#nome').val()=='' || $('#nome').val().length <= 3)
				{
				$('#box-errore').html('<span class="glyphicon glyphicon-remove"></span>');				
				}
			else{
				$('#box-errore').html('<span class="glyphicon glyphicon-ok"></span>');				
			
			}
		});
		
	var em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		 	$('#email').on('input',function(){
		
			
			if (em.test(String($('#email').val()))==true)
				{
				$('#box-errore-2').html('<span class="glyphicon glyphicon-ok"></span>');				
				}
			else{
				$('#box-errore-2').html('<span class="glyphicon glyphicon-remove"></span>');				
			
			}
		});
		 	
	
	$('#mex').on('input',function(){
				if ($('#mex').val()=='' || $('#mex').val().length <= 5 )
					{
					$('#box-errore-3').html('<span class="glyphicon glyphicon-remove"></span>');				
					}
				else{
					$('#box-errore-3').html('<span class="glyphicon glyphicon-ok"></span>');				
				
				}
			});
		
		
  });
  
 //VALIDAZIONE PRIMA DI INVIO	 
  function validate(){
	  var errore=0;
	  var em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    
	  if ($('#nome').val()=='' || $('#nome').val().length <= 3)
		  {
		  errore=1;
		 //$('#box-errore').html('<span class="glyphicon glyphicon-triangle-left"></span><span id="errore_nome" class="errore">Inserisci nome</span>');
		$('#box-errore').html('<span class="glyphicon glyphicon-remove"></span>');
		  }
	  if(em.test(String($('#email').val())))
	  {	
		  	
	  }
	  else{
		  errore=1;
		  //$('#box-errore-2').html('<span class="glyphicon glyphicon-triangle-left"></span><span id="errore_nome" class="errore">Inserisci email valida</span>');
		  $('#box-errore-2').html('<span class="glyphicon glyphicon-remove"></span>');
	  }
	  if ($('#mex').val()=='' || $('#mex').val().length <= 3 )
		  {
		  errore=1;
		 // $('#box-errore-3').html('<span class="glyphicon glyphicon-triangle-left"></span><span id="errore_nome" class="errore">Inserisci un messaggio</span>');
		  $('#box-errore-3').html('<span class="glyphicon glyphicon-remove"></span>');
		  }
	  
	  
	  if(errore==0)
		  {
		  return true;
		  }
		  else{
			  $('#errore-alert').fadeOut(300, function() {
			  $('#errore-alert').html('<span class="glyphicon glyphicon-exclamation-sign"></span> Correggi gli errori per poter inviare').fadeIn(300);
			  setTimeout(function() {
				  $('.errore-alert').fadeOut(300);
				}, 5000);
			  
			  });

			  return false;
			 
		  }
		  
	 
  }