import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Auth Store
export const useAuthStore = create(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        
        login: async (email, password) => {
          set({ isLoading: true });
          try {
            // Mock authentication - replace with real API
            if (email === 'admin@safinacarpets.com' && password === 'admin123') {
              const user = {
                id: '1',
                name: 'Admin User',
                email: 'admin@safinacarpets.com',
                role: 'admin',
                avatar: undefined,
                lastLogin: new Date()
              };
              set({ user, isAuthenticated: true, isLoading: false });
            } else {
              throw new Error('Invalid credentials');
            }
          } catch (error) {
            set({ isLoading: false });
            throw error;
          }
        },
        
        logout: () => {
          set({ user: null, isAuthenticated: false });
          localStorage.removeItem('auth-storage');
        },
        
        setUser: (user) => {
          set({ user, isAuthenticated: true });
        }
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({ 
          user: state.user, 
          isAuthenticated: state.isAuthenticated 
        }),
      }
    ),
    { name: 'auth-store' }
  )
);

// UI Store
export const useUIStore = create(
  devtools(
    persist(
      (set) => ({
        sidebarCollapsed: false,
        theme: 'light',
        
        toggleSidebar: () => {
          set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed }));
        },
        
        setSidebarCollapsed: (collapsed) => {
          set({ sidebarCollapsed: collapsed });
        },
        
        setTheme: (theme) => {
          set({ theme });
          // Apply theme to document
          const root = document.documentElement;
          if (theme === 'dark') {
            root.classList.add('dark');
          } else if (theme === 'light') {
            root.classList.remove('dark');
          } else {
            // System theme
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            if (mediaQuery.matches) {
              root.classList.add('dark');
            } else {
              root.classList.remove('dark');
            }
          }
        }
      }),
      {
        name: 'ui-storage',
      }
    ),
    { name: 'ui-store' }
  )
);

// App Store
export const useAppStore = create(
  devtools(
    (set) => ({
      dashboardStats: null,
      settings: {
        companyName: 'SAFINA CARPETS',
        currency: 'INR',
        taxRate: 18,
        theme: 'light',
        language: 'en',
        notifications: {
          email: true,
          push: true,
          orderUpdates: true,
          lowStock: true
        }
      },
      
      setDashboardStats: (stats) => {
        set({ dashboardStats: stats });
      },
      
      updateSettings: (newSettings) => {
        set((state) => ({
          settings: { ...state.settings, ...newSettings }
        }));
      }
    }),
    { name: 'app-store' }
  )
);