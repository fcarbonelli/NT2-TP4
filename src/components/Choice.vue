<template>
  <div class="Choice">
    <div class="jumbotron">
      <hr>
      <h4>Choice</h4>
      <hr>


      <table class="table container-sm mt-5">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Numero de pregunta</th>
          <th scope="col">Respueta</th>         
        </tr>
      </thead>
    
      <tbody>
        <tr v-for="(respuesta, index) in respuestas" :key="index">

          <td>{{respuesta.numero}}</td>
          <td>{{respuesta.respuesta}}</td>

 
        </tr>
      </tbody>
    </table>   
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Choice',
  data(){
    return{
      respuestas: [
        {numero: 1, respuesta:["c"]},
        {numero: 2, respuesta:["c"]},
        {numero: 3, respuesta:["a"]},

      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.jumbotron{
  background-color: rgb(180, 164, 164);
  color: rgb(59, 57, 57);
  
}
</style>
