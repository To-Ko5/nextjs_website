import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from './common/Header'
import Footer from './common/Footer'

interface Title {
  title?: string
}

const Layout: React.FC<Title> = ({ children, title = 'title' }) => {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
