<template>
  <div class="card">
    <h2>Registrar Nuevo Estudiante</h2>
    <form @submit.prevent="registerStudent">
      <input v-model="newStudent.nombre" placeholder="Nombre completo" required />
      <input v-model="newStudent.edad" type="number" placeholder="Edad" />
      <input v-model="newStudent.correo" type="email" placeholder="Correo" />
      <input v-model="newStudent.numCuenta" placeholder="Número de cuenta" />
      <input v-model="newStudent.grado" type="number" placeholder="Grado" />
      <input v-model="newStudent.creditos" type="number" placeholder="Créditos" />
      <button type="submit" class="btn-primary">Guardar Estudiante</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

const API_BASE_URL = 'http://localhost:1323'

export default {
  name: 'RegistrarEstudiante',
  data() {
    return {
      newStudent: {
        nombre: '',
        edad: '',
        correo: '',
        numCuenta: '',
        grado: '1',
        creditos: '0'
      }
    }
  },
  methods: {
    async registerStudent() {
      const payload = {
        nombre: this.newStudent.nombre.trim(),
        grado: Number(this.newStudent.grado) || 1,
        creditos: Number(this.newStudent.creditos) || 0
      }

      if (this.newStudent.edad !== '') payload.edad = Number(this.newStudent.edad)
      if (this.newStudent.correo !== '') payload.correo = this.newStudent.correo
      if (this.newStudent.numCuenta !== '') payload.numCuenta = this.newStudent.numCuenta

      try {
        const response = await axios.post(`${API_BASE_URL}/estudiantes`, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const createdStudent = response.data
        alert(`Estudiante registrado: ${createdStudent.nombre}`)
        this.newStudent = {
          nombre: '',
          edad: '',
          correo: '',
          numCuenta: '',
          grado: '1',
          creditos: '0'
        }
      } catch (error) {
        console.error(error)
        alert('No se pudo registrar el estudiante.')
      }
    }
  }
}
</script>