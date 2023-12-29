import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '레벨업 날씨 AI 챗봇',
  description: '실시간 날씨 정보와 AI 대화를 결합한 새로운 웹 경험',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
