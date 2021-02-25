<template>
  <div class="reimbursement">
    <headeres>
      <div>差旅报销单</div>
    </headeres>
    <div class="reimbursement_message">
      <van-form @submit="submitSure">
        <div class="reimbursement_basicinformation">
          <div class="reimbursement_basicinformation_content">
            <div>审批人ID</div>
            <van-field
              v-model="submitForm.id"
              placeholder="请选择审批单ID号 >"
              class="inputs"
              input-align="right"
              @click="showPickerId = true"
              :rules="[{ required: true, message: '请填写部门名称' }]"
            />
            <van-popup
              v-model="showPickerId"
              round
              position="bottom"
            >
              <van-picker
                title="职务"
                show-toolbar
                :columns="columnsId"
                @cancel="showPickerId = false"
                @confirm="onConfirmId"
              />
            </van-popup>
          </div>

          <div class="reimbursement_basicinformation_content">
            <div>人员名称</div>
            <van-field
              v-model="submitForm.namePeople"
              placeholder="请输入人员名称"
              class="inputs"
              input-align="right"
              :rules="[{ required: true, message: '请输入人员名称' }]"
            />
          </div>
          <div class="reimbursement_basicinformation_content">
            <div>部门</div>
            <van-field
              v-model="submitForm.bumen"
              placeholder="请输入部门"
              class="inputs"
              input-align="right"
              :rules="[{ required: true, message: '请输入部门' }]"
            />
          </div>
          <div class="reimbursement_basicinformation_content">
            <div>职务 (级别)</div>
            <van-field
              v-model="submitForm.jibie"
              placeholder="请输入职务"
              class="inputs"
              input-align="right"
               :rules="[{ required: true, message: '请输入职务' }]"
            />
          </div>
          <div class="reimbursement_basicinformation_content">
            <div>出差地点</div>
            <van-field
              v-model="submitForm.didian"
              placeholder="请输入出差地点"
              class="inputs"
              input-align="right"
                   :rules="[{ required: true, message: '请输入出差地点' }]"
            />
          </div>
          <div class="reimbursement_basicinformation_content">
            <div>出差事由</div>
            <van-field
              v-model="submitForm.shiyou"
              placeholder="请输入出差事由"
              class="inputs"
              input-align="right"
               :rules="[{ required: true, message: '请输入出差地点' }]"
            />
          </div>
        </div>
        <div class="dividerbold"></div>
        <div class="reimbursement_salarynumber">
          <div class="reimbursement_salarynumber_content">
            <div>工资号</div>
            <van-field
              v-model="submitForm.salary"
              placeholder="请输入工资号"
              class="inputs"
              input-align="right"
              :rules="[{ required: true, message: '请输入工资号' }]"
            />
          </div>
          <div class="reimbursement_salarynumber_content">
            <div>集团公司管内</div>
            <van-radio-group v-model="submitForm.radio" direction="horizontal">
              <van-radio name="1">是</van-radio>
              <van-radio name="2">否</van-radio>
            </van-radio-group>
          </div>
          <div class="reimbursement_salarynumber_content">
            <div>部门代码</div>
            <van-field
              v-model="submitForm.code"
              placeholder="请选择 >"
              class="inputs"
              input-align="right"
              @click="showPickerCode = true"
              :rules="[{ required: true, message: '请选择' }]"
            />
            <van-popup
              v-model="showPickerCode"
              round
              position="bottom"
            >
              <van-picker
                title="部门代码"
                show-toolbar
                :columns="columnsCode"
                @cancel="showPickerCode = false"
                @confirm="onConfirmCode"
              />
            </van-popup>
          </div>
          <div class="reimbursement_salarynumber_content">
            <div>任务</div>
            <van-field
              v-model="submitForm.tasks"
              placeholder="请选择 >"
              class="inputs"
              input-align="right"
              @click="showPickerTasks = true"
              :rules="[{ required: true, message: '请选择' }]"
            />
            <van-popup
              v-model="showPickerTasks"
              round
              position="bottom"
            >
              <van-picker
                title="任务"
                show-toolbar
                :columns="columnsTasks"
                @cancel="showPickerTasks = false"
                @confirm="onConfirmTasks"
              />
            </van-popup>
          </div>
        </div>
        <div class="dividerbold"></div>
        <div class="reimbursement_title">行程</div>
        <div class="reimbursement_stroke">
          <div v-for="(item, index) in strokeAddForm" :key="index">
            <div class="divider"></div>
            <div class="reimbursement_stroke_content">
              <div class="reimbursement_stroke_title">行程{{ index + 1 }}</div>
              <div
                class="reimbursement_stroke_delet"
                @click="deletStroke(index)"
              >
                删除
              </div>
            </div>
            <div class="reimbursement_stroke_content">
              <div>出发地点</div>
              <van-field
                v-model="item.didian"
                placeholder="请输入出发地点"
                class="inputs"
                input-align="right"
                :rules="[{ required: true, message: '请输入出发地点' }]"
              />
            </div>
            <div class="reimbursement_stroke_content">
              <div>出发时间</div>
              <van-field
                v-model="item.starttime"
                placeholder="请选择 >"
                class="inputs"
                input-align="right"
                @click="
                  showPickerstarttime = true;
                  indexsStroke = index;
                "
                   :rules="[{ required: true, message: '请选择' }]"
              />
              <van-calendar
                v-model="showPickerstarttime"
                @confirm="onConfirmstarttime"
              />
            </div>
            <div class="reimbursement_stroke_content">
              <div>车次</div>
              <van-field
                v-model="item.checi"
                placeholder="请输入车次"
                class="inputs"
                input-align="right"
                :rules="[{ required: true, message: '请输入车次' }]"
              />
            </div>
            <div class="reimbursement_stroke_content">
              <div>到达地点</div>
              <van-field
                v-model="item.daodadidian"
                placeholder="请输入到达地点"
                class="inputs"
                input-align="right"
                :rules="[{ required: true, message: '请输入到达地点' }]"
              />
            </div>
            <div class="reimbursement_stroke_content">
              <div>到达时间</div>
              <van-field
                v-model="item.endtime"
                placeholder="请选择 >"
                class="inputs"
                input-align="right"
                @click="
                  showPickerendtime = true;
                  indexsStroke = index;
                "
                 :rules="[{ required: true, message: '请选择' }]"
              />
              <van-calendar
                v-model="showPickerendtime"
                @confirm="onConfirmendtime"
              />
            </div>
            <div class="reimbursement_stroke_content">
              <div>车次</div>
              <van-field
                v-model="item.daodacheci"
                placeholder="请输入车次"
                class="inputs"
                input-align="right"
                 :rules="[{ required: true, message: '请输入车次' }]"
              />
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="add" @click="addStroke">
          <van-icon name="plus" class="add_icon" /> 增加
        </div>
        <div class="dividerbold"></div>
        <div class="reimbursement_title">差费</div>
        <div class="divider"></div>
        <div class="reimbursement_escort">
          <div class="reimbursement_escort_content">
            <div>伙食标准/天数</div>
            <van-field
              v-model="submitForm.days"
              placeholder="请选择 >"
              class="inputs"
              input-align="right"
              @click="showPickerDays = true"
              :rules="[{ required: true, message: '请选择' }]"
            />
            <van-popup
              v-model="showPickerDays"
              round
              position="bottom"
            >
              <van-picker
                title="伙食标准"
                show-toolbar
                :columns="columnsDays"
                @cancel="showPickerDays = false"
                @confirm="onConfirmDays"
              />
            </van-popup>
          </div>
          <div class="reimbursement_escort_content">
            <div>伙食金额</div>
            <van-field
              v-model="submitForm.money"
              placeholder="请输入"
              class="inputs"
              input-align="right"
                 :rules="[{ required: true, message: '请输入' }]"
            />
          </div>
          <div class="reimbursement_escort_content">
            <div>交通费</div>
            <van-field
              v-model="submitForm.jiaotong"
              placeholder="请输入"
              class="inputs"
              input-align="right"
                :rules="[{ required: true, message: '请输入' }]"
            />
          </div>
          <div class="reimbursement_escort_content">
            <div>住宿费</div>
            <van-field
              v-model="submitForm.zhusu"
              placeholder="请输入"
              class="inputs"
              input-align="right"
                 :rules="[{ required: true, message: '请输入' }]"
            />
          </div>
        </div>
        <div class="dividerbold"></div>
        <div class="reimbursement_title">餐券使用</div>
        <div class="reimbursement_voucher">
          <div v-for="(item, index) in mealAddForm" :key="index">
            <div class="divider"></div>
            <div class="reimbursement_voucher_content">
              <div class="reimbursement_voucher_title">单据{{ index + 1 }}</div>
              <div
                class="reimbursement_voucher_delet"
                @click="deletMeal(index)"
              >
                删除
              </div>
            </div>
            <div class="reimbursement_voucher_content">
              <div>使用日期</div>
              <van-field
                v-model="item.usertime"
                placeholder="请选择 >"
                class="inputs"
                input-align="right"
                @click="
                  showPickerusertime = true;
                  indexsMeal = index;
                "
                   :rules="[{ required: true, message: '请选择 >' }]"
              />
              <van-calendar
                v-model="showPickerusertime"
                @confirm="onConfirmusertime"
              />
            </div>
            <div class="reimbursement_voucher_content">
              <div>使用单位</div>
              <van-field
                v-model="item.danwei"
                placeholder="请输入"
                class="inputs"
                input-align="right"
                :rules="[{ required: true, message: '请输入' }]"
              />
            </div>
            <div class="reimbursement_voucher_content">
              <div>券号</div>
              <van-field
                v-model="item.quanhao"
                placeholder="请输入"
                class="inputs"
                input-align="right"
                :rules="[{ required: true, message: '请输入' }]"
              />
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="add" @click="addMeal">
          <van-icon name="plus" class="add_icon" /> 增加
        </div>
        <div class="dividerbold"></div>
        <div class="approve">
          <div class="approve_people">审批人</div>
          <!-- <van-uploader :after-read="afterRead" v-model="fileList">
            <div class="approve_people_add">
              <van-icon name="plus" class="approve_peopl_icon" />
            </div>
          </van-uploader> -->
            <van-field
            v-model="submitForm.shenpiren"
            placeholder="请选择审批人"
            class="inputs"
            input-align="left"
            @click="showPickerPeople = true"
            :rules="[{ required: true, message: '' }]"
          />
          <van-popup
            v-model="showPickerPeople"
            round
            position="bottom"
          >
            <van-picker
              title="审批人"
              show-toolbar
              :columns="columnsPeople"
              @cancel="showPickerPeople = false"
              @confirm="onConfirmPeople"

            />
          </van-popup>
        </div>
        <div class="dividerboldbig"></div>
        <div class="footer">
          <van-button
            plain
            type="info"
            class="footer_cancel"
            @click="cancelSure"
            native-type="button"
            >取消</van-button
          >
          <van-button type="info" class="footer_submit" native-type="submit"
            >保存</van-button
          >
        </div>
      </van-form>
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
  Icon,
  // Uploader,
  Button,
  RadioGroup,
  Radio,
  Form,
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
    "van-icon": Icon,
    // "van-uploader": Uploader,
    "van-button": Button,
    "van-radio-group": RadioGroup,
    "van-radio": Radio,
    "van-form": Form,
  },

  computed: {},
  data() {
    return {
      // fileList: [],
      submitForm: {
        id: "",
        bumen: "",
        jibie: "",
        namePeople: "",
        valuePosition: "", //选择职务数据
        shiyou: "",
        salary: "",
        code: "",
        tasks: "",
        radio: "1",
        days: "",
        money: "",
        jiaotong: "",
        zhusu: "",
        shenpiren:''//审批人
      },
      indexsStroke: "", //记录当前点中的index数据 行程
      indexsMeal: "", //记录当前餐券点中的index数据 餐券
      //行程增加的数据
      strokeAddForm: [
        {
          starttime: "",
          endtime: "",
          didian: "",
          daodadidian: "",
          checi: "",
          daodacheci: "",
        },
      ],
      //餐券增加的数据
      mealAddForm: [
        {
          damwei: "",
          quanhao: "",
          usertime: "",
        },
      ],

      showPickerCode: false,
      showPickerTasks: false,
      showPickerDays: false,
      //选择职务数据
      showPickerPosition: false,
      columnsPosition: ["处长", "站长", "普通"],
      //行程
      showPickerstarttime: false,
      showPickerendtime: false,
      showPickerusertime: false,
      showPickerId: false,
      showPickerPeople:false,
      columnsId: ["001", "002", "003"],
      columnsCode: ["01011", "01021", "01013"],
      columnsTasks: ["01011", "01021", "01013"],
      columnsDays: ["01011", "01021", "01013"],
      columnsPeople: ["张三", "李四", "王五"],
    };
  },
  created() {},
  methods: {
    //选择职务的方法
    onConfirmPosition(value) {
      this.submitForm.valuePosition = value;
      this.showPickerPosition = false;
    },
    //日期
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    //开始日期
    onConfirmstarttime(date) {
      //存在开始日期时比较
      if (this.strokeAddForm[this.indexsStroke].endtime) {
        if (
          this.formatDate(date) > this.strokeAddForm[this.indexsStroke].endtime
        ) {
          this.$Toast("结束日期应大于开始日期");
          return;
        }
      }
      this.showPickerstarttime = false;
      this.strokeAddForm[this.indexsStroke].starttime = this.formatDate(date);
    },
    //结束日期
    onConfirmendtime(date) {
      //存在开始日期时比较
      if (this.strokeAddForm[this.indexsStroke].starttime) {
        if (
          this.formatDate(date) <
          this.strokeAddForm[this.indexsStroke].starttime
        ) {
          this.$Toast("结束日期应大于开始日期");

          return;
        }
      }
      this.showPickerendtime = false;
      this.strokeAddForm[this.indexsStroke].endtime = this.formatDate(date);
    },
    //使用日期
    onConfirmusertime(date) {
      this.showPickerusertime = false;
      this.mealAddForm[this.indexsMeal].usertime = this.formatDate(date);
    },

    //选择审批人Id
    onConfirmId(value) {
      this.submitForm.id = value;
      this.showPickerId = false;
    },

    //选择部门代码
    onConfirmCode(value) {
      this.submitForm.code = value;
      this.showPickerCode = false;
    },
    //选择任务
    onConfirmTasks(value) {
      this.submitForm.tasks = value;
      this.showPickerTasks = false;
    },
    //选择伙食标准
    onConfirmDays(value) {
      this.submitForm.days = value;
      this.showPickerDays = false;
    },
    //选择审批人
    onConfirmPeople(value) {
      this.submitForm.shenpiren = value;
      this.showPickerPeople = false;
    },
    //上传头像
    // afterRead(file) {
    //   // 此时可以自行将文件上传至服务器
    //   console.log(file);
    // },
    //点击删除时 行程
    deletStroke(index) {
      this.strokeAddForm.splice(index, 1);
    },
    //点击删除时 餐券
    deletMeal(index) {
      this.mealAddForm.splice(index, 1);
    },
    //点击增加时 行程
    addStroke() {
      let addObj = {
        starttime: "",
        endtime: "",
        didian: "",
        daodadidian: "",
        checi: "",
        daodacheci: "",
      };
      this.strokeAddForm.push(addObj);
    },
    //点击增加时 餐券
    addMeal() {
      let addObj = {
        damwei: "",
        quanhao: "",
        usertime: "",
      };
      this.mealAddForm.push(addObj);
    },
    //点击取消
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
      // this.fileList = [];
    },
    //提交
    submitSure(value) {
      console.log(value);
      alert(3);
      
      //重置
      // this.cancelSure();
      //跳转至主页面
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/reimbursement.scss";
</style>



