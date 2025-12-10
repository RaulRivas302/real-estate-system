export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

const USERS_KEY = 'demo_users';
const CURRENT_USER_KEY = 'demo_current_user';

// Initialize with a demo user if no users exist
const initializeDemoUsers = () => {
  const users = getUsers();
  if (users.length === 0) {
    const demoUser: User = {
      id: '1',
      name: 'Demo User',
      email: 'demo@example.com',
      password: 'demo123',
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(USERS_KEY, JSON.stringify([demoUser]));
  }
};

// Get all users from localStorage
const getUsers = (): User[] => {
  if (typeof window === 'undefined') return [];
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

// Save users to localStorage
const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Demo login function
export const demoLogin = (email: string, password: string): { success: boolean; user?: AuthUser; message?: string } => {
  initializeDemoUsers();
  const users = getUsers();
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    const authUser: AuthUser = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(authUser));
    return { success: true, user: authUser };
  }
  
  return { success: false, message: 'Invalid email or password' };
};

// Demo signup function
export const demoSignup = (name: string, email: string, password: string): { success: boolean; user?: AuthUser; message?: string } => {
  initializeDemoUsers();
  const users = getUsers();
  
  // Check if user already exists
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'User with this email already exists' };
  }
  
  // Create new user
  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
  };
  
  users.push(newUser);
  saveUsers(users);
  
  const authUser: AuthUser = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };
  
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(authUser));
  
  return { success: true, user: authUser };
};

// Get current logged-in user
export const getCurrentUser = (): AuthUser | null => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

// Logout function
export const demoLogout = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};
