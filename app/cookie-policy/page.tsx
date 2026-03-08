import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '쿠키 정책 | Galaxy S26 쿠팡 단독 혜택',
  description: 'prodquick.com 쿠키 정책',
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#050505] py-24 md:py-32">
      <article className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl">
          쿠키 정책 (Cookie Policy)
        </h1>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-12 text-zinc-300 leading-relaxed font-light space-y-8">
          <section>
            <p>본 웹사이트(prodquick.com)는 이용자에게 더 나은 웹 탐색 환경을 제공하고, 웹사이트 트래픽 분석을 위해 쿠키(Cookie)를 사용합니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">쿠키란 무엇인가요?</h2>
            <p>쿠키는 이용자가 웹사이트에 접속할 때 이용자의 컴퓨터나 모바일 기기에 저장되는 아주 작은 텍스트 파일입니다. 쿠키는 웹사이트가 이용자의 브라우저를 식별하고, 특정 정보를 기억하는 데 도움을 줍니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">어떤 쿠키를 사용하나요?</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li><strong>필수 쿠키:</strong> 웹사이트의 기본적인 기능(예: 페이지 이동)이 정상적으로 작동하기 위해 필요한 쿠키입니다.</li>
              <li><strong>분석/성능 쿠키:</strong> 구글 애널리틱스 등 통계 도구를 통해 방문자가 웹사이트를 어떻게 이용하는지 데이터를 익명으로 수집하여 서비스 개선에 활용합니다.</li>
              <li><strong>마케팅/추적 쿠키:</strong> 제휴 링크(쿠팡 파트너스 등) 클릭 시 파트너스 활동 수익 기여를 추적하기 위해 제휴 플랫폼에서 쿠키를 사용할 수 있습니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">쿠키 설정 거부 방법</h2>
            <p>이용자는 웹 브라우저의 옵션을 설정하여 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.</p>
            <p className="mt-2 text-zinc-400 text-sm">※ 단, 쿠키 저장을 거부할 경우 웹사이트의 일부 기능 사용에 제한이 있을 수 있습니다.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
