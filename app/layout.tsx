import type { ReactNode } from "react"
import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://prodquick.com'),
  title: 'Galaxy S26 Series 사전예약 | 쿠팡 단독 혜택',
  description: '더블 스토리지부터 혜택의 끝판왕. 비교할 수 없는 Galaxy S26 사전예약을 쿠팡에서 단독으로 빠르게 만나보세요.',
  keywords: 'Galaxy S26, 갤럭시 S26, S26 사전예약, 삼성 S26 울트라, 쿠팡 갤럭시, prodquick',
  openGraph: {
    title: 'Galaxy S26 Series 사전예약 | 쿠팡 단독 혜택',
    description: '더블 스토리지부터 혜택의 끝판왕. 비교할 수 없는 Galaxy S26 사전예약을 쿠팡에서 단독으로 빠르게 만나보세요.',
    url: '/',
    siteName: 'ProdQuick - Samsung x Coupang',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
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
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'KRW',
          'price': '1699000',
          'availability': 'https://schema.org/PreOrder'
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
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'KRW',
          'price': '1353000',
          'availability': 'https://schema.org/PreOrder'
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
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'KRW',
          'price': '1155000',
          'availability': 'https://schema.org/PreOrder'
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
