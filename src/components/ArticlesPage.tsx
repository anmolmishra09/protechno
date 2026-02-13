import { ArrowLeft, Calendar, Clock, Tag, TrendingUp, Brain, Code, Database, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "The Future of AI-Powered Automation",
    excerpt: "Discover how artificial intelligence is revolutionizing business automation and workflow optimization across industries.",
    category: "AI Technology",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    icon: Brain,
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable Machine Learning Systems",
    excerpt: "Learn best practices for designing and deploying ML systems that can handle millions of requests with high availability.",
    category: "Engineering",
    date: "Feb 8, 2026",
    readTime: "8 min read",
    icon: Database,
    featured: true
  },
  {
    id: 3,
    title: "Natural Language Processing in 2026",
    excerpt: "Explore the latest advancements in NLP and how they're transforming customer interactions and content generation.",
    category: "AI Research",
    date: "Feb 5, 2026",
    readTime: "6 min read",
    icon: Sparkles,
    featured: false
  },
  {
    id: 4,
    title: "Optimizing AI Model Performance",
    excerpt: "Practical tips and techniques for improving your AI model's accuracy, speed, and resource efficiency.",
    category: "Best Practices",
    date: "Feb 3, 2026",
    readTime: "7 min read",
    icon: TrendingUp,
    featured: false
  },
  {
    id: 5,
    title: "AI Ethics and Responsible Development",
    excerpt: "Understanding the importance of ethical AI development and implementing responsible practices in your projects.",
    category: "AI Ethics",
    date: "Jan 30, 2026",
    readTime: "10 min read",
    icon: Brain,
    featured: false
  },
  {
    id: 6,
    title: "Integrating AI APIs into Your Applications",
    excerpt: "Step-by-step guide to seamlessly integrate powerful AI capabilities into your existing software solutions.",
    category: "Development",
    date: "Jan 28, 2026",
    readTime: "12 min read",
    icon: Code,
    featured: false
  },
  {
    id: 7,
    title: "Deep Learning for Computer Vision Applications",
    excerpt: "Comprehensive guide to implementing state-of-the-art computer vision models for image recognition and object detection.",
    category: "AI Technology",
    date: "Feb 13, 2026",
    readTime: "9 min read",
    icon: Brain,
    featured: false
  },
  {
    id: 8,
    title: "Cloud Infrastructure for AI Workloads",
    excerpt: "Best practices for setting up robust cloud infrastructure to support demanding AI and machine learning workloads at scale.",
    category: "Engineering",
    date: "Feb 12, 2026",
    readTime: "11 min read",
    icon: Database,
    featured: false
  }
];

const categories = ["All", "AI Technology", "Engineering", "AI Research", "Best Practices", "AI Ethics", "Development"];

export function ArticlesPage({ onBack }: { onBack: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 dark:from-slate-950 dark:to-indigo-950 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white -ml-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            AI & Technology Articles
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore our latest insights, research, and best practices in artificial intelligence and technology development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Badge 
              key={category}
              variant="outline"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 border-orange-200 dark:border-slate-700 hover:bg-orange-50 dark:hover:bg-slate-700 cursor-pointer transition-all ${
                selectedCategory === category 
                  ? 'bg-orange-100 dark:bg-slate-700 text-orange-700 dark:text-orange-300 border-orange-400 dark:border-orange-600' 
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.filter(article => article.featured).map((article) => (
              <Card 
                key={article.id}
                className="bg-white dark:bg-indigo-900/30 border-orange-200 dark:border-indigo-800 hover:shadow-2xl hover:shadow-orange-200/50 dark:hover:shadow-indigo-900/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 rounded-xl">
                      <article.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-0">
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400 text-base">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.filter(article => !article.featured).map((article) => (
              <Card 
                key={article.id}
                className="bg-white dark:bg-indigo-900/30 border-orange-200 dark:border-indigo-800 hover:shadow-xl hover:shadow-orange-200/50 dark:hover:shadow-indigo-900/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 rounded-lg">
                      <article.icon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <Badge variant="outline" className="text-xs border-orange-300 dark:border-orange-800 text-orange-700 dark:text-orange-300">
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-orange-600 via-amber-700 to-yellow-700 dark:from-orange-700 dark:via-amber-800 dark:to-yellow-900 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Latest AI Insights
          </h2>
          <p className="text-orange-50 dark:text-amber-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, research, and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-lg bg-white/90 dark:bg-slate-900/90 border-0 focus:outline-none focus:ring-2 focus:ring-white text-slate-900 dark:text-white placeholder:text-slate-500"
            />
            <Button 
              onClick={() => alert('Thank you for subscribing! You will receive our latest AI insights.')}
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold shadow-lg cursor-pointer border-0"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
