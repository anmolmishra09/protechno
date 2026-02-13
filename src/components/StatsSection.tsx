import { Zap, Shield, Globe, Star } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "99.9%",
    label: "Uptime Guaranteed",
    description: "Reliable infrastructure you can count on."
  },
  {
    icon: Shield,
    value: "256-bit",
    label: "Encryption",
    description: "Enterprise-grade security standards."
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries Served",
    description: "Global reach with local performance."
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Customer Rating",
    description: "Loved by developers worldwide."
  }
];

export function StatsSection() {
  return (
    <section className="relative z-10 py-24 bg-gradient-to-b from-orange-50 to-amber-50 dark:from-indigo-950 dark:to-slate-950 border-t border-orange-100 dark:border-indigo-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Built for Scale
          </h2>
          <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Our platform handles millions of requests daily while maintaining the highest standards of security and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-indigo-900/40 p-8 rounded-2xl border border-orange-200 dark:border-indigo-800 text-center hover:shadow-xl hover:shadow-orange-200/50 dark:hover:shadow-indigo-900/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <stat.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}