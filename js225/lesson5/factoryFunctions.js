/* Factory Functions

function createPerson(firstName, lastName) {
  let person = {};
  person.firstName = firstName;
  person.lastName = lastName || '';
  person.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };

  return person;
}

let john = createPerson('John', 'Doe');
let jane = createPerson('Jane');

console.log(john.fullName());
console.log(jane.fullName());

function createPerson(firstName, lastName='') {
  return {
    firstName,
    lastName,
    fullName() {
      return (this.firstName + ' ' + this.lastName).trim();
    }
  }
}
*/

/*
function makeObj() {
  return {
    propA: 10,
    propB: 20,
  }
}
*/

/*
let invoice = {
  phone: 3000, internet: 6500,
};

let payment = {
  phone: 1300, internet: 5500,
};

let invoiceTotal = invoice.phone + invoice.internet;
let paymentTotal = payment.phone + payment.internet;
let remainingDue = invoiceTotal - paymentTotal;

console.log(paymentTotal);         // => 6800
console.log(remainingDue);         // => 2700
*/


function createInvoice(services) {
  let obj = { payments: [] };

  if (!services) {
    obj.phone = 3000;
    obj.internet = 5500;
  } else {
    obj.phone = services.phone ? services.phone : 3000;
    obj.internet = services.internet ? services.internet : 5500;
  }

  obj.total = function() {
    return this.phone + this.internet;
  }

  obj.addPayment = function(payment) {
    this.payments.push(payment);
  }

  obj.addPayments = function(payments) {
    payments.forEach(payment => {
      this.payments.push(payment);
    })
  }

  obj.sumPayments = function() {
    return this.payments.reduce((total, payment) => {
      return total + payment.total();
    }, 0)
  }

  obj.amountDue = function() {
    return this.total() - this.sumPayments();
  }

  return obj;
}

function invoiceTotal(invoices) {
  let total = 0;
  
  invoices.forEach(invoice => {
    total += invoice.total();
  });

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({ phone: 1000, internet: 4500 }));


function createPayment(services={}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || 0,
    total() {
      if (this.amount > 0) return this.amount;

      return this.phone + this.internet;
    }
  }
}


function paymentTotal(payments) {
  let total = 0;
  
  payments.forEach(payment => {
    total += payment.total();
  });

  return total;
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({ internet: 6500 }));
payments.push(createPayment({ phone: 2000 }));
payments.push(createPayment({ phone: 1000, internet: 4500 }));
payments.push(createPayment({ amount: 10000 }));

let invoice = createInvoice({ phone: 1200, internet: 4000 });
let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({ phone: 1000, internet: 1200 });
let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);

console.log(invoice.amountDue());