<script>

import { IMaskDirective } from "vue-imask";

export default {
    name: 'Form',

    props: ['reserve-list'],

    data: () => {
        return {
            phoneMask: {
                mask: '+{7} (000) 000 00 00',
            },

            showReserveList: false,

            reserve: '',
            adults: 1,
            children: 0,
            fullName: '',
            phone: '',
            email: '',
            dateArrival: '',
            dateDeparting: '',

            peopleLimit: 999,
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
                case 'adults': this.adults < this.peopleLimit ? this.adults++ : '';
                    break;
                case 'children': this.children < this.peopleLimit ? this.children++ : 0;
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

        validate: function() {

            if ( !this.reserve.trim().length ) this.errors.push('Выберите заповедник');

            if ( this.phone.length === 0 ) this.errors.push('Не указан телефон');
            else if ( this.phone.length < 11 ) this.errors.push('Телефон указан некорректно');

            if ( !this.fullName.length ) this.errors.push('Укажите контактное лицо');
        },

        sendForm: function(event) {

            event.preventDefault();
            this.errors = [];
            this.validate();

            if ( this.errors.length ) {
                return;
            }

            const formData = this.getFormData;
 
            fetch('/api/feedback/questions', {
                method: "POST",
                body: JSON.stringify(formData),
            }).then(response => {
                if ( response.ok ) {
                    this.$noty('information', 'Заявка успешно отправлена')
                    this.resetForm();
                } else {
                    switch (response.status) {
                        case 422: this.$noty('error', 'Некорректные данные');
                            break;
                        default: throw Error
                    }
                }
            }).catch(err => {
                console.log(err)
                this.$noty('error', 'Произошла ошибка при отправке данных');                
            });
        },

        resetForm: function() {
            this.reserve = '';
            this.adult = 1;
            this.childre = 0;
            this.fullName = '';
            this.phone = '';
            this.email = '';
            this.dateArrival = '';
            this.dateDeparting = '';
        },
    },

    computed: {

        getFormattedArrival: function() {

            const date = this.dateArrival;
            if ( !date.length ) return '';
            const arr = date.split('-');

            return arr.reverse().join('.');
        },

        getFormattedDeparting: function() {

            const date = this.dateDeparting;
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

            if ( this.dateArrival.length ) return this.dateArrival;
            return this.getMinArrival;
        },
        
        getFormData: function() {
            const data = {
                reserve: this.reserve,
                adults: this.adults,
                name: this.fullName,
                phones: [ this.phone ],
            }

            this.email.length ? data.emails = [ this.email ] : '';
            this.children > 0 ? data.dateArrival = [ this.children ] : '';
            this.dateArrival.length ? data.dateArrival = this.dateArrival : '';
            this.dateDeparting.length ? data.dateDeparting = this.dateDeparting : '';

            return data;
        }
    },

    watch: {},

    directives: {
        imask: IMaskDirective,
    },

    created() {},
    mounted() {},
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
            @keydown.prevent
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
                    v-model="dateArrival"   
                    :min="getMinArrival"             
                )
                .input.contacts__form-label-text Дата приезда: {{ getFormattedArrival }}
                    svg.icon
                        use(href="icons/icons.svg#calendar")
        .contacts__form-group
            label.input.contacts__form-label.date
                input.contacts__form-input.date(type="date"
                    name="departing"
                    v-model="dateDeparting"
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