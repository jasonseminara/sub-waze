

$(function(){

  $('.button-collapse').sideNav();
  $('.parallax').parallax();


  // Some jquery mothods that we can grab as soon as the page loads

  const $form            = $('#subwayReportForm')
  const url              = $form.attr( 'action' )

  //todo: what should we do if the browser doesn't support geolocation?
  const geoLocator       = navigator.geolocation? navigator.geolocation : ()=>({watchPosition(){}})
  const loc = {coords:{latitude:null,longitude:null}, timestamp:null}

  const setLocation = function(gp){
      loc.coords = { latitude:gp.coords.latitude, longitude:gp.coords.longitude }
      loc.timestamp = gp.timestamp
      return
    }

  geoLocator.watchPosition( setLocation )

  // If we submit the form...
  // insert the geolocation data
  $form.submit( event=> {
    $form.append(
      $('<input />',{name:'lon',value:loc.coords.longitude}),
      $('<input />',{name:'lat',value:loc.coords.latitude}),
      $('<input />',{name:'timestamp',value:loc.timestamp})
    )
  })
})

