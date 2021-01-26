<template>
    <div>
        <PageHeader
            title="Мой Аккаунт"
            :breadcrumb="[
                {title: 'Главная', url: ''},
                {title: 'Breadcrumb', url: ''},
                {title: 'Мой Аккаунт', url: ''},
            ]"
        />

        <div class="block">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-3 d-flex">
                        <div class="account-nav flex-grow-1">
                            <h4 class="account-nav__title">
                                Навигация
                            </h4>
                            <ul>
                                <NuxtLink
                                    v-for="(item, index) in items"
                                    v-slot="{ isActive }"
                                    :key="index"
                                    :to="$url.lang(item.link)"
                                    :exact="true"
                                >
                                    <li
                                        :class="[
                                            'account-nav__item',
                                            {'account-nav__item--active': isActive}
                                        ]"
                                    >
                                        <AppLink :to="item.link">
                                            {{ item.title }}
                                        </AppLink>
                                    </li>
                                </NuxtLink>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-lg-9 mt-4 mt-lg-0">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import PageHeader from '~/components/shared/page-header.vue'
import AppLink from '~/components/shared/app-link.vue'

@Component({
    components: { PageHeader, AppLink }
})
export default class AccountLayout extends Vue {
    data () {
        return {
            items: [
                { title: 'Приборная панель', link: this.$url.accountDashboard() },
                { title: 'Редактировать Профиль', link: this.$url.accountProfile() },
                { title: 'История заказов', link: this.$url.accountOrders() },
                { title: 'Детали заказа', link: this.$url.accountOrder({ id: 5 }) },
                { title: 'Адреса', link: this.$url.accountAddresses() },
                { title: ' Изменить адрес', link: this.$url.accountAddress({ id: 5 }) },
                { title: 'Пароль', link: this.$url.accountPassword() },
                { title: 'Выход из системы', link: this.$url.signIn() }
            ]
        }
    }
}

</script>
