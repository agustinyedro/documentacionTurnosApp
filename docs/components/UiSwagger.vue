<template>
  <div ref="swaggerContainer" class="swagger-container"></div>
</template>

<script>
import SwaggerUI from "swagger-ui-dist";
import "swagger-ui-dist/swagger-ui.css";

export default {
  name: "UiSwagger",
  props: {
    specUrl: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    try {
      let spec;

      // Obtiene la base URL de VitePress (si está configurada)
      const baseUrl = import.meta.env.BASE_URL || "/";

      // Construye la URL completa del archivo JSON
      const fullUrl =
        this.specUrl.startsWith("http://") ||
        this.specUrl.startsWith("https://")
          ? this.specUrl // Si es una URL externa, usa la URL directamente
          : `${baseUrl}${this.specUrl}`; // Si es un archivo local, agrega la base URL

      // Carga el archivo JSON
      const response = await fetch(fullUrl);
      if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
      }
      spec = await response.json();

      // Renderiza Swagger UI en el contenedor
      SwaggerUI({
        domNode: this.$refs.swaggerContainer,
        spec: spec, // Usa el JSON cargado
        presets: [SwaggerUI.presets.apis],
      });
    } catch (error) {
      console.error("Error al cargar Swagger:", error);
    }
  },
};
</script>

<style scoped>
.swagger-container {
  max-width: 100%; /* Ancho máximo */
  margin: 0 auto; /* Centrado */
  padding: 20px; /* Espaciado */
  height: 80vh; /* Altura ajustable */
  overflow: auto; /* Scroll si es necesario */
  border: 1px solid var(--vp-c-text-3); /* Borde suave */
  border-radius: 8px; /* Bordes redondeados */
  background-color: var(--vp-c-bg-alt); /* Fondo alternativo */
}
</style>
