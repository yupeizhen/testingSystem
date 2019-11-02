// pages/analysis/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s: ['A. ', 'B. ', 'C. ', 'D. ', 'E. '],
    questionInfo:{},
    loading: true,
    result:{},
    id: 0,
    disabled:true,
    actionVisible:false,
    index:0,
    chose:[],
    showVideo: false,
    showHelpVideo:false,
    winWidth: 0,
    winHeight: 150,
    // tab切换 
    currentTab: 0,
    // 利息、股息、红利赋值START
    opitionTextA:'',
    opitionTextB:'',
    opitionTextC:'',
    opitionTextD:'',
    chooseFlgA: false,
    chooseFlgB: false,
    chooseFlgC: false,
    chooseFlgD: false,
    option:'',
    text:'',
    firstLastText:'',
    questionType:'',
    questionTypeFlg: '',
    question: [
      { topic: '输出的结果是什么？', opitionA: '实例方法可直接调用超类的实例方法', opitionB: '实例方法可直接调用超类的类方法', opitionC: '实例方法可直接调用其他类的实例方法', opitionD: '实例方法可直接调用本类的类方法',answer:'D'},
      { topic: '第二题', opitionA: 'Aa', opitionB: 'Cb', opitionC: 'Dc', opitionD: 'Bd', answer: 'AD' },
    ]
  },

  onLoad (options) {
    var that = this;
    console.log(this.data.question[this.data.id].answer)
    wx.getSystemInfo({
      success(res) {
        that.setData({
          windowWidth: res.windowWidth
        })
      }
    })
    // var objectId = options.objectId
    this.setData({
      questionText: this.data.question[this.data.id].topic,
      opitionTextA: this.data.question[this.data.id].opitionA,
      opitionTextB: this.data.question[this.data.id].opitionB,
      opitionTextC: this.data.question[this.data.id].opitionC,
      opitionTextD: this.data.question[this.data.id].opitionD,
    })
    if (this.data.question[this.data.id].answer.length == 1){
      this.setData({
        questionTypeFlg: false,
        questionType: '单选题'
      })
    }
    else {
      this.setData({
        questionTypeFlg: true,
        questionType: '多选题'
      })
    }
  },
  chooseA: function(e){
    console.log(this.data.chooseFlgA)
    this.setData({
      chooseFlgA: !this.data.chooseFlgA
    })
    if (this.data.chooseFlgA == true){
      this.setData({
        chooseFlgB: false,
        chooseFlgC: false,
        chooseFlgD: false,
        option: 'A'
      })
    }
  },
  chooseB: function (e) {
    console.log(this.data.chooseFlgB)
    this.setData({
      chooseFlgB: !this.data.chooseFlgB
    })
    if (this.data.chooseFlgB == true) {
      this.setData({
        chooseFlgA: false,
        chooseFlgC: false,
        chooseFlgD: false,
        option: 'B'
      })
    }
  },

  chooseC: function (e) {
    console.log(this.data.chooseFlgC)
    this.setData({
      chooseFlgC: !this.data.chooseFlgC
    })
    if (this.data.chooseFlgC == true) {
      this.setData({
        chooseFlgB: false,
        chooseFlgA: false,
        chooseFlgD: false,
        option: 'C'
      })
    }
  },

  chooseD: function (e) {
    console.log(this.data.chooseFlgD)
    this.setData({
      chooseFlgD: !this.data.chooseFlgD
    })
    if (this.data.chooseFlgD == true) {
      this.setData({
        chooseFlgB: false,
        chooseFlgC: false,
        chooseFlgA: false,
        option: 'D'
      })
    }
  },

  chooseAmultiple: function (e) {
    console.log(this.data.chooseFlgA)
    this.setData({
      chooseFlgA: !this.data.chooseFlgA
    })
    if (this.data.chooseFlgA == true) {
      this.setData({
        optionA: 'A'
      })
    }
    else {
      this.setData({
        optionA: ''
      })
    }
    this.setData({
      option: this.data.optionA + this.data.optionB + this.data.optionC + this.data.optionD
    })
  },

  chooseBmultiple: function (e) {
    console.log(this.data.chooseFlgB)
    this.setData({
      chooseFlgB: !this.data.chooseFlgB
    })
    if (this.data.chooseFlgB == true) {
      this.setData({
        optionB: 'B'
      })
    }
    else {
      this.setData({
        optionB: ''
      })
    }
    this.setData({
      option: this.data.optionA + this.data.optionB + this.data.optionC + this.data.optionD
    })
  },

  chooseCmultiple: function (e) {
    console.log(this.data.chooseFlgC)
    this.setData({
      chooseFlgC: !this.data.chooseFlgC
    })
    if (this.data.chooseFlgC == true) {
      this.setData({
        optionC: 'C'
      })
    }
    else {
      this.setData({
        optionC: ''
      })
    }
    this.setData({
      option: this.data.optionA + this.data.optionB + this.data.optionC + this.data.optionD
    })
  },

  chooseDmultiple: function (e) {
    console.log(this.data.chooseFlgD)
    this.setData({
      chooseFlgD: !this.data.chooseFlgD
    })
    if (this.data.chooseFlgD == true) {
      this.setData({
        optionD: 'D'
      })
    }
    else {
      this.setData({
        optionD: ''
      })
    }
    this.setData({
      option: this.data.optionA + this.data.optionB + this.data.optionC + this.data.optionD
    })
    console.log(this.data.option)
  },


  next: function(){
    if (this.data.id >= (this.data.question.length - 1)){
      this.setData({
        firstLastText: '已到最后一题'
      })
    }
    else {
      this.setData({
        id: this.data.id+1,
        chooseFlgA: false,
        chooseFlgB: false,
        chooseFlgC: false,
        chooseFlgD: false,
        option: '',
        text: '',
        firstLastText: '',
      })
      this.onLoad()
    }
  },

  previous: function () {
    if (this.data.id <= 0) {
      this.setData({
        firstLastText: '已到第一题'
      })
    }
    else {
      this.setData({
        id: this.data.id - 1,
        chooseFlgA: false,
        chooseFlgB: false,
        chooseFlgC: false,
        chooseFlgD: false,
        option: '',
        text: '',
        firstLastText: '',
      })
      this.onLoad()
    }
  },

  checkAnswer: function(){
    if (this.data.option == this.data.question[this.data.id].answer){
      this.setData({
        text:'恭喜你，回答正确'
      })
    }
    else{
      this.setData({
        text: '抱歉，正确答案是：' + this.data.question[this.data.id].answer
      })
    }
  },



  onReady(res) {
    this.videoContext = wx.createVideoContext('myVideo')
    this.helpVideoContext = wx.createVideoContext('helpVideo')
  },
  setThisData(i){
    console.log(i)
    const r = this.data.result.questionList
    const answer = []
    var current = "";
    var currentD = [];
    console.log(r)
    for(var j=0;j<r[i].choseList.length;j++){
      if(r[i].choseList[j].isChose){
        answer.push(this.data.s[j] + r[i].choseList[j].item)
      }
    }
    this.setData({
      current: current,
      currentD: currentD,
      questionInfo: r[i],
      answer: answer,
    })
    console.log(this.data.current)
  },
  handlePageChange({ detail }){
    const action = detail.type;
    const r = this.data.result.questionList
    
    
    if (action === 'next') {
      if(this.data.index >= (r.length-1)){
        console.log(this.data.index)
        return;
      }
      this.setThisData((this.data.index +1));
      this.setData({
        index: (this.data.index + 1),
      })
    } else {
      this.setThisData((this.data.index - 1));
      this.setData({
        index: (this.data.index - 1),
      })
    }
  },
  //弹出统计下拉层
  handleOpen() {
    this.hideVideo()
    this.hideHelpVideo()
    this.setData({
      actionVisible: true
    })
  },
  //关闭统计下拉层
  actionCancel() {
    this.setData({
      actionVisible: false
    })
  },
  dump(e){
    console.log(e)
    var index = e.currentTarget.dataset.index
    this.setThisData(index)
    this.setData({
      index:index,
      actionVisible: false
    })
  },
  //放大图片
  showPic: function (e) {
    const src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src,
      urls: [src]
    })
  },
  showVideo() {
    this.videoContext.play()
    this.setData({
      showVideo: true
    })
  },
  hideVideo: function () {
    this.videoContext.pause()
    this.setData({
      showVideo: false
    });
  },
  showHelpVideo() {
    this.helpVideoContext.play()
    this.setData({
      showHelpVideo: true
    })
  },
  hideHelpVideo: function () {
    this.helpVideoContext.pause()
    this.setData({
      showHelpVideo: false
    });
  },
})