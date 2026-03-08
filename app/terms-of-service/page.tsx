import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '이용약관 | Galaxy S26 쿠팡 단독 혜택',
  description: 'prodquick.com 이용약관',
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#050505] py-24 md:py-32">
      <article className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl">
          이용약관
        </h1>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-12 text-zinc-300 leading-relaxed font-light space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">제 1 조 (목적)</h2>
            <p>본 약관은 prodquick.com(이하 "웹사이트")이 제공하는 제휴 마케팅 정보 제공 및 큐레이션 서비스(이하 "서비스")를 이용함에 있어, 웹사이트와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">제 2 조 (용어의 정의)</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li><strong>웹사이트:</strong> 상품 정보를 제공하고 외부 쇼핑몰(ex. 쿠팡)로 연결해 주는 정보 제공 채널(prodquick.com)입니다.</li>
              <li><strong>이용자:</strong> 웹사이트에 접속하여 본 약관에 따라 웹사이트가 제공하는 서비스를 받는 자를 말합니다.</li>
              <li><strong>제휴사:</strong> 본 사이트에 소개된 상품의 실제 판매를 담당하고 결제를 처리하는 외부 파트너(ex. 쿠팡)입니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">제 3 조 (서비스의 제공 및 한계)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-zinc-400">
              <li>웹사이트는 Galaxy S26 시리즈 등 주요 상품 및 서비스에 관한 정보를 큐레이션하여 제공하며, "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다"라는 원칙 하에 운영됩니다.</li>
              <li>웹사이트는 통신판매중개자 또는 통신판매업자가 아닙니다. 상품의 주문, 결제, 배송, 교환, 환불 등 모든 실제 거래는 제휴사(쿠팡 등)의 플랫폼에서 당해 제휴사의 책임 하에 이루어집니다.</li>
              <li>본 웹사이트가 제공하는 제품의 가격, 스펙, 혜택 정보 등은 제휴사의 사정에 따라 사전 예고 없이 변경될 수 있으며, 실제 구매 시점의 정보와 일치하지 않을 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">제 4 조 (면책조항)</h2>
            <p>본 웹사이트는 이용자가 제휴사를 통해 상품을 구매함에 있어 발생할 수 있는 품질 불만족, 배송 지연, 거래 분쟁 등에 대해 어떠한 법적 책임도 지지 않습니다. 모든 분쟁은 이용자와 실제 상품을 판매한 제휴사 간에 해결되어야 합니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">제 5 조 (지식재산권)</h2>
            <p>본 사이트에 표시된 외부 상품의 이미지, 브랜드명, 상표 등에 대한 권리는 해당 원저작자 및 제휴사(삼성전자, 쿠팡 등)에게 있습니다.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
