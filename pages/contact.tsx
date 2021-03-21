import Layout from '../components/Layout'
import Image from 'next/image'

import { faRss } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <Layout title="Blog">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <h1 className="font-bold">Contact</h1>
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

        <div className="mt-6 flex justify-around">
          <a href="">
            <FontAwesomeIcon icon={faRss} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
