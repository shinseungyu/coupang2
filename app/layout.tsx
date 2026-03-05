import type { ReactNode } from "react"
import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://prodquick.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Galaxy S26 Series | 쿠팡 단독 혜택',
  description: '더 깊어진 Galaxy AI와 압도적인 성능. 당신의 일상을 혁신할 Galaxy S26 시리즈를 쿠팡에서 단독 혜택과 함께 만나보세요.',
  keywords: 'Galaxy S26, 갤럭시 S26, 삼성 S26 울트라, 쿠팡 갤럭시, prodquick',
  openGraph: {
    title: 'Galaxy S26 Series | 쿠팡 단독 혜택',
    description: '더 깊어진 Galaxy AI와 압도적인 성능. 당신의 일상을 혁신할 Galaxy S26 시리즈를 쿠팡에서 단독 혜택과 함께 만나보세요.',
    url: '/',
    siteName: 'ProdQuick - Samsung x Coupang',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galaxy S26 Series | 쿠팡 단독 혜택',
    description: '더 깊어진 Galaxy AI와 압도적인 성능. 당신의 일상을 혁신할 Galaxy S26 시리즈를 쿠팡에서 단독 혜택과 함께 만나보세요.',
    images: ['https://prodquick.com/images/삼성전자-모바일-3세대-AI폰-갤럭시-S26-시리즈-울트라-언팩-블랙-6_DL.jpg'],
  },
  authors: [{ name: 'ProdQuick - Samsung x Coupang' }],
  publisher: 'ProdQuick - Samsung x Coupang',
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  verification: {
    google: '여기에_구글_인증코드_입력',
  },
}

// Generate JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'item': {
        '@type': 'Product',
        'name': 'Galaxy S26 Ultra',
        'image': 'https://prodquick.com/images/삼성전자-모바일-3세대-AI폰-갤럭시-S26-시리즈-울트라-언팩-블랙-6_DL.jpg',
        'description': '궁극의 프리미엄과 S펜의 만남',
        'brand': {
          '@type': 'Brand',
          'name': 'Samsung'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'reviewCount': '856'
        },
        'review': {
          '@type': 'Review',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5'
          },
          'author': {
            '@type': 'Person',
            'name': '쿠팡 이용자'
          }
        },
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'KRW',
          'price': '1699000',
          'priceValidUntil': '2026-12-31',
          'availability': 'https://schema.org/InStock'
        }
      }
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'item': {
        '@type': 'Product',
        'name': 'Galaxy S26+',
        'image': 'https://prodquick.com/images/삼성전자-모바일-3세대-AI폰-갤럭시-S26-시리즈-언팩-코발트-바이올렛_DL.jpg',
        'description': '더 커진 화면과 여유로운 배터리',
        'brand': {
          '@type': 'Brand',
          'name': 'Samsung'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.8',
          'reviewCount': '412'
        },
        'review': {
          '@type': 'Review',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5'
          },
          'author': {
            '@type': 'Person',
            'name': '쿠팡 이용자'
          }
        },
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'KRW',
          'price': '1353000',
          'priceValidUntil': '2026-12-31',
          'availability': 'https://schema.org/InStock'
        }
      }
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'item': {
        '@type': 'Product',
        'name': 'Galaxy S26',
        'image': 'https://prodquick.com/images/삼성전자-모바일-3세대-AI폰-갤럭시-S26-시리즈-언팩-스카이-블루_DL.jpg',
        'description': '컴팩트한 완벽함',
        'brand': {
          '@type': 'Brand',
          'name': 'Samsung'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.7',
          'reviewCount': '289'
        },
        'review': {
          '@type': 'Review',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '4',
            'bestRating': '5'
          },
          'author': {
            '@type': 'Person',
            'name': '쿠팡 이용자'
          }
        },
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'KRW',
          'price': '1155000',
          'priceValidUntil': '2026-12-31',
          'availability': 'https://schema.org/InStock'
        }
      }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <meta name="google-adsense-account" content="ca-pub-5378247298190063" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-blue-600 selection:text-white bg-[#050505] text-white">
        {children}
      </body>
    </html>
  )
}
