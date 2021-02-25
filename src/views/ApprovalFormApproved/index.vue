<template>
  <div class="approvalformapproved">
    <headeres>
      <div v-if="leval == 1">审批单批准</div>
      <div v-else>出差单审核</div>
    </headeres>
    <selectes
      class="approvalformapproved_select"
      :arrSelect="approvalReviewSelect"
    ></selectes>
  </div>
</template>
<script>
import select from "@/components/Select.vue";
import Header from "@/components/Header.vue";
export default {
  data() {
    return {
      leval: "", //权限
      //传值申请单
      approvalReviewSelect: [
        {
          who: "11",
          status: 1,
          reason: "1122",
          riqi: "112233",
          jiaotong: "112244",
          tijiao: "112255",
          shijian: "112266",
        },
        {
          who: "11",
          status: 2,
          reason: "1122",
          riqi: "112233",
          jiaotong: "112244",
          tijiao: "112255",
          shijian: "112266",
        },
        {
          who: "11",
          status: 3,
          reason: "1122",
          riqi: "112233",
          jiaotong: "112244",
          tijiao: "112255",
          shijian: "112266",
        },
      ],
    };
  },
  components: {
    selectes: select,
    headeres: Header,
  },

  computed: {},
  created() {
    this.levals();
  },
  methods: {
    //权限分配
    levals() {
      if (window.localStorage.getItem("userInfo")) {
        let userInfoid = JSON.parse(window.localStorage.getItem("userInfo")).id;
        this.leval = userInfoid;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.approvalformapproved {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .approvalformapproved_select {
    flex: 1;
    overflow-y: auto;
  }
}
</style>

