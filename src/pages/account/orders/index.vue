<template>
    <AccountLayout>
        <div class="card">
            <div class="card-header">
                <h5>История заказов</h5>
            </div>
            <div class="card-divider" />
            <div class="card-table">
                <div class="table-responsive-sm">
                    <table>
                        <thead>
                            <tr>
                                <th>Заказ</th>
                                <th>Дата</th>
                                <th>Статус</th>
                                <th>Весь</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="order in orders" :key="order.id">
                                <td>
                                    <AppLink :to="$url.accountOrder(order)">
                                        #{{ order.id }}
                                    </AppLink>
                                </td>
                                <td>{{ order.date }}</td>
                                <td>{{ order.status }}</td>
                                <td>
                                    {{ $price(order.total) }}
                                   для
                                    {{ order.quantity }}
                                    item(s)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card-divider" />
            <div class="card-footer">
                <Pagination :current="page" :total="3" @page-change="setPage" />
            </div>
        </div>
    </AccountLayout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { IOrderSummary } from '~/interfaces/order'
import Pagination from '~/components/shared/pagination.vue'
import AppLink from '~/components/shared/app-link.vue'
import AccountLayout from '~/components/account/account-layout.vue'
import dataAccountOrders from '~/data/accountOrders'

@Component({
    components: { Pagination, AppLink, AccountLayout },
    head: { title: 'Order History' }
})
export default class Page extends Vue {
    page: number = 1

    orders: IOrderSummary[] = dataAccountOrders

    setPage (page: number) {
        this.page = page
    }
}

</script>
