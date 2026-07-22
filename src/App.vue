<template>
  <div id="app">
    <header class="app-header">
      <router-link to="/" class="brand-link">🏠 Menú Principal</router-link>
      <nav class="nav-menu">
        <router-link to="/registrar" class="nav-link">✏️ Registrar</router-link>
        <router-link to="/consultar" class="nav-link">🔎 Consultar</router-link>
        <router-link to="/lista" class="nav-link">📋 Lista de Estudiantes</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  background: #f3f6fb;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  min-height: 100vh;
  background: #f3f6fb;
}

.app-header {
  background: #1f2937;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  gap: 24px;
}

.brand-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  white-space: nowrap;
}

.brand-link:hover {
  text-decoration: underline;
}

.nav-menu {
  display: flex;
  gap: 16px;
  align-items: center;
  flex: 1;
}

.nav-link {
  color: #e5e7eb;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  background: #374151;
  color: #ffffff;
}

.nav-link.router-link-active {
  background: #3b82f6;
  color: #ffffff;
}
</style>
