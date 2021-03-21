import Link from 'next/link'
const header = () => {
  return (
    <header className="bg-gray-800 w-screen">
      <nav>
        <div className="flex items-center pl-8 h-14">
          <div className="flex space-x-4">
            <Link href="/">
              <a
                data-testid="home-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Home
              </a>
            </Link>
            <Link href="/blog">
              <a
                data-testid="blog-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <a
                data-testid="contact-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default header
