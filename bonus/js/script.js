const app = Vue.createApp({
    data() {
        return {
            message: "Hello World!",
            image: "./img/05.webp",
            alt: "Avengers_img",
        }
    }
})

app.mount('#app')