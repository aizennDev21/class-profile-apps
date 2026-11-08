<!DOCTYPE html>

<html lang="en"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><meta content="web_standard" name="shell-type"/><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&amp;family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/><style>@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}</style><script src="https://cdn.tailwindcss.com"></script><script id="tailwind-config">tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "accent-hover": "#9C7C45", "surface-container-high": "#ebe8e3", "on-primary-container": "#7884a1", "surface-variant": "#e5e2dd", "secondary-fixed": "#ffdea6", "text-muted": "#6B7280", "surface-tint": "#535e7a", "on-tertiary": "#ffffff", "on-tertiary-fixed-variant": "#494740", "pure-white": "#FFFFFF", "tertiary-fixed-dim": "#cac6bd", "on-surface": "#1c1c19", "tertiary-fixed": "#e7e2d8", "status-error": "#B3412F", "secondary-container": "#fed894", "surface-bright": "#fcf9f4", "on-primary": "#ffffff", "on-error": "#ffffff", "primary-container": "#0f1b33", "surface-dim": "#dcdad5", "surface": "#fcf9f4", "on-primary-fixed-variant": "#3b4661", "on-background": "#1c1c19", "outline": "#75777e", "secondary-fixed-dim": "#e6c180", "surface-container-lowest": "#ffffff", "on-tertiary-container": "#87847b", "error": "#ba1a1a", "outline-variant": "#c5c6ce", "surface-container-low": "#f6f3ee", "inverse-surface": "#31302d", "on-secondary-container": "#785c26", "on-primary-fixed": "#0f1b33", "primary-400": "#33466F", "surface-container-highest": "#e5e2dd", "primary-600": "#1B2B4D", "inverse-on-surface": "#f3f0eb", "on-secondary-fixed-variant": "#5b430d", "border-hairline": "#E5DFD3", "primary": "#000000", "secondary": "#755a23", "primary-fixed-dim": "#bbc6e6", "tertiary": "#010100", "on-surface-variant": "#45464d", "on-secondary-fixed": "#271900", "accent-tint": "#E8DAB9", "on-error-container": "#93000a", "error-container": "#ffdad6", "surface-container": "#f0ede9", "tertiary-container": "#1d1c16", "on-secondary": "#ffffff", "on-tertiary-fixed": "#1d1c16", "status-success": "#2F7D5B", "inverse-primary": "#bbc6e6", "primary-fixed": "#d8e2ff", "background": "#fcf9f4", "status-info": "#2F5D8A" }, "borderRadius": { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" }, "spacing": { "space-lg": "1.5rem", "gutter-mobile": "1rem", "margin": "5rem", "gutter-tablet": "1.25rem", "margin-mobile": "1.25rem", "space-md": "1rem", "margin-tablet": "2.5rem", "space-sm": "0.5rem", "space-xl": "2rem", "space-xs": "0.25rem", "gutter": "1.5rem" }, "fontFamily": { "quote-display-mobile": ["Playfair Display"], "headline-md": ["Playfair Display"], "quote-display": ["Playfair Display"], "label-button": ["Inter"], "label-eyebrow": ["Inter"], "title-md": ["Playfair Display"], "display-xl-mobile": ["Playfair Display"], "display-xl": ["Playfair Display"], "headline-sm": ["Playfair Display"], "headline-lg": ["Playfair Display"], "body-md": ["Inter"], "body-sm": ["Inter"], "headline-md-mobile": ["Playfair Display"], "body-lg": ["Inter"], "headline-lg-mobile": ["Playfair Display"], "stat-display-mobile": ["Playfair Display"], "stat-display": ["Playfair Display"], "label-mono": ["Inter"] }, "fontSize": { "quote-display-mobile": ["18px", { "lineHeight": "26px", "fontWeight": "400" }], "headline-md": ["44px", { "lineHeight": "52px", "fontWeight": "600" }], "quote-display": ["24px", { "lineHeight": "34px", "fontWeight": "400" }], "label-button": ["15px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "600" }], "label-eyebrow": ["12px", { "lineHeight": "16px", "letterSpacing": "0.16em", "fontWeight": "600" }], "title-md": ["20px", { "lineHeight": "26px", "fontWeight": "600" }], "display-xl-mobile": ["56px", { "lineHeight": "60px", "letterSpacing": "-0.02em", "fontWeight": "700" }], "display-xl": ["96px", { "lineHeight": "100px", "letterSpacing": "-0.02em", "fontWeight": "700" }], "headline-sm": ["28px", { "lineHeight": "36px", "fontWeight": "600" }], "headline-lg": ["64px", { "lineHeight": "70px", "letterSpacing": "-0.01em", "fontWeight": "600" }], "body-md": ["16px", { "lineHeight": "26px", "fontWeight": "400" }], "body-sm": ["14px", { "lineHeight": "22px", "fontWeight": "400" }], "headline-md-mobile": ["32px", { "lineHeight": "38px", "fontWeight": "600" }], "body-lg": ["18px", { "lineHeight": "30px", "fontWeight": "400" }], "headline-lg-mobile": ["40px", { "lineHeight": "46px", "letterSpacing": "-0.01em", "fontWeight": "600" }], "stat-display-mobile": ["40px", { "lineHeight": "40px", "fontWeight": "700" }], "stat-display": ["56px", { "lineHeight": "56px", "fontWeight": "700" }], "label-mono": ["13px", { "lineHeight": "18px", "fontWeight": "400" }] } } } };</script></head><body class="bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed"><header class="fixed top-0 left-0 right-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-border-hairline shadow-[0_1px_8px_rgba(15,27,51,0.04)]"><div class="h-20 max-w-[1200px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter flex items-center justify-between gap-space-md"><div class="flex items-center gap-space-sm"><img alt="Class of 2026 Monogram" class="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XPNQuGJCxZQ0u16qURoC4FESdunDBZLSWu85P2sIJJ9NMfd7vl33UHEPY2vmiLD9fhrXvAZ0xGVqwz2XaZu0hLdqmgJUOH1INcSs4yybCaQD6aa1jMZf0PqQwjokuQ7eF5RCu3CETfdGrDBj-GiEjS3vJo-_wQkxS9TUGeTRW0OeZ-q_iOXoQjxb_Zsz4_BOFcTaPBQF68tDMUIBWpXe2MWL2zIP8jPF-QizT6zR0Ouc7_dAw0romIpGc"/><div class="flex flex-col"><span class="font-title-md text-title-md text-primary-container tracking-tight leading-tight">Class of 2026</span><span class="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.16em] text-secondary">XII IPA 1</span></div></div><nav class="hidden lg:flex items-center gap-space-lg" data-active-classes="text-secondary border-b-2 border-secondary font-semibold"><a aria-current="page" class="transition-colors py-space-xs text-secondary border-b-2 border-secondary font-semibold" data-path="home" href="#">Home</a><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" data-path="about" href="#">About</a><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" data-path="highlights" href="#">Highlights</a><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" data-path="directory" href="#">Directory</a><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" data-path="gallery" href="#">Gallery</a><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" data-path="contact" href="#">Contact</a></nav><div class="flex items-center gap-space-sm"><button aria-label="Search directory and archives" class="p-space-xs text-on-surface-variant hover:text-primary-container hover:bg-surface-container rounded-full transition-colors flex items-center justify-center" type="button"><span class="material-symbols-outlined text-[22px]">search</span></button><a class="hidden sm:inline-flex items-center justify-center bg-secondary hover:bg-accent-hover text-on-secondary hover:text-on-secondary font-label-button text-label-button px-space-lg py-[10px] rounded-full shadow-[0_4px_14px_rgba(117,90,35,0.2)] transition-all transform hover:-translate-y-0.5" data-path="directory" href="#">Browse Students</a><div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span class="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main class="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div class="flex flex-col w-full">
<!-- ==========================================
       SECTION 1: HERO (#home)
       Bleeds beneath translucent app shell header
       ========================================== -->
<section class="relative w-full -mt-20 overflow-hidden bg-primary-container text-on-primary" id="home">
<!-- Background Image with Scrim and Grain -->
<div class="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-luminosity opacity-40 scale-105 transition-transform duration-1000" data-alt="Rich cinematic graduation cohort portrait of thirty-two elegant high school students in navy and ivory formal uniforms, laughing and standing proudly in a sun-dappled heritage courtyard, golden hour sunlight streaming across antique brick archways with natural film grain and soft depth of field." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiExXLVCNEQKwSU9mIweaPVvBTIVpXOnxu7G3-RdULKDNoZ4ZkOD8qJPNtK_7HZqK6GisEJU2PNUVdveq7SZBVBmzqVMWAOLeLx_lcuML5xGO7xGBZtsap5SIfDmheg8K56X8I9QVNe-SdVTs8iSQtlzf-b_NPk3oDEDGU4iK6ICH6-y0rtpuG8HccC2pxsQ4rN25RKr2uhnxG0rorxmNteuf29t4CwnnIG438ip9bnm6gEE6FTAPm')">
</div>
<!-- Rich Gradient Tint Overlay -->
<div class="absolute inset-0 bg-gradient-to-b from-primary-container/75 via-primary-container/85 to-primary-container pointer-events-none"></div>
<div class="relative max-w-[1200px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter pt-36 md:pt-44 pb-20 flex flex-col items-center text-center">
<!-- Eyebrow Badge -->
<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-bright/10 backdrop-blur-md mb-6 shadow-sm">
<span class="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
<span class="font-label-eyebrow text-label-eyebrow uppercase text-accent-tint tracking-[0.18em]">
          XII IPA 1 • SMA NEGERI • CLASS OF 2026
        </span>
</div>
<!-- Main Display Title -->
<h1 class="font-display-xl text-display-xl-mobile md:text-display-xl text-surface-bright tracking-tight max-w-4xl mb-4 drop-shadow-sm">
        Class of 2026
      </h1>
<!-- Elegant Subtitle -->
<p class="font-quote-display text-quote-display-mobile md:text-quote-display italic text-accent-tint/90 max-w-2xl mb-10 leading-relaxed font-normal">
        “Together we learned. Together we grew.”
      </p>
<!-- Action Buttons -->
<div class="flex flex-wrap items-center justify-center gap-4 mb-16">
<a class="bg-secondary hover:bg-accent-hover text-on-secondary font-label-button text-label-button px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2" href="#directory">
<span>Meet the Class</span>
<span class="material-symbols-outlined text-[18px]">arrow_downward</span>
</a>
<a class="bg-surface-bright/10 hover:bg-surface-bright/20 text-surface-bright font-label-button text-label-button px-8 py-3.5 rounded-full backdrop-blur-md transition-all duration-200" href="#about">
          Our Story
        </a>
</div>
<!-- Frosted Navy Hero Stat Counter Bar -->
<div class="w-full max-w-4xl bg-surface-container-highest/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl">
<div class="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
<div class="flex flex-col items-center">
<span class="font-stat-display text-stat-display-mobile md:text-stat-display text-secondary-fixed" data-counter="32">32</span>
<span class="font-label-eyebrow text-label-eyebrow uppercase text-surface-container-high/70 tracking-widest mt-1">Total Scholars</span>
</div>
<div class="flex flex-col items-center">
<span class="font-stat-display text-stat-display-mobile md:text-stat-display text-surface-bright">16 / 16</span>
<span class="font-label-eyebrow text-label-eyebrow uppercase text-surface-container-high/70 tracking-widest mt-1">Boy &amp; Girl Ratio</span>
</div>
<div class="flex flex-col items-center">
<span class="font-stat-display text-stat-display-mobile md:text-stat-display text-secondary-fixed">88.5</span>
<span class="font-label-eyebrow text-label-eyebrow uppercase text-surface-container-high/70 tracking-widest mt-1">Cohort GPA Avg</span>
</div>
<div class="flex flex-col items-center">
<span class="font-stat-display text-stat-display-mobile md:text-stat-display text-surface-bright" data-counter="24">24</span>
<span class="font-label-eyebrow text-label-eyebrow uppercase text-surface-container-high/70 tracking-widest mt-1">Major Honors</span>
</div>
</div>
</div>
</div>
</section>
<!-- ==========================================
       SECTION 2: CLASS PROFILE (#about)
       Editorial Monograph Presentation
       ========================================== -->
<section class="w-full bg-surface-bright py-20 md:py-28" id="about">
<div class="max-w-[1200px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter">
<!-- Section Header -->
<div class="flex flex-col items-center text-center mb-16">
<span class="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-secondary">The Class</span>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container mt-2">
          Our Story
        </h2>
<!-- Hairline gradient rule -->
<div class="w-32 h-[1.5px] bg-gradient-to-r from-transparent via-secondary to-transparent mt-4"></div>
</div>
<!-- Two-Column Editorial Showcase (7/5 Split) -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
<!-- Left: Editorial Narrative Text with Drop Cap -->
<div class="lg:col-span-7 flex flex-col gap-6">
<p class="font-body-lg text-body-lg text-on-surface leading-relaxed text-justify">
<span class="float-left text-7xl leading-none font-headline-lg text-secondary font-bold mr-3 mt-1 select-none">T</span>
            hree years ago, thirty-two eager minds walked into Room XII-1, bringing distinct perspectives, raw curiosity, and varied dreams. What started as separate trajectories coalesced into an unyielding family. Bound by late-night physics problem sets, intense debate rehearsals, and shared cafeteria laughter, XII IPA 1 developed an identity rooted in rigorous intellectual pursuit and boundless mutual support.
          </p>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            We embraced the natural sciences not merely as formulas on chalkboards, but as a lens to comprehend our changing world. From empirical laboratory studies to community initiatives, our cohort championed courage in inquiry and tenderness in camaraderie. This digital monograph captures the spirit of our collective journey—a timeless archive honoring who we were, who we are, and where our compass points next.
          </p>
<div class="bg-surface-container-low rounded-xl p-6 flex items-start gap-4 shadow-sm mt-2">
<span class="material-symbols-outlined text-secondary text-3xl">format_quote</span>
<div class="flex flex-col">
<span class="font-quote-display italic text-primary-container text-lg">
                “We did not simply survive high school; we built an enduring sanctuary of intellect and friendship.”
              </span>
<span class="font-label-mono text-label-mono text-text-muted mt-2">— Class Council Reflection, 2026</span>
</div>
</div>
</div>
<!-- Right: Offset Framed Class Photo with brass tabs -->
<div class="lg:col-span-5 relative">
<div class="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-secondary/15 transform -rotate-1 pointer-events-none"></div>
<div class="relative bg-pure-white p-3 rounded-2xl shadow-xl">
<div class="w-full aspect-[4/3] rounded-xl bg-cover bg-center overflow-hidden relative" data-alt="Editorial candid photography of classroom XII IPA 1 students collaborating joyfully around laboratory glassware, wearing lab coats and stylish casual school uniforms, soft natural window light with navy and gold notebooks scattered on wooden laboratory desks." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDp62iVzsgjBjiGr4X4UwHcgXa4s-7JAhPK_vkZbrTJ4ms608nYb-trQalv8-TzTANO6X67uFzijAybqwPd807jlCJXCvwnwsaYefvp6gYf6HOK67qsPbXQrkJhBtPBkMaQi_IVePXX9sSYMnbXv0dAWYEJHcU-Q1PrDP0YA5-ixrsb7Cha-xf3A_T26P7PQinpYRdqsdR0-WLWSg9b5zKW9HenRl9yIDNEnXe3rA5kRL2i-JaQazsN')">
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent flex items-end p-5">
<span class="font-headline-sm text-surface-bright text-xl font-medium">Room XII-1 Laboratory Archives</span>
</div>
</div>
<div class="pt-3 px-2 flex justify-between items-center text-text-muted font-label-mono text-xs">
<span>EST. JULY 2023</span>
<span>EXPEDITION • DISCOVERY</span>
</div>
</div>
</div>
</div>
<!-- Four Info Cards Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
<!-- Card 1: Homeroom Teacher -->
<div class="bg-surface-container-lowest rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
<div class="flex items-center gap-4 mb-4">
<div class="w-14 h-14 rounded-full bg-cover bg-center flex-shrink-0 shadow-inner" data-alt="Dignified Indonesian female high school teacher with warm smiling expression wearing elegant sage-green batik and hijab, soft focus portrait background with academic books." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVjYSfPDE9SGS5qZLzerSVPFXbLY5WDE--1avzdcR6S7RssxzkbJwAIyBOzxLeNoGkzmF8RQxbojqZ7na0n05SbqcmD2JsZ2Jdn6kcreHWIzunaxGNFlAUhHiuEL7KvBZilLcXz4xD1iI2ET6lGR4NLWtKFVKqP6ae75-a6AlEPFJCHdOxmQF-O8T_XZXvzYq7S5ARe9AlSQrJvtI78-AbPTrRxoXCN8KoqQx_qx_IO2M2qD24C8YD')">
</div>
<div>
<span class="font-label-eyebrow text-[10px] tracking-wider uppercase text-secondary font-bold block">Homeroom Mentor</span>
<h3 class="font-title-md text-base text-primary-container font-semibold">Ibu Ratna Dewi, S.Pd.</h3>
</div>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant italic">“Teach with heart, observe with rigor. Keep exploring the cosmos.”</p>
</div>
<!-- Card 2: Class President -->
<div class="bg-surface-container-lowest rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
<div class="flex items-center gap-4 mb-4">
<div class="w-14 h-14 rounded-full bg-cover bg-center flex-shrink-0 shadow-inner" data-alt="Charismatic 18-year-old Indonesian student leader wearing dark navy blazer, warm friendly smile, modern campus outdoor background." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrLmvqcWreLGf2Oox6MvRfxb75rq9NPAnzcFKcZvBcVOo5u9qG8xg3IPcgXqnHqbh0ZWbO-zf0XyLmyCPMGzHi6x8CQMoTxCal6y_-5MqGE60bla_HzBahLoIsdkMfhtzUsFG7fUdrNY2zOBJWPjlJNFNr8rYRxphclxrBkTh81Jd8B0yMhab_4vQWCQ1DsoQ1OLwyzmUmI2r5DyNZM5GX66f9GGg188hCC0HeXdIWCG2eqTGncCYq')">
</div>
<div>
<span class="font-label-eyebrow text-[10px] tracking-wider uppercase text-secondary font-bold block">Class President</span>
<h3 class="font-title-md text-base text-primary-container font-semibold">Rizky Pratama</h3>
</div>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant italic">“Lead by listening. True strength is lifting the entire circle.”</p>
</div>
<!-- Card 3: Class Motto -->
<div class="bg-surface-container-lowest rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
<div>
<div class="w-10 h-10 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-secondary mb-3">
<span class="material-symbols-outlined text-[20px]">auto_stories</span>
</div>
<span class="font-label-eyebrow text-[10px] tracking-wider uppercase text-secondary font-bold block mb-1">Class Creed</span>
<h3 class="font-headline-sm text-lg text-primary-container italic font-medium leading-snug">
              “Together we learned. Together we grew.”
            </h3>
</div>
<span class="font-label-mono text-xs text-text-muted mt-3">Motto Ratified July 2023</span>
</div>
<!-- Card 4: Class Colors -->
<div class="bg-surface-container-lowest rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
<div>
<span class="font-label-eyebrow text-[10px] tracking-wider uppercase text-secondary font-bold block mb-2">Class Heraldry</span>
<h3 class="font-title-md text-base text-primary-container font-semibold mb-3">Midnight Navy &amp; Sunlit Gold</h3>
<div class="flex items-center gap-3">
<div class="flex items-center gap-2">
<div class="w-7 h-7 rounded-full bg-primary-container shadow-md"></div>
<span class="font-label-mono text-xs text-on-surface">#0F1B33</span>
</div>
<div class="flex items-center gap-2">
<div class="w-7 h-7 rounded-full bg-secondary shadow-md"></div>
<span class="font-label-mono text-xs text-on-surface">#B8975A</span>
</div>
</div>
</div>
<span class="font-label-mono text-xs text-text-muted mt-3">Prestige • Luminescence</span>
</div>
</div>
<!-- ==========================================
           CLASS HIGHLIGHTS (#highlights)
           Horizontal Timeline & Achievement Badges
           ========================================== -->
<div class="pt-8" id="highlights">
<div class="flex flex-col items-center text-center mb-14">
<span class="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-secondary">The Journey</span>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container mt-2">
            Chronicles &amp; Milestones
          </h2>
<div class="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-secondary to-transparent mt-4"></div>
</div>
<!-- Timeline Container -->
<div class="relative w-full overflow-x-auto pb-8 mb-16 select-none scrollbar-none">
<div class="min-w-[880px] px-4">
<!-- Continuous Hairline Track -->
<div class="relative flex items-center justify-between before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-6 before:right-6 before:h-[2px] before:bg-surface-container-highest">
<!-- Node 1 -->
<div class="relative flex flex-col items-center group cursor-default">
<div class="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs shadow-md z-10 group-hover:scale-110 transition-transform">
                  1
                </div>
<span class="font-label-mono text-xs font-semibold text-secondary mt-3">JUL 2023</span>
<span class="font-title-md text-sm text-primary-container text-center max-w-[130px] font-medium mt-1">First Cohort Orientation</span>
</div>
<!-- Node 2 -->
<div class="relative flex flex-col items-center group cursor-default">
<div class="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs shadow-md z-10 group-hover:scale-110 transition-transform">
                  2
                </div>
<span class="font-label-mono text-xs font-semibold text-secondary mt-3">NOV 2023</span>
<span class="font-title-md text-sm text-primary-container text-center max-w-[130px] font-medium mt-1">Arts Fest Champions</span>
</div>
<!-- Node 3 -->
<div class="relative flex flex-col items-center group cursor-default">
<div class="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs shadow-md z-10 group-hover:scale-110 transition-transform">
                  3
                </div>
<span class="font-label-mono text-xs font-semibold text-secondary mt-3">MAR 2024</span>
<span class="font-title-md text-sm text-primary-container text-center max-w-[130px] font-medium mt-1">Science Olympiad Silver</span>
</div>
<!-- Node 4 -->
<div class="relative flex flex-col items-center group cursor-default">
<div class="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs shadow-md z-10 group-hover:scale-110 transition-transform">
                  4
                </div>
<span class="font-label-mono text-xs font-semibold text-secondary mt-3">AUG 2024</span>
<span class="font-title-md text-sm text-primary-container text-center max-w-[130px] font-medium mt-1">Mountain Ecological Trek</span>
</div>
<!-- Node 5 -->
<div class="relative flex flex-col items-center group cursor-default">
<div class="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs shadow-md z-10 group-hover:scale-110 transition-transform">
                  5
                </div>
<span class="font-label-mono text-xs font-semibold text-secondary mt-3">FEB 2025</span>
<span class="font-title-md text-sm text-primary-container text-center max-w-[130px] font-medium mt-1">Athletics Trophy Cup</span>
</div>
<!-- Node 6 -->
<div class="relative flex flex-col items-center group cursor-default">
<div class="w-8 h-8 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center font-bold text-xs shadow-md z-10 group-hover:scale-110 transition-transform">
                  6
                </div>
<span class="font-label-mono text-xs font-semibold text-secondary mt-3">MAY 2026</span>
<span class="font-title-md text-sm text-primary-container text-center max-w-[130px] font-medium mt-1">Graduation Dedication</span>
</div>
</div>
</div>
</div>
<!-- 6 Achievement Cards Grid with SVGs -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div class="bg-surface-container rounded-xl p-4 flex flex-col items-center text-center hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-secondary text-3xl mb-2">military_tech</span>
<span class="font-title-md text-sm text-primary-container font-semibold">Science Olympiad</span>
<span class="font-label-mono text-[11px] text-text-muted mt-1">2 Gold • 3 Silver</span>
</div>
<div class="bg-surface-container rounded-xl p-4 flex flex-col items-center text-center hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-secondary text-3xl mb-2">palette</span>
<span class="font-title-md text-sm text-primary-container font-semibold">Art Festival</span>
<span class="font-label-mono text-[11px] text-text-muted mt-1">1st Place Overall</span>
</div>
<div class="bg-surface-container rounded-xl p-4 flex flex-col items-center text-center hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-secondary text-3xl mb-2">sports_basketball</span>
<span class="font-title-md text-sm text-primary-container font-semibold">Sports Cup</span>
<span class="font-label-mono text-[11px] text-text-muted mt-1">Regional Finalists</span>
</div>
<div class="bg-surface-container rounded-xl p-4 flex flex-col items-center text-center hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-secondary text-3xl mb-2">volunteer_activism</span>
<span class="font-title-md text-sm text-primary-container font-semibold">Class Spirit</span>
<span class="font-label-mono text-[11px] text-text-muted mt-1">Best Solidarity 2025</span>
</div>
<div class="bg-surface-container rounded-xl p-4 flex flex-col items-center text-center hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-secondary text-3xl mb-2">workspace_premium</span>
<span class="font-title-md text-sm text-primary-container font-semibold">Academic Elite</span>
<span class="font-label-mono text-[11px] text-text-muted mt-1">Top STEM Average</span>
</div>
<div class="bg-surface-container rounded-xl p-4 flex flex-col items-center text-center hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-secondary text-3xl mb-2">nature_people</span>
<span class="font-title-md text-sm text-primary-container font-semibold">Community Impact</span>
<span class="font-label-mono text-[11px] text-text-muted mt-1">500+ Hours Donated</span>
</div>
</div>
</div>
</div>
</section>
<!-- ==========================================
       SECTION 3: STUDENT DIRECTORY (#directory)
       Main Feature - Filterable Directory with Modal Trigger
       ========================================== -->
<section class="w-full bg-surface-container-low py-24" id="directory">
<div class="max-w-[1200px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter">
<!-- Section Header -->
<div class="flex flex-col items-center text-center mb-12">
<span class="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-secondary">The People</span>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container mt-2">
          Student Directory
        </h2>
<p class="font-body-md text-body-md text-on-surface-variant max-w-md mt-2">
          Discover the unique aspirations, achievements, and voices behind XII IPA 1.
        </p>
<div class="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-secondary to-transparent mt-4"></div>
</div>
<!-- Directory Control Bar -->
<div class="bg-pure-white rounded-2xl p-4 sm:p-5 shadow-sm mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
<!-- Search Field -->
<div class="relative flex-1 min-w-[260px]">
<span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted text-[20px]">search</span>
<input class="w-full pl-10 pr-4 py-2.5 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-bright focus:ring-2 focus:ring-secondary/50 transition-all placeholder:text-text-muted" id="studentSearchInput" placeholder="Search by name, ID, or ambition..." type="text"/>
</div>
<!-- Filter Chips (All, Leadership, Academic, Sports, Arts) -->
<div class="flex flex-wrap items-center gap-2" id="filterButtonContainer">
<button class="filter-btn active-filter px-4 py-2 rounded-full font-label-eyebrow text-xs uppercase tracking-wider transition-all bg-primary-container text-surface-bright shadow-sm" data-filter="all" type="button">
            All (32)
          </button>
<button class="filter-btn px-4 py-2 rounded-full font-label-eyebrow text-xs uppercase tracking-wider transition-all bg-surface-container-low text-on-surface hover:bg-surface-container" data-filter="Leadership" type="button">
            Leadership
          </button>
<button class="filter-btn px-4 py-2 rounded-full font-label-eyebrow text-xs uppercase tracking-wider transition-all bg-surface-container-low text-on-surface hover:bg-surface-container" data-filter="Academic" type="button">
            Academic
          </button>
<button class="filter-btn px-4 py-2 rounded-full font-label-eyebrow text-xs uppercase tracking-wider transition-all bg-surface-container-low text-on-surface hover:bg-surface-container" data-filter="Sports" type="button">
            Sports
          </button>
<button class="filter-btn px-4 py-2 rounded-full font-label-eyebrow text-xs uppercase tracking-wider transition-all bg-surface-container-low text-on-surface hover:bg-surface-container" data-filter="Arts" type="button">
            Arts
          </button>
</div>
<!-- Sort and Counter Info -->
<div class="flex items-center justify-between lg:justify-end gap-4 text-xs font-label-mono text-text-muted">
<span id="resultCount">Showing 12 of 32</span>
<select class="bg-surface-container-low text-on-surface rounded-lg px-2.5 py-1.5 focus:outline-none text-xs" id="sortSelector">
<option value="name-asc">Sort: A – Z</option>
<option value="name-desc">Sort: Z – A</option>
<option value="id-asc">Sort: Student ID</option>
</select>
</div>
</div>
<!-- Student Cards Grid (4 Columns Desktop) -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="studentGrid">
<!-- CARD 1 -->
<div class="student-card group bg-pure-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between" data-ambition="Aspiring Aerospace Engineer at ITB" data-bday="14 April 2008" data-category="Academic" data-hobbies="Astrophysics, Classical Piano, Origami" data-hometown="Bandung, West Java" data-honors="Gold Medalist National Physics Olympiad 2024, Class Valedictorian Candidate, Scientific Paper Lead" data-id="2026-001" data-name="Aisyah Putri" data-photo="placeholder" data-prompt="Studio portrait of a graceful Indonesian teenage girl wearing elegant navy graduation blazer and stylish neutral scarf, warm intelligent smile, pristine lighting, soft charcoal bokeh." data-quote="Curiosity is the compass of the soul." data-role="Academic Star">
<div class="relative aspect-[4/5] w-full overflow-hidden bg-surface-variant">
<div class="w-full h-full bg-cover bg-top group-hover:scale-105 transition-transform duration-500" data-alt="Studio portrait of a graceful Indonesian teenage girl wearing elegant navy graduation blazer and stylish neutral scarf, warm intelligent smile, pristine lighting, soft charcoal bokeh." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3aSDkbY55JkAUPxjhWRdhZHDGxgYM88FvbjTbHG7SUbTO2060_hONPE05JOe_RAROu6e8l0aT1cR--6Rq-If-pOLornq9NFoJnEco6JySzBIynYWS_q_TGHFwvP7Ixw-jGX3u4gdGiLrr83-05O8j4YeivW7Af42HCf0auMIWZzNsITxOpXx-1FUPw_3TZtqOxrFL7h0cAUpmQ-elQfBgzpyVa8arVpubRukSvfWgfyhk3wi4CiR0')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent"></div>
<span class="absolute top-3 left-3 bg-accent-tint/90 text-primary-container font-label-eyebrow text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Academic Star
            </span>
<div class="absolute bottom-3 left-3 right-3 text-surface-bright opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end gap-2">
<span class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-secondary transition-colors"><span class="material-symbols-outlined text-[16px]">visibility</span></span>
</div>
</div>
<div class="p-5 flex flex-col flex-1 justify-between">
<div>
<div class="flex items-center justify-between text-xs font-label-mono text-text-muted mb-1">
<span>ID: 2026-001</span>
<span class="text-secondary font-semibold">STEM Elite</span>
</div>
<h3 class="font-title-md text-title-md text-primary-container font-semibold group-hover:text-secondary transition-colors">
                Aisyah Putri
              </h3>
<p class="font-quote-display-mobile italic text-on-surface-variant/90 text-sm mt-2 line-clamp-2">
                “Curiosity is the compass of the soul.”
              </p>
</div>
<div class="pt-4 mt-3 flex items-center justify-between text-xs font-label-mono text-secondary font-medium">
<span>View Dossier</span>
<span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
<!-- CARD 2 -->
<div class="student-card group bg-pure-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between" data-ambition="Future Diplomat &amp; International Relations Scholar" data-bday="22 October 2007" data-category="Leadership" data-hobbies="Public Speaking, Debate, Chess, Cycling" data-hometown="Jakarta Selatan" data-honors="Best Delegate Model UN Jakarta, Student Council VP, Founder of Class Peer Tutoring Network" data-id="2026-002" data-name="Rizky Pratama" data-photo="placeholder" data-prompt="Portrait of an articulate Indonesian teenage male leader wearing tailored navy high school formal suit, gentle confident expression, studio quality editorial lighting with warm accents." data-quote="Lead by listening. True strength is lifting others." data-role="Class President">
<div class="relative aspect-[4/5] w-full overflow-hidden bg-surface-variant">
<div class="w-full h-full bg-cover bg-top group-hover:scale-105 transition-transform duration-500" data-alt="Portrait of an articulate Indonesian teenage male leader wearing tailored navy high school formal suit, gentle confident expression, studio quality editorial lighting with warm accents." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCt9uZbjoRwUbwO-usLebGtNCFslOfakIDIi2g_U6DnoLmIMhQfGL71gzLFmSVJeai6iiB8G34-1SWKFwYuGiQODz0f_-8me-DFqNCQMCI9cPduhHUILYLNsxlyFs4CzhhIe_JYKtX8QDHmo-ly_Mdx-tiqOd4p2_1p7qJ2pSQGtPExvc0CPX3P3VCZXz1he-OwbBsgGtIEulMTbcR9vJvubjWSA15kH-ix07emXp5daVhK34AhbjYm')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent"></div>
<span class="absolute top-3 left-3 bg-secondary text-on-secondary font-label-eyebrow text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Class President
            </span>
</div>
<div class="p-5 flex flex-col flex-1 justify-between">
<div>
<div class="flex items-center justify-between text-xs font-label-mono text-text-muted mb-1">
<span>ID: 2026-002</span>
<span class="text-secondary font-semibold">Leadership</span>
</div>
<h3 class="font-title-md text-title-md text-primary-container font-semibold group-hover:text-secondary transition-colors">
                Rizky Pratama
              </h3>
<p class="font-quote-display-mobile italic text-on-surface-variant/90 text-sm mt-2 line-clamp-2">
                “Lead by listening. True strength is lifting others.”
              </p>
</div>
<div class="pt-4 mt-3 flex items-center justify-between text-xs font-label-mono text-secondary font-medium">
<span>View Dossier</span>
<span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
<!-- CARD 3 -->
<div class="student-card group bg-pure-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between" data-ambition="Actuarial Science &amp; FinTech Innovator" data-bday="05 January 2008" data-category="Leadership" data-hobbies="Economics, Botanical Illustration, Baking" data-hometown="Yogyakarta" data-honors="Led 100% Class Fund Transparency System, Bank Indonesia High School Scholar" data-id="2026-003" data-name="Nadia Salsabila" data-photo="placeholder" data-prompt="Delicate portrait of an Indonesian female high school student with gentle smile, wearing a cream blazer and navy tie, clean bright editorial photographic backdrop." data-quote="Small steps, steady growth, clear ledger." data-role="Treasurer">
<div class="relative aspect-[4/5] w-full overflow-hidden bg-surface-variant">
<div class="w-full h-full bg-cover bg-top group-hover:scale-105 transition-transform duration-500" data-alt="Delicate portrait of an Indonesian female high school student with gentle smile, wearing a cream blazer and navy tie, clean bright editorial photographic backdrop." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5RXP5FGd_Fku6jexf4HCOf4kJO2_Q90Vg4z_uMNKIsWQSyoQAO3b9Q8GmW8DMF-wGyfjKHXFd2adoni5m9nPZ_1yYr5SZnnuXVCHkBUa72nkV4SfdSAQG20ISKJayPp6YfFBvTPB_FmfHY8wN3LNqO2jQ3if61HWAD7_2fJwOo2IOIrZRfV0Y1eqGkk3GOfadKE3PZFmM0xBxmONrfNhl_VjQfd4H1sm7LG1XlZ7VCKAmAOb6C66-')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent"></div>
<span class="absolute top-3 left-3 bg-secondary-container text-on-secondary-container font-label-eyebrow text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Treasurer
            </span>
</div>
<div class="p-5 flex flex-col flex-1 justify-between">
<div>
<div class="flex items-center justify-between text-xs font-label-mono text-text-muted mb-1">
<span>ID: 2026-003</span>
<span class="text-secondary font-semibold">Leadership</span>
</div>
<h3 class="font-title-md text-title-md text-primary-container font-semibold group-hover:text-secondary transition-colors">
                Nadia Salsabila
              </h3>
<p class="font-quote-display-mobile italic text-on-surface-variant/90 text-sm mt-2 line-clamp-2">
                “Small steps, steady growth, clear ledger.”
              </p>
</div>
<div class="pt-4 mt-3 flex items-center justify-between text-xs font-label-mono text-secondary font-medium">
<span>View Dossier</span>
<span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
<!-- CARD 4 -->
<div class="student-card group bg-pure-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between" data-ambition="Sports Medicine &amp; High Performance Coaching" data-bday="19 August 2007" data-category="Sports" data-hobbies="Basketball, Track &amp; Field, Sports Photography" data-hometown="Surabaya, East Java" data-honors="Provincial High School Basketball MVP 2024, 100m Sprint Champion" data-id="2026-004" data-name="Dimas Adhitya" data-photo="placeholder" data-prompt="Athletic Indonesian high school male student wearing athletic varsity track jacket in navy with gold trim, radiant natural daylight, energetic warm expression." data-quote="Play hard, stay humble, run until the whistle." data-role="Sports Captain">
<div class="relative aspect-[4/5] w-full overflow-hidden bg-surface-variant">
<div class="w-full h-full bg-cover bg-top group-hover:scale-105 transition-transform duration-500" data-alt="Athletic Indonesian high school male student wearing athletic varsity track jacket in navy with gold trim, radiant natural daylight, energetic warm expression." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDI4kmiJv9ca6rmgfyfmhrB1q_zp67cf1tzBaNUuR5TkpXcI8X2uYF55Vc0IY9Nrh21S9iQ43Q_ZUluCLA5lSI1RKIb_tSaiE0PiOg32E4WzsDTiiKrFahnfxpP5eyxnMgtVJzOqyZ_Empq6zamculRsbOTbADYwU7wiSTJgmfMImu2RIndGH01Lq3qgIhJq3aF_RHh3LVjMO6yYCeB_OWXbwzL377o2yyH3i8zB_3xb03QdOKlAZca')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent"></div>
<span class="absolute top-3 left-3 bg-primary-600 text-on-primary font-label-eyebrow text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Sports Captain
            </span>
</div>
<div class="p-5 flex flex-col flex-1 justify-between">
<div>
<div class="flex items-center justify-between text-xs font-label-mono text-text-muted mb-1">
<span>ID: 2026-004</span>
<span class="text-secondary font-semibold">Athletics</span>
</div>
<h3 class="font-title-md text-title-md text-primary-container font-semibold group-hover:text-secondary transition-colors">
                Dimas Adhitya
              </h3>
<p class="font-quote-display-mobile italic text-on-surface-variant/90 text-sm mt-2 line-clamp-2">
                “Play hard, stay humble, run until the whistle.”
              </p>
</div>
<div class="pt-4 mt-3 flex items-center justify-between text-xs font-label-mono text-secondary font-medium">
<span>View Dossier</span>
<span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
<!-- CARD 5 -->
<div class="student-card group bg-pure-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between" data-ambition="Fine Arts Conservator &amp; Visual Director" data-bday="30 November 2007" data-category="Arts" data-hobbies="Oil Painting, Batik Design, Set Scenography" data-hometown="Solo, Central Java" data-honors="Designed 2026 Year-End Monograph Cover, First Prize Inter-School Mural Festival" data-id="2026-005" data-name="Putri Maharani" data-photo="placeholder" data-prompt="Artistic young Indonesian female student with expressive warm eyes wearing tailored dark aesthetic shirt, artistic warm lighting, subtle painterly textured background." data-quote="Color makes the mundane braver." data-role="Arts Lead">
<div class="relative aspect-[4/5] w-full overflow-hidden bg-surface-variant">
<div class="w-full h-full bg-cover bg-top group-hover:scale-105 transition-transform duration-500" data-alt="Artistic young Indonesian female student with expressive warm eyes wearing tailored dark aesthetic shirt, artistic warm lighting, subtle painterly textured background." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBc1LwcVKvtpW7ACZWzlIu3SNiSh-ryRPCococKYLLAJNONpb8vsE1sIMPX0iS7ZW8x4KjrrgfJSRrW7l94qEasik_UWZ3B02YFhvMvGEoIwQdwtdi855klm0hEDCRUXVs6D18SVkdVyxJ2uWkhdeQ9RF4nO0l7hiRVLSVHUfJnet5OTEHu-escufnqInkGTsBNLELCH8rOqVRfaaqtQlUQNiVt1rAkX-hxGnuPCHRqqpDg173C6Ux4')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent"></div>
<span class="absolute top-3 left-3 bg-secondary text-on-secondary font-label-eyebrow text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Arts Lead
            </span>
</div>
<div class="p-5 flex flex-col flex-1 justify-between">
<div>
<div class="flex items-center justify-between text-xs font-label-mono text-text-muted mb-1">
<span>ID: 2026-005</span>
<span class="text-secondary font-semibold">Creative</span>
</div>
<h3 class="font-title-md text-title-md text-primary-container font-semibold group-hover:text-secondary transition-colors">
                Putri Maharani
              </h3>
<p class="font-quote-display-mobile italic text-on-surface-variant/90 text-sm mt-2 line-clamp-2">
                “Color makes everything braver.”
              </p>
</div>
<div class="pt-4 mt-3 flex items-center justify-between text-xs font-label-mono text-secondary font-medium">
<span>View Dossier</span>
<span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
<!-- CARD 6 -->
<div class="student-card group bg-pure-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between" data-ambition="Industrial Engineering &amp; Supply Chain Management" data-bday="12 September 2007" data-category="Leadership" data-hobbies="Logistics, Event Production, Podcasting" data-hometown="Semarang" data-honors="Director of Annual Class Study Tour 2024, Best Class Organizer" data-id="2026-006" data-name="Fajar Ramadhan" data-photo="placeholder" data-prompt="Reliable smart Indonesian male high school senior smiling kindly with glasses and smart navy polo shirt, soft library bookshelf background, crisp studio portrait." data-quote="Teamwork makes the dream work smoothly." data-role="Vice President">
<div class="relative aspect-[4/5] w-full overflow-hidden bg-surface-variant">
<div class="w-full h-full bg-cover bg-top group-hover:scale-105 transition-transform duration-500" data-alt="Reliable smart Indonesian male high school senior smiling kindly with glasses and smart navy polo shirt, soft library bookshelf background, crisp studio portrait." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYB2OYUZNo9aN3ORKHRug39fxw7fy08bOQ5rVU88HKzl1N0_98GDvwVJmXzg76vFj1ydUuy8D70UuqH1TIa8NFDMXAd39Z_ynZqXBaER8WwoAF94btMQ3xJdRRwwajHzMhP7_O8RkQcIc7iHLezA-QRWNUeDU7HYtF2LEljanaH9rGhKSVTr3LP0iALH2TYpvXgcWIfxjNeQSNqHFIQCdy7P4HiJCg0Xow6xm8HWzOpIkXvaOpo2Ea')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent"></div>
<span class="absolute top-3 left-3 bg-secondary-container text-on-secondary-container font-label-eyebrow text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Vice President
            </span>
</div>
<div class="p-5 flex flex-col flex-1 justify-between">
<div>
<div class="flex items-center justify-between text-xs font-label-mono text-text-muted mb-1">
<span>ID: 2026-006</span>
<span class="text-secondary font-semibold">Leadership</span>
</div>
<h3 class="font-title-md text-title-md text-primary-container font-semibold group-hover:text-secondary transition-colors">
                Fajar Ramadhan
              </h3>
<p class="font-quote-display-mobile italic text-on-surface-variant/90 text-sm mt-2 line-clamp-2">
                “Teamwork makes the dream work.”
              </p>
</div>
<div class="pt-4 mt-3 flex items-center justify-between text-xs font-label-mono text-secondary font-medium">
<span>View Dossier</span>
<span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
<!-- CARD 7 -->
<div class="student-card group bg-pure-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between" data-ambition="Communications Strategist &amp; Investigative Journalist" data-bday="18 March 2008" data-category="Leadership" data-hobbies="Journalism, Creative Nonfiction, Calligraphy" data-hometown="Malang, East Java" data-honors="Editor-in-Chief School Gazette, National Essay Writing Silver Award" data-id="2026-007" data-name="Salsa Anindya" data-photo="placeholder" data-prompt="Polished portrait of an Indonesian female high school student with gentle poised posture, soft lighting, wearing neat blazer with gold badge detail." data-quote="Write your own story with precision." data-role="Secretary">
<div class="relative aspect-[4/5] w-full overflow-hidden bg-surface-variant">
<div class="w-full h-full bg-cover bg-top group-hover:scale-105 transition-transform duration-500" data-alt="Polished portrait of an Indonesian female high school student with gentle poised posture, soft lighting, wearing neat blazer with gold badge detail." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUhhlVDhSRLWdrS8O1pMUPxbcYoM7JEZoo7qspnjpWgh3DXNWiMc5u5u-qVOOvL33VKzpYpq9rVjxjIa8-6sMhBAUiim7OExm8geLBNeo-6ljJh7xWXlkHy5OkgwBiGA6xAfKCtaKF-e8TqVrogWPA5pYj5JolXbg4GUsM4DQiXx6-iKdIbpeampi-pVunTVkGHssdYNTO8-pH0AlH175TB0UV6agb0zGNPOdcGPbhTw5_rN00awyz')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent"></div>
<span class="absolute top-3 left-3 bg-secondary-container text-on-secondary-container font-label-eyebrow text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Secretary
            </span>
</div>
<div class="p-5 flex flex-col flex-1 justify-between">
<div>
<div class="flex items-center justify-between text-xs font-label-mono text-text-muted mb-1">
<span>ID: 2026-007</span>
<span class="text-secondary font-semibold">Leadership</span>
</div>
<h3 class="font-title-md text-title-md text-primary-container font-semibold group-hover:text-secondary transition-colors">
                Salsa Anindya
              </h3>
<p class="font-quote-display-mobile italic text-on-surface-variant/90 text-sm mt-2 line-clamp-2">
                “Write your own story.”
              </p>
</div>
<div class="pt-4 mt-3 flex items-center justify-between text-xs font-label-mono text-secondary font-medium">
<span>View Dossier</span>
<span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
<!-- CARD 8 -->
<div class="student-card group bg-pure-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between" data-ambition="Biochemical Researcher &amp; Sustainable Agtech Pioneer" data-bday="03 February 2008" data-category="Academic" data-hobbies="Competitive Chemistry, Molecular Modeling, Hydroponics" data-hometown="Bogor, West Java" data-honors="International Chemistry Olympiad Training Camp Invitee, Regional STEM Award" data-id="2026-008" data-name="Bima Setiawan" data-photo="placeholder" data-prompt="Focused Indonesian teenage male student wearing round vintage spectacles and dark scholarly sweater, clean university campus setting, natural soft sunlight." data-quote="Question everything; verify with code and data." data-role="Science Olympiad">
<div class="relative aspect-[4/5] w-full overflow-hidden bg-surface-variant">
<div class="w-full h-full bg-cover bg-top group-hover:scale-105 transition-transform duration-500" data-alt="Focused Indonesian teenage male student wearing round vintage spectacles and dark scholarly sweater, clean university campus setting, natural soft sunlight." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuArNu_w0RFCvj2RgBObtVKhchgZ8uejdwOuf_zc9h_VxRK62rmfOkEO3dL6TtxTfqc0OIkUKsKWTfnxOBxIEsv--UEcjKU5nXvrejFHBI1AMpc6KNcaviSVYaED63y_WoLZ21AS0CkjP5ZtcYSN1yenbXa5ia5fpH0ak8Zpn_LsUS1OMy-rJ8jMug_mvSEs4KggwAt6iUMJVolTV4BlGVdwwI-dJrF6RHDVlk8T0nyvSxp-9L1a_Hqa')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent"></div>
<span class="absolute top-3 left-3 bg-accent-tint/90 text-primary-container font-label-eyebrow text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Science Olympiad
            </span>
</div>
<div class="p-5 flex flex-col flex-1 justify-between">
<div>
<div class="flex items-center justify-between text-xs font-label-mono text-text-muted mb-1">
<span>ID: 2026-008</span>
<span class="text-secondary font-semibold">STEM Elite</span>
</div>
<h3 class="font-title-md text-title-md text-primary-container font-semibold group-hover:text-secondary transition-colors">
                Bima Setiawan
              </h3>
<p class="font-quote-display-mobile italic text-on-surface-variant/90 text-sm mt-2 line-clamp-2">
                “Question everything.”
              </p>
</div>
<div class="pt-4 mt-3 flex items-center justify-between text-xs font-label-mono text-secondary font-medium">
<span>View Dossier</span>
<span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
<!-- CARD 9 -->
<div class="student-card group bg-pure-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between" data-ambition="Human Rights Attorney &amp; Legal Scholar" data-bday="27 June 2007" data-category="Academic" data-hobbies="Parliamentary Debate, Philosophy, Cello" data-hometown="Medan, North Sumatra" data-honors="National Schools Debating Championship Best Speaker, Class Honor Roll" data-id="2026-009" data-name="Zahra Amalia" data-photo="placeholder" data-prompt="Poised Indonesian female student with engaging expressive presence, formal dark blue blazer, serene natural portrait lighting with soft cream backdrop." data-quote="Words build worlds when delivered with clarity." data-role="Debate Captain">
<div class="relative aspect-[4/5] w-full overflow-hidden bg-surface-variant">
<div class="w-full h-full bg-cover bg-top group-hover:scale-105 transition-transform duration-500" data-alt="Poised Indonesian female student with engaging expressive presence, formal dark blue blazer, serene natural portrait lighting with soft cream backdrop." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFGsE9bybK5BoAtyBNj5jNMHE6s3wpgdEEjxgYwVT8wNCyOvDcveIWP72xnSRYtY6q74FsgEgZbCqx5HRCeTOGAmR620fHlw8xmkfiXX02zICF3DTmBS05Y70V8C7POaU9XQh1WfW6Dqd1z48sMJItseS3aJrowTy-_ymqUinWAL1Y6-otrpIJXciMk96rXOziVBFlK_esJHR3eNhajU0-xMSVC-66xc0K1o0GYogD7dF0iIeqfFuZ')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent"></div>
<span class="absolute top-3 left-3 bg-accent-tint/90 text-primary-container font-label-eyebrow text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Debate Captain
            </span>
</div>
<div class="p-5 flex flex-col flex-1 justify-between">
<div>
<div class="flex items-center justify-between text-xs font-label-mono text-text-muted mb-1">
<span>ID: 2026-009</span>
<span class="text-secondary font-semibold">Humanities</span>
</div>
<h3 class="font-title-md text-title-md text-primary-container font-semibold group-hover:text-secondary transition-colors">
                Zahra Amalia
              </h3>
<p class="font-quote-display-mobile italic text-on-surface-variant/90 text-sm mt-2 line-clamp-2">
                “Words build worlds.”
              </p>
</div>
<div class="pt-4 mt-3 flex items-center justify-between text-xs font-label-mono text-secondary font-medium">
<span>View Dossier</span>
<span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
<!-- CARD 10 -->
<div class="student-card group bg-pure-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between" data-ambition="National Badminton Athlete &amp; Sports Technologist" data-bday="11 December 2007" data-category="Sports" data-hobbies="Badminton, Swimming, Nutrition Science" data-hometown="Cirebon, West Java" data-honors="Provincial Junior Badminton Gold Medalist, Fitness Council Coordinator" data-id="2026-010" data-name="Kevin Sanjaya" data-photo="placeholder" data-prompt="Fit and smiling young Indonesian male athlete with sharp friendly features, athletic navy collar jersey, soft athletic arena background lighting." data-quote="Smash through limits and keep your feet light." data-role="Badminton Lead">
<div class="relative aspect-[4/5] w-full overflow-hidden bg-surface-variant">
<div class="w-full h-full bg-cover bg-top group-hover:scale-105 transition-transform duration-500" data-alt="Fit and smiling young Indonesian male athlete with sharp friendly features, athletic navy collar jersey, soft athletic arena background lighting." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCyZfFH4wbNriQMtdAwnNUb0L05kQZZ_IOyIK-WMFKsVsO74uyddSrpRHCk1KsaIJf4A7Covfhki0D82jJvluQERr24FwTP6F2kr5N0zZK8H8VOSl05yEOYHK3MxU5I_IavG6QfYiFjEEsFMfhjRQL-aURY9fMjgD8xbq9qYtJat5IlN2Zuwmr-8eL5-ts_qX90jLE7Gz4p331sabzF8FfR3jxf9Tc_ejCtaoOvBG--czcuGdp1k7P')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent"></div>
<span class="absolute top-3 left-3 bg-primary-600 text-on-primary font-label-eyebrow text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Badminton Lead
            </span>
</div>
<div class="p-5 flex flex-col flex-1 justify-between">
<div>
<div class="flex items-center justify-between text-xs font-label-mono text-text-muted mb-1">
<span>ID: 2026-010</span>
<span class="text-secondary font-semibold">Athletics</span>
</div>
<h3 class="font-title-md text-title-md text-primary-container font-semibold group-hover:text-secondary transition-colors">
                Kevin Sanjaya
              </h3>
<p class="font-quote-display-mobile italic text-on-surface-variant/90 text-sm mt-2 line-clamp-2">
                “Smash through limits.”
              </p>
</div>
<div class="pt-4 mt-3 flex items-center justify-between text-xs font-label-mono text-secondary font-medium">
<span>View Dossier</span>
<span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
<!-- CARD 11 -->
<div class="student-card group bg-pure-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between" data-ambition="Film Scorer &amp; Audio Acoustic Engineer" data-bday="15 May 2008" data-category="Arts" data-hobbies="Acoustic Guitar, Sound Engineering, Choral Composition" data-hometown="Denpasar, Bali" data-honors="Arranged Class 2026 Graduation Anthem, National Youth Orchestra Violinist" data-id="2026-011" data-name="Maya Anggraini" data-photo="placeholder" data-prompt="Warm candid portrait of a beautiful Indonesian female student holding a wooden acoustic instrument, peaceful radiant expression, sunset gold lighting indoors." data-quote="Harmonies heal the heart when words fail." data-role="Music Director">
<div class="relative aspect-[4/5] w-full overflow-hidden bg-surface-variant">
<div class="w-full h-full bg-cover bg-top group-hover:scale-105 transition-transform duration-500" data-alt="Warm candid portrait of a beautiful Indonesian female student holding a wooden acoustic instrument, peaceful radiant expression, sunset gold lighting indoors." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYyHfEmyaNkvqwoZAb91q4WQISLRHV5XhwqmoF9KuAXhrmU1MQlrCYl0rgyVJbrwMzfSaLNaCbaQc2CH9-IyCIBBlpQr44mPn6zZYlOPIPirj5-8RBpMuAPryW2BRS178C0mjpz08FpbFRG64exz3Rg6Kxf_T_DTrrkSx7YVz0i31lbS-7ZyC3UTQr8yLwrQjxjdc7NQZ9W02gSghuzIYUVfmPM0xkBfDXNdlZSLdJ4gP8U-EFiks8')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent"></div>
<span class="absolute top-3 left-3 bg-secondary text-on-secondary font-label-eyebrow text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Music Director
            </span>
</div>
<div class="p-5 flex flex-col flex-1 justify-between">
<div>
<div class="flex items-center justify-between text-xs font-label-mono text-text-muted mb-1">
<span>ID: 2026-011</span>
<span class="text-secondary font-semibold">Creative</span>
</div>
<h3 class="font-title-md text-title-md text-primary-container font-semibold group-hover:text-secondary transition-colors">
                Maya Anggraini
              </h3>
<p class="font-quote-display-mobile italic text-on-surface-variant/90 text-sm mt-2 line-clamp-2">
                “Harmonies heal the heart.”
              </p>
</div>
<div class="pt-4 mt-3 flex items-center justify-between text-xs font-label-mono text-secondary font-medium">
<span>View Dossier</span>
<span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
<!-- CARD 12 -->
<div class="student-card group bg-pure-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between" data-ambition="Artificial Intelligence Researcher &amp; Autonomous Systems Engineer" data-bday="08 July 2007" data-category="Academic" data-hobbies="Robotics, Python Programming, 3D Printing, Drone Design" data-hometown="Bandung, West Java" data-honors="First Place National Youth Robotics Competition, Creator of Class Online Archive System" data-id="2026-012" data-name="Aditya Nugraha" data-photo="placeholder" data-prompt="Smart tech-enthusiast Indonesian male high school senior wearing contemporary navy blazer and modern round glasses, clean illuminated electronics laboratory backdrop." data-quote="Code tomorrow today; build machines that empower humanity." data-role="Tech &amp; Robotics">
<div class="relative aspect-[4/5] w-full overflow-hidden bg-surface-variant">
<div class="w-full h-full bg-cover bg-top group-hover:scale-105 transition-transform duration-500" data-alt="Smart tech-enthusiast Indonesian male high school senior wearing contemporary navy blazer and modern round glasses, clean illuminated electronics laboratory backdrop." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAz0HqmRyjc-7OO7UDHorZgL97hA8DlU8m2drme0O2ZRwQsq1F49mrEG46erONbimKyJ6XbEhOLiAzbHpat038ACC3dpPkN5tjgIfw7LP6WSiquJbKFjkJ2FoEVS9fwoxUDfH7nWklQyk0cVo199S-mc5PgMHJjsD_kJWvLf2DGR2pOp-6i-s6Pl47F5YDITfipNVFNbXzftKPFwpeJ5PMzhc7kOqLmFCUQqQBYXJjOmddyNdzjG5pg')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent"></div>
<span class="absolute top-3 left-3 bg-accent-tint/90 text-primary-container font-label-eyebrow text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Tech &amp; Robotics
            </span>
</div>
<div class="p-5 flex flex-col flex-1 justify-between">
<div>
<div class="flex items-center justify-between text-xs font-label-mono text-text-muted mb-1">
<span>ID: 2026-012</span>
<span class="text-secondary font-semibold">STEM Elite</span>
</div>
<h3 class="font-title-md text-title-md text-primary-container font-semibold group-hover:text-secondary transition-colors">
                Aditya Nugraha
              </h3>
<p class="font-quote-display-mobile italic text-on-surface-variant/90 text-sm mt-2 line-clamp-2">
                “Code tomorrow today.”
              </p>
</div>
<div class="pt-4 mt-3 flex items-center justify-between text-xs font-label-mono text-secondary font-medium">
<span>View Dossier</span>
<span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
</div>
<!-- Load More / Full Archive CTA -->
<div class="flex flex-col items-center mt-14">
<button class="bg-pure-white hover:bg-surface-container text-primary-container font-label-button text-label-button px-8 py-3.5 rounded-full shadow-md transition-all duration-200 flex items-center gap-2" id="loadMoreBtn" type="button">
<span>Displaying 12 of 32 Scholars</span>
<span class="material-symbols-outlined text-[18px]">expand_more</span>
</button>
<span class="font-label-mono text-xs text-text-muted mt-3">Full Class Roster Preserved in National School Records</span>
</div>
</div>
</section>
<!-- ==========================================
       SECTION 4: PHOTO ARCHIVE GALLERY (#gallery)
       Masonry Visual Storytelling
       ========================================== -->
<section class="w-full bg-surface-bright py-24" id="gallery">
<div class="max-w-[1200px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter">
<!-- Section Header -->
<div class="flex flex-col items-center text-center mb-16">
<span class="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-secondary">Moments</span>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container mt-2">
          Class Gallery
        </h2>
<p class="font-body-md text-body-md text-on-surface-variant max-w-md mt-2">
          Snapshots from three unforgettable years of discovery, triumph, and laughter.
        </p>
<div class="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-secondary to-transparent mt-4"></div>
</div>
<!-- 8-Photo Balanced Gallery Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Photo 1: Big Feature (Span 2 col) -->
<div class="md:col-span-2 group relative rounded-2xl overflow-hidden aspect-[16/10] bg-surface-container shadow-md">
<div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Candid photograph of Indonesian high school science students celebrating outdoor festival with colorful banners, bright sunny day, joyful atmosphere." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuANa3o-iHBKhSXDlq5j1lCa1vEojQ3-pJr2JsXiae0djnSf0LBNkojtjzmrnlY--HAq9LblSZzqU3hLlmNaYdDvjVe0U-MU2Us74FQMviW5aF53ze4aOQSfoCYBKd2Uc5nGRDfGeWGhm4lOQYs4gIctM9bndlCIh50Qoksxr1_kN0Ig0s96SCqqdFqvBoPHpB3bwwQYbP203S8W2FL0j3dMaW8fEsFcufj6DfxTLLwE1bAV7E1_a4H0')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
<span class="font-label-mono text-xs text-secondary-fixed">NOVEMBER 2023</span>
<h4 class="font-headline-sm text-surface-bright text-lg">Annual Cultural Fest Victory</h4>
<p class="font-body-sm text-surface-container-high/80 text-xs mt-1">First prize in class choir and traditional ensemble performance.</p>
</div>
</div>
<!-- Photo 2 -->
<div class="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-surface-container shadow-md">
<div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Close up candid photo of two high school students smiling while conducting a chemistry titration experiment with purple solutions in glass beakers." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcT72-i4BLm6Ohw08TzXdzhRWQLrG_3jcnkfI5D7GXzKBeJmN588-WQsasvsSyf9BmoNLimeScQ_1DHxDZPAoqv7RjCvST0kqlsKABuDqUR3twcQZrc1AvkMWbRChJpGTGLEQXpntSZe6pliIVel9CMr1LSeCPginDI-wevpabvVhoOBb7u-HAnuGUa1WcAhdXJIfeeuEFXwLYHi7U1oc4Kg-v5mQzluG9E6flcDGikxVG-4T5VeNw')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
<span class="font-label-mono text-xs text-secondary-fixed">OCTOBER 2023</span>
<h4 class="font-title-md text-surface-bright text-base">Organic Chemistry Lab</h4>
</div>
</div>
<!-- Photo 3 -->
<div class="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-surface-container shadow-md">
<div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Indonesian high school basketball team huddle with hands stacked in center, warm sports court lighting, camaraderie and energy." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgw4IF9gthOxFpGcuW2zHnYQGVp5MZvNsfiXwEXCVcP2In0qgrxRR4vfL1i2pT5fr01TeddOOopow2nceTpBtJL7SlOP4bGx5DkMh7RV9Lk-f_Zi0RFZkGdqlySvtESTRjKefp3ZzkUZvlGbclYoDILgltkhukNu5a_HLhVWmUYU2qVj792YMnC8Gn17D5khFsTa01w6DPt3rEplCqXfJ1LW01WmYnpKV-cZ5Ii_ROA7Pygxhhutqa')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
<span class="font-label-mono text-xs text-secondary-fixed">FEBRUARY 2024</span>
<h4 class="font-title-md text-surface-bright text-base">Inter-School Sports Rally</h4>
</div>
</div>
<!-- Photo 4 -->
<div class="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-surface-container shadow-md">
<div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Group of teenagers on mountain hiking trail at sunrise with backpacks, golden morning mist, breathtaking pine valley panorama." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBqq5At_u2KP2y8KR5F82rPJ3Rmdd6tcKQWP4oOQ62x-JbX1x7H2PuFQbn1LoTqBfBxf9BYnuuQj9ObhJAA0wWRuePIf4xSkBIoDRP6lOyoR3psv6i3MK5RUR3NN1t8OOLibNkK-XMzMGnsKXqPG2a0xAN95XIxMFdqVrpXoSL7lLU_vOIwX8UcgYibdvFlAmTF3Cj_PmqSGLXq2HhMWTUZNcA2r_cK7waIQ8vgQkN1-tDqhsWb6MZ')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
<span class="font-label-mono text-xs text-secondary-fixed">AUGUST 2024</span>
<h4 class="font-title-md text-surface-bright text-base">Mount Bromo Ecological Tour</h4>
</div>
</div>
<!-- Photo 5 -->
<div class="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-surface-container shadow-md">
<div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Spontaneous lunchtime laughter at school canteen table with Indonesian teenage friends sharing iced tea and snacks, documentary authentic style." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsOf8ivmHauskSh8nhhEQFs4HICQ6475MxClZbndeE6A_9pkWO_5a12Ag9JgMHR05sAWW23cKZ6eS8ZGTt-6GycC91yT4Ac1ztAA8cCtfz8WZfTkRQD_3XxxEIMLnTRTg2lCC_b310a7B1Ke9c0YiIgzkhJON39-EjVWwhcLa98xYIuee6FOpJKGnyF0qmN7zSvAY90WYbd8z18LpfqJWGyTiQKkiwS9otvWgljIs1osQZ7ckrj46Z')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
<span class="font-label-mono text-xs text-secondary-fixed">MAY 2024</span>
<h4 class="font-title-md text-surface-bright text-base">Canteen Conversations</h4>
</div>
</div>
<!-- Photo 6: Feature (Span 2 col) -->
<div class="md:col-span-2 group relative rounded-2xl overflow-hidden aspect-[16/10] bg-surface-container shadow-md">
<div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Auditorium stage ceremony with high school students receiving certificates in elegant formal navy blazers, warm applause and golden rim lighting." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDH97aPlp4cVYCJewnbtK7TKo7uuTnsGRQhm90OxOI4cOxDRgTg1u0AXsp2szY2yjSYe7lteKt7c3yIwsGsb5u_7WVNH1BLAMJpFm2LChqdJNxAnRDm4XUhv_uFk7YRJrsNJ_ol39jsw28BJqm6Coy8Z-cbMulz2RV9V4NvJ0o1LHcOrHPFVTrxHcP8YdUsrZC2Vn7xLPu2wTBSuITreDf-qFWcjzL9PBf1Ngfes2L2K-frlbtsAxpy')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
<span class="font-label-mono text-xs text-secondary-fixed">DECEMBER 2024</span>
<h4 class="font-headline-sm text-surface-bright text-lg">National Honors Ceremony</h4>
<p class="font-body-sm text-surface-container-high/80 text-xs mt-1">Five team delegations recognized at provincial academic honors forum.</p>
</div>
</div>
<!-- Photo 7 -->
<div class="md:col-span-2 lg:col-span-2 group relative rounded-2xl overflow-hidden aspect-[16/9] bg-surface-container shadow-md">
<div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Students wearing graduation caps rehearsing in school yard at dusk, throwing paper airplanes into twilight sky, poetic atmospheric lighting." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBb2eiHqUi1CXlu4jlgD8maHw2ydxuUaf1OVxFlPX4Kd2t_-r3xfi1TryjfZk13J5DF7LljbIU9P0dZNafMfQjpQznPqgbVy7kYAnQQeB2LPOxNeFrRy4HKR58elPn3btku171_wb2z53o9nnojNaeRSRoMp2way964wDfoSB1RIrkkiduiPv65XLphEDLJUo7GsIt47OgdW27gRZ6leDBkl4T_xNhWgvQeOPFvbHIF5_cbtes8vSep')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
<span class="font-label-mono text-xs text-secondary-fixed">APRIL 2026</span>
<h4 class="font-headline-sm text-surface-bright text-lg">Senior Rehearsal &amp; Sunset Vigil</h4>
<p class="font-body-sm text-surface-container-high/80 text-xs mt-1">Burying our collective time capsule under the campus heritage banyan tree.</p>
</div>
</div>
<!-- Photo 8 -->
<div class="md:col-span-2 lg:col-span-2 group relative rounded-2xl overflow-hidden aspect-[16/9] bg-surface-container shadow-md">
<div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Art classroom studio workshop with oil paintings on easels and students laughing covered in colorful acrylic paint, warm authentic lighting." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAB63nZZnkILln0K_kTyG5ptOuempuNFEEF6HPQDJVeYY6oJkP_EjqDMmJ-HDRGJi5ZtjQOAMHHCQtMgw9VWN2hY6LMcMPryYpYQE5e-2jldsVTutal_4LWO71KFDF_xho5Iv9HQvF50wdT2iH5iWqGPZRX5YV08ahChDRlx7AG6zEC7lC2ofDzsdbODV5Q4j8xZdjjEAauZZ7lJKvGZsEup-z5eQmMQUVduCsKsFGi7m83VCJGvhdm')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
<span class="font-label-mono text-xs text-secondary-fixed">JANUARY 2025</span>
<h4 class="font-headline-sm text-surface-bright text-lg">Monograph Art Production Week</h4>
<p class="font-body-sm text-surface-container-high/80 text-xs mt-1">Designing illustrations and typographic folios for our class book.</p>
</div>
</div>
</div>
</div>
</section>
<!-- ==========================================
       SECTION 5: CONTACT & CORRESPONDENCE (#contact)
       Integrated Alumni Dispatch Form
       ========================================== -->
<section class="w-full bg-primary-container py-24 text-on-primary relative overflow-hidden" id="contact">
<!-- Subtle Ambient Gold Glow -->
<div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
<div class="max-w-[1200px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter relative z-10">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
<!-- Left: Editorial Invitation -->
<div class="lg:col-span-6 flex flex-col gap-6">
<div class="inline-flex items-center gap-2">
<span class="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span class="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-secondary-fixed">Reunions • Inquiries</span>
</div>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-surface-bright leading-tight">
            Keep in Touch With XII IPA 1
          </h2>
<p class="font-body-md text-body-md text-surface-container-high/80 leading-relaxed">
            Whether you are an alumnus coordinating the 5-year reunion, a university admissions officer verifying a portfolio, or a friend dropping a note of encouragement, our class council maintains this active registry.
          </p>
<div class="flex flex-col gap-4 mt-2">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[20px]">location_on</span>
</div>
<div class="flex flex-col">
<span class="font-label-mono text-xs text-secondary-fixed">HOMEROOM ARCHIVE</span>
<span class="font-body-sm text-surface-bright">Room XII-1 • SMA Negeri Science Wing</span>
</div>
</div>
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[20px]">mail</span>
</div>
<div class="flex flex-col">
<span class="font-label-mono text-xs text-secondary-fixed">OFFICIAL INQUIRY DESK</span>
<span class="font-body-sm text-surface-bright">contact@classof2026-ipa1.sch.id</span>
</div>
</div>
</div>
</div>
<!-- Right: Dispatch Form -->
<div class="lg:col-span-6">
<div class="bg-surface-container-highest/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
<form class="flex flex-col gap-5" id="contactForm">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div class="flex flex-col gap-1.5">
<label class="font-label-eyebrow text-xs uppercase text-surface-container-high/80 tracking-wider">Your Full Name</label>
<input class="w-full bg-white/10 rounded-lg px-4 py-3 text-surface-bright font-body-sm text-body-sm placeholder:text-surface-container-high/40 focus:outline-none focus:ring-2 focus:ring-secondary/60 transition-all" placeholder="e.g. Raden Mas Bagus" required="" type="text"/>
</div>
<div class="flex flex-col gap-1.5">
<label class="font-label-eyebrow text-xs uppercase text-surface-container-high/80 tracking-wider">Email Address</label>
<input class="w-full bg-white/10 rounded-lg px-4 py-3 text-surface-bright font-body-sm text-body-sm placeholder:text-surface-container-high/40 focus:outline-none focus:ring-2 focus:ring-secondary/60 transition-all" placeholder="alumni@domain.com" required="" type="email"/>
</div>
</div>
<div class="flex flex-col gap-1.5">
<label class="font-label-eyebrow text-xs uppercase text-surface-container-high/80 tracking-wider">Relationship / Purpose</label>
<select class="w-full bg-primary-600/60 rounded-lg px-4 py-3 text-surface-bright font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary/60 transition-all">
<option value="alumni">Class Alumnus / Graduate</option>
<option value="teacher">Faculty / Teacher</option>
<option value="parent">Parent / Family</option>
<option value="reunion">Reunion Planning Committee</option>
<option value="other">Other Inquiry</option>
</select>
</div>
<div class="flex flex-col gap-1.5">
<label class="font-label-eyebrow text-xs uppercase text-surface-container-high/80 tracking-wider">Message or Memory</label>
<textarea class="w-full bg-white/10 rounded-lg px-4 py-3 text-surface-bright font-body-sm text-body-sm placeholder:text-surface-container-high/40 focus:outline-none focus:ring-2 focus:ring-secondary/60 transition-all resize-none" placeholder="Share your thoughts, update your contact details, or leave a note for the Class of 2026..." required="" rows="4"></textarea>
</div>
<button class="w-full bg-secondary hover:bg-accent-hover text-on-secondary font-label-button text-label-button py-3.5 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 mt-2" type="submit">
<span>Dispatch Message to Registry</span>
<span class="material-symbols-outlined text-[18px]">send</span>
</button>
<div class="hidden p-3 rounded-lg bg-status-success/20 text-surface-bright font-body-sm text-center" id="formSuccessMessage">
                Thank you! Your note has been committed to the Class of 2026 registry.
              </div>
</form>
</div>
</div>
</div>
</div>
</section>
<!-- ==========================================
       INTERACTIVE STUDENT PROFILE MODAL / DRAWER
       ========================================== -->
<div aria-modal="true" class="fixed inset-0 z-50 hidden items-center justify-center p-4 sm:p-6" id="studentModal" role="dialog">
<!-- Backdrop -->
<div class="fixed inset-0 bg-primary-container/70 backdrop-blur-md transition-opacity" id="modalBackdrop"></div>
<!-- Modal Content Card -->
<div class="relative bg-surface-bright rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 overflow-hidden flex flex-col">
<!-- Close Button -->
<button aria-label="Close modal" class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-surface-bright/80 backdrop-blur-md text-on-surface hover:bg-surface-container transition-all flex items-center justify-center shadow-md" id="modalCloseBtn" type="button">
<span class="material-symbols-outlined text-[20px]">close</span>
</button>
<!-- Header Media -->
<div class="relative w-full h-56 bg-primary-container overflow-hidden">
<div class="w-full h-full bg-cover bg-center mix-blend-overlay opacity-50" id="modalHeaderImg"></div>
<div class="absolute inset-0 bg-gradient-to-t from-surface-bright via-surface-bright/20 to-transparent"></div>
<!-- Student Avatar & Primary Metadata -->
<div class="absolute bottom-4 left-6 flex items-end gap-5">
<div class="w-24 h-24 rounded-2xl bg-cover bg-top shadow-xl ring-4 ring-surface-bright" id="modalAvatar"></div>
<div class="flex flex-col">
<span class="inline-block bg-secondary text-on-secondary font-label-eyebrow text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full shadow-sm w-fit mb-1" id="modalRoleBadge">
              Role
            </span>
<h3 class="font-headline-sm text-headline-sm text-primary-container leading-none" id="modalName">
              Student Name
            </h3>
<span class="font-label-mono text-xs text-text-muted mt-1" id="modalId">ID: 2026-000</span>
</div>
</div>
</div>
<!-- Modal Body Details -->
<div class="p-6 sm:p-8 flex flex-col gap-6">
<!-- Pull Quote -->
<div class="bg-surface-container-low rounded-xl p-5 shadow-inner">
<span class="font-headline-sm text-secondary text-2xl leading-none">“</span>
<p class="font-quote-display-mobile italic text-primary-container text-base inline" id="modalQuote">
            Student personal quote.
          </p>
</div>
<!-- Quick Bio Grid -->
<div class="grid grid-cols-2 gap-4">
<div class="bg-pure-white p-3.5 rounded-xl shadow-sm">
<span class="font-label-eyebrow text-[10px] text-text-muted uppercase tracking-wider block">Date of Birth</span>
<span class="font-body-sm text-on-surface font-medium" id="modalBday">14 April 2008</span>
</div>
<div class="bg-pure-white p-3.5 rounded-xl shadow-sm">
<span class="font-label-eyebrow text-[10px] text-text-muted uppercase tracking-wider block">Hometown</span>
<span class="font-body-sm text-on-surface font-medium" id="modalHometown">Bandung, West Java</span>
</div>
</div>
<!-- Ambition -->
<div class="bg-pure-white p-4 rounded-xl shadow-sm">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-secondary text-[18px]">explore</span>
<span class="font-label-eyebrow text-xs uppercase tracking-wider text-secondary font-semibold">Future Ambition</span>
</div>
<p class="font-body-md text-primary-container font-medium" id="modalAmbition">
            Aspiring Aerospace Engineer
          </p>
</div>
<!-- Hobbies & Passions -->
<div>
<span class="font-label-eyebrow text-xs uppercase tracking-wider text-text-muted block mb-2">Interests &amp; Pursuits</span>
<div class="flex flex-wrap gap-2" id="modalHobbiesContainer">
<!-- Dynamic tags -->
</div>
</div>
<!-- Honors & Milestones -->
<div>
<span class="font-label-eyebrow text-xs uppercase tracking-wider text-text-muted block mb-2">Key High School Honors</span>
<div class="bg-surface-container-low rounded-xl p-4">
<ul class="flex flex-col gap-2 font-body-sm text-on-surface text-sm" id="modalHonorsList">
<!-- Dynamic list items -->
</ul>
</div>
</div>
<!-- Modal Actions -->
<div class="pt-4 flex items-center justify-between">
<div class="flex items-center gap-2">
<button aria-label="LinkedIn" class="w-9 h-9 rounded-full bg-surface-container hover:bg-secondary hover:text-on-secondary transition-colors flex items-center justify-center" type="button">
<span class="material-symbols-outlined text-[18px]">work</span>
</button>
<button aria-label="Portfolio" class="w-9 h-9 rounded-full bg-surface-container hover:bg-secondary hover:text-on-secondary transition-colors flex items-center justify-center" type="button">
<span class="material-symbols-outlined text-[18px]">language</span>
</button>
<button aria-label="Direct Email" class="w-9 h-9 rounded-full bg-surface-container hover:bg-secondary hover:text-on-secondary transition-colors flex items-center justify-center" type="button">
<span class="material-symbols-outlined text-[18px]">alternate_email</span>
</button>
</div>
<button class="bg-primary-container hover:bg-primary-600 text-surface-bright font-label-button text-xs px-6 py-2.5 rounded-full transition-colors" id="modalDoneBtn" type="button">
            Close Dossier
          </button>
</div>
</div>
</div>
</div>
</div>
<!-- ==========================================
     CLIENT-SIDE INTERACTIVITY SCRIPT
     Search, Filter, Sorting, Counters, & Modal
     ========================================== -->
<script>
  (function () {
    // 1. Directory Filtering and Search
    const searchInput = document.getElementById('studentSearchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const studentCards = document.querySelectorAll('.student-card');
    const resultCount = document.getElementById('resultCount');
    const sortSelector = document.getElementById('sortSelector');
    const gridContainer = document.getElementById('studentGrid');

    let currentFilter = 'all';
    let searchQuery = '';

    function filterAndSortCards() {
      let visibleCount = 0;
      const cardsArray = Array.from(studentCards);

      // Sorting
      const sortVal = sortSelector ? sortSelector.value : 'name-asc';
      cardsArray.sort((a, b) => {
        const nameA = a.dataset.name.toLowerCase();
        const nameB = b.dataset.name.toLowerCase();
        const idA = a.dataset.id;
        const idB = b.dataset.id;

        if (sortVal === 'name-asc') return nameA.localeCompare(nameB);
        if (sortVal === 'name-desc') return nameB.localeCompare(nameA);
        if (sortVal === 'id-asc') return idA.localeCompare(idB);
        return 0;
      });

      // Filter logic
      cardsArray.forEach(card => {
        const category = card.dataset.category;
        const name = card.dataset.name.toLowerCase();
        const id = card.dataset.id.toLowerCase();
        const ambition = (card.dataset.ambition || '').toLowerCase();
        const quote = (card.dataset.quote || '').toLowerCase();

        const matchesFilter = (currentFilter === 'all') || (category === currentFilter);
        const matchesSearch = !searchQuery || 
          name.includes(searchQuery) || 
          id.includes(searchQuery) || 
          ambition.includes(searchQuery) || 
          quote.includes(searchQuery);

        if (matchesFilter && matchesSearch) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }

        // Re-append sorted cards
        if (gridContainer) {
          gridContainer.appendChild(card);
        }
      });

      if (resultCount) {
        resultCount.textContent = `Showing ${visibleCount} of 32`;
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        filterAndSortCards();
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-primary-container', 'text-surface-bright', 'shadow-sm', 'active-filter');
          b.classList.add('bg-surface-container-low', 'text-on-surface');
        });
        btn.classList.remove('bg-surface-container-low', 'text-on-surface');
        btn.classList.add('bg-primary-container', 'text-surface-bright', 'shadow-sm', 'active-filter');

        currentFilter = btn.dataset.filter;
        filterAndSortCards();
      });
    });

    if (sortSelector) {
      sortSelector.addEventListener('change', () => {
        filterAndSortCards();
      });
    }

    // 2. Student Profile Modal Drawer
    const modal = document.getElementById('studentModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalDoneBtn = document.getElementById('modalDoneBtn');

    const modalName = document.getElementById('modalName');
    const modalId = document.getElementById('modalId');
    const modalRoleBadge = document.getElementById('modalRoleBadge');
    const modalQuote = document.getElementById('modalQuote');
    const modalBday = document.getElementById('modalBday');
    const modalHometown = document.getElementById('modalHometown');
    const modalAmbition = document.getElementById('modalAmbition');
    const modalHobbiesContainer = document.getElementById('modalHobbiesContainer');
    const modalHonorsList = document.getElementById('modalHonorsList');
    const modalAvatar = document.getElementById('modalAvatar');
    const modalHeaderImg = document.getElementById('modalHeaderImg');

    function openModalWithData(card) {
      if (!modal) return;
      
      const name = card.dataset.name;
      const id = card.dataset.id;
      const role = card.dataset.role;
      const quote = card.dataset.quote;
      const bday = card.dataset.bday;
      const hometown = card.dataset.hometown;
      const ambition = card.dataset.ambition;
      const hobbies = (card.dataset.hobbies || '').split(',').map(h => h.trim());
      const honors = (card.dataset.honors || '').split(',').map(h => h.trim());
      const photo = card.dataset.photo || 'placeholder';

      if (modalName) modalName.textContent = name;
      if (modalId) modalId.textContent = `ID: ${id}`;
      if (modalRoleBadge) modalRoleBadge.textContent = role;
      if (modalQuote) modalQuote.textContent = quote;
      if (modalBday) modalBday.textContent = bday;
      if (modalHometown) modalHometown.textContent = hometown;
      if (modalAmbition) modalAmbition.textContent = ambition;

      if (modalAvatar) {
        modalAvatar.style.backgroundImage = `url('${photo}')`;
      }
      if (modalHeaderImg) {
        modalHeaderImg.style.backgroundImage = `url('${photo}')`;
      }

      if (modalHobbiesContainer) {
        modalHobbiesContainer.innerHTML = '';
        hobbies.forEach(hobby => {
          if (!hobby) return;
          const chip = document.createElement('span');
          chip.className = 'px-3 py-1 bg-surface-container rounded-full text-xs font-body-sm text-on-surface';
          chip.textContent = hobby;
          modalHobbiesContainer.appendChild(chip);
        });
      }

      if (modalHonorsList) {
        modalHonorsList.innerHTML = '';
        honors.forEach(honor => {
          if (!honor) return;
          const li = document.createElement('li');
          li.className = 'flex items-start gap-2';
          li.innerHTML = `<span class="material-symbols-outlined text-secondary text-[16px] mt-0.5">check_circle</span> <span>${honor}</span>`;
          modalHonorsList.appendChild(li);
        });
      }

      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      if (!modal) return;
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }

    studentCards.forEach(card => {
      card.addEventListener('click', () => openModalWithData(card));
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // 3. Contact Form Submission Feedback
    const contactForm = document.getElementById('contactForm');
    const formSuccessMessage = document.getElementById('formSuccessMessage');
    if (contactForm && formSuccessMessage) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formSuccessMessage.classList.remove('hidden');
        contactForm.reset();
        setTimeout(() => {
          formSuccessMessage.classList.add('hidden');
        }, 5000);
      });
    }

    // 4. Load More Button Interaction
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        loadMoreBtn.innerHTML = `<span>All 32 Scholars Loaded</span><span class="material-symbols-outlined text-[18px]">done</span>`;
        loadMoreBtn.classList.add('opacity-80', 'cursor-default');
      });
    }
  })();
