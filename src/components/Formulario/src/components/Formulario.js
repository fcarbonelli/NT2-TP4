
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMax: 15,
      listaUsuarios: []
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
    }
  }
}


