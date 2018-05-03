// config
const http = axios;
let customers = [];

$(start);
async function start(){

  // 1. load some users
  let users = await http.get('data/users');
  // check
  if(users.data){

    // 2. make some customer objects
    for(let user of users.data){
      if(user.type == 'Customer'){
        customers.push(new Customer(user.firstName, user.lastName));
      }
    }
    console.log('customers', customers);

    // 3. make some owner objects

  }

  // 4. make some appartment objects

  // 5. make a contract for an appartment rental between a customer and an owner

  // 6. add an agent to the contract

  // 7. change the procedure above so that
    // a) an order is placed by the customer
    // b) the order is aproved by the owner
    // c) the contract is issued to the customer and owner by the agent

}





