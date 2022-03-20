export class BaseCollection {
  public name: string | undefined;
  public fields!: any[];
  public actions!: any[];

  initialize(){
   console.log('name', this.name);
   console.log('fields', this.fields);
   console.log('actions', this.actions);
  }
}
