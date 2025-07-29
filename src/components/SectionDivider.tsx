import React from 'react';

const SectionDivider: React.FC = React.memo(() => {
  return (
    <div className="section-divider">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,0 C480,60 960,0 1440,60 L1440,60 L0,60 Z" fill="#fff7f0"/>
      </svg>
    </div>
  );
});

SectionDivider.displayName = 'SectionDivider';

export default SectionDivider; 