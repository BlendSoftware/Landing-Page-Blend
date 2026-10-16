import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Blend Software: desarrollo de software a medida en Mendoza';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public', 'logo-blend-mark.svg'));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#F5F7F6',
          color: '#15282D',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={64} height={60} alt="" />
          <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>Blend Software</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900 }}>
          <span style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2.5 }}>
            Software a medida para empresas que ya no entran en una planilla
          </span>
          <span style={{ fontSize: 28, color: '#3E5459', maxWidth: 700 }}>
            Sistemas de gestión, automatización e integraciones. Mendoza, Argentina.
          </span>
        </div>
        <div style={{ position: 'absolute', right: 0, bottom: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ width: 300, height: 10, background: '#73ABB5', borderRadius: 10 }} />
          <div style={{ width: 240, height: 10, background: '#CFB23A', borderRadius: 10, marginLeft: 60 }} />
          <div style={{ width: 180, height: 10, background: '#B78801', borderRadius: 10, marginLeft: 120 }} />
          <div style={{ height: 40 }} />
        </div>
      </div>
    ),
    size,
  );
}
