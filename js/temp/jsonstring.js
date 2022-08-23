var product = {
  name: "项目级",
  code: "01",
  children: [{
      name: "AIOT",
      code: "0102",
      children: [{
              name: "运渣车监测",
              code: "010201",
              children: [{
                      name: "统计分析",
                      code: "01020101",
                      children: [{
                          name: "导出",
                          code: "0102010101",
                      }, ],
                  },
                  {
                      name: "进/出场数据",
                      code: "01020102",
                      children: [{
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
                      children: [{
                          name: "下载",
                          code: "0102010301",
                      }, ],
                  },
              ],
          },
          {
              name: "环境监测",
              code: "010202",
              children: [{
                      name: "统计分析",
                      code: "01020201",
                      children: [{
                          name: "导出",
                          code: "0102020101",
                      }, ],
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
              children: [{
                      name: "统计分析",
                      code: "01020301",
                      children: [{
                          name: "导出",
                          code: "0102030101",
                      }, ],
                  },
                  {
                      name: "实时监测",
                      code: "01020302",
                  },
                  {
                      name: "预警/报警数据",
                      code: "01020303",
                      children: [{
                          name: "导出",
                          code: "0102030301",
                      }, ],
                  },
                  {
                      name: "工作循环",
                      code: "01020304",
                      children: [{
                          name: "导出",
                          code: "0102030401",
                      }, ],
                  },
                  {
                      name: "离线时长",
                      code: "01020305",
                      children: [{
                          name: "导出",
                          code: "0102030501",
                      }, ],
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
              children: [{
                      name: "机械审核",
                      code: "01020501",
                      children: [

                          {
                              name: "审核",
                              code: "0102050101"
                          }
                      ]
                  },
                  {
                      name: "台账信息",
                      code: "01020502",
                      children: [{
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

                      ]
                  },
                  {
                      name: "进场二维码",
                      code: "01020503",
                      children: [{
                              name: '编辑',
                              code: "0102050301",
                          },

                      ]
                  }
              ]
          }
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
  }, ],
}

var company = {
  name: "公司级",
  code: "02",
  children: [{
      name: "AIOT",
      code: "0202",
      children: [{
              name: "监测中心",
              code: "020201",
              children: [{
                      name: "设备统计",
                      code: "02020101",
                      children: [{
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
                      children: [{
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
                      children: [{
                          name: "导出",
                          code: "0202010301",
                      }, ],
                  },
                  {
                      name: "设备供应商评估",
                      code: "02020104",
                      children: [{
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
              children: [{
                      name: "统计分析",
                      code: "02020201",
                      children: [{
                          name: "导出",
                          code: "0202020101",
                      }, ],
                  },
                  {
                      name: "进/出场数据",
                      code: "02020202",
                      children: [{
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
                      children: [{
                          name: "下载",
                          code: "0202020301",
                      }, ],
                  },
              ],
          },
          {
              name: "环境监测",
              code: "020203",
              children: [{
                      name: "统计分析",
                      code: "02020301",
                      children: [{
                          name: "导出",
                          code: "0202030101",
                      }, ],
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
              children: [{
                      name: "统计分析",
                      code: "02020401",
                      children: [{
                          name: "导出",
                          code: "0202040101",
                      }, ],
                  },
                  {
                      name: "实时监测",
                      code: "02020402",
                      children: [{
                          name: "导出",
                          code: "0202040201",
                      }, ],
                  },
                  {
                      name: "预警/报警数据",
                      code: "02020403",
                      children: [{
                          name: "导出",
                          code: "0202040301",
                      }, ],
                  },
                  {
                      name: "工作循环",
                      code: "02020404",
                      children: [{
                          name: "导出",
                          code: "0202040401",
                      }, ],
                  },
                  {
                      name: "离线时长",
                      code: "02020405",
                      children: [{
                          name: "导出",
                          code: "0202040501",
                      }, ],
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
              children: [{
                      name: "区域数据统计",
                      code: "02020501",
                  },
                  {
                      name: "台账信息",
                      code: "02020502",
                  }
              ]
          }
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
  }, ],
}

console.log(JSON.stringify(product))

console.log(JSON.stringify(company))