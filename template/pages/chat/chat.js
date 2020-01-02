const app = getApp()
const until = require("../../utils/until.js");
Page({
  data: {
    isInList: 0,
    newsList: [],
    isPage: 1,
    InputBottom: 0,
    EmojiBottom: 0,
    isShow: false, //emoji是否显示
    emojiChar: "☺-😋-😌-😍-😏-😜-😝-😞-😔-😪-😭-😁-😂-😃-😅-😆-👿-😒-😓-😔-😏-😖-😘-😚-😒-😡-😢-😣-😤-😢-😨-😳-😵-😷-😸-😻-😼-😽-😾-😿-🙊-🙋-🙏-✈-🚇-🚃-🚌-🍄-🍅-🍆-🍇-🍈-🍉-🍑-🍒-🍓-🐔-🐶-🐷-👦-👧-👱-👩-👰-👨-👲-👳-💃-💄-💅-💆-💇-🌹-💑-💓-💘-🚲",
    //0x1f---
    emoji: [
      "60a", "60b", "60c", "60d", "60f",
      "61b", "61d", "61e", "61f",
      "62a", "62c", "62e",
      "602", "603", "605", "606", "608",
      "612", "613", "614", "615", "616", "618", "619", "620", "621", "623", "624", "625", "627", "629", "633", "635", "637",
      "63a", "63b", "63c", "63d", "63e", "63f",
      "64a", "64b", "64f", "681",
      "68a", "68b", "68c",
      "344", "345", "346", "347", "348", "349", "351", "352", "353",
      "414", "415", "416",
      "466", "467", "468", "469", "470", "471", "472", "473",
      "483", "484", "485", "486", "487", "490", "491", "493", "498", "6b4"
    ],
    emojis: [], //qq、微信原始表情,
    emojiUnicode: [],
    InputValue: '',
    toView: 'id_0',

  },
  onLoad: function (options) {
    this.setData({
      avatarUrl: app.globalData.userInfo.avatarUrl
    })
    //emoji表情
    let em = {},
      emChar = this.data.emojiChar.split("-");
    let emojis = []
    this.data.emoji.forEach((v, i) => {
      em = {
        char: emChar[i],
        emoji: "0x1f" + v
      };
      emojis.push(em)
    });
    console.log(options)
    this.setData({
      emojis: emojis
    });
  },
  onUnload: function () {
    this.setData({
      isPage: 0
    })
  },
  //选择emoji表情
  emojiChoose(e) {
    let emojiUnicode = this.data.emojiUnicode;
    let value = this.data.InputValue;
    emojiUnicode.push(`[${e.currentTarget.dataset.oxf}]`)
    this.setData({
      InputValue: value + e.currentTarget.dataset.emoji,
      emojiUnicode: emojiUnicode
    })
  },

  InputFocus(e) {
    this.setData({
      isShow: false,
      InputBottom: e.detail.height,
      InputValue: e.detail.value,
      EmojiBottom: 0
    })
  },
  InputBlur(e) {
    this.setData({
      InputBottom: 0
    })
  },
  bindKeyInput(e) {
    this.setData({
      InputValue: e.detail.value
    })
  },
  showEmoji(e) {
    if (this.data.isShow) {
      this.setData({
        isShow: false,
        EmojiBottom: 0
      })
    } else {
      this.setData({
        isShow: true,
        EmojiBottom: 160
      })
    }
  },

  send: function () {
    var _this = this;
    if (this.data.InputValue) {
      var list = [];
      list = this.data.newsList;
      var temp = {
        msg: this.data.InputValue,
        ischatbot: 0
      };
      list.push(temp)
      this.setData({
        newsList: list,
        InputValue: '',
        toView: 'id_' + list.length
      })
      wx.request({
        url: 'https://ntdxyg.mynatapp.cc/chat',
        method: 'get',
        data: temp,
        success(res) {
          list.push(res.data),
          _this.setData({
            toView: 'id_' + list.length,
            newsList: list
          })
        }
      })
    }
  }
})
