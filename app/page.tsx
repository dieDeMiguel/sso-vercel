/* Hallmark · macrostructure: Long Document · tone: technical-editorial
 * theme: Geist (from design.md) · genre: modern-minimal · anchor hue: blue
 * nav: N3 side-rail (collapsed to top bar) · footer: Ft1 minimal
 * enrichment: none (typography only)
 * pre-emit critique: P4 H5 E4 S5 R5 V4
 */
import type { Metadata } from 'next';
import { ProtectionPage } from './_components/protection-page';
import { CONTENT } from '@/lib/protection-content';

export const metadata: Metadata = {
  title: CONTENT.es.meta.title,
  description: CONTENT.es.meta.description,
};

export default function Home() {
  return <ProtectionPage lang="es" />;
}
