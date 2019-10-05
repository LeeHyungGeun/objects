class TicketOffice {
  private amount: number;
  private tickets: Array<Ticket> = [];

  constructor(amount: number, tickets: Array<Ticket>) {
    this.amount = amount;
    this.tickets = tickets;
  }

  public sellTicketTo(audience: Audience) {
    this.plusAmount(audience.buy(this.getTicket()));
  }

  private getTicket(): Ticket {
    return this.tickets.pop();
  }
  
  private plusAmount(amount: number): void {
    this.amount += amount;
  }
}