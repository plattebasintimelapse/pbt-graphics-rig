'use strict';

$(function() {

  function drawGraphic() {

    // clear existing graphic
    // $('#chart svg').remove();
  };

  var pymChild = new pym.Child({ renderCallback: drawGraphic });

  d3.select(window).on('resize', drawGraphic);

});