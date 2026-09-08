import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const PUBLIC_DIR = fileURLToPath(new URL('../../public/', import.meta.url));
const SHAPE = /<(path|circle|ellipse|rect|polygon|polyline|line)\b([^>]*?)(\/?)>/g;

/**
 * Inline an undraw-style SVG from public/ so its shapes can be drawn in.
 * Each shape outside <defs> gets `pathLength="1"` (so dash math is unit-free),
 * a stroke matching its fill, and `--i` for the stagger. Ids are prefixed
 * so nine inlined files do not collide.
 */
export function inlineIllustration(name: string, className = ''): string {
  let svg = readFileSync(`${PUBLIC_DIR}${name}.svg`, 'utf8').replace(/<\?xml[^>]*>\s*/, '');

  // Prefix ids and their references.
  svg = svg.replace(/\bid="([^"]+)"/g, `id="${name}-$1"`).replace(/url\(#([^)]+)\)/g, `url(#${name}-$1)`);

  // Split out <defs> so pattern content is left alone.
  const parts = svg.split(/(<defs>[\s\S]*?<\/defs>)/);
  let i = 0;
  const out = parts
    .map((part) => {
      if (part.startsWith('<defs>')) return part;
      return part.replace(SHAPE, (_m, tag: string, attrs: string, selfClose: string) => {
        const fill = attrs.match(/\bfill="(#[0-9a-fA-F]{3,8})"/)?.[1];
        const stroke = fill && !/\bstroke=/.test(attrs) ? ` stroke="${fill}"` : '';
        return `<${tag}${attrs}${stroke} pathLength="1" style="--i:${i++}"${selfClose}>`;
      });
    })
    .join('');

  // Root: drop fixed size, add hooks. `--n` lets CSS spread the stagger evenly.
  return out.replace(/<svg\b([^>]*)>/, (_m, attrs: string) => {
    const kept = attrs.replace(/\s(width|height|role|artist|source)="[^"]*"/g, '');
    return `<svg${kept} class="illo ${className}" style="--n:${i}" aria-hidden="true" focusable="false">`;
  });
}
