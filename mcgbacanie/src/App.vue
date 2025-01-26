<template>
  <div>
    <!-- Navbar-ul aplicatiei -->
    <NavBar>
      <!-- Slot pentru a adauga un mesaj personalizat in navbar -->
      <span>Bine ati venit la McgBacanie</span> 
    </NavBar>

    <!-- Aici sunt randate componentele in functie de ruta activa -->
    <router-view />

    <!-- Footer-ul aplicatiei -->
    <FooterComponent />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'; // Importam componenta NavBar
import FooterComponent from './components/FooterComponent.vue'; // Importam componenta FooterComponent

export default {
  components: {
    NavBar, // Declaram NavBar ca o componenta utilizata in acest fisier
    FooterComponent, // Declaram FooterComponent ca o componenta utilizata in acest fisier
  },
};
</script>
