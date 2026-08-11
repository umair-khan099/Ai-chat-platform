import React from 'react';

export const GlassPanel = ({
  children,
  className = '',
  variant = 'default', // 'default' | 'subtle' | 'elevated' | 'glow'
  interactive = false,
  onClick,
  style = {}
}) => {
  const baseStyles = {
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    borderRadius: '16px'
  };

  const variantStyles = {
    default: {
      backgroundColor: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      boxShadow: 'var(--shadow-glass)'
    },
    subtle: {
      backgroundColor: 'var(--glass-bg-subtle)',
      border: '1px solid var(--glass-border-subtle)',
      boxShadow: 'var(--shadow-sm)'
    },
    elevated: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      border: '1px solid var(--glass-border)',
      boxShadow: 'var(--shadow-lg)'
    },
    glow: {
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      boxShadow: '0 8px 32px rgba(99, 102, 241, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.9)'
    }
  };

  return (
    <div
      onClick={onClick}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...style
      }}
      className={`
        ${interactive ? 'cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:bg-white/85 active:translate-y-0' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
