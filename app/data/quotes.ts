export interface QuotePage {
  id: string;
  theme: string;
  quote: string;
  author: string;
  colors: string[];
  patterns: Array<{ color: string; opacity: number; type: 'geometric' | 'floral' | 'star' }>;
}

export const quotePages: QuotePage[] = [
  {
    id: '১',
    theme: 'সমস্ত কাজ নিয়তের সাথে সম্পৃক্ত',
    quote: 'আমিরুল মুমিনিন আবু হাফস উমর বিন খাত্তাব রা. বলেন, ‘আমি নবী কারিম সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম-কে বলতে শুনেছি, সমস্ত কাজ (এর প্রাপ্য) নিয়তের সাথেই সম্পৃক্ত। আর প্রত্যেক ব্যক্তি যা নিয়ত করে (ফলাফল) তা-ই পায়। সুতরাং যার হিজরত হবে আল্লাহ ও তাঁর রাসূল সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম-এর উদ্দেশ্যে, তার হিজরত আল্লাহ ও তাঁর রাসূল সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম-এর জন্য হবে। আর যার হিজরত হবে দুনিয়া (পার্থিব বস্তু) অর্জন অথবা কোনো নারীকে বিয়ে করার স্বার্থে, তার হিজরত সে উদ্দেশ্যেই হবে, যেজন্য সে হিজরত করেছে।',
    author: 'বুখারি, মুসলিম',
    colors: ['#0d9488', '#14b8a6', '#5eead4'],
    patterns: [
      { color: '#0d9488', opacity: 0.15, type: 'geometric' },
      { color: '#14b8a6', opacity: 0.1, type: 'star' },
      { color: '#5eead4', opacity: 0.08, type: 'floral' },
    ],
  },
  {
    id: '২',
    theme: 'Knowledge & Wisdom',
    quote: `উমর রা. থেকে বর্ণিত, তিনি বলেন, একবার আমরা নবী কারিম সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম এর কাছে উপস্থিত ছিলাম। হঠাৎ ধবধবে সাদা পোশাক পরিহিত ও মাথায় গাঢ় কালো চুলবিশিষ্ট এক ব্যক্তি এসে হাজির হলেন। তার চেহারায় সফরের কোনো ছাপ দেখা যাচ্ছিল না এবং আমাদের কেউই তাকে চিনতে পারছিল না। তিনি এসে নবী কারিম সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম-এর সামনে বসে পড়লেন। তার হাঁটু রাসূল সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম-এর হাঁটুর সঙ্গে মিলালেন এবং দু’হাত নিজের দুই উরুর ওপর রাখলেন (অর্থাৎ আদবের সঙ্গে একজন ছাত্রের সামনে ছাত্রের মতো করে বসলেন)।,

    অতঃপর বললেন, হে মুহাম্মদ, আপনি আমাকে ইসলাম সম্পর্কে অবহিত করুন। উত্তরে তিনি বললেন, তুমি এই সাক্ষ্য দেবে যে, আল্লাহ ছাড়া কোনো ইলাহ নেই এবং মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম আল্লাহর রাসূল, সালাত আদায় করবে, যাকাত দেবে, রমজানের সাওম পালন করবে এবং সামর্থ্যবান হলে আল্লাহর ঘরের হজ করবে। তিনি (আগন্তুক) বললেন, আপনি সত্য কথা বলেছেন। (উমর রা. বলেন,) আমরা তাঁর এ কথায় অবাক হয়ে গেলাম যে, তিনি নিজেই জিজ্ঞেস করছেন আবার নিজেই তা সত্যায়নও করছেন!

    এরপর তিনি বললেন, হে মুহাম্মদ, আপনি আমাকে ঈমান সম্পর্কে অবহিত করুন। তিনি বললেন, তুমি ঈমান আনবে আল্লাহ তা‘আলার ওপর, তাঁর ফেরেশতাদের ওপর, তাঁর রাসূলগণের ওপর, তাঁর কিতাবসমূহের ওপর, আখিরাত দিবসের ওপর এবং ঈমান রাখবে তাকদিরের ভালো-মন্দের ওপর। আগন্তুক বললেন, আপনি সত্য বলেছেন। পুনরায় তিনি বললেন, হে মুহাম্মদ, আপনি আমাকে ইহসান সম্পর্কে অবহিত করুন। তিনি বললেন, তুমি এমনভাবে আল্লাহর ইবাদত করবে, যেন তুমি তাঁকে দেখছ। আর যদি তুমি তাঁকে না দেখো তাহলে নিশ্চয়ই তিনি তোমাকে দেখছেন।

    অতঃপর তিনি বললেন, আমাকে কিয়ামত (সংঘটিত হওয়ার সময়কাল) সম্পর্কে অবহিত করুন। তিনি বললেন, এ ব্যাপারে জিজ্ঞাসাকারী প্রশ্নকারীর চেয়ে বেশি অবগত নয়। তিনি বললেন, তাহলে আমাকে এর আলামতগুলো বলুন। তিনি বললেন, দাসী মানবকে প্রসব করবে। আর তুমি দেখতে পাবে, খালি পা, নগ্নপদ ও অভাবগ্রস্ত মেষ চালকরা সুউচ্চ ইমারত নির্মাণে প্রতিযোগিতা করবে।

    উমর রা. বলেন, অতঃপর তিনি চলে গেলেন। এরপর আমি দীর্ঘ একটা সময় অপেক্ষা করলাম। তারপর নবী কারিম সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম আমাকে বললেন, হে উমর, তুমি কি জানো, প্রশ্নকারী কে? আমি বললাম, আল্লাহ ও তাঁর রাসূল সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম-ই অধিক অবগত। তিনি বললেন, তিনি ছিলেন জিবরাঈল আ.। তোমাদেরকে দ্বীনের বিষয়াদি শিক্ষা দেওয়ার জন্য তিনি তোমাদের নিকট এসেছিলেন।`,
    author: 'মুসলিম, আবু দাউদ, তিরমিজি, নাসায়ি',
    colors: ['#1e3a8a', '#3b82f6', '#daa520'],
    patterns: [
      { color: '#1e3a8a', opacity: 0.12, type: 'star' },
      { color: '#3b82f6', opacity: 0.1, type: 'geometric' },
      { color: '#daa520', opacity: 0.08, type: 'floral' },
    ],
  },
  {
    id: '৩',
    theme: 'Patience & Perseverance',
    quote: 'আবু আব্দুর রহমান আবদুল্লাহ বিন উমর বিন খাত্তাব রা. থেকে বর্ণিত, তিনি বলেন, আমি নবী কারিম সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম-কে বলতে শুনেছি, ইসলামের ভিত্তি স্থাপিত হয়েছে পাঁচটি বিষয়ের ওপর— আল্লাহ ব্যতীত প্রকৃত কোনো উপাস্য নেই এবং মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম তাঁর রাসূল বলে সাক্ষ্য প্রদান করা, সালাত আদায় করা, যাকাত প্রদান করা, হজ করা এবং রমজানের সিয়াম পালন করা।',
    author: 'বুখারি, মুসলিম',
    colors: ['#065f46', '#10b981', '#6ee7b7'],
    patterns: [
      { color: '#065f46', opacity: 0.14, type: 'floral' },
      { color: '#10b981', opacity: 0.1, type: 'geometric' },
      { color: '#6ee7b7', opacity: 0.07, type: 'star' },
    ],
  },
  {
    id: '৪',
    theme: 'Compassion & Mercy',
    quote: 'The merciful will be shown mercy by the Most Merciful. Be merciful to those on earth and the One in the heavens will have mercy upon you.',
    author: 'Prophet Muhammad (ﷺ)',
    colors: ['#991b1b', '#dc2626', '#fca5a5'],
    patterns: [
      { color: '#991b1b', opacity: 0.13, type: 'geometric' },
      { color: '#dc2626', opacity: 0.09, type: 'floral' },
      { color: '#fca5a5', opacity: 0.06, type: 'star' },
    ],
  },
  {
    id: '৫',
    theme: 'Gratitude & Contentment',
    quote: 'If you are grateful, I will surely increase you in favor.',
    author: 'Quran 14:7',
    colors: ['#c2410c', '#f97316', '#fdba74'],
    patterns: [
      { color: '#c2410c', opacity: 0.12, type: 'star' },
      { color: '#f97316', opacity: 0.1, type: 'floral' },
      { color: '#fdba74', opacity: 0.08, type: 'geometric' },
    ],
  },
  {
    id: '৬',
    theme: 'Humility & Modesty',
    quote: 'And the servants of the Most Merciful are those who walk upon the earth in humility.',
    author: 'Quran 25:63',
    colors: ['#4c1d95', '#8b5cf6', '#c4b5fd'],
    patterns: [
      { color: '#4c1d95', opacity: 0.14, type: 'floral' },
      { color: '#8b5cf6', opacity: 0.09, type: 'star' },
      { color: '#c4b5fd', opacity: 0.07, type: 'geometric' },
    ],
  },
  {
    id: '৭',
    theme: 'Unity & Brotherhood',
    quote: 'The believers are but brothers, so make settlement between your brothers.',
    author: 'Quran 49:10',
    colors: ['#115e59', '#14b8a6', '#99f6e4'],
    patterns: [
      { color: '#115e59', opacity: 0.13, type: 'geometric' },
      { color: '#14b8a6', opacity: 0.1, type: 'floral' },
      { color: '#99f6e4', opacity: 0.06, type: 'star' },
    ],
  },
  {
    id: '৮',
    theme: 'Reflection & Remembrance',
    quote: 'Verily, in the remembrance of Allah do hearts find rest.',
    author: 'Quran 13:28',
    colors: ['#1e40af', '#60a5fa', '#dbeafe'],
    patterns: [
      { color: '#1e40af', opacity: 0.12, type: 'star' },
      { color: '#60a5fa', opacity: 0.09, type: 'geometric' },
      { color: '#dbeafe', opacity: 0.07, type: 'floral' },
    ],
  },
];
