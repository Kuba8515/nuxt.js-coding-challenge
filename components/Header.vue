<template>
  <nav
    class="flex w-full h-auto bg-cyan justify-between pr-20 text-white font-bold dark:bg-gray-600"
  >
    <div>
      <a class="items-center">
        <nuxt-img src="/hokify-logo.png" class="w-60 pl-20 py-10" />
      </a>
    </div>
    <div class="flex items-center text-black">
      <select v-model="$colorMode.preference">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
    <div class="flex items-center justify-end font-serif">
      My Coding Challenge<br />
      Jakub Gazdiak
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
}
</script>
