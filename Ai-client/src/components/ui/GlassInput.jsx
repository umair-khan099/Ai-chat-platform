import React from 'react';

export const GlassInput = ({
  value,
  onChange,
  placeholder,
  icon: Icon,
  className = '',
  type = 'text',
  onKeyDown,
  autoFocus = false
}) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      }}
    >
      {Icon && (
        <span
          style={{
            position: 'absolute',
            left: '0.85rem',
            color: 'var(--text-tertiary)',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Icon size={16} />
        </span>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        autoFocus={autoFocus}
        style={{
          width: '100%',
          padding: Icon ? '0.55rem 0.85rem 0.55rem 2.4rem' : '0.55rem 0.85rem',
          fontSize: '0.875rem',
          color: 'var(--text-primary)',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          border: '1px solid var(--glass-border-subtle)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          outline: 'none',
          transition: 'all 0.2s ease',
          boxShadow: 'inset 0 1px 2px rgba(15, 23, 42, 0.03)'
        }}
        className={`
          focus:border-indigo-400 focus:bg-white/80 focus:ring-2 focus:ring-indigo-500/15
          placeholder:text-slate-400
          ${className}
        `}
      />
    </div>
  );
};
