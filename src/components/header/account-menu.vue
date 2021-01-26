<template>
    <div class="account-menu">
        <form class="account-menu__form">
            <div class="account-menu__form-title">
             Войдите в свой аккаунт
            </div>
            <div class="form-group">
                <label for="header-signin-email" class="sr-only">Адрес электронной почты</label>
                <input id="header-signin-email" type="email" class="form-control form-control-sm" placeholder="Email address">
            </div>
            <div class="form-group">
                <label for="header-signin-password" class="sr-only">Парорль</label>
                <div class="account-menu__form-forgot">
                    <input id="header-signin-password" type="password" class="form-control form-control-sm" placeholder="Password">
                    <a href="" class="account-menu__form-forgot-link">Забыл?</a>
                </div>
            </div>
            <div class="form-group account-menu__form-button">
                <button type="submit" class="btn btn-primary btn-sm">
                    Логин
                </button>
            </div>
            <div class="account-menu__form-link">
                <AppLink :to="$url.signUp()">
                   Создать учетную запись
                </AppLink>
            </div>
        </form>
        <div class="account-menu__divider" />
        <AppLink :to="$url.account()" class="account-menu__user">
            <div class="account-menu__user-avatar">
                <img :src="$url.img('/images/avatars/avatar-3.jpg')" alt="">
            </div>
            <div class="account-menu__user-info">
                <div class="account-menu__user-name">
                    Helena Garcia
                </div>
                <div class="account-menu__user-email">
                    stroyka@example.com
                </div>
            </div>
        </AppLink>
        <div class="account-menu__divider" />
        <ul class="account-menu__links">
            <li>
                <AppLink :to="$url.accountProfile()">
                   Редактировать Профиль
                </AppLink>
            </li>
            <li>
                <AppLink :to="$url.accountOrders()">
                   История Заказов
                </AppLink>
            </li>
            <li>
                <AppLink :to="$url.accountAddresses()">
                  Адрес
                </AppLink>
            </li>
            <li>
                <AppLink :to="$url.accountPassword()">
                    Пароль
                </AppLink>
            </li>
        </ul>
        <div class="account-menu__divider" />
        <ul class="account-menu__links">
            <li>
                <AppLink :to="$url.signOut()">
                    Выход 
                </AppLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import AppLink from '~/components/shared/app-link.vue'

@Component({
    components: { AppLink }
})
export default class AccountMenu extends Vue { }

</script>
