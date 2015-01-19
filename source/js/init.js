
'use strict';

var gmap;

var toogleFacet = function toogleFacet(e) {
  var fac = $(e.currentTarget).context.textContent;
  fac = fac.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  
  if ($(e.currentTarget).hasClass('on')) {
    $(e.currentTarget).removeClass('on');
    hideFacetsInfo(fac);
  } else {
    $(e.currentTarget).addClass('on');
    showFacetsInfo(fac);
  }
};

$(document).ready(function () {
  $('.facet').click(toogleFacet);
  $('#weatherButton').click(toogleWeather);
	var mapOptions = {
		center: new google.maps.LatLng(41.6551800, -4.7237200),
		zoom: 7,
		disableDefaultUI: true,
    mapTypeControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    panControl: false,
    streetViewControl: false
	};
	gmap = new google.maps.Map(document.getElementById("rightPanelMap"), mapOptions);
  
});
