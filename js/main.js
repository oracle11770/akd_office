$(function() {
    // 线上API
    // var OFFICIAL_SITE_API = '//api.onejoyt.co.kr'
    var OFFICIAL_SITE_API = '//testapi.onejoytoken.co.kr'
	// 映射语言接口的值
    var langObj = {
        'kr': 'kr',
        'en': 'en',
        'cn': 'zh-cn'
    };

    function isPC() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      return false;
    } else {
      return true;
    }
  }

    var isiOS = !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    var isMobil = isPC(),
      isEdit = false;

    $('.menu').show();
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        direction: 'vertical',
        mousewheelControl: true,
        paginationType: 'custom',
        simulateTouch: false,
        resistanceRatio: 0,
        paginationCustomRender: function(swiper, current, total) {
            var paginationHtml = "";
            // var bar = [ '사전판매','홈페이지', '기능 소개', '팀 소개', '자문기구', '타임 라인'];
          var bar = ['公司简介', '服务内容', '我们的优势', '成功案例','关于我们','展会时间']
            for(var i = 0; i < total; i += 1) {
                if(i === (current - 1)) {
                    paginationHtml += '<div class="swiper-paginations swiper-active"><p class="pagin-line"><p><span>' + bar[i] + '</span></div>'
                } else {
                    paginationHtml += '<div class="swiper-paginations other"><p class="pagination-dot"></p><span>' + bar[i] + '</span></div>'
                }
            }
            return paginationHtml
        },
        onInit: function(swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
            setTimeout(hover, 100)
        },
        onSlideChangeEnd: function(swiper) {
            swiperAnimate(swiper);
            hover();
            console.log(swiper.activeIndex, 'swiper.activeIndex')
           /*  if(swiper.activeIndex == 5) {
                $('.scroll').hide()
            }else  if(swiper.activeIndex === 0){
                $('.showImg').css('display','none')
                if(!$('#muziTotal').val()){
                    loadMuzi()
                }
                if (!isMobil && isEdit) {
                  $('.header').hide()
                  $('.slider-blo').css('marginTop', 0)
                }
            } else {
                $('.scroll').show()
                $('.showImg').css('display','block')
                $('.muzi-percentage').css('width','0%')
            }
            $('.logo').css('display','block') */
        }
    });

    $('.pagination').on('click', 'div', function() {
        var index = $(this).index();
        mySwiper.slideTo(index, 500, function() {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper)
        });
        hover()
        /* if(index === 0){
            $('#muziId').css('display', 'none')
            $('#ICOid').css('display', 'block')
            loadMuzi()
        }else{
            $('.muzi-percentage').css('width','0%')
        }
        setTimeout(function(){
            if(index === 0){
                $('.showImg').css('display','none')
            }else{
                $('.showImg').css('display','block')
            }
        }, 600)
        $('.logo').css('display','block') */
    });


  var swiperSer = new Swiper('.swiper-container-ser', {
      direction: 'horizontal',
      autoplay: 5000,
      grabCursor: true,
      pagination: '.swiper-pagination-ser',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    })        

    var caseSwiper = new Swiper('.swiper-container-case', {
      autoplay: 5000,
      loop: true,
      slidesPerView: 4,
      spaceBetween: 100,
      pagination: '.swiper-pagination-case',
      direction: 'horizontal',
      grabCursor: true,
      centeredSlides: false
    });

    function hover() {
        console.log('hover');
        console.log(isMobil, '1111111111111111')
        if (!isMobil) {
          $('.header').show()
          $('.slider-blo').attr('style', '')
        }
        $('.other').hover(function() {
            $(this).find('span').show();
            $(this).find('.pagination-dot').hide()
        }, function() {
            $(this).find('span').hide();
            $(this).find('.pagination-dot').show()
        })
    }
    $('.team-person .sm-img').click(function(e) {
        e.stopPropagation();
      var imgsObj = [['bj-case1.jpg', 'bj-case2.jpg', 'bj-case3.jpg', 'bj-case4.jpg', 'bj-case5.jpg', 'bj-case6.jpg'],
        ['hz-case1.jpg', 'hz-case2.jpg', 'hz-case3.jpg', 'hz-case4.jpg', 'hz-case5.jpg'],
        ['water-case1.jpg', 'water-case2.jpg', 'water-case3.jpg', 'water-case4.jpg', 'water-case5.jpg', 'water-case6.jpg', 'water-case7.jpg', 'water-case8.jpg'],
        ['zb-case1.jpg', 'zb-case2.jpg', 'zb-case3.jpg', 'zb-case4.jpg', 'zb-case5.jpg', 'zb-case6.jpg',]]
        var imgs = imgsObj[$(this).index()]
        var html = []
        imgs.forEach(function(item){
          html.push('<div class="swiper-slide"><img src="img/'+item+'" alt="" /></div>')
        })
        $('#showImg').html(html)
        caseSwiper = new Swiper('.swiper-container-case', {
          autoplay: 5000,
          loop: true,
          slidesPerView: 4,
          spaceBetween: 100,
          pagination: '.swiper-pagination-case',
          direction: 'horizontal',
          grabCursor: true,
          centeredSlides: false
        });
        $(this).find('img').addClass('scale2');
        $(this).siblings().find('img').removeClass('scale2')

    });
    $('.circle-icon .icon-intro').click(function() {
        $('.intro-wd .into-txt').eq($(this).index()).addClass('show').siblings().removeClass('show');
        $(this).find('img').addClass('scale1');
        $(this).siblings().find('img').removeClass('scale1')
    });
    $('.company-icon img').click(function() {
        $('.com-intro p').eq($(this).index()).addClass('show').siblings().removeClass('show');
        // $(this).addClass('scale').siblings().removeClass('scale')
    });
    $('.company-icon .circle-img').click(function() {
        $('.com-intro p').eq($(this).index()).addClass('show').siblings().removeClass('show');
    });

    $('.company-icon .circle-img span').click(function() {
      $(this).addClass('scale');
      $(this).parent().siblings().find('span').removeClass('scale')
     });
    $('.time .circle').click(function() {
        $('.text-blo div').eq($(this).index()).addClass('show').siblings().removeClass('show');
        $('.time .circle').eq($(this).index()).addClass('cur-circle').siblings().removeClass('cur-circle')
    });
    $('.menu-btn').click(function() {
        $('.menu').addClass('menuShow')
    });
    $('.close').click(function() {
        $('.menu').removeClass('menuShow')
    });
    $('#learnUs').click(function() {
        mySwiper.slideNext()
    });
    $('.to-team').click(function() {
        $('.menu').removeClass('menuShow');
        mySwiper.slideTo(3, 1000, function() {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper)
        })
    });
   /* $('#teamIntro').click(function() {
        mySwiper.slideTo(2, 1000, function() {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper)
        })
    });*/
    $('.btns a').hover(function() {
        $(this).removeClass('btn1').addClass('btn2')
    }, function() {
        $(this).removeClass('btn2').addClass('btn1')
    });
    $('.switch-lang').click(function() {
        $('.select-drow').toggleClass('show')
    });
    $('.select-drow p').click(function() {
        $('.chose-lang').html($(this).html());
        initlang($(this).html().toLowerCase());
        $('.book').attr('href', 'http://doc.onejoytoken.com/OneJoyWhitePaper/OneJoyToken WhitePaper-' + $(this).html().toLowerCase() + '.pdf')
    });
    initlang("cn", true);
    loadMuzi();
    // 换算规格的动态文字
    function loadTxt(that, LangConfig) {
        var partNum = that.attr('data-val').split('-')
        if(partNum[1]){
            // that.text(LangConfig.replace('{0}',`(${(partNum[0]*(currentRate.cash/currentRate.eth)).toFixed(2)}
            //     -${(partNum[1]*(currentRate.cash/currentRate.eth)).toFixed(2)}KRW) `))
          that.text(LangConfig.replace('{0}','('+(partNum[0]*(currentRate.cash/currentRate.eth)).toFixed(2)+'-'+(partNum[1]*(currentRate.cash/currentRate.eth)).toFixed(2)+'KRW)'))
        }else{
            // that.text(LangConfig.replace('{0}',`(>${(partNum[0]*(currentRate.cash/currentRate.eth)).toFixed(2)}KRW)`))
            that.text(LangConfig.replace('{0}','(>'+(partNum[0]*(currentRate.cash/currentRate.eth)).toFixed(2)+'KRW)'))
        }
    }
    function initlang(type, flag) {
        $('.lang').each(function(item, index) {
            var langKey = $(this).attr('data-lang');
            if(LangConfig[langKey]){
                if($(this).attr('placeholder')){
                    $(this).attr('placeholder', LangConfig[langKey][type])
                }else if(LangConfig[langKey][type].indexOf('{0}') != -1 && !flag){
                    loadTxt($(this), LangConfig[langKey][type])
                }else{
                    $(this).text(LangConfig[langKey][type])
                }
            }
        })
    }


    // 输入OJT校验
    $('#ojtNum').keyup(function(event){
        event.stopPropagation();
        var reg = /^[0-9]/
　　　　 var inputval = $(this).val()
        var len = inputval.length
    　　if (!reg.test(inputval.substr(len-1))) {
            $(this).val(len === 1 ? "" : inputval.substr(0, len-1))
    　　}
        if(len === 1 && parseInt(inputval.substr(len-1)) === 0){
            $(this).val("")
        }
        var ojtNum = Math.floor($(this).val() / currentRate.eth);
        if( $('#ethMoneyId').attr('data-val') === '1'){
            $('#totalId').val(ojtNum || '')
            //赠送百分之10
            $('#sendNum').val(Math.floor(ojtNum * 0.1) || '')
        }else{
            $('#totalId').val(currentRate.cash * $(this).val() || "")
        }
    });

    $('#ojtNum').on('blur',function () {
      if(parseInt($(this).val()) < 3){
        var langVal = $('.chose-lang').text().toLowerCase()
        $.toast({'title': LangConfig.upbit2[langVal]})
        $(this).val("")
        $('#totalId').val('')
        $('#sendNum').val('')
      }
    })
    // 切换货币类型
    var currentRate = {"eth":"0","cash":0}
    $('#ethMoneyId').click(function(event){
        // 切换暂时删除
        return
        event.stopPropagation()
        $('.select-opt').css('display','block')
        $(this).find('img').attr('src', './img/select-down.png')
        $('.select-opt').focus()
        var lang = langObj[$('.chose-lang').text().toLowerCase()]
        $.ajax({
            // url: `${OFFICIAL_SITE_API}/site/get-fund-info`,
            url: OFFICIAL_SITE_API + '/site/get-fund-info',
            type: 'get',
            dataType: 'json',
            cache: false,
            data: {lang:lang},
            success: function(data) {
                if(data.code === 200){
                    var tempObj = data.data
                    currentRate = tempObj.currentRate
                }
            }
        })
    })
    $('.select-opt').blur(function(event){
        event.stopPropagation()
        $('.select-opt').css('display','none')
        $('.muzi-img').attr('src', './img/select-up.png')
    })
    // $('.select-opt p').hover(function(){
    //     $(this).css('background','rgba(0, 0, 0,0.8)')
    //   },function(){
    //     $(this).css('background','rgba(51, 51, 51)')
    //   })

    $('.select-opt p').click(function(event){
        // 暂时删除切换
        return
        event.stopPropagation()
        var lang = $('.chose-lang').text().toLowerCase()
        $('.select-opt').css('display','none')
        $('.muzi-img').attr('src', './img/select-up.png')
        if($(this).text() === 'ETH'){
            if( $('#ethMoneyId').attr('data-val') !== '1'){
                $('#ojtNum').val("")
                $('#totalId').val("")
            }
            $('#ethMoneyId').attr('data-val', '1')
            $('#ethMoneyId').find('label').text('ETH')
            $('#tokenDiv').css('display','block')
            $('#bankDiv').css('display','none')

            $('.transCurrentETH').show()
            $('.transCurrentKRW').hide()
            $('.transCurrentDash').show()

          $('#ETHAddressWrapper').css('display', 'block')
            $('#ethID').text('ETH')
          $('#sendNum').val('')
        }else{
            if( $('#ethMoneyId').attr('data-val') !== '3'){
                $('#ojtNum').val("")
                $('#totalId').val("")
            }
          $('#ETHAddressWrapper').css('display', 'none')
            $('#ethMoneyId').attr('data-val', '3')
            $('#ethMoneyId').find('label').text('KRW')
            $('#tokenDiv').css('display','none')
            $('#bankDiv').css('display','block')

            $('.transCurrentETH').hide()
            $('.transCurrentKRW').show()
            $('.transCurrentDash').hide()

          $('#ethID').text('KRW')
          $('#sendNum').val('')
        }
      // $('#ethLabId').text(`1 OJT =${currentRate.eth.toFixed(8)} ETH`)
      //   $('#moneyLabId').text(`1 OJT =${currentRate.cash} KRW`)
        $('#moneyLabId').text('1 OJT ='+currentRate.cash+' KRW')
    })

     // 参与募资
    $('#fundraisingId').click(function() {
      if(!isBegin) return
      // $('.logo').css('display','none')
        $('#muziId').css('display', 'block')
        $('#ICOid').css('display', 'none')
        $('.dynamicTxt').each(function(item, index) {
            var langKey = $(this).attr('data-lang');
            var lang = $('.chose-lang').text().toLowerCase()
            loadTxt($(this), LangConfig[langKey][lang])
        })
        isEdit = true
        if (!isMobil) {
          $('.header').hide()
          $('.slider-blo').css('marginTop', 0)
        }
    })
    // 返回
    $('#backmzId').click(function() {
        mySwiper.slideTo(0, 500, function() {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper)
        });
        isEdit = false
        hover()
        $('#muziId').css('display', 'none')
        $('#ICOid').css('display', 'block')
        $('.logo').css('display', 'block')
        loadMuzi()
        if (!isMobil) {
          $('.header').show()
          $('.slider-blo').attr('style', '')
        }
    })
    // 买入
    $('#muziOkId').click(function() {
        var langVal = $('.chose-lang').text().toLowerCase()
        var lang = langObj[langVal]
        var email = $("#accountId").val()
        var code = $("#codeId").val()
        var from_address = $("#ETHPayMentId").val()
        var to_address = $("#ojtAddrId").val()
        var num = $('#totalId').val()
        var amount = $('#ojtNum').val()
        var pay_type = $('#ethMoneyId').attr('data-val')


        if($("#accountId").val() == ""){
            $.toast({'title': LangConfig.emailInfo[langVal]})
            return;
        }
        if(!code){
            $.toast({'title':  LangConfig.codeInfo[langVal]})
            return;
        }
        if(!from_address){
            $.toast({'title': LangConfig.addrError[langVal]})
            return;
        }
        // if(!to_address){
        //     $.toast({'title': LangConfig.addrError[langVal]})
        //     return;
        // }
        var reg = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if(!reg.test($("#accountId").val())){
            $.toast({'title': LangConfig.emailError[langVal]})
            return;
        }
        var regTest = /^0x\S{40}/;
        if(!regTest.test(from_address) || !regTest.test(to_address)){
            $.toast({'title': LangConfig.addrError[langVal]})
            return;
        }

        var params = {
            email: email,
            code: code,
            from_address: from_address,
            to_address: to_address,
            lang: lang,
            pay_type: pay_type,
            num: num,
            amount: amount
        }
        console.log(params, 'params')
        $.ajax({
            url: OFFICIAL_SITE_API + '/site/submit-fund',
            type: 'post',
            dataType: 'json',
            cache: false,
            data: params,
            success: function(data){
                if(data.code === 200){
                    $.toast({title: LangConfig.buyInfo[langVal]})
                    // 重置表单
                    $('#ojtNum').val('');
                    $('#totalId').val('');
                    $('#sendNum').val('');
                    $('#accountId').val('');
                    $('#codeId').val('');
                    $('#ojtAddrId').val('');
                    $('#ETHPayMentId').val('');

                    isEdit = false

                    timeo = 60;//当减到0时赋值为60
                    $('#getCode').text(LangConfig.code[langVal]);
                    clearInterval(timeStop);//清除定时器
                    $('#getCode').css('background','rgba(218,58,78,1)');//移除属性，可点击
                    $('#getCode').attr('data-flag', false)

                  // ga统计
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-130170205-6');

                    mobConv();
                }else{
                    $.toast({'title': data.msg})
                }
            }
        })
    })



    // 加载募资数据
    function loadMuzi(){
    }

    var timeStop,
        timeo;
    // 发送验证码
    $('#getCode').click(function(event){
        event.stopPropagation();
        var that = $(this)
        var langVal = $('.chose-lang').text().toLowerCase()
        if($("#accountId").val() == ""){
            $.toast({'title': LangConfig.emailInfo[langVal]})
            return;
        }
        var reg = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if(!reg.test($("#accountId").val())){
            $.toast({'title': LangConfig.emailError[langVal]})
            return;
        }
        if(that.attr('data-flag') === 'true'){
            return;
        }
        var lang = langObj[langVal]
        timeo = 60;
        that.text(timeo +' s');
        that.css('background','gray');//禁止点击
        that.attr('data-flag', 'true')
        $.ajax({
        url: OFFICIAL_SITE_API + '/site/send-fund-code',
        type: 'post',
        dataType:'json',
        cache: false,
        data:{"email":$('#accountId').val(),lang:lang},
        success:function(data) {
          if(data.code==200){
            //倒计时
            // $.toast({'title': '发送成功'})
            // $.toast({'title': jsMsgObj.checkCode_suc})
            timeStop = setInterval(function(){
              timeo--;
              if (timeo>0) {
                that.text(timeo +' s');
                that.css('background','gray');//禁止点击
              }else{
                timeo = 60;//当减到0时赋值为60
                that.text(LangConfig.code[langVal]);
                clearInterval(timeStop);//清除定时器
                that.css('background','rgba(218,58,78,1)');//移除属性，可点击
                that.attr('data-flag', false)
              }
            },1000)
          }
          else{
            that.attr('data-flag', false)
            that.text(LangConfig.code[langVal]);
            that.css('background','rgba(255,140,78,1)');
            $.toast({'title':data.msg})
          }
        },
        error: function(e){
          that.attr('data-flag', false)
          that.text(LangConfig.code[langVal]);
          that.css('background','rgba(255,140,78,1)');
        }
      })
    })

    //  确认验证码
    $('#getCodeConfirm').on('click', function () {
      event.stopPropagation();
      var langVal = $('.chose-lang').text().toLowerCase();
      var emailCode = $("#codeId").val();
      var reg = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

      if($("#accountId").val() == ""){
        $.toast({'title': LangConfig.emailInfo[langVal]})
        return;
      }
      if(!reg.test($("#accountId").val())){
        $.toast({'title': LangConfig.emailError[langVal]})
        return;
      }
      if(!emailCode){
        $.toast({'title':  LangConfig.codeInfo[langVal]})
        return;
      }
      var lang = langObj[langVal]

      $.ajax({
        url: OFFICIAL_SITE_API + '/site/validate-fund-code',
        type: 'post',
        dataType:'json',
        cache: false,
        data:{"email":$('#accountId').val(),lang:lang, code: emailCode},
        success:function(data) {
          if(data.code==200){
            $.toast({'title': LangConfig.verificationSucess[langVal]})
          } else{
            $.toast({'title':data.msg})
          }
        },
        error: function(e){

        }
      })
    })

  function toDo(num) {
    return num >= 10 ? num : '0' + num;
  }

  var startTime = Number(new Date(2019, 2, 26, 0, 0, 0)),
    DateNow = Number(Date.now()),
    endTime = Number(new Date(2019, 3, 5, 23, 59, 59));
    isBegin = (DateNow > startTime && DateNow < endTime) ? true : false;

  function parseTime(startTime) {
    $('#Day').text(toDo('0'))
    $('#Hour').text(toDo('0'))
    $('#Min').text(toDo('0'))
    $('#Second').text(toDo('0'))
    $('#fundraisingId').css({
      'background': '#ccc'
    })
  }
  // 倒计时
  function show() {
    var time = Number(new Date(2019, 3, 5, 23, 59, 59));
    var nowTime = Date.now();
    //获取时间差
    var timediff = Math.round((time - nowTime) / 1000);
    var day = parseInt(timediff / 3600 / 24);
    var hour = parseInt(timediff / 3600 % 24);
    var minute = parseInt(timediff / 60 % 60);
    var second = timediff % 60;
    $('#Day').text(toDo(day))
    $('#Hour').text(toDo(hour))
    $('#Min').text(toDo(minute))
    $('#Second').text(toDo(second))
    setTimeout(show, 1000);
    if (timediff == 0) {
      return;
    }
  }

  // 当时间大于规定时间启动
  if (isBegin) {
    show();
  } else {
    parseTime(startTime)
  }

  if(!isPC()){
    $('.pagination').hide()
    $('.menu-btn').css('left', '0')
    $('.isPC').hide();
    $('.isWrapper').show();
    $('.csCls').hide()
    $('.csCls2').hide()
    $('.csCls3').hide()
  }

  // 跳转到新的客服地址
    $('#csCls ').on('click',function () {
      window.open('https://open.kakao.com/o/gc9tZDhb')
    });
    $('#csCls2').on('click',function () {
      window.open('http://t.me/ojt_eng')
    });
    $('#csCls3').on('click',function () {
      window.open('http://t.me/ojt_kr')
    });

  function mobConv(){
    var cn = new EN();
    cn.setData("uid", "ojt");
    cn.setData("ordcode", "");
    cn.setData("qty", "1");
    cn.setData("price", "1");
    cn.setData("pnm", encodeURIComponent(encodeURIComponent("counsel")));
    cn.setSSL(window.location.href.indexOf('http')>0 ? false: true);
    cn.sendConv();
  }
});
