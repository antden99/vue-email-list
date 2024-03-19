console.log("tutto ok");



const { createApp } = Vue
createApp({
    data() {
        return {
            emailList: [],
        }
    },
    methods: {
        callApi() {
            for (let i = 0; i < 10; i++) {

                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        console.log(response.data.response);
                        this.emailList.push(response.data.response)
                    })
            }
        }
    },
    mounted() {
        this.callApi()
    }

}).mount('#app')