//模拟新闻数据
const news = [
  {id: '264698',
  title: '中国海大志愿者完成第五届跨国公司领导人青岛峰会志愿服务',
  poster: 'http://news.ouc.edu.cn/_upload/article/images/dd/19/ede76a4a4ebdb1d3ab278a12fdd8/9bb154f8-e33b-421a-b453-82c758a32405.jpg',
  content: ' 本站讯 8月27日至29日，第五届跨国公司领导人青岛峰会在青岛国际会议中心举办。为全面做好服务保障，确保峰会顺利举行，中国海洋大学招募选派115名志愿者参与峰会志愿服务，志愿者们以饱满的热情完成本次大会的各项工作，累计服务时长3000余小时，用实际行动展现中国海大青年风采。',
  add_date: '2024-08-31'},
  {id: '304083',
  title: '贵州省人大干部综合能力提升培训班在中国海洋大学举办',
  poster: 'http://news.ouc.edu.cn/_upload/article/images/3a/4d/73b22a9b404f93e907238f2a2325/55606b28-53b8-412f-9420-74c7a30657b6.jpg',
  content: ' 本站讯 8月26日至30日，贵州省人大干部综合能力提升培训班（第三期）在中国海洋大学举办。贵州省人大常委会党组成员于杰，中国海洋大学党委常委、副校长王雪鹏出席开班式，贵州省人大常委会副秘书长、机关党组成员闵红棕主持开班式。',
  add_date: '2024-08-30'},
  {id: '305670',
  title: '中国海洋大学开展2024级本科生集中入学教育',
  poster: 'http://news.ouc.edu.cn/_upload/article/images/94/9e/509119874e5287e8c56ef708865b/11604054-e936-468b-a50e-a4233e475a53.jpg',
  content: '本站讯 为帮助2024级本科生尽快适应大学生活，8月27日，学校在崂山校区体育馆举行了2024级本科生集中入学教育。\n 当天的集中教育分为心理健康教育、传染病防控教育和安全教育三个部分。学校学生工作处副处长、心理健康教育与咨询中心主任牟宏玮就“如何解决大学生的心理困惑”这一问题与同学们深入交流，引导同学们用“热爱心、平常心、进取心、同理心、初心”五心来调整自身状态，积极适应大学生活；青岛市中心医院呼吸科副主任刘加洪医生主讲《肺结核、新冠、流感等呼吸道传染病防治及校园控烟》，带领同学们认识了肺结核等呼吸道传染病的感染症状、传染途径和预防措施，以及吸烟的危害和校园控烟措施；学校党委保卫部副部长、保卫处副处长王法利以《平安海大 与你同行》为题，为2024级本科生讲授入学安全教育第一课。他用生动的案例和详实的数据，向同学们介绍了防盗、防诈骗、消防安全、交通安全、网络安全、国家安全等安全知识，教育引导同学们遵守国家法律法规和学校规章制度，主动学习安全知识，提高安全防范技能。',
  add_date: '2024-08-29'}
];

//获取新闻列表
function getNewsList() {
  let list = [];
  for (var i = 0; i < news.length; i++) {
    let obj = {};
    obj.id = news[i].id;
    obj.poster = news[i].poster;
    obj.add_date = news[i].add_date;
    obj.title = news[i].title;
    list.push(obj);
  }
  return list; //返回新闻列表
}

//获取新闻内容
function getNewsDetail(newsID) {
  let msg = {
    code: '404', //没有对应的新闻
    news: {}
  };
  for (var i = 0; i < news.length; i++) {
    if (newsID == news[i].id) { //匹配新闻id编号
      msg.code = '200'; //成功
      msg.news = news[i]; //更新当前新闻内容
      break;
    }
  }
  return msg; //返回查找结果
}

// 对外暴露接口
module.exports = {
  getNewsList: getNewsList,
  getNewsDetail: getNewsDetail
}