<template>
  <div class="select">
    <ul class="select_lists">
      <li
        class="select_lists_content"
        @click="gotodetail"
        v-for="(item, index) in arrSelect"
        :key="index"
      >
        <div class="select_lists_title">
          <div>{{ item.who }}</div>

          <div v-if="item.status == 1">
            <img src="../assets/img/Pending.png" /> <span v-if="leval">待审批</span> <span v-else>待批准</span> 
          </div>
          <div v-if="item.status == 2">
            <img src="../assets/img/havepending.png" /> <span v-if="leval">已审批</span> <span v-else>已批准</span>
          </div>
          <div v-if="item.status == 3">
            <img src="../assets/img/rejected.png" /><span v-if="leval">被驳回</span> <span v-else>已退回</span> 
          </div>
        </div>
        <div class="select_lists_reason">
          <div>出差事由 :</div>
          <div>{{ item.reason }}</div>
        </div>
        <div class="select_lists_date">
          <div>出差日期 :</div>
          <div>{{ item.riqi }}</div>
        </div>
        <div class="select_lists_traffic">
          <div>交通工具 :</div>
          <div>{{ item.jiaotong }}</div>
        </div>
        <van-divider />
        <div class="select_lists_people">
          <div class="select_lists_contents">
            <div>提交人 :</div>
            <div>{{ item.tijiao }}</div>
          </div>
          <div class="select_lists_date">{{ item.shijian }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { Icon, Divider } from "vant";

export default {
  components: {
    "van-icon": Icon,
    "van-divider": Divider,
  },
  data() {
    return {
      leval:true,//默认显示待审批
    };
  },
  computed: {},
  mounted() {
    this.levalType()
  },
  props: ["arrSelect"],
  methods: {
    //判断是否是处长的差旅费批准页面
    levalType(){
      let  userInfoid=JSON.parse(window.localStorage.getItem('userInfo')).id ;
      if (this.$route.meta.tittle=='报销单审核'&&userInfoid=='1') {
       
        this.leval=false;
      }
    },
    //跳转详情页
    gotodetail() {
      //跳转审批单详情页
      if (this.$route.meta.type == 1) {
        this.$router.push({
          name: "DetailsOfApprovalForm",
        });
      }
      //跳转报销单详情页
      if (this.$route.meta.type == 2) {
         this.$router.push({
          name: "DetailsReimbursement",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/select.scss";
</style>


