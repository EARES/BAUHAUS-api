<template>
<div  class="ortala">
    <h3>SİPARİŞ</h3>
    <hr>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="E-posta:"
                    label-for="email"
                    class="mylabel"
                   >
        <b-form-input id="email"
                      type="email"
                      v-model="form.email"
                      class="myinput"
                      required
                      placeholder="E-POST ADRESİNİZ">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Sipariş Numarası:"
                    class="mylabel"
                    label-for="order_id">
        <b-form-input id="order_id"
                      type="text"
                      v-model="form.order_id"
                      class="myinput"
                      required
                      placeholder="SİPARİŞ NUMARANIZ">
        </b-form-input>
      </b-form-group>
   
    <p>Sipariş numaranızı "Güncel &amp; Geçmiş Siparişler" linkinde ve size gönderilen e-faturada bulabilirsiniz.</p>

          <strong>Sipariş iade talebi siparişin teslim tarihinden sonraki 14 gün içerisinde yapılabilir.</strong>
 
      
      <b-button style="float: right;   color: #ffffff !important;
    border-color: #000000;
    background-color: #df0022;
    box-shadow: 2px 2px 0 #000000 !important;
    border-radius: 0px;
    font-weight: 400;
    font-size: 14px;" type="submit" variant="danger" size="lg">
    
    DEVAM
    
    </b-button>
    </b-form>
  </div>
</template>

<script>
 var newObj = null;
export default {
  name: "Home",
  data() {
    return {
      form: {
        email: "",
        order_id: ""
      },
      products: [],
      show: true
    };
  },
 
  methods: {

       getPeople: function () { 
      this.products = [];
      axios.get('http://bauhaus.test.alegra.io/plugin/alegra/rma-form?email=' + this.form.email + '&order_id=' + this.form.order_id)
     // axios.get('https://jsonplaceholder.typicode.com/users')
      .then((rsp)=>{

        this.products = rsp.data;
        console.log(this.products)
        
          if(rsp.data.success == false)
        {
            alert(rsp.data.message);
        }
        else
        {
          newObj = this.products.map(function(v){
            return {name: v.name, email: v.email};
            });
            this.$router.push({ name: 'data', params: { newObj }})
         this.$router.push({
          
          path: "/iade",
        })
       
        }  
          
          
        
      })
      
   },
    onSubmit(evt) {
      evt.preventDefault();
      this.getPeople();
    }
  }
};
</script>
<style>
hr {
  margin-left: -20px;
  margin-right: -20px;
  border-top-color: #e0e0e0 !important;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
  box-sizing: content-box;
  height: 0;
}
body {
  font-family: "Roboto", sans-serif;
  background-color: #ffffff;
  color: #000000;
  padding-left: 10%;
  font-size: 14px;
}

.ortala {
  width: 1024px;
  height: 375px;
  padding-top: 0;
  border: solid 1px #e0e0e0 !important;
  padding: 20px;
}
h3 {
  text-align: center;
  background-color: #f9f9f9;
  margin: -20px -20px -20px;
  height: 70px;
  line-height: 70px;
  font-size: 28px;
  font-weight: 600;
  color: #3c434e;
}
.mylabel {
  font-weight: bold;
}
.myinput {
  background-color: #ffffff;
  border-color: #000000;
  color: #000000;
  font-size: 14px;
  border-radius: 0;
  box-shadow: 2px 2px 0 #bebebe !important;
}
</style>
