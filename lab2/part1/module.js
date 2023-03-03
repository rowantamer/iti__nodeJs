class myClass {
    tickets = [];
    addTicket(ticketId, seatNum, flightNum, departure, arrival, TravelDate) {
        let ticket = {
            ticketId, seatNum, flightNum, departure, arrival, TravelDate
        }
        return this.tickets.push(ticket);
    }
    displayAllTickets() {
        const allTickets = this.tickets.map(x => x);
        return allTickets;
    }
    gitTicketById(ticketId) {
        for (let i = 0; i < this.tickets.length; i++) {
            if (this.tickets[i].ticketId == ticketId) {
                return this.tickets[i];
            }
        }
    }
    updateTicket(tickId, operation, value) {
        for (let i in this.tickets) {
            if (this.tickets[i].ticketId == tickId) {
                if (operation == "seat") {
                    this.tickets[i].seatNum = value;
                } else if (operation == "flight") {
                    this.tickets[i].flightNum = value;
                } else if (operation == "departure") {
                    this.tickets[i].departure = value;
                } else if (operation == "arrival") {
                    this.tickets[i].arrival = value;
                }
                else if (operation == "date") {
                    this.tickets[i].date = value;
                }
                return this.tickets[i];
            }
        }
    }
}

module.exports= {
    myClass
};