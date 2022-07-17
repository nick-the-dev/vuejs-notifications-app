<template>
  <div class="app-container">
    <div class="notifications-header">
      <div class="greeting-wrapper">
        <h2>היי מור, ברוכים הבאים למערכת שליחת הודעות</h2>
        <button class="app-info-btn">?מה זה מערכת שליחת הודעות</button>
      </div>
      <Button text="צור הודעה חדשה" hasPlusIcon></Button>
    </div>
    <UserAccount />
    <div class="messages-archive">
      <h3 class="messages-title">ארכיון הודעות</h3>
      <ve-table :columns="columns" :table-data="tableData" />
      <div class="table-pagination">
        <ve-pagination
          :total="totalCount"
          :page-index="pageIndex"
          :page-size="pageSize"
          @on-page-number-change="pageNumberChange"
          @on-page-size-change="pageSizeChange"
          :layout="['prev', 'jumper', 'next']"
        />
      </div>
      <span class="total-pages">מתוך XXX עמודים</span>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import UserAccount from "../UserAccount.vue";

let DB_DATA = [];

export default {
  name: "DashboardPage",
  components: {
    Button,
    UserAccount,
  },
  data: function () {
    return {
      pageIndex: 1,
      pageSize: 10,
      columns: [
        { field: "date", key: "a", title: "תאריך", align: "right" },
        { field: "time", key: "b", title: "שעה", align: "right" },
        { field: "message", key: "c", title: "תוכן הודעה", align: "right" },
        { field: "howManySent", key: "d", title: "לכמה נשלח" },
        { field: "howManyReceived", key: "e", title: "לכמה הגיעה" },
        { field: "howManyClicked", key: "f", title: "כמה לחצו" },
        {
          field: "status",
          key: "g",
          title: "סטטוס",
          // eslint-disable-next-line no-unused-vars
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            const sent = (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <g
                  id="Group_2695"
                  data-name="Group 2695"
                  transform="translate(-1168 -327)"
                >
                  <path
                    id="Rounded_Rectangle_2_copy_12"
                    data-name="Rounded Rectangle 2 copy 12"
                    d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                    transform="translate(1168 327)"
                    fill="#4bba83"
                  />
                  <path
                    id="Union_4"
                    data-name="Union 4"
                    d="M0,3.707,1.414,2.292,4.243,5.121,9.364,0l1.415,1.414L4.415,7.778h0l-.172.172Z"
                    transform="translate(1173 334)"
                    fill="#fff"
                  />
                </g>
              </svg>
            );

            const sending = (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_288"
                      data-name="Rectangle 288"
                      width="6.65"
                      height="10.766"
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_2712"
                  data-name="Group 2712"
                  transform="translate(-359 -597)"
                >
                  <path
                    id="Rounded_Rectangle_2_copy_12"
                    data-name="Rounded Rectangle 2 copy 12"
                    d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                    transform="translate(359 597)"
                    fill="#fc0"
                  />
                  <g
                    id="Group_2700"
                    data-name="Group 2700"
                    transform="translate(366 602)"
                  >
                    <g
                      id="Group_2703"
                      data-name="Group 2703"
                      clip-path="url(#clip-path)"
                    >
                      <path
                        id="Path_844"
                        data-name="Path 844"
                        d="M6.439,1.574H.211A.211.211,0,0,1,0,1.364V.211A.211.211,0,0,1,.211,0H6.439A.211.211,0,0,1,6.65.211V1.364a.21.21,0,0,1-.211.211M.421,1.153H6.229V.421H.421Z"
                        fill="#fff"
                      />
                      <path
                        id="Path_845"
                        data-name="Path 845"
                        d="M6.439,18.686H.211A.211.211,0,0,1,0,18.476V17.323a.211.211,0,0,1,.211-.211H6.439a.21.21,0,0,1,.211.211v1.153a.211.211,0,0,1-.211.211M.421,18.265H6.229v-.732H.421Z"
                        transform="translate(0 -7.921)"
                        fill="#fff"
                      />
                      <path
                        id="Path_846"
                        data-name="Path 846"
                        d="M1.039,10.606A.211.211,0,0,1,.828,10.4V9.144a1.635,1.635,0,0,1,.486-1.159L2.746,6.578a.282.282,0,0,0,0-.4L1.314,4.769a1.637,1.637,0,0,1-.486-1.16V2.358a.211.211,0,0,1,.421,0V3.609a1.211,1.211,0,0,0,.36.859L3.041,5.875a.7.7,0,0,1,0,1L1.609,8.285a1.213,1.213,0,0,0-.36.859V10.4a.211.211,0,0,1-.211.211"
                        transform="translate(-0.383 -0.994)"
                        fill="#fff"
                      />
                      <path
                        id="Path_847"
                        data-name="Path 847"
                        d="M9.253,10.606a.211.211,0,0,1-.211-.211V9.144a1.213,1.213,0,0,0-.36-.859L7.251,6.879a.7.7,0,0,1,0-1L8.682,4.468a1.211,1.211,0,0,0,.36-.859V2.358a.211.211,0,1,1,.421,0V3.609a1.637,1.637,0,0,1-.486,1.16L7.546,6.175a.282.282,0,0,0,0,.4L8.978,7.985a1.634,1.634,0,0,1,.486,1.159V10.4a.211.211,0,0,1-.211.211"
                        transform="translate(-3.259 -0.994)"
                        fill="#fff"
                      />
                      <rect
                        id="Rectangle_286"
                        data-name="Rectangle 286"
                        width="5.972"
                        height="0.945"
                        transform="translate(0.337 0.372)"
                        fill="#fff"
                      />
                      <rect
                        id="Rectangle_287"
                        data-name="Rectangle 287"
                        width="6.017"
                        height="0.906"
                        transform="translate(0.279 9.572)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            );
            const error = (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <g
                  id="Group_2699"
                  data-name="Group 2699"
                  transform="translate(-401 -597)"
                >
                  <path
                    id="Rounded_Rectangle_2_copy_12"
                    data-name="Rounded Rectangle 2 copy 12"
                    d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                    transform="translate(401 597)"
                    fill="#f04f48"
                  />
                  <path
                    id="Union_4"
                    data-name="Union 4"
                    d="M6.889,5.3,4.415,7.778,3,6.364,5.475,3.889,3,1.414,4.415,0,6.89,2.474,9.364,0l1.415,1.414L8.3,3.888l2.475,2.475L9.364,7.778Z"
                    transform="translate(404 603.001)"
                    fill="#fff"
                  />
                </g>
              </svg>
            );
            let icon;
            const msgStatus = row[column.field];
            let text;
            if (msgStatus === "1") {
              icon = sent;
              text = "נשלח";
            } else if (msgStatus === "0") {
              icon = error;
              text = "נכשל";
            } else if (msgStatus === "2") {
              icon = sending;
              text = "בשליחה";
            }
            return (
              <div class="status-cell">
                {icon}
                {text}
              </div>
            );
          },
        },
        {
          filed: "copyMessage",
          key: "h",
          title: "",
          // eslint-disable-next-line no-unused-vars
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <div class="copy-wrapper">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <g
                      id="Group_2665"
                      data-name="Group 2665"
                      transform="translate(-0.192 -0.171)"
                    >
                      <g
                        id="Rectangle_274"
                        data-name="Rectangle 274"
                        transform="translate(6.192 0.171)"
                        fill="#fff"
                        stroke="#747474"
                        stroke-width="2"
                      >
                        <rect width="14" height="14" stroke="none" />
                        <rect x="1" y="1" width="12" height="12" fill="none" />
                      </g>
                      <g
                        id="Rectangle_273"
                        data-name="Rectangle 273"
                        transform="translate(0.192 6.171)"
                        fill="#fff"
                        stroke="#747474"
                        stroke-width="2"
                      >
                        <rect width="14" height="14" stroke="none" />
                        <rect x="1" y="1" width="12" height="12" fill="none" />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            );
          },
        },
        {
          filed: "view",
          key: "i",
          title: "",
          // eslint-disable-next-line no-unused-vars
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.312"
                  height="13.178"
                  viewBox="0 0 21.312 13.178"
                >
                  <g
                    id="Group_2664"
                    data-name="Group 2664"
                    transform="translate(-5.483 -0.588)"
                  >
                    <g
                      id="Group_2662"
                      data-name="Group 2662"
                      transform="translate(5.991 1.088)"
                    >
                      <g
                        id="Group_2663"
                        data-name="Group 2663"
                        transform="translate(0)"
                      >
                        <path
                          id="Path_785"
                          data-name="Path 785"
                          d="M10.148,12.178A11.594,11.594,0,0,1,.043,6.254a.338.338,0,0,1,0-.331,11.581,11.581,0,0,1,20.21,0,.338.338,0,0,1,0,.331,11.594,11.594,0,0,1-10.1,5.924"
                          transform="translate(0)"
                          fill="#fff"
                          stroke="#747474"
                          stroke-width="1"
                        />
                        <path
                          id="Path_786"
                          data-name="Path 786"
                          d="M83.383,38.765a3.383,3.383,0,1,1,3.383-3.383,3.387,3.387,0,0,1-3.383,3.383m0-6.089a2.706,2.706,0,1,0,2.706,2.706,2.709,2.709,0,0,0-2.706-2.706"
                          transform="translate(-73.235 -29.294)"
                          fill="#3a3a3c"
                          stroke="#747474"
                          stroke-width="1"
                        />
                        <path
                          id="Path_787"
                          data-name="Path 787"
                          d="M10.148,12.178A11.6,11.6,0,0,1,.043,6.254a.339.339,0,0,1,0-.331,11.581,11.581,0,0,1,20.21,0,.339.339,0,0,1,0,.331,11.594,11.594,0,0,1-10.1,5.924M.728,6.089a10.9,10.9,0,0,0,18.84,0,10.9,10.9,0,0,0-18.84,0"
                          transform="translate(0)"
                          fill="#3a3a3c"
                          stroke="#747474"
                          stroke-width="1"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            );
          },
        },
      ],
    };
  },
  computed: {
    // table data
    tableData() {
      const { pageIndex, pageSize } = this;
      return DB_DATA.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
    },
    // total count
    totalCount() {
      return DB_DATA.length;
    },
  },
  methods: {
    // page number change
    pageNumberChange(pageIndex) {
      this.pageIndex = pageIndex;
    },

    // page size change
    pageSizeChange(pageSize) {
      this.pageIndex = 1;
      this.pageSize = pageSize;
    },

    // Simulation table data
    initDatabase() {
      DB_DATA = [];
      for (let i = 0; i < 1000; i++) {
        DB_DATA.push({
          date: "02/01/2019",
          time: "17:38",
          message: "10% הנחה על כל הדגמים לרגל השקת האתר החדש...",
          howManySent: "175" + i,
          howManyReceived: "98",
          howManyClicked: "64",
          status: "1",
        });
      }
    },
  },
  created() {
    this.initDatabase();
  },
};
</script>

