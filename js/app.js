const App = {
    data(){
        return {
            counter: 0
        }
    },
    methods:{
        increment(){
            this.counter++
        }
    }
}

Vue.createApp(App).mount('#app')