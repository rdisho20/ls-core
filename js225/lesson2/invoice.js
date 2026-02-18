let invoices = {
  unpaid: [],
  paid: [],

  add(name, amount) {
    let invoice = {
      name,
      amount,
    }
    this.unpaid.push(invoice);
  },

  totalDue() {
    let total = 0;
    this.unpaid.forEach(invoice => {
      total += invoice.amount;
    })

    return total;
  },

  payInvoice(clientName) {
    let unpaidRemaining = [];
    this.unpaid.forEach(invoice => {
      if (clientName === invoice.name) this.paid.push(invoice);
      else unpaidRemaining.push(invoice);
    });
    this.unpaid = unpaidRemaining;
  },
  
  totalPaid() {
    let total = 0;
    this.paid.forEach(invoice => {
      total += invoice.amount;
    })

    return total;
  }
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.totalDue());

invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
console.log(invoices.totalPaid());
console.log(invoices.totalDue())
