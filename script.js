
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ['Plus Jakarta Sans','system-ui','sans-serif'] },
      colors: {
        nv: { primary:'#6366f1', accent:'#a855f7', surface:'#ffffff', bg:'#f8fafc', text:'#0f172a', muted:'#64748b', border:'rgba(15,23,42,0.08)' }
      },
      boxShadow: {
        nvsm:'0 1px 2px rgba(0,0,0,0.04)',
        nvmd:'0 4px 12px rgba(0,0,0,0.06)',
        nvlg:'0 12px 40px rgba(0,0,0,0.1)',
        nvglow:'0 0 40px rgba(99,102,241,0.25)'
      },
      borderRadius: {
        nvsm:'10px', nvmd:'14px', nvlg:'20px', nvxl:'28px'
      }
    }
  }
}



const S = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`;

const DB = {
  categories: [
    {id:'social-media',name:'Social Media',icon:'fa-solid fa-hashtag',color:'6366f1',color2:'ec4899',gradient:'from-indigo-500 via-purple-500 to-pink-500',accent:'purple',desc:'Grow and manage your social media presence across all major platforms.',stats:{apps:14,services:96,users:'2.4M+'}},
    {id:'gaming',name:'Gaming',icon:'fa-solid fa-gamepad',color:'f97316',color2:'ef4444',gradient:'from-orange-500 to-rose-500',accent:'orange',desc:'Top-up, gaming accounts, memberships & boosting services.',stats:{apps:13,services:72,users:'1.8M+'}},
    {id:'streaming',name:'Streaming',icon:'fa-solid fa-play',color:'dc2626',color2:'1e40af',gradient:'from-red-600 to-blue-800',accent:'crimson',desc:'Premium entertainment subscriptions. Movies, music, sports & TV.',stats:{apps:12,services:60,users:'3.1M+'}},
    {id:'ai-creative',name:'AI & Creative',icon:'fa-solid fa-wand-magic-sparkles',color:'2563eb',color2:'06b6d4',gradient:'from-blue-600 to-cyan-400',accent:'sky',desc:'AI tools, creative software & design platforms.',stats:{apps:8,services:38,users:'950K+'}},
    {id:'productivity',name:'Productivity',icon:'fa-solid fa-briefcase',color:'0284c7',color2:'06b6d4',gradient:'from-sky-500 to-cyan-400',accent:'sky',desc:'Office, cloud, documents & professional business tools.',stats:{apps:8,services:40,users:'1.2M+'}},
    {id:'shopping',name:'Shopping',icon:'fa-solid fa-cart-shopping',color:'f97316',color2:'ea580c',gradient:'from-orange-500 to-orange-600',accent:'orange',desc:'Online shopping, food delivery & marketplace deals.',stats:{apps:8,services:44,users:'1.5M+'}},
    {id:'finance',name:'Finance',icon:'fa-solid fa-chart-line',color:'059669',color2:'10b981',gradient:'from-emerald-600 to-emerald-400',accent:'emerald',desc:'Payments, wallets, banking & financial services.',stats:{apps:6,services:30,users:'890K+'}},
    {id:'education',name:'Education',icon:'fa-solid fa-graduation-cap',color:'1e40af',color2:'3b82f6',gradient:'from-blue-800 to-blue-500',accent:'sky',desc:'Online learning, courses & premium education platforms.',stats:{apps:4,services:24,users:'720K+'}},
    {id:'travel',name:'Travel',icon:'fa-solid fa-plane',color:'0284c7',color2:'38bdf8',gradient:'from-sky-600 to-sky-300',accent:'sky',desc:'Hotels, flights, taxi & travel bookings.',stats:{apps:4,services:20,users:'610K+'}},
    {id:'health',name:'Health & Fitness',icon:'fa-solid fa-heart-pulse',color:'059669',color2:'34d399',gradient:'from-emerald-600 to-emerald-300',accent:'emerald',desc:'Fitness, healthcare & wellness apps.',stats:{apps:4,services:18,users:'480K+'}},
    {id:'music',name:'Music',icon:'fa-solid fa-music',color:'7c3aed',color2:'a855f7',gradient:'from-violet-600 to-purple-500',accent:'violet',desc:'Music streaming, premium audio & artist tools.',stats:{apps:5,services:22,users:'1.1M+'}},
    {id:'cloud-storage',name:'Cloud Storage',icon:'fa-solid fa-cloud',color:'2563eb',color2:'60a5fa',gradient:'from-blue-600 to-blue-400',accent:'sky',desc:'Online storage, backup & cloud file management.',stats:{apps:5,services:20,users:'670K+'}},
    {id:'developer',name:'Developer Tools',icon:'fa-solid fa-code',color:'1e3a8a',color2:'3b82f6',gradient:'from-blue-900 to-blue-500',accent:'indigo',desc:'Hosting, Git, deployment & coding tools.',stats:{apps:7,services:30,users:'540K+'}},
    {id:'vpn-security',name:'VPN & Security',icon:'fa-solid fa-shield-halved',color:'166534',color2:'22c55e',gradient:'from-green-800 to-green-500',accent:'emerald',desc:'Privacy, VPN, antivirus & digital security.',stats:{apps:6,services:24,users:'780K+'}},
    {id:'messaging',name:'Messaging',icon:'fa-solid fa-comment-dots',color:'0d9488',color2:'14b8a6',gradient:'from-teal-600 to-teal-400',accent:'teal',desc:'Communication & business messaging platforms.',stats:{apps:5,services:22,users:'920K+'}},
    {id:'news-reading',name:'News & Reading',icon:'fa-solid fa-newspaper',color:'334155',color2:'64748b',gradient:'from-slate-700 to-slate-500',accent:'slate',desc:'Digital news, books, magazines & article subscriptions.',stats:{apps:4,services:16,users:'430K+'}},
    {id:'recharge',name:'Recharge & Utilities',icon:'fa-solid fa-bolt',color:'d97706',color2:'fbbf24',gradient:'from-amber-600 to-yellow-400',accent:'yellow',desc:'Mobile recharge, DTH, electricity & bill payments.',stats:{apps:6,services:30,users:'4.2M+'}},
    {id:'gift-cards',name:'Gift Cards',icon:'fa-solid fa-gift',color:'b45309',color2:'f59e0b',gradient:'from-amber-700 to-amber-500',accent:'amber',desc:'Digital gift cards, store credits & prepaid vouchers.',stats:{apps:6,services:28,users:'2.1M+'}},
    {id:'crypto',name:'Crypto & Web3',icon:'fa-solid fa-bitcoin-sign',color:'f59e0b',color2:'fbbf24',gradient:'from-amber-500 to-yellow-400',accent:'amber',desc:'Crypto wallets, exchange services & blockchain tools.',stats:{apps:4,services:16,users:'380K+'}},
    {id:'business',name:'Business Tools',icon:'fa-solid fa-chart-pie',color:'4338ca',color2:'818cf8',gradient:'from-indigo-700 to-indigo-400',accent:'indigo',desc:'Marketing, analytics, automation & business services.',stats:{apps:4,services:18,users:'510K+'}}
  ],
  applications: {
    'social-media':[
      {id:'instagram',name:'Instagram',svg:'instagram',color:'E4405F',fa:'fa-brands fa-instagram',fCol:'#e1306c',fBg:'#fce7f3',services:12,popular:true},
      {id:'facebook',name:'Facebook',svg:'facebook',color:'1877F2',fa:'fa-brands fa-facebook',fCol:'#1877F2',fBg:'#dbeafe',services:10,popular:true},
      {id:'whatsapp',name:'WhatsApp',svg:'whatsapp',color:'25D366',fa:'fa-brands fa-whatsapp',fCol:'#25D366',fBg:'#dcfce7',services:8},
      {id:'telegram',name:'Telegram',svg:'telegram',color:'0088cc',fa:'fa-brands fa-telegram',fCol:'#0088cc',fBg:'#e0f2fe',services:9,popular:true},
      {id:'youtube',name:'YouTube',svg:'youtube',color:'FF0000',fa:'fa-brands fa-youtube',fCol:'#FF0000',fBg:'#fee2e2',services:14,popular:true},
      {id:'discord',name:'Discord',svg:'discord',color:'5865F2',fa:'fa-brands fa-discord',fCol:'#5865F2',fBg:'#e0e7ff',services:7},
      {id:'tiktok',name:'TikTok',svg:'tiktok',color:'000000',fa:'fa-brands fa-tiktok',fCol:'#000000',fBg:'#f3f4f6',services:10,popular:true},
      {id:'x-twitter',name:'X (Twitter)',svg:'x',color:'0f1419',fa:'fa-brands fa-x-twitter',fCol:'#0f1419',fBg:'#f3f4f6',services:8},
      {id:'snapchat',name:'Snapchat',svg:'snapchat',color:'FFFC00',fa:'fa-brands fa-snapchat',fCol:'#000000',fBg:'#fefce8',services:6},
      {id:'linkedin',name:'LinkedIn',svg:'linkedin',color:'0A66C2',fa:'fa-brands fa-linkedin',fCol:'#0A66C2',fBg:'#dbeafe',services:5},
      {id:'pinterest',name:'Pinterest',svg:'pinterest',color:'E60023',fa:'fa-brands fa-pinterest',fCol:'#E60023',fBg:'#fce7f3',services:5},
      {id:'reddit',name:'Reddit',svg:'reddit',color:'FF4500',fa:'fa-brands fa-reddit',fCol:'#FF4500',fBg:'#ffedd5',services:4},
      {id:'threads',name:'Threads',svg:'threads',color:'000000',fa:'fa-brands fa-threads',fCol:'#000000',fBg:'#f3f4f6',services:3},
      {id:'signal',name:'Signal',svg:'signal',color:'3A76F0',fa:'fa-solid fa-comment',fCol:'#3A76F0',fBg:'#dbeafe',services:3}
    ],
    'gaming':[
      {id:'free-fire',name:'Free Fire MAX',svg:null,color:'FF6B00',fa:'fa-solid fa-fire',fCol:'#FF6B00',fBg:'#ffedd5',services:8,popular:true},
      {id:'bgmi',name:'BGMI',svg:null,color:'f59e0b',fa:'fa-solid fa-gun',fCol:'#f59e0b',fBg:'#fef3c7',services:6,popular:true},
      {id:'pubg-mobile',name:'PUBG Mobile',svg:null,color:'2563eb',fa:'fa-solid fa-person-rifle',fCol:'#2563eb',fBg:'#dbeafe',services:7,popular:true},
      {id:'cod-mobile',name:'Call of Duty Mobile',svg:null,color:'16a34a',fa:'fa-solid fa-crosshairs',fCol:'#16a34a',fBg:'#dcfce7',services:5},
      {id:'steam',name:'Steam',svg:'steam',color:'171a21',fa:'fa-brands fa-steam',fCol:'#171a21',fBg:'#e5e7eb',services:6},
      {id:'roblox',name:'Roblox',svg:'roblox',color:'000000',fa:'fa-solid fa-cube',fCol:'#000000',fBg:'#f3f4f6',services:5},
      {id:'minecraft',name:'Minecraft',svg:'minecraft',color:'5C8A3C',fa:'fa-solid fa-cubes',fCol:'#5C8A3C',fBg:'#dcfce7',services:4},
      {id:'clash-of-clans',name:'Clash of Clans',svg:null,color:'f59e0b',fa:'fa-solid fa-fort-awesome',fCol:'#f59e0b',fBg:'#fef3c7',services:5},
      {id:'genshin-impact',name:'Genshin Impact',svg:null,color:'6366f1',fa:'fa-solid fa-star',fCol:'#6366f1',fBg:'#e0e7ff',services:4},
      {id:'mobile-legends',name:'Mobile Legends',svg:null,color:'2563eb',fa:'fa-solid fa-gamepad',fCol:'#2563eb',fBg:'#dbeafe',services:5},
      {id:'playstation',name:'PlayStation',svg:'playstation',color:'003791',fa:'fa-brands fa-playstation',fCol:'#003791',fBg:'#dbeafe',services:4},
      {id:'xbox',name:'Xbox',svg:'xbox',color:'107C10',fa:'fa-brands fa-xbox',fCol:'#107C10',fBg:'#dcfce7',services:4},
      {id:'epic-games',name:'Epic Games',svg:'epicgames',color:'313131',fa:'fa-solid fa-gamepad',fCol:'#313131',fBg:'#e5e7eb',services:3}
    ],
    'streaming':[
      {id:'spotify',name:'Spotify',svg:'spotify',color:'1DB954',fa:'fa-brands fa-spotify',fCol:'#1DB954',fBg:'#d1fae5',services:6,popular:true},
      {id:'netflix',name:'Netflix',svg:'netflix',color:'E50914',fa:'fa-solid fa-film',fCol:'#E50914',fBg:'#fee2e2',services:8,popular:true},
      {id:'youtube-premium',name:'YouTube Premium',svg:'youtube',color:'FF0000',fa:'fa-brands fa-youtube',fCol:'#FF0000',fBg:'#fee2e2',services:5,popular:true},
      {id:'prime-video',name:'Amazon Prime Video',svg:'amazonprime',color:'00A8E1',fa:'fa-brands fa-amazon',fCol:'#00A8E1',fBg:'#e0f2fe',services:5},
      {id:'disney-plus',name:'Disney+',svg:'disneyplus',color:'113CCF',fa:'fa-solid fa-wand-magic-sparkles',fCol:'#113CCF',fBg:'#dbeafe',services:4},
      {id:'apple-music',name:'Apple Music',svg:'applemusic',color:'FA243E',fa:'fa-brands fa-apple',fCol:'#FA243E',fBg:'#fce7f3',services:4},
      {id:'apple-tv',name:'Apple TV+',svg:'appletv',color:'000000',fa:'fa-brands fa-apple',fCol:'#000000',fBg:'#f3f4f6',services:3},
      {id:'twitch',name:'Twitch',svg:'twitch',color:'9146FF',fa:'fa-brands fa-twitch',fCol:'#9146FF',fBg:'#ede9fe',services:3},
      {id:'soundcloud',name:'SoundCloud',svg:'soundcloud',color:'FF5500',fa:'fa-brands fa-soundcloud',fCol:'#FF5500',fBg:'#ffedd5',services:3},
      {id:'jiocinema',name:'JioHotstar',svg:null,color:'E40000',fa:'fa-solid fa-tv',fCol:'#E40000',fBg:'#fee2e2',services:4},
      {id:'sony-liv',name:'Sony LIV',svg:null,color:'1e3a8a',fa:'fa-solid fa-tv',fCol:'#1e3a8a',fBg:'#dbeafe',services:3},
      {id:'zee5',name:'ZEE5',svg:null,color:'7e22ce',fa:'fa-solid fa-tv',fCol:'#7e22ce',fBg:'#ede9fe',services:3}
    ],
    'ai-creative':[
      {id:'chatgpt',name:'ChatGPT',svg:'openai',color:'10a37f',fa:'fa-solid fa-robot',fCol:'#10a37f',fBg:'#d1fae5',services:4,popular:true},
      {id:'gemini',name:'Google Gemini',svg:'googlegemini',color:'4285F4',fa:'fa-solid fa-gem',fCol:'#4285F4',fBg:'#dbeafe',services:3},
      {id:'claude',name:'Claude AI',svg:'claude',color:'d97706',fa:'fa-solid fa-brain',fCol:'#d97706',fBg:'#ffedd5',services:3},
      {id:'copilot',name:'Microsoft Copilot',svg:'microsoftcopilot',color:'6366f1',fa:'fa-solid fa-robot',fCol:'#6366f1',fBg:'#e0e7ff',services:3},
      {id:'canva',name:'Canva Pro',svg:'canva',color:'00C4CC',fa:'fa-solid fa-palette',fCol:'#00C4CC',fBg:'#ccfbf1',services:4,popular:true},
      {id:'midjourney',name:'Midjourney',svg:null,color:'6366f1',fa:'fa-solid fa-image',fCol:'#6366f1',fBg:'#e0e7ff',services:2},
      {id:'adobe-firefly',name:'Adobe Firefly',svg:'adobefirefly',color:'FF0000',fa:'fa-solid fa-fire',fCol:'#FF0000',fBg:'#fee2e2',services:2},
      {id:'grammarly',name:'Grammarly',svg:'grammarly',color:'15c39a',fa:'fa-solid fa-check-circle',fCol:'#15c39a',fBg:'#d1fae5',services:3}
    ],
    'productivity':[
      {id:'gmail',name:'Gmail',svg:'gmail',color:'EA4335',fa:'fa-solid fa-envelope',fCol:'#EA4335',fBg:'#fee2e2',services:3},
      {id:'google-drive',name:'Google Drive',svg:'googledrive',color:'4285F4',fa:'fa-brands fa-google-drive',fCol:'#4285F4',fBg:'#dbeafe',services:4},
      {id:'microsoft-365',name:'Microsoft 365',svg:'microsoftoffice',color:'D83B01',fa:'fa-solid fa-file-word',fCol:'#D83B01',fBg:'#ffedd5',services:6,popular:true},
      {id:'notion',name:'Notion',svg:'notion',color:'000000',fa:'fa-solid fa-note-sticky',fCol:'#000000',fBg:'#f3f4f6',services:4,popular:true},
      {id:'slack',name:'Slack',svg:'slack',color:'4A154B',fa:'fa-brands fa-slack',fCol:'#4A154B',fBg:'#f3e8ff',services:3},
      {id:'zoom',name:'Zoom',svg:'zoom',color:'0B5CFF',fa:'fa-solid fa-video',fCol:'#0B5CFF',fBg:'#dbeafe',services:3},
      {id:'trello',name:'Trello',svg:'trello',color:'0052CC',fa:'fa-brands fa-trello',fCol:'#0052CC',fBg:'#dbeafe',services:2},
      {id:'clickup',name:'ClickUp',svg:'clickup',color:'7B68EE',fa:'fa-solid fa-list-check',fCol:'#7B68EE',fBg:'#ede9fe',services:2}
    ],
    'shopping':[
      {id:'amazon',name:'Amazon',svg:'amazon',color:'FF9900',fa:'fa-brands fa-amazon',fCol:'#FF9900',fBg:'#ffedd5',services:6,popular:true},
      {id:'flipkart',name:'Flipkart',svg:'flipkart',color:'2874F0',fa:'fa-solid fa-bag-shopping',fCol:'#2874F0',fBg:'#dbeafe',services:5,popular:true},
      {id:'myntra',name:'Myntra',svg:null,color:'FF3F6C',fa:'fa-solid fa-shirt',fCol:'#FF3F6C',fBg:'#fce7f3',services:4},
      {id:'meesho',name:'Meesho',svg:null,color:'FF0066',fa:'fa-solid fa-store',fCol:'#FF0066',fBg:'#fce7f3',services:3},
      {id:'zomato',name:'Zomato',svg:'zomato',color:'FF2B85',fa:'fa-solid fa-bowl-food',fCol:'#FF2B85',fBg:'#fce7f3',services:4},
      {id:'swiggy',name:'Swiggy',svg:'swiggy',color:'FC8019',fa:'fa-solid fa-burger',fCol:'#FC8019',fBg:'#ffedd5',services:4},
      {id:'blinkit',name:'Blinkit',svg:null,color:'F7C600',fa:'fa-solid fa-bolt',fCol:'#000000',fBg:'#fefce8',services:3},
      {id:'zepto',name:'Zepto',svg:null,color:'6900FF',fa:'fa-solid fa-bolt',fCol:'#6900FF',fBg:'#ede9fe',services:3}
    ],
    'finance':[
      {id:'gpay',name:'Google Pay',svg:'googlepay',color:'4285F4',fa:'fa-brands fa-google',fCol:'#4285F4',fBg:'#dbeafe',services:3},
      {id:'phonepe',name:'PhonePe',svg:'phonepe',color:'5F259F',fa:'fa-solid fa-mobile',fCol:'#5F259F',fBg:'#ede9fe',services:3},
      {id:'paytm',name:'Paytm',svg:'paytm',color:'00B9F1',fa:'fa-solid fa-qrcode',fCol:'#00B9F1',fBg:'#e0f2fe',services:4},
      {id:'paypal',name:'PayPal',svg:'paypal',color:'003087',fa:'fa-brands fa-paypal',fCol:'#003087',fBg:'#dbeafe',services:3},
      {id:'wise',name:'Wise',svg:'wise',color:'00B9FF',fa:'fa-solid fa-globe',fCol:'#00B9FF',fBg:'#e0f2fe',services:2},
      {id:'stripe',name:'Stripe',svg:'stripe',color:'635BFF',fa:'fa-brands fa-stripe',fCol:'#635BFF',fBg:'#e0e7ff',services:2}
    ],
    'education':[
      {id:'coursera',name:'Coursera',svg:'coursera',color:'0056D2',fa:'fa-solid fa-laptop',fCol:'#0056D2',fBg:'#dbeafe',services:4},
      {id:'udemy',name:'Udemy',svg:'udemy',color:'A435F0',fa:'fa-solid fa-chalkboard',fCol:'#A435F0',fBg:'#ede9fe',services:5,popular:true},
      {id:'duolingo',name:'Duolingo',svg:'duolingo',color:'58CC02',fa:'fa-solid fa-language',fCol:'#58CC02',fBg:'#dcfce7',services:3},
      {id:'skillshare',name:'Skillshare',svg:'skillshare',color:'00C8A0',fa:'fa-solid fa-lightbulb',fCol:'#00C8A0',fBg:'#d1fae5',services:3}
    ],
    'travel':[
      {id:'uber',name:'Uber',svg:'uber',color:'000000',fa:'fa-solid fa-car',fCol:'#000000',fBg:'#f3f4f6',services:3},
      {id:'ola',name:'Ola',svg:null,color:'8BC34A',fa:'fa-solid fa-taxi',fCol:'#8BC34A',fBg:'#dcfce7',services:3},
      {id:'makemytrip',name:'MakeMyTrip',svg:null,color:'FF5722',fa:'fa-solid fa-umbrella-beach',fCol:'#FF5722',fBg:'#ffedd5',services:4},
      {id:'booking',name:'Booking.com',svg:'bookingdotcom',color:'003580',fa:'fa-solid fa-hotel',fCol:'#003580',fBg:'#dbeafe',services:3},
      {id:'airbnb',name:'Airbnb',svg:'airbnb',color:'FF5A5F',fa:'fa-brands fa-airbnb',fCol:'#FF5A5F',fBg:'#fce7f3',services:2}
    ],
    'health':[
      {id:'cult-fit',name:'Cult.fit',svg:null,color:'111111',fa:'fa-solid fa-dumbbell',fCol:'#111111',fBg:'#f3f4f6',services:3},
      {id:'healthifyme',name:'HealthifyMe',svg:null,color:'4CAF50',fa:'fa-solid fa-apple-whole',fCol:'#4CAF50',fBg:'#dcfce7',services:3},
      {id:'headspace',name:'Headspace',svg:'headspace',color:'F47B56',fa:'fa-solid fa-spa',fCol:'#F47B56',fBg:'#ffedd5',services:2},
      {id:'fitbit',name:'Fitbit',svg:'fitbit',color:'00B0B9',fa:'fa-solid fa-watch',fCol:'#00B0B9',fBg:'#ccfbf1',services:2}
    ],
    'music':[
      {id:'spotify-music',name:'Spotify Premium',svg:'spotify',color:'1DB954',fa:'fa-brands fa-spotify',fCol:'#1DB954',fBg:'#d1fae5',services:5,popular:true},
      {id:'apple-music-only',name:'Apple Music',svg:'applemusic',color:'FA243E',fa:'fa-brands fa-apple',fCol:'#FA243E',fBg:'#fce7f3',services:4},
      {id:'youtube-music',name:'YouTube Music',svg:'youtubemusic',color:'FF0000',fa:'fa-brands fa-youtube',fCol:'#FF0000',fBg:'#fee2e2',services:3},
      {id:'gaana',name:'Gaana',svg:null,color:'E0282E',fa:'fa-solid fa-music',fCol:'#E0282E',fBg:'#fee2e2',services:3},
      {id:'jiosaavn',name:'JioSaavn',svg:null,color:'2BC5B4',fa:'fa-solid fa-headphones',fCol:'#2BC5B4',fBg:'#d1fae5',services:3}
    ],
    'cloud-storage':[
      {id:'google-one',name:'Google One',svg:'googledrive',color:'4285F4',fa:'fa-brands fa-google-drive',fCol:'#4285F4',fBg:'#dbeafe',services:4,popular:true},
      {id:'onedrive',name:'OneDrive',svg:'microsoftoffice',color:'0078D4',fa:'fa-solid fa-cloud',fCol:'#0078D4',fBg:'#dbeafe',services:3},
      {id:'dropbox',name:'Dropbox',svg:'dropbox',color:'0061FF',fa:'fa-brands fa-dropbox',fCol:'#0061FF',fBg:'#dbeafe',services:3},
      {id:'icloud',name:'iCloud',svg:'icloud',color:'007AFF',fa:'fa-brands fa-apple',fCol:'#007AFF',fBg:'#dbeafe',services:3},
      {id:'mega',name:'MEGA',svg:'mega',color:'D90007',fa:'fa-solid fa-cloud-arrow-up',fCol:'#D90007',fBg:'#fee2e2',services:2}
    ],
    'developer':[
      {id:'github',name:'GitHub',svg:'github',color:'181717',fa:'fa-brands fa-github',fCol:'#181717',fBg:'#e5e7eb',services:5,popular:true},
      {id:'gitlab',name:'GitLab',svg:'gitlab',color:'FC6D26',fa:'fa-brands fa-gitlab',fCol:'#FC6D26',fBg:'#ffedd5',services:3},
      {id:'vercel',name:'Vercel',svg:'vercel',color:'000000',fa:'fa-solid fa-triangle',fCol:'#000000',fBg:'#f3f4f6',services:3},
      {id:'netlify',name:'Netlify',svg:'netlify',color:'00C7B7',fa:'fa-solid fa-globe',fCol:'#00C7B7',fBg:'#ccfbf1',services:2},
      {id:'docker',name:'Docker',svg:'docker',color:'2496ED',fa:'fa-brands fa-docker',fCol:'#2496ED',fBg:'#dbeafe',services:2},
      {id:'firebase',name:'Firebase',svg:'firebase',color:'FFCA28',fa:'fa-solid fa-database',fCol:'#d97706',fBg:'#fefce8',services:2},
      {id:'cloudflare',name:'Cloudflare',svg:'cloudflare',color:'F38020',fa:'fa-solid fa-cloud',fCol:'#F38020',fBg:'#ffedd5',services:2}
    ],
    'vpn-security':[
      {id:'nordvpn',name:'NordVPN',svg:'nordvpn',color:'4687FF',fa:'fa-solid fa-shield',fCol:'#4687FF',fBg:'#dbeafe',services:4,popular:true},
      {id:'expressvpn',name:'ExpressVPN',svg:'expressvpn',color:'DA3940',fa:'fa-solid fa-lock',fCol:'#DA3940',fBg:'#fee2e2',services:3},
      {id:'surfshark',name:'Surfshark',svg:'surfshark',color:'1E90FF',fa:'fa-solid fa-shield-halved',fCol:'#1E90FF',fBg:'#dbeafe',services:2},
      {id:'protonvpn',name:'Proton VPN',svg:'protonvpn',color:'6D4AFF',fa:'fa-solid fa-key',fCol:'#6D4AFF',fBg:'#ede9fe',services:2},
      {id:'bitdefender',name:'Bitdefender',svg:'bitdefender',color:'EF2E2E',fa:'fa-solid fa-shield-virus',fCol:'#EF2E2E',fBg:'#fee2e2',services:2},
      {id:'malwarebytes',name:'Malwarebytes',svg:'malwarebytes',color:'0057D9',fa:'fa-solid fa-bug-slash',fCol:'#0057D9',fBg:'#dbeafe',services:2}
    ],
    'messaging':[
      {id:'whatsapp-biz',name:'WhatsApp Business',svg:'whatsapp',color:'25D366',fa:'fa-brands fa-whatsapp',fCol:'#25D366',fBg:'#dcfce7',services:3},
      {id:'telegram-premium',name:'Telegram Premium',svg:'telegram',color:'0088cc',fa:'fa-brands fa-telegram',fCol:'#0088cc',fBg:'#e0f2fe',services:3},
      {id:'discord-nitro',name:'Discord Nitro',svg:'discord',color:'5865F2',fa:'fa-brands fa-discord',fCol:'#5865F2',fBg:'#e0e7ff',services:4},
      {id:'slack-pro',name:'Slack Pro',svg:'slack',color:'4A154B',fa:'fa-brands fa-slack',fCol:'#4A154B',fBg:'#f3e8ff',services:2},
      {id:'teams',name:'Microsoft Teams',svg:'microsoftteams',color:'6264A7',fa:'fa-solid fa-users',fCol:'#6264A7',fBg:'#e0e7ff',services:2}
    ],
    'news-reading':[
      {id:'kindle',name:'Kindle Unlimited',svg:'amazon',color:'FF9900',fa:'fa-solid fa-book-open',fCol:'#FF9900',fBg:'#ffedd5',services:3},
      {id:'audible',name:'Audible',svg:'audible',color:'FF9900',fa:'fa-solid fa-headphones',fCol:'#FF9900',fBg:'#ffedd5',services:3},
      {id:'medium',name:'Medium',svg:'medium',color:'000000',fa:'fa-brands fa-medium',fCol:'#000000',fBg:'#f3f4f6',services:2},
      {id:'scribd',name:'Scribd',svg:'scribd',color:'1E7B85',fa:'fa-solid fa-book',fCol:'#1E7B85',fBg:'#ccfbf1',services:2}
    ],
    'recharge':[
      {id:'jio-prepaid',name:'Jio Prepaid',svg:null,color:'0A2885',fa:'fa-solid fa-sim-card',fCol:'#0A2885',fBg:'#dbeafe',services:6,popular:true},
      {id:'airtel-prepaid',name:'Airtel Prepaid',svg:null,color:'E40000',fa:'fa-solid fa-signal',fCol:'#E40000',fBg:'#fee2e2',services:6,popular:true},
      {id:'vi-prepaid',name:'Vi Prepaid',svg:null,color:'E60000',fa:'fa-solid fa-wifi',fCol:'#E60000',fBg:'#fee2e2',services:4},
      {id:'bsnl',name:'BSNL',svg:null,color:'008080',fa:'fa-solid fa-phone',fCol:'#008080',fBg:'#ccfbf1',services:3},
      {id:'jiofiber',name:'JioFiber',svg:null,color:'0A2885',fa:'fa-solid fa-wifi',fCol:'#0A2885',fBg:'#dbeafe',services:3},
      {id:'dth',name:'DTH Recharge',svg:null,color:'7c3aed',fa:'fa-solid fa-satellite-dish',fCol:'#7c3aed',fBg:'#ede9fe',services:4}
    ],
    'gift-cards':[
      {id:'amazon-gc',name:'Amazon Gift Card',svg:'amazon',color:'FF9900',fa:'fa-brands fa-amazon',fCol:'#FF9900',fBg:'#ffedd5',services:5,popular:true},
      {id:'google-play',name:'Google Play',svg:'googleplay',color:'4285F4',fa:'fa-brands fa-google-play',fCol:'#4285F4',fBg:'#dbeafe',services:4,popular:true},
      {id:'apple-gc',name:'Apple Gift Card',svg:'apple',color:'000000',fa:'fa-brands fa-apple',fCol:'#000000',fBg:'#f3f4f6',services:4},
      {id:'steam-gc',name:'Steam Wallet',svg:'steam',color:'171a21',fa:'fa-brands fa-steam',fCol:'#171a21',fBg:'#e5e7eb',services:3},
      {id:'flipkart-gc',name:'Flipkart Gift Card',svg:'flipkart',color:'2874F0',fa:'fa-solid fa-gift',fCol:'#2874F0',fBg:'#dbeafe',services:3},
      {id:'netflix-gc',name:'Netflix Gift Card',svg:'netflix',color:'E50914',fa:'fa-solid fa-film',fCol:'#E50914',fBg:'#fee2e2',services:2}
    ],
    'crypto':[
      {id:'binance',name:'Binance',svg:'binance',color:'F0B90B',fa:'fa-solid fa-coins',fCol:'#F0B90B',fBg:'#fefce8',services:3,popular:true},
      {id:'coinbase',name:'Coinbase',svg:'coinbase',color:'0052FF',fa:'fa-solid fa-bitcoin-sign',fCol:'#0052FF',fBg:'#dbeafe',services:3},
      {id:'metamask',name:'MetaMask',svg:'metamask',color:'E2761B',fa:'fa-solid fa-fox',fCol:'#E2761B',fBg:'#ffedd5',services:2},
      {id:'trustwallet',name:'Trust Wallet',svg:'trustwallet',color:'3375BB',fa:'fa-solid fa-wallet',fCol:'#3375BB',fBg:'#dbeafe',services:2}
    ],
    'business':[
      {id:'hubspot',name:'HubSpot',svg:'hubspot',color:'FF7A59',fa:'fa-solid fa-chart-simple',fCol:'#FF7A59',fBg:'#ffedd5',services:3},
      {id:'salesforce',name:'Salesforce',svg:'salesforce',color:'00A1E0',fa:'fa-solid fa-cloud',fCol:'#00A1E0',fBg:'#e0f2fe',services:3},
      {id:'zapier',name:'Zapier',svg:'zapier',color:'FF4A00',fa:'fa-solid fa-plug',fCol:'#FF4A00',fBg:'#ffedd5',services:2},
      {id:'asana',name:'Asana',svg:'asana',color:'F06A6A',fa:'fa-solid fa-list-check',fCol:'#F06A6A',fBg:'#fce7f3',services:2}
    ]
  },
  services: {},
  banners: [
    {badge:'NEW UPDATE',title:'Version 9.0 is Here!',subtitle:'Tailwind rebuild, clean banner & premium service pages.',cta:'Explore Now',style:'bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-400',icon:'fa-solid fa-rocket'},
    {badge:'FLASH DEAL',title:'Social Media Boost',subtitle:'Real followers starting at just ₹49!',cta:'View Plans',style:'bg-gradient-to-br from-rose-500 via-pink-600 to-red-600',icon:'fa-solid fa-hashtag'},
    {badge:'GAMING SALE',title:'Top-Up & Game On',subtitle:'Free Fire, BGMI, COD Mobile diamonds at lowest prices.',cta:'Top Up Now',style:'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500',icon:'fa-solid fa-gamepad'},
    {badge:'STREAMING',title:'Premium Streaming',subtitle:'Spotify, Netflix & more at unbeatable prices.',cta:'Get Premium',style:'bg-gradient-to-br from-emerald-500 via-teal-500 to-green-600',icon:'fa-solid fa-play'},
    {badge:'RECHARGE',title:'Instant Recharge',subtitle:'Jio, Airtel, Vi — instant confirmation guaranteed.',cta:'Recharge Now',style:'bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600',icon:'fa-solid fa-mobile'},
    {badge:'AI TOOLS',title:'AI & Creative Suite',subtitle:'ChatGPT, Canva, Midjourney & more.',cta:'Explore AI',style:'bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600',icon:'fa-solid fa-wand-magic-sparkles'}
  ],
  deals: [
    {name:'Instagram Followers',desc:'1,000 real followers',icon:'instagram',iconType:'svg',color:'E4405F',bg:'bg-pink-100',price:'₹49',old:'₹99',discount:'50%',ends:7200},
    {name:'Netflix Premium',desc:'1 Month UHD plan',icon:'netflix',iconType:'svg',color:'E50914',bg:'bg-red-100',price:'₹149',old:'₹649',discount:'77%',ends:10800},
    {name:'Spotify Premium',desc:'3 Months individual',icon:'spotify',iconType:'svg',color:'1DB954',bg:'bg-green-100',price:'₹29',old:'₹119',discount:'75%',ends:5400},
    {name:'Free Fire Diamonds',desc:'310 diamonds top-up',icon:'fa-solid fa-fire',iconType:'fa',color:'FF6B00',bg:'bg-orange-100',price:'₹49',old:'₹89',discount:'45%',ends:9000},
    {name:'YouTube Premium',desc:'Monthly subscription',icon:'youtube',iconType:'svg',color:'FF0000',bg:'bg-red-100',price:'₹39',old:'₹129',discount:'70%',ends:12600},
    {name:'ChatGPT Plus',desc:'1 Month shared access',icon:'openai',iconType:'svg',color:'10a37f',bg:'bg-emerald-100',price:'₹199',old:'₹399',discount:'50%',ends:14400}
  ],
  trending: [
    {name:'Instagram Followers',icon:'fa-brands fa-instagram',price:'₹49',old:'₹99',bg:'bg-gradient-to-br from-pink-100 to-rose-100',color:'#db2777'},
    {name:'Free Fire Diamonds',icon:'fa-solid fa-fire',price:'₹49',old:'₹89',bg:'bg-gradient-to-br from-orange-100 to-amber-100',color:'#c2410c'},
    {name:'Spotify Premium',icon:'fa-brands fa-spotify',price:'₹29',old:'₹119',bg:'bg-gradient-to-br from-green-100 to-emerald-100',color:'#059669'},
    {name:'YouTube Views',icon:'fa-brands fa-youtube',price:'₹99',old:'₹199',bg:'bg-gradient-to-br from-red-100 to-rose-100',color:'#dc2626'},
    {name:'Jio Recharge',icon:'fa-solid fa-sim-card',price:'₹239',old:'₹299',bg:'bg-gradient-to-br from-blue-100 to-indigo-100',color:'#1d4ed8'},
    {name:'Netflix Premium',icon:'fa-solid fa-film',price:'₹149',old:'₹649',bg:'bg-gradient-to-br from-red-100 to-red-200',color:'#b91c1c'},
    {name:'BGMI UC',icon:'fa-solid fa-gun',price:'₹79',old:'₹129',bg:'bg-gradient-to-br from-amber-100 to-yellow-100',color:'#b45309'},
    {name:'Amazon Gift Card',icon:'fa-brands fa-amazon',price:'₹100',old:'₹100',bg:'bg-gradient-to-br from-orange-100 to-amber-100',color:'#c2410c'}
  ],
  homeServices: [
    {name:'Instagram Followers',desc:'Real followers, instant delivery',icon:'fa-brands fa-instagram',bg:'bg-indigo-100',color:'#4f46e5'},
    {name:'Free Fire Diamonds',desc:'Top up at unbeatable prices',icon:'fa-solid fa-fire',bg:'bg-rose-100',color:'#be185d'},
    {name:'Spotify Premium',desc:'Ad-free music streaming',icon:'fa-brands fa-spotify',bg:'bg-amber-100',color:'#b45309'},
    {name:'Jio Prepaid Recharge',desc:'Fast & reliable top-ups',icon:'fa-solid fa-sim-card',bg:'bg-emerald-100',color:'#059669'},
    {name:'YouTube Premium',desc:'No ads, background play',icon:'fa-brands fa-youtube',bg:'bg-sky-100',color:'#0284c7'},
    {name:'Discord Nitro',desc:'Enhanced chat & streaming',icon:'fa-brands fa-discord',bg:'bg-purple-100',color:'#7c3aed'}
  ]
};

(function buildServices(){
  const serviceTypes = [
    {name:'Followers',desc:'Real & active followers',icon:'fa-solid fa-users'},
    {name:'Likes',desc:'High-quality likes',icon:'fa-solid fa-heart'},
    {name:'Views',desc:'Boost your content reach',icon:'fa-solid fa-eye'},
    {name:'Comments',desc:'Authentic engagement',icon:'fa-solid fa-comment'},
    {name:'Premium',desc:'Full premium access',icon:'fa-solid fa-crown'},
    {name:'Monthly Plan',desc:'Recurring subscription',icon:'fa-solid fa-calendar-check'},
    {name:'Top-Up',desc:'Instant currency top-up',icon:'fa-solid fa-coins'},
    {name:'Gift Card',desc:'Digital gift voucher',icon:'fa-solid fa-gift'},
    {name:'Recharge',desc:'Quick mobile recharge',icon:'fa-solid fa-bolt'},
    {name:'VPN Access',desc:'Secure connection',icon:'fa-solid fa-shield-halved'}
  ];
  for(const [catId,apps] of Object.entries(DB.applications)){
    apps.forEach(app=>{
      const numSvc = app.services || 4;
      const svcs = [];
      for(let i=0;i<Math.min(numSvc,6);i++){
        const st = serviceTypes[i % serviceTypes.length];
        svcs.push({
          id: app.id+'-svc-'+i,
          name: app.name+' '+st.name,
          desc: st.desc+' for '+app.name,
          icon: st.icon,
          packages:[
            {name:'Starter',price:'₹49',delivery:'1-2 hours',desc:'Basic package'},
            {name:'Standard',price:'₹149',delivery:'30-60 min',desc:'Most popular',popular:true},
            {name:'Premium',price:'₹349',delivery:'Instant',desc:'Best value'}
          ]
        });
      }
      DB.services[app.id] = svcs;
    });
  }
})();

/* ============================================================
   CORE ENGINE
   ============================================================ */
const NV = {
  history: [],
  toastTimer: null,
  dealTimers: [],
  bannerState: {current:0, timer:null, paused:false},

  init(){
    this.renderBanner();
    this.renderChips();
    this.renderCategories();
    this.renderDeals();
    this.renderTrending();
    this.renderHomeServices();
    this.renderSearchTags();
    this.initBannerCarousel();
    this.initChips();
    this.initBottomNav();
    this.initSearch();
    this.initReveal();
    this.startDealTimers();
  },

  icon(a, size=40){
    const common = `w-[${size}px] h-[${size}px] rounded-xl grid place-items-center flex-shrink-0 overflow-hidden`;
    if(a.svg){
      return `<div class="w-[${size}px] h-[${size}px] rounded-xl grid place-items-center flex-shrink-0 overflow-hidden" style="background:${a.fBg}"><img src="${S(a.svg,a.color)}" alt="${a.name}" class="w-[${Math.round(size*0.55)}px] h-[${Math.round(size*0.55)}px] object-contain" onerror="this.style.display='none';this.parentNode.innerHTML='<i class=\\'${a.fa}\\' style=\\'color:${a.fCol};font-size:${Math.round(size*0.45)}px\\'></i>'"></div>`;
    }
    return `<div class="w-[${size}px] h-[${size}px] rounded-xl grid place-items-center flex-shrink-0" style="background:${a.fBg};color:${a.fCol}"><i class="${a.fa}" style="font-size:${Math.round(size*0.45)}px"></i></div>`;
  },

  /* ---- BANNER ---- */
  renderBanner(){
    const track = document.getElementById('bannerTrack');
    const prog = document.getElementById('bannerProgress');
    track.innerHTML = DB.banners.map((b,i)=>`
      <div class="banner-slide ${b.style} ${i===0?'is-active':''} shimmer" data-i="${i}">
        <div class="absolute top-4 right-4 w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 grid place-items-center text-4xl shadow-xl">
          <i class="${b.icon}"></i>
        </div>
        <div class="relative z-10 flex flex-col gap-2 max-w-[70%]">
          <div class="inline-flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md border border-white/25 text-[10px] font-extrabold tracking-wider uppercase">
            <i class="fa-solid fa-bolt text-[9px]"></i> ${b.badge}
          </div>
          <div class="text-xl font-black leading-tight tracking-tight drop-shadow-md">${b.title}</div>
          <div class="text-xs font-medium text-white/90 leading-relaxed">${b.subtitle}</div>
          <button onclick="NV.toast('Coming soon!')" class="mt-1 w-fit inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-extrabold hover:scale-105 active:scale-95 transition shadow-lg">
            ${b.cta} <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `).join('');
    prog.innerHTML = DB.banners.map((_,i)=>`<div class="progress-seg ${i===0?'active':''}"></div>`).join('');
  },

  initBannerCarousel(){
    const slides = document.querySelectorAll('.banner-slide');
    const total = slides.length;
    const track = document.getElementById('bannerTrack');
    const goTo = (idx)=>{
      if(idx<0||idx>=total)return;
      slides[this.bannerState.current].classList.remove('is-active');
      this.bannerState.current=idx;
      slides[idx].classList.add('is-active');
      track.style.transform=`translateX(-${idx*100}%)`;
      document.querySelectorAll('.progress-seg').forEach((s,i)=>{
        s.classList.remove('active','done');
        if(i<idx)s.classList.add('done');
      });
      const active = document.querySelectorAll('.progress-seg')[idx];
      if(active){void active.offsetWidth; active.classList.add('active');}
    };
    const next=()=>goTo((this.bannerState.current+1)%total);
    const prev=()=>goTo((this.bannerState.current-1+total)%total);
    const start=()=>{clearInterval(this.bannerState.timer);this.bannerState.paused=false;this.bannerState.timer=setInterval(()=>{if(!this.bannerState.paused)next()},4000)};
    start();

    let sx=0,mx=0,drag=false;
    track.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;drag=true;track.classList.add('dragging');this.bannerState.paused=true;},{passive:true});
    track.addEventListener('touchmove',e=>{if(!drag)return;mx=e.touches[0].clientX-sx;track.style.transform=`translateX(calc(-${this.bannerState.current*100}% + ${mx}px))`;},{passive:true});
    track.addEventListener('touchend',()=>{if(!drag)return;drag=false;track.classList.remove('dragging');this.bannerState.paused=false;const t=track.offsetWidth*0.15;if(mx<-t)next();else if(mx>t)prev();else goTo(this.bannerState.current);mx=0;start();},{passive:true});

    const wrap=document.getElementById('bannerWrap');
    wrap.addEventListener('mouseenter',()=>this.bannerState.paused=true);
    wrap.addEventListener('mouseleave',()=>{this.bannerState.paused=false;start();});
  },

  /* ---- CHIPS ---- */
  renderChips(){
    const chips = [{icon:'fa-solid fa-grid-2',label:'All',catId:null}].concat(DB.categories.slice(0,10).map(c=>({icon:c.icon,label:c.name,catId:c.id})));
    document.getElementById('chipsScroll').innerHTML = chips.map((c,i)=>`
      <div class="chip flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-100 shadow-nvsm text-sm font-bold text-slate-800 whitespace-nowrap cursor-pointer transition hover:-translate-y-0.5 hover:shadow-nvmd ${i===0?'active bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-nvglow':''}" data-cat="${c.catId||''}">
        <i class="${c.icon}"></i><span>${c.label}</span>
      </div>
    `).join('');
  },

  initChips(){
    document.querySelectorAll('.chip').forEach(chip=>{
      chip.addEventListener('click',function(){
        document.querySelectorAll('.chip').forEach(c=>{
          c.classList.remove('active','bg-gradient-to-r','from-indigo-500','to-purple-500','text-white','border-transparent','shadow-nvglow');
          c.classList.add('bg-white','text-slate-800','border-slate-100');
        });
        this.classList.add('active','bg-gradient-to-r','from-indigo-500','to-purple-500','text-white','border-transparent','shadow-nvglow');
        this.classList.remove('bg-white','text-slate-800','border-slate-100');
        const catId=this.dataset.cat; if(catId) NV.navigate('category',{catId});
      });
    });
  },

  /* ---- CATEGORIES ---- */
  renderCategories(){
    const initial = DB.categories.slice(0,6);
    const more = DB.categories.slice(6);
    const colors = ['bg-indigo-100 text-indigo-600','bg-rose-100 text-rose-600','bg-amber-100 text-amber-600','bg-red-100 text-red-600','bg-emerald-100 text-emerald-600','bg-sky-100 text-sky-600','bg-violet-100 text-violet-600','bg-orange-100 text-orange-600','bg-teal-100 text-teal-600','bg-pink-100 text-pink-600','bg-indigo-100 text-indigo-700','bg-lime-100 text-lime-700','bg-slate-100 text-slate-600','bg-yellow-100 text-yellow-700'];
    const makeCard = (c,i)=>`
      <div onclick="NV.navigate('category',{catId:'${c.id}'}),false" class="card-shine group bg-white border border-slate-100 rounded-nvlg p-4 cursor-pointer transition hover:-translate-y-1 hover:shadow-nvlg hover:border-indigo-100 active:scale-[0.98]">
        <div class="w-12 h-12 rounded-xl ${colors[i%colors.length]} grid place-items-center text-xl mb-3 transition group-hover:scale-110">
          <i class="${c.icon}"></i>
        </div>
        <div class="text-sm font-extrabold text-slate-900 mb-1">${c.name}</div>
        <div class="text-xs font-semibold text-slate-500">${c.stats.apps} apps · ${c.stats.services}+ services</div>
      </div>
    `;
    document.getElementById('categoriesSection').innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <div class="text-lg font-black text-slate-900">Explore Categories</div>
      </div>
      <div class="grid grid-cols-2 gap-3" id="catGridMain">${initial.map((c,i)=>makeCard(c,i)).join('')}</div>
      <div class="grid grid-cols-2 gap-3 mt-3 hidden" id="catGridMore">${more.map((c,i)=>makeCard(c,i+6)).join('')}</div>
      <div class="text-center mt-4">
        <button id="catToggle" onclick="NV.toggleCategories()" class="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-100 border border-slate-200 rounded-full text-sm font-extrabold text-indigo-600 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition">
          See More <i class="fa-solid fa-chevron-down transition-transform"></i>
        </button>
      </div>
    `;
  },

  toggleCategories(){
    const more = document.getElementById('catGridMore');
    const btn = document.getElementById('catToggle');
    if(more.classList.contains('hidden')){
      more.classList.remove('hidden');
      btn.innerHTML = 'See Less <i class="fa-solid fa-chevron-down rotate-180 transition-transform"></i>';
    }else{
      more.classList.add('hidden');
      btn.innerHTML = 'See More <i class="fa-solid fa-chevron-down transition-transform"></i>';
    }
  },

  /* ---- DEALS ---- */
  renderDeals(){
    document.getElementById('dealsSection').innerHTML = `
      <div class="flex items-center justify-between px-5 mb-3">
        <div class="text-lg font-black text-slate-900">🔥 Best Deals</div>
      </div>
      <div class="flex gap-3 overflow-x-auto hide-scrollbar px-5" id="dealsScroll">
        ${DB.deals.map((d,i)=>this.dealCard(d,i)).join('')}
      </div>
    `;
  },

  dealCard(d,i){
    const icon = d.iconType==='svg'
      ? `<img src="${S(d.icon,d.color)}" alt="" class="w-9 h-9 object-contain" onerror="this.style.display='none';this.parentNode.innerHTML='<i class=\\'fa-solid fa-tag text-2xl\\' style=\\'color:#${d.color}\\'></i>'">`
      : `<i class="${d.icon} text-3xl" style="color:#${d.color}"></i>`;
    return `
      <div onclick="NV.toast('${d.name} deal — coming soon!')" class="flex-shrink-0 w-[280px] bg-white border border-slate-100 rounded-nvlg overflow-hidden shadow-nvsm hover:shadow-nvlg hover:-translate-y-1 transition cursor-pointer active:scale-[0.98]">
        <div class="flex">
          <div class="w-24 ${d.bg} grid place-items-center relative flex-shrink-0 py-5">
            <div class="absolute top-2 left-2 px-2 py-1 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-[10px] font-black shadow-md">-${d.discount}</div>
            ${icon}
          </div>
          <div class="p-4 flex-1 flex flex-col justify-center">
            <div class="text-sm font-extrabold text-slate-900 mb-1">${d.name}</div>
            <div class="text-xs text-slate-500 mb-2">${d.desc}</div>
            <div class="flex items-center justify-between">
              <div><span class="text-base font-black text-indigo-600">${d.price}</span> <span class="text-xs text-slate-400 line-through">${d.old}</span></div>
              <div class="deal-timer flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-100 text-[10px] font-black text-slate-600" data-ends="${d.ends}" id="dealTimer-${i}">
                <i class="fa-solid fa-clock text-red-500 animate-pulse"></i> <span>--:--:--</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  startDealTimers(){
    this.dealTimers.forEach(t=>clearInterval(t));
    this.dealTimers=[];
    document.querySelectorAll('.deal-timer').forEach(el=>{
      let ends = parseInt(el.dataset.ends);
      const tick=()=>{
        ends=Math.max(0,ends-1);
        const h=String(Math.floor(ends/3600)).padStart(2,'0');
        const m=String(Math.floor((ends%3600)/60)).padStart(2,'0');
        const s=String(ends%60).padStart(2,'0');
        el.querySelector('span').textContent=`${h}:${m}:${s}`;
      };
      tick(); this.dealTimers.push(setInterval(tick,1000));
    });
  },

  /* ---- TRENDING ---- */
  renderTrending(){
    document.getElementById('trendingSection').innerHTML = `
      <div class="flex items-center justify-between px-5 mb-3">
        <div class="text-lg font-black text-slate-900">Trending Now</div>
      </div>
      <div class="flex gap-3 overflow-x-auto hide-scrollbar px-5">
        ${DB.trending.map(t=>`
          <div onclick="NV.toast('${t.name} — coming soon!')" class="flex-shrink-0 w-40 bg-white border border-slate-100 rounded-nvlg overflow-hidden shadow-nvsm hover:shadow-nvlg hover:-translate-y-1.5 transition cursor-pointer active:scale-[0.97]">
            <div class="h-28 ${t.bg} grid place-items-center relative">
              <i class="${t.icon} text-4xl" style="color:${t.color}"></i>
              <div class="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-[9px] font-black tracking-wide">HOT</div>
            </div>
            <div class="p-3">
              <div class="text-xs font-extrabold text-slate-900 mb-1.5 leading-tight">${t.name}</div>
              <div class="flex items-center gap-1.5"><span class="text-sm font-black text-indigo-600">${t.price}</span><span class="text-xs text-slate-400 line-through">${t.old}</span></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  /* ---- HOME SERVICES ---- */
  renderHomeServices(){
    document.getElementById('servicesSection').innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <div class="text-lg font-black text-slate-900">Popular Services</div>
      </div>
      <div class="flex flex-col gap-2.5">
        ${DB.homeServices.map(s=>`
          <div onclick="NV.toast('${s.name} — opening soon!')" class="group flex items-center gap-4 p-3.5 bg-white border border-slate-100 rounded-nvmd shadow-nvsm hover:shadow-nvmd hover:translate-x-1 transition cursor-pointer active:scale-[0.98]">
            <div class="w-11 h-11 rounded-xl ${s.bg} grid place-items-center text-lg" style="color:${s.color}"><i class="${s.icon}"></i></div>
            <div class="flex-1 min-w-0">
              <div class="text-sm font-extrabold text-slate-900 truncate">${s.name}</div>
              <div class="text-xs font-medium text-slate-500 truncate">${s.desc}</div>
            </div>
            <div class="w-8 h-8 rounded-lg bg-slate-100 grid place-items-center text-slate-400 group-hover:bg-indigo-500 group-hover:text-white transition"><i class="fa-solid fa-chevron-right text-xs"></i></div>
          </div>
        `).join('')}
      </div>
    `;
  },

  /* ---- NAVIGATION ---- */
  navigate(type,data){
    this.history.push({type,data});
    const catId = data.catId || (data.category?data.category.id:null);
    const cat = catId ? DB.categories.find(c=>c.id===catId) : null;
    let html='';
    if(type==='category') html=this.categoryScreen(cat);
    else if(type==='application') html=this.applicationScreen(cat,data.app);
    else if(type==='service') html=this.serviceScreen(cat,data.app,data.service);
    else if(type==='product') html=this.productScreen(cat,data.app,data.service,data.pkg);
    const screen = document.getElementById('subScreen');
    screen.innerHTML=html;
    screen.classList.remove('hidden');
    setTimeout(()=>screen.classList.remove('translate-x-full'),10);
    document.body.style.overflow='hidden';
    setTimeout(()=>screen.scrollTop=0,50);
    this.bindFAQ(screen);
    this.startDealTimers();
  },

  goBack(){
    if(this.history.length<=1){this.closeSub();return;}
    this.history.pop();
    const prev=this.history[this.history.length-1];
    if(!prev||prev.type==='home'){this.closeSub();return;}
    const catId=prev.data.catId||(prev.data.category?prev.data.category.id:null);
    const cat=catId?DB.categories.find(c=>c.id===catId):null;
    let html='';
    if(prev.type==='category') html=this.categoryScreen(cat);
    else if(prev.type==='application') html=this.applicationScreen(cat,prev.data.app);
    else if(prev.type==='service') html=this.serviceScreen(cat,prev.data.app,prev.data.service);
    const screen=document.getElementById('subScreen');
    screen.innerHTML=html;
    screen.scrollTop=0;
    this.bindFAQ(screen);
  },

  closeSub(){
    const screen=document.getElementById('subScreen');
    screen.classList.add('translate-x-full');
    setTimeout(()=>screen.classList.add('hidden'),500);
    document.body.style.overflow='';
    this.history=[];
  },

  bindFAQ(root){
    root.querySelectorAll('.faq-q').forEach(q=>{
      q.addEventListener('click',()=>{
        const item=q.parentElement;
        item.classList.toggle('open');
        const a=item.querySelector('.faq-a');
        if(item.classList.contains('open')){a.style.maxHeight=a.scrollHeight+'px';a.style.paddingBottom='16px';}
        else{a.style.maxHeight='0px';a.style.paddingBottom='0px';}
      });
    });
  },

  /* ---- CATEGORY SCREEN ---- */
  categoryScreen(cat){
    const apps=DB.applications[cat.id]||[];
    const popular=apps.filter(a=>a.popular);
    const initial=apps.slice(0,6);
    const remaining=Math.max(0,apps.length-6);
    return `
      <div class="sticky top-0 z-20 flex items-center gap-3 px-5 py-4 bg-gradient-to-r ${cat.gradient} text-white shadow-lg">
        <button onclick="NV.goBack()" class="w-10 h-10 rounded-xl bg-white/15 border border-white/20 grid place-items-center hover:bg-white/25 transition"><i class="fa-solid fa-arrow-left"></i></button>
        <div class="flex-1 min-w-0 text-center">
          <div class="text-lg font-black truncate">${cat.name}</div>
          <div class="text-[10px] font-semibold opacity-80 truncate">Home / ${cat.name}</div>
        </div>
        <button onclick="NV.openSearch()" class="w-10 h-10 rounded-xl bg-white/15 border border-white/20 grid place-items-center hover:bg-white/25 transition"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div class="mx-5 mt-5 p-6 rounded-nvlg bg-gradient-to-r ${cat.gradient} text-white text-center relative overflow-hidden shadow-nvlg">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]"></div>
        <div class="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-white/20 backdrop-blur-md border border-white/25 grid place-items-center text-3xl mb-3"><i class="${cat.icon}"></i></div>
        <div class="text-xl font-black mb-1">${cat.name}</div>
        <div class="text-xs font-medium opacity-90 leading-relaxed">${cat.desc}</div>
      </div>
      <div class="grid grid-cols-3 gap-3 px-5 mt-4">
        <div class="bg-white border border-slate-100 rounded-nvmd p-3 text-center shadow-nvsm"><div class="text-xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">${cat.stats.apps}</div><div class="text-[10px] font-bold text-slate-500 mt-0.5">Apps</div></div>
        <div class="bg-white border border-slate-100 rounded-nvmd p-3 text-center shadow-nvsm"><div class="text-xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">${cat.stats.services}</div><div class="text-[10px] font-bold text-slate-500 mt-0.5">Services</div></div>
        <div class="bg-white border border-slate-100 rounded-nvmd p-3 text-center shadow-nvsm"><div class="text-xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">${cat.stats.users}</div><div class="text-[10px] font-bold text-slate-500 mt-0.5">Users</div></div>
      </div>
      ${popular.length?`
      <div class="mt-5">
        <div class="flex items-center justify-between px-5 mb-3"><div class="text-base font-black text-slate-900">⭐ Top Picks</div></div>
        <div class="flex gap-3 overflow-x-auto hide-scrollbar px-5 pb-1">
          ${popular.map(a=>this.topAppCard(a,cat)).join('')}
        </div>
      </div>`:''}
      <div class="mt-5 px-5 mb-3"><div class="text-base font-black text-slate-900">All Applications</div></div>
      <div class="grid grid-cols-2 gap-3 px-5" id="appGridMain-${cat.id}">${initial.map(a=>this.appCard(a,cat)).join('')}</div>
      <div class="hidden grid-cols-2 gap-3 px-5 mt-3" id="appGridMore-${cat.id}"></div>
      ${remaining?`
      <div class="text-center mt-4 mb-5 px-5">
        <button id="appToggle-${cat.id}" onclick="NV.toggleApps('${cat.id}')" class="w-full py-3 rounded-nvxl bg-slate-100 border border-slate-200 text-sm font-extrabold text-indigo-600 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition">
          Show ${remaining} More <i class="fa-solid fa-chevron-down ml-1 transition-transform"></i>
        </button>
      </div>`:'<div class="h-6"></div>'}
      <div class="px-5 mt-2 mb-3"><div class="text-base font-black text-slate-900">FAQ</div></div>
      <div class="px-5 pb-24">${this.categoryFAQ(cat)}</div>
    `;
  },

  topAppCard(a,cat){
    return `
      <div onclick="NV.navigate('application',{catId:'${cat.id}',app:${JSON.stringify(a).replace(/"/g,'&quot;')}})" class="flex-shrink-0 w-[130px] bg-white border border-slate-100 rounded-nvlg p-4 text-center shadow-nvsm hover:shadow-nvlg hover:-translate-y-1 transition cursor-pointer active:scale-[0.97] relative">
        <div class="w-13 h-13 mx-auto rounded-2xl grid place-items-center mb-2.5" style="background:${a.fBg}">
          ${a.svg?`<img src="${S(a.svg,a.color)}" class="w-7 h-7 object-contain" onerror="this.style.display='none';this.parentNode.innerHTML='<i class=\\'${a.fa}\\' style=\\'color:${a.fCol};font-size:20px\\'></i>'">`:`<i class="${a.fa}" style="color:${a.fCol};font-size:22px"></i>`}
        </div>
        <div class="text-xs font-extrabold text-slate-900 leading-tight mb-0.5">${a.name}</div>
        <div class="text-[10px] font-bold text-slate-500">${a.services} services</div>
        ${a.popular?`<div class="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[8px] font-black">TOP</div>`:''}
      </div>
    `;
  },

  appCard(a,cat){
    return `
      <div onclick="NV.navigate('application',{catId:'${cat.id}',app:${JSON.stringify(a).replace(/"/g,'&quot;')}})" class="flex items-center gap-3 p-3.5 bg-white border border-slate-100 rounded-nvmd shadow-nvsm hover:shadow-nvmd hover:-translate-y-0.5 transition cursor-pointer active:scale-[0.97] relative">
        ${this.icon(a,40)}
        <div class="min-w-0">
          <div class="text-xs font-extrabold text-slate-900 leading-tight">${a.name}</div>
          <div class="text-[10px] font-bold text-slate-500 mt-0.5">${a.services} services</div>
        </div>
        ${a.popular?`<div class="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[8px] font-black">HOT</div>`:''}
      </div>
    `;
  },

  toggleApps(catId){
    const apps=DB.applications[catId]||[];
    const more=document.getElementById('appGridMore-'+catId);
    const btn=document.getElementById('appToggle-'+catId);
    if(more.classList.contains('hidden')){
      more.innerHTML=apps.slice(6).map(a=>this.appCard(a,DB.categories.find(c=>c.id===catId))).join('');
      more.classList.remove('hidden');
      btn.innerHTML='Show Less <i class="fa-solid fa-chevron-down ml-1 rotate-180 transition-transform"></i>';
    }else{
      more.classList.add('hidden');
      btn.innerHTML=`Show ${Math.max(0,apps.length-6)} More <i class="fa-solid fa-chevron-down ml-1 transition-transform"></i>`;
    }
  },

  categoryFAQ(cat){
    const faqs=[
      {q:`What services are available under ${cat.name}?`,a:`We offer premium digital services for ${cat.name.toLowerCase()} across ${cat.stats.apps} apps.`},
      {q:'How fast is delivery?',a:'Most services deliver instantly or within minutes.'},
      {q:'Is it safe to purchase?',a:'Yes. All transactions are encrypted and secured.'},
      {q:'What payment methods are accepted?',a:'UPI, Google Pay, PhonePe, Paytm, cards, net banking & wallets.'}
    ];
    return faqs.map(f=>`
      <div class="faq-item bg-white border border-slate-100 rounded-nvmd mb-2 shadow-nvsm overflow-hidden">
        <div class="faq-q flex items-center justify-between p-4 cursor-pointer select-none">
          <span class="text-sm font-bold text-slate-900">${f.q}</span>
          <i class="fa-solid fa-chevron-down text-xs text-slate-400 transition-transform duration-300"></i>
        </div>
        <div class="faq-a px-4 text-xs font-medium text-slate-500 leading-relaxed max-h-0 overflow-hidden transition-all duration-300">${f.a}</div>
      </div>
    `).join('');
  },

  /* ---- APPLICATION SCREEN ---- */
  applicationScreen(cat,app){
    const svcs=DB.services[app.id]||[];
    return `
      <div class="sticky top-0 z-20 flex items-center gap-3 px-5 py-4 bg-gradient-to-r ${cat.gradient} text-white shadow-lg">
        <button onclick="NV.goBack()" class="w-10 h-10 rounded-xl bg-white/15 border border-white/20 grid place-items-center hover:bg-white/25 transition"><i class="fa-solid fa-arrow-left"></i></button>
        <div class="flex-1 min-w-0 text-center">
          <div class="text-lg font-black truncate">${app.name}</div>
          <div class="text-[10px] font-semibold opacity-80 truncate">Home / ${cat.name} / ${app.name}</div>
        </div>
        <button onclick="NV.openSearch()" class="w-10 h-10 rounded-xl bg-white/15 border border-white/20 grid place-items-center hover:bg-white/25 transition"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div class="mx-5 mt-5 p-6 rounded-nvlg bg-gradient-to-r ${cat.gradient} text-white text-center shadow-nvlg">
        <div class="w-16 h-16 mx-auto rounded-2xl grid place-items-center mb-3" style="background:${app.fBg}">
          ${app.svg?`<img src="${S(app.svg,app.color)}" class="w-9 h-9 object-contain" onerror="this.style.display='none';this.parentNode.innerHTML='<i class=\\'${app.fa}\\' style=\\'color:${app.fCol};font-size:28px\\'></i>'">`:`<i class="${app.fa}" style="color:${app.fCol};font-size:28px"></i>`}
        </div>
        <div class="text-xl font-black mb-1">${app.name}</div>
        <div class="text-xs font-medium opacity-90">Choose from ${app.services} premium services</div>
      </div>
      <div class="px-5 mt-5 mb-3"><div class="text-base font-black text-slate-900">Available Services</div></div>
      <div class="px-5 flex flex-col gap-2.5 pb-24">
        ${svcs.map(s=>`
          <div onclick="NV.navigate('service',{catId:'${cat.id}',app:${JSON.stringify(app).replace(/"/g,'&quot;')},service:${JSON.stringify(s).replace(/"/g,'&quot;')}})" class="group flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-nvmd shadow-nvsm hover:shadow-nvmd hover:translate-x-1 transition cursor-pointer active:scale-[0.98]">
            <div class="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0" style="background:${app.fBg};color:${app.fCol}">
              <i class="${s.icon} text-xl"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-sm font-extrabold text-slate-900">${s.name}</div>
              <div class="text-xs font-medium text-slate-500 mt-0.5">${s.desc}</div>
            </div>
            <div class="w-8 h-8 rounded-lg bg-slate-100 grid place-items-center text-slate-400 group-hover:bg-indigo-500 group-hover:text-white transition"><i class="fa-solid fa-chevron-right text-xs"></i></div>
          </div>
        `).join('')}
        ${svcs.length===0?`<div class="text-center py-10 text-slate-500 text-sm">No services available for ${app.name}.</div>`:''}
      </div>
    `;
  },

  /* ---- SERVICE SCREEN ---- */
  serviceScreen(cat,app,service){
    const pkgs=service.packages||[];
    return `
      <div class="sticky top-0 z-20 flex items-center gap-3 px-5 py-4 bg-gradient-to-r ${cat.gradient} text-white shadow-lg">
        <button onclick="NV.goBack()" class="w-10 h-10 rounded-xl bg-white/15 border border-white/20 grid place-items-center hover:bg-white/25 transition"><i class="fa-solid fa-arrow-left"></i></button>
        <div class="flex-1 min-w-0 text-center">
          <div class="text-lg font-black truncate">${service.name}</div>
          <div class="text-[10px] font-semibold opacity-80 truncate">Home / ${cat.name} / ${app.name} / ${service.name}</div>
        </div>
        <button onclick="NV.openSearch()" class="w-10 h-10 rounded-xl bg-white/15 border border-white/20 grid place-items-center hover:bg-white/25 transition"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div class="mx-5 mt-5 p-6 rounded-nvlg bg-gradient-to-r ${cat.gradient} text-white text-center shadow-nvlg">
        <div class="w-16 h-16 mx-auto rounded-2xl grid place-items-center mb-3" style="background:${app.fBg}">
          ${app.svg?`<img src="${S(app.svg,app.color)}" class="w-9 h-9 object-contain" onerror="this.style.display='none';this.parentNode.innerHTML='<i class=\\'${app.fa}\\' style=\\'color:${app.fCol};font-size:28px\\'></i>'">`:`<i class="${app.fa}" style="color:${app.fCol};font-size:28px"></i>`}
        </div>
        <div class="text-xl font-black mb-1">${service.name}</div>
        <div class="text-xs font-medium opacity-90">${service.desc}</div>
      </div>
      <div class="px-5 mt-5 mb-3"><div class="text-base font-black text-slate-900">Choose Package</div></div>
      <div class="px-5 grid grid-cols-1 gap-3 pb-5">
        ${pkgs.map(p=>`
          <div onclick="NV.navigate('product',{catId:'${cat.id}',app:${JSON.stringify(app).replace(/"/g,'&quot;')},service:${JSON.stringify(service).replace(/"/g,'&quot;')},pkg:${JSON.stringify(p).replace(/"/g,'&quot;')}})" class="relative p-4 bg-white border ${p.popular?'border-indigo-200 ring-1 ring-indigo-100':'border-slate-100'} rounded-nvlg shadow-nvsm hover:shadow-nvmd hover:-translate-y-0.5 transition cursor-pointer active:scale-[0.98]">
            ${p.popular?`<div class="absolute -top-2.5 left-4 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[9px] font-black">MOST POPULAR</div>`:''}
            <div class="flex items-center justify-between mb-2">
              <div class="text-base font-extrabold text-slate-900">${p.name} ${p.popular?'⭐':''}</div>
              <div class="text-lg font-black text-indigo-600">${p.price}</div>
            </div>
            <div class="text-xs font-medium text-slate-500 mb-3">${p.desc} · ${p.delivery} delivery</div>
            <div class="flex items-center gap-2 text-[10px] font-bold text-slate-500">
              <span class="px-2 py-1 rounded-md bg-slate-100"><i class="fa-solid fa-clock mr-1"></i>${p.delivery}</span>
              <span class="px-2 py-1 rounded-md bg-slate-100"><i class="fa-solid fa-shield-check mr-1"></i>Guaranteed</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="px-5 mt-2 mb-3"><div class="text-base font-black text-slate-900">FAQ</div></div>
      <div class="px-5 pb-5">${this.serviceFAQ()}</div>
      <div class="px-5 mb-3"><div class="text-base font-black text-slate-900">Customer Reviews</div></div>
      <div class="px-5 pb-24 flex flex-col gap-2.5">
        ${this.reviews()}
      </div>
    `;
  },

  serviceFAQ(){
    const faqs=[
      {q:'How long does delivery take?',a:'Starter: 1-2 hours, Standard: 30-60 minutes, Premium: Instant.'},
      {q:'Is there a guarantee?',a:'Yes! 30-day refill guarantee at no extra cost.'},
      {q:'Can I upgrade later?',a:'Absolutely. Just place a new order and we handle the rest.'}
    ];
    return faqs.map(f=>`
      <div class="faq-item bg-white border border-slate-100 rounded-nvmd mb-2 shadow-nvsm overflow-hidden">
        <div class="faq-q flex items-center justify-between p-4 cursor-pointer select-none">
          <span class="text-sm font-bold text-slate-900">${f.q}</span>
          <i class="fa-solid fa-chevron-down text-xs text-slate-400 transition-transform duration-300"></i>
        </div>
        <div class="faq-a px-4 text-xs font-medium text-slate-500 leading-relaxed max-h-0 overflow-hidden transition-all duration-300">${f.a}</div>
      </div>
    `).join('');
  },

  reviews(){
    const list=[{n:'Rahul S.',a:'R',bg:'from-indigo-500 to-purple-500',s:5,t:'Excellent service! Delivery was instant and quality is amazing.'},
      {n:'Priya M.',a:'P',bg:'from-pink-500 to-rose-500',s:5,t:'Best prices in the market. Support team responded within minutes.'},
      {n:'Amit K.',a:'A',bg:'from-amber-400 to-orange-500',s:4,t:'Good service overall. Delivery was a bit slow but quality made up for it.'}];
    return list.map(r=>`
      <div class="bg-white border border-slate-100 rounded-nvmd p-4 shadow-nvsm">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-8 h-8 rounded-full bg-gradient-to-r ${r.bg} grid place-items-center text-white text-xs font-black">${r.a}</div>
          <div class="text-sm font-bold text-slate-900">${r.n}</div>
          <div class="ml-auto text-amber-400 text-[10px]">${Array(5).fill(0).map((_,i)=>`<i class="${i<r.s?'fa-solid':'fa-regular'} fa-star"></i>`).join('')}</div>
        </div>
        <div class="text-xs font-medium text-slate-500 leading-relaxed">${r.t}</div>
      </div>
    `).join('');
  },

  /* ---- PRODUCT SCREEN ---- */
  productScreen(cat,app,service,pkg){
    const oldMap={'₹49':'₹99','₹149':'₹249','₹349':'₹549','₹29':'₹119','₹39':'₹129','₹199':'₹399'};
    const oldPrice=oldMap[pkg.price]||'₹'+Math.round(parseInt(pkg.price.replace(/\D/g,''))*1.8);
    const discount=Math.round((1-parseInt(pkg.price.replace(/\D/g,''))/parseInt(oldPrice.replace(/\D/g,'')))*100);
    return `
      <div class="sticky top-0 z-20 flex items-center gap-3 px-5 py-4 bg-gradient-to-r ${cat.gradient} text-white shadow-lg">
        <button onclick="NV.goBack()" class="w-10 h-10 rounded-xl bg-white/15 border border-white/20 grid place-items-center hover:bg-white/25 transition"><i class="fa-solid fa-arrow-left"></i></button>
        <div class="flex-1 min-w-0 text-center">
          <div class="text-base font-black truncate">${pkg.name} Package</div>
          <div class="text-[10px] font-semibold opacity-80 truncate">Home / ${cat.name} / ${app.name} / ${service.name}</div>
        </div>
        <button onclick="NV.openSearch()" class="w-10 h-10 rounded-xl bg-white/15 border border-white/20 grid place-items-center hover:bg-white/25 transition"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div class="mx-5 mt-5 p-6 rounded-nvlg bg-gradient-to-r ${cat.gradient} text-white text-center shadow-nvlg">
        <div class="w-16 h-16 mx-auto rounded-2xl grid place-items-center mb-3" style="background:${app.fBg}">
          ${app.svg?`<img src="${S(app.svg,app.color)}" class="w-9 h-9 object-contain" onerror="this.style.display='none';this.parentNode.innerHTML='<i class=\\'${app.fa}\\' style=\\'color:${app.fCol};font-size:28px\\'></i>'">`:`<i class="${app.fa}" style="color:${app.fCol};font-size:28px"></i>`}
        </div>
        <div class="text-xl font-black mb-1">${service.name}</div>
        <div class="text-xs font-medium opacity-90">${pkg.name} · ${pkg.desc}</div>
      </div>
      <div class="px-5 mt-5">
        <div class="bg-white border border-slate-100 rounded-nvlg p-5 shadow-nvmd">
          <div class="text-base font-extrabold text-slate-900 mb-2">${service.name} — ${pkg.name}</div>
          <div class="text-xs font-medium text-slate-500 leading-relaxed mb-4">Premium ${service.name.toLowerCase()} for ${app.name}. ${pkg.desc}. Delivered ${pkg.delivery} with 30-day refill guarantee.</div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-baseline gap-2"><span class="text-2xl font-black text-indigo-600">${pkg.price}</span><span class="text-sm font-semibold text-slate-400 line-through">${oldPrice}</span></div>
            <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-extrabold">${discount}% OFF</span>
          </div>
          <div class="flex flex-wrap gap-2 mb-5 text-[10px] font-bold text-slate-500">
            <span class="px-2.5 py-1.5 rounded-lg bg-slate-100"><i class="fa-solid fa-clock mr-1"></i>${pkg.delivery}</span>
            <span class="px-2.5 py-1.5 rounded-lg bg-slate-100"><i class="fa-solid fa-shield-check mr-1"></i>Guaranteed</span>
            <span class="px-2.5 py-1.5 rounded-lg bg-slate-100"><i class="fa-solid fa-rotate mr-1"></i>30-day refill</span>
          </div>
          <div class="flex gap-2.5">
            <button onclick="NV.toast('Added to wishlist! ♡')" class="w-12 h-12 rounded-nvmd bg-slate-100 text-slate-600 grid place-items-center hover:bg-slate-200 transition"><i class="fa-regular fa-heart"></i></button>
            <button onclick="NV.toast('Link copied! 📋')" class="w-12 h-12 rounded-nvmd bg-slate-100 text-slate-600 grid place-items-center hover:bg-slate-200 transition"><i class="fa-solid fa-share-nodes"></i></button>
            <button onclick="NV.toast('🎉 Proceeding to checkout...')" class="flex-1 h-12 rounded-nvmd bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-extrabold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition">Buy Now — ${pkg.price}</button>
          </div>
        </div>
      </div>
      <div class="px-5 mt-5 mb-3"><div class="text-base font-black text-slate-900">What You Get</div></div>
      <div class="px-5 pb-24 flex flex-col gap-2.5">
        ${['Instant Processing','Quick Delivery','30-Day Refill','24/7 Support'].map(x=>`
          <div class="flex items-center gap-4 p-3.5 bg-white border border-slate-100 rounded-nvmd shadow-nvsm">
            <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 grid place-items-center"><i class="fa-solid fa-check"></i></div>
            <div><div class="text-sm font-extrabold text-slate-900">${x}</div><div class="text-xs text-slate-500">Premium service included</div></div>
          </div>
        `).join('')}
      </div>
    `;
  },

  /* ---- SEARCH ---- */
  openSearch(){
    document.getElementById('searchOverlay').classList.remove('hidden');
    setTimeout(()=>document.getElementById('searchOverlay').classList.remove('opacity-0'),10);
    document.getElementById('searchTags').style.display='block';
    document.getElementById('searchResults').style.display='none';
    document.getElementById('searchInput').value='';
    document.body.style.overflow='hidden';
    setTimeout(()=>document.getElementById('searchInput').focus(),150);
  },

  closeSearch(){
    document.getElementById('searchOverlay').classList.add('opacity-0');
    setTimeout(()=>document.getElementById('searchOverlay').classList.add('hidden'),300);
    document.body.style.overflow='';
  },

  renderSearchTags(){
    const tags=['Instagram Followers','Free Fire Diamonds','Spotify Premium','YouTube Views','Telegram Members','BGMI UC','Netflix HD','Jio Recharge','Amazon Gift Card','ChatGPT Plus','Discord Nitro','Canva Pro'];
    document.getElementById('searchTagList').innerHTML=tags.map(t=>`<span onclick="NV.clickTag(this)" class="px-3 py-2 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/10 hover:bg-white/20 cursor-pointer transition">${t}</span>`).join('');
  },

  clickTag(el){
    document.getElementById('searchInput').value=el.textContent;
    this.search(el.textContent);
  },

  initSearch(){
    document.getElementById('searchInput').addEventListener('input',(e)=>{
      const q=e.target.value.trim();
      if(q.length>=2){document.getElementById('searchTags').style.display='none';document.getElementById('searchResults').style.display='block';this.search(q);}
      else{document.getElementById('searchTags').style.display='block';document.getElementById('searchResults').style.display='none';}
    });
    document.getElementById('searchOverlay').addEventListener('click',e=>{if(e.target===e.currentTarget)this.closeSearch();});
  },

  search(q){
    const ql=q.toLowerCase();
    const results=[];
    DB.categories.forEach(c=>{if(c.name.toLowerCase().includes(ql))results.push({type:'Category',name:c.name,icon:c.icon,color:'#'+c.color,catId:c.id});});
    for(const [catId,apps] of Object.entries(DB.applications)){
      apps.forEach(a=>{if(a.name.toLowerCase().includes(ql))results.push({type:'Application',name:a.name,catId,app:a});});
    }
    const div=document.getElementById('searchResults');
    if(results.length===0){div.innerHTML=`<div class="text-white/40 text-center py-10 text-sm">No results for "${q}"</div>`;return;}
    div.innerHTML=results.slice(0,15).map(r=>`
      <div onclick='NV.clickResult(${JSON.stringify(r).replace(/'/g,"&#39;")})' class="flex items-center gap-4 p-4 rounded-nvmd hover:bg-white/10 cursor-pointer transition text-white">
        <div class="w-10 h-10 rounded-xl grid place-items-center flex-shrink-0" style="background:${r.app?r.app.fBg:'rgba(255,255,255,0.1)'};color:${r.app?r.app.fCol:r.color}">
          ${r.app?`${r.app.svg?`<img src="${S(r.app.svg,r.app.color)}" class="w-5 h-5 object-contain" onerror="this.style.display='none';this.parentNode.innerHTML='<i class=\\'${r.app.fa}\\' style=\\'font-size:14px;color:${r.app.fCol}\\'></i>'">`:`<i class="${r.app.fa} text-sm"></i>`}`:`<i class="${r.icon}"></i>`}
        </div>
        <div><div class="text-sm font-bold">${r.name}</div><div class="text-[10px] font-semibold text-white/50">${r.type}</div></div>
      </div>
    `).join('');
  },

  clickResult(r){
    this.closeSearch();
    if(r.type==='Category')this.navigate('category',{catId:r.catId});
    else this.navigate('application',{catId:r.catId,app:r.app});
  },

  /* ---- BOTTOM NAV ---- */
  initBottomNav(){
    document.querySelectorAll('.nav-item').forEach(item=>{
      item.addEventListener('click',function(){
        document.querySelectorAll('.nav-item').forEach(i=>{i.classList.remove('active','text-indigo-600');i.classList.add('text-slate-400');});
        this.classList.add('active','text-indigo-600');this.classList.remove('text-slate-400');
        const idx=parseInt(this.dataset.i);
        if(idx===0){NV.closeSub();NV.closeSearch();window.scrollTo({top:0,behavior:'smooth'});}
        else if(idx===1)NV.openSearch();
        else NV.toast('Coming soon! 🚀');
      });
    });
  },

  initReveal(){
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('opacity-100','translate-y-0');});
    },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal-section').forEach(el=>obs.observe(el));
  },

  toast(msg){
    const el=document.getElementById('toast');
    el.textContent=msg;
    el.classList.add('translate-y-0');el.classList.remove('translate-y-24');
    clearTimeout(this.toastTimer);
    this.toastTimer=setTimeout(()=>{el.classList.remove('translate-y-0');el.classList.add('translate-y-24');},2200);
  }
};

document.addEventListener('DOMContentLoaded',()=>NV.init());
document.addEventListener('keydown',e=>{if(e.key==='Escape'){NV.closeSearch();NV.closeSub();}});
