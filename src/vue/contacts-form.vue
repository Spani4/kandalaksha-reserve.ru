<script>

import { IMaskDirective } from "vue-imask";

export default {
    name: 'Form',

    data: () => {
        return {
            phoneMask: {
                mask: '+{7} (000) 000 00 00',
            },

            reserveList: ['Reserve 1', 'Reserve 2', 'Reserve 3', 'Reserve 4'],
            showReserveList: false,

            reserve: '',
            adults: 1,
            children: 0,
            fullName: '',
            phone: '',
            email: '',

            date: {
                arrival: '',
                departing: '',
            },

            errors: [],

        };
    },

    methods: {

        toggleReserveList: function() {

            this.showReserveList = !this.showReserveList;
        },

        preventInput: function(event) {
            event.preventDefault();
        },

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

        setPhone: function(e) {
            this.phone = e.detail.unmaskedValue;
        },

        sendForm: function(event) {

            this.errors = [];
            this.validate();
            if ( this.errors.length ) event.preventDefault();
        },

        validate: function() {

            if ( !this.reserve.trim().length ) this.errors.push('Выберите заповедник');

            if ( this.phone.length === 0 ) this.errors.push('Не указан телефон');
            else if ( this.phone.length < 11 ) this.errors.push('Телефон указан некорректно');

            if ( !this.fullName.length ) this.errors.push('Укажите контактное лицо');
        }
    },

    computed: {

        getFormattedArrival: function() {

            const date = this.date.arrival;
            if ( !date.length ) return '';
            const arr = date.split('-');

            return arr.reverse().join('.');
        },

        getFormattedDeparting: function() {

            const date = this.date.departing;
            if ( !date.length ) return '';
            const arr = date.split('-');

            return arr.reverse().join('.');
        },

        getMinArrival: function() {
            
            const now = new Date();
            const minYear = now.getFullYear();
            const minMonth = (now.getMonth() + 1) >= 10 ? (now.getMonth() + 1) : `0${now.getMonth() + 1}`;
            const minDate = now.getDate() >= 10 ?  now.getDate()  : `0${now.getDate()}`;

            return `${minYear}-${minMonth}-${minDate}`;
        },

        getMinDeparting: function() {

            if ( this.date.arrival.length ) return this.date.arrival;
            return this.getMinArrival;
        }
    },

    directives: {
        imask: IMaskDirective,
    },

    created() {}
};
</script>

<template lang="pug">

form.contacts__form(
    @submit="sendForm"
)
    .contacts__form-row
        //- .contacts__form-reserve-picker
        input.contacts__form-input(type="text", placeholder="Выберите заповедник*"
            name="reserve"
            autocomplete="off"
            v-model="reserve"
            @keydown="preventInput"
            @click="toggleReserveList"
        )
        .contacts__form-reserve-list(
            :class="{hidden: !showReserveList}"
        )
            label.contacts__form-reserve-item(
                v-for="(reserveName, i) in reserveList"
            ) {{ reserveName }}
                input.contacts__form-reserve-radio(
                    type="radio"
                    name="reserve"
                    :value="reserveName"
                    v-model="reserve"
                    @click="toggleReserveList"                
                )
    
    .contacts__form-row.people-amount
        .contacts__form-group.people-amount
            button.contacts__form-btn(type="button"
                @click="decrease('adults')") -
            input.contacts__form-input.hidden(:value="adults", name="adults")                        
            .contacts__form-input.fake Взрослые: {{ adults }}
            button.contacts__form-btn(type="button"
                @click="increase('adults')") +
        .contacts__form-group.people-amount
            button.contacts__form-btn(type="button"
                @click="decrease('children')") -
            input.contacts__form-input.hidden(:value="children", name="chilren")
            .contacts__form-input.fake Дети до 14 лет: {{ children }}
            button.contacts__form-btn(type="button"
                @click="increase('children')") +
    
    .contacts__form-row
        input.contacts__form-input(type="text" placeholder="ФИО контактного лица*"
            name="fullName"
            v-model="fullName"
        )
    
    .contacts__form-row
        .contacts__form-group
            input.contacts__form-input(type="text", placeholder="+7 (999) 999 99 99*"
                name="phone"
                :value="phone"
                v-imask="phoneMask"
                @complete="setPhone"
                @accept="setPhone")
        .contacts__form-group
            input.contacts__form-input(type="email", placeholder="ivanov@gmail.com", name="email")
    
    .contacts__form-row
        .contacts__form-group
            label.input.contacts__form-label.date
                input.contacts__form-input.date(type="date"
                    name="arrival"
                    v-model="date.arrival"   
                    :min="getMinArrival"             
                )
                .input.contacts__form-label-text Дата приезда: {{ getFormattedArrival }}
                    svg.icon
                        use(href="icons/icons.svg#calendar")
        .contacts__form-group
            label.input.contacts__form-label.date
                input.contacts__form-input.date(type="date"
                    name="departing"
                    v-model="date.departing"
                    :min="getMinDeparting"
                )
                .input.contacts__form-label-text Дата отъезда: {{ getFormattedDeparting }}
                    svg.icon
                        use(href="icons/icons.svg#calendar")

    .contacts__form-row
        label.input.contacts__form-file-label 
            svg.icon
                use(href="icons/icons.svg#attache")
            span Прикрепить файл
            input.hidden(type="file", name="file", hidden) 
    .contacts__form-row
        input.contacts__form-send-btn(type="submit", value="Отправить")
        ul.contacts__form-errors(
            v-if="errors.length > 0"
        )
            li.contacts__form-error(
                v-for="(error, i) in errors"
            ) {{ error }}

        
</template>