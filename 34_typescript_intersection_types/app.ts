interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identify {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identify & Contact;
type Customer = BusinessPartner & Contact;

let e: Employee = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '555-555-5555',
};

let c: Customer = {
  name: 'Acme Corporation',
  credit: 1000,
  email: 'sales@abcinc.com',
  phone: '(408) 555-5555',
};

console.log(e);
console.log(c);
