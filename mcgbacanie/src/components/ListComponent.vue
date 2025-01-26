<template>
  <div class="container mt-4">
    <!-- Titlu pentru lista de produse -->
    <h2 class="text-center">Lista produse</h2>

    <!-- Sectiunea de cautare si sortare -->
    <div class="row mb-3">
      <!-- Input pentru cautarea produselor -->
      <div class="col-md-6">
        <input
          v-model="searchQuery"
          class="form-control"
          placeholder="Cauta produs..."
        />
      </div>

      <!-- Select pentru ordonarea produselor -->
      <div class="col-md-6">
        <select v-model="sortOrder" class="form-select">
          <option value="asc">Pret crescator</option>
          <option value="desc">Pret descrescator</option>
        </select>
      </div>
    </div>

    <!-- Afisarea produselor filtrate si sortate -->
    <ul class="list-group">
      <li
        v-for="product in filteredAndSortedProducts"
        :key="product.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <!-- Numele si pretul produsului -->
        {{ product.name }} - {{ product.price }} RON
        <!-- Buton pentru stergerea produsului -->
        <button
          class="btn btn-danger btn-sm"
          @click="deleteProduct(product.id)"
        >
          Sterge
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      // Cuvantul dupa care se face cautarea
      searchQuery: '',
      // Ordinea de sortare: crescator sau descrescator
      sortOrder: 'asc',
    };
  },
  computed: {
    // Mapam getter-ul din store pentru a obtine lista produselor
    ...mapGetters('products', ['getProducts']),

    // Filtrarea si sortarea produselor
    filteredAndSortedProducts() {
      // Filtrare dupa numele produsului (case insensitive)
      let filtered = this.getProducts.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      // Sortare dupa pret
      if (this.sortOrder === 'asc') {
        filtered.sort((a, b) => a.price - b.price); // Crescator
      } else {
        filtered.sort((a, b) => b.price - a.price); // Descrescator
      }

      return filtered;
    },
  },
  methods: {
    // Mapam actiunile pentru a incarca si sterge produse
    ...mapActions('products', ['loadProducts', 'deleteProduct']),
  },
  mounted() {
    // Incarcam produsele din store la montarea componentei
    this.loadProducts();
  },
};
</script>
