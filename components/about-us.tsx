import { GlobeIcon, TrendingUpIcon, UsersIcon } from "lucide-react"
import Link from "next/link"

export default function AboutUs() {
  return (
    <section id="AboutUs" className="w-full text-white py-20">
      <div className="container px-4 mx-auto">

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight title-font title-font">
            About <span className="text-emerald-400">Us</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-base-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-base-800">
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-full">
                <GlobeIcon className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium">Global Vision</span>
              </div>
              <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-full">
                <TrendingUpIcon className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium">Financial Freedom</span>
              </div>
              <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-full">
                <UsersIcon className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium">Inclusive Investing</span>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Three entrepreneurs — a globetrotting investor stranded by capital controls, a tech visionary tired of
              geographic arbitrage, and a wealth strategist disillusioned by "localized" portfolios — united by common
              values. Their shared frustration? The world had become interconnected, but wealth remained trapped by
              borders, bureaucracy, and bias.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Traditional funds treated international diversification as a luxury for the ultra-rich. Meanwhile,
              everyday investors faced hurdles: currency conversions, opaque fees, and gatekeepers deciding who could
              access global markets.
            </p>

            <div className="mt-10 border-t border-base-800 pt-8">
              <h3 className="text-2xl font-bold mb-4">That day, LVE was born.</h3>
              <p className="text-lg leading-relaxed text-emerald-400 font-medium">
                Our mission: To democratize global investing, giving anyone, anywhere, the freedom to grow wealth beyond
                borders.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/20"
          >
            Become an investor
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}