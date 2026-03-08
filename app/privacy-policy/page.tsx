import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개인정보처리방침 | Galaxy S26 쿠팡 단독 혜택',
  description: 'prodquick.com 개인정보처리방침',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050505] py-24 md:py-32">
      <article className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl">
          개인정보처리방침
        </h1>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-12 text-zinc-300 leading-relaxed font-light space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. 개인정보의 처리 목적</h2>
            <p>
              본 사이트(prodquick.com)는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 법령에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-400">
              <li>제휴 마케팅 링크 제공에 따른 트래픽 분석 및 통계</li>
              <li>서비스 이용 기록(IP 주소, 쿠키, 방문 일시 등) 수집</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. 수집하는 개인정보 항목 및 방법</h2>
            <p>본 사이트는 회원가입 시스템을 운영하지 않으며, 이메일, 이름, 연락처 등의 직접적인 개인 식별 정보를 수집하지 않습니다. 다만, 서비스 이용 과정에서 다음과 같은 정보가 자동으로 생성되어 수집될 수 있습니다.</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-400">
              <li>IP 주소, 쿠키, MAC 주소, 접속 로그, 방문 일시, 기기 정보</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. 통계 및 쿠키(Cookie) 활용</h2>
            <p>본 사이트는 이용자에게 최적화된 경험을 제공하기 위해 접속 통계 분석 도구를 사용하며, 이 과정에서 쿠키(Cookie)를 활용할 수 있습니다. 이용자는 언제든지 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. 개인정보의 보유 및 이용기간</h2>
            <p>본 사이트가 자동으로 수집하는 접속 로그 등의 통계 정보는 서비스 최적화 목적 달성 후 파기되거나 관련 법령에 명시된 기간 동안 보관됩니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. 개인정보 보호 담당자</h2>
            <p className="mb-2">관련 문의사항은 다음 연락처로 문의해 주시기 바랍니다.</p>
            <ul className="list-disc pl-6 text-zinc-400">
              <li>이메일: <a href="mailto:tlsfkaus0711@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">tlsfkaus0711@gmail.com</a></li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  )
}
