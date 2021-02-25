<template>
  <div class="item">
    <div class="upper">
      <div class="imageWrapper">
        <img :src="image" alt="" class="image">
      </div>
      <div class="price">{{ price | priceFilter }}</div>
      <h4 class="title">{{ title | shortTitleFilter }}</h4>
    </div>

    <button @click="addToCart">{{ buttonText }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Base from '../../base.vue';
import { mapState } from 'vuex';
import { ACTION_TYPES } from '../../../store/cart/index';

export default Vue.extend({
  name: 'CatalogListItem',

  mixins: [Base],

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapState('cart', {
      cartItems: state => (state as any).items
    }),
    image(): string {
      return this.item.image;
    },
    price(): number {
      return this.item.price;
    },
    title(): string {
      return this.item.title;
    },
    description(): string {
      return this.item.description;
    },
    buttonText(): string {
      const isAdded = this.cartItems.hasOwnProperty(this.item.id);

      return isAdded ? 'Добавлено' : 'Добавить в корзину';
    }
  },

  watch: {
    buttonText(newValue, oldValue) {
      console.log(newValue, oldValue);
    }
  },

  filters: {
    priceFilter(value: number): string {
      const ret = [];
      const chars = String(value).split('').reverse();

      for (let i = 1; i <= chars.length; i++) {
        ret.push(chars[i - 1]);

        if ((i % 3 === 0) && chars[i]) {  
          ret.push(' ');
        }
      }

      return `${ret.reverse().join('')} ₽`;
    },

    shortTitleFilter(title: string): string {
      return title.length > 60
        ? `${title.substring(0, 57)}...`
        : title;
    }
  },

  methods: {
    addToCart() {
      this.$store.dispatch(`cart/${ACTION_TYPES.ADD_ITEM}`, this.item);
      this.sendAnalytics('add to cart');
    }
  }
})
</script>

<style scoped>
.item {
  max-width: 300px;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
}

.upper {
  display: flex;
  flex-direction: column;
}

.imageWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  margin-bottom: 8px;
}

.image {
  max-width: 250px;
  max-height: 250px;
}

.price {
  margin-bottom: 4px;
  font-weight: bold;
}

.title {
  font-weight: normal;
}
</style>