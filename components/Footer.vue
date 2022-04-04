<template>
  <footer
    class="absolute bottom-2 w-full text-center bg-white dark:bg-gray-600"
  >
    Copyright &copy;
    <i> Hokify Coding Challenge </i>
    {{ new Date().getFullYear() }}
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
}
</script>
