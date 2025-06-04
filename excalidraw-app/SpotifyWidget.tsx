import React, { useState } from 'react';

const SpotifyWidget: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const toggleWidget = () => {
    setVisible(!visible);
  };

  return (
    <>
      {/* Heart Toggle Button */}
      <button
        onClick={toggleWidget}
        style={{
          position: 'fixed',
          bottom: 120,
          right: 30,
          zIndex: 1001,
          fontSize: '28px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          animation: 'float 2s ease-in-out infinite',
          transform: visible ? 'scale(1.2)' : 'scale(1)',
        }}
        title={visible ? 'Hide music' : 'Show music'}
      >
        {visible ? '💖' : '🤍'}
      </button>

      {/* Spotify Player */}
      {visible && (
        <div
          style={{
            position: 'fixed',
            bottom: 150,
            right: 20,
            zIndex: 1000,
            width: '300px',
            transition: 'opacity 0.5s',
          }}
        >
          <iframe
        	style={{ borderRadius: '12px' }}
        	src="https://open.spotify.com/embed/playlist/2wj02lVqpIfNRetshurdZP?utm_source=generator"
        	width="100%"
        	height="152"
        	frameBorder="0"
        	allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        	loading="lazy"
      	></iframe>
        </div>
      )}

      {/* Animation Style */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </>
  );
};

export default SpotifyWidget;



<iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/2wj02lVqpIfNRetshurdZP?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>