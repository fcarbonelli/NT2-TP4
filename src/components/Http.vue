<template>
  <div class="Http">
    <div class="jumbotron">
      <hr>
      <h4>Http</h4>
      <hr>
      <button class="btn btn-success my-3" @click="GetPost()">Pedir XMLHttpRequest</button>
      <button class="btn btn-warning my-3" @click="getPostFetch()">Pedir Fetch</button>
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
      url:"https://60aec1525b8c300017deb313.mockapi.io/nombre",
      listaUsuarios: []
    }
  },
  methods: {
    GetPost() {
      let xhr = new XMLHttpRequest

      xhr.open('get', this.url)
      xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
          let response = JSON.parse(xhr.response)
          this.listaUsuarios = response
        }
        else {
          console.error(`Error en GET`)
        }
      })
      xhr.addEventListener('error', e => {
          console.error(`Error XMLHttpRequest ->`, e)
      })

        xhr.send()
    },
    getPostFetch() {      
      fetch(this.url)
          .then(data => data.json())
          .then(res => {
            this.listaUsuarios = res
          })
          .catch(error => console.error(error))
    },
    getPostAxios(){
      this.axios(this.url)
      .then(respuesta => {
        console.log("axios", respuesta.data)
        this.listaUsuarios = respuesta.data
      })
      .catch(error => console.error(error))
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
