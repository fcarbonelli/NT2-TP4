
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMax: 15,
      listaUsuarios: [],
      url: "https://60aec1525b8c300017deb313.mockapi.io/nombre/"
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData(){
      return {
        nombre: "",
        edad:"",
        email:""
      }
    },
    enviar(){
      this.listaUsuarios.push(this.formData)
      this.formData = this.getInicialData()
      this.formState._reset()    
    },
    async getUsuarios(){
      try{
        let respuesta = await this.axios(this.url)
        console.log("axios get usuarios", respuesta.data)
        this.listaUsuarios= respuesta.data
      }
      catch(error){
        console.error(error)
      }
    },
    async postUsuario(){
      try{
        let respuesta = await this.axios.post(this.url, this.formData, {"content-type": "application/json"})
        console.log("axios post usuarios", respuesta.data)
        this.listaUsuarios.push(respuesta.data)
      }
      catch(error){
        console.error(error)
      }
      this.formData = this.getInicialData()
      this.formState._reset()   
    }
  }
}


