/**
 * @Description: 起重机械权限码表
 * @Date: 2022-08-17 15:02:29
*/
// 塔机公司级权限
const towerCraneCompanyPower = [
  {
    name: "数字大屏",
    code: "0202070101"
  },
  {
    name: "违章排名",
    code: "0202070102"
  },
  {
    name: "报警排名",
    code: "0202070103"
  },
  {
    name: "人员绑定",
    code: "0202070104",
    children: [
      {
        name: "新增",
        code: "020207010401",
      }
    ]
  },
  {
    name: "实时监控",
    code: "0202070105"
  },
  {
    name: "远程抓拍",
    code: "0202070106",
    children: [
      {
        name: '抓拍',
        code: "020207010601"
      },
      {
        name: '删除',
        code: "020207010602"
      },
      {
        name: '查看',
        code: "020207010603"
      }
    ]
  },
  {
    name: "离线时长",
    code: "0202070107"
  },
  {
    name: "公告发布",
    code: "0202070108",
    children: [
      {
        name: '新增',
        code: "020207010801"
      },
      {
        name: '删除',
        code: "020207010802"
      },
      {
        name: '编辑',
        code: "020207010803"
      }
    ]
  }
]
// 塔机项目级权限
const towerCraneProjectPower = [
  {
    name: "数字大屏",
    code: "0102070101"
  },
  {
    name: "远程设置",
    code: "0102070102",
    children: [
      {
        name: '新增',
        code: "010207010201"
      },
      {
        name: '删除',
        code: "010207010202"
      },
      {
        name: '编辑',
        code: "010207010203"
      },
      {
        name: '生成秘钥',
        code: "010207010204"
      }
    ]
  },
  {
    name: "违章排名",
    code: "0102070103"
  },
  {
    name: "报警排名",
    code: "0102070104"
  },
  {
    name: "人员绑定",
    code: "0102070105",
    children: [
      {
        name: '新增',
        code: '010207010501'
      }
    ]
  },
  {
    name: "实时监控",
    code: "0102070106"
  },
  {
    name: "远程抓拍",
    code: "0102070107",
    children: [
      {
        name: '抓拍',
        code: "010207010701"
      },
      {
        name: '删除',
        code: "010207010702"
      },
      {
        name: '查看',
        code: "010207010703"
      }
    ]
  },
  {
    name: "离线时长",
    code: "0102070108"
  },
  {
    name: "顶升纪录",
    code: "0102070109",
    children: [
      {
        name: '新增',
        code: "010207010901"
      },
      {
        name: '编辑',
        code: "010207010902"
      },
      {
        name: '删除',
        code: "010207010903"
      }
    ]
  },
  {
    name: "塔机司机",
    code: "0102070110",
    children: [
      {
        name: '驾驶记录',
        code: "010207011001"
      },
      {
        name: '操作记录',
        code: "010207011002"
      }
    ]
  },
  {
    name: "工作循环",
    code: "0102070111"
  },
  {
    name: "发布公告",
    code: "0102070112",
    children: [
      {
        name: '新增',
        code: "010207011201"
      },
      {
        name: '删除',
        code: "010207011202"
      },
      {
        name: '编辑',
        code: "010207011203"
      }
    ]
  },
  {
    name: "项目平面图",
    code: "0102070113",
    children: [
      {
        name: '上传平面图',
        code: "010207011301"
      },
      {
        name: '保存设置',
        code: "010207011302"
      }
    ]
  },
  {
    name: "防碰撞",
    code: "0102070114",
    children: [
      {
        name: '上传平面图',
        code: "010207011401"
      },
      {
        name: '保存设置',
        code: "010207011402"
      }
    ]
  },
]

