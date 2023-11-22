import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Card, CardContent } from '@/components/ui/card';

import '@/styles/globals.css';

export const metadata = {
  title: 'My Pets',
  description: 'An App to check the image for your dog or translate your cats wisdom.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-secondary">
            <Card className="w-[80%] bg-primary">{children}</Card>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
