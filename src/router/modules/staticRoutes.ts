import { RouteRecordRaw } from "vue-router";
import { HOME_URL, LOGIN_URL } from "@/config";

/**
 * 路由白名单
 */
const staticRouter: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: LOGIN_URL
  },
  {
    path: LOGIN_URL,
    name: "login",
    component: () => import("@/pages/Login/index.vue"),
    meta: {
      title: "登录页"
    }
  },
  // {
  //   path: "/layout",
  //   name: "layout",
  //   component: () => import("@/layout/index.vue"),
  //   redirect: HOME_URL,
  //   children: []
  // }
];

/**
 * 错误页面跳转
 */
// export const errorRouter = [
//   {
//     path: "/403",
//     name: "403",
//     component: () => import("@/components/ErrorPage/403.vue"),
//     meta: {
//       title: "403页面"
//     }
//   },
//   {
//     path: "/404",
//     name: "404",
//     component: () => import("@/components/ErrorPage/404.vue"),
//     meta: {
//       title: "404页面"
//     }
//   },
//   {
//     path: "/500",
//     name: "500",
//     component: () => import("@/components/ErrorPage/500.vue"),
//     meta: {
//       title: "500页面"
//     }
//   }
// ];

/**
 * 404
 */
// export const notFoundRouter = {
//   path: "/:pathMatch(.*)*",
//   name: "notFound",
//   redirect: { name: "404" }
// };

export default staticRouter;
