<template>
  <div>
    <client-only>
      <PageHeader
        title="Корзина"
        :breadcrumb="[
          { title: 'Главная', url: '' },
          { title: 'Корзина', url: '' },
        ]"
      />

      <div v-if="!cart.quantity" class="block block-empty">
        <div class="container">
          <div class="block-empty__body">
            <div class="block-empty__message">Ваша корзина пуста!</div>
            <div class="block-empty__actions">
              <AppLink to="/" class="btn btn-primary btn-sm">
                Продолжить
              </AppLink>
            </div>
          </div>
        </div>
      </div>

      <div v-if="cart.quantity" class="cart block">
        <div class="container">
          <table class="cart__table cart-table">
            <thead class="cart-table__head">
              <tr class="cart-table__row">
                <th class="cart-table__column cart-table__column--image">
                  Фото
                </th>
                <th class="cart-table__column cart-table__column--product">
                  Продукт
                </th>
                <th class="cart-table__column cart-table__column--price">
                  Цена
                </th>
                <th class="cart-table__column cart-table__column--quantity">
                  Количество
                </th>
                <th class="cart-table__column cart-table__column--total">
                  Всего
                </th>
                <th
                  class="cart-table__column cart-table__column--remove"
                  aria-label="Remove"
                />
              </tr>
            </thead>
            <tbody class="cart-table__body">
              <tr
                v-for="item in cart.items"
                :key="item.id"
                class="cart-table__row"
              >
                <td class="cart-table__column cart-table__column--image">
                  <div
                    v-if="item.product.images.length > 0"
                    class="product-image"
                  >
                    <AppLink
                      :to="$url.product(item.product)"
                      class="product-image__body"
                    >
                      <!--suppress HtmlUnknownTarget -->
                      <img
                        class="product-image__img"
                        :src="$url.img(item.product.images[0])"
                        alt=""
                      />
                    </AppLink>
                  </div>
                </td>
                <td class="cart-table__column cart-table__column--product">
                  <AppLink
                    :to="$url.product(item.product)"
                    class="cart-table__product-name"
                  >
                    {{ item.product.name }}
                  </AppLink>
                  <ul
                    v-if="item.options.length > 0"
                    class="cart-table__options"
                  >
                    <li v-for="(option, index) in item.options" :key="index">
                      {{ option.optionTitle }}: {{ option.valueTitle }}
                    </li>
                  </ul>
                </td>
                <td
                  class="cart-table__column cart-table__column--price"
                  data-title="Цена"
                >
                  {{ $price(item.price) }}
                </td>
                <td
                  class="cart-table__column cart-table__column--quantity"
                  data-title="Количество"
                >
                  <InputNumber
                    :value="getItemQuantity(item)"
                    :min="1"
                    @input="handleChangeQuantity(item, $event)"
                  />
                </td>
                <td
                  class="cart-table__column cart-table__column--total"
                  data-title="Total"
                >
                  {{ $price(item.total) }}
                </td>
                <td class="cart-table__column cart-table__column--remove">
                  <AsyncAction
                    v-slot:default="{ run, isLoading }"
                    :action="
                      () => $store.dispatch('cart/remove', { itemId: item.id })
                    "
                  >
                    <button
                      type="button"
                      :class="[
                        'btn btn-light btn-sm btn-svg-icon',
                        { 'btn-loading': isLoading },
                      ]"
                      @click="run"
                    >
                      <Cross12Svg />
                    </button>
                  </AsyncAction>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="cart__actions">
            <form class="cart__coupon-form">
              <label for="input-coupon-code" class="sr-only">Пароль</label>
              <input
                id="input-coupon-code"
                class="form-control"
                type="text"
                placeholder="Coupon Code"
              />
              <button type="submit" class="btn btn-primary">
                Применить Купон
              </button>
            </form>
            <div class="cart__buttons">
              <AppLink href="/" class="btn btn-light">
                Продолжить покупки
              </AppLink>
              <AsyncAction
                v-slot:default="{ run, isLoading }"
                :action="() => updateQuantities()"
              >
                <button
                  type="button"
                  :class="[
                    'btn btn-primary cart__update-button',
                    { 'btn-loading': isLoading },
                  ]"
                  :disabled="!cartNeedUpdate()"
                  @click="run"
                >
                  Обновить Корзину
                </button>
              </AsyncAction>
            </div>
          </div>

          <div class="row justify-content-end pt-md-5 pt-4">
            <div class="col-12 col-md-7 col-lg-6 col-xl-5">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Итоги корзины</h3>
                  <table class="cart__totals">
                    <template>
                      <thead class="cart__totals-header">
                        <tr>
                          <th>Промежуточный итог</th>
                          <td>{{ $price(cart.subtotal) }}</td>
                        </tr>
                      </thead>
                      <tbody class="cart__totals-body">
                        <tr
                          v-for="(extraLine, index) in cart.totals"
                          :key="index"
                        >
                          <th>{{ extraLine.title }}</th>
                          <td>
                            {{ $price(extraLine.price) }}
                            <div
                              v-if="extraLine.type === 'shipping'"
                              class="cart__calc-shipping"
                            >
                              <!-- <AppLink to="/"> Calculate Shipping </AppLink> -->
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                    <tfoot class="cart__totals-footer">
                      <tr>
                        <th>Всего</th>
                        <td>{{ $price(cart.total) }}</td>
                      </tr>
                    </tfoot>
                  </table>
                  <AppLink
                    :to="$url.checkout()"
                    class="btn btn-primary btn-xl btn-block cart__checkout-button"
                  >
                    Оформить заказ
                  </AppLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State } from "vuex-class";
import { RootState } from "~/store";
import { Cart, CartItem } from "~/interfaces/cart";
import PageHeader from "~/components/shared/page-header.vue";
import AppLink from "~/components/shared/app-link.vue";
import InputNumber from "~/components/shared/input-number.vue";
import AsyncAction from "~/components/shared/async-action.vue";
import Cross12Svg from "~/svg/cross-12.svg";

export interface Quantity {
  itemId: number;
  value: string | number;
}

@Component({
  components: { PageHeader, AppLink, InputNumber, AsyncAction, Cross12Svg },
  head() {
    return {
      title: "Shopping Cart",
    };
  },
})
export default class Page extends Vue {
  @State((state: RootState) => state.cart) cart!: Cart;

  quantities: Quantity[] = [];

  handleChangeQuantity(item: CartItem, quantity: number) {
    const itemQuantity = this.quantities.find((x) => x.itemId === item.id);

    if (itemQuantity) {
      itemQuantity.value = quantity;
    } else {
      this.quantities.push({
        itemId: item.id,
        value: quantity,
      });
    }
  }

  getItemQuantity(item: CartItem) {
    const quantity = this.quantities.find((x) => x.itemId === item.id);

    return quantity ? quantity.value : item.quantity;
  }

  async updateQuantities() {
    await this.$store.dispatch(
      "cart/updateQuantities",
      this.quantities.map((x) => ({
        ...x,
        value: typeof x.value === "string" ? parseFloat(x.value) : x.value,
      }))
    );
  }

  cartNeedUpdate() {
    return (
      this.quantities.filter((x) => {
        const item = this.cart.items.find((item) => item.id === x.itemId);

        return item && item.quantity !== x.value && x.value !== "";
      }).length > 0
    );
  }
}
</script>
