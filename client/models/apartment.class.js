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

  // render(selector){
  //   $(`<div class="col-md-4">
  //     <h2>${this.name}</h2>
  //     <p>${this.address}</p>
  //     <div>
  //       <img src="${this.image}" class="img-fluid">
  //     </div>
  //     <br>
  //     <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
  //   </div>`).appendTo(selector);
  // }

}
