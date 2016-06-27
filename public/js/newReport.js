$(function(){
  console.log('loaded doc')

  const geoLocator = navigator.geolocation? navigator.geolocation : ()=>({watchPosition(){}})

  geoLocator.watchPosition(location=>{
    console.log(location)
  })
})
