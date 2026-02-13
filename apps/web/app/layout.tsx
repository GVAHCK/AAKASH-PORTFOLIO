import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';
import 'react-data-grid/lib/styles.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://aakashgudivada.com'),
  title: 'Gudivada Venkata Aakash | Cloud Security & Cybersecurity Engineer',
  description:
    'Computer Science undergraduate with hands-on experience in cloud security, decentralized systems, and cybersecurity monitoring. Experienced in Azure and AWS infrastructure management, blockchain-based architectures, and security operations.',
};

export const viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

const LIGHT_THEME_COLOR = 'hsl(0 0% 100%)';
const DARK_THEME_COLOR = 'hsl(240deg 10% 3.92%)';
const THEME_COLOR_SCRIPT = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  function updateThemeColor() {
    var isDark = html.classList.contains('dark');
    meta.setAttribute('content', isDark ? '${DARK_THEME_COLOR}' : '${LIGHT_THEME_COLOR}');
  }
  var observer = new MutationObserver(updateThemeColor);
  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
  updateThemeColor();
})();`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // `next-themes` injects an extra classname to the body element to avoid
      // visual flicker before hydration. Hence the `suppressHydrationWarning`
      // prop is necessary to avoid the React hydration mismatch warning.
      // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_COLOR_SCRIPT,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Gudivada Venkata Aakash',
              jobTitle: 'Cloud & Security Engineer',
              description:
                'Computer Science undergraduate with hands-on experience in cloud security, decentralized systems, and cybersecurity monitoring. Smart India Hackathon 2025 Runner-Up.',
              url: 'https://aakashgudivada.com',
              sameAs: [
                'https://linkedin.com/in/venkata-aakash-179415288',
                'https://github.com/GVAHCK',
              ],
              worksFor: [
                {
                  '@type': 'Organization',
                  name: 'Gen-Z Galaxy Tech',
                  jobTitle: 'Cloud & Security Intern',
                },
              ],
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'SRKR Engineering College',
              },
              knowsAbout: [
                'Cloud Security',
                'Cybersecurity',
                'Azure Infrastructure',
                'AWS',
                'Blockchain',
                'Decentralized Systems',
                'Computer Vision',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased dark scroll-smooth">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-center" />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
