// config
const http = axios;
let customers = [];
let owners = [];
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
        customers.push(new Customer(user.firstName, user.lastName));
      }
      // 3. make some owner objects
      if(user.type == 'Owner'){
        owners.push(new Owner(user.firstName, user.lastName, user.email));
      }


    }
    console.log('customers', customers);
    console.log('owners', owners);
  }

  // 4. make some apartment objects
  let aps = await http.get('data/apartments');

  for(let apartment of aps.data){
    // also find and add the owner
    for(let owner of owners){
      if(apartment.owner == owner.email){
        apartments.push( new Apartment(apartment.name, owner));
      }
    }
  }

  console.log('apartments', apartments);

  // 5. make a contract for an appartment rental between a customer and an owner
  let contrs = await http.get('/data/contracts')
  if(contrs.data){
    for(let contract of contrs.data){

      // find the apartment object with the name that matches contract.apartment
      for(let apartment of apartments){
        if(apartment.name == contract.apartment){
          contracts.push( new Contract(apartment, contract.tenant) )
        }
      }

    }
  }
  console.log('contracts', contracts);

  // 6. add an agent to the contract
  // 7. change the procedure above so that
    // a) an order is placed by the customer
    // b) the order is aproved by the owner
    // c) the contract is issued to the customer and owner by the agent


}





