import { inter, SpaceGrotesk } from './fonts'
import { NavBar } from '@/components/shared/nav-bar/NavBar'
import { Header } from '@/components/shared/header/Header'
import { META_DATA } from './metadate'
import { ThemeProvider } from '@/components/ThemeProvider'
import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = META_DATA

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${SpaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            variables: {
              colorPrimary: '#FF7000'
            }
          }}
        >
          <ThemeProvider>
            <div className=" min-h-screen grid grid-cols-[minmax(min-content,max-content)_1fr] grid-rows-[100px_1fr] max-sm:grid-cols-1 ">
              <NavBar />
              <Header />
              <main className="">{children}</main>
            </div>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
