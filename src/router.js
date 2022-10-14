import Vue from "vue";
import store from "./store";
// import {isMobile} from "mobile-device-detect";
import Router from "vue-router";
import NProgress from "nprogress";
import authenticate from "./auth/authenticate";

Vue.use(Router);

// create new router

const routes = [
  {
    path: "/",
    component: () => import("./views"), //webpackChunkName app
    beforeEnter: authenticate,
    redirect: "/app/dashboards/dashboard.v1",

    children: [
      {
        path: "/app/dashboards",
        component: () => import("./views/dashboards"), //dashboard
        children: [
          {
            path: "dashboard.v1",
            name: "dashboard.v1",
            component: () => import("./views/dashboards/dashboard.v1"),
          },
          {
            path: "dashboard.v2",
            name: "dashboard.v2",
            component: () => import("./views/dashboards/dashboard.v2"),
          },
          {
            path: "dashboard.v3",
            name: "dashboard.v3",
            component: () => import("./views/dashboards/dashboard.v3"),
          },
          {
            path: "dashboard.v4",
            name: "dashboard.v4",
            component: () => import("./views/dashboards/dashboard.v4"),
          },
        ],
      },

      //ui-kits
      {
        path: "/app/ui-kits",
        component: () => import("./views/ui-kits"),
        redirect: "/app/ui-kits/alerts",
        children: [
          {
            path: "alerts",
            name: "alerts",
            component: () => import("./views/ui-kits/alerts"),
          },
          {
            path: "accordion",
            name: "accordion",
            component: () => import("./views/ui-kits/accordion"),
          },
          {
            path: "badges",
            name: "badges",
            component: () => import("./views/ui-kits/badges"),
          },
          {
            path: "buttons",
            name: "buttons",
            component: () => import("./views/ui-kits/buttons"),
          },
          {
            path: "bootstrap-tab",
            name: "bootstrap-tab",
            component: () => import("./views/ui-kits/bootstrap-tab"),
          },
          {
            path: "cards",
            name: "cards",
            component: () => import("./views/ui-kits/cards"),
          },
          {
            path: "list",
            name: "list",
            component: () => import("./views/ui-kits/list"),
          },
          {
            path: "popover",
            name: "popover",
            component: () => import("./views/ui-kits/popover"),
          },
          {
            path: "progressbar",
            name: "progressbar",
            component: () => import("./views/ui-kits/progressbar"),
          },
          {
            path: "collapsible",
            name: "collapsible",
            component: () => import("./views/ui-kits/collapsible"),
          },
          {
            path: "modals",
            name: "modals",
            component: () => import("./views/ui-kits/modals"),
          },
          {
            path: "typography",
            name: "typography",
            component: () => import("./views/ui-kits/typography"),
          },
          {
            path: "carousel",
            name: "carousel",
            component: () => import("./views/ui-kits/carousel"),
          },
          {
            path: "pagination",
            name: "pagination",
            component: () => import("./views/ui-kits/pagination"),
          },
          // {
          //   path: "slider",
          //   component: () => import("./views/ui-kits/sliders")
          // }
        ],
      },

      //uiExtraKits
      {
        path: "/app/extraKits",
        component: () => import("./views/extraKits"),
        redirect: "/app/extraKits/dropdown",
        children: [
          {
            path: "dropdown",
            component: () => import("./views/extraKits/dropdown"),
          },
          {
            path: "loaders",
            component: () => import("./views/extraKits/loaders"),
          },
          {
            path: "sweetAlerts",
            component: () => import("./views/extraKits/sweetAlerts"),
          },
          {
            path: "toasts",
            component: () => import("./views/extraKits/toasts"),
          },
          {
            path: "tour",
            component: () => import("./views/extraKits/tour"),
          },
          {
            path: "calendar",
            component: () => import("./views/extraKits/calendar"),
          },
          {
            path: "rating",
            component: () => import("./views/extraKits/rating"),
          },
          {
            path: "spinButton",
            component: () => import("./views/extraKits/spinButton"),
          },
          {
            path: "datePicker",
            component: () => import("./views/extraKits/datePicker"),
          },
          {
            path: "timePicker",
            component: () => import("./views/extraKits/timePicker"),
          },
          {
            path: "imageCropper",
            component: () => import("./views/extraKits/imageCropper"),
          },
          {
            path: "vuedraggable",
            component: () => import("./views/extraKits/vuedraggable"),
          },
          {
            path: "avatar",
            component: () => import("./views/extraKits/avatar"),
          },
          {
            path: "sidebar",
            component: () => import("./views/extraKits/sidebar"),
          },
          {
            path: "spinners",
            component: () => import("./views/extraKits/spinners"),
          },
          {
            path: "vueTree",
            component: () => import("./views/extraKits/vueTree"),
          },
        ],
      },
      //  apps
      {
        path: "/app/apps",
        component: () => import("./views/apps"),
        redirect: "/app/apps/chat",
        children: [
          {
            path: "scrumboard",
            name: "scrumboard",
            component: () => import("./views/apps/scrumboard"),
          },
          {
            path: "add-scrumboard",
            name: "add-scrumboard",
            component: () => import("./views/apps/scrumboardAddBoard"),
          },
          {
            path: "edit-scrumboard",
            name: "edit-scrumboard",
            component: () =>
              import("./views/apps/scrumboard/editScrumBoard"),
          },
          // {
          //   path: "scrumboard-one",
          //   component: () => import("./views/apps/scrumboard/scrumboard-content-one")
          // },
          {
            path: "contact-list-table",
            name: "contact-list-table",
            component: () => import("./views/apps/contactListTable"),
          },
          {
            path: "todo-list",
            name: "todo-list",
            component: () => import("./views/apps/todo-list"),
          },
          {
            path: "invoice",
            name: "invoice",
            component: () => import("./views/apps/invoice"),
          },
          {
            path: "createInvoice",
            name: "createInvoice",
            component: () => import("./views/apps/createInvoice"),
          },
          {
            path: "edit-invoice",
            name: "edit-invoice",
            component: () => import("./views/apps/editInvoice"),
          },
          {
            path: "products",
            name: "products",
            component: () => import("./views/apps/products"),
          },
          {
            path: "product-detail",
            name: "product-detail",
            component: () => import("./views/apps/productDetails"),
          },
          {
            path: "checkout",
            name: "checkout",
            component: () => import("./views/apps/cart"),
          },
          {
            path: "checkout-address",
            name: "checkout-address",
            component: () => import("./views/apps/checkoutAddress"),
          },
          {
            path: "printInvoice",
            name: "printInvoice",
            component: () => import("./views/apps/printInvoice"),
          },
          {
            path: "taskManager",
            name: "taskManager",
            component: () => import("./views/apps/taskManager"),
          },
          {
            path: "calendar",
            name: "calendar",
            component: () => import("./views/apps/calendar"),
          },
          {
            path: "table",
            name: "table",
            component: () => import("./views/apps/table"),
          },
          {
            path: "vue-table",
            path: "vue-table",
            component: () => import("./views/apps/vue-tables"),
          },
          {
            path: "inbox",
            name: "inbox",
            component: () => import("./views/apps/inbox"),
          },
          {
            path: "chat",
            component: () => import("./views/apps/chat"),
          },
          {
            path: "contact-details",
            component: () => import("./views/apps/contact-details"),
          },
          {
            path: "contact-grid",
            component: () => import("./views/apps/contact-grid"),
          },
          {
            path: "contact-list",
            component: () => import("./views/apps/contact-list"),
          },
          {
            path: "payment-checkout",
            component: () => import("./views/apps/paymentCheckout"),
          },
        ],
      },

      // form
      {
        path: "/app/forms",
        component: () => import("./views/form"),
        redirect: "/app/form/basicForms",
        children: [
          {
            path: "basicForms",
            component: () => import("./views/form/basicForms"),
          },
          {
            path: "basicActionBar",
            component: () => import("./views/form/basicActionBar"),
          },
          {
            path: "formLayouts",
            component: () => import("./views/form/formLayouts"),
          },
          {
            path: "formWizard",
            component: () => import("./views/form/formWizard"),
          },
          {
            path: "tagInput",
            component: () => import("./views/form/tagInput"),
          },
          {
            path: "mask",
            component: () => import("./views/form/masks"),
          },
          {
            path: "formComponent",
            component: () => import("./views/form/formComponent"),
          },
          {
            path: "datepicker",
            component: () => import("./views/form/datepicker"),
          },
          {
            path: "V2Datepicker",
            component: () => import("./views/form/V2Datepicker"),
          },
        ],
      },
      // datatables
      {
        path: "/app/datatables",
        component: () => import("./views/datatables"),
        redirect: "/app/datatables/list",
        children: [
          {
            path: "paging",
            name: "paging",
            component: () => import("./views/datatables/paging"),
          },
          {
            path: "filter",
            name: "filter",
            component: () => import("./views/datatables/filter"),
          },
          {
            path: "list",
            name: "list",
            component: () => import("./views/datatables/list"),
          },
          {
            path: "vue-good-table",
            name: "vue-good-table",
            component: () => import("./views/apps/vue-good-table"),
          },
        ],
      },

      // widget
      {
        path: "/app/widgets",
        component: () => import("./views/widgets"),
        redirect: "/app/widgets/widgetCard",
        children: [
          {
            path: "widgetCard",
            component: () => import("./views/widgets/widgetCard"),
          },
          {
            path: "widgetStatistics",
            component: () => import("./views/widgets/widgetStatistics"),
          },
          {
            path: "weatherApp",
            component: () => import("./views/widgets/weatherApp"),
          },
          {
            path: "widgetApp",
            component: () => import("./views/widgets/widgetApp"),
          },
          {
            path: "widgetList",
            component: () => import("./views/widgets/widgetList"),
          },
        ],
      },
      // pages
      {
        path: "/app/pages",
        component: () => import("./views/pages"),
        redirect: "/app/pages/profile",
        children: [
          {
            path: "profile",
            component: () => import("./views/pages/profile"),
          },
          {
            path: "error",
            component: () => import("./views/pages/notFound"),
          },
          {
            path: "icons",
            component: () => import("./views/pages/icons"),
          },
          {
            path: "search-result",
            component: () => import("./views/pages/search-result"),
          },
          {
            path: "pricing-table",
            component: () => import("./views/pages/pricingTable"),
          },
          {
            path: "faq",
            component: () => import("./views/pages/faq"),
          },
        ],
      },

      // chart_componnent//////////----------------------////////////////////////

      {
        path: "/app/charts",
        component: () => import("./views/chart"),
        redirect: "/app/charts/eChart",
        children: [
          {
            // problem
            path: "apexAreaChart",
            component: () => import("./views/chart/apexChart"),
          },
          {
            path: "apexBarChart",
            component: () => import("./views/chart/apexBarChart"),
          },
          // {
          //   path: "apexBasicChart",
          //   component: () => import("./views/chart/apexBasicChart")
          // },
          {
            path: "apexLineChart",
            component: () => import("./views/chart/apexLineChart"),
          },
          {
            path: "apexMixChart",
            component: () => import("./views/chart/apexMixChart"),
          },
          {
            path: "apexColumnChart",
            component: () => import("./views/chart/apexColumnChart"),
          },
          {
            path: "apexPieDonutsChart",
            component: () => import("./views/chart/apexPieDonutsChart"),
          },
          {
            path: "apexRadarChart",
            component: () => import("./views/chart/apexRadarChart"),
          },
          {
            path: "apexRadialBarChart",
            component: () => import("./views/chart/apexRadialBarChart"),
          },
          {
            path: "apexScatterChart",
            component: () => import("./views/chart/apexScatterChart"),
          },
          {
            path: "apexSparklineChart",
            component: () => import("./views/chart/apexSparklineChart"),
          },
        ],
      },
    ],
  },
  // sessions
  {
    path: "/auth",
    component: () => import("./views/auth"),
    redirect: "/auth/sign-in",
    children: [
      {
        path: "sign-in",
        component: () => import("./views/auth/signIn"),
      },
      // {
      //   path: "signupp",
      //   component: () => import("./views/auth/signUp"),
      // },
      {
        path: "forgot",
        component: () => import("./views/auth/forgot"),
      },
    ],
  },

  {
    path: "/vertical-sidebar",
    component: () => import("./containers/layouts/verticalSidebar"),
  },
  {
    path: "*",
    component: () => import("./views/pages/notFound"),
  },
];

const router = new Router({
  mode: "history",
  linkActiveClass: "open",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.

    NProgress.start();
    NProgress.set(0.1);
  }
  next();
});

router.afterEach(() => {
  // Remove initial loading
  const gullPreLoading = document.getElementById("loading_wrap");
  if (gullPreLoading) {
    gullPreLoading.style.display = "none";
  }
  // Complete the animation of the route progress bar.
  setTimeout(() => NProgress.done(), 500);
  // NProgress.done();
  // if (isMobile) {
  if (window.innerWidth <= 1200) {
    // console.log("mobile");
    store.dispatch("changeSidebarProperties");
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
      store.dispatch("changeCompactSidebarProperties");
    }
  } else {
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    // store.state.sidebarToggleProperties.isSecondarySideNavOpen = false;
  }
});

export default router;
