

<template>
  <div class="Approvalorderquery">
    <headeres>
      
      <div >查询</div>
    
    </headeres>
    <div>
      <van-dropdown-menu>
        <van-dropdown-item
          v-model="status"
          :options="statuses"
          @change="changeValue"
        />
      </van-dropdown-menu>
    </div>
    <selectes
      class="Approvalorderquery_select"
      :arrSelect="approvalSelect"
    ></selectes>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import select from "@/components/Select.vue";
import { DropdownMenu, DropdownItem } from "vant";

export default {
  components: {
    selectes: select,
    headeres: Header,
    "van-dropdown-menu": DropdownMenu,
    "van-dropdown-item": DropdownItem,
  },
  data() {
    return {
      leval:'',//权限
       //传值申请单
      approvalSelect:[{
        who:'11',
        status:3,
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
        status:1,
        reason:'1122',
        riqi:'112233',
        jiaotong:'112244',
        tijiao:'112255',
        shijian:'112266',
      },],
      status: 0,
      statuses: [
        { text: "全部状态", value: 0 },
        { text: "测试1", value: 1 },
        { text: "测试2", value: 2 },
      ],
    };
  },
  computed: {},
  created() {

  },
  methods: {
  
    //选择菜单栏
    changeValue(value) {
      console.log(value);
    },
  },
};
</script>
<style lang="scss" scoped>
.Approvalorderquery {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .Approvalorderquery_select {
    flex: 1;
    overflow-y: auto;
  }
}
::v-deep .van-dropdown-menu__bar {
  box-shadow: 0 0 0 0 !important;
}
</style>



