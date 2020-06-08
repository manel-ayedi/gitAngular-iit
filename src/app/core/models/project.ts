export class Project {
  public id: string;
  constructor(
    public title: string,
    public description: string,
    public manager: string = null,
    public developers: string[]= []
  ) {
  }
}
