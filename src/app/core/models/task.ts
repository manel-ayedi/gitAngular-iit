export class Task {
  public id: string;
  constructor(
    public project: string[]= [],
    public assignedTo: string[]= [],
    public status: string,
    public title: string,
    public estimation: string,
    public workedIn: string
  ) {
  }
}
