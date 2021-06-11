import Vue from "vue"
import vueForm from "vue-form"

var options = {
    validators: {
        'espacios-vacios' : function(value) {
            return !value.includes(' ')
        }
    }
}

Vue.use(vueForm, options)