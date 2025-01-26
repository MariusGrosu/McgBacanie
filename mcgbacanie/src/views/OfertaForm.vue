<template>
  <div class="container mt-5">
    <h2 class="text-center">Cere o Oferta</h2>
    <form @submit.prevent="submitForm" class="mt-4">
      <!-- Camp pentru numele utilizatorului -->
      <div class="mb-3">
        <label for="name" class="form-label">Nume:</label>
        <input v-model="form.name" id="name" type="text" class="form-control" required />
      </div>

      <!-- Camp pentru numarul de telefon -->
      <div class="mb-3">
        <label for="phone" class="form-label">Numar de telefon:</label>
        <input v-model="form.phone" id="phone" type="tel" class="form-control" required />
      </div>

      <!-- Camp pentru numele firmei -->
      <div class="mb-3">
        <label for="company" class="form-label">Firma:</label>
        <input v-model="form.company" id="company" type="text" class="form-control" required />
      </div>

      <!-- Buton de trimitere -->
      <button type="submit" class="btn btn-primary">Trimite</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "OfertaForm", // Nume multi-word pentru conformitatea cu ESLint
  data() {
    return {
      form: {
        name: "",
        phone: "",
        company: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        // Simulam trimiterea datelor catre un API fictiv
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.form),
        });

        if (!response.ok) {
          throw new Error("Eroare la trimiterea formularului");
        }

        const data = await response.json();
        console.log("Formular trimis cu succes:", data);
        alert("Formularul a fost trimis cu succes!");

        // Resetam campurile formularului
        this.form.name = "";
        this.form.phone = "";
        this.form.company = "";
      } catch (error) {
        console.error("Eroare la trimiterea formularului:", error);
        alert("A aparut o problema la trimiterea formularului. Incercati din nou.");
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px; /* Limitam latimea containerului pentru un aspect mai compact */
}
</style>
