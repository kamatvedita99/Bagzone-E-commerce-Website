<template>
  <div>
    <div class="checkout-box">
      <ul class="checkout-list">
        <li v-for="(product, index) in getProductsInCart" :key="index" class="checkout-product">
          <img :src="product.image" alt class="product-image" />
          <h3 class="product-name">{{ product.name }}</h3>
          <span class="product-price">Rs. {{ product.price }}</span>
          <q-btn icon="delete" class="product-remove" @click="remove(index)"></q-btn>
        </li>
      </ul>
      <div v-if="!hasProduct()" class="checkout-message">
        <h3>No products...</h3>
        <router-link to="./">Back to list of products</router-link>
      </div>
      <h3 class="total" v-if="hasProduct()">Total: Rs. {{ totalPrice() }}</h3>
    </div>
    <div class="q-pa-sm row items-start q-gutter-xl">
      <router-link to="/">
        <q-btn color="negative">Back</q-btn>
      </router-link>

      <q-btn v-if="hasProduct()" color="positive" @click="prompt = true">Pay Now</q-btn>
      <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 400px">
          <q-card-section>
            <div class="text-h6">Your Name</div>
          </q-card-section>

          <q-card-section>
            <q-input
              dense
              v-model="name"
              autofocus
              @keyup.enter="prompt = false"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
              ref="name"
            />
          </q-card-section>

          <q-card-section>
            <div class="text-h6">Your address</div>
          </q-card-section>
          <q-card-section>
            <q-input
              dense
              v-model="address"
              autofocus
              @keyup.enter="prompt = false"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
              ref="address"
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Submit" @click="complete=true" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="complete" persistent transition-show="scale" transition-hide="scale">
        <q-card class="bg-teal text-white" style="width: 300px">
          <q-card-section>
            <div class="text-h6">Payment Issues</div>
          </q-card-section>

          <q-card-section>
            <h6>
              Sorry,payment has not been integrated yet!
              <br />We would do it soon!
              <br />Happy Shopping
            </h6>
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      prompt: false,
      address: "",
      name: "",
      complete: false
    };
  },
  components: {},
  computed: {
    ...mapGetters(["getProductsInCart"])
  },

  methods: {
    ...mapActions(["removeProduct"]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce(
        (current, next) => current + next.price,
        0
      );
    },
    remove(index) {
      this.removeProduct(index);
    }
  }
};
</script>

<style scoped>
.checkout-box {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  box-sizing: border-box;
  padding: 1em;
}

.checkout-list {
  padding: 0;
}

.checkout-product {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 0.5fr;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
  border-radius: 5px;
  list-style: none;
  box-sizing: border-box;
  padding: 0.8em;
  margin: 1em 0;
}

.checkout-product * {
  place-self: center;
}
.product-image {
  width: 50%;
}

.product-name {
  box-sizing: border-box;
}

.product-price {
  font-size: 1.2em;
  font-weight: bold;
}

.product-remove {
  background-color: #e0e0e0;
  cursor: pointer;
}

.total {
  font-size: 2em;
  font-weight: bold;
  align-self: flex-end;
}

.checkout-message {
  font-size: 1.5em;
}
.q-btn {
  padding: 0.7em 5em;
}
</style>
