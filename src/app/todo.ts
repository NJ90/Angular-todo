export class Todo {
    id: number;                  //number, ID of the todo item
    title = '';          //string, title of the todo item
    complete = false;   //boolean, whether or not the todo item is complete

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
