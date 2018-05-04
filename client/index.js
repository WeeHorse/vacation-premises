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
  //console.log('users', users);
  // check
  if(users.data){

    for(let user of users.data){
      switch(user.type){
        // 2. make some customer objects
        case 'Customer':
          let customer = new Customer(user.firstName, user.lastName, user.email);
          customers.push(customer);
        break;
        // 3. make some owner objects
        case 'Owner':
          let owner = new Owner(user.firstName, user.lastName, user.email);
            owners.push(owner);
        break;
      }
    }
    console.log('customers', customers);
    console.log('owners', owners);

    // 4. make some appartment objects
    let aps = await http.get('/data/apartments');
    console.log('aps', aps);
    if(aps.data){
      for(let apartment of aps.data){
        apartments.push( new Apartment(apartment) );
      }
    }
    console.log('apartments', apartments);

  }


  // 5. make a contract for an appartment rental between a customer and an owner
  // let contract = new Contract(apartments[1], customers[0]);
  // console.log('contract', contract);
  let contrs = await http.get('/data/contracts')
  console.log('contrs', contrs);
  if(contrs.data){
    for(let contract of contrs.data){

      // find the apartment object with the name that matches contract.apartment
      let apartment = apartments.filter(function(a){
        return (a.name == contract.apartment);
      });
      apartment = apartment[0]; // throw away the array and keep the object at first position

      contracts.push( new Contract(apartment, contract.tenant) )
    }
  }
  console.log('contracts', contracts);

  // 6. add an agent to the contract
  // 7. change the procedure above so that
    // a) an order is placed by the customer
    // b) the order is aproved by the owner
    // c) the contract is issued to the customer and owner by the agent

}





