<template>
  <div class="Http">
    <div class="jumbotron">
      <hr>
      <h4>Http</h4>
      <hr>
      
      <button class="btn btn-danger my-3" @click="getPostAxios()">Pedir Axios</button>

      <table v-if="listaUsuarios.length > 0" class="table container-sm mt-5">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Email</th>         
        </tr>
      </thead>
    
      <tbody>
        <tr v-for="(usuario, index) in listaUsuarios" :key="index">
          <th scope="row">{{index + 1}}</th>
          <td>{{usuario.nombre}}</td>
          <td>{{usuario.edad}}</td>
          <td>{{usuario.email}}</td>
        </tr>
      </tbody>
    </table>
    <h4 v-else class="alert alert-danger"> No se encontraron datos!</h4>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Http',
  data(){
    return{
     
    }
  },
  computed: {
    listaUsuarios() {
      return this.$store.state.listaUsuarios;
    }
  },
  methods: {
    getPostAxios(){
      this.$store.dispatch("getUsersAxios")
    }
  }
  /*props: {
    msg: String
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.jumbotron{
  background-color: purple;
  color: white;
}
</style>
