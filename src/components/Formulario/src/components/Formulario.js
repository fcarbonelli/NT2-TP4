
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMax: 15,
    }
  },
  computed: {
    listaUsuarios() {
      return this.$store.state.listaUsuarios;
    }
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
    async getUsuarios(){
      this.$store.dispatch('getUserAxios');
    },
    async postUsuario(){
      this.$store.dispatch('postUserAxios', this.formData);
    }
  }
}


