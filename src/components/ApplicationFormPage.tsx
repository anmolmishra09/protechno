import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ArrowLeft, Upload, CheckCircle2, Briefcase } from "lucide-react";

export function ApplicationFormPage({ jobTitle, onBack }: { jobTitle: string; onBack: () => void }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: ''
  });
  const [fileName, setFileName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white px-4 py-12 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Application Received!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for applying for the <span className="font-semibold text-purple-700">{jobTitle}</span> position. Our team will review your application and get back to you soon.
          </p>
          <Button onClick={onBack} className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-xl">
            Back to Careers
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 text-slate-600 hover:text-slate-900 hover:bg-slate-50 -ml-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Careers
        </Button>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            {jobTitle}
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Apply for this Role
          </h1>
          <p className="text-slate-600">
            Please fill out the form below. We review applications on a rolling basis.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-slate-700">Full Name</Label>
              <Input 
                id="fullName" 
                placeholder="John Doe" 
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                required
                className="bg-white border-slate-200"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="bg-white border-slate-200"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-700">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-white border-slate-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin" className="text-slate-700">LinkedIn Profile</Label>
              <Input 
                id="linkedin" 
                type="url" 
                placeholder="linkedin.com/in/johndoe" 
                value={formData.linkedin}
                onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                className="bg-white border-slate-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume" className="text-slate-700">Resume / CV</Label>
            <div className="relative">
              <Input 
                id="resume" 
                type="file" 
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="bg-white border-slate-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
              />
              {fileName && (
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  {fileName}
                </div>
              )}
            </div>
            <p className="text-xs text-slate-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter" className="text-slate-700">Cover Letter (Optional)</Label>
            <Textarea 
              id="coverLetter" 
              placeholder="Tell us why you're a great fit for this role..."
              rows={5}
              value={formData.coverLetter}
              onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
              className="bg-white border-slate-200 resize-none"
            />
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 rounded-xl shadow-md hover:shadow-lg transition-all font-semibold text-lg">
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  );
}