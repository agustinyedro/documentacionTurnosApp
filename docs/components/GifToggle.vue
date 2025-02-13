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
import { ref } from "vue";

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

// Estado para manejar la imagen actual
const currentImage = ref(props.staticImage);

// Función para alternar entre la imagen estática y el GIF
const toggleGif = () => {
  currentImage.value =
    currentImage.value === props.staticImage
      ? props.gifImage
      : props.staticImage;
};
</script>
