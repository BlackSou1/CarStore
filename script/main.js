const body=document.querySelector("body"),fixedHeader=document.querySelector(".fixed-header");function bodyLock(){const e=window.innerWidth-body.offsetWidth+"px";body.style.overflow="hidden",body.style.paddingRight=e,fixedHeader.style.overflow="hidden",fixedHeader.style.paddingRight=e}function bodyUnlock(){body.style.overflow="visible",body.style.paddingRight=0,fixedHeader.style.overflow="visible",fixedHeader.style.paddingRight=0}const hamburgerButton=document.querySelector(".header__hamburger"),hamburger=document.querySelector(".hamburger"),hamburgerMenu=document.querySelector(".hamburger__menu");let hamburgerOpen=!1;function openHamburger(){0==hamburgerOpen&&(bodyLock(),hamburger.classList.add("hamburger-open"),hamburgerMenu.classList.add("hamburger__menu-open"),hamburgerOpen=!0)}hamburgerButton.onclick=()=>openHamburger(),window.onclick=function(e){1==hamburgerOpen&&e.target==hamburger&&(hamburgerMenu.classList.remove("hamburger__menu-open"),setTimeout((function(){hamburger.classList.remove("hamburger-open"),hamburgerOpen=!1,bodyUnlock()}),200))};const anchors=document.querySelectorAll('a[href^="#"]');let hash;window.location.href.indexOf("#")>-1&&(hash=window.location.hash,null==document.querySelector(hash)&&(window.location.href="index"+hash),document.querySelector(""+hash).scrollIntoView({behavior:"auto",block:"start"}),history.replaceState("",document.title,window.location.pathname+window.location.search)),window.onload=function(){null!=hash&&document.querySelector(""+hash).scrollIntoView({behavior:"smooth",block:"start"})};for(let e of anchors)e.addEventListener("click",(function(o){o.preventDefault();let r=e.getAttribute("href");null==document.querySelector(r)&&(window.location.href="index"+r),hamburger.click(),document.querySelector(""+r).scrollIntoView({behavior:"smooth",block:"start"})}));