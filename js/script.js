// https://flynn.boolean.careers/exercises/api/random/mail
// Oggetto Vue
const app = new Vue( {
    el: '#root',
    data: {
        mails: []
    },
    created() {
        this.generateMails();
    },
    methods: {
        generateMails() {
            for(let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    this.mails.push(resp.data.response); 
                });
            }
        }
    }
}
);