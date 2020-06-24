import Vue from "vue";
import Vuex from "vuex";

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    state: {
      handbags: [
        {
          name: "Fringy Styled handbag",
          price: 2259,
          image: "https://i.imgur.com/RguIXycb.jpg?1",
          details: "Fringy styled bag,quite exceptional and beautiful",
          ratings: 4
        },

        {
          name: "White lacy classic bag",
          price: 2280,
          image: "https://i.imgur.com/BVYUkpWb.jpg",
          details:
            "White and classic giving you a perfect worky and classy look",
          ratings: 2
        },

        {
          name: "Black and brown workbag",
          price: 3200,
          image: "https://i.imgur.com/hJ67fllb.jpg",
          details:
            "black and brown styled bag and making it exceptionally trendy and beautiful!",
          ratings: 3
        },

        {
          name: "Blue stylish bag",
          price: 1900,
          image: "https://i.imgur.com/SpgSL4ib.jpg",
          details:
            "Blue bag with collary handles makes it exceptionally trendy and beautiful!",
          ratings: 1
        },

        {
          name: "Side Compartment mix coloured Bag",
          price: 1209,
          image: "https://i.imgur.com/WpQGh0hb.jpg",
          details:
            "Pink and white stylish bag ,exceptionally trendy and beautiful!",
          ratings: 4
        },

        {
          name: "White and black retro styled bag",
          price: 2999,
          image: "https://i.imgur.com/kzk27ynb.jpg",
          details:
            "white and black giving the bag exceptionally beautiful look",
          ratings: 5
        }
      ],

      backpacks: [
        {
          name: "Marvel Avengers backpack",
          price: 3259,
          image: "https://i.imgur.com/YyZSR1Fm.jpg",
          details: "Buy yourself this bag of your favourite superheroes ",
          ratings: 5
        },

        {
          name: "GOT backpack",
          price: 2250,
          image: "https://i.imgur.com/MIRsCn1m.jpg",
          details:
            "Are you a GOT fan thrilled by the entire series? Grab this bag!",
          ratings: 4
        },

        {
          name: "black and white striped bag",
          price: 2959,
          image: "https://i.imgur.com/0pu21Rxm.jpg",
          details: "Trendy and classic bag at your service",
          ratings: 2.5
        },
        {
          name: "Floral printed beautiful bag",
          price: 4000,
          image: "https://i.imgur.com/pcVqssbm.jpg",
          details: "Floral designed pretty bag",
          ratings: 2.9
        },
        {
          name: "Blue matted stylish backpack",
          price: 2459,
          image: "https://i.imgur.com/dURGtShm.jpg",
          details: "Small and beautiful looking bag",
          ratings: 3
        },
        {
          name: "Travel bag",
          price: 3400,
          image: "https://i.imgur.com/DOcKX3Rm.jpg",
          details: "Take this bag with you for long journies",
          ratings: 4.5
        }
      ],

      cartProducts: [],
      currentProduct: {}
    },

    getters: {
      gethandbags: state => state.handbags,
      getbackpacks: state => state.backpacks,
      getAllProducts: state => state.handbags.concat(state.backpacks),
      getProductsInCart: state => state.cartProducts,
      getCurrentProduct: state => state.currentProduct
    },

    mutations: {
      addProduct: (state, product) => {
        state.cartProducts.push(product);
      },
      removeProduct: (state, index) => {
        state.cartProducts.splice(index, 1);
      },
      currentProduct: (state, product) => {
        state.currentProduct = product;
      }
    },

    actions: {
      addProduct: (context, product) => {
        context.commit("addProduct", product);
      },
      removeProduct: (context, index) => {
        context.commit("removeProduct", index);
      },
      currentProduct: (context, product) => {
        context.commit("currentProduct", product);
      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
}
