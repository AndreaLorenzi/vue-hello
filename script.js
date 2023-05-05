const app = Vue.createApp({

 data(){
    return{
        message: 'Hello Vue',
        title: ['text-danger', 'text-center'],
        image: 'image/pino.webp',
    }
 },
});

app.mount('#root');