// 升降机公司级权限
const elevatorCompanyPower = [
  {
    name: "数字大屏",
    code: "0202070201"
  },
  {
    name: "实时监控",
    code: "0202070202"
  },
  {
    name: "违章排名",
    code: "0202070203"
  }, {
    name: "报警排名",
    code: "0202070204"
  },
  {
    name: "工作循环",
    code: "0202070205"
  },
  {
    name: "离线时长",
    code: "0202070206"
  },
  {
    name: "升降机司机",
    code: "0202070207"
  },
  {
    name: "远程抓拍",
    code: "0202070208",
    children: [
      {
        name: '抓拍',
        code: "020207020801"
      },
      {
        name: '删除',
        code: "020207020802"
      },
      {
        name: '查看',
        code: "020207020803"
      }
    ]
  },
  {
    name: "人员绑定",
    code: "0202070209",
    children: [
      {
        name: '新增',
        code: "020207020901"
      }
    ]
  }
]
// 升降机项目级权限
const elevatorProjectPower = [
  {
    name: "数字大屏",
    code: "0102070201"
  },
  {
    name: "实时监控",
    code: "0102070202"
  },
  {
    name: "违章排名",
    code: "0102070203"
  }, {
    name: "报警排名",
    code: "0102070204"
  },
  {
    name: "工作循环",
    code: "0102070205"
  },
  {
    name: "离线时长",
    code: "0102070206"
  },
  {
    name: "升降机司机",
    code: "0102070207",
    children: [
      {
        name: '驾驶记录',
        code: "010207020701"
      },
      {
        name: '操作记录',
        code: "010207020702"
      }
    ]
  },
  {
    name: "远程抓拍",
    code: "0102070208",
    children: [
      {
        name: '抓拍',
        code: "010207020801"
      },
      {
        name: '删除',
        code: "010207020802"
      },
      {
        name: '查看',
        code: "010207020803"
      }
    ]
  },
  {
    name: "人员绑定",
    code: "0102070209",
    children: [
      {
        name: '新增',
        code: "010207020901"
      }
    ]
  },
  {
    name: "项目平面图",
    code: "0102070210",
    children: [
      {
        name: '上传平面图',
        code: "010207021001"
      },
      {
        name: '保存设置',
        code: "010207021002"
      }
    ]
  },
  {
    name: "远程设置",
    code: "0102070211",
    children: [
      {
        name: '新增',
        code: "010207021101"
      },
      {
        name: '删除',
        code: "010207021102"
      },
      {
        name: '编辑',
        code: "010207021103"
      },
      {
        name: '生成秘钥',
        code: "010207021104"
      }
    ]
  }
]

