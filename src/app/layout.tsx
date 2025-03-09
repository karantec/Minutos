import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Script from 'next/script';

// Load Inter font with extended Latin character support
const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap', // Improves performance by showing a fallback font until Inter loads
  variable: '--font-inter', // Makes the font available as a CSS variable
});

// Comprehensive metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://minutos.example.com'), // Replace with your actual domain
  title: {
    template: '%s | Minutos - A Local Delivery Shop',
    default: 'Minutos - A Local Delivery Shop',
  },
  description: 'India\'s fastest neighborhood delivery app. Get groceries, food, and essentials delivered in minutes.',
  keywords: ['delivery app', 'local delivery', 'fast delivery', 'India delivery', 'grocery delivery', 'food delivery'],
  authors: [{ name: 'Minutos Team' }],
  creator: 'Minutos',
  publisher: 'Minutos Inc.',
  applicationName: 'Minutos',
  generator: 'Next.js',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: 'ecommerce',
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://minutos.example.com',
    title: 'Minutos - A Local Delivery Shop',
    description: 'India\'s fastest neighborhood delivery app. Get groceries, food, and essentials delivered in minutes.',
    siteName: 'Minutos',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Minutos - Local Delivery',
      },
    ],
  },
  
  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Minutos - A Local Delivery Shop',
    description: 'India\'s fastest neighborhood delivery app. Get groceries, food, and essentials delivered in minutes.',
    creator: '@MinutosApp',
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
    canonical: 'https://minutos.example.com',
    languages: {
      'en-US': 'https://minutos.example.com/en-us',
      'hi-IN': 'https://minutos.example.com/hi-in',
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
        
        <main id="main-content">
          {children}
        </main>
        
        {/* Structured data for rich results */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Minutos',
              url: 'https://minutos.example.com',
              logo: 'https://minutos.example.com/images/logo.png',
              sameAs: [
                'https://www.facebook.com/MinutosApp',
                'https://www.instagram.com/MinutosApp',
                'https://twitter.com/MinutosApp',
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