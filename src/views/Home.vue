<template>
  <div class="home">
    <div class="home_title">首页</div>
    <div class="home_title_approve">
      <div class="home_title_approve_title">审批单管理</div>
      <div class="home_title_approve_content">
        <div
          class="home_title_approve_show"
          @click="goApprovalformreview"
          v-if="userInfoid == 1 || userInfoid == 2"
        >
          <div class="home_title_approve_img">
            <img src="../assets/img/approvalformapproved.png" />
            <div class="home_title_approve_msg">{{ userMsgApproval }}</div>
        
          </div>
          <div class="home_title_approve_contents">审批单审核</div>
        </div>

        <div
          v-for="(item, index) in showapprovlist"
          :key="index"
          class="home_title_approve_show"
          @click="goclickapprove(item.url)"
        >
          <div class="home_title_approve_img">
            <img :src="imgsrc(item.img)" />
          </div>
          <div class="home_title_approve_contents">{{ item.content }}</div>
        </div>
      </div>
    </div>
    <div class="home_title_travel">
      <div class="home_title_travel_title">差旅费管理</div>
      <div class="home_title_travel_content">
        <div
          class="home_title_travel_show"
          @click="goReimbursementFormReview"
          v-if="userInfoid == 1 || userInfoid == 2"
        >
          <div class="home_title_travel_img">
            <img src="../assets/img/travelexpensesapproval.png" />
            <div class="home_title_travel_msg">{{ userMsgTravel }}</div>
          </div>
          <div class="home_title_travel_contents">差旅费审核</div>
        </div>
        <div
          v-for="(item, index) in showapprovlist"
          :key="index"
          class="home_title_travel_show"
          @click="goclicktravel(item.url)"
        >
          <div class="home_title_travel_img">
            <img :src="imgsrc(item.img)" />
          </div>
          <div class="home_title_travel_contents">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import utils from "@/utils/index.js";
export default {
  components: {
  },
  data() {
    return {
      userInfoid: "", //级别
      userMsgApproval: 1, //审批单审核未读消息
      userMsgTravel: 2, //差旅费审核未读消息
      showapprovlist: [
        {
          content: "审批单申请",
          url: "BusinesstripApprovalForm",
          img: "approvalformapplication.png",
        },
        {
          content: "审批单查询",
          url: "ApprovaLorderQuery",
          img: "approvalorderquery.png",
        },
      ],
      showtravellist: [
        {
          content: "差旅费申请",
          url: "TravelClaimForm",
          img: "travelexpenseapplication.png",
        },
        {
          content: "差旅费查询",
          url: "TravelExpensesInquiry",
          img: "travelexpensesinquiry.png",
        },
      ],
    };
  },
  computed: {},
  mounted() {
    this.levals();
  },
  methods: {
    //权限分配
    levals() {
      if (window.localStorage.getItem("userInfo")) {
        let userInfoid = JSON.parse(window.localStorage.getItem("userInfo")).id;
        this.userInfoid = userInfoid;
      }
      //如果标识为1 则为处长
      //如果标识为2 则为科长
      //如果标识为3 则为普通员工
    },
    //导入图片地址
    imgsrc(item) {
      return require("@/assets/img/" + item);
    },
    //审批单申请,查询
    goclickapprove(val) {
      this.$router.push({
        name: val,
      });
    },
    //审批单审核
    goApprovalformreview() {
      this.$router.push({
        name: "ApprovalFormApproved",
      });
    },
    //差旅费审核
    goReimbursementFormReview() {
      this.$router.push({
        name: "ReimbursementFormReview",
      });
    },
    //差旅费查询,申请
    goclicktravel(val) {
      this.$router.push({
        name: val,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/home.scss";
</style>
<style scoped>
.child {
  width: 36px;
  height: 36px;
  background: #f2f3f5;
  border-radius: 4px;
}
</style>

