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
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-13 h-13',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl',
  };

  const sublineSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[10px] tracking-[0.2em]',
    lg: 'text-xs tracking-[0.22em]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Monogram */}
      <div className={`relative flex-shrink-0 ${iconDimensions[size]} group`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-electric-400 rounded-xl blur-[6px] opacity-40 group-hover:opacity-75 transition-opacity" />
        <svg
          viewBox="0 0 100 100"
          className="relative w-full h-full drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mkDarkBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>
            <linearGradient id="mkCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
            <linearGradient id="mkStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0.3)" />
            </linearGradient>
          </defs>

          {/* Base rounded square */}
          <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#mkDarkBg)" />
          <rect x="4" y="4" width="92" height="92" rx="22" stroke="url(#mkStrokeGrad)" strokeWidth="1.5" />

          {/* Inner subtle glow ring */}
          <rect x="10" y="10" width="80" height="80" rx="16" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

          {/* M Glyph - Sharp architectural path */}
          <path
            d="M 24 74 V 28 H 34.5 L 47 49.5 L 59.5 28 H 70 V 74 H 60.5 V 45.5 L 49.5 64 H 44.5 L 33.5 45.5 V 74 H 24 Z"
            fill="#ffffff"
          />

          {/* K Angle Intersect - Electric Cyan Gradient */}
          <path
            d="M 59 47.5 L 75 28 H 86 L 68 50.5 L 87 74 H 76 L 59 54.5 Z"
            fill="url(#mkCyanGrad)"
          />

          {/* Micro Engineering Dot Accent */}
          <circle cx="83.5" cy="20.5" r="4" fill="#38bdf8" />
          <circle cx="83.5" cy="20.5" r="2" fill="#ffffff" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`${titleSizes[size]} font-black tracking-tight ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            MK
          </span>
          <span
            className={`${titleSizes[size]} font-semibold tracking-wide bg-gradient-to-r from-electric-600 to-cyan-500 bg-clip-text text-transparent`}
          >
            APPLICATIONS
          </span>
        </div>
        {showSubline && (
          <span
            className={`${sublineSizes[size]} uppercase font-semibold mt-1 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Maßgeschneiderte digitale Lösungen
          </span>
        )}
      </div>
    </div>
  );
};
