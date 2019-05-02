import Vue from 'vue'

export default {
    totalCount: 0,
    numberOfPages: 0,
    currentPage: 1,

    getProducts (success, error) {
        Vue.http.get('http://localhost:3000/products?_page=' + this.currentPage + '&_limit=10')
            .then(response => {
                    if (this.currentPage < this.numberOfPages) {
                        this.currentPage++;
                        success(response.body);
                    } else {
                        this.totalCount = Number(response.headers.map['x-total-count']);
                        this.numberOfPages = Math.ceil(this.totalCount     / 10);
                        this.currentPage++;
                        success(response.body);
                    }
                },
                err => error(err))
    }
}
