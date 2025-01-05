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
          path: "clubs",
          meta: {
            title: "club",
          },
          children: [
            {
              path: "",
              name: "clubs-list",
              component: () => import("@/views/clubs/ClubPage.vue"),
            },
            {
              path: ":id",
              name: "official-details",
              component: () => import("@/views/clubs/ClubDetailsPage.vue"),
            },
          ],
        },
        {
          path: "players",
          meta: {
            title: "player",
          },
          children: [
            {
              path: "",
              name: "player-list",
              component: () => import("@/views/players/PlayerPage.vue"),
            },
            {
              path: ":id",
              name: "player-details",
              component: () => import("@/views/players/PlayerDetailsPage.vue"),
            },
          ],
        },
        {
          path: "trainers",
          meta: {
            title: "trainers",
          },
          children: [
            {
              path: "",
              name: "trainer-list",
              component: () => import("@/views/trainers/TrainerPage.vue"),
            },
            {
              path: ":id",
              name: "trainer-details",
              component: () => import("@/views/trainers/TrainerDetailsPage.vue"),
            },
          ],
        },
        {
          path: "officials",
          meta: {
            title: "officials",
          },
          children: [
            {
              path: "",
              name: "officials-list",
              component: () => import("@/views/officials/OfficialPage.vue"),
            },
            {
              path: ":id",
              name: "officials-details",
              component: () => import("@/views/officials/OfficialDetailsPage.vue"),
            },
          ],
        },

      ],
    },
  ],
});

export default router;
