import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-transparent.png';


interface LogoProps {
  variant?: 'default' | 'simple' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const sizeStyles = {
    sm: 'w-8 h-auto',
    md: 'w-12 h-auto',
    lg: 'w-20 h-auto'
  };

  const textSize = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl'
  };

  const LogoImage = () => (
    <img
      src={logo}
      alt="Artificial Surveillance Logo"
      className={`${sizeStyles[size]} mx-auto object-contain`}
    />
  );

  if (variant === 'icon-only') {
    return (
      <Link to="/" className={`flex justify-center ${className}`}>
        <LogoImage />
      </Link>
    );
  }

  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <LogoImage />
      {(variant === 'default' || variant === 'simple') && (
        <div>
          <span className={`font-bold text-white ${textSize[size]}`}>Artificial</span>
          <span className={`font-bold text-primary ${textSize[size]}`}>Surveillance</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
