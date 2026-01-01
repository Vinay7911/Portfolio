import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for box */}
          <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#2a2a2a", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#0a0a0a", stopOpacity: 1 }} />
          </linearGradient>
          
          {/* Red shine gradient */}
          <linearGradient id="redShine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#E30613", stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: "#E30613", stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: "#E30613", stopOpacity: 0 }} />
          </linearGradient>
          
          {/* Glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Strong glow */}
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Perfect Square box - builds from center with rotation */}
        <rect 
          x="100" 
          y="100" 
          width="0" 
          height="0" 
          fill="url(#boxGradient)" 
          stroke="#444" 
          strokeWidth="2"
          rx="5"
          transform="rotate(0 100 100)"
        >
          <animate attributeName="x" from="100" to="25" dur="0.5s" begin="0s" fill="freeze" />
          <animate attributeName="y" from="100" to="25" dur="0.5s" begin="0s" fill="freeze" />
          <animate attributeName="width" from="0" to="150" dur="0.5s" begin="0s" fill="freeze" />
          <animate attributeName="height" from="0" to="150" dur="0.5s" begin="0s" fill="freeze" />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="45 100 100"
            to="0 100 100"
            dur="0.5s"
            begin="0s"
            fill="freeze"
          />
        </rect>

        {/* Scanning lines effect */}
        <line x1="25" y1="50" x2="175" y2="50" stroke="#E30613" strokeWidth="1" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0" dur="0.3s" begin="0.6s" fill="freeze" />
          <animate attributeName="y1" from="50" to="150" dur="0.8s" begin="0.6s" fill="freeze" />
          <animate attributeName="y2" from="50" to="150" dur="0.8s" begin="0.6s" fill="freeze" />
        </line>

        {/* Border animation - draws clockwise */}
        <path 
          d="M 25 25 L 175 25 L 175 175 L 25 175 Z" 
          fill="none" 
          stroke="#E30613" 
          strokeWidth="3"
          strokeDasharray="600"
          strokeDashoffset="600"
          filter="url(#glow)"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from="600" 
            to="0" 
            dur="1s" 
            begin="0.8s" 
            fill="freeze" 
          />
        </path>

        {/* Grid pattern appears */}
        <line x1="100" y1="25" x2="100" y2="175" stroke="#333" strokeWidth="1" opacity="0">
          <animate attributeName="opacity" from="0" to="0.3" dur="0.3s" begin="1.5s" fill="freeze" />
        </line>
        <line x1="25" y1="100" x2="175" y2="100" stroke="#333" strokeWidth="1" opacity="0">
          <animate attributeName="opacity" from="0" to="0.3" dur="0.3s" begin="1.5s" fill="freeze" />
        </line>

        {/* Corner dots */}
        <circle cx="25" cy="25" r="0" fill="#E30613" filter="url(#strongGlow)">
          <animate attributeName="r" from="0" to="4" dur="0.2s" begin="1.8s" fill="freeze" />
        </circle>
        <circle cx="175" cy="25" r="0" fill="#E30613" filter="url(#strongGlow)">
          <animate attributeName="r" from="0" to="4" dur="0.2s" begin="1.85s" fill="freeze" />
        </circle>
        <circle cx="175" cy="175" r="0" fill="#E30613" filter="url(#strongGlow)">
          <animate attributeName="r" from="0" to="4" dur="0.2s" begin="1.9s" fill="freeze" />
        </circle>
        <circle cx="25" cy="175" r="0" fill="#E30613" filter="url(#strongGlow)">
          <animate attributeName="r" from="0" to="4" dur="0.2s" begin="1.95s" fill="freeze" />
        </circle>

        {/* V with particles effect */}
        <g opacity="0">
          <text
            x="50"
            y="120"
            fontFamily="Arial, sans-serif"
            fontSize="60"
            fontWeight="900"
            fill="#E30613"
            filter="url(#strongGlow)"
          >
            V
          </text>
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="2.1s" fill="freeze" />
          <animateTransform
            attributeName="transform"
            type="scale"
            from="0.3"
            to="1"
            dur="0.4s"
            begin="2.1s"
            fill="freeze"
          />
        </g>

        {/* V particles burst */}
        <circle cx="65" cy="90" r="0" fill="#E30613" opacity="0.8">
          <animate attributeName="r" from="0" to="3" dur="0.3s" begin="2.1s" fill="freeze" />
          <animate attributeName="opacity" values="0.8;0" dur="0.5s" begin="2.2s" fill="freeze" />
          <animate attributeName="cy" from="90" to="70" dur="0.5s" begin="2.1s" fill="freeze" />
        </circle>
        <circle cx="80" cy="95" r="0" fill="#ff3344" opacity="0.8">
          <animate attributeName="r" from="0" to="2" dur="0.3s" begin="2.15s" fill="freeze" />
          <animate attributeName="opacity" values="0.8;0" dur="0.5s" begin="2.25s" fill="freeze" />
          <animate attributeName="cx" from="80" to="95" dur="0.5s" begin="2.15s" fill="freeze" />
        </circle>

        {/* M with digital glitch */}
        <g opacity="0">
          <text
            x="95"
            y="120"
            fontFamily="Arial, sans-serif"
            fontSize="60"
            fontWeight="900"
            fill="white"
            filter="url(#glow)"
          >
            M
          </text>
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="2.3s" fill="freeze" />
        </g>

        {/* M glitch clones */}
        <text
          x="95"
          y="120"
          fontFamily="Arial, sans-serif"
          fontSize="60"
          fontWeight="900"
          fill="#00ffff"
          opacity="0"
        >
          M
          <animate attributeName="opacity" values="0;0.4;0" dur="0.2s" begin="2.3s" fill="freeze" />
          <animate attributeName="x" values="95;97;95" dur="0.2s" begin="2.3s" fill="freeze" />
        </text>
        <text
          x="95"
          y="120"
          fontFamily="Arial, sans-serif"
          fontSize="60"
          fontWeight="900"
          fill="#ff00ff"
          opacity="0"
        >
          M
          <animate attributeName="opacity" values="0;0.4;0" dur="0.2s" begin="2.35s" fill="freeze" />
          <animate attributeName="x" values="95;93;95" dur="0.2s" begin="2.35s" fill="freeze" />
        </text>

        {/* Dot with ripple */}
        <g opacity="0">
          <text
            x="145"
            y="120"
            fontFamily="Arial, sans-serif"
            fontSize="60"
            fontWeight="900"
            fill="white"
            filter="url(#glow)"
          >
            
          </text>
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="2.5s" fill="freeze" />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,-30; 0,5; 0,0"
            dur="0.4s"
            begin="2.5s"
            fill="freeze"
          />
        </g>

        {/* Ripple rings from dot */}
        <circle cx="157" cy="100" r="10" fill="none" stroke="white" strokeWidth="2" opacity="0">
          <animate attributeName="r" from="10" to="30" dur="0.6s" begin="2.5s" fill="freeze" />
          <animate attributeName="opacity" values="0.6;0" dur="0.6s" begin="2.5s" fill="freeze" />
        </circle>
        <circle cx="157" cy="100" r="10" fill="none" stroke="#E30613" strokeWidth="2" opacity="0">
          <animate attributeName="r" from="10" to="25" dur="0.5s" begin="2.6s" fill="freeze" />
          <animate attributeName="opacity" values="0.6;0" dur="0.5s" begin="2.6s" fill="freeze" />
        </circle>

        {/* Horizontal energy sweep */}
        <rect x="25" y="95" width="0" height="10" fill="url(#redShine)" opacity="0.8">
          <animate attributeName="width" from="0" to="150" dur="0.5s" begin="2.9s" fill="freeze" />
          <animate attributeName="opacity" values="0.8;0" dur="0.5s" begin="2.9s" fill="freeze" />
        </rect>

        {/* Final box flash */}
        <rect 
          x="25" 
          y="25" 
          width="150" 
          height="150" 
          fill="none" 
          stroke="#E30613" 
          strokeWidth="4"
          rx="5"
          opacity="0"
          filter="url(#strongGlow)"
        >
          <animate 
            attributeName="opacity" 
            values="0;1;0" 
            dur="0.6s" 
            begin="3.2s" 
            fill="freeze" 
          />
        </rect>

        {/* Final subtle pulse */}
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1 1; 1.02 1.02; 1 1"
          dur="0.5s"
          begin="3.2s"
          fill="freeze"
        />
      </svg>
    </div>
  );
}

export default Pre;
