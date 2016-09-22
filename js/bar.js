
   var bar_1 = new ProgressBar.Circle(skill_1, {
    	  color: '#FFF',
    	  // This has to be the same size as the maximum width to
    	  // prevent clipping
    	  strokeWidth: 4,
    	  trailWidth: 10,
    	  easing: 'bounce',
    	  duration: 1400,
    	  text: {
    	    autoStyleContainer: false
    	  },
    	  from: { color: '#aaa', width: 11 },
    	  to: { color: '#aaa', width: 10 },
    	  // Set default step function for all animate calls
    	  step: function(state, circle) {
    	    circle.path.setAttribute('stroke', state.color);
    	    circle.path.setAttribute('stroke-width', state.width);

    	    var value = Math.round(circle.value() * 100);
    	    if (value === 0) {
    	      circle.setText('');
    	    } else {
    	      circle.setText(value + '%');
    	    }

    	  }
    	});
    	bar_1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    	bar_1.text.style.fontSize = '3rem';

    	

    var bar_2 = new ProgressBar.Circle(skill_2, {
    	    	  color: '#FFF',
    	    	  // This has to be the same size as the maximum width to
    	    	  // prevent clipping
    	    	  strokeWidth: 4,
    	    	  trailWidth: 10,
    	    	  easing: 'bounce',
    	    	  duration: 1400,
    	    	  text: {
    	    	    autoStyleContainer: false
    	    	  },
    	    	  from: { color: '#aaa', width: 11 },
    	    	  to: { color: '#aaa', width: 10 },
    	    	  // Set default step function for all animate calls
    	    	  step: function(state, circle) {
    	    	    circle.path.setAttribute('stroke', state.color);
    	    	    circle.path.setAttribute('stroke-width', state.width);

    	    	    var value = Math.round(circle.value() * 100);
    	    	    if (value === 0) {
    	    	      circle.setText('');
    	    	    } else {
    	    	      circle.setText(value + '%');
    	    	    }

    	    	  }
    	    	});
    	    	bar_2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    	    	bar_2.text.style.fontSize = '3rem';
    	    	
    var bar_3 = new ProgressBar.Circle(skill_3, {
      	    	  color: '#FFF',
      	    	  // This has to be the same size as the maximum width to
      	    	  // prevent clipping
      	    	  strokeWidth: 4,
      	    	  trailWidth: 10,
      	    	  easing: 'bounce',
      	    	  duration: 1400,
      	    	  text: {
      	    	    autoStyleContainer: false
      	    	  },
      	    	  from: { color: '#aaa', width: 11 },
      	    	  to: { color: '#aaa', width: 10 },
      	    	  // Set default step function for all animate calls
      	    	  step: function(state, circle) {
      	    	    circle.path.setAttribute('stroke', state.color);
      	    	    circle.path.setAttribute('stroke-width', state.width);

      	    	    var value = Math.round(circle.value() * 100);
      	    	    if (value === 0) {
      	    	      circle.setText('');
      	    	    } else {
      	    	      circle.setText(value + '%');
      	    	    }

      	    	  }
      	    	});
      	    	bar_3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      	    	bar_3.text.style.fontSize = '3rem';

	var bar_4 = new ProgressBar.Circle(skill_4, {
      	    	  color: '#FFF',
      	    	  // This has to be the same size as the maximum width to
      	    	  // prevent clipping
      	    	  strokeWidth: 4,
      	    	  trailWidth: 10,
      	    	  easing: 'bounce',
      	    	  duration: 1400,
      	    	  text: {
      	    	    autoStyleContainer: false
      	    	  },
      	    	  from: { color: '#aaa', width: 11 },
      	    	  to: { color: '#aaa', width: 10 },
      	    	  // Set default step function for all animate calls
      	    	  step: function(state, circle) {
      	    	    circle.path.setAttribute('stroke', state.color);
      	    	    circle.path.setAttribute('stroke-width', state.width);

      	    	    var value = Math.round(circle.value() * 100);
      	    	    if (value === 0) {
      	    	      circle.setText('');
      	    	    } else {
      	    	      circle.setText(value + '%');
      	    	    }

      	    	  }
      	    	});
      	    	bar_4.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      	    	bar_4.text.style.fontSize = '3rem';
      	    	
 	var bar_5 = new ProgressBar.Circle(skill_5, {
    	    	  color: '#FFF',
    	    	  // This has to be the same size as the maximum width to
    	    	  // prevent clipping
    	    	  strokeWidth: 4,
    	    	  trailWidth: 10,
    	    	  easing: 'bounce',
    	    	  duration: 1400,
    	    	  text: {
    	    	    autoStyleContainer: false
    	    	  },
    	    	  from: { color: '#aaa', width: 11 },
    	    	  to: { color: '#aaa', width: 10 },
    	    	  // Set default step function for all animate calls
    	    	  step: function(state, circle) {
    	    	    circle.path.setAttribute('stroke', state.color);
    	    	    circle.path.setAttribute('stroke-width', state.width);

    	    	    var value = Math.round(circle.value() * 100);
    	    	    if (value === 0) {
    	    	      circle.setText('');
    	    	    } else {
    	    	      circle.setText(value + '%');
    	    	    }

    	    	  }
    	    	});
    	    	bar_5.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    	    	bar_5.text.style.fontSize = '3rem';

	var bar_6 = new ProgressBar.Circle(skill_6, {
      	    	  color: '#FFF',
      	    	  // This has to be the same size as the maximum width to
      	    	  // prevent clipping
      	    	  strokeWidth: 4,
      	    	  trailWidth: 10,
      	    	  easing: 'bounce',
      	    	  duration: 1400,
      	    	  text: {
      	    	    autoStyleContainer: false
      	    	  },
      	    	  from: { color: '#aaa', width: 11 },
      	    	  to: { color: '#aaa', width: 10 },
      	    	  // Set default step function for all animate calls
      	    	  step: function(state, circle) {
      	    	    circle.path.setAttribute('stroke', state.color);
      	    	    circle.path.setAttribute('stroke-width', state.width);

      	    	    var value = Math.round(circle.value() * 100);
      	    	    if (value === 0) {
      	    	      circle.setText('');
      	    	    } else {
      	    	      circle.setText(value + '%');
      	    	    }

      	    	  }
      	    	});
      	    	bar_6.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      	    	bar_6.text.style.fontSize = '3rem';  
      	    	
      	    	
     var bar_7 = new ProgressBar.Line(skill_7, {
      	    	  strokeWidth: 5,
      	    	  easing: 'bounce',
      	    	  duration: 1400,
      	    	  color: '#aaa',
      	    	  trailColor: '#eee',
      	    	  trailWidth: 5,
      	    	  svgStyle: {width: '100%', height: '100%'},
      	    	  text: {
      	    	    style: {
      	    	      color: '#aaa',
      	    	      position: 'absolute',
      	    	      right: '0',
      	    	      top: '30px',
      	    	      padding: 0,
      	    	      margin: 0,      	    	    
      	    	      transform: null,
      	    	      
      	    	    },
      	    	    autoStyleContainer: false
      	    	  },
      	    	  from: {color: '#aaa'},
      	    	  to: {color: '#aaa'},
      	    	  
      	    	  step: function (state, bar_7){
      	    	    bar_7.setText(' Bootstrap ' + Math.round( + bar_7.value() * 100) + '%');
      	    	  }
      	    	}); 
     
     var bar_8 = new ProgressBar.Line(skill_8, {
	    	  strokeWidth: 5,
	    	  easing: 'bounce',
	    	  duration: 1400,
	    	  color: '#aaa',
	    	  trailColor: '#eee',
	    	  trailWidth: 5,
	    	  svgStyle: {width: '100%', height: '100%'},
	    	  text: {
	    	    style: {
	    	      // Text color.
	    	      // Default: same as stroke color (options.color)
	    	      color: '#aaa',
	    	      position: 'absolute',
	    	      right: '0',
	    	      top: '30px',
	    	      padding: 0,
	    	      margin: 0,
	    	      transform: null
	    	    },
	    	    autoStyleContainer: false
	    	  },
	    	  from: {color: '#aaa'},
	    	  to: {color: '#aaa'},
	    	  
	    	  step: function(state, bar_8) {
	    		  bar_8.setText(' Ajax ' + Math.round( + bar_8.value() * 100) + '%');
	    	  }
	    	});
     
     var bar_9 = new ProgressBar.Line(skill_9, {
   	  strokeWidth: 5,
   	  easing: 'bounce',
   	  duration: 1400,
   	  color: '#aaa',
   	  trailColor: '#eee',
   	  trailWidth: 5,
   	  svgStyle: {width: '100%', height: '100%'},
   	  text: {
   	    style: {
   	      // Text color.
   	      // Default: same as stroke color (options.color)
   	      color: '#aaa',
   	      position: 'absolute',
   	      right: '0',
   	      top: '30px',
   	      padding: 0,
   	      margin: 0,
   	      transform: null
   	    },
   	    autoStyleContainer: false
   	  },
   	  from: {color: '#aaa'},
   	  to: {color: '#aaa'},
   	  
   	  step:  function (state, bar_9){
   		bar_9.setText(' Wordpress ' + Math.round( + bar_9.value() * 100) + '%');
   	  }
   	}); 
     
     var bar_10 = new ProgressBar.Line(skill_10, {
      	  strokeWidth: 5,
      	  easing: 'bounce',
      	  duration: 1400,
      	  color: '#aaa',
      	  trailColor: '#eee',
      	  trailWidth: 5,
      	  svgStyle: {width: '100%', height: '100%'},
      	  text: {
      	    style: {
      	      // Text color.
      	      // Default: same as stroke color (options.color)
      	      color: '#aaa',
      	      position: 'absolute',
      	      right: '0',
      	      top: '30px',
      	      padding: 0,
      	      margin: 0,
      	      transform: null
      	    },
      	    autoStyleContainer: false
      	  },
      	  from: {color: '#aaa'},
      	  to: {color: '#aaa'},
      	  
      	  step:  function(state, bar_10) {
      		bar_10.setText(' Prestashop ' + Math.round( + bar_10.value() * 100) + '%');
      	  }
      	}); 
     
     var bar_11 = new ProgressBar.Line(skill_11, {
     	  strokeWidth: 5,
     	  easing: 'bounce',
     	  duration: 1400,
     	  color: '#aaa',
     	  trailColor: '#eee',
     	  trailWidth: 5,
     	  svgStyle: {width: '100%', height: '100%'},
     	  text: {
     	    style: {
     	      // Text color.
     	      // Default: same as stroke color (options.color)
     	      color: '#aaa',
     	      position: 'absolute',
     	      right: '0',
     	      top: '30px',
     	      padding: 0,
     	      margin: 0,
     	      transform: null
     	    },
     	    autoStyleContainer: false
     	  },
     	  from: {color: '#aaa'},
     	  to: {color: '#aaa'},
     	  
     	  step:  function(state, bar_11) {
     		 bar_11.setText(' SEO ' + Math.round( + bar_11.value() * 100) + '%');
     	  }
     	}); 
     
     var bar_12 = new ProgressBar.Line(skill_12, {
     	  strokeWidth: 5,
     	  easing: 'bounce',
     	  duration: 1400,
     	  color: '#aaa',
     	  trailColor: '#eee',
     	  trailWidth: 5,
     	  svgStyle: {width: '100%', height: '100%'},
     	  text: {
     	    style: {
     	      // Text color.
     	      // Default: same as stroke color (options.color)
     	      color: '#aaa',
     	      position: 'absolute',
     	      right: '0',
     	      top: '30px',
     	      padding: 0,
     	      margin: 0,
     	      transform: null
     	    },
     	    autoStyleContainer: false
     	  },
     	  from: {color: '#aaa'},
     	  to: {color: '#aaa'},
     	  
     	  step:  function(state, bar_12) {
     		 bar_12.setText(' Photoshop ' + Math.round( + bar_12.value() * 100) + '%');
     	  }
     	}); 
     