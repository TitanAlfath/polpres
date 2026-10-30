import React from 'react';
import { AsteriskIcon, Watermark2026, BrandHeader } from './CanvaIcons';
import { ArrowRight, Check, X, Sparkles, BookOpen, Target, Shield, Clock, HelpCircle } from 'lucide-react';

export default function Slide({ currentSlide, onNext, onPrev, totalSlides }) {
  // SLIDE 1 – COVER
  if (currentSlide === 0) {
    return (
      <div className="relative w-full h-full bg-canva-gradient p-10 sm:p-14 lg:p-20 flex flex-col justify-between overflow-hidden select-none text-white">
        <div className="absolute inset-0 bg-canva-dots opacity-40 pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between">
          <BrandHeader title="Titan Attaiq Alfatah | Teknik Informatika" className="text-white text-sm sm:text-base font-bold tracking-wide" />
          <span className="font-mono text-sm text-white/80 font-bold">01 / 10</span>
        </div>

        {/* Middle Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.05]">
              POLA PIKIR <br />
              PRESTATIF
            </h1>

            <p className="text-xl sm:text-2xl text-white font-medium max-w-2xl leading-relaxed">
              Membangun Mentalitas, Karakter, dan Budaya Berprestasi.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onNext}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#78182A] font-bold text-base transition-all duration-200 group shadow-lg"
              >
                <span>Mulai Presentasi</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="text-xs sm:text-sm text-white/80 font-medium pl-1">
                <span className="font-bold text-white">Pemateri:</span> Titan Attaiq Alfatah
              </div>
            </div>
          </div>

          {/* Right Giant 2026 Watermark */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="relative text-white/20 text-[180px] sm:text-[230px] lg:text-[280px]">
              <Watermark2026 />
            </div>
          </div>
        </div>

        {/* Bottom subtle note */}
        <div className="relative z-10 flex items-center justify-between text-sm text-white/80 font-mono">
          <span>Character & Leadership Deck • 2026</span>
          <span>Tekan [→] atau klik untuk lanjut</span>
        </div>
      </div>
    );
  }

  // SLIDE 2 – APA ITU POLA PIKIR PRESTATIF?
  if (currentSlide === 1) {
    return (
      <div className="relative w-full h-full flex flex-col lg:flex-row bg-white overflow-hidden select-none">
        {/* Left Column: Gradient + Giant 2026 */}
        <div className="lg:w-2/5 bg-canva-gradient p-10 lg:p-14 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-canva-dots opacity-30 pointer-events-none" />
          <BrandHeader title="Titan Attaiq Alfatah" className="text-white text-sm sm:text-base font-bold relative z-10" />

          <div className="relative z-10 text-white/25 text-[160px] sm:text-[200px] leading-none my-auto">
            <Watermark2026 />
          </div>

          <div className="relative z-10 text-sm text-white/80 font-mono">
            Pengertian & Konsep Dasar
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:w-3/5 p-10 sm:p-14 lg:p-16 flex flex-col justify-between bg-white text-[#2D141C]">
          <div className="space-y-6">
            <BrandHeader title="Titan Attaiq Alfatah | Definisi" className="text-[#8C1D2F] text-sm sm:text-base font-bold" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#78182A]">
              Apa Itu Pola Pikir Prestatif?
            </h2>

            {/* 4 Points List with Gradient Bullets */}
            <div className="space-y-4 pt-1">
              {[
                "Pola pikir yang berorientasi pada pencapaian dan kemajuan.",
                "Memiliki tujuan dan kemauan untuk berkembang.",
                "Mengutamakan proses, disiplin, dan tanggung jawab.",
                "Selalu berusaha memberikan hasil terbaik."
              ].map((pt, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#FFA057] to-[#FF5A36] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                  <p className="text-base sm:text-lg text-[#3E1B24] font-semibold leading-relaxed">
                    {pt}
                  </p>
                </div>
              ))}
            </div>

            {/* Core Summary Box */}
            <div className="p-5 rounded-2xl bg-[#FAF6F3] border-l-4 border-[#FF5A36] text-base sm:text-lg text-[#78182A] font-bold leading-relaxed shadow-sm mt-4">
              “Intinya: tidak sekadar ingin berhasil, tetapi mau melakukan sesuatu untuk mencapainya.”
            </div>
          </div>

          <div className="pt-4 flex justify-between items-center text-sm text-[#8C767E] border-t border-[#F2ECE9] font-medium">
            <span>02 / 10 • Apa Itu Pola Pikir Prestatif?</span>
          </div>
        </div>
      </div>
    );
  }

  // SLIDE 3 – MENGAPA POLA PIKIR PRESTATIF PENTING?
  if (currentSlide === 2) {
    return (
      <div className="relative w-full h-full p-8 sm:p-12 lg:p-14 bg-white flex flex-col justify-between overflow-hidden select-none text-[#2D141C]">
        <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE9]">
          <BrandHeader title="Titan Attaiq Alfatah | Urgensi" className="text-[#8C1D2F] text-sm sm:text-base font-bold" />
          <span className="font-mono text-sm text-[#8C767E] font-bold">03 / 10</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Left Column: 5 Points */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#78182A]">
              Mengapa Pola Pikir Prestatif Penting?
            </h2>

            <div className="space-y-2.5 pt-1">
              {[
                { num: "01", text: "Meningkatkan kualitas diri secara konsisten." },
                { num: "02", text: "Membentuk mental tangguh menghadapi kegagalan." },
                { num: "03", text: "Meningkatkan produktivitas dan hasil karya nyata." },
                { num: "04", text: "Membangun daya saing di era global dan industri." },
                { num: "05", text: "Menciptakan kontribusi positif bagi sesama." }
              ].map((item) => (
                <div key={item.num} className="flex items-center gap-4 p-3 sm:p-3.5 rounded-2xl bg-[#FAF6F3] border border-[#F2ECE9]">
                  <span className="font-mono text-base font-black text-[#FF5A36] shrink-0">
                    {item.num}
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#3E1B24]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column: Photo Card (Leadership/Lecture) */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="w-full max-w-[260px] h-[300px] sm:h-[340px] rounded-3xl overflow-hidden shadow-xl border-4 border-white relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                alt="Leadership and Success"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#78182A]/70 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Key Message Banner */}
          <div className="lg:col-span-3 space-y-5 flex flex-col justify-center">
            <div className="p-6 rounded-3xl bg-canva-gradient text-white shadow-xl space-y-3">
              <AsteriskIcon className="w-8 h-8 text-white" />
              <h4 className="text-lg sm:text-xl font-bold leading-snug">
                Nilai Utama:
              </h4>
              <p className="text-sm sm:text-base font-semibold text-white/95 leading-relaxed">
                “Prestasi bukan hanya tentang pencapaian pribadi, tetapi juga manfaat bagi lingkungan.”
              </p>
            </div>
          </div>
        </div>

        <div className="text-sm text-[#8C767E] flex justify-between border-t border-[#F2ECE9] pt-2 font-medium">
          <span>03 / 10 • Mengapa Pola Pikir Prestatif Penting?</span>
          <span>Tekan [→] untuk lanjut</span>
        </div>
      </div>
    );
  }

  // SLIDE 4 – LANDASAN TEORI: GROWTH MINDSET
  if (currentSlide === 3) {
    return (
      <div className="relative w-full h-full p-8 sm:p-12 lg:p-14 bg-white flex flex-col justify-between overflow-hidden select-none text-[#2D141C]">
        <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE9]">
          <BrandHeader title="Titan Attaiq Alfatah | Landasan Teori" className="text-[#8C1D2F] text-sm sm:text-base font-bold" />
          <span className="font-mono text-sm text-[#8C767E] font-bold">04 / 10</span>
        </div>

        <div className="space-y-6 my-auto max-w-4xl mx-auto w-full">
          <div className="space-y-2 text-center">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#FF5A36] uppercase bg-[#FAF6F3] px-4 py-1.5 rounded-full border border-[#F2ECE9] inline-block">
              Tokoh: Carol S. Dweck (2006)
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#78182A]">
              Landasan Teori: Growth Mindset
            </h2>
          </div>

          {/* Central Concept Box */}
          <div className="p-6 rounded-3xl bg-[#FAF6F3] border-2 border-[#F2ECE9] text-center shadow-sm">
            <span className="text-xs uppercase font-mono font-bold text-[#FF5A36] tracking-wider block mb-1">
              Konsep Inti
            </span>
            <p className="text-lg sm:text-xl font-bold text-[#3E1B24] leading-relaxed">
              “Kemampuan dapat dikembangkan melalui usaha, pembelajaran, dan pengalaman.”
            </p>
          </div>

          {/* Big Hero Quote Banner */}
          <div className="p-7 sm:p-8 rounded-3xl bg-canva-gradient text-white text-center shadow-2xl relative overflow-hidden space-y-2">
            <div className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              “Becoming is better than being.”
            </div>
            <div className="pt-2 text-sm sm:text-base text-white/90 font-medium">
              — Carol S. Dweck, Mindset: The New Psychology of Success
            </div>
          </div>

          {/* Meaning Card */}
          <div className="p-5 rounded-2xl bg-white border-2 border-[#FF5A36]/40 text-center shadow-md">
            <p className="text-base sm:text-lg font-bold text-[#78182A]">
              💡 Makna: Terus bertumbuh lebih penting daripada sekadar merasa sudah hebat.
            </p>
          </div>
        </div>

        <div className="text-sm text-[#8C767E] flex justify-between border-t border-[#F2ECE9] pt-2 font-medium">
          <span>04 / 10 • Landasan Teori: Growth Mindset</span>
          <span>2026</span>
        </div>
      </div>
    );
  }

  // SLIDE 5 – KARAKTERISTIK INDIVIDU PRESTATIF
  if (currentSlide === 4) {
    return (
      <div className="relative w-full h-full p-8 sm:p-12 lg:p-14 bg-white flex flex-col justify-between overflow-hidden select-none text-[#2D141C]">
        <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE9]">
          <BrandHeader title="Titan Attaiq Alfatah | Karakteristik" className="text-[#8C1D2F] text-sm sm:text-base font-bold" />
          <span className="font-mono text-sm text-[#8C767E] font-bold">05 / 10</span>
        </div>

        <div className="space-y-6 my-auto">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#78182A]">
              Karakteristik Individu Prestatif
            </h2>
            <p className="text-sm text-[#6B535B] font-medium">
              Enam ciri utama kepribadian mahasiswa yang berdaya saing dan unggul.
            </p>
          </div>

          {/* Central Flower / Asterisk Layout with Clear Typography */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-7 items-center py-1">
            {/* Left Column Pills */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-gradient-to-r from-[#FFA057] to-[#FF5A36] text-white p-4 sm:p-4.5 px-6 rounded-full shadow-md flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center font-black text-sm sm:text-base shrink-0">01</span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-tight">Berorientasi pada Tujuan</h4>
                  <p className="text-xs sm:text-sm text-white font-medium pt-0.5 leading-snug">Memiliki sasaran jelas dan terarah</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF5A36] to-[#78182A] text-white p-4 sm:p-4.5 px-6 rounded-full shadow-md flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center font-black text-sm sm:text-base shrink-0">02</span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-tight">Disiplin dan Konsisten</h4>
                  <p className="text-xs sm:text-sm text-white font-medium pt-0.5 leading-snug">Menjaga ritme belajar dan komitmen setiap hari</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FFA057] to-[#FF5A36] text-white p-4 sm:p-4.5 px-6 rounded-full shadow-md flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center font-black text-sm sm:text-base shrink-0">03</span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-tight">Proaktif dan Berinisiatif</h4>
                  <p className="text-xs sm:text-sm text-white font-medium pt-0.5 leading-snug">Tidak menunggu perintah, langsung bertindak</p>
                </div>
              </div>
            </div>

            {/* Center Emblem */}
            <div className="md:col-span-2 flex items-center justify-center py-2">
              <AsteriskIcon className="w-20 h-20 sm:w-24 sm:h-24 text-[#C02633]" />
            </div>

            {/* Right Column Pills */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-gradient-to-r from-[#FF5A36] to-[#78182A] text-white p-4 sm:p-4.5 px-6 rounded-full shadow-md flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center font-black text-sm sm:text-base shrink-0">04</span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-tight">Pantang Menyerah</h4>
                  <p className="text-xs sm:text-sm text-white font-medium pt-0.5 leading-snug">Bangkit dari kesalahan dan terus berproses</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FFA057] to-[#FF5A36] text-white p-4 sm:p-4.5 px-6 rounded-full shadow-md flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center font-black text-sm sm:text-base shrink-0">05</span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-tight">Terbuka Terhadap Kritik</h4>
                  <p className="text-xs sm:text-sm text-white font-medium pt-0.5 leading-snug">Menjadikan evaluasi sarana perbaikan diri</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF5A36] to-[#78182A] text-white p-4 sm:p-4.5 px-6 rounded-full shadow-md flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center font-black text-sm sm:text-base shrink-0">06</span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-tight">Berorientasi Kontribusi</h4>
                  <p className="text-xs sm:text-sm text-white font-medium pt-0.5 leading-snug">Memberikan manfaat nyata bagi lingkungan sekitar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <span className="text-sm sm:text-base font-bold text-[#78182A] bg-[#FAF6F3] px-7 py-3 rounded-full border border-[#F2ECE9] inline-block shadow-sm">
              Enam pilar karakter esensial pembentuk individu prestatif dan berdaya saing.
            </span>
          </div>
        </div>

        <div className="text-sm text-[#8C767E] flex justify-between border-t border-[#F2ECE9] pt-2 font-medium">
          <span>05 / 10 • Karakteristik Individu Prestatif</span>
          <span>2026</span>
        </div>
      </div>
    );
  }

  // SLIDE 6 – POLA PIKIR PRESTATIF VS NON-PRESTATIF
  if (currentSlide === 5) {
    return (
      <div className="relative w-full h-full p-8 sm:p-12 lg:p-14 bg-white flex flex-col justify-between overflow-hidden select-none text-[#2D141C]">
        <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE9]">
          <BrandHeader title="Titan Attaiq Alfatah | Perbandingan Pola Pikir" className="text-[#8C1D2F] text-sm sm:text-base font-bold" />
          <span className="font-mono text-sm text-[#8C767E] font-bold">06 / 10</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Left Column: 5 Comparison Rows */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#78182A]">
              Pola Pikir Prestatif vs <br />
              Non-Prestatif
            </h2>

            {/* Table Header */}
            <div className="grid grid-cols-2 gap-4 pb-1 text-sm font-bold uppercase font-mono tracking-wider border-b border-[#F2ECE9]">
              <span className="text-[#8C767E]">Non-Prestatif</span>
              <span className="text-[#FF5A36]">Prestatif</span>
            </div>

            <div className="space-y-3 pt-1">
              {[
                { non: "Takut mencoba", pres: "Berani mencoba" },
                { non: "Menunggu peluang", pres: "Menciptakan peluang" },
                { non: "Menyalahkan keadaan", pres: "Mencari solusi" },
                { non: "Takut gagal", pres: "Belajar dari gagal" },
                { non: "Menunggu perintah", pres: "Berinisiatif" }
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-2 gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#FAF6F3] border border-[#F2ECE9] items-center text-sm sm:text-base">
                  <div className="flex items-center gap-2.5 text-[#7A636A]">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span className="line-through">{row.non}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#78182A] font-bold">
                    <Check className="w-4 h-4 text-[#FF5A36] shrink-0 stroke-[3]" />
                    <span className="text-[#FF5A36]">{row.pres}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Concentric Ring Diagram */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[20px] border-[#FFE2D1] flex items-center justify-center" />
              <div className="absolute inset-7 rounded-full border-[22px] border-[#FFA057] flex items-center justify-center" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#FF5A36] to-[#78182A] flex flex-col items-center justify-center text-white shadow-xl">
                <AsteriskIcon className="w-10 h-10 text-white/90 mb-1" />
                <span className="text-3xl sm:text-4xl font-black font-display">100%</span>
                <span className="text-xs uppercase font-mono tracking-wider text-white font-bold">Prestatif</span>
              </div>

              <div className="absolute -top-3 left-4 bg-gradient-to-r from-[#FF5A36] to-[#78182A] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-md">
                Berani & Solutif
              </div>

              <div className="absolute -bottom-2 right-4 bg-[#78182A] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-md">
                Berinisiatif
              </div>
            </div>

            <div className="pt-5 text-center">
              <span className="text-sm font-mono text-[#78182A] font-bold uppercase tracking-wider">
                Pilihan Mindset Menentukan Masa Depan
              </span>
            </div>
          </div>
        </div>

        <div className="text-sm text-[#8C767E] flex justify-between border-t border-[#F2ECE9] pt-2 font-medium">
          <span>06 / 10 • Pola Pikir Prestatif vs Non-Prestatif</span>
          <span>2026</span>
        </div>
      </div>
    );
  }

  // SLIDE 7 – IMPLEMENTASI DALAM ORGANISASI MAHASISWA
  if (currentSlide === 6) {
    return (
      <div className="relative w-full h-full p-8 sm:p-12 lg:p-14 bg-white flex flex-col justify-between overflow-hidden select-none text-[#2D141C]">
        <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE9]">
          <BrandHeader title="Titan Attaiq Alfatah | Implementasi Organisasi" className="text-[#8C1D2F] text-sm sm:text-base font-bold" />
          <span className="font-mono text-sm text-[#8C767E] font-bold">07 / 10</span>
        </div>

        <div className="space-y-6 my-auto">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#78182A]">
              Implementasi dalam Organisasi Mahasiswa
            </h2>
            <p className="text-sm text-[#6B535B] font-medium">
              Wujud nyata penerapan pola pikir prestatif dalam aktivitas kampus.
            </p>
          </div>

          {/* 5 Implementation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { field: "Akademik", text: "Memiliki target belajar yang jelas dan terencana." },
              { field: "Organisasi", text: "Aktif memberikan gagasan inovatif dan solusi." },
              { field: "Kepemimpinan", text: "Berani mengambil tanggung jawab dan amanah." },
              { field: "Sosial", text: "Memberikan manfaat nyata kepada masyarakat luas." },
              { field: "Pengembangan Diri", text: "Mengikuti pelatihan, sertifikasi, & kompetisi." }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-canva-gradient-card rounded-2xl p-5 text-white flex flex-col justify-between min-h-[195px] shadow-lg"
              >
                <div>
                  <span className="text-xs font-mono font-black text-white/80 block uppercase">
                    Pilar 0{idx + 1}
                  </span>
                  <div className="text-lg sm:text-xl font-bold font-display mt-2 leading-tight">
                    {item.field}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white font-medium leading-relaxed pt-2">
                  {item.text}
                </p>

                <div className="pt-2 border-t border-white/20 text-xs font-mono text-white/80 font-bold">
                  Aksi Nyata
                </div>
              </div>
            ))}
          </div>

          {/* Core Message Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF6F3] border-l-4 border-[#78182A] text-center shadow-sm">
            <p className="text-base sm:text-lg font-bold text-[#78182A] leading-relaxed">
              “Jangan hanya menjadi anggota yang hadir, tetapi jadilah anggota yang memberikan kontribusi.”
            </p>
          </div>
        </div>

        <div className="text-sm text-[#8C767E] flex justify-between border-t border-[#F2ECE9] pt-2 font-medium">
          <span>07 / 10 • Implementasi dalam Organisasi Mahasiswa</span>
          <span>2026</span>
        </div>
      </div>
    );
  }

  // SLIDE 8 – HAMBATAN DALAM MEMBANGUN MENTAL PRESTATIF
  if (currentSlide === 7) {
    return (
      <div className="relative w-full h-full p-8 sm:p-12 lg:p-14 bg-white flex flex-col justify-between overflow-hidden select-none text-[#2D141C]">
        <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE9]">
          <BrandHeader title="Titan Attaiq Alfatah | Hambatan & Solusi" className="text-[#8C1D2F] text-sm sm:text-base font-bold" />
          <span className="font-mono text-sm text-[#8C767E] font-bold">08 / 10</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Left Column: 6 Obstacles */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#78182A]">
              Hambatan Membangun <br />
              Mental Prestatif
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                "Takut gagal",
                "Kurang percaya diri",
                "Terjebak zona nyaman",
                "Suka menunda pekerjaan",
                "Mentalitas ingin hasil instan",
                "Tidak memiliki tujuan jelas"
              ].map((obs, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#FAF6F3] border border-[#F2ECE9] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs shrink-0">
                    ✕
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#4D333B]">
                    {obs}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Speedometer Gauge + Solusi Utama */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-80 h-48 sm:w-96 sm:h-56 overflow-hidden flex items-end justify-center">
              {/* Arcs using SVG */}
              <svg viewBox="0 0 240 120" className="w-full h-full">
                <path d="M 20 120 A 100 100 0 0 1 220 120" fill="none" stroke="#FFE2D1" strokeWidth="14" strokeLinecap="round" />
                <path d="M 46 120 A 74 74 0 0 1 194 120" fill="none" stroke="#FFA057" strokeWidth="14" strokeLinecap="round" />
                <path d="M 72 120 A 48 48 0 0 1 168 120" fill="none" stroke="#FF5A36" strokeWidth="14" strokeLinecap="round" />
                <path d="M 98 120 A 22 22 0 0 1 142 120" fill="none" stroke="#78182A" strokeWidth="14" strokeLinecap="round" />
              </svg>

              {/* Center Crisp White Callout Box */}
              <div className="absolute bottom-0 z-20 px-7 py-2.5 bg-white rounded-t-3xl shadow-xl border-2 border-[#F2ECE9] flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-black font-display text-[#78182A] leading-tight">
                  100%
                </span>
                <span className="text-xs font-mono font-bold text-[#FF5A36] uppercase tracking-wider">
                  Solutif
                </span>
              </div>
            </div>

            {/* Solusi Box */}
            <div className="pt-6 w-full max-w-md">
              <div className="p-4 rounded-2xl bg-canva-gradient text-white text-center shadow-lg space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-white/80 font-bold block">
                  Kunci Pemecahan Masalah
                </span>
                <p className="text-base sm:text-lg font-bold leading-relaxed">
                  “Berani memulai, membangun kebiasaan, dan melakukan evaluasi.”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-[#8C767E] flex justify-between border-t border-[#F2ECE9] pt-2 font-medium">
          <span>08 / 10 • Hambatan & Solusi Mental Prestatif</span>
          <span>2026</span>
        </div>
      </div>
    );
  }

  // SLIDE 9 – STRATEGI MEMBANGUN POLA PIKIR PRESTATIF (SMART GOALS)
  if (currentSlide === 8) {
    return (
      <div className="relative w-full h-full p-8 sm:p-12 lg:p-14 bg-white flex flex-col justify-between overflow-hidden select-none text-[#2D141C]">
        <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE9]">
          <BrandHeader title="Titan Attaiq Alfatah | Strategi SMART Goals" className="text-[#8C1D2F] text-sm sm:text-base font-bold" />
          <span className="font-mono text-sm text-[#8C767E] font-bold">09 / 10</span>
        </div>

        <div className="space-y-6 my-auto">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#78182A]">
              Strategi: Prinsip SMART Goals
            </h2>
            <p className="text-sm text-[#4D333B] font-medium">
              Metodologi teruji untuk menetapkan dan mewujudkan target prestasi.
            </p>
          </div>

          {/* 5 SMART Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { letter: "S", word: "Specific", desc: "Tujuan jelas dan spesifik, bukan sekadar angan-angan." },
              { letter: "M", word: "Measurable", desc: "Dapat diukur pencapaiannya dengan indikator pasti." },
              { letter: "A", word: "Achievable", desc: "Realistis dan dapat dicapai dengan usaha terencana." },
              { letter: "R", word: "Relevant", desc: "Relevan dengan sasaran besar dan visi masa depan." },
              { letter: "T", word: "Time-bound", desc: "Memiliki batas waktu pengerjaan yang jelas (deadline)." }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FAF6F3] border border-[#F2ECE9] flex flex-col justify-between min-h-[190px] shadow-sm hover:border-[#FF5A36] transition-colors"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#FFA057] to-[#FF5A36] text-white flex items-center justify-center font-display font-black text-2xl shadow-md">
                    {item.letter}
                  </div>
                  <h4 className="text-lg font-bold text-[#78182A] mt-3">
                    {item.word}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#4D333B] leading-relaxed pt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action Callout */}
          <div className="p-5 rounded-2xl bg-canva-gradient text-white flex items-center gap-4 shadow-lg">
            <AsteriskIcon className="w-9 h-9 text-white shrink-0" />
            <p className="text-base sm:text-lg lg:text-xl font-bold leading-relaxed">
              “Mulai dari target kecil, konsisten, dan evaluasi perkembangan.”
            </p>
          </div>
        </div>

        <div className="text-sm text-[#8C767E] flex justify-between border-t border-[#F2ECE9] pt-2 font-medium">
          <span>09 / 10 • Strategi SMART Goals</span>
          <span>2026</span>
        </div>
      </div>
    );
  }

  // SLIDE 10 – PENUTUP DAN REFLEKSI
  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row bg-white overflow-hidden select-none">
      {/* Left Column: Photo Card */}
      <div className="lg:w-2/5 p-8 sm:p-12 flex flex-col justify-center items-center bg-[#FAF6F3] relative">
        <div className="w-full max-w-[300px] h-[300px] sm:h-[340px] lg:h-[370px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
            alt="Work and Results"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#78182A]/70 via-transparent to-transparent" />
        </div>
      </div>

      {/* Right Column: Quotes & 3 Reflection Questions */}
      <div className="lg:w-3/5 p-10 sm:p-14 lg:p-16 flex flex-col justify-between bg-white text-[#2D141C] relative">
        <div className="space-y-5">
          <BrandHeader title="Titan Attaiq Alfatah | Penutup & Refleksi" className="text-[#8C1D2F] text-sm sm:text-base font-bold" />

          {/* Hero Core Closing Quote */}
          <div className="p-5 rounded-2xl bg-[#FAF6F3] border-l-4 border-[#78182A] shadow-sm">
            <p className="text-base sm:text-lg lg:text-xl font-bold text-[#78182A] leading-relaxed">
              “Jangan hanya mengejar posisi, tetapi bangun kapasitas. Jangan hanya ingin dikenal karena jabatan, tetapi dikenal karena karya, integritas, dan kontribusi.”
            </p>
          </div>

          {/* 3 Reflection Questions */}
          <div className="space-y-3 pt-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5A36] block">
              Pertanyaan Refleksi Diri:
            </span>

            {[
              "Apa prestasi yang ingin saya capai?",
              "Apa yang selama ini menghambat saya?",
              "Langkah nyata apa yang akan saya mulai hari ini?"
            ].map((q, idx) => (
              <div key={idx} className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-[#F2ECE9] shadow-sm">
                <span className="w-7 h-7 rounded-full bg-[#FF5A36] text-white flex items-center justify-center font-black text-xs shrink-0">
                  {idx + 1}
                </span>
                <p className="text-sm sm:text-base font-bold text-[#3E1B24]">
                  {q}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Motto */}
          <div className="pt-2">
            <p className="text-base sm:text-lg font-black font-display text-[#FF5A36]">
              “Prestasi dimulai dari pola pikir, dibuktikan melalui tindakan.”
            </p>
          </div>
        </div>

        {/* Bottom Asterisk in corner */}
        <div className="flex items-center justify-between pt-4 border-t border-[#F2ECE9]">
          <span className="text-sm text-[#8C767E] font-mono font-medium">10 / 10 • Refleksi & Penutup</span>
          <AsteriskIcon className="w-10 h-10 text-[#C02633]" />
        </div>
      </div>
    </div>
  );
}
