export default class Model {
    constructor() {
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos'));
        if (!this.todos || this.todos.length < 1) {
            this.todos = [
                {
                    id: 0,
                    title: 'Learn JS',
                    description: 'watch JS Tutorials',
                    completed: false,
                }
            ]
            this.currentId = 1;
        } else {
            this.currentId = this.todos[this.todos.length - 1].id + 1;

        }


    }
    setView(view) {
        this.view = view;
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getTodos(todos) {
        return this.todos;
    }
    findTodo(id) {
        return this.todos.findIndex((todo) => todo.id === id);
    }
    toggleCompleted(id) {
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;       
        console.log(this.todos);
        this.save();
    }
    addTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false,
        }
        this.todos.push(todo);
        console.log(this.todos);
        this.save();

        return { ...todo };
    }
    removeTodo(id) {
        const index = this.findTodo(id);
        this.todos.slice(index, 1);
        this.save();
    }
}