const app = new Vue (
    {
        el : '#app',


        data : {
            todoArrayList : [
                {
                    text : 'Pasta',
                    done : false
                },

                {
                    text : 'Carne',
                    done : true
                },

                {
                    text : 'Sugo',
                    done : false
                },

                {
                    text : 'Acqua frizzante',
                    done : false
                },

                {
                    text : 'Gelato al pistacchio',
                    done : true
                }
            ]
        },


        methods : {
            deleteItemTodo : function(indexTodo) {
                this.todoArrayList.splice(indexTodo, 1);
            }
        }
    }
)