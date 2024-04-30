import Header from '@/components/ui/header'




export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header/>
          {children}
        </div>
      </body>
    </html>
  )
}