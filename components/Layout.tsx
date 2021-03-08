import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/common/header'

interface layout {
  children: React.ReactNode
  title?: string
}

const Layout = ({ children, title = 'title' }: layout) => {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
    </div>
  )
}

export default Layout
