<template>
  <div class="detaile">
    <headeres>
      <div v-if="leval == 1">审批单详情</div>
      <div v-else>出差单详情</div>
    </headeres>
    <div class="detaile_title">
      <div>{{ detailsList.who }}</div>
      <div>{{ detailsList.where }}</div>
    </div>
    <div class="detail_content">
      <div class="detail_show">
        <div class="detail_show_top">
          <div>
            <div>部门</div>
            <div>{{ detailsList.bumen }}</div>
          </div>
          <div>
            <div>科室</div>
            <div>{{ detailsList.keshi }}</div>
          </div>
          <div>
            <div>姓名</div>
            <div>{{ detailsList.xingming }}</div>
          </div>
          <div>
            <div>职务 (级别)</div>
            <div>{{ detailsList.zhiwu }}</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="detail_show_bottom">
          <div>
            <div>出差日期</div>
            <div>{{ detailsList.riqi }}</div>
          </div>
          <div>
            <div>出差任务</div>
            <div>{{ detailsList.renwu }}</div>
          </div>
          <div>
            <div>出差地点</div>
            <div>{{ detailsList.didian }}</div>
          </div>
          <div>
            <div>交通工具</div>
            <div>{{ detailsList.gongju }}</div>
          </div>
          <div>
            <div>出差事由</div>
            <div>{{ detailsList.shiyou }}</div>
          </div>
        </div>
        <div class="dividerbold"></div>
        <div class="detail_principal" v-if="leval == 1">
          <div class="detail_principal_title">科室负责人</div>
          <div class="detail_principal_name" v-if="monishenhestatus">{{detailsList.fuzeren}}</div>
          <div class="detail_principal_nameactive" v-else>{{detailsList.fuzeren}}(未审核)</div>
         
        </div>
        <div class="divider" v-if="leval == 1"></div>
        <div class="detail_comments">
          <div>审批意见</div>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">同意</van-radio>
            <van-radio name="2">返回</van-radio>
          </van-radio-group>
        </div>
        <div class="divider"></div>
        <div class="detail" v-if="leval == 2">
          <div class="detail_people">处室负责人</div>
          <van-uploader :after-read="afterRead" v-model="fileList">
            <div class="detail_people_add">
              <van-icon name="plus" class="detail_peopl_icon" />
            </div>
          </van-uploader>
        </div>
        <div class="dividerboldbig"></div>
        <div class="footer">
          <van-button
            plain
            type="info"
            class="footer_cancel"
            @click="cancelSure"
            >取消</van-button
          >
          <van-button type="info" class="footer_submit" @click="submitSure"
            >提交</van-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import { RadioGroup, Radio, Uploader, Icon, Button } from "vant";
export default {
  data() {
    return {
      leval: "", //权限
      radio: "2",
      fileList: [],
      monishenhestatus:false,
      //详情页数据
      detailsList: {
        who: "梁秀英提交的出差",
        where: "信息研究所",
        bumen: "信息研究所",
        keshi: "石家庄研究所",
        xingming: "zhang",
        zhiwu: "处长",
        riqi: "20203233",
        renwu: "冲",
        didian: "北京",
        gongju: "飞机",
        shiyou: "赚钱",
        fuzeren:'张海泉'
      },
    };
  },
  components: {
    headeres: Header,
    "van-radio-group": RadioGroup,
    "van-radio": Radio,
    "van-uploader": Uploader,
    "van-icon": Icon,
    "van-button": Button,
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
    //上传头像
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    //提交上传
    submitSure() {
      alert(1);
    },
    //取消
    cancelSure() {
      this.fileList = [];
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/detailsapproval.scss";
</style>
<style lang="scss" scoped>
.img-icon {
  height: 20px;
}
</style>

