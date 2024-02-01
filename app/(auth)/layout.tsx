'use client'
import React from 'react'
import { redirect } from 'next/navigation'
import { DialogContent, Dialog } from '@/components/ui/dialog'
const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Dialog defaultOpen onOpenChange={() => redirect('/')}>
    <DialogContent>{children}</DialogContent>
  </Dialog>
)
export default Layout
