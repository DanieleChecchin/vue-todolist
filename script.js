const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: { text: '', done: false },
            toDoList: [
                { text: 'Fare la spesa', done: false },
                { text: 'Pagare le bollette', done: false },
                { text: 'Controllare le mail', done: true },
                { text: 'Fare la lavatrice', done: false },
                { text: 'Lavare il pavimento', done: true },
                { text: 'Guardare la partita', done: false },
                { text: 'Andare al bar', done: true },
                { text: 'Mettere la sveglia', done: true },
            ]
        }
    },
    methods: {
        deleteTask(index) {
            this.toDoList.splice(index, 1);
        },

        addNewTask(content) {
            this.toDoList.push(content);
            this.clearinput();
        },

        clearinput() {
            this.newTask = ''
        },

        changeDone() {
            if (done === false) {
                done = true;
            } else {
                done = false;
            }
        }
    }
}).mount('#app')

