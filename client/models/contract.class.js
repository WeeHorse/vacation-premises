class Contract{
  constructor(apartment, customer){
    this.apartment = apartment;
    customer = customers.filter(function(c){
      return (c.email == customer);
    });
    this.customer = customer[0];
    let owner = owners.filter(function(o){
      return (o.email == apartment.owner);
    });
    this.owner = owner[0];
  }
}