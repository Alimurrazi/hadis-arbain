export interface QuotePage {
  theme: string;
  highlight: string;
  quote: string;
  author: string;
  colors: string[];
  patterns: Array<{ color: string; opacity: number; type: 'geometric' | 'floral' | 'star' }>;
}

export const quotePages: QuotePage[] = [
  {
    theme: 'Faith & Trust',
    highlight: 'The power of unwavering faith in the Divine',
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
    theme: 'Knowledge & Wisdom',
    highlight: 'Seeking knowledge is a sacred duty',
    quote: 'The ink of the scholar is more sacred than the blood of the martyr.',
    author: 'Prophet Muhammad (ﷺ)',
    colors: ['#1e3a8a', '#3b82f6', '#daa520'],
    patterns: [
      { color: '#1e3a8a', opacity: 0.12, type: 'star' },
      { color: '#3b82f6', opacity: 0.1, type: 'geometric' },
      { color: '#daa520', opacity: 0.08, type: 'floral' },
    ],
  },
  {
    theme: 'Patience & Perseverance',
    highlight: 'The virtue of patience in times of trial',
    quote: 'And seek help through patience and prayer, and indeed it is difficult except for the humbly submissive.',
    author: 'Quran 2:45',
    colors: ['#065f46', '#10b981', '#6ee7b7'],
    patterns: [
      { color: '#065f46', opacity: 0.14, type: 'floral' },
      { color: '#10b981', opacity: 0.1, type: 'geometric' },
      { color: '#6ee7b7', opacity: 0.07, type: 'star' },
    ],
  },
  {
    theme: 'Compassion & Mercy',
    highlight: 'The boundless mercy of the Most Merciful',
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
    theme: 'Gratitude & Contentment',
    highlight: 'Finding peace through thankfulness',
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
    theme: 'Humility & Modesty',
    highlight: 'The beauty of a humble heart',
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
    theme: 'Unity & Brotherhood',
    highlight: 'The strength of community and togetherness',
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
    theme: 'Reflection & Remembrance',
    highlight: 'Finding tranquility in the remembrance of Allah',
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
