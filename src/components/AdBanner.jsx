export default function AdBanner() {
  return (
    <div className="my-8 flex flex-col items-center">
      {/* Required by AdSense policy — do not remove */}
      <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">
        Advertisement
      </span>

      {/* Ad container */}
      <div className="w-full max-w-4xl min-h-[100px] bg-slate-50 border border-dashed border-slate-300 rounded-xl flex items-center justify-center text-slate-400 text-sm">
        {/*
          ⚠️ IMPORTANT:
          AdSense approval ke baad, niche wala comment hatakar
          apna real AdSense code paste kariye.
        */}

        {/* PLACEHOLDER — remove after approval */}
        <span>Ad Space — Available after AdSense approval</span>

        {/* ============================================
            REAL ADSENSE CODE (paste after approval)

        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        ============================================ */}
      </div>
    </div>
  )
}