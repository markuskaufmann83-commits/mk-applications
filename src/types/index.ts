export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
  honeypot?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  errors?: string[];
  data?: T;
}

export type ClubTheme = {
  id: string;
  name: string;
  category: string;
  primaryColor: string;
  badgeBg: string;
  badgeText: string;
  accentColor: string;
  tagline: string;
  modules: string[];
};
