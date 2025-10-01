import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'About Us', href: '#About' },
  { label: 'Our Capabilities', href: '#cap' },
  { label: 'Testimonials', href: '#test' },
  { label: 'Social', href: '#socials' },
]

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'Why Choose Us',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'Over 10 years of scaling D2C and eCommerce brands, delivering 2x–20x ROAS with a powerhouse team of data-driven marketers and creative storytellers trusted across global markets.',
    link: 'Learn more',
    path: '/pages/about-us',  // 👈 new route
  },
  {
    heading: 'Our Capabilities',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'Expertise in paid media, SEO, social, affiliate marketing, web optimization, and performance-driven creative that converts',
    link: 'Learn more',
    path: '#cap',  // 👈 new route
  },
  {
    heading: 'The Truliyo Way',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'From research and strategy to smart targeting, funnel design, creative testing, and data-backed scaling, we deliver profitable growth with real-time insights and recommendations.',
    link: 'Learn more',
    path: '/pages/Our-process',  // 👈 new route
  },
]

// work-data
const WorkData: workdata[] = [
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar4.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar4.svg',
  },
]

// featured data
const FeaturedData: featureddata[] = [
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/images/featured/feat2.jpg',
  },
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/images/featured/feat2.jpg',
  },
]

// plans data
const PlansData = [
  {
    heading: 'Startup',
    price: {
      monthly: 19,
      yearly: 190,
    },
    user: 'per user',
    features: {
      profiles: '5 Social Profiles',
      posts: '5 Scheduled Posts Per Profile',
      templates: '400+ Templated',
      view: 'Calendar View',
      support: '24/7 Support',
    },
  },
  {
    heading: 'Business',
    price: {
      monthly: 29,
      yearly: 290,
    },
    user: 'per user',
    features: {
      profiles: '10 Social Profiles',
      posts: '5 Scheduled Posts Per Profile',
      templates: '600+ Templated',
      view: 'Calendar View',
      support: '24/7 VIP Support',
    },
  },
  {
    heading: 'Agency',
    price: {
      monthly: 59,
      yearly: 590,
    },
    user: 'per user',
    features: {
      profiles: '100 Social Profiles',
      posts: '100 Scheduled Posts Per Profile',
      templates: '800+ Templated',
      view: 'Calendar View',
      support: '24/7 VIP Support',
    },
  },
]

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'Sushant  Kumar',
    profession: 'Director, @Glance',
    comment:
      'I highly recommend Sam Gupta for his exceptional work on the Roposo Clout platform. His expertise in digital transformation and e-commerce strategy has been invaluable.',
    imgSrc: '/images/testimonial/image.png',
    rating: 5,
  },
  {
    name: 'Ankit Tarway',
    profession: 'COO, BacktoBed',
    comment:
      'Truliyo Digital helped us scale our e-commerce store based in australlia with profitable ad campaings. Truly impressed with the results',
    imgSrc: '/images/testimonial/image (2-1).png',
    rating: 4,
  },
  {
    name: 'Jessica Stone',
    profession: 'Store Owner',
    comment:
      'With Truliyo Digital managing 360° marketing, I could focus on my brand while their strategies boosted our rankings, traffic, and growth.',
    imgSrc: '/images/testimonial/jessica.png',
    rating: 4,
  },
  {
    name: 'David Anderson',
    profession: '(Store Owner)',
    comment:
      'Truliyo Digital built us a modern, responsive website that’s both fast and user-friendly. Highly recommend them.',
    imgSrc: '/images/testimonial/david.png',
    rating: 4,
  }
]

// artical data
const ArticlesData: articles[] = [
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article3.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article3.png',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Menu',
    links: [
      { label: 'About Us', href: '#About' },
      { label: 'Our Capabilities', href: '#cap' },
      { label: 'Testimonials', href: '#test' },
      { label: 'Socials', href: '#socials' },
    ],
  },
  // {
  //   section: 'Category',
  //   links: [
  //     { label: 'Design', href: '/' },
  //     { label: 'Mockup', href: '/' },
  //     { label: 'View all', href: '/' },
  //     { label: 'Log In', href: '/' },
  //   ],
  // },
  // {
  //   section: 'Pages',
  //   links: [
  //     { label: '404', href: '/' },
  //     { label: 'Instructions', href: '/' },
  //     { label: 'License', href: '/' },
  //   ],
  // },
  // {
  //   section: 'Others',
  //   links: [
  //     { label: 'Styleguide', href: '/' },
  //     { label: 'Changelog', href: '/' },
  //   ],
  // },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}
