<template>
  <div class="container mt-4">
    <!-- Titlul formularului -->
    <h2 class="text-center">Formular adaugare produs</h2>

    <!-- Formularul pentru adaugarea produsului -->
    <form @submit.prevent="handleSubmit" class="row g-3">
      <!-- Camp pentru denumirea produsului -->
      <div class="col-md-6">
        <label for="name" class="form-label">Denumire produs:</label>
        <input id="name" v-model="product.name" class="form-control" required />
        <!-- Mesaj de eroare daca numele nu este valid -->
        <span v-if="errors.name" class="text-danger">Camp obligatoriu! Minim 3 caractere.</span>
      </div>

      <!-- Camp pentru pretul produsului -->
      <div class="col-md-6">
        <label for="price" class="form-label">Pret:</label>
        <input
          id="price"
          type="number"
          v-model="product.price"
          class="form-control"
          required
        />
        <!-- Mesaj de eroare daca pretul nu este valid -->
        <span v-if="errors.price" class="text-danger">Trebuie sa fie un numar pozitiv!</span>
      </div>

      <!-- Butonul de submit pentru adaugare produs -->
      <div class="col-12 text-center">
        <button type="submit" class="btn btn-primary">Adauga Produs</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      // Obiect pentru produsul curent
      product: {
        name: '',
        price: null,
      },
      // Obiect pentru stocarea erorilor
      errors: {
        name: false,
        price: false,
      },
    };
  },
  methods: {
    ...mapActions('products', ['addProduct']), // Mapam actiunea addProduct din Vuex
    handleSubmit() {
      // Validam campurile formularului
      this.errors.name = !this.product.name || this.product.name.length < 3;
      this.errors.price = !this.product.price || this.product.price <= 0;

      // Daca nu exista erori, adaugam produsul
      if (!this.errors.name && !this.errors.price) {
        const newProduct = {
          id: Date.now(), // Generam un ID unic
          name: this.product.name,
          price: this.product.price,
        };
        this.addProduct(newProduct); // Apelam actiunea Vuex pentru adaugare produs

        // Resetam formularul dupa adaugare
        this.product.name = '';
        this.product.price = null;

        // Afișam un mesaj de confirmare
        alert('Produsul a fost adaugat cu succes!');
      }
    },
  },
};
</script>
