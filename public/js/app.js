'use strict'
$(function(){

  // only for the homepage
  $('.button-collapse').sideNav();
  $('.parallax').parallax();


  // Some jquery methods that we can grab as soon as the page loads

  const $form     = $('#subwayReportForm')
  const url       = $form.attr( 'action' )
  let loc         = {}

  // do this when we get gps coordinates (this might take like 5 seconds)
  // es6 deconstructors here
  const setLocation = function({coords:{latitude,longitude},timestamp}){
    loc = {latitude,longitude,timestamp}
  }

  // if the navigator is available, watch our position
  navigator.geolocation && navigator.geolocation.watchPosition && navigator.geolocation.watchPosition( setLocation )

  // If we submit the form...
  // insert the geolocation data
  $form.submit( event=> {

    $form.append(
      /* generate an array of hidden inputs for each of the location items */
      Object.keys( loc ).map( key=>
        $('<input />',{
          type:'hidden',
          name:key,
          value:loc[key]
        })
      )
    )
  })
})

