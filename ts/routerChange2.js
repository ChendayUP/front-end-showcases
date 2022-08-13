const route = [
  {
    path: "tower-crane/datascreen",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen"),
    name: "Datascreen",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "数据大屏-公司" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/projectdatascreen",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/projectDataScreen"),
    name: "projectdatascreen",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "数据大屏-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/remotesetting_project",
    component: () =>
      import("@/views/alot_company/tower-crane/projectMemu/remoteSetting"),
    name: "remotesetting_project",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "远程设置" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/violationRanking",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/violationRanking"),
    name: "ViolationRanking",
    meta: { keepAlive: false, bread: [{ path: "" }], code: "0202" },
  },
  {
    path: "tower-crane/violationRanking_child",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/violationRanking/index_child"
      ),
    name: "ViolationRanking_child",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "违章排名-子公司" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/violationRanking_branch",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/violationRanking/violationDetails"
      ),
    name: "violationRanking_branch",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "违章排名-分公司" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/violationranking_project",
    component: () =>
      import("@/views/alot_company/tower-crane/projectMemu/violationRanking"),
    name: "violationranking_project",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "违章排名-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/violationranking",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/violationRanking"),
    name: "violationranking",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "违章排名-集团" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/alarmviolationdetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/alarmviolationdetails"
      ),
    name: "Alarmviolationdetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "今日报警与违章 " }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/f_alarmviolationdetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/fAlarmviolationdetails"
      ),
    name: "Falarmviolationdetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "今日报警与违章-分公司" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/proalarmviolationdetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/fAlarmviolationdetails"
      ),
    name: "ProAlarmviolationDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "今日报警与违章-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/dockrecorddetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/dockRecordDetails"
      ),
    name: "DockRecordDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "装载记录详情" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/fdockrecorddetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/fDockRecordDetails"
      ),
    name: "FDockRecordDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "装载记录详情" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/facerecognitiondetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/faceRecognitionDetails"
      ),
    name: "FaceRecognitionDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "人脸识别详情" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/profacerecognition",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/faceRecognitionDetails"
      ),
    name: "faceRecognitionDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "人脸识别详情-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/riskfactorsdetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/riskFactorsDetails"
      ),
    name: "RiskFactorsDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "危险因素构成分析（30天数据）" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/securitysituationdetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/securitySituationDetails"
      ),
    name: "SecuritySituationDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "安全态势排行榜" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/maintenancerecorddetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/maintenanceRecordDetails"
      ),
    name: "MaintenancerecordDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "4月维保记录" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/fmaintenancerecorddetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/fMaintenanceRecordDetails"
      ),
    name: "FMaintenancerecordDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "4月维保记录" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/safetymonitordetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/safetyMonitorDetails"
      ),
    name: "SafetyMonitorDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "安全监控详情" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/equipmentsafetyreport",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/projectDataScreen/EquipmentSafetyReport"
      ),
    name: "EquipmentSafetyReport",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "设备安全月报-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/equipmentefficiency",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/projectDataScreen/EquipmentEfficiency"
      ),
    name: "EquipmentEfficiency",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "设备效率月报-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/equipmentefficiency_company",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/equipmentEfficiency"
      ),
    name: "EquipmentEfficiency_company",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "设备效率月报-公司" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/fsafetymonitordetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/fSafetymonitordetails"
      ),
    name: "FSafetyMonitorDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "安全监控详情" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/snapevidence",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/snapEvidence"
      ),
    name: "SnapEvidence",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "安���监控详情-抓拍留证" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/equipmentsafety",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/equipmentSafety"
      ),
    name: "EquipmentSafety",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "安全监控详情" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/equipmentstatusdetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/dataScreen/equipmentStatusDetails"
      ),
    name: "EquipmentStatusDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "设备状态统计" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/towercranescreen",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/towerCraneScreen/index"
      ),
    name: "TowerCraneScreen",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "塔机大屏" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/addremotesetting",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/projectMemu/remoteSetting/addRemotesetting"
      ),
    name: "AddRemotesetting",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "远程设置" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/violationdetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/violationRanking/violationDetails"
      ),
    name: "ViolationDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "违章详情" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/alarmdetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/alarmRanking/alarmDetails"
      ),
    name: "AlarmDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "报警详情" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/alarmranking",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/alarmRanking"),
    name: "alarmranking",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "报警排名-集团" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/alarmRanking_child",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/alarmRanking/index_child"
      ),
    name: "AlarmRanking_child",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "报警排名-子公司" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/alarmranking_branch",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/alarmRanking/alarmDetails"
      ),
    name: "alarmranking_branch",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "报警排名-分公司" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/alarmranking_project",
    component: () =>
      import("@/views/alot_company/tower-crane/projectMemu/alarmranking"),
    name: "alarmranking_branch",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "报警排名-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/personnelbinding",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/personnelBinding"),
    name: "personnelbinding",
    meta: { keepAlive: false, bread: [{ path: "" }], code: "0202" },
  },
  {
    path: "tower-crane/personnelBinding_project",
    component: () =>
      import("@/views/alot_company/tower-crane/projectMemu/personnelBinding"),
    name: "personnelBinding_project",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "人员绑定-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/realtimemonitoring",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/realTimeMonitoring"),
    name: "realtimemonitoring",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "实时监控-集团" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/realtimeMonitor_child",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/realTimeMonitoring/index_child"
      ),
    name: "RealtimeMonitor_child",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "实时监控-子公司" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/realtimemonitoring_branch",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/realTimeMonitoring/realTimeMonitorDetails"
      ),
    name: "realtimemonitoring_branch",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "实时监控-分公司" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/realTimeMonitoring_project",
    component: () =>
      import("@/views/alot_company/tower-crane/projectMemu/realTimeMonitoring"),
    name: "realTimeMonitoring_project",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "实时监控-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/remotecapture",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/remoteCapture"),
    name: "remotecapture",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "远程抓拍-集团" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/remoteCapture_project",
    component: () =>
      import("@/views/alot_company/tower-crane/projectMemu/remoteCapture"),
    name: "remoteCapture_project",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "远程抓拍-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/realtimeMonitordetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/realTimeMonitoring/realTimeMonitorDetails"
      ),
    name: "RealTimeMonitorDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "实时监控详情" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/offlinedurationdetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/offlineDuration/offlinedurationDetails"
      ),
    name: "OfflinedurationDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "离线时长详情" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/offlineDuration_child",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/offlineDuration/index_child"
      ),
    name: "OfflineDuration_child",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "离线时长-子公司" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/offlineduration",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/offlineDuration"),
    name: "offlineduration",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "离线时长-集团" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/offlineduration-project",
    component: () =>
      import("@/views/alot_company/tower-crane/projectMemu/offlineduration"),
    name: "offlineduration-project",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "离线时长-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/jackupRecord",
    component: () =>
      import("@/views/alot_company/tower-crane/projectMemu/jackupRecord"),
    name: "jackupRecord",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "顶升纪录-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/towerdriver_project",
    component: () =>
      import("@/views/alot_company/tower-crane/projectMemu/towerDriver"),
    name: "towerdriver_project",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "塔机司机-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/workingcycle",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/workingCycle"),
    name: "WorkingCycleDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "工作循环-���司" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/workincycledetails",
    component: () =>
      import(
        "@/views/alot_company/tower-crane/serverMemu/workingCycle/workingCycleDetails"
      ),
    name: "WorkingCycleDetails",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "工作循环详情" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/workingcycle-project",
    component: () =>
      import("@/views/alot_company/tower-crane/projectMemu/workingcycle"),
    name: "workingcycle-project",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "工作循环-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/announcement",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/announcement"),
    name: "announcement",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "公告发布-公司" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/announcement_project",
    component: () =>
      import("@/views/alot_company/tower-crane/projectMemu/announcement"),
    name: "announcement_project",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "公告发布-项目" }],
      code: "0202",
    },
  },
  {
    path: "tower-crane/projectplan",
    component: () =>
      import("@/views/alot_company/tower-crane/projectMemu/projectPlan"),
    name: "projectplan",
    meta: {
      keepAlive: false,
      bread: [{ path: "", name: "项目平面图" }],
      code: "0202",
    },
  },
]
// 项目菜单
const ProjectMenu = [
{
  name: "Projectdatascreen",
  path: "projectdatascreen",
  hidden: false,
  component: "serverMemu/projectDataScreen",
  meta: {
    title: "数据大屏-项目",
    icon: "#",
    noCache: false,
    link: null,
  },
},
{
  name: "Remotesetting_project",
  path: "remotesetting_project",
  hidden: false,
  component: "projectMemu/remoteSetting",
  meta: { title: "远程设置", icon: "#", noCache: false, link: null },
},
{
  name: "Violationranking_project",
  path: "violationranking_project",
  hidden: false,
  component: "projectMemu/violationRanking",
  meta: {
    title: "违章排名-项目",
    icon: "#",
    noCache: false,
    link: null,
  },
},
{
  name: "Alarmranking_project",
  path: "alarmranking_project",
  hidden: false,
  component: "projectMemu/alarmranking",
  meta: {
    title: "报警排名-项目",
    icon: "#",
    noCache: false,
    link: null,
  },
},
{
  name: "PersonnelBinding_project",
  path: "personnelBinding_project",
  hidden: false,
  component: "projectMemu/personnelBinding",
  meta: {
    title: "人员绑定-项目",
    icon: "#",
    noCache: false,
    link: null,
  },
},
{
  name: "RealTimeMonitoring_project",
  path: "realTimeMonitoring_project",
  hidden: false,
  component: "projectMemu/realTimeMonitoring",
  meta: {
    title: "实时监控-项目",
    icon: "#",
    noCache: false,
    link: null,
  },
},
{
  name: "RemoteCapture_project",
  path: "remoteCapture_project",
  hidden: false,
  component: "projectMemu/remoteCapture",
  meta: {
    title: "远程抓拍-项目",
    icon: "#",
    noCache: false,
    link: null,
  },
},
{
  name: "Offlineduration-project",
  path: "offlineduration-project",
  hidden: false,
  component: "projectMemu/offlineduration",
  meta: {
    title: "离线时长-项目",
    icon: "#",
    noCache: false,
    link: null,
  },
},
{
  name: "JackupRecord",
  path: "jackupRecord",
  hidden: false,
  component: "projectMemu/jackupRecord",
  meta: {
    title: "顶升纪录-项目",
    icon: "#",
    noCache: false,
    link: null,
  },
},
{
  name: "Towerdriver_project",
  path: "towerdriver_project",
  hidden: false,
  component: "projectMemu/towerDriver",
  meta: {
    title: "塔机司机-项目",
    icon: "#",
    noCache: false,
    link: null,
  },
},
{
  name: "Workingcycle-project",
  path: "workingcycle-project",
  hidden: false,
  component: "projectMemu/workingcycle",
  meta: {
    title: "工作循环-项目",
    icon: "#",
    noCache: false,
    link: null,
  },
},
{
  name: "Announcement_project",
  path: "announcement_project",
  hidden: false,
  component: "projectMemu/announcement",
  meta: {
    title: "发布公告-项目",
    icon: "#",
    noCache: false,
    link: null,
  },
},
{
  name: "Projectplan",
  path: "projectplan",
  hidden: false,
  component: "projectMemu/projectPlan",
  meta: { title: "项目平面图", icon: "#", noCache: false, link: null },
},
]
// 


// console.log(routers.map(item => {
//   return {
//     name: item.meta.title,
//     code: "0202",
//     icon: "icon-huizongfenxi",
//     path: `/home/alot_company/tower-crane/${item.path}`,
//   }
// }))

