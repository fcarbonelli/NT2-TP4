
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
    promedio: function(){
      var total = 0;
      for(var i = 0; i < this.listaNotas.nota.length; i++) {
          total += this.listaNotas.nota[i];
      }
      var avg = total / this.listaNotas.nota;
      return avg
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
      this.setColor(this.formData.nota)
      this.formData = this.getInicialData()
      this.formState._reset()    
    },  
    setColor(nota)
    {
      if (nota >= 0 && nota <=3) {
        this.notaRoja = true;
        this.notaVerde = false;
        this.notaAmarilla = false;
      }
      if(nota >= 4 && nota <=6) {
        this.notaRoja = false;
        this.notaVerde = false;
        this.notaAmarilla = true;
      }if(nota >= 7 && nota <=10) {
        this.notaRoja = false;
        this.notaVerde = true;
        this.notaAmarilla = false;
      }
    }
    
  }
}


