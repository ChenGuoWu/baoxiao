<template>
  <div class="reimbursementform">
    <headeres >
      <div v-if="leval==1">差旅费批准</div>
      <div v-else>报销单审核</div>
      
    </headeres>
    <selectes class="reimbursementform_select"  :arrSelect="reimbursementReviewSelect"></selectes>
  </div>
</template>
<script>
import select from "@/components/Select.vue";
import Header from "@/components/Header.vue";
export default {
  data(){
    return {
      leval:'',//权限
       //传值申请单
      reimbursementReviewSelect:[{
        who:'11',
        status:1,
        reason:'1122',
        riqi:'112233',
        jiaotong:'112244',
        tijiao:'112255',
        shijian:'112266',
      },{
        who:'11',
        status:2,
        reason:'1122',
        riqi:'112233',
        jiaotong:'112244',
        tijiao:'112255',
        shijian:'112266',
      },{
        who:'11',
        status:3,
        reason:'1122',
        riqi:'112233',
        jiaotong:'112244',
        tijiao:'112255',
        shijian:'112266',
      },],
    }
  },
  components: {
    selectes: select,
    headeres: Header,
  },
  methods:{
     //权限分配
    levals() {
      if (window.localStorage.getItem("userInfo")) {
        let userInfoid = JSON.parse(window.localStorage.getItem("userInfo")).id;
        this.leval = userInfoid;
      }
    },
  },
  computed: {},
  created() {
    this.levals()
  },
};
</script>
<style lang="scss" scoped>
.reimbursementform{
    height: 100vh;
    display: flex;
    flex-direction: column;
    .reimbursementform_select{
        flex: 1;
        overflow-y: auto;
    }
}
</style>

