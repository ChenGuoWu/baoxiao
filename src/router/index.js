import Vue from "vue";
import VueRouter from "vue-router";
// import store from '@/store/index.js'
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () =>
      import("@/views/Home.vue"),
    meta: {
      tittle: '首页'
    }
  },
  {
    path: "/approvalorderquery",
    name: "ApprovaLorderQuery",
    component: () =>
      import("@/views/ApprovaLorderQuery"),
    meta: {
      tittle: '出差单查询',
      type:'1',//代表审批
    }
  },
  {
    path: "/travelexpensesinquiry",
    name: "TravelExpensesInquiry",
    component: () =>
      import("@/views/TravelExpensesInquiry"),
    meta: {
      tittle: '报销单查询',
      type:'2',//代表差旅
    }
  },
  {
    path: "/businesstripapprovalform",
    name: "BusinesstripApprovalForm",
    component: () =>
      import("@/views/BusinesstripApprovalForm"),
    meta: {
      tittle: '出差审批单'
    }
  },
  {
    path: "/travelclaimform",
    name: "TravelClaimForm",
    component: () =>
      import("@/views/TravelClaimForm"),
    meta: {
      tittle: '差旅报销单',
      
    }
  },
  {
    path: "/approvalformapproved",
    name: "ApprovalFormApproved",
    component: () =>
      import("@/views/ApprovalFormApproved"),
    meta: {
      tittle: '出差单审核',
      type:'1',//代表审批
    }
  },
  {
    path: "/reimbursementformreview",
    name: "ReimbursementFormReview",
    component: () =>
      import("@/views/ReimbursementFormReview"),
    meta: {
      tittle: '报销单审核',
      type:'2',//代表差旅

    }
  },

  {
    path: "/detailsofapprovalform",
    name: "DetailsOfApprovalForm",
    component: () =>
      import("@/views/DetailsOfApprovalForm"),
    meta: {
      tittle: '审批单详情'
    }
  },
  {
    path: "/detailsreimbursement",
    name: "DetailsReimbursement",
    component: () =>
      import("@/views/DetailsReimbursement"),
    meta: {
      tittle: '报销单详情'
    }
  },
  {
    path: "/",
    redirect: 'Home',
  },
  {
    path: "*",
    component: () =>
      import("@/views/Not.vue"),
    meta: {
      tittle: '404'
    }
  }
];
const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
});
// router.beforeEach((to, from, next) => {
//   if (window.localStorage.getItem('userToken')) {
//     // 如果用户在登录页面
//     next();
//   } else {
//     if (to.name === 'Home') {
//       next();
//     } else {
//       next({ path: '/' })
//     }
//   }
// })
//解决from  home  to  ligin的 报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
export default router;
