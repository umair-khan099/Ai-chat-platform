import React from 'react';

export const GlassButton = ({
  children,
  onClick,
  variant = 'secondary', // 'primary' | 'secondary' | 'ghost' | 'danger'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  className = '',
  disabled = false,
  active = false,
  title,
  type = 'button'
}) => {
  const sizeStyles = {
    sm: { padding: '0.4rem 0.75rem', fontSize: '0.8125rem', gap: '0.375rem', borderRadius: '10px' },
    md: { padding: '0.55rem 1.1rem', fontSize: '0.875rem', gap: '0.5rem', borderRadius: '12px' },
    lg: { padding: '0.75rem 1.5rem', fontSize: '0.95rem', gap: '0.625rem', borderRadius: '14px' }
  };

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 4px 14px rgba(99, 102, 241, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
    },
    secondary: {
      backgroundColor: active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.65)',
      color: active ? 'var(--accent-indigo)' : 'var(--text-primary)',
      border: active ? '1px solid var(--glass-border-focus)' : '1px solid var(--glass-border)',
      boxShadow: active ? '0 4px 12px rgba(99, 102, 241, 0.12)' : 'var(--shadow-sm)',
    },
    ghost: {
      backgroundColor: active ? 'rgba(241, 245, 249, 0.8)' : 'transparent',
      color: active ? 'var(--accent-indigo)' : 'var(--text-secondary)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    danger: {
      backgroundColor: 'rgba(254, 242, 242, 0.8)',
      color: '#ef4444',
      border: '1px solid rgba(254, 202, 202, 0.6)',
      boxShadow: 'var(--shadow-sm)'
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        outline: 'none',
        userSelect: 'none',
        ...sizeStyles[size],
        ...variantStyles[variant]
      }}
      className={`
        hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98]
        ${className}
      `}
    >
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
      {children}
    </button>
  );
};
