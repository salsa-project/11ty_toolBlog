---
# This is a full listing of available Frontmatter options, available for any content (.md) file.
title: # Let's talk about static sites!
layout: page
excerpt: # used for page excerpts and META (will be overwritten if SEO used below)
author: Med Amine # only displayed on Post lists and detail views. Defaults to _data/meta.authorURL
eleventyNavigation: # Required if want to display in Main Nav Bar
  key: main # "main" is required
  title: Home # as it will appear in the nav
  order: 1 # order to display in the nav (index = 1)
seo: # SEO values are used for OG and will overwrite 'title' and 'excerpt' above
  title:
  description:
  image: # used for OG:image and Twitter:image. Overrides default set in _data/meta.siteImage
hero:   # options: carousel, graphic, video, split (text & image)
heroSettings:
  height: 
    mobile: h-8/10 # options = h-1/1 (default = full screen), h-1/2, h-1/3, h-3/4, h-9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
    desktop: # leave blank to inherit "mobile" height (default = full screen)
  bg:
    color: # default bg-black
    image:  home/14.webp # relative to /assets/images/
    imagePosition: # options = bg-center (default), bg-left, bg-right
    video: pixabay-john-macdougall.mp4 # local relative /assets/video/, or full https://... if remote?
    opacityMobile: opacity-50 # options opacity-n, 5, 10, 15, 20, 25, 50, 75, 100 (default)
    opacityDesktop: opacity-75 # Leave blank to inherit opacityMobile, use same options as opacityMobile
  headingText: Every Sip Tells A Qofai Story
  headingTextColor: text-gray-800 # default = text-white (can use any TailwindCSS text-[color]-[xxx])
  headingTextCase: # default = as typed - options: uppercase, lowercase, capitalize
  subheadingText: Since productivity is key Qofai delivers insights and tools to help you work smart and ship fast
  subheadingTextColor: # Leave empty to inherit headingTextColor or default (text-white) or use any text-[color]-[xxx]
  buttonText: # no button generated if left blank
  buttonURL: /contact/ # full url required. Example: https://thisdomain.com/somepage/
  buttonTextColor: # leave blank to inherit from /src/_data/colors.buttonCustom or buttonDefault
  buttonBgColor: # leave blank to inherit from /src/_data/colors.buttonCustom.bg or buttonDefault.bg
  buttonBgHover: # leave blank to inherit from /src/_data/colors.buttonCustom.bgHover or buttonDefault.bgHover
  buttonBorder: # leave blank to inherit from /src/_data/colors.buttonCustom.border or buttonDefault.border
  carousel:
    images:
      - home/6.jpg
      - home/7.jpg
      - home/8.jpg
      - home/9.jpg
---

<style>
  h1:hover span:nth-child(2){
    font-size:48pt;
    transition: .3s all ease-out;
  }
  h1{
    letter-spacing: 4px;
  }
  h1 span{
    transition: .3s all ease-out;
  }
  h1:hover span:nth-child(1){
    position: relative;
    top: 10px;
    animation: test 1.25s ease-out infinite;
  }
  @keyframes test{
    0%{
      top: 0px;
    }
    50%{
      top: -30px;
    }
    100%{
      top: 0px;
    }
  }
</style>

<div class="flex justify-between items-center px-0 md:mt-20 flex-col md:flex-row h-1/2 md:h-full">
  <div class="">
    <h1 class="w-full pl-0 mt-8 text-center border-l-0 border-secondColor" style="font-size: 120pt;"><span class="text-firstColor select-none">Q</span><span class="text-3xl select-none">of</span><span class="text-secondColor select-none">ai</span></h1>
    <p class="pl-4">Insights & Tools that make you work smart and ship fast.</p>
  </div>
  <div class="md:w-w450 -mt-8 md:-mt-32 mx-4" style="background: rgba(36, 30, 85, 0.2); border-radius: 100% 25% 80% 50px; transform: translateY(50px);">
    <img class="w-full" src="/assets/images/home/14.webp" alt="man reading" />
  </div>
</div>