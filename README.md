# vacation-premises

Vi bygger en klient som ska berika data (ifrån json i backend) för användare och semesterbostäder. 

## Vi bygger först några procedurer (utan gränssnitt):

1. load some users
2. make some customer objects
3. make some owner objects
4. make some apartment objects
5. make a contract for an apartment rental between a customer and an owner
6. add an agent to the contract
7. change the procedure above so that
  a) an order is placed by the customer
  b) the order is approved by the owner
  c) the contract is issued to the customer and owner by the agent

Sedan skapar vi gränssnitt med hjälp av jquery och string literals som templates.
