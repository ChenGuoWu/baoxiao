<template>
  <div class="application">
    <headeres>
      <div>出差审批单</div>
    </headeres>

    <div class="application_message">
      <van-form @submit="submitSure">
        <div class="application_basicinformation">
          <div class="application_basicinformation_content">
            <div>部门</div>
            <van-field
              v-model="submitForm.bumen"
              placeholder="请输入部门名称"
              name=""
              label=""
              class="inputs"
              input-align="right"
              :rules="[{ required: true, message: '请填写部门名称' }]"
            />
          </div>
          <div class="application_basicinformation_content">
            <div>科室</div>
            <van-field
              v-model="submitForm.keshi"
              placeholder="请输入科室名称"
              class="inputs"
              input-align="right"
              :rules="[{ required: true, message: '请填写科室名称' }]"
            />
          </div>
          <div class="application_basicinformation_content">
            <div>姓名</div>
            <van-field
              v-model="submitForm.name"
              placeholder="请输入出差人姓名"
              class="inputs"
              input-align="right"
              :rules="[{ required: true, message: '请填写出差人姓名' }]"
            />
          </div>
          <div class="application_basicinformation_content">
            <div>职务 (级别)</div>
            <van-field
              v-model="submitForm.valuePosition"
              placeholder="请选择 >"
              class="inputs"
              input-align="right"
              @click="showPickerPosition = true"
              :rules="[{ required: true, message: '请选择' }]"
            />
            <van-popup
              v-model="showPickerPosition"
              round
              position="bottom"
           
            >
            
              <van-picker
                title="职务"
                show-toolbar
                :columns="columnsPosition"
                @cancel="showPickerPosition = false"
                @confirm="onConfirmPosition"
           
              />
            </van-popup>
          </div>
        </div>
        <div class="dividerbold"></div>
        <div class="application_title">行程</div>

        <div class="application_stroke">
          <div v-for="(item, index) in strokeAddForm" :key="index">
            <div class="divider"></div>
            <div class="application_stroke_content">
              <div class="application_stroke_title">行程{{ index + 1 }}</div>
              <div class="application_stroke_delet" @click="deletStroke(index)">
                删除
              </div>
            </div>
            <div class="application_stroke_content">
              <div>开始日期</div>
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
            <div class="application_stroke_content">
              <div>结束日期</div>
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
            <div class="application_stroke_content">
              <div>出差任务</div>
              <van-field
                v-model="item.renwu"
                placeholder="请选择 >"
                class="inputs"
                input-align="right"
                @click="
                  showPickerTask = true;
                  indexsStroke = index;
                "
                :rules="[{ required: true, message: '请选择' }]"
              />
              <van-popup
                v-model="showPickerTask"
                round
                position="bottom"
           
              >
                <van-picker
                  title="出差任务"
                  show-toolbar
                  :columns="columnsTask"
                  @cancel="showPickerTask = false"
                  @confirm="onConfirmTask"
         
                  
                />
              </van-popup>
            </div>
            <div class="application_stroke_content">
              <div>出差地点</div>
              <van-field
                v-model="item.didian"
                placeholder="请输入出差地点"
                class="inputs"
                input-align="right"
              />
            </div>
            <div class="application_stroke_content">
              <div >交通工具</div>
              <!-- <span class="application_stroke_toselect" v-if=" !item.items">请选择</span> -->
              <div class="application_stroke_traffic">
                <div
                  :class="{ application_stroke_select: item.items == 1 }"
                  @click="updateTrafficOther(item)"
                >
                  其他
                </div>
                <div
                  :class="{ application_stroke_select: item.items == 2 }"
                  @click="updateTrafficCar(item)"
                >
                  汽车
                </div>
                <div
                  :class="{ application_stroke_select: item.items == 3 }"
                  @click="updateTrafficTrain(item)"
                >
                  火车
                </div>
                <div
                  :class="{ application_stroke_select: item.items == 4 }"
                  @click="updateTrafficAir(item)"
                >
                  飞机
                </div>
              </div>
            </div>
            <div class="application_stroke_contents">
              <div>出差事由</div>
              <van-field
                v-model="item.reason"
                rows="1"
                type="textarea"
                placeholder="请输入出差事由"
                :rules="[{ required: true, message: '' }]"
              />
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="add" @click="addStroke">
          <van-icon name="plus" class="add_icon" /> 增加
        </div>
        <div class="dividerbold"></div>
        <div class="approve">
          <div class="approve_people">审批人</div>
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
            >提交</van-button
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
  Uploader,
  Button,
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
    "van-uploader": Uploader,
    "van-button": Button,
    "van-form": Form,
  },

  computed: {},
  data() {
    return {
      //接口所需数据  除新增外
      submitForm: {
        bumen: "",
        keshi: "",
        name: "",
        valuePosition: "", //选择职务数据
        shenpiren: "",
      },
      indexsStroke: "", //增加栏中当前操作的是哪一项 行程
      //新增行程数据
      strokeAddForm: [
        {
          starttime: "",
          endtime: "",
          renwu: "",
          didian: "",
          items: 1,
          reason: "",
        },
        {
          starttime: "",
          endtime: "",
          renwu: "",
          didian: "",
          items: 1,
          reason: "",
        },
      ],
      //选择职务数据
      showPickerPosition: false,
      columnsPosition: ["处长", "站长", "普通","处长", "站长", "普通"],
      //行程相关的数据
      showPickerstarttime: false,
      showPickerendtime: false,
      showPickerTask: false,
      columnsTask: ["1", "2", "3"],
      //审批人数据
      showPickerPeople: false,
      columnsPeople: ["张三", "里斯", "王五"],
    };
  },
  created() {},
  methods: {
    //选择职务的方法
    onConfirmPosition(value) {
      this.submitForm.valuePosition = value;
      this.showPickerPosition = false;
    },
    //选择审批人的方法
    onConfirmPeople(value) {
      this.submitForm.shenpiren = value;
      this.showPickerPeople = false;
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

    //选择出差任务
    onConfirmTask(value) {
      this.strokeAddForm[this.indexsStroke].renwu = value;
      this.showPickerTask = false;
    },

    //点击增加时
    addStroke() {
      let addObj = {
        starttime: "",
        endtime: "",
        renwu: "",
        didian: "",
        items: 1,
        reason: "",
      };
      this.strokeAddForm.push(addObj);
    },
    //点击删除时
    deletStroke(index) {
      this.strokeAddForm.splice(index, 1);
    },
    //修改交通工具
    updateTrafficOther(item) {
      item.items = 1;
    },
    updateTrafficCar(item) {
      item.items = 2;
    },
    updateTrafficTrain(item) {
      item.items = 3;
    },
    updateTrafficAir(item) {
      item.items = 4;
    },
    //提交
    submitSure(value) {
      
      console.log(value);
      alert(1);
      //重置
      // this.cancelSure();
    },
    //取消
    cancelSure() {
      Object.keys(this.submitForm).forEach((key) => {
        this.submitForm[key] = "";
      });
      this.strokeAddForm.forEach((item) => {
        Object.keys(item).forEach((key) => {
          item[key] = "";
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/businesstripapprovalform.scss";
</style>


