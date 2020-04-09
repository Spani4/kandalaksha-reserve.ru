import Vue from "vue";

import form from "../../vue/contacts-form.vue";
import noty from "../components/showNoty";

Vue.prototype.$noty = noty;

export default function() {

    const vm = new Vue({
        // name: 'Contacts-Form',
        el: '#contacts',
        components: {
            'contacts-form': form,
        },
    });

}