import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Fira_Code } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import BinaryCursor from './_components/cursor-animation-wrapper';
import { Header } from './_components/header';
import { Footer } from './_components/footer';

export const metadata: Metadata = {
  title: {
    default: 'Gudivada Venkata Aakash | Cloud Security & Cybersecurity Engineer',
    template: '%s • Aakash Gudivada',
  },
  description:
    'Computer Science undergraduate with hands-on experience in cloud security, decentralized systems, and cybersecurity monitoring. Experienced in Azure and AWS infrastructure management, blockchain-based architectures, and security operations. Smart India Hackathon 2025 Runner-Up.',
  metadataBase: new URL('https://aakashgudivada.com'),
  applicationName: "Gudivada Venkata Aakash's Portfolio",
  authors: [
    {
      name: 'Gudivada Venkata Aakash',
      url: 'https://linkedin.com/in/venkata-aakash-179415288',
    },
  ],
  category: 'Portfolio Website',
  keywords: [
    'Cloud Security',
    'Cybersecurity',
    'Azure',
    'AWS',
    'Blockchain',
    'Decentralized Systems',
    'Python',
    'Java',
    'ReactJS',
    'NodeJS',
    'Computer Vision',
    'B.Tech CSE',
  ],
  robots: {
    follow: true,
    index: true,
  },

  alternates: {
    canonical: 'https://aakashgudivada.com',
  },
  openGraph: {
    title: 'Gudivada Venkata Aakash | Cloud Security & Cybersecurity Engineer',
    description:
      'Computer Science undergraduate specializing in cloud security, decentralized systems, and cybersecurity. Smart India Hackathon 2025 Runner-Up.',
    siteName: 'Gudivada Venkata Aakash',
    type: 'website',
    url: 'https://aakashgudivada.com',
    emails: ['venkataaakash5@gmail.com'],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gudivada Venkata Aakash - Cloud Security Engineer',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    title: 'Gudivada Venkata Aakash | Cloud Security & Cybersecurity Engineer',
    description:
      'Computer Science undergraduate specializing in cloud security, decentralized systems, and cybersecurity. Smart India Hackathon 2025 Runner-Up.',
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#060606', // Only using dark theme
  colorScheme: 'dark', // Only using dark theme
  width: 'device-width',
  initialScale: 1,
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fira-code',
  display: 'block',
});

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gudivada Venkata Aakash',
  url: 'https://aakashgudivada.com',
  image: 'https://aakashgudivada.com/og-image.png',
  jobTitle: 'Cloud & Security Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Gen-Z Galaxy Tech',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'SRKR Engineering College',
  },
  sameAs: [
    'https://linkedin.com/in/venkata-aakash-179415288',
    'https://github.com/GVAHCK',
  ],
  knowsAbout: [
    'Cloud Security',
    'Cybersecurity',
    'Azure Infrastructure',
    'AWS',
    'Blockchain',
    'Decentralized Systems',
    'Python',
    'ReactJS',
  ],
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-8ELMHNMBW2';

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Google Analytics - Moved to top for better loading */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>

      <div lang="en" className="dark scroll-smooth">
        <div
          className={`scroll-smooth bg-neutral-50 dark:bg-neutral-950 font-sans text-neutral-900 dark:text-neutral-300 selection:bg-emerald-400 selection:text-neutral-950 dark:selection:bg-emerald-500 dark:selection:text-neutral-950 ${inter.variable} ${jetbrainsMono.variable} ${firaCode.variable}`}
        >
          <div className="relative grain">
            <BinaryCursor />
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>

        {/* Vercel Analytics */}
        <Analytics />
      </div>
    </>
  );
}
