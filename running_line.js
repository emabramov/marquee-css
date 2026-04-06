// =======================БЕГУЩАЯ СТРОКА=======================================
(function createMarquee() {
   let promoText = "<span>-10% на пальто по промокоду MID10</span>";
   let promoTextLong = "";
   for(i=0; i < 10; i++){
       promoTextLong = promoTextLong.concat("&nbsp;&nbsp;&#8226;&nbsp;&nbsp;");
       promoTextLong = promoTextLong.concat(promoText);
   }

   const style = document.createElement('style');
   style.textContent = `
        .header, main.product .header, #header .header__right {
            top: 30px !important;
        }
        .top-promo-marquee {
            position: fixed;
            top: 0;
            display: flex;
            overflow: hidden;
            user-select: none;
            gap: 20px;
            width: 100%;
            z-index: 10000;
            background: #000;
            color: #fff;
            overflow: hidden;
            padding: 8px 0;
            font-family: HelveticaRegular, sans-serif;
            font-weight: normal;
            text-transform: uppercase;
            font-size: 12px;
            cursor: pointer;
            white-space: nowrap;
        }
        
        .marquee-content {
            animation: marquee1-animation 60s linear infinite;
            flex-shrink: 0;
            display: flex;
            gap: 20px;
            counter-reset: item;
            justify-content: space-around;
            min-width: 100%;
        }
        
        .promoText {
          flex: 0 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          color: #fff;
          transition: all 0.1s ease-in-out;
        }
        
        @keyframes marquee1-animation {
            0% { 
                transform: translateX(0); 
            }
            100% { 
                transform: translateX(calc(-100% - 24px)); 
            }
        } @keyframes marquee2-animation {
            0% { 
                transform: translateX(100%); 
            }
            100% { 
                transform: translateX(-200%); 
            }
        }
        
        .top-promo-marquee:hover .marquee-content {
            animation-play-state: paused;
        }
   `;
   document.head.appendChild(style);

   const marqueeWrapper = document.createElement('div');
   marqueeWrapper.className = 'top-promo-marquee';
   const marqueeInner1 = document.createElement('div');
   marqueeInner1.className = 'marquee-content';
   const marqueeInner2 = document.createElement('div');
   marqueeInner2.className = 'marquee-content';
   marqueeInner2.setAttribute('aria-hidden', 'true');
   
   let promoCount = 5;
//   if(window.screen.width > 576){
//       screenWidth = 5;
//   }
   
   for (i = 0; i < promoCount; i++){
    marqueeInner1.innerHTML += `<div class="promoText">${promoText}</div>`;
    marqueeInner2.innerHTML += `<div class="promoText">${promoText}</div>`;
   }
   
   marqueeWrapper.appendChild(marqueeInner1);
   marqueeWrapper.appendChild(marqueeInner2);
   document.body.prepend(marqueeWrapper);
   document.body.style.paddingTop = marqueeWrapper.offsetHeight + 'px';
})();

//===========================КОНЕЦ БЕГУЩЕЙ СТРОКИ===============================
