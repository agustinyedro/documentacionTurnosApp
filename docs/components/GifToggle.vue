<template>
  <div>
    <img
      :src="currentImage"
      @click="toggleGif"
      :style="{ cursor: 'pointer' }"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Definir las propiedades del componente
const props = defineProps({
  staticImage: {
    type: String,
    required: true,
  },
  gifImage: {
    type: String,
    required: true,
  },
  width: {
    type: [String, Number],
    default: 800,
  },
  height: {
    type: [String, Number],
    default: "auto",
  },
});

// Obtener la base URL dinámicamente (para GitHub Pages)
const baseUrl = import.meta.env.BASE_URL;

// Convertir las rutas de las imágenes en rutas absolutas
const staticImageUrl = computed(() => `${baseUrl}${props.staticImage}`);
const gifImageUrl = computed(() => `${baseUrl}${props.gifImage}`);

// Estado para manejar la imagen actual
const currentImage = ref(staticImageUrl.value);

// Función para alternar entre la imagen estática y el GIF
const toggleGif = () => {
  currentImage.value =
    currentImage.value === staticImageUrl.value
      ? gifImageUrl.value
      : staticImageUrl.value;
};
</script>
