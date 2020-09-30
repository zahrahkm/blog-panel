import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret ,faSpinner} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret,faSpinner)


Vue.component('fa-icon',FontAwesomeIcon)