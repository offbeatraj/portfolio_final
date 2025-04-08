'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Load Spline only on client
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

// Replace this with your own particle implementation
import BackgroundParticles from './BackgroundParticles';

interface BackgroundWrapperProps {
  children: ReactNode;
}

export default function BackgroundWrapper({ children }: BackgroundWrapperProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* 🌌 Persistent Spline + Particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Spline scene="https://prod.spline.design/hNxcy2VI0Vaq3CeB/scene.splinecode" />
        <BackgroundParticles />
      </div>

      {/* 📦 Section Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}