const towerCraneProjectRouter = [
  {
    path: "tower-crane/datascreen",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/dataScreen"),
    name: "Datascreen",
    meta: {
      title: "数据大屏-公司",
      activeMenu: "/server_memu/datascreen",
    },
    // meta: {
    //   keepAlive: false,
    //   bread: [{
    //     path: "",
    //     name: "数据大屏-公司",
    //   }],
    //   code: "0202",
    // }
  },
  {
    path: "tower-crane/projectdatascreen",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/projectDataScreen"),
    name: "projectdatascreen",
    meta: {
      title: "数据大屏-项目",
      // activeMenu: "/server_memu/projectdatascreen",
    },
    // meta: {
    //   keepAlive: false,
    //   bread: [{
    //     path: "",
    //     name: "数据大屏-项目",
    //   }],
    //   code: "02",
    // }
  },
  {
    path: "tower-crane/remotesetting_project",
    component: () => import("@/views/alot_company/tower-crane/projectMemu/remoteSetting"),
    name: "remotesetting_project",
    meta: {
      title: "远程设置",
      activeMenu: "/server_memu/remotesetting_project",
    },
    // meta: {
    //   keepAlive: false,
    //   bread: [{
    //     path: "",
    //     name: "远程设置",
    //   }],
    //   code: "02",
    // }
  },
  {
    path: "tower-crane/violationRanking",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/violationRanking"),
    name: "ViolationRanking",
    // meta: {
    //   title: "违章排名-集团",
    //   activeMenu: "/server_memu/violationranking",
    // },
    meta: {
      keepAlive: false,
      bread: [{
        path: "",
        name: "违章排名-集团",
      }],
      code: "02",
    }
  },
  {
    path: "tower-crane/violationRanking_child",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/violationRanking/index_child"),
    name: "ViolationRanking_child",
    meta: {
      title: "违章排名-子公司",
      activeMenu: "/server_memu/violationranking",
    },
    // meta: {
    //   keepAlive: false,
    //   bread: [{
    //     path: "",
    //     name: "违章排名-子公司",
    //   }],
    //   code: "0202",
    // }
  },
  {
    path: "tower-crane/violationRanking_branch",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/violationRanking/violationDetails"),
    name: "violationRanking_branch",
    meta: {
      title: "违章排名-分公司",
      activeMenu: "/server_memu/violationranking",
    },
  },
  {
    path: "tower-crane/violationranking_project",
    component: () => import("@/views/alot_company/tower-crane/projectMemu/violationRanking"),
    name: "violationranking_project",
    meta: {
      title: "违章排名-项目",
      activeMenu: "/server_memu/violationranking",
    },
  },
  {
    path: "tower-crane/violationranking",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/violationRanking"),
    name: "violationranking",
    meta: {
      title: "违章排名-集团",
      activeMenu: "/server_memu/violationranking",
    },
  },
  {
    path: "tower-crane/alarmviolationdetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/alarmviolationdetails"),
    name: "Alarmviolationdetails",
    meta: {
      title: "今日报警与违章 ",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/f_alarmviolationdetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/fAlarmviolationdetails"),
    name: "Falarmviolationdetails",
    meta: {
      title: "今日报警与违章-分公司",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/proalarmviolationdetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/fAlarmviolationdetails"),
    // component: () =>
    //   import(
    //     "@/views/alot_company/tower-crane/serverMemu/projectDataScreen/ProAlarmviolationDetails"
    //   ),
    name: "ProAlarmviolationDetails",
    meta: {
      title: "今日报警与违章-项目",
      activeMenu: "/server_memu/projectdatascreen",
    },
  },
  {
    path: "tower-crane/dockrecorddetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/dockRecordDetails"),
    name: "DockRecordDetails",
    meta: {
      title: "装载记录详情",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/fdockrecorddetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/fDockRecordDetails"),
    name: "FDockRecordDetails",
    meta: {
      title: "装载记录详情",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/facerecognitiondetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/faceRecognitionDetails"),
    name: "FaceRecognitionDetails",
    meta: {
      title: "人脸识别详情",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/profacerecognition",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/faceRecognitionDetails"),
    // component: () =>
    //   import("@/views/alot_company/tower-crane/serverMemu/projectDataScreen/FaceRecognitionDetails"),
    name: "faceRecognitionDetails",
    meta: {
      title: "人脸识别详情-项目",
      activeMenu: "/server_memu/projectdatascreen",
    },
  },
  {
    path: "tower-crane/riskfactorsdetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/riskFactorsDetails"),
    name: "RiskFactorsDetails",
    meta: {
      title: "危险因素构成分析（30天数据）",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/securitysituationdetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/securitySituationDetails"),
    name: "SecuritySituationDetails",
    meta: {
      title: "安全态势排行榜",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/maintenancerecorddetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/maintenanceRecordDetails"),
    name: "MaintenancerecordDetails",
    meta: {
      title: "4月维保记录",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/fmaintenancerecorddetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/fMaintenanceRecordDetails"),
    name: "FMaintenancerecordDetails",
    meta: {
      title: "4月维保记录",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/safetymonitordetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/safetyMonitorDetails"),
    name: "SafetyMonitorDetails",
    meta: {
      title: "安全监控详情",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/equipmentsafetyreport",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/projectDataScreen/EquipmentSafetyReport"),
    name: "EquipmentSafetyReport",
    meta: {
      title: "设备安全月报-项目",
      activeMenu: "/server_memu/projectdatascreen",
    },
  },
  {
    path: "tower-crane/equipmentefficiency",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/projectDataScreen/EquipmentEfficiency"),
    name: "EquipmentEfficiency",
    meta: {
      title: "设备效率月报-项目",
      activeMenu: "/server_memu/projectdatascreen",
    },
  },
  {
    path: "tower-crane/equipmentefficiency_company",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/equipmentEfficiency"),
    name: "EquipmentEfficiency_company",
    meta: {
      title: "设备效率月报-公司",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/fsafetymonitordetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/fSafetymonitordetails"),
    name: "FSafetyMonitorDetails",
    meta: {
      title: "安全监控详情",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/snapevidence",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/dataScreen/snapEvidence"),
    name: "SnapEvidence",
    meta: {
      title: "安全监控详情-抓拍留证",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/equipmentsafety",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/equipmentSafety"),
    name: "EquipmentSafety",
    meta: {
      title: "安全监控详情",
      activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/equipmentstatusdetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/dataScreen/equipmentStatusDetails"),
    name: "EquipmentStatusDetails",
    meta: {
      title: "设备状态统计",
      activeMenu: "/server_memu/data_screen",
    },
  },
  // {
  //   path: "tower-crane/fequipmentstatusdetails",
  //   component: () =>
  //     import("@/views/alot_company/tower-crane/serverMemu/dataScreen/fEquipmentStatusDetails"),
  //   name: "FEquipmentStatusDetails",
  //   meta: {
  //     title: "设备状态统计",
  //     activeMenu: "/server_memu/data_screen",
  //   },
  // },
  // {
  //   path: "tower-crane/projectdatascreen",
  //   component: () => import("@/views/alot_company/tower-crane/serverMemu/projectDataScreen/index"),
  //   name: "Projectdatascreen",
  //   meta: {
  //     title: "数据大屏-项目",
  //     // activeMenu: "/server_memu/projectdatascreen",
  //   },
  // },
  {
    path: "tower-crane/towercranescreen",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/towerCraneScreen/index"),
    name: "TowerCraneScreen",
    meta: {
      title: "塔机大屏",
      // activeMenu: "/server_memu/data_screen",
    },
  },
  {
    path: "tower-crane/addremotesetting",
    component: () =>
      import("@/views/alot_company/tower-crane/projectMemu/remoteSetting/addRemotesetting"),
    name: "AddRemotesetting",
    meta: {
      title: "远程设置",
      activeMenu: "/server_memu/remotesetting_project",
    },
  },
  {
    path: "tower-crane/violationdetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/violationRanking/violationDetails"),
    name: "ViolationDetails",
    meta: {
      title: "违章详情",
      // activeMenu: "/server_memu/violationranking",
    },
  },

  {
    path: "tower-crane/alarmdetails",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/alarmRanking/alarmDetails"),
    name: "AlarmDetails",
    meta: {
      title: "报警详情",
      // activeMenu: "/server_memu/alarmranking",
    },
  },
  {
    path: "tower-crane/alarmranking",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/alarmRanking"),
    name: "alarmranking",
    meta: {
      title: "报警排名-集团",
      activeMenu: "/server_memu/alarmranking",
    },
  },
  {
    path: "tower-crane/alarmRanking_child",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/alarmRanking/index_child"),
    name: "AlarmRanking_child",
    meta: {
      title: "报警排名-子公司",
      activeMenu: "/server_memu/alarmranking",
    },
  },
  {
    path: "tower-crane/alarmranking_branch",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/alarmRanking/alarmDetails"),
    name: "alarmranking_branch",
    meta: {
      title: "报警排名-分公司",
      activeMenu: "/server_memu/alarmranking",
    },
  },
  {
    path: "tower-crane/alarmranking_project",
    component: () => import("@/views/alot_company/tower-crane/projectMemu/alarmranking"),
    name: "alarmranking_branch",
    meta: {
      title: "报警排名-项目",
      activeMenu: "/server_memu/alarmranking",
    },
  },
  {
    path: "tower-crane/personnelbinding",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/personnelBinding"),
    name: "personnelbinding",
    // meta: {
    //   title: "人员绑定-公司",
    //   activeMenu: "/server_memu/personnelBinding",
    // },
    meta: {
      keepAlive: false,
      bread: [{
        path: "",
        name: "人员绑定-公司",
      }],
      code: "0202",
    }
  },
  {
    path: "tower-crane/personnelBinding_project",
    component: () => import("@/views/alot_company/tower-crane/projectMemu/personnelBinding"),
    name: "personnelBinding_project",
    meta: {
      title: "人员绑定-项目",
      activeMenu: "/server_memu/personnelBinding_project",
    },
  },
  {
    path: "tower-crane/realtimemonitoring",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/realTimeMonitoring"),
    name: "realtimemonitoring",
    meta: {
      title: "实时监控-集团",
      activeMenu: "/server_memu/realtimemonitoring",
    },
  },
  {
    path: "tower-crane/realtimeMonitor_child",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/realTimeMonitoring/index_child"),
    name: "RealtimeMonitor_child",
    meta: {
      title: "实时监控-子公司",
      activeMenu: "/server_memu/realtimemonitoring",
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
      title: "实时监控-分公司",
      activeMenu: "/server_memu/realtimemonitoring",
    },
  },
  {
    path: "tower-crane/realTimeMonitoring_project",
    component: () => import("@/views/alot_company/tower-crane/projectMemu/realTimeMonitoring"),
    name: "realTimeMonitoring_project",
    meta: {
      title: "实时监控-项目",
      activeMenu: "/server_memu/realtimemonitoring",
    },
  },
  {
    path: "tower-crane/remotecapture",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/remoteCapture"),
    name: "remotecapture",
    meta: {
      title: "远程抓拍-集团",
      activeMenu: "/server_memu/remotecapture",
    },
  },
  {
    path: "tower-crane/remoteCapture_project",
    component: () => import("@/views/alot_company/tower-crane/projectMemu/remoteCapture"),
    name: "remoteCapture_project",
    meta: {
      title: "远程抓拍-项目",
      activeMenu: "/server_memu/remotecapture",
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
      title: "实时监控详情",
      activeMenu: "/server_memu/realtimemonitoring",
    },
  },
  {
    path: "tower-crane/offlinedurationdetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/offlineDuration/offlinedurationDetails"),
    name: "OfflinedurationDetails",
    meta: {
      title: "离线时长详情",
      activeMenu: "/server_memu/offlineduration",
    },
  },
  {
    path: "tower-crane/offlineDuration_child",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/offlineDuration/index_child"),
    name: "OfflineDuration_child",
    meta: {
      title: "离线时长-子公司",
      activeMenu: "/server_memu/offlineduration",
    },
  },
  {
    path: "tower-crane/offlineduration",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/offlineDuration"),
    name: "offlineduration",
    meta: {
      title: "离线时长-集团",
      activeMenu: "/server_memu/offlineduration",
    },
  },
  {
    path: "tower-crane/offlineduration-project",
    component: () => import("@/views/alot_company/tower-crane/projectMemu/offlineduration"),
    name: "offlineduration-project",
    meta: {
      title: "离线时长-项目",
      activeMenu: "/server_memu/offlineduration-project",
    },
  },
  {
    path: "tower-crane/jackupRecord",
    component: () => import("@/views/alot_company/tower-crane/projectMemu/jackupRecord"),
    name: "jackupRecord",
    meta: {
      title: "顶升纪录-项目",
      activeMenu: "/server_memu/jackupRecord",
    },
  },
  // {
  //   path: "tower-crane/towerdriver",
  //   component: () => import("@/views/alot_company/tower-crane/serverMemu/towerDriver"),
  //   name: "towerdriver",
  //   meta: {
  //     title: "塔机司机-公司",
  //     activeMenu: "/server_memu/towerdriver",
  //   },
  // },
  {
    path: "tower-crane/towerdriver_project",
    component: () => import("@/views/alot_company/tower-crane/projectMemu/towerDriver"),
    name: "towerdriver_project",
    meta: {
      title: "塔机司机-项目",
      activeMenu: "/server_memu/towerdriver_project",
    },
  },
  // {
  //   path: "tower-crane/drivingrecord",
  //   component: () => import("@/views/alot_company/tower-crane/serverMemu/towerDriver/drivingDecord"),
  //   name: "DrivingDecord",
  //   meta: {
  //     title: "驾驶记录",
  //     activeMenu: "/server_memu/towerdriver",
  //   },
  // },
  {
    path: "tower-crane/workingcycle",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/workingCycle"),
    name: "WorkingCycleDetails",
    meta: {
      title: "工作循环-公司",
      activeMenu: "/server_memu/workingcycle",
    },
  },
  {
    path: "tower-crane/workincycledetails",
    component: () =>
      import("@/views/alot_company/tower-crane/serverMemu/workingCycle/workingCycleDetails"),
    name: "WorkingCycleDetails",
    meta: {
      title: "工作循环详情",
      activeMenu: "/server_memu/workingCycle",
    },
  },
  {
    path: "tower-crane/workingcycle-project",
    component: () => import("@/views/alot_company/tower-crane/projectMemu/workingcycle"),
    name: "workingcycle-project",
    meta: {
      title: "工作循环-项目",
      activeMenu: "/server_memu/workingcycle",
    },
  },
  {
    path: "tower-crane/announcement",
    component: () => import("@/views/alot_company/tower-crane/serverMemu/announcement"),
    name: "announcement",
    meta: {
      title: "公告发布-公司",
      activeMenu: "/server_memu/announcement",
    },
  },
  {
    path: "tower-crane/announcement_project",
    component: () => import("@/views/alot_company/tower-crane/projectMemu/announcement"),
    name: "announcement_project",
    meta: {
      title: "公告发布-项目",
      activeMenu: "/server_memu/announcement_project",
    },
  },
  {
    path: "tower-crane/projectplan",
    component: () => import("@/views/alot_company/tower-crane/projectMemu/projectPlan"),
    name: "projectplan",
    meta: {
      title: "项目平面图",
      activeMenu: "/server_memu/projectplan",
    },
  },
]
const temp = towerCraneProjectRouter.map(item => {
  return {
    path: item.path,
    component: JSON.stringify(item.component),
    name: item.name,
    // meta: {
    //   title: "数据大屏-公司",
    //   activeMenu: "/server_memu/datascreen",
    // },
    meta: {
      keepAlive: false,
      bread: JSON.stringify([{
        path: "",
        name: item.meta.title,
      }]),
      code: "0202",
    }
  }
})
console.log(temp)