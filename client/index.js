// config
const http = axios;
let customers = [];
let owners = [];
let apartments = [];

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
        owners.push(new Owner(user.firstName, user.lastName));
      }


    }
    console.log('customers', customers);
    console.log('owners', owners);
  }

  // 4. make some apartment objects
  let aps = await http.get('data/apartments');

  for(let apartment of aps.data){

    apartments.push( new Apartment(apartment.name, owners[0])  );

  }

  console.log('apartments', apartments);


  // 5. make a contract for an appartment rental between a customer and an owner

  // 6. add an agent to the contract

  // 7. change the procedure above so that
    // a) an order is placed by the customer
    // b) the order is aproved by the owner
    // c) the contract is issued to the customer and owner by the agent

}





