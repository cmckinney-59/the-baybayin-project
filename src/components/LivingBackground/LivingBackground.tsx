import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { useLocation } from "react-router-dom";

import { useAlphabet } from "../../contexts/AlphabetContext";
import {
  SIGNATURE_SCRIPTS,
  alphabetFromPathname,
  fieldForAlphabet,
  particlesFor,
  type GlyphParticle,
} from "./scriptFields";
import "./LivingBackground.css";

type Layer = {
  id: number;
  name: string;
  fontClass: string;
  particles: GlyphParticle[];
  leaving: boolean;
};

const FADE_MS = 1800;
const ROTATE_MS = 26000;

let layerSeq = 1;

function makeLayer(name: string): Layer {
  const field = fieldForAlphabet(name);
  return {
    id: layerSeq++,
    name: field.key,
    fontClass: field.fontClass,
    particles: particlesFor(field.key, field.glyphs),
    leaving: false,
  };
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export default function LivingBackground() {
  const { pathname } = useLocation();
  const { currentAlphabet } = useAlphabet();
  const reducedMotion = usePrefersReducedMotion();

  const routeAlphabet = alphabetFromPathname(pathname);
  const onTransliterator = pathname.startsWith("/transliterator");
  const lockedAlphabet =
    routeAlphabet ??
    (onTransliterator ? currentAlphabet || "Baybayin" : null);

  const [signatureIndex, setSignatureIndex] = useState(0);

  useEffect(() => {
    if (lockedAlphabet || reducedMotion) return;
    const id = window.setInterval(() => {
      setSignatureIndex((index) => (index + 1) % SIGNATURE_SCRIPTS.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [lockedAlphabet, reducedMotion]);

  const activeName = lockedAlphabet ?? SIGNATURE_SCRIPTS[signatureIndex];
  const [layers, setLayers] = useState<Layer[]>(() => [makeLayer(activeName)]);

  useEffect(() => {
    setLayers((prev) => {
      const current = prev.find((layer) => !layer.leaving);
      if (current?.name === activeName) return prev;
      return [
        ...prev.map((layer) => ({ ...layer, leaving: true })),
        makeLayer(activeName),
      ];
    });

    const timeout = window.setTimeout(() => {
      setLayers((prev) => {
        const visible = prev.filter((layer) => !layer.leaving);
        return visible.length > 0 ? visible : prev.slice(-1);
      });
    }, FADE_MS);

    return () => window.clearTimeout(timeout);
  }, [activeName]);

  return (
    <div className="living-bg" aria-hidden="true">
      {layers.map((layer) => (
        <GlyphLayer key={layer.id} layer={layer} />
      ))}
    </div>
  );
}

function GlyphLayer({ layer }: { layer: Layer }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const className =
    shown && !layer.leaving ? "living-bg-layer is-visible" : "living-bg-layer";

  return (
    <div className={`${className} ${layer.fontClass}`} data-script={layer.name}>
      {layer.particles.map((particle) => (
        <span
          key={particle.id}
          className="living-glyph"
          style={
            {
              "--left": particle.left,
              "--size": particle.size,
              "--duration": particle.duration,
              "--delay": particle.delay,
              "--drift": particle.drift,
              "--ink": particle.ink,
              "--top": particle.top,
            } as CSSProperties
          }
        >
          {particle.glyph}
        </span>
      ))}
    </div>
  );
}
