'use strict';

$(function() {

  	function drawGraphic() {

	    // clear existing graphic
	    // $('#chart svg').remove();
  	};

  	var pymChild = new pym.Child({ renderCallback: drawGraphic });

  	$(window).resize(function() {
  		drawGraphic()
  	});

});