import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Laptop AI Picker',
  description: 'Минималистичное приложение для подбора ноутбуков под задачу.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
