import React from 'react';

export const GlassCard = ({
  title,
  description,
  icon: Icon,
  onClick,
  className = ''
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '1.15rem 1.25rem',
        borderRadius: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        border: '1px solid var(--glass-border)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        boxShadow: 'var(--shadow-glass)',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        textAlign: 'left'
      }}
      className={`
        hover:-translate-y-1 hover:bg-white/90 hover:border-indigo-200 hover:shadow-lg active:translate-y-0
        group ${className}
      `}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
        {Icon && (
          <div
            style={{
              padding: '0.45rem',
              borderRadius: '10px',
              backgroundColor: 'rgba(99, 102, 241, 0.08)',
              color: 'var(--accent-indigo)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            className="group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white"
          >
            <Icon size={18} />
          </div>
        )}
        <h4 style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--text-primary)' }}>
          {title}
        </h4>
      </div>
      {description && (
        <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {description}
        </p>
      )}
    </div>
  );
};
