<template>
  <form
    method="post"
    action="/news"
    enctype="multipart/form-data"
    class="flex flex-col bg-slate-400 m-4 justify-start items-center"
    @submit.prevent
  >
    <div
      class="flex flex-col w-2/3 justify-center mx-auto items-center mt-40 border-4 p-4"
    >
      <h3 class="text-3xl text-center mb-3">Add New News Post</h3>

      <input
        ref="title"
        v-model="newsData.title"
        type="text"
        placeholder="Title"
        class="mb-3 border-2 p-2 bg-slate-300/25 text-zinc-900"
      />
      <!-- <label for="publish-time" class="text-xl text-center mb-3"
        >Choose time of publish date and hours</label
      >

      <input
        id="publish-time"
        v-model="newsData.publishAt"
        type="datetime-local"
        placeholder="Select Publish Date"
        class="mb-3 border-2 p-2 bg-slate-300/25 text-zinc-900"
      /> -->

      <label for="image_url" class="text-xl text-center mb-3"
        >Upload an image for cover and content
      </label>
      <input
        id="image_url"
        ref="imageUrl"
        type="file"
        name="image_url"
        accept="image/png,image/jpeg"
        class="mb-3 border-2 p-2 bg-slate-300/50 text-zinc-900"
        @change="handleFileUpload(imageUrl)"
      />
    </div>

    <input
      ref="source"
      v-model="newsData.source"
      type="text"
      placeholder="Enter News Source"
      class="my-3 border-2 p-2 bg-slate-300/50 text-zinc-900"
    />
    <label for="content" class="text-xl text-center mb-3"
      >Enter News Content
    </label>
    <textarea
      id="content"
      v-model="newsData.content"
      name="content"
      cols="60"
      rows="10"
      class="border-2 border-fuchsia-100 mb-4"
    ></textarea>
    <button
      type="submit"
      class="bg-red-200 px-6 py-2 rounded-lg shadow-inner active:shadow-none shadow-orange-700"
      @click="onSave"
    >
      Submit
    </button>
  </form>
</template>

<script setup>
import { inject, onMounted, reactive, ref } from "vue";
//import { useStore } from "vuex";
import { useRouter } from "vue-router";
const useAxios = inject("useAxios");
const router = useRouter();
//const store = useStore();
const newsData = reactive({
  publishAt: null,
  title: null,
  image_url: null,
  source: null,
  content: null,
});
const imageUrl = ref("");
let base64String = ref("");

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};

const handleFileUpload = async (e) => {
  const file = e.files[0];
  base64String = await convertBase64(file);
  console.log(base64String);
};
onMounted(handleFileUpload);

const onSave = () => {
  const saveData = {
    ...newsData,
    publishAt: new Date(),
    image_url: base64String,
  };
  useAxios.post("/news", saveData).then((response) => {
    console.log(response.data);
  });
  router.push({ name: "HomePage" });
};
</script>
