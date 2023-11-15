const { createApp } = Vue

createApp({
  data() {
    return {
        message: "Ciao, VueJS!",
        marioImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwNe69WKI3WpzYPySDaNALSPPWXrT9JQO8w&usqp=CAU"
    }
  }  
}).mount('#app')
