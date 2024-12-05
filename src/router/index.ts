import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/DashBoard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      children: [
        {
          path: "",
          name: "dashboard",
          component: HomeView,
          meta: {
            title: "dashboard",
          },
        },
        {
          path: "players",
          meta: {
            title: "players",
          },
          children: [
            {
              path: "",
              name: "players-list",
              component: () => import("../views/PlayerPage.vue"),
            },
            {
              path: ":id",
              name: "player-details",
              component: () => import("../views/PlayerDetailsPage.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
