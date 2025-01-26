<template>
  <!-- Footer fixat in partea de jos a paginii -->
  <footer class="footer bg-light text-center py-3">
    <div class="container">
      <!-- Textul afisat in footer -->
      <span class="text-muted">McgBacanie. Toate drepturile rezervate.</span>
    </div>
  </footer>
</template>

<style scoped>
/* Stiluri pentru footer */
.footer {
  position: fixed; /* Fixeaza footer-ul la baza paginii */
  bottom: 0; /* Plaseaza footer-ul la 0px de la partea de jos */
  left: 0; /* Plaseaza footer-ul la 0px de la partea stanga */
  width: 100%; /* Footer-ul ocupa toata latimea paginii */
}
</style>
