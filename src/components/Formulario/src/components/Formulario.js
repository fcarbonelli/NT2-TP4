
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      stringLengthMin: 3,
      stringLengthMax: 15,
      listaNotas: [],
      notaVerde: false,
      notaRoja: false,
      notaAmarilla: false,

    }
  },
  computed: {
    promedio: function () {
      let sum = 0;
      this.listaNotas.nota.forEach(n => {
        sum += n.nota;
      });
      return sum / this.listaNotas.nota.length;
    }
  },
  mounted () {

  },
  methods: {
    getInicialData(){
      return {
        nombre: "",
        apellido: "",
        nota:""       
      }
    },
    enviar(){
      this.listaNotas.push(this.formData)
      this.formData = this.getInicialData()
      this.formState._reset()    
    },  
    
    
  }
}


