class Bag {
  private amount: number;
  private invitation: Invitation;
  private ticket: Ticket;

  constructor(invitation: Invitation = null, amount: number) {
    this.invitation = invitation;
    this.amount = amount;
  }

  public hold(ticket: Ticket): number {
    if (this.hasInvitation()) {
      this.setTicket(ticket);
      return 0;
    } else {
      this.setTicket(ticket);
      this.minusAmount(ticket.getFee());
      return ticket.getFee();
    }
  }
  
  private hasInvitation(): boolean {
    return this.invitation != null;
  }

  private setTicket(ticket: Ticket): void {
    this.ticket = ticket;
  }

  private minusAmount(amount: number): void {
    this.amount -= amount;
  }

  public plusAmount(amount: number): void {
    this.amount += amount;
  }
}