<style>
.app-container {
  width: 90%;
  max-width: 1210px;
  padding: 0 15px;
  margin: 0 auto;
}

.notifications-header {
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.greeting-wrapper {
  display: flex;
  align-items: baseline;
}

h2 {
  font-family: AlmoniTzar;
  color: #2f323a;
  font-size: 32px;
  font-weight: 400;
  margin: 0;
  margin-left: 28px;
}

.app-info-btn {
  font-family: AlmoniNeue;
  border: none;
  padding: 0;
  background: none;
  color: #84888c;
  font-size: 14px;
  border-bottom: 1px solid #84888c;
  cursor: pointer;
}

.table-pagination {
  display: flex;
  justify-content: center;
  margin-top: 35px;
  margin-bottom: 5px;
}

.total-pages {
  display: flex;
  justify-content: center;
  color: #84898d;
  font-size: 14px;
  font-family: "AlmoniNeue";
}

.ve-pagination {
  background: none !important;
}

body .ve-pagination .ve-pagination-goto {
  line-height: 1;
  font-size: 0;
}

.ve-pagination .ve-pagination-goto .ve-pagination-goto-input {
  text-align: center;
}

.ve-pagination .ve-pagination-disabled,
.ve-pagination .ve-pagination-li {
  margin: 0 !important;
}

.ve-table-body-td button {
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
}

.status-cell {
  display: flex;
  align-items: center;
  font-family: "AlmoniNeueBold";
  color: #747474;
  font-size: 15px;
}

.status-cell svg {
  margin-left: 10px;
}

.messages-title {
  margin: 0 0 20px;
  color: #2f323a;
  font-family: "AlmoniTzar";
  font-size: 25px;
  font-weight: normal;
}

.ve-table
  .ve-table-container
  table.ve-table-content
  thead.ve-table-header
  tr.ve-table-header-tr
  th.ve-table-header-th {
  font-family: "AlmoniTzar";
  font-size: 17px !important;
  line-height: 1.76;
}

.ve-table
  .ve-table-container
  table.ve-table-content
  thead.ve-table-header
  tr.ve-table-header-tr
  th.ve-table-header-th,
.ve-table
  .ve-table-container
  table.ve-table-content
  tbody.ve-table-body
  tr.ve-table-body-tr
  td.ve-table-body-td,
.ve-table
  .ve-table-container
  table.ve-table-content
  tbody.ve-table-body
  tr.ve-table-expand-tr
  td.ve-table-body-td {
  text-align: right !important;
}

.ve-table
  .ve-table-container
  table.ve-table-content
  thead.ve-table-header
  tr.ve-table-header-tr {
  background: #fff !important;
}

.ve-table-header {
  position: relative;
}

.ve-table-header-th:first-of-type {
  padding-right: 50px !important;
}

.ve-table-header-th:last-of-type {
  padding-left: 50px !important;
}

.ve-table-body-td:first-of-type {
  padding-right: 50px !important;
}

.ve-table-body-td:last-of-type {
  padding-left: 50px !important;
}

.ve-table
  .ve-table-container
  table.ve-table-content
  thead.ve-table-header
  tr.ve-table-header-tr
  th.ve-table-header-th {
  background: none;
  border-bottom: 0 !important;
}

.ve-table.ve-table-border-around {
  border: none !important;
}

.ve-table-header::after {
  content: "";
  display: block;
  width: 100%;
  height: 10px;
}

.ve-table
  .ve-table-container
  table.ve-table-content
  thead.ve-table-header
  tr.ve-table-header-tr
  th.ve-table-header-th {
  background: #fff !important;
}

.ve-table
  .ve-table-container
  table.ve-table-content
  tbody.ve-table-body
  tr.ve-table-body-tr,
.ve-table
  .ve-table-container
  table.ve-table-content
  tbody.ve-table-body
  tr.ve-table-expand-tr {
  height: 70px !important;
}

.ve-table .ve-table-container .ve-table-border-x th,
.ve-table .ve-table-container .ve-table-border-x td {
  border-bottom: none !important;
}

.ve-table
  .ve-table-container
  table.ve-table-content
  tbody.ve-table-body
  tr.ve-table-body-tr {
  position: relative;
  font-family: "AlmoniNeue";
}

.ve-table
  .ve-table-container
  table.ve-table-content
  tbody.ve-table-body
  tr.ve-table-body-tr::after {
  content: "";
  width: 100%;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #f5f5f5;
  z-index: 99;
  height: 7px;
}

.ve-table
  .ve-table-container
  table.ve-table-content
  tbody.ve-table-body
  tr.ve-table-body-tr
  td.ve-table-body-td,
.ve-table
  .ve-table-container
  table.ve-table-content
  tbody.ve-table-body
  tr.ve-table-expand-tr
  td.ve-table-body-td {
  padding-bottom: 17px !important;
}

.ve-table
  .ve-table-container
  table.ve-table-content
  tbody.ve-table-body
  tr.ve-table-body-tr
  td.ve-table-body-td {
  font-size: 15px !important;
}

.ve-table
  .ve-table-container
  table.ve-table-content
  tbody.ve-table-body.ve-table-row-hover
  tr.ve-table-body-tr:hover
  td {
  background: #fff !important;
}

.ve-pagination .ve-pagination-goto {
  margin: 0 !important;
}

body .ve-pagination .ve-pagination-goto .ve-pagination-goto-input {
  border: none;
  border-radius: 0;
  border-left: 1px solid #e7e7e9;
  border-right: 1px solid #e7e7e9;
  margin-bottom: 0;
  height: 40px;
}

body .ve-pagination .ve-pagination-li {
  border: none;
}

body .ve-pagination .ve-pagination-prev {
  border-radius: 20px 0 0 20px;
}

body .ve-pagination .ve-pagination-next {
  border-radius: 0 20px 20px 0;
}

body .ve-pagination {
  border: 1px solid #e7e7e9;
  border-radius: 20px;
  height: auto;
}

body .ve-pagination .ve-pagination-goto .ve-pagination-goto-input:hover {
  border-color: #e7e7e9;
}

body .ve-pagination .ve-pagination-li {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
}

body .ve-pagination .ve-pagination-li {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
}

.copy-wrapper {
  padding-right: 60px;
  position: relative;
}

.copy-wrapper::before {
  content: "";
  display: block;
  width: 1px;
  height: 44px;
  top: 50%;
  right: 10%;
  z-index: 99;
  background: #c9c9c9;
  position: absolute;
  transform: translate(-50%, -50%);
}

body .icon-vet-left-arrow:before {
  content: "";
  display: block;
  width: 10px;
  height: 14px;
  background: url(../../assets/prev.svg);
}

body .icon-vet-right-arrow:before {
  content: "";
  display: block;
  width: 10px;
  height: 14px;
  background: url(../../assets/next.svg);
}

body .ve-pagination .ve-pagination-li a {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
