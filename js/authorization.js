const Authorization = {
    data(){
        return {
            login: 'admin',
            password: 'admin',
            correctAnswer: false,
            currentLogin: '',
            currentPassword: ''
        }
    },
    methods:{
        authentication(){
            if (this.currentLogin === this.login && this.currentPassword === this.password){
                this.correctAnswer = true
            }
        }

    },

}

Vue.createApp(Authorization).mount('#authorization')