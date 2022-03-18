const app = new Vue (
    {
        el : '#app',


        data : {
            todoArrayList : [],

            newTask : ''
        },


        methods : {
            addItemTodo : function() {
                if (this.newTask.trim() != '') {
                    this.todoArrayList.push({
                        text : this.newTask,
                        done : false
                    });
                    this.newTask = '';
                } else  {
                    this.newTask = '';
                }
                
            },

            deleteItemTodo : function(indexTodo) {
                this.todoArrayList.splice(indexTodo, 1);
            },

            taskCompleted : function(indexOfLi) {
                this.todoArrayList[indexOfLi].done = !this.todoArrayList[indexOfLi].done;
            }
        }
    }
)