var stirng = [
  {
    name: "项目级",
    code: "01",
    children: [
      {
        name: "AIOT",
        code: "0102",
        children: [
          {
            name: "运渣车监测",
            code: "010201",
            children: [
              {
                name: "统计分析",
                code: "01020101",
                children: [
                  {
                    name: "导出",
                    code: "0102010101",
                  },
                ],
              },
              {
                name: "进/出场数据",
                code: "01020102",
                children: [
                  {
                    name: "导出",
                    code: "0102010201",
                  },
                  {
                    name: "编辑车牌号",
                    code: "0102010202",
                  },
                  {
                    name: "图片下载",
                    code: "0102010203",
                  },
                ],
              },
              {
                name: "现场监控",
                code: "01020103",
                children: [
                  {
                    name: "下载",
                    code: "0102010301",
                  },
                ],
              },
            ],
          },
          {
            name: "环境监测",
            code: "010202",
            children: [
              {
                name: "统计分析",
                code: "01020201",
                children: [
                  {
                    name: "导出",
                    code: "0102020101",
                  },
                ],
              },
              {
                name: "实时监测",
                code: "01020202",
              },
            ],
          },
          {
            name: "起重机械监测",
            code: "010203",
            children: [
              {
                name: "统计分析",
                code: "01020301",
                children: [
                  {
                    name: "导出",
                    code: "0102030101",
                  },
                ],
              },
              {
                name: "实时监测",
                code: "01020302",
              },
              {
                name: "预警/报警数据",
                code: "01020303",
                children: [
                  {
                    name: "导出",
                    code: "0102030301",
                  },
                ],
              },
              {
                name: "工作循环",
                code: "01020304",
                children: [
                  {
                    name: "导出",
                    code: "0102030401",
                  },
                ],
              },
              {
                name: "离线时长",
                code: "01020305",
                children: [
                  {
                    name: "导出",
                    code: "0102030501",
                  },
                ],
              },
              // {
              //    name: "抓拍图片库",
              //    code: "01020306",
              //    children: [
              //       {
              //          name: "下载",
              //          code: "0102030601",
              //       },
              //    ],
              // },
            ],
          },
          {
            name: "非道路移动机械管控",
            code: "010205",
            children: [
              {
                name: "机械审核",
                code: "01020501",
                children: [
                  {
                    name: "审核",
                    code: "0102050101",
                  },
                ],
              },
              {
                name: "台账信息",
                code: "01020502",
                children: [
                  {
                    name: "提前退场",
                    code: "0102050201",
                  },
                  {
                    name: "新增",
                    code: "0102050202",
                  },
                  {
                    name: "删除",
                    code: "0102050203",
                  },
                  {
                    name: "延期退场",
                    code: "0102050204",
                  },
                  {
                    name: "编辑",
                    code: "0102050205",
                  },
                ],
              },
              {
                name: "进场二维码",
                code: "01020503",
                children: [
                  {
                    name: "编辑",
                    code: "0102050301",
                  },
                ],
              },
            ],
          },
          {
            name: "起重机械监测",
            code: "010207",
            children: [
              {
                name: "塔机",
                code: "01020701",
                children: [...towerCraneProjectPower],
              },
              {
                name: "升降机",
                code: "01020702",
                children: [...elevatorProjectPower],
              },
            ],
          },
          // {
          //    name: "运输车辆管理",
          //    code: "010206",
          //    children: [
          //       {
          //          name: "汇总分析",
          //          code: "01020601",
          //       },
          //       {
          //          name: "车辆定位",
          //          code: "01020602",
          //          children: [
          //             {
          //                name: "预警处理",
          //                code: "0102060201",
          //             },
          //             {
          //                name: "报警处理",
          //                code: "0102060202",
          //             },
          //          ],
          //       },
          //       {
          //          name: "车辆列表",
          //          code: "01020603",
          //          children: [
          //             {
          //                name: "新建",
          //                code: "0102060301",
          //             },
          //             {
          //                name: "添加加油记录",
          //                code: "0102060302",
          //             },
          //             {
          //                name: "设置运距",
          //                code: "0102060303",
          //             },
          //          ],
          //       },
          //       {
          //          name: "预报警",
          //          code: "01020604",
          //          children: [
          //             {
          //                name: "预警处理",
          //                code: "0102060401",
          //             },
          //             {
          //                name: "报警处理",
          //                code: "0102060402",
          //             },
          //          ],
          //       },
          //       {
          //          name: "运距",
          //          code: "01020605",
          //          children: [
          //             {
          //                name: "改为有效",
          //                code: "0102060501",
          //             },
          //             {
          //                name: "改为无效",
          //                code: "0102060502",
          //             },
          //          ],
          //       },
          //       {
          //          name: "工程量",
          //          code: "01020606",
          //       },
          //       {
          //          name: "ACC台账",
          //          code: "01020607",
          //       },
          //       {
          //          name: "系统设置",
          //          code: "01020608",
          //          children: [
          //             {
          //                name: "超速预报警设置",
          //                code: "0102060801",
          //                children: [
          //                   {
          //                      name: "添加阈值",
          //                      code: "010206080101",
          //                   },
          //                   {
          //                      name: "编辑阈值",
          //                      code: "010206080102",
          //                   },
          //                   {
          //                      name: "删除阈值",
          //                      code: "010206080103",
          //                   },
          //                ],
          //             },
          //             {
          //                name: "车队设置",
          //                code: "0102060802",
          //                children: [
          //                   {
          //                      name: "添加车队",
          //                      code: "010206080201",
          //                   },
          //                   {
          //                      name: "编辑车队",
          //                      code: "010206080202",
          //                   },
          //                   {
          //                      name: "删除车队",
          //                      code: "010206080203",
          //                   },
          //                ],
          //             },

          //          ],
          //       },
          //    ],
          // },
        ],
      },
    ],
  },
  {
    name: "公司级",
    code: "02",
    children: [
      {
        name: "AIOT",
        code: "0202",
        children: [
          {
            name: "监测中心",
            code: "020201",
            children: [
              {
                name: "设备统计",
                code: "02020101",
                children: [
                  {
                    name: "查看详情",
                    code: "0202010101",
                  },
                  {
                    name: "导出",
                    code: "0202010102",
                  },
                ],
              },
              {
                name: "异常数据总览",
                code: "02020102",
                children: [
                  {
                    name: "数据统计导出",
                    code: "0202010201",
                  },
                  {
                    name: "项目违章排名导出",
                    code: "0202010202",
                  },
                ],
              },
              {
                name: "人员登录记录",
                code: "02020103",
                children: [
                  {
                    name: "导出",
                    code: "0202010301",
                  },
                ],
              },
              {
                name: "设备供应商评估",
                code: "02020104",
                children: [
                  {
                    name: "塔机监测设备导出",
                    code: "0202010401",
                  },
                  {
                    name: "环境监测设备导出",
                    code: "0202010402",
                  },
                  {
                    name: "运渣车监测设备导出",
                    code: "0202010403",
                  },
                ],
              },
            ],
          },
          {
            name: "运渣车监测",
            code: "020202",
            children: [
              {
                name: "统计分析",
                code: "02020201",
                children: [
                  {
                    name: "导出",
                    code: "0202020101",
                  },
                ],
              },
              {
                name: "进/出场数据",
                code: "02020202",
                children: [
                  {
                    name: "导出",
                    code: "0202020201",
                  },
                  {
                    name: "图片下载",
                    code: "0202020202",
                  },
                ],
              },
              {
                name: "现场监控",
                code: "02020203",
                children: [
                  {
                    name: "下载",
                    code: "0202020301",
                  },
                ],
              },
            ],
          },
          {
            name: "环境监测",
            code: "020203",
            children: [
              {
                name: "统计分析",
                code: "02020301",
                children: [
                  {
                    name: "导出",
                    code: "0202030101",
                  },
                ],
              },
              {
                name: "实时监测",
                code: "02020302",
              },
            ],
          },
          {
            name: "起重机械监测",
            code: "020204",
            children: [
              {
                name: "统计分析",
                code: "02020401",
                children: [
                  {
                    name: "导出",
                    code: "0202040101",
                  },
                ],
              },
              {
                name: "实时监测",
                code: "02020402",
                children: [
                  {
                    name: "导出",
                    code: "0202040201",
                  },
                ],
              },
              {
                name: "预警/报警数据",
                code: "02020403",
                children: [
                  {
                    name: "导出",
                    code: "0202040301",
                  },
                ],
              },
              {
                name: "工作循环",
                code: "02020404",
                children: [
                  {
                    name: "导出",
                    code: "0202040401",
                  },
                ],
              },
              {
                name: "离线时长",
                code: "02020405",
                children: [
                  {
                    name: "导出",
                    code: "0202040501",
                  },
                ],
              },
              // {
              //    name: "抓拍图片库",
              //    code: "02020406",
              //    children: [
              //       {
              //          name: "下载",
              //          code: "0202040601",
              //       },
              //    ],
              // },
            ],
          },
          {
            name: "非道路移动机械管控",
            code: "020205",
            children: [
              {
                name: "区域数据统计",
                code: "02020501",
              },
              {
                name: "台账信息",
                code: "02020502",
              },
            ],
          },
          {
            name: "起重机械监测",
            code: "020207",
            children: [
              {
                name: "塔机",
                code: "02020701",
                children: [...towerCraneCompanyPower],
              },
              {
                name: "升降机",
                code: "02020702",
                children: [...elevatorCompanyPower],
              },
            ],
          },
          // {
          //    name: "运输车辆管理",
          //    code: "020206",
          //    children: [
          //       {
          //          name: "汇总分析",
          //          code: "02020601",
          //       },
          //       {
          //          name: "车辆定位",
          //          code: "02020602",
          //       },
          //       {
          //          name: "车辆列表",
          //          code: "02020603",
          //       },
          //       {
          //          name: "预报警",
          //          code: "02020604",
          //       },
          //       {
          //          name: "运距",
          //          code: "02020605",
          //       },
          //       {
          //          name: "工程量",
          //          code: "02020606",
          //       },
          //       {
          //          name: "ACC台账",
          //          code: "02020607",
          //       },
          //    ],
          // },
        ],
      },
    ],
  },
]

console.log(JSON.stringify(stirng))

// console.log(JSON.stringify(company))
