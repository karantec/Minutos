import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Load Inter font with extended Latin character support
const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap', // Improves performance by showing a fallback font until Inter loads
  variable: '--font-inter', // Makes the font available as a CSS variable
});

// Comprehensive metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://kiranapro.example.com'), // Replace with your actual domain
  title: {
    template: '%s | KiranaPro - Empowering Retailers',
    default: 'KiranaPro - Empowering Retailers',
  },
  description: 'Transforming traditional Kirana stores with digital solutions and growth strategies.',
  keywords: ['kirana stores', 'retail transformation', 'digital solutions', 'Indian retail', 'retail growth', 'small business empowerment'],
  authors: [{ name: 'KiranaPro Team' }],
  creator: 'KiranaPro',
  publisher: 'KiranaPro Inc.',
  applicationName: 'KiranaPro',
  generator: 'Next.js',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: 'business',
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kiranapro.example.com',
    title: 'KiranaPro - Empowering Retailers',
    description: 'Transforming traditional Kirana stores with digital solutions and growth strategies.',
    siteName: 'KiranaPro',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KiranaPro - Empowering Retailers',
      },
    ],
  },
  
  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'KiranaPro - Empowering Retailers',
    description: 'Transforming traditional Kirana stores with digital solutions and growth strategies.',
    creator: '@KiranaProApp',
    images: ['/images/twitter-image.jpg'],
  },
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  
  // Add verification codes for search console and other services
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    // Add other verification codes as needed
  },
  
  // Add alternate languages if you have multilingual support
  alternates: {
    canonical: 'https://kiranapro.example.com',
    languages: {
      'en-US': 'https://kiranapro.example.com/en-us',
      'hi-IN': 'https://kiranapro.example.com/hi-in',
      // Add more languages as needed
    },
  },
};

// Viewport configuration for responsive design
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable}`} 
      dir="ltr"
    >
      <head>
        {/* Preconnect to critical domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon set */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content">
          {children}
        </main>
        
        <Footer />
        
        {/* Structured data for rich results */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'KiranaPro',
              url: 'https://kiranapro.example.com',
              logo: 'https://kiranapro.example.com/images/logo.png',
              sameAs: [
                'https://www.facebook.com/KiranaProApp',
                'https://www.instagram.com/KiranaProApp',
                'https://twitter.com/KiranaProApp',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-1234567890',
                contactType: 'customer service',
                availableLanguage: ['English', 'Hindi'],
              },
            }),
          }}
        />
        
        {/* Google Analytics or Tag Manager would go here */}
      </body>
    </html>
  );
}