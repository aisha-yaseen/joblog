import React from 'react';

interface LogoProps {
  markOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ markOnly = false, size = 'md' }: LogoProps) {
  const markSize = size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
  const lineClass = size === 'sm' ? 'w-2 h-[2px]' : size === 'lg' ? 'w-3.5 h-[2.5px]' : 'w-2.5 h-[2px]';
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <div className="flex items-center gap-3 select-none">
      <div
        className={`${markSize} rounded-[7px] bg-[#247D99] flex items-center justify-center transform rotate-45 shrink-0`}
        aria-hidden="true"
      >
        <div className="transform -rotate-45 flex flex-col items-center justify-center gap-[2.5px]">
          <span className={`${lineClass} bg-white rounded-full`}></span>
          <span className={`${lineClass} bg-white rounded-full`}></span>
          <span className={`${lineClass} bg-white rounded-full`}></span>
        </div>
      </div>
      {!markOnly && (
        <span
          className={`${textSize} font-bold text-[#060F12] tracking-tight leading-none`}
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          Joblog
        </span>
      )}
    </div>
  );
}
