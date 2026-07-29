<template>
  <div class="card full-width">
    <div class="table-header">
      <h2>Lista de Estudiantes</h2>
      <button @click="fetchStudents" class="btn-secondary">Actualizar Lista</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Correo</th>
          <th>Número Cuenta</th>
          <th>Grado</th>
          <th>Créditos</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.nombre }}</td>
          <td>{{ student.edad || '-' }}</td>
          <td>{{ student.correo || '-' }}</td>
          <td>{{ student.numCuenta || '-' }}</td>
          <td>{{ student.grado }}</td>
          <td>{{ student.creditos }}</td>
          <td>
            <button @click="advanceStudent(student.id)" class="btn-action">Avanzar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

const API_BASE_URL = 'http://localhost:1323'

export default {
  name: 'ListaEstudiantes',
  data() {
    return {
      students: []
    }
  },
  mounted() {
    this.fetchStudents()
  },
  methods: {
    async fetchStudents() {
      try {
        const response = await axios.get(`${API_BASE_URL}/estudiantes`)
        this.students = response.data
      } catch (error) {
        console.error(error)
        this.students = []
        alert('No se pudo conectar con el backend en http://localhost:1323')
      }
    },
    async advanceStudent(id) {
      try {
        const response = await axios.post(`${API_BASE_URL}/estudiantes/${id}/avanzar`)
        const updatedStudent = response.data
        await this.fetchStudents()
        alert(`Estudiante ${updatedStudent.nombre} avanzado al grado ${updatedStudent.grado}`)
      } catch (error) {
        console.error(error)
        alert('No se pudo avanzar el estudiante al siguiente grado')
      }
    }
  }
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.full-width {
  margin: 24px;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.table-header h2 {
  margin: 0;
  color: #1f2937;
}

.btn-secondary {
  background: #6366f1;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease;
}

.btn-secondary:hover {
  background: #4f46e5;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

thead {
  background: #f3f4f6;
  border-bottom: 2px solid #e5e7eb;
}

th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: #374151;
}

td {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  color: #4b5563;
}

tbody tr:hover {
  background: #f9fafb;
}

.btn-action {
  background: #10b981;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}

.btn-action:hover {
  background: #059669;
}
</style>