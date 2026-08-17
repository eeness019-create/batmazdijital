import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    links: [
      {
        rel: 'icon',
        href: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Batmaz — Web Tasarım, Marka ve Dijital Hizmetler',
      },
      {
        name: 'description',
        content: 'Batmaz Dijital Stüdyo; işletmeler için web tasarım, web geliştirme, logo, marka kimliği ve grafik tasarım hizmetleri sunar.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
