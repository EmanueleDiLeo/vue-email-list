const { createApp} = Vue;

createApp({

  data(){
    return{
      apiEmail:"https://flynn.boolean.careers/exercises/api/random/mail",
      arrayEmail: [],
      maxEmail: 10,
    }
  },

  methods:{
    getApi(){
      for(let i= 0; i < this.maxEmail; i++){
        axios.get(this.apiEmail)
        .then((response) => {
          this.arrayEmail.push(response.data.response)
        })
        .catch((error) => {
          console.log(error.data.response)
        })
      }
        
    }
  },

  mounted(){
    this.getApi();
    console.log(this.arrayEmail);
  },

}).mount("#app")