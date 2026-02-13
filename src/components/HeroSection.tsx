import { Button } from "../components/ui/button";
import { LLMInteractiveAnimation } from "./LLMInteractiveAnimation";

export function HeroSection() {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950 transition-colors duration-300">
      {/* Soft Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-amber-50/80 to-yellow-50/80 dark:from-slate-950/80 dark:via-indigo-950/80 dark:to-slate-950/80" />
      
      {/* Interactive LLM Animation */}
      <LLMInteractiveAnimation />
      
      {/* Organic Floating Shapes - Orange and Amber theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-200/60 dark:bg-orange-900/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-amber-200/50 dark:bg-amber-900/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-yellow-200/40 dark:bg-yellow-900/30 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[-5%] right-[10%] w-[450px] h-[450px] bg-orange-300/50 dark:bg-orange-900/30 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-amber-300/40 dark:bg-amber-900/30 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto pointer-events-none">
        <h1 className="font-bold text-slate-900 dark:text-white text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 tracking-tight">
          AI That Thinks
          <br />
          <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
            Like You
          </span>
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Pro Technology builds intelligent systems that learn, adapt, and grow with you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
          <Button 
            onClick={scrollToFeatures}
            className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-lg px-10 py-7 text-lg font-medium shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Explore Solutions
          </Button>
          <Button variant="outline" className="bg-white/80 dark:bg-indigo-900/50 border-orange-300 dark:border-indigo-700 text-orange-800 dark:text-orange-200 rounded-lg px-10 py-7 text-lg font-medium hover:bg-orange-50 dark:hover:bg-indigo-800/50 hover:border-orange-400 dark:hover:border-indigo-600 transition-all duration-300 backdrop-blur-sm">
            Learn More
          </Button>
        </div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0 dark:opacity-20" />
    </section>
  );
}