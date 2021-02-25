<template>
  <div class="reimbursement">
    <headeres>
      <div>报销单详情</div>
    </headeres>
    <div class="reimbursement_message">
   
        <div class="reimbursement_basicinformation">
          <div class="reimbursement_basicinformation_content">
            <div>审批人ID</div>
            <div>{{submitForm.id}}</div>
          </div>

          <div class="reimbursement_basicinformation_content">
            <div>人员名称</div>
            <div>{{ submitForm.namePeople }}</div>
          </div>
          <div class="reimbursement_basicinformation_content">
            <div>部门</div>
            <div>{{ submitForm.bumen }}</div>
          </div>
          <div class="reimbursement_basicinformation_content">
            <div>职务 (级别)</div>
            <div>{{ submitForm.jibie }}</div>
          </div>
          <div class="reimbursement_basicinformation_content">
            <div>部门代码</div>
            <div>{{ submitForm.code }}</div>
          </div>
          <div class="reimbursement_basicinformation_content">
            <div>工资号</div>
            <div>{{ submitForm.salary }}</div>
          </div>
          <div class="reimbursement_basicinformation_content">
            <div>出差地点</div>
            <div>{{ submitForm.didian }}</div>
          </div>
          <div class="reimbursement_basicinformation_content">
            <div>集团公司管内</div>
            <div>{{ submitForm.radio }}</div>
          </div>
          <div class="reimbursement_basicinformation_content">
            <div>任务</div>
            <div>{{ submitForm.tasks }}</div>
          </div>
          <div class="reimbursement_basicinformation_content">
            <div>出差事由</div>
            <div>{{ submitForm.shiyou }}</div>
          </div>
        </div>
        <div class="dividerbold"></div>
        <div class="reimbursement_title">行程</div>
        <div class="reimbursement_stroke">
          <div v-for="(item, index) in strokeAddForm" :key="index">
            <div class="divider"></div>
            <div class="reimbursement_stroke_content">
              <div class="reimbursement_stroke_title">行程{{ index + 1 }}</div>
             
            </div>
            <div class="reimbursement_stroke_content">
              <div>出发地点</div>
                <div>{{item.didian}}</div>
            </div>
            <div class="reimbursement_stroke_content">
              <div>出发时间</div>
              <div>{{item.starttime}}</div>
            </div>
            <div class="reimbursement_stroke_content">
              <div>车次</div>
             <div>{{item.checi}}</div>
            </div>
            <div class="reimbursement_stroke_content">
              <div>到达地点</div>
              <div>{{item.daodadidian}}</div>
            </div>
            <div class="reimbursement_stroke_content">
              <div>到达时间</div>
             <div>{{item.endtime}}</div>
            </div>
            <div class="reimbursement_stroke_content">
              <div>车次</div>
              <div>{{item.daodacheci}}</div>
            </div>
          </div>
        </div>
        <div class="dividerbold"></div>
        <div class="reimbursement_title">差费</div>
        <div class="divider"></div>
        <div class="reimbursement_escort">
          
          <div class="reimbursement_escort_content">
            <div>伙食标准/天数</div>
            <div>{{submitForm.days}}</div>
          </div>
          <div class="reimbursement_escort_content">
            <div>伙食金额</div>
           <div>{{submitForm.money}}</div>
          </div>
          <div class="reimbursement_escort_content">
            <div>交通费</div>
            <div>{{submitForm.jiaotong}}</div>
          </div>
          <div class="reimbursement_escort_content">
            <div>住宿费</div>
            <div>{{submitForm.zhusu}}</div>
          </div>
        </div>
        <div class="dividerbold"></div>
        <div class="reimbursement_title">餐券使用</div>
        <div class="reimbursement_voucher">
          <div v-for="(item, index) in mealAddForm" :key="index">
            <div class="divider"></div>
            <div class="reimbursement_voucher_content">
              <div class="reimbursement_voucher_title">行程{{ index + 1 }}</div>
            </div>
            <div class="reimbursement_voucher_content">
              <div>使用日期</div>
             <div>{{item.usertime}}</div>
            </div>
            <div class="reimbursement_voucher_content">
              <div>使用单位</div>
              <div>{{item.danwei}}</div>
            </div>
            <div class="reimbursement_voucher_content">
              <div>券号</div>
              <div>{{item.quanhao}}</div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="dividerboldbig"></div>
        <div class="footer">
          <van-button
            plain
            type="info"
            class="footer_cancel"
            @click="cancelSure"

            >退回</van-button
          >
          <van-button type="info" class="footer_submit" @click="submitSure"
            >同意</van-button
          >
        </div>
      
    </div>
  </div>
</template>
<script>
import {
  Field,
  Picker,
  Popup,
  Divider,
  Calendar,
  Button,
} from "vant";
import Header from "@/components/Header.vue";
export default {
  components: {
    headeres: Header,
    "van-field": Field,
    "van-picker": Picker,
    "van-popup": Popup,
    "van-divider": Divider,
    "van-calendar": Calendar,
    "van-button": Button,
  },

  computed: {},
  data() {
    return {

      submitForm: {
        id: "121212",
        bumen: "23",
        jibie: "323",
        namePeople: "323",
        shiyou: "23",
        salary: "323",
        code: "23",
        didian:'112',
        tasks: "23",
        radio: "1",
        days: "111",
        money: "11111",
        jiaotong: "1111111111",
        zhusu: "22222222",
      },
   
      //行程相关数据
      strokeAddForm: [
        {
          starttime: "21212",
          endtime: "22222",
          didian: "1212",
          daodadidian: "21212",
          checi: "21212",
          daodacheci: "222222222",
        },
        {
          starttime: "21212",
          endtime: "22222",
          didian: "1212",
          daodadidian: "21212",
          checi: "21212",
          daodacheci: "222222222",
        },
      ],
      //餐券数据
      mealAddForm: [
        {
          danwei: "12",
          quanhao: "21",
          usertime: "212",
        },
      ],

      //选择职务数据
      showPickerPosition: false,
      columnsPosition: ["处长", "站长", "普通"],



    };
  },
  created() {},
  methods: {
    //点击退回
    cancelSure() {
      this.strokeAddForm.forEach((item) => {
        Object.keys(item).forEach((key) => {
          item[key] = "";
        });
      });
      this.mealAddForm.forEach((item) => {
        Object.keys(item).forEach((key) => {
          item[key] = "";
        });
      });
     
       Object.keys(this.submitForm).forEach((key) => {
          this.submitForm[key] = "";
        });
      
    },
    //提交
    submitSure() {
      alert(3);
      //重置
      // this.cancelSure();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/detailsreimbursement.scss";
</style>



