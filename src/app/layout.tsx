import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WonderRead Collection Hub | Independent Supabase Directory',
  description: 'Official and community Supabase story collections directory for WonderRead. Discover, inspect, and install storybooks directly to Apple devices.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
