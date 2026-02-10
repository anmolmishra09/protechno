import { ArrowLeft, MapPin, DollarSign, Clock, Briefcase } from "lucide-react";
import { Button } from "../components/ui/button";

interface CareersPageProps {
  onBack: () => void;
  onApply: (jobTitle: string) => void;
}

export function CareersPage({ onBack, onApply }: CareersPageProps) {
  const jobs = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹8,00,000 - ₹12,00,000",
      experience: "0 to 1 year",
      description: "Lead the development of next-generation AI models and infrastructure."
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "₹6,00,000 - ₹9,00,000",
      experience: "0 to 1 year",
      description: "Shape the visual language of our AI products and user experiences."
    },
    {
      id: 3,
      title: "Data Scientist",
      department: "Research",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "₹7,00,000 - ₹10,00,000",
      experience: "0 to 1 year",
      description: "Analyze complex datasets to drive product innovation and strategy."
    },
    {
      id: 4,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "₹5,00,000 - ₹8,00,000",
      experience: "0 to 1 year",
      description: "Build responsive, high-performance web interfaces using React and TypeScript."
    },
    {
      id: 5,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹6,00,000 - ₹9,00,000",
      experience: "0 to 1 year",
      description: "Design scalable APIs and microservices to power our AI platform."
    },
    {
      id: 6,
      title: "Machine Learning Researcher",
      department: "Research",
      location: "Remote",
      type: "Full-time",
      salary: "₹8,00,000 - ₹11,00,000",
      experience: "0 to 1 year",
      description: "Push the boundaries of generative AI and publish cutting-edge research."
    },
    {
      id: 7,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Pune, India",
      type: "Full-time",
      salary: "₹5,50,000 - ₹8,50,000",
      experience: "0 to 1 year",
      description: "Manage CI/CD pipelines and cloud infrastructure for high-availability systems."
    },
    {
      id: 8,
      title: "Technical Program Manager",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹7,00,000 - ₹10,00,000",
      experience: "0 to 1 year",
      description: "Coordinate cross-functional teams to deliver complex technical projects on time."
    },
    {
      id: 9,
      title: "UX Researcher",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "₹5,00,000 - ₹8,00,000",
      experience: "0 to 1 year",
      description: "Conduct user studies and translate insights into actionable design improvements."
    },
    {
      id: 10,
      title: "AI Ethics Specialist",
      department: "Research",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "₹6,50,000 - ₹9,50,000",
      experience: "0 to 1 year",
      description: "Ensure our AI systems are developed and deployed responsibly and ethically."
    },
    {
      id: 11,
      title: "Product Manager",
      department: "Product",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹7,50,000 - ₹11,00,000",
      experience: "0 to 1 year",
      description: "Define product vision and roadmap for our enterprise AI solutions."
    },
    {
      id: 12,
      title: "Security Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "₹6,00,000 - ₹9,00,000",
      experience: "0 to 1 year",
      description: "Protect our platform and user data through robust security protocols."
    },
    {
      id: 13,
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Delhi, India",
      type: "Full-time",
      salary: "₹4,50,000 - ₹7,00,000",
      experience: "0 to 1 year",
      description: "Drive brand awareness through compelling content and strategic campaigns."
    },
    {
      id: 14,
      title: "Technical Writer",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      salary: "₹4,00,000 - ₹6,50,000",
      experience: "0 to 1 year",
      description: "Create clear documentation and guides for developers using our APIs."
    },
    {
      id: 15,
      title: "Customer Success Manager",
      department: "Operations",
      location: "Gurugram, India",
      type: "Full-time",
      salary: "₹4,00,000 - ₹6,00,000",
      experience: "0 to 1 year",
      description: "Ensure our clients achieve their goals using Pro Technology solutions."
    },
    {
      id: 16,
      title: "Technical Recruiter",
      department: "HR",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹3,50,000 - ₹5,50,000",
      experience: "0 to 1 year",
      description: "Identify and attract top engineering talent to join our growing team."
    },
    {
      id: 17,
      title: "Solutions Architect",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      salary: "₹7,00,000 - ₹10,00,000",
      experience: "0 to 1 year",
      description: "Partner with enterprise clients to design custom technical implementations."
    },
    {
      id: 18,
      title: "Mobile Developer (iOS/Android)",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "₹5,50,000 - ₹8,50,000",
      experience: "0 to 1 year",
      description: "Develop native mobile applications to extend our AI platform to handheld devices."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button variant="ghost" onClick={onBack} className="mb-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Join Our Team in 2026</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Help us build the future of intelligent systems. We're looking for passionate individuals to join our growing team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3">
                  {job.department}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">
                {job.description}
              </p>

              <div className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {job.type}
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {job.experience}
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {job.salary}
                </div>
              </div>

              <Button 
                onClick={() => onApply(job.title)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}