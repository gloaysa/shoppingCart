import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    key: 'vuex',
    storage: window.localStorage,
	reducer: (state) => ({productsInCart: state.productsInCart})
});

export const store = new Vuex.Store({
    plugins: [vuexLocalStorage.plugin],
    state: {
        products: [],
        productsInCart: []
    },
    getters: {
        getProducts: state => {
            return state.products;
        },
        getProduct:(state, id) => {
            return state.products.forEach(product => {
                if (product.id === id) {
                    return product;
                }
            })
        },
        getProductsInCart: state => {
            return state.productsInCart;
        }
    },
    mutations: {
        addProducts: (state, products) => {
            products.forEach(product => {
                product.quantity = 1;
                product.price = Number(product.price.match(/[-]{0,1}[\d]*[\.]{0,1}[\d]+/g)[0]);
                state.products.push(product);
            });
        },
        addProductToCart: (state, product) => {
            if (!state.productsInCart.includes(   product)) {
                state.productsInCart.push(product);
            }
        },
        removeProductFromCart: (state, product) => {
            state.productsInCart.forEach((item, index) => {
                if (product.id === item.id) {
                    state.productsInCart.splice(index, 1);
                }
            });
        },
        removeProductsFromCart: state => {
            state.productsInCart = [];
        },
        increaseQuantity(state, item) {
            item.quantity++;
        },
        decreaseQuantity(state, item) {
            if (item.quantity > 1) {
                item.quantity--;
            }
        }
    }
});
