//if you are using bundler like webpack, make sure to declare alpine component logic on window itself
// window.taskApp = ......
let taskApp = () => {
    return {
        tasks: [],
        newTask: '',

        submit() {
            this.tasks.push({ body: this.newTask, completed: false });
            this.newTask = ''
        }
    }
}