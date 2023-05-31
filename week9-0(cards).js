var vm = new Vue({
    el: "#app",
    data: {
      keyword: "",
      cards: [
        {
          title: "期中",
          cover:
            "https://i2.hdslb.com/bfs/archive/e5060e9f5724cf50c049882dc3550d746a329647.jpg",
          address: "學號:410730997",
          tel: "班級:教科二A",
          opentime: "姓名:郭羽涵",
          title_url: "https://img.win7zhijia.cn/upload/20220411/990b3c219496df166009244bc953764b.jpg",
          bgimage: ""
        },
        {
            title: "修過課程",
            cover:
              "https://i2.hdslb.com/bfs/archive/e5060e9f5724cf50c049882dc3550d746a329647.jpg",
            address: "課程名稱:教學原理與策略",
            tel: "授課老師:賴婷鈴",
            opentime: "課程時間:周二13:10-16:10",
            bgimage: ""
          },
          {
            title: "修過課程",
            cover:
              "https://i2.hdslb.com/bfs/archive/e5060e9f5724cf50c049882dc3550d746a329647.jpg",
            address: "課程名稱:民主政治",
            tel: "授課老師:黃琛瑜",
            opentime: "課程時間:周四10:10-12:10",
            bgimage: ""
          },
          {
            title: "修過課程",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "課程名稱:介面設計",
            tel: "授課老師:李世忠",
            opentime: "課程時間:周一13:10-16:10",
            bgimage: ""
          }
		],
    },
    
    mounted:function(){        
        swiper = new Swiper('.carousel', {
          /*+++++++++++++++++++++++++++++++++++++++++*/
          loop:true,    //第一頁和最後一頁相連
          effect: 'cards',
          /*+++++++++++++++++++++++++++++++++++++++++*/
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination',
            type: "fraction", //加入頁碼
          }
        })     

        }
  });
