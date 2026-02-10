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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Soft Background Layers - Solid colors only */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      
      {/* Interactive LLM Animation */}
      <LLMInteractiveAnimation />
      
      {/* Organic Floating Shapes - Light pastel tones for light, deeper tones for dark */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-indigo-100/30 dark:bg-indigo-900/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[-5%] right-[10%] w-[450px] h-[450px] bg-pink-100/40 dark:bg-pink-900/20 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-violet-100/30 dark:bg-violet-900/20 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto pointer-events-none">
        <h1 className="font-bold text-slate-900 dark:text-white text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 tracking-tight">
          AI That Thinks
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Like You
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Pro Technology builds intelligent systems that learn, adapt, and grow with you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
          <Button 
            onClick={scrollToFeatures}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-10 py-7 text-lg font-medium shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Explore Solutions
          </Button>
          <Button variant="outline" className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-full px-10 py-7 text-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300">
            Learn More
          </Button>
        </div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0 dark:opacity-20" />
    </section>
  );
}