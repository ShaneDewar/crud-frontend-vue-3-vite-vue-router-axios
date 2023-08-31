import AddMedia from "@/components/AddMedia.vue";
import Media from "@/components/Media.vue";
import MediaList from "@/components/MediaList.vue";
import EbookList from "@/components/EbookList.vue";
import AudioBookList from "@/components/AudioBookList.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", alias: "/media", name: "Media List", component: MediaList },
  { path: "/ebooks", name: "eBooks List", component: EbookList },
  { path: "/audiobooks", name: "Audio Books List", component: AudioBookList },
  { path: "/ebooks/:format", name: "Hard Cover List", component: EbookList },
  { path: "/media/:id", name: "Media", component: Media },
  { path: "/create", name: "create", component: AddMedia },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
