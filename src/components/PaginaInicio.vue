<template>
  <div class="home-shell">
    <div class="hero-card">
      <h2>Registro de Estudiantes</h2>
      <p>Gestiona estudiantes de forma rápida y sencilla desde un único menú.</p>

      <div class="cards-grid">
        <router-link to="/registrar" class="menu-card">
          <span class="icon">✏️</span>
          <h3>Registrar Estudiante</h3>
          <p>Agrega un nuevo estudiante al sistema.</p>
        </router-link>

        <router-link to="/consultar" class="menu-card">
          <span class="icon">🔎</span>
          <h3>Consultar por ID</h3>
          <p>Busca la información completa de un estudiante.</p>
        </router-link>

        <router-link to="/lista" class="menu-card">
          <span class="icon">📋</span>
          <h3>Ver Lista de Estudiantes</h3>
          <p>Revisa todos los registros y avanza su estado.</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginaInicio'
}
</script>

<style scoped>
.home-shell {
  display: flex;
  justify-content: center;
  padding: 24px 16px;
}

.hero-card {
  width: min(100%, 980px);
  background: linear-gradient(135deg, #ffffff 0%, #f6f9ff 100%);
  border-radius: 24px;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12);
  padding: 32px;
}

h2 {
  margin: 0 0 10px;
  color: #1f2937;
  font-size: 2rem;
}

p {
  margin: 0;
  color: #6b7280;
  font-size: 1rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 28px;
}

.menu-card {
  text-decoration: none;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  padding: 24px;
  color: #111827;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.14);
}

.icon {
  font-size: 1.8rem;
}

h3 {
  margin: 0;
  font-size: 1.1rem;
}

.menu-card p {
  color: #4b5563;
  line-height: 1.5;
}
</style>
