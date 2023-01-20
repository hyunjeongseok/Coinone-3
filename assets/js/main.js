$(function(){



    ScrollTrigger.matchMedia({
        // large
        "(min-width: 1201px)": function() {

            /**
             * @headerScrollTop
             * scrollUp -> header fixed
             * scrollDown -> header hide
             */
            let lastScroll = 0;
              $(window).scroll(function(){
                  curr = $(this).scrollTop();
          
                  if(curr > 0){
                      $('.header').addClass('fix');
                  }else{
                      $('.header').removeClass('fix');
                  }
          
          
                  if(curr > lastScroll){
                      $('.header').addClass('hide')
                  }else{
                      $('.header').removeClass('hide')
                  }
          
                  lastScroll = curr;
          
              });

            /**
             * @mainPinSlide
             * Y축 스크롤과 X축 스크롤의 조합
             * addLabel로 동시 적용
             */
            mainPin = gsap.timeline({
                scrollTrigger:{
                    trigger:".main-pin",
                    start:"0% 0%",
                    end:"200%",
                    scrub:1,
                    pin:true,
                    // markers:true,
                },
            })
            mainPin.to('.diagonal-box',{
                yPercent:-20,
                xPercent:-40,
            })
            .addLabel('a')
            .to('.sc-main',{
                background:'linear-gradient(130deg, rgba(54,178,255,1) 10%, rgba(0,34,139,1) 100%)'
            },'a-0.03')
            .to('.sc-main .theme-box strong',{
                color: '#ffffff'
            },'a-0.03')
            .to('.sc-main .theme-box p',{
                color: '#ffffff'
            },'a-0.03')
            .to('.sc-main .info-area',{
                opacity:0
            },'a')
            .to('.sc-main .theme-area',{
                x:'-100vh'
            },'a+0.01')

            
            

            
        },
        // medium
        "(min-width: 768px)": function() {
            
              /**
               * @clipPathScroll
               * clipPath 원형을 이용한 스크롤 모션
               */
              gsap.to('.sc-trading',{
                scrollTrigger:{
                    trigger:".sc-trading",
                    start:"0% 0%",
                    end:"100% 0%",
                    scrub:1,
                    pin:true,
                    // markers:true,
                },
                'clip-path':'circle(70.7% at 50% 50%)',
            })
            



        },
        // small
        "(max-width: 767px)": function() {

            
        },
        // all
        "all": function() {
            
            /**
             * @scrollTop
             * click()
             * scroll()
             * return false
             */
            $(window).scroll(function(){
              
                if ($(this).scrollTop() > 1000) {
                    $('.btn-top').addClass('active');
                } else {
                    $('.btn-top').removeClass('active');
                }
              });
              
            $('.gnb .btn-menu').click(function (e) { 
              e.preventDefault();
    
              $(this).toggleClass('on');
              $('.side-nav').toggleClass('on');
                
            });

              $('.btn-top').click(function(){
                  $('html, body').animate({scrollTop : 0}, 400)
                  return false;
              });
          
              
            
          
          
              
              /**
               * @사이드메뉴
               * children()
               * siblings()
               * has,add,remove Class 3종
               */
              $('.side-item').click(function (e) { 
                  e.preventDefault();
                  const child = $(this).children('ul');
                  if(child.length){
                      $(this).toggleClass('on');
                  }
              });
          
          
              $('.footer .site-box .title').click(function(e){
          
                  e.preventDefault();
          
                  if($(this).siblings().hasClass('on')){
                      $('.site-box .sub-list').removeClass('on');
                  }else{
                      $('.site-box .sub-list').removeClass('on');
                      $(this).siblings().addClass('on');
                  }
          
          
              });
          
          
              /**
               * 섹션 <appdown>
               * @imgMotion
               * @TextStagger
               */
              gsap.to('.sc-appdown .graphic-area img',{
                scrollTrigger:{
                    trigger:".sc-appdown",
                    start:"0% 0%",
                    end:"20% 0%",
                    scrub:2,
                    markers:true
                },
                xPercent:-80,
                yPercent:-100,
            })
              
              gsap.from('.sc-appdown .info-area',{
                  scrollTrigger:{
                      trigger:".sc-appdown",
                      start:"30% 80%",
                      end:"100% 30%",
                      scrub:1,
                  },
                  y:100,
                  opacity:0,
                  stagger:0.1,
              })
          
              
              /**
               * 섹션 <intro>
               * @shapeStagger
               * 스크롤 시, 아래부터 차트박스가 순차적으로 쌓이도록
               * @TextSlideUp
               */
              gsap.from('sc-intro, .chart-item',{
                  duration:0.5,
                  scrollTrigger:{
                      trigger:".sc-intro",
                  },
                  stagger:0.2,
                  y:-500,
                  opacity:0,
              })
              
              gsap.from('.sc-intro, .title-area',{
                  duration:1,
                  scrollTrigger:{
                      trigger:".sc-intro",
                  },
                  y:100,
                  opacity:0,
              })
          
              
            
          
        }
    });

})
    
 