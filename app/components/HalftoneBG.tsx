'use client';
import { HalftoneDots } from '@paper-design/shaders-react';

export default function HalftoneBG() {
  return (
    <div className="fixed inset-0 -z-10">
      <HalftoneDots
        image="/assets/64a25c6b93ad13ce30aa73d1_background-texture.jpg"
        colorBack="#f2f1e8"
        colorFront="#2b2b2b"
        originalColors={false}
        type="gooey"
        grid="hex"
        inverted={false}
        size={0.5}
        radius={1.25}
        contrast={0.4}
        grainMixer={0.2}
        grainOverlay={0.2}
        grainSize={0.5}
        fit="cover"
        width="100%"
        height="100%"
      />
    </div>
  );
}
