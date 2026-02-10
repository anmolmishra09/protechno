import { Settings, Shield, Calendar, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Intelligent Automation",
    description: "Streamline workflows with AI-powered automation that learns from your patterns and optimizes processes in real-time.",
    gradient: "from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50"
  },
  {
    icon: Shield,
    title: "Secure AI Infrastructure",
    description: "Enterprise-grade security with end-to-end encryption and compliance-ready architecture for peace of mind.",
    gradient: "from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50"
  },
  {
    icon: Calendar,
    title: "Predictive Insights",
    description: "Harness the power of predictive analytics to anticipate trends, optimize resources, and make data-driven decisions.",
    gradient: "from-pink-100 to-purple-100 dark:from-pink-900/50 dark:to-purple-900/50"
  }
];

export function FeatureCards() {
  return (
    <section id="features" className="relative z-10 px-4 pb-24 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Our Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover how our AI-powered platform can transform your business operations and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 hover:translate-y-[-8px] transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 overflow-hidden"
            >
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-semibold mb-4 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-3xl border border-slate-0 group-hover:border-purple-200 dark:group-hover:border-purple-800 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}