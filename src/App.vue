<template>
  <div>
    <!-- <h1>Session 4</h1>
    <h6>Please  select cetificate type :</h6>
    <select v-model="cetiType" >
      <option> Brith-day</option>
      <option>Marrage</option>
    </select>
    <div id="form">
      <h6>Please fill the form to get {{ cetiType }} </h6>
    </div> -->
  <div>
    <div  class="container">
         <button @click="getAllusers" type="button" class="btn btn-primary" >Show Users</button>
        <table class="table table-bordered" >
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">password</th>
            </tr>
          </thead>
          <tbody>
           <tr  v-for="user in users" v-bind:key= "user.idex">
            <th scope="row">{{user._id}}</th>
            <td>{{ user.name}}</td>
            <td>{{ user.email}}</td>
            <td>{{ user.password}}</td>
          </tr>

      </tbody>
    </table>
   

    </div>
    
  <!-- <div v-for="user in users" v-bind:key= "user.idex">
      <h6>{{ user.name}}</h6>
      <h6>{{ user.email}}</h6>
      <h6>{{ user.password}}</h6>
  </div> -->
  </div>
    <h6> </h6>

  </div>
</template>

<script>
import axios from "axios"
export default {
  
  data(){
    return{
      cetiType:"",
      users:[],
    
    }
    
  },
  methods:{
    getAllusers(){
      axios.get('http://localhost:4000/api/getUsers').then((res)=>{
        this.users=res.data;
         console.log(res.data);

      }).catch(err=> console.log(err))
    },
    // getAllalbems(){
    //   axios.get('http://localhost:4000/getUsers').then((res)=>{
    //       console.log(res.data);
    //       this.albems= res.data;
    //   }
    //   ).catch( err=> console.log(err));

    // },
    getOneAlbem(){
      
    }


},
}

</script>

<style>

</style>
