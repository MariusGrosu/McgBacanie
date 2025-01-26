<template>
  <div class="container mt-4">
    <!-- Titlu formular -->
    <h2 class="text-center">Adauga Produs</h2>
    <!-- Formular pentru adaugarea unui produs -->
    <form @submit.prevent="submitProduct">
      <!-- Camp pentru numele produsului -->
      <div class="mb-3">
        <label for="name" class="form-label">Nume Produs:</label>
        <input v-model="product.name" id="name" type="text" class="form-control" required />
      </div>
      <!-- Camp pentru pretul produsului -->
      <div class="mb-3">
        <label for="price" class="form-label">Pret:</label>
        <input v-model="product.price" id="price" type="number" class="form-control" required />
      </div>
      <!-- Camp pentru detalii despre produs -->
      <div class="mb-3">
        <label for="details" class="form-label">Detalii:</label>
        <textarea v-model="product.details" id="details" class="form-control" rows="3" required></textarea>
      </div>
      <!-- Buton pentru trimiterea formularului -->
      <button type="submit" class="btn btn-primary">Adauga</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      product: {
        name: '', // Numele produsului
        price: null, // Pretul produsului
        details: '', // Detalii despre produs
      },
    };
  },
  methods: {
    // Mapam actiunea addProduct din Vuex
    ...mapActions('products', ['addProduct']),
    // Metoda pentru trimiterea formularului
    submitProduct() {
      const newProduct = {
        ...this.product,
        id: Date.now(), // Generam un ID unic pentru produs
      };
      // Adaugam produsul in store si localStorage
      this.addProduct(newProduct);
      // Afisam un mesaj de confirmare
      alert('Produsul a fost adaugat cu succes!');
      // Navigam catre lista de produse
      this.$router.push('/products');
    },
  },
};
</script>
