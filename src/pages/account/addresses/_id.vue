<template>
    <AccountLayout>
        <div class="card">
            <div class="card-header">
                <h5>Изменить Адрес</h5>
            </div>
            <div class="card-divider" />
            <div class="card-body">
                <div class="row no-gutters">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="checkout-first-name">Имя</label>
                                <input
                                    id="checkout-first-name"
                                    class="form-control"
                                    type="text"
                                    placeholder="First Name"
                                >
                            </div>
                            <div class="form-group col-md-6">
                                <label for="checkout-last-name">Фамилия</label>
                                <input
                                    id="checkout-last-name"
                                    class="form-control"
                                    type="text"
                                    placeholder="Last Name"
                                >
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="checkout-company-name">
                               Название компании
                                <span class="text-muted">(Необязательный)</span>
                            </label>
                            <input
                                id="checkout-company-name"
                                class="form-control"
                                type="text"
                                placeholder="Company Name"
                            >
                        </div>
                        <div class="form-group">
                            <label for="checkout-country">Страна</label>
                            <select id="checkout-country" class="form-control form-control-select2">
                                <option>Выберите страну...</option>
                                <option>Шымкент </option>
                                <option>Алматы</option>
                                <option>Қызылорда</option>
                                <option>France</option>
                                <option>Ukraine</option>
                                <option>Germany</option>
                                <option>Australia</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="checkout-street-address">адрес улицы</label>
                            <input
                                id="checkout-street-address"
                                class="form-control"
                                type="text"
                                placeholder="Street Address"
                            >
                        </div>
                        <div class="form-group">
                            <label for="checkout-address">
                Квартира, люкс, квартира и т. Д.
                                <span class="text-muted">(Необязательный)</span>
                            </label>
                            <input
                                id="checkout-address"
                                class="form-control"
                                type="text"
                            >
                        </div>
                        <div class="form-group">
                            <label for="checkout-city">Город / Город</label>
                            <input
                                id="checkout-city"
                                class="form-control"
                                type="text"
                            >
                        </div>
                        <div class="form-group">
                            <label for="checkout-state">Штат / округ</label>
                            <input
                                id="checkout-state"
                                class="form-control"
                                type="text"
                            >
                        </div>
                        <div class="form-group">
                            <label for="checkout-postcode">Почтовый индекс </label>
                            <input
                                id="checkout-postcode"
                                class="form-control"
                                type="text"
                            >
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="checkout-email">Емайл адрес</label>
                                <input
                                    id="checkout-email"
                                    class="form-control"
                                    type="email"
                                    placeholder="Email address"
                                >
                            </div>
                            <div class="form-group col-md-6">
                                <label for="checkout-phone">Телефон</label>
                                <input
                                    id="checkout-phone"
                                    class="form-control"
                                    type="text"
                                    placeholder="Phone"
                                >
                            </div>
                        </div>

                        <div class="form-group mt-3 mb-0">
                            <button class="btn btn-primary" type="button">
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AccountLayout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import AccountLayout from '~/components/account/account-layout.vue'

@Component({
    components: { AccountLayout },
    head: { title: 'Edit Address' }
})
export default class Page extends Vue { }

</script>
