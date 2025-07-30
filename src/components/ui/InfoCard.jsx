import React from 'react';

export default function InfoCard({ icon, title, children, button }) {
  return (
    <div className="border rounded-lg p-6 shadow-sm text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <div className="text-gray-700">{children}</div>
      {button && <div className="mt-3">{button}</div>}
    </div>
  );
}