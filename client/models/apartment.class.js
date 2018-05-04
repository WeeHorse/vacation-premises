class Apartment{

  constructor(props){
    /*
      example props object:
      {
        "name": "Villa del Sol",
        "address": "Rue de la Soleil de la nuit 14, Narvik",
        "owner": "win@property-rentals.com",
        "image": "/images/villa-del-sol.jpg",
        "pricePerDay": 40
      }
    */

    // (for property name in object - loop)
    for(let n in props){
      // console.log('n', n);
      // console.log('props[n]', props[n]);
      this[n] = props[n];
    }
  }

}