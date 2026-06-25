import type { Metadata } from 'next';
import { ProtectionPage } from '../_components/protection-page';
import { CONTENT } from '@/lib/protection-content';

export const metadata: Metadata = {
  title: CONTENT.en.meta.title,
  description: CONTENT.en.meta.description,
};

export default function EnglishHome() {
  return <ProtectionPage lang="en" />;
}
