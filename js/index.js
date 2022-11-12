class Vue {
    constructor(param) {
        
    }

}

new Vue({
    el: '#input-password',
    data: {
        correctPassword: "admin"
    },

    methods: {
        checkOut(currentValue){
            if (currentValue === this.correctPassword)
                alert("правильный пароль")
        }


    }


});