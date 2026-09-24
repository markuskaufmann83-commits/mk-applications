import React from 'react';

interface LogoProps {
  className?: string;
  showSubline?: boolean;
  isDark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showSubline = true,
  isDark = false,
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-base font-bold',
    md: 'text-xl font-bold tracking-tight',
    lg: 'text-2xl font-extrabold tracking-tight',
  };

  const sublineSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[11px] tracking-widest',
    lg: 'text-xs tracking-widest',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric MK Monogram SVG */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f3460" />
              <stop offset="100%" stopColor="#0a2240" />
            </linearGradient>
            <linearGradient id="logoCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>

          {/* Rounded base badge */}
          <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#logoNavyGrad)" />
          <rect x="5" y="5" width="90" height="90" rx="21" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

          {/* M Letter (White) */}
          <path
            d="M 22 74 V 28 H 33 L 46 52 L 59 28 H 70 V 74 H 60 V 46 L 49.5 65 H 42.5 L 32 46 V 74 H 22 Z"
            fill="#ffffff"
          />

          {/* K Letter Angle (Cyan/Teal Gradient) */}
          <path
            d="M 60 48 L 76 28 H 88 L 69 51 L 89 74 H 76 L 60 55 Z"
            fill="url(#logoCyanGrad)"
          />

          {/* Tech Accent Dot */}
          <circle cx="84" cy="22" r="4.5" fill="#14b8a6" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`${titleSizes[size]} font-black ${isDark ? 'text-white' : 'text-navy-900'} leading-none`}>
            MK
          </span>
          <span className={`${titleSizes[size]} font-light ${isDark ? 'text-cyan-400' : 'text-electric-600'} leading-none tracking-wide`}>
            APPLICATIONS
          </span>
        </div>
        {showSubline && (
          <span
            className={`${sublineSizes[size]} uppercase font-medium mt-1 ${
              isDark ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Maßgeschneiderte digitale Lösungen
          </span>
        )}
      </div>
    </div>
  );
};
