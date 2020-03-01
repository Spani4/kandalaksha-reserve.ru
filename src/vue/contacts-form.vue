<script>

import { IMaskDirective } from "vue-imask";

export default {
    name: 'Form',

    data: () => {
        return {
            phoneMask: {
                mask: '+{7} (000) 000 00 00',
            },


            reserve: '',
            adults: 1,
            children: 0,
            fullName: '',
            phone: '',
            email: '',

            date: {
                arival: '',
                departing: '',
            }

        };
    },

    methods: {
        increase: function(age) {

            switch (age) {
                case 'adults': this.adults++;
                    break;
                case 'children': this.children++;
            }
        },

        decrease: function(age) {

            switch (age) {
                case 'adults': if ( this.adults > 0 ) this.adults--;
                    break;
                case 'children': if ( this.children > 0 ) this.children--;
            }            
        },

        setPhone(e) {
            this.phone = e.detail.unmaskedValue;
        }
    },

    computed: {},

    directives: {
        imask: IMaskDirective,
    },

    created() {}
};
</script>

<template lang="pug">

form.contacts__form
    .contacts__form-row
        input.contacts__form-input(type="text", placeholder="Выберите заповедник*")
    
    .contacts__form-row.people-amount
        .contacts__form-group.people-amount
            button.contacts__form-btn(type="button"
                @click="decrease('adults')") -
            input.contacts__form-input.hidden(:value="adults")                        
            .contacts__form-input.fake Взрослые: {{ adults }}
            button.contacts__form-btn(type="button"
                @click="increase('adults')") +
        .contacts__form-group.people-amount
            button.contacts__form-btn(type="button"
                @click="decrease('children')") -
            input.contacts__form-input.hidden(:value="children")
            .contacts__form-input.fake Дети до 14 лет: {{ children }}
            button.contacts__form-btn(type="button"
                @click="increase('children')") +
    
    .contacts__form-row
        input.contacts__form-input(type="text" placeholder="ФИО контактного лица*")
    
    .contacts__form-row
        .contacts__form-group
            input.contacts__form-input(type="text", placeholder="+7 (999) 999 99 99*"
                :value="phone"
                v-imask="phoneMask"
                @complete="setPhone"
                @accept="setPhone")
        .contacts__form-group
            input.contacts__form-input(type="email", placeholder="ivanov@gmail.com")
    
    .contacts__form-row
        .contacts__form-group
            label.input.contacts__form-label.date
                input.contacts__form-input.date(type="date")
                .input.contacts__form-label-text Дата приезда
                    svg.icon
                        use(href="icons/icons.svg#calendar")
        .contacts__form-group
            label.input.contacts__form-label.date
                input.contacts__form-input.date(type="date")
                .input.contacts__form-label-text Дата отъезда
                    svg.icon
                        use(href="icons/icons.svg#calendar")

    .contacts__form-row
        label.input.contacts__form-file-label 
            svg.icon
                use(href="icons/icons.svg#attache")
            span Прикрепить файл
            input(type="file" hidden) 
    .contacts__form-row
        input.contacts__form-send-btn(type="submit", value="Отправить")
        
</template>