</script></main><footer class="w-full bg-primary-container text-surface-container-high"><div class="max-w-[1200px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter pt-space-xl pb-space-lg"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-xl border-b border-white/10"><div class="lg:col-span-4 flex flex-col gap-space-md"><div class="flex items-center gap-space-sm"><img alt="Class of 2026 Monogram" class="h-10 w-auto object-contain brightness-200" src="https://lh3.googleusercontent.com/aida/AEtjO1XPNQuGJCxZQ0u16qURoC4FESdunDBZLSWu85P2sIJJ9NMfd7vl33UHEPY2vmiLD9fhrXvAZ0xGVqwz2XaZu0hLdqmgJUOH1INcSs4yybCaQD6aa1jMZf0PqQwjokuQ7eF5RCu3CETfdGrDBj-GiEjS3vJo-_wQkxS9TUGeTRW0OeZ-q_iOXoQjxb_Zsz4_BOFcTaPBQF68tDMUIBWpXe2MWL2zIP8jPF-QizT6zR0Ouc7_dAw0romIpGc"/><div class="flex flex-col"><span class="font-headline-sm text-headline-sm text-surface-bright tracking-tight leading-none">XII IPA 1</span><span class="font-label-eyebrow text-label-eyebrow uppercase text-accent-tint tracking-[0.16em] mt-space-xs">Commemorative Monograph</span></div></div><p class="font-body-sm text-body-sm text-surface-variant/80 max-w-sm">An archival editorial tribute to the intellect, memories, and camaraderie of the Class of 2026. Preserved for posterity and beyond.</p><div class="flex items-center gap-space-sm pt-space-xs"><a aria-label="Instagram profile" class="w-9 h-9 rounded-full bg-white/5 hover:bg-secondary text-surface-bright hover:text-on-secondary flex items-center justify-center transition-all" href="#"><span class="material-symbols-outlined text-[18px]">photo_camera</span></a><a aria-label="LinkedIn network" class="w-9 h-9 rounded-full bg-white/5 hover:bg-secondary text-surface-bright hover:text-on-secondary flex items-center justify-center transition-all" href="#"><span class="material-symbols-outlined text-[18px]">work</span></a><a aria-label="YouTube archive" class="w-9 h-9 rounded-full bg-white/5 hover:bg-secondary text-surface-bright hover:text-on-secondary flex items-center justify-center transition-all" href="#"><span class="material-symbols-outlined text-[18px]">smart_display</span></a><a aria-label="Email registry" class="w-9 h-9 rounded-full bg-white/5 hover:bg-secondary text-surface-bright hover:text-on-secondary flex items-center justify-center transition-all" href="#"><span class="material-symbols-outlined text-[18px]">mail</span></a></div></div><div class="lg:col-span-4 flex flex-col sm:flex-row gap-space-xl"><div class="flex flex-col gap-space-sm flex-1"><span class="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.16em] text-secondary-fixed">Navigation</span><div class="flex flex-col gap-space-xs"><a class="font-body-sm text-body-sm text-surface-container-high/80 hover:text-surface-bright transition-colors" data-path="home" href="#">Home Index</a><a class="font-body-sm text-body-sm text-surface-container-high/80 hover:text-surface-bright transition-colors" data-path="about" href="#">Class Monograph</a><a class="font-body-sm text-body-sm text-surface-container-high/80 hover:text-surface-bright transition-colors" data-path="highlights" href="#">Memories &amp; Milestones</a><a class="font-body-sm text-body-sm text-surface-container-high/80 hover:text-surface-bright transition-colors" data-path="directory" href="#">Graduate Directory</a><a class="font-body-sm text-body-sm text-surface-container-high/80 hover:text-surface-bright transition-colors" data-path="gallery" href="#">Photo Archive</a></div></div><div class="flex flex-col gap-space-sm flex-1"><span class="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.16em] text-secondary-fixed">Academic Folio</span><div class="flex flex-col gap-space-xs"><span class="font-body-sm text-body-sm text-surface-container-high/70">Cohort: 2023 – 2026</span><span class="font-body-sm text-body-sm text-surface-container-high/70">Specialization: Science (IPA)</span><span class="font-body-sm text-body-sm text-surface-container-high/70">Classroom: Room XII-1</span><span class="font-body-sm text-body-sm text-surface-container-high/70">Graduation: June 2026</span></div></div></div><div class="lg:col-span-4 flex flex-col gap-space-sm"><span class="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.16em] text-secondary-fixed">Class Registry &amp; Dispatch</span><p class="font-body-sm text-body-sm text-surface-variant/80">Subscribe to alumni bulletins, reunion dates, and archive updates.</p><form class="flex flex-col gap-space-xs"><div class="flex items-center gap-space-xs bg-white/5 border border-white/10 rounded-lg p-space-xs focus-within:border-secondary transition-colors"><span class="material-symbols-outlined text-surface-variant/60 text-[20px] ml-space-xs">alternate_email</span><input class="w-full bg-transparent border-none text-surface-bright font-body-sm text-body-sm placeholder:text-surface-variant/50 focus:outline-none px-space-xs" placeholder="Enter alumni email" type="email"/></div><button class="w-full bg-secondary hover:bg-accent-hover text-on-secondary hover:text-on-secondary font-label-button text-label-button py-space-sm rounded-lg transition-colors shadow-sm" type="button">Submit Registry Note</button></form></div></div><div class="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-mono text-label-mono text-surface-variant/70"><span>© 2026 Class of 2026. Crafted with care.</span><div class="flex items-center gap-space-md"><span class="text-accent-tint">Ad Astra Per Aspera</span><span>XII IPA 1 Digital Monograph</span></div></div></div></footer></body></html>