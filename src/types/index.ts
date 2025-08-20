// File types
export interface PhotoFile {
  name: string;
  size: number;
  type: string;
}

export interface Post {
  id: number;
  photos: PhotoFile[];
  message: string;
  createdAt: string;
}

export interface RSVP {
  id: number;
  name: string;
  status: 'attending' | 'not-attending';
  guestCount: number;
  createdAt: string;
}

// Rate limiting types
export interface RateLimitCheck {
  allowed: boolean;
  timeLeft?: number;
}



// Form types
export interface UploadFormData {
  photos: File[];
  message: string;
}

// Modal types
export interface ModalState {
  show: boolean;
  title: string;
  message: string;
}

// Component props
export interface HeroProps {
  title?: string;
  subtitle?: string;
}



// Error types
export interface AppError {
  message: string;
  code?: string;
  timestamp: number;
}

// Security types
export interface SecurityConfig {
  maxFileSize: number;
  maxFiles: number;
  allowedTypes: string[];
  maxMessageLength: number;
  rateLimitWindow: number;
  maxPostsPerWindow: number;
}

// Vite env typings for BASE_URL used in site.config.ts
// (moved to src/vite-env.d.ts)
 