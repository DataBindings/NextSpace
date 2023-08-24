'use client';

import { SessionProvider } from 'next-auth/react';

// Typescript interface for Props
type Props = {
  children: React.ReactNode;
};

// Auth provider warpper for children components
export default function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}