import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

// export const metadata = {
//   title: {
//     default: 'OS Upflow',
//     template: '%s | OS Upflow',
//   },
//   description:
//     'Sistema simples de ordens de serviço para oficinas mecânicas e autocenters, com gestão via WhatsApp e painel web.',
//   applicationName: 'OS Upflow',
//   authors: [{ name: 'Alex Moreira', github: 'https://github.com/MoreiraAlex' }],
//   keywords: [
//     'ordem de serviço',
//     'oficina mecânica',
//     'autocenter',
//     'gestão de oficina',
//     'whatsapp',
//     'OS',
//   ],
//   // metadataBase: new URL('https://osupflow.com'),
// }

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="antialiased" suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="">
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
