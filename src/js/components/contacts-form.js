import Vue from "vue";

import form from "../../vue/contacts-form.vue";

export default function() {

    const vm = new Vue({
        // name: 'Contacts-Form',
        el: '#contacts',
        components: {
            'contacts-form': form,
        },
    });

}