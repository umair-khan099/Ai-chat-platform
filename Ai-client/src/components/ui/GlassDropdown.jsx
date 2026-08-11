import React, { useEffect, useRef } from 'react';

export const GlassDropdown = ({
  isOpen,
  onClose,
  items = [],
  align = 'right', // 'left' | 'right'
  className = '',
  style = {}
}) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose?.();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      style={{
        position: 'absolute',
        top: '100%',
        [align]: 0,
        marginTop: '0.35rem',
        minWidth: '160px',
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid var(--glass-border)',
        borderRadius: '14px',
        boxShadow: 'var(--shadow-lg)',
        padding: '0.35rem',
        zIndex: 50,
        animation: 'fadeIn 0.15s ease-out forwards',
        ...style
      }}
      className={className}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              item.onClick?.();
              onClose?.();
            }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.5rem 0.75rem',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: item.danger ? '#ef4444' : 'var(--text-primary)',
              borderRadius: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              textAlign: 'left'
            }}
            className={item.danger ? 'hover:bg-red-50' : 'hover:bg-slate-100/80'}
          >
            {Icon && <Icon size={16} className={item.danger ? 'text-red-500' : 'text-slate-500'} />}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};
