import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* Vibrant, colorful and flashy animated background */
    background: 
      radial-gradient(circle at 20% 80%, rgba(255, 0, 150, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(255, 255, 0, 0.2) 0%, transparent 50%),
      linear-gradient(
        135deg,
        #ff0080 0%,
        #ff8c00 20%,
        #00ff80 40%,
        #0080ff 60%,
        #8000ff 80%,
        #ff0080 100%
      ),
      linear-gradient(
        45deg,
        #ff6b6b 0%,
        #4ecdc4 25%,
        #45b7d1 50%,
        #96ceb4 75%,
        #ffeaa7 100%
      );
    background-size: 300% 300%, 400% 400%, 200% 200%, 300% 300%, 400% 400%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    animation: colorShift 12s ease-in-out infinite;
    min-height: 100vh;
    line-height: 1.6;
    position: relative;
  }
  
  @keyframes colorShift {
    0%, 100% {
      background-position: 0% 50%, 0% 50%, 0% 50%, 0% 50%, 0% 50%;
    }
    25% {
      background-position: 100% 50%, 25% 75%, 50% 0%, 25% 25%, 75% 25%;
    }
    50% {
      background-position: 50% 100%, 75% 25%, 100% 50%, 50% 75%, 50% 50%;
    }
    75% {
      background-position: 25% 0%, 50% 100%, 25% 75%, 75% 0%, 25% 75%;
    }
  }
  
  /* Add animated geometric shapes and sparkle effects */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.8) 2px, transparent 2px),
      radial-gradient(circle at 85% 85%, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
      radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.9) 1.5px, transparent 1.5px),
      radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
      radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.8) 2px, transparent 2px),
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.6) 1px, transparent 1px);
    background-size: 100px 100px, 150px 150px, 80px 80px, 120px 120px, 200px 200px, 90px 90px;
    animation: sparkle 8s linear infinite;
    pointer-events: none;
    z-index: -1;
    opacity: 0.4;
  }
  
  @keyframes sparkle {
    0%, 100% {
      transform: translateX(0) translateY(0) rotate(0deg);
      opacity: 0.4;
    }
    25% {
      transform: translateX(10px) translateY(-5px) rotate(90deg);
      opacity: 0.6;
    }
    50% {
      transform: translateX(-5px) translateY(10px) rotate(180deg);
      opacity: 0.3;
    }
    75% {
      transform: translateX(15px) translateY(5px) rotate(270deg);
      opacity: 0.7;
    }
  }
  
  /* Add floating geometric shapes for extra visual appeal */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.1) 55%, transparent 60%),
      linear-gradient(-45deg, transparent 40%, rgba(255, 255, 255, 0.08) 45%, rgba(255, 255, 255, 0.08) 55%, transparent 60%);
    background-size: 60px 60px, 80px 80px;
    animation: geometricFloat 15s ease-in-out infinite;
    pointer-events: none;
    z-index: -1;
    opacity: 0.3;
  }
  
  @keyframes geometricFloat {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg) scale(1);
      opacity: 0.3;
    }
    33% {
      transform: translate(20px, -15px) rotate(120deg) scale(1.1);
      opacity: 0.5;
    }
    66% {
      transform: translate(-15px, 20px) rotate(240deg) scale(0.9);
      opacity: 0.2;
    }
  }

  #root {
    min-height: 100vh;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const colors = {
  primary: '#ff0080',
  secondary: '#00ff80',
  accent: '#0080ff',
  white: '#ffffff',
  lightGray: '#f8f9fa',
  gray: '#6c757d',
  darkGray: '#343a40',
  black: '#000000',
  success: '#00ff80',
  warning: '#ff8c00',
  error: '#ff0080',
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowHover: 'rgba(0, 0, 0, 0.2)',
  vibrant1: '#ff6b6b',
  vibrant2: '#4ecdc4',
  vibrant3: '#45b7d1',
  vibrant4: '#96ceb4',
  vibrant5: '#ffeaa7',
  vibrant6: '#a8e6cf'
};

export const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '992px',
  large: '1200px'
};

export const animations = {
  fast: '0.2s ease',
  normal: '0.3s ease',
  slow: '0.5s ease',
  bounce: '0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

// Common styled components
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 16px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
  color: ${colors.white};
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${animations.normal};
  font-size: 14px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Card = styled.div`
  background: ${colors.white};
  border-radius: 16px;
  box-shadow: 0 4px 20px ${colors.shadow};
  transition: all ${animations.normal};
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px ${colors.shadowHover};
  }
`;