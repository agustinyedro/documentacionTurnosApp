<template>
  <div ref="swaggerContainer" class="swagger-container"></div>
</template>

<script>
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
      const { default: SwaggerUI } = await import(
        "swagger-ui-dist/swagger-ui-es-bundle.js"
      );
      await import("swagger-ui-dist/swagger-ui.css");

      let spec;
      const baseUrl = import.meta.env.BASE_URL || "/";
      const fullUrl = this.specUrl.startsWith("http")
        ? this.specUrl
        : `${baseUrl}${this.specUrl}`;

      const response = await fetch(fullUrl);
      if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
      }
      spec = await response.json();

      SwaggerUI({
        domNode: this.$refs.swaggerContainer,
        spec: spec,
      });
    } catch (error) {
      console.error("Error al cargar Swagger:", error.message || error);
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para destacar */
}

/* Mejora para dispositivos móviles */
@media (max-width: 768px) {
  .swagger-container {
    height: auto; /* Altura automática en móviles */
    padding: 10px; /* Reducir padding */
  }
}
</style>
