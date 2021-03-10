import Layout from '../components/Layout'
import Image from 'next/image'

function Contact() {
  return (
    <Layout title="Blog">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <h1 className="font-bold">Blog</h1>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/icon.png"
            width={80}
            height={80}
            alt="icon画像"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">E-Mail</p>
          <p className="text-s mt-2 text-gray-700">demo@gmail.com</p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
