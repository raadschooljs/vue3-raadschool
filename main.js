Vue.createApp({
    data() {
      return {
        message: 'Hello Vue!',
        doList:[
          {
            title:"Lorem, ipsum.",
            completed:false,
          },
          {
            title:"Lorem, ipsum dolor.",
            completed:false,
          },
          {
            title:"asjdfasdf ",
            completed:true,
          },
          {
            title:"as4df6 Lorem, ipsum.",
            completed:false,
          },
        ]
      }
    }
  }).mount('#app')