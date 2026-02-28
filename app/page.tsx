'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Truck, CreditCard, ShieldCheck, ChevronRight, Smartphone, Zap, Camera, Battery, PenTool } from 'lucide-react';

export default function Page() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2026-03-05T23:59:59") - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  // Prevent hydration error due to Date differences
  if (!isClient) {
    return null;
  }

  return (
    <div className="pb-24 overflow-x-hidden">
      {/* Navbar -> header */}
      <header className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter">SAMSUNG <span className="text-blue-500 font-normal">| Coupang</span></div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#hero" className="hover:text-white transition-colors">사전예약</a>
            <a href="#benefits" className="hover:text-white transition-colors">단독혜택</a>
            <a href="#lineup" className="hover:text-white transition-colors">라인업</a>
            <a href="#specs" className="hover:text-white transition-colors">스펙비교</a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center items-center">
          {/* Abstract Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              사전예약 진행중 (2.27 ~ 3.5)
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]">
              압도적 혁신의 시작<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                Galaxy S26 Series
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
              지금 안 사면 손해. 256GB 가격으로 512GB를 받는 <br className="hidden md:block"/>
              <strong className="text-white font-semibold">더블 스토리지 혜택</strong>이 곧 종료됩니다.
            </p>

            {/* Countdown Timer */}
            <div className="flex flex-col items-center justify-center mb-12">
              <p className="text-sm text-zinc-500 uppercase tracking-widest mb-4 font-semibold">혜택 종료까지 남은 시간</p>
              <div className="flex gap-4 md:gap-6 text-center">
                <div className="flex flex-col">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-3xl md:text-5xl font-mono font-bold text-white shadow-xl">
                    {formatNumber(timeLeft.days)}
                  </div>
                  <span className="text-xs text-zinc-500 mt-2 uppercase tracking-wider">Days</span>
                </div>
                <div className="text-3xl md:text-5xl font-mono font-bold text-zinc-700 mt-4 md:mt-6">:</div>
                <div className="flex flex-col">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-3xl md:text-5xl font-mono font-bold text-white shadow-xl">
                    {formatNumber(timeLeft.hours)}
                  </div>
                  <span className="text-xs text-zinc-500 mt-2 uppercase tracking-wider">Hours</span>
                </div>
                <div className="text-3xl md:text-5xl font-mono font-bold text-zinc-700 mt-4 md:mt-6">:</div>
                <div className="flex flex-col">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-3xl md:text-5xl font-mono font-bold text-white shadow-xl">
                    {formatNumber(timeLeft.minutes)}
                  </div>
                  <span className="text-xs text-zinc-500 mt-2 uppercase tracking-wider">Mins</span>
                </div>
                <div className="text-3xl md:text-5xl font-mono font-bold text-zinc-700 mt-4 md:mt-6">:</div>
                <div className="flex flex-col">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-3xl md:text-5xl font-mono font-bold text-blue-400 shadow-xl shadow-blue-900/20">
                    {formatNumber(timeLeft.seconds)}
                  </div>
                  <span className="text-xs text-blue-500/70 mt-2 uppercase tracking-wider">Secs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">오직 쿠팡에서만 누리는<br/>압도적 혜택</h2>
              <p className="text-zinc-400 text-lg">자급제폰, 혜택의 끝판왕을 만나보세요.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Benefit 1 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 transition-colors group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">더블 스토리지</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  256GB 가격에 512GB로 무상 업그레이드. 용량 걱정 없이 마음껏 촬영하세요.
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 transition-colors group">
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Truck className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">3월 6일 도착 보장</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  누구보다 빠르게. 사전예약 고객 대상 로켓배송으로 3월 6일(금) 100% 도착 보장.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 transition-colors group">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">최대 7% 즉시할인</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  삼성/국민/신한/롯데 카드 결제 시 최대 7% 즉시 할인 혜택 제공.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 transition-colors group">
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">쿠팡안심케어</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  파손, 분실 걱정 끝. 쿠팡에서 구매하고 든든한 보험 혜택까지 한 번에.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lineup & Ecosystem Section */}
        <section id="lineup" className="py-24 px-6 bg-[#050505] relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">사전예약 라인업</h2>
              <p className="text-zinc-400 text-lg">원하는 모델을 선택하고 사전예약 혜택을 확인하세요.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* S26 */}
              <a href="https://link.coupang.com/a/dUWlRF" target="_blank" rel="noopener noreferrer" className="group block bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-colors">
                <div className="aspect-[4/5] relative bg-zinc-800/50 p-8 flex items-center justify-center overflow-hidden">
                  <img src="/images/삼성전자-모바일-3세대-AI폰-갤럭시-S26-시리즈-언팩-스카이-블루_DL.jpg" alt="Galaxy S26" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Galaxy S26</h3>
                  <p className="text-zinc-400 text-sm mb-4">컴팩트한 디자인, 강력한 성능</p>
                  <div className="flex items-center text-blue-400 font-medium text-sm">
                    사전예약 하기 <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
                {/* Coupang iframe */}
                <div className="flex justify-center mt-4 mb-4">
                  <iframe src="https://coupa.ng/clK2t7" width="120" height="240" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url"></iframe>
                </div>
              </a>

              {/* S26+ (Redirecting to Ultra as requested) */}
              <a href="https://link.coupang.com/a/dUWk4F" target="_blank" rel="noopener noreferrer" className="group block bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-colors">
                <div className="aspect-[4/5] relative bg-zinc-800/50 p-8 flex items-center justify-center overflow-hidden">
                  <img src="/images/삼성전자-모바일-3세대-AI폰-갤럭시-S26-시리즈-언팩-코발트-바이올렛_DL.jpg" alt="Galaxy S26+" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Galaxy S26+</h3>
                  <p className="text-zinc-400 text-sm mb-4">더 커진 화면과 여유로운 배터리</p>
                  <div className="flex items-center text-blue-400 font-medium text-sm">
                    사전예약 하기 <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
                {/* Coupang iframe (Ultra) */}
                <div className="flex justify-center mt-4 mb-4">
                  <iframe src="https://coupa.ng/clK2uz" width="120" height="240" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url"></iframe>
                </div>
              </a>

              {/* S26 Ultra */}
              <a href="https://link.coupang.com/a/dUWk4F" target="_blank" rel="noopener noreferrer" className="group block bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-colors relative">
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">BEST</div>
                <div className="aspect-[4/5] relative bg-zinc-800/50 p-8 flex items-center justify-center overflow-hidden">
                  <img src="/images/삼성전자-모바일-3세대-AI폰-갤럭시-S26-시리즈-울트라-언팩-블랙-6_DL.jpg" alt="Galaxy S26 Ultra" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Galaxy S26 Ultra</h3>
                  <p className="text-zinc-400 text-sm mb-4">궁극의 프리미엄과 S펜의 만남</p>
                  <div className="flex items-center text-blue-400 font-medium text-sm">
                    사전예약 하기 <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
                {/* Coupang iframe */}
                <div className="flex justify-center mt-4 mb-4">
                  <iframe src="https://coupa.ng/clK2wd" width="120" height="240" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url"></iframe>
                </div>
              </a>
            </div>

            {/* Buds4 Pro Section */}
            <div className="mt-24 pt-24 border-t border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                    사전예약 특별 혜택
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    완벽한 에코시스템의 완성<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Galaxy Buds4 Pro</span>
                  </h3>
                  <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    Galaxy S26 시리즈 사전예약 고객님께 드리는 특별한 혜택. 
                    압도적인 노이즈 캔슬링과 360 오디오로 차원이 다른 사운드를 경험하세요. 
                    사전예약 기간 동안 기기와 함께 구매 시 <strong className="text-white">최대 50% 할인 혜택</strong>이 제공됩니다.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://link.coupang.com/a/dUWneV" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                      Buds4 Pro 구매하기 <ChevronRight className="w-5 h-5" />
                    </a>
                    <a href="https://link.coupang.com/a/dUWomm" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                      Buds4 구매하기 <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                  <a href="https://link.coupang.com/a/dUWneV" target="_blank" rel="noopener noreferrer" className="block group overflow-hidden rounded-3xl bg-zinc-900/50 border border-zinc-800 aspect-square relative">
                    <img src="/images/삼성전자-모바일-갤럭시-언팩-2026-갤럭시-버즈4-프로-4-DL.png" alt="Galaxy Buds4 Pro Earbuds" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <span className="text-white font-medium flex items-center gap-2">구매하기 <ChevronRight className="w-4 h-4" /></span>
                    </div>
                  </a>
                  <a href="https://link.coupang.com/a/dUWomm" target="_blank" rel="noopener noreferrer" className="block group overflow-hidden rounded-3xl bg-zinc-900/50 border border-zinc-800 aspect-square relative mt-8">
                    <img src="/images/삼성전자-모바일-갤럭시-언팩-2026-갤럭시-버즈4-프로-6-DL.png" alt="Galaxy Buds4 Case" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <span className="text-white font-medium flex items-center gap-2">구매하기 <ChevronRight className="w-4 h-4" /></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specs Section */}
        <section id="specs" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">어떤 모델이<br/>당신에게 맞을까요?</h2>
              <p className="text-zinc-400 text-lg">한눈에 비교하는 S26 시리즈 스펙</p>
            </div>

            <div className="overflow-x-auto pb-8">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-6 border-b border-zinc-800 text-zinc-500 font-medium w-1/4"></th>
                    <th className="p-6 border-b border-zinc-800 w-1/4">
                      <div className="text-2xl font-bold text-white mb-1">Galaxy S26</div>
                      <div className="text-sm text-zinc-400 font-normal">컴팩트한 완벽함</div>
                    </th>
                    <th className="p-6 border-b border-zinc-800 w-1/4">
                      <div className="text-2xl font-bold text-white mb-1">Galaxy S26+</div>
                      <div className="text-sm text-zinc-400 font-normal">더 커진 화면과 배터리</div>
                    </th>
                    <th className="p-6 border-b border-zinc-800 w-1/4 bg-blue-900/10 rounded-t-2xl">
                      <div className="text-2xl font-bold text-blue-400 mb-1">Galaxy S26 Ultra</div>
                      <div className="text-sm text-blue-300/70 font-normal">궁극의 프리미엄</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  <tr className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-6 border-b border-zinc-800 text-zinc-400 flex items-center gap-3">
                      <Smartphone className="w-5 h-5" /> 디스플레이
                    </td>
                    <td className="p-6 border-b border-zinc-800 font-medium">15.7cm (6.2") FHD+</td>
                    <td className="p-6 border-b border-zinc-800 font-medium">17.0cm (6.7") QHD+</td>
                    <td className="p-6 border-b border-zinc-800 font-medium bg-blue-900/5">17.3cm (6.8") QHD+ Flat</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-6 border-b border-zinc-800 text-zinc-400 flex items-center gap-3">
                      <Camera className="w-5 h-5" /> 메인 카메라
                    </td>
                    <td className="p-6 border-b border-zinc-800 font-medium">50MP 광각</td>
                    <td className="p-6 border-b border-zinc-800 font-medium">50MP 광각</td>
                    <td className="p-6 border-b border-zinc-800 font-medium bg-blue-900/5 text-blue-300">200MP 광각 (초고해상도)</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-6 border-b border-zinc-800 text-zinc-400 flex items-center gap-3">
                      <Battery className="w-5 h-5" /> 배터리
                    </td>
                    <td className="p-6 border-b border-zinc-800 font-medium">4,000 mAh</td>
                    <td className="p-6 border-b border-zinc-800 font-medium">4,900 mAh</td>
                    <td className="p-6 border-b border-zinc-800 font-medium bg-blue-900/5">5,000 mAh</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-6 border-b border-zinc-800 text-zinc-400 flex items-center gap-3">
                      <PenTool className="w-5 h-5" /> S펜 지원
                    </td>
                    <td className="p-6 border-b border-zinc-800 font-medium text-zinc-600">-</td>
                    <td className="p-6 border-b border-zinc-800 font-medium text-zinc-600">-</td>
                    <td className="p-6 border-b border-zinc-800 font-medium bg-blue-900/5 text-blue-400">내장 지원</td>
                  </tr>
                  <tr>
                    <td className="p-6 text-zinc-400"></td>
                    <td className="p-6">
                      <div className="text-xl font-bold mb-1">1,155,000원~</div>
                      <div className="text-sm text-zinc-500 line-through">1,255,000원</div>
                    </td>
                    <td className="p-6">
                      <div className="text-xl font-bold mb-1">1,353,000원~</div>
                      <div className="text-sm text-zinc-500 line-through">1,453,000원</div>
                    </td>
                    <td className="p-6 bg-blue-900/5 rounded-b-2xl">
                      <div className="text-xl font-bold text-blue-400 mb-1">1,699,000원~</div>
                      <div className="text-sm text-blue-500/50 line-through">1,799,000원</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Coupang Disclaimer Section */}
        <section className="bg-[#050505] py-12 px-6 text-zinc-500 text-xs text-center border-t border-white/5 pb-24 flex flex-col items-center justify-center gap-2">
          <p>"이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다."</p>
          <p>바로가기 아이콘 이용 시, 수신자의 사전 동의를 얻지 않은 메신저, SNS 등으로 메시지를 발송하는 행위는 불법 스팸 전송 행위로 간주되어 규제기관의 행정제재 또는 형사 처벌의 대상이 될 수 있으니 유의하시기 바랍니다.</p>
        </section>
      </main>

      {/* Sticky CTA Bar -> footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/10 p-4 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="hidden md:block text-sm font-medium">
            <span className="text-zinc-400">사전예약 마감일: </span>
            <span className="text-white">3월 5일 23:59</span>
          </div>
          <div className="flex w-full md:w-auto gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <a href="https://link.coupang.com/a/dUWlRF" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none whitespace-nowrap px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
              S26 구매하기 <ChevronRight className="w-4 h-4" />
            </a>
            <a href="https://link.coupang.com/a/dUWk4F" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none whitespace-nowrap px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
              S26+ (Ultra혜택) <ChevronRight className="w-4 h-4" />
            </a>
            <a href="https://link.coupang.com/a/dUWk4F" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none whitespace-nowrap px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 text-sm md:text-base">
              S26 Ultra 구매하기 <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
