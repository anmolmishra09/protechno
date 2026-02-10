// Simulated API delay to mimic network requests
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// --- Types ---
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  applicantName: string;
  applicantEmail: string;
  status: 'Pending' | 'Reviewed' | 'Rejected';
  appliedAt: string;
}

// --- Authentication ---

export const login = async (email: string, password: string): Promise<User> => {
  await delay(800); // Simulate network latency

  // Hardcoded mock user for demo purposes
  if (email === "admin@protech.com" && password === "password123") {
    const user: User = {
      id: "user_1",
      email: email,
      name: "Admin User"
    };
    
    // Store session in localStorage (Simulating cookies/tokens)
    localStorage.setItem('protech_user', JSON.stringify(user));
    localStorage.setItem('protech_token', 'mock_jwt_token_xyz');
    
    return user;
  }

  throw new Error("Invalid credentials. Try admin@protech.com / password123");
};

export const logout = async (): Promise<void> => {
  await delay(300);
  localStorage.removeItem('protech_user');
  localStorage.removeItem('protech_token');
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('protech_user');
  return userStr ? JSON.parse(userStr) : null;
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('protech_token');
};

// --- Job Applications (Database Simulation) ---

export const submitApplication = async (data: Omit<JobApplication, 'id' | 'status' | 'appliedAt'>): Promise<JobApplication> => {
  await delay(1000); // Simulate processing time

  const newApplication: JobApplication = {
    ...data,
    id: `app_${Date.now()}`,
    status: 'Pending', // Default status
    appliedAt: new Date().toISOString()
  };

  // Get existing applications from "Database" (localStorage)
  const existingApps = getApplications();
  existingApps.push(newApplication);
  
  // Save back to "Database"
  localStorage.setItem('protech_applications', JSON.stringify(existingApps));

  return newApplication;
};

export const getApplications = (): JobApplication[] => {
  const appsStr = localStorage.getItem('protech_applications');
  return appsStr ? JSON.parse(appsStr) : [];
};