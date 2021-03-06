/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
// let host = 'https://imezdcv9.qcloud.la'  // pro
let host = 'http://localhost:5757'  // pro
let yjjhost = 'https://app1.efoundation.com.cn'  //pro
// let yjjhost = 'http://192.168.1.211:8088'  // dev
// let yjjhost = 'http://192.168.0.105:3000'  // home
// let yjjhost = 'http://192.168.1.73'  // 73测试环境
// let yjjhost = 'http://192.168.1.76'  // 76测试环境

// let imgUrlPath = 'http://192.168.0.101:3000'
let imgUrlPath = 'http://192.168.1.211:8088'
// let imgUrlPath = 'https://app1.efoundation.com.cn'

let config = {

    // 下面的地址配合云端 Demo 工作
  service: {
      host,
      yjjhost,
      imgUrlPath,

        // 登录地址，用于建立会话
      loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
      requestUrl: `${host}/weapp/user`,

        // 测试的信道服务地址
      tunnelUrl: `${host}/weapp/tunnel`,

        // 上传图片接口
      uploadUrl: `${host}/weapp/upload`,

      // 用户openId获取地址
      openIdUrl: `${host}/weapp/openid`,

      // 用户微信绑定电话号码获取地址
      phoneUrl: `${host}/weapp/phone`,


      /* 
      *  ========== 亿基金数据相关接口 ==========
      */

        // 首页信息
      indexDataUrl: `${yjjhost}/mobile/nativeIndex`,

        // 活期宝数据接口
      hqbDataUrl: `${yjjhost}/mobile/publicfund/hqbInfo`,

        // 公募基金列表接口
      publicFundListUrl: `${yjjhost}/mobile/publicfund/getPublicFundList`,

        // 私募基金列表接口
      privateFundListUrl: `${yjjhost}/mobile/privatefund/getPrivateFundList`,

      // 亿推荐公募基金接口
      recommendPubUrl: `${yjjhost}/mobile/publicfund/getRecommendList`,
      // 亿推荐私募基金接口
      recommendPrvUrl: `${yjjhost}/mobile/privatefund/getPrivateFundRem`,

        // 资讯列表接口
      jrktUrl: `${yjjhost}/mobile/about/getJrktList`,
      newsAjaxUrl: `${yjjhost}/mobile/news/newsAjax`,  // 财富头条和投基策略的请求链接

        // 公募基金详情信息
      pubDetailUrl: `${yjjhost}/mobile/publicfund/getPublicFundDetail`,

      // 私募基金详情信息
      prvDetailUrl: `${yjjhost}/mobile/privatefund/getPrivateFundDetail`,

        // 详情页净值走势
      fundNavTrade: `${yjjhost}/mobile/publicfund/navTrade`,
        // 详情页万份收益走势
      wanNavTrade: `${yjjhost}/mobile/publicfund/wanTrade`,

        // 详情页净值增长走势
      fundIncreaseTrade: `${yjjhost}/mobile/publicfund/navIncreaseTrade`,

        // 详情页申购费率
      fundShengouRate: `${yjjhost}/mobile/publicfund/shengou`,

        // 详情页赎回费率
      fundShuhuiRate: `${yjjhost}/mobile/publicfund/shuhui`,

        // 活期宝信息
      hqbInfoUrl: `${yjjhost}/mobile/publicfund/hqbInfo`,

      // 获取理财师列表
      plannersListUrl: `${yjjhost}/mobile/planners/queryList`,
      // 获取理财师详细信息
      plannerDetail: `${yjjhost}/mobile/planners/pList`
    }
}

module.exports = config
