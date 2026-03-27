export default class TicketsService {
    all_tickets(q: any): Promise<unknown>;
    mis_tickets(): Promise<unknown>;
    ver_ticket(id: string): Promise<unknown>;
    create_ticket(input: any): Promise<unknown>;
    update_ticket(input: any): Promise<unknown>;
    cerrar_ticket(id: any): Promise<unknown>;
}
