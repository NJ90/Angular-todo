export class Todo {
    id: number;                  //number, ID of the todo item
    title: string = '';          //string, title of the todo item
    complete: boolean = false;   //boolean, whether or not the todo item is complete

    constructor(values: Objaect = {}) {
        Object.assign(this, values);
    }
}
