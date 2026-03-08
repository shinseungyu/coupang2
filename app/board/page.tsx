import posts from '@/data/posts.json'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Galaxy S26 활용 가이드 및 소식 | 쿠팡 단독 혜택',
  description: 'Galaxy S26 시리즈의 혁신적인 AI 기능 활용 가이드 및 쿠팡 단독 구매 혜택 관련 소식을 확인하세요.',
  alternates: { canonical: '/board' },
}

interface Post {
  id: number
  title: string
  date: string
  category: string
  summary: string
  content: string
  tags: string[]
}

interface Props {
  searchParams: Promise<{ id?: string }>
}

export default async function BoardPage({ searchParams }: Props) {
  const { id } = await searchParams
  const allPosts: Post[] = posts as Post[]

  if (id) {
    const post = allPosts.find((p) => p.id === Number(id))

    if (!post) {
      return (
        <main className="mx-auto max-w-4xl px-4 py-32 text-center min-h-[50vh]">
          <p className="text-zinc-400 mb-4">게시글을 찾을 수 없습니다.</p>
          <Link href="/board" className="text-blue-500 font-medium hover:underline">← 목록으로</Link>
        </main>
      )
    }

    return (
      <main className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Link href="/board" className="mb-8 inline-flex items-center text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors">
          ← 목록으로 돌아가기
        </Link>

        <article className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 shadow-2xl">
          <div className="mb-4">
            <span className="inline-flex rounded-md bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-400">
              {post.category}
            </span>
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl leading-tight">
            {post.title}
          </h1>
          <div className="mb-8 flex flex-wrap gap-4 border-b border-zinc-800 pb-8 text-sm text-zinc-400">
            <span className="flex items-center gap-1.5">📅 {post.date}</span>
            <span className="flex items-center gap-1.5">🏷️ {post.tags.join(', ')}</span>
          </div>

          <div className="prose prose-invert max-w-none text-lg leading-relaxed text-zinc-300 font-light">
            {post.content.split('\n').map((line, i) => (
              line.trim() === ''
                ? <div key={i} className="h-6"></div>
                : <p key={i} className="mb-4">{line}</p>
            ))}
          </div>
        </article>

        <section className="mt-20">
          <h2 className="mb-8 text-2xl font-bold text-white tracking-tight">이런 글은 어떠세요?</h2>
          <div className="flex flex-col gap-4">
            {allPosts.filter(p => p.id !== post.id).map(p => (
              <Link key={p.id} href={`/board?id=${p.id}`} className="block rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:bg-zinc-800/80 hover:border-zinc-700">
                <span className="mb-2 inline-block text-xs font-semibold text-blue-400">{p.category}</span>
                <p className="text-lg font-semibold text-zinc-100">{p.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#050505] pb-32">
      {/* Hero Header */}
      <section className="border-b border-white/5 bg-[#0a0a0a] relative overflow-hidden">
        {/* Abstract Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28 relative z-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <Smartphone className="h-8 w-8 text-blue-400" />
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl tracking-tighter">
            Galaxy S26 가이드 & 뉴스
          </h1>
          <p className="mx-auto max-w-2xl text-zinc-400 leading-relaxed text-lg font-light">
            새로운 갤럭시 AI 활용법부터 쿠팡만의 특별한 혜택 소식까지, 
            모바일을 빛내줄 유용한 정보들을 전해드립니다.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6">
          {allPosts.map((post) => (
            <Link key={post.id} href={`/board?id=${post.id}`} className="group flex flex-col justify-between gap-6 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all hover:bg-zinc-900/80 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] sm:flex-row sm:items-start">
              <div className="flex-1">
                <div className="mb-4 flex items-center justify-between sm:justify-start sm:gap-4">
                  <span className="inline-flex rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400 border border-blue-500/20">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-500">{post.date}</span>
                </div>
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-300">
                  {post.title}
                </h2>
                <p className="mb-6 text-base leading-relaxed text-zinc-400 line-clamp-2 font-light">
                  {post.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-400 border border-zinc-700/50">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex text-blue-500/0 group-hover:text-blue-500 transition-colors shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
