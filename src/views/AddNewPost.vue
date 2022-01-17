<template>
  <form
    action="post"
    enctype="multipart/form-data"
    class="flex flex-col bg-slate-400 m-4 justify-start items-center"
    @submit.prevent
  >
    <div
      class="flex flex-col w-2/3 justify-center mx-auto items-center mt-40 border-4 p-4"
    >
      <h3 class="text-3xl text-center mb-3">Add New News Post</h3>

      <input
        type="text"
        placeholder="Title"
        class="mb-3 border-2 p-2 bg-slate-300/25 text-zinc-900"
      />
      <label for="publish-time" class="text-xl text-center mb-3"
        >Choose time of publish date and hours</label
      >
      <input
        id="publish-time"
        type="datetime-local"
        placeholder="Select Publish Date"
        class="mb-3 border-2 p-2 bg-slate-300/25 text-zinc-900"
      />

      <label for="image_url" class="text-xl text-center mb-3"
        >Upload an image for cover and content
      </label>
      <input
        id="image_url"
        type="file"
        name="image_url"
        accept="image/png,image/jpeg"
        class="mb-3 border-2 p-2 bg-slate-300/25 text-zinc-900"
      />
    </div>
    <label for="content" class="text-xl text-center mb-3"
      >Enter News Content
    </label>
    <textarea
      id="content"
      name="content"
      cols="60"
      rows="10"
      class="border-2 border-fuchsia-100 mb-4"
    ></textarea>
    <button
      type="submit"
      class="bg-red-200 px-6 py-2 rounded-lg shadow-inner active:shadow-none shadow-orange-700"
    >
      Submit
    </button>
  </form>
</template>

<script></script>
