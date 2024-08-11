import StreamVideoProvider from '@/Providers/StreamClientProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Meat",
  description: "Video Calling Platform",
  icons : {
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ({children} : { children: ReactNode } ) => {
  return (
   <main>
    <StreamVideoProvider>
    {children}
    </StreamVideoProvider>
   </main>
  )
}

export default RootLayout

