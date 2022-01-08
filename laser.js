
const paris1 = 48.8534100 // широта
const paris2 = 2.3488000 // долгота
const moscow1 = 55.558741 // latitude
const moscow2 = 37.378847 // longitude
TebeLaser = (tebe0h, tebe0d, tebe1h, tebe1d) => {let x = Math.cos; let re = 0.017453292519943295; return 12742 * Math.asin(Math.sqrt(0.5 - x((tebe1h - tebe0h) * re)/2 + x(tebe0h * re) * x(tebe1h * re) * (1 - x((tebe1d - tebe0d) * re))/2))}
console.log('Distance between point a and b on planet earth:', Math.floor(TebeLaser(moscow1,moscow2,paris1,paris2)),'km')
