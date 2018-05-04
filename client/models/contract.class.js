class Contract{
  constructor(apartment, customer){
    this.apartment = apartment;
    this.customer = customer;
    this.owner = apartment.owner;
  }
}