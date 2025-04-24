import React from 'react';
import './LoadingOverlay.scss';

export default function LoadingOverlay({ open }) {
  if (!open) return null;
  return (
    <div className="loading-overlay">
      <div className="spinner" />
    </div>
  );
}
