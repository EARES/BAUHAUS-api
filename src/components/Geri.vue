<template >
<div class="container">
    <h3  class="text-center" style="font-weight:bolder;"> SİPARİŞ NUMARASI: 123 </h3>
	<table id="cart" class="table table-responsive" border="1px solid lightgray">
    				<thead style="background-color: #f9f9f9; border-top: 0.1px solid lightgray;">
						<tr class="names">
                            <th style="width:5%; border-right: 1px solid white;">SEÇ</th>
							<th style="width:50%; border-right: 1px solid white;" class="text-center">ÜRÜN/DURUMU</th>
                            <th style="width:22%; border-right: 1px solid white;" class="text-center ">ADET</th>
							<th style="width:22%" class="text-center ">İADE NEDENİ</th>
						</tr>
					</thead>
					<tbody>
                       
						<tr class="item" v-for="item in liste" :key="item.id">
                            <td data-th="Seç" style="border-right: 1px solid white;">
                            <b-checkbox id="chsec" 
                     v-model="secildi"
                     value="usecildi"
                     unchecked-value="usecilmedi">
                        </b-checkbox>
                            </td>
							<td data-th="Product" style="border-right: 1px solid white; "> 
								<div class="row"  >
									<div class="col-sm-3 ">
                             <img src="https://kickz.akamaized.net/en/media/images/p/600/converse-all_star_ox_canvas-bordeaux-3.jpg" 
                                        class="img-product img-responsive img-rounded"/></div> 
                                         <div class="col-sm-9"   >

										<tweet-component v-for="item in liste" :item="tweet" :key="item" />
									
                                         </div>
								</div>
							</td>
                            <td data-th="Size" class="text-right" style="border-right: 1px solid white;">



                            <b-select v-model="item_id">
                                <option value="">Select Warehouse</option>
                            <option v-for="item in liste" v-bind:value="item.id" :key="item.name" >
                                    {{ item.name }}
                            </option>

                            </b-select >




                            </td>
							<td data-th="Price" class="text-right ">
                            <b-select>
                            </b-select>
                            </td>
							
							
						</tr>
                        
                       
					</tbody>
					<tfoot>
						
            
              <td style='border-right: 1px solid white; border-top: 1px solid white; background-color: #f9f9f9; '>
                  <b-checkbox style="float:right;" id="checkbox1"
                     v-model="status"
                     value="accepted"
                     unchecked-value="not_accepted" >
                      
                  </b-checkbox>


              </td>
              <td style='border-right: 1px solid white; border-top: 1px solid white; background-color: #f9f9f9; font-weight:bolder; text-decoration: underline;'>
                  İade ve gönderim şartlarını okudum ve kabul ediyorum.
              </td>
              <td style='border-right: 1px solid white; border-top: 1px solid white; background-color: #f9f9f9;'></td>
              <td style="border-top: 1px solid white; background-color: #f9f9f9; ">
                  <b-button v-on:click="kontrol" class="mybutton" type="submit" variant="danger" size="lg">
                  DEVAM
                      </b-button>
              </td>
					</tfoot>
				</table>
</div>
    </template>


<script>

export default {
    
  name: "Geri",
  components: 'tweet-component',
 template: `
    <h4>item.name</h4>
    <p>item.number</p>
  `,
  props: {
    tweet: String
  },

  data() {
    var liste = [];
    liste = this.$route.params.newObj;
    //var d = this.$route.params.newObj;
    var status;

    return {
      
      liste,
      status: 'not_accepted',
      secildi: 'usecilmedi'
    };
  },
  methods: {
        kontrol: function(event)
        {
            if(this.status == "not_accepted"  )
             alert("Lütfen şartları kabul ediniz.");
        }
  },

  created() {
       if(this.$route.params.newObj == null)
      alert("Bilgiler getirilemedi..."); 
  },
  


};

</script>
<style>
.container {
  max-width: 1000px;
}
.table > thead > tr.names > th {
  border-bottom: 1px;
}
.table > tbody > tr.item > td {
  padding-bottom: 20px;
  padding-top: 20px;
  vertical-align: middle;
}
.table > tfoot > tr.no-border > td {
  border-top: 0 none;
  padding-top: 20px;
}
.img-product {
  padding-top: 20px;
}
table {
  border: 0.1px solid lightgray;
}
.mybutton
{
    
    float: right;   color: #ffffff !important;
    border-color: #000000;
    width:80%;
    background-color: #df0022;
    box-shadow: 2px 2px 0 #000000 !important;
    border-radius: 0px;
    font-weight: 400;
    font-size: 14px;
                
}
</style>
