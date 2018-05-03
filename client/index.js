// config
const http = axios;
let customers = [];

$(start);
async function start(){

  // load some users
  let users = await http.get('data/users');
  // check
  if(users.data){

    // 1. make some customer objects
    for(let user of users.data){
      if(user.type == 'Customer'){
        customers.push(new Customer(user.firstName, user.lastName));
      }
    }
    console.log('customers', customers);

    // 2. make some owner objects

  }

  // 3. make some appartment objects

  // 4. make a contract for an appartment rental between a customer and an owner

  // 5. add an agent to the contract

  // 6. change the procedure above so that
    // a) an order is placed by the customer
    // b) the order is aproved by the owner
    // c) the contract is issued to the customer and owner by the agent

}





