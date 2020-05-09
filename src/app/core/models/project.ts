
export class Project {
  constructor(
    public title: string,
    public description: string,
    public manager: string = null,
    public developers: string[]= []
  ) {
  }
}
