var myMod = require('./module');

let myClass = myMod.myClass;
let ticketOne = new myClass();
ticketOne.addTicket(1, 1, 1, "borg el arab", "cairo air port", 3);
ticketOne.addTicket(2, 2, 1, "borg el arab", "cairo air port", 3);
ticketOne.addTicket(3, 3, 1, "borg el arab", "cairo air port", 3);
// console.log(ticketOne.displayAllTickets());

let ticketTwo = new myClass();
ticketTwo.addTicket(4, 4, 1, "borg el arab", "cairo air port", 3);
ticketTwo.addTicket(5 ,5, 1, "borg el arab", "cairo air port", 3);
ticketTwo.addTicket(6, 6, 1, "borg el arab", "cairo air port", 3);
// console.log(ticketTwo.displayAllTickets());

// you should enter the id of ticket that operation will be applied on this ticket

// console.log(ticketTwo.updateTicket(5,"seat",10));
// console.log(ticketTwo.gitTicketById(5));

