class Contract{
  constructor(apartment, customer, agent, checkIn, checkOut){
    this.apartment = apartment;
    this.customer = customer;
    this.agent = agent;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.calculatePrice();
  }

  calculatePrice(){
    let time = new Date(this.checkOut) - new Date(this.checkIn);
    // difference is in ms:
    // time / 1000 = 1 sec
    //          * 60 = 1 min
    //            * 60 = 1 hr
    //              * 24 = 1 day
    let days = time  / (1000 * 60 * 60 * 24);
    // multiply days * appartment price and put it in the total
    this.totalPrice = days * this.apartment.pricePerDay;
  }

}
