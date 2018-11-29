// config
const http = axios;
let customers = [];
let owners = [];
let agents = [];
let apartments = [];
let contracts = [];

$(start);
async function start(){

  // 1. load some users
  let users = await http.get('data/users');
  // check
  if(users.data){

    for(let user of users.data){

      // 2. make some customer objects
      if(user.type == 'Customer'){
        customers.push(new Customer(user.firstName, user.lastName, user.email));
      }
      // 3. make some owner objects
      if(user.type == 'Owner'){
        owners.push(new Owner(user.firstName, user.lastName, user.email));
      }
      // 6. make agent object(s), (we only have one)
      if(user.type == 'Agent'){
        agents.push(new Agent(user.firstName, user.lastName, user.email));
      }

    }
    console.log('customers', customers);
    console.log('owners', owners);
    console.log('agents', agents);
  }

  // 4. make some apartment objects
  let aps = await http.get('data/apartments');

  for(let apartment of aps.data){
    // also find and add the owner
    for(let owner of owners){
      if(apartment.owner == owner.email){
        apartments.push( new Apartment(apartment.name, apartment.address, apartment.owner, apartment.image, apartment.pricePerDay) );
      }
    }
  }

  console.log('apartments', apartments);

  // 5. make a contract for an appartment rental between a customer and an owner
  // 6. add an agent to the contract
  let contrs = await http.get('/data/contracts')
  if(contrs.data){
    for(let contract of contrs.data){

      // find the apartment object with the name that matches contract.apartment
      for(let apartment of apartments){
        if(apartment.name == contract.apartment){

          // find the customer based on the contract.tenant (which is an email)
          for(let customer of customers){
            if(customer.email == contract.tenant){
              contracts.push( new Contract(apartment, customer, agents[0], contract.checkIn, contract.checkOut) )
            }
          }
          // all theese loops.. hash tables would be nice!
        }
      }

    }
  }
  console.log('contracts', contracts);


}





