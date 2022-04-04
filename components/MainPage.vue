<template>
  <div class="flex w-full h-96 justify-center pt-36 bg-white dark:bg-gray-800">
    <div>
      <form>
        <div class="space-x-8">
          <input
            class="border-2 px-2 py-1 shadow-md dark:bg-gray-600"
            type="text"
            placeholder="First name"
            required
          />
          <input
            class="border-2 px-2 py-1 shadow-md dark:bg-gray-600"
            type="text"
            placeholder="Last name"
            required
          />
          <input
            class="border-2 px-2 py-1 shadow-md dark:bg-gray-600"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <br />
        <div class="mt-12 flex justify-center ml-0">
          <button
            class="cursor-pointer bg-cyan hover:bg-green-500 text-white px-6 py-2 font-bold rounded-md text-sm font-medium dark:bg-gray-600"
            onClick="alert('Hello at hokify')"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
}
</script>
