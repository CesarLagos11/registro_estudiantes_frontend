<template>
  <div class="card">
    <h2>Consultar Estudiante por ID</h2>
    <div class="search-box">
      <input v-model="searchId" type="number" placeholder="Ingrese el ID" />
      <button @click="getStudentById" class="btn-secondary">Buscar</button>
    </div>

    <div v-if="searchedStudent" class="result-box">
      <p><strong>ID:</strong> {{ searchedStudent.id }}</p>
      <p><strong>Nombre:</strong> {{ searchedStudent.nombre }}</p>
      <p><strong>Edad:</strong> {{ searchedStudent.edad ?? 'No registrado' }}</p>
      <p><strong>Correo:</strong> {{ searchedStudent.correo ?? 'No registrado' }}</p>
      <p><strong>Número de cuenta:</strong> {{ searchedStudent.numCuenta ?? 'No registrado' }}</p>
      <p><strong>Grado:</strong> {{ searchedStudent.grado }}</p>
      <p><strong>Créditos:</strong> {{ searchedStudent.creditos }}</p>
    </div>
    <div v-else-if="searchId && !searchedStudent && searchAttempted" class="result-box">
      <p>No se encontró ningún estudiante con ese ID.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const API_BASE_URL = 'http://localhost:1323'

export default {
  name: 'ConsultarEstudiante',
  data() {
    return {
      searchId: '',
      searchedStudent: null,
      searchAttempted: false
    }
  },
  methods: {
    async getStudentById() {
      if (!this.searchId) return

      this.searchAttempted = true
      try {
        const response = await axios.get(`${API_BASE_URL}/estudiantes/${this.searchId}`)
        this.searchedStudent = response.data
      } catch (error) {
        if (error.response && error.response.status === 404) {
          this.searchedStudent = null
          return
        }
        console.error(error)
        this.searchedStudent = null
        alert('No se pudo consultar el estudiante')
      }
    }
  }
}
</script>