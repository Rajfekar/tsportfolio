import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
type Props = {}
const Header = ({}: Props) => {
  return (
    <header className="sticky top-1 flex items-start justify-between max-w-7xl mx-5 z-20 xl:items-center ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center "
      >
        <SocialIcon
          className="hover:animate-pulse"
          fg-color="gray"
          bgColor="white"
          style={{ height: 30, width: 30, margin: 10 }}
          url="https://linkedin.com/in/jaketrent"
        />
        <SocialIcon
          className="hover:animate-pulse"
          fg-color="gray"
          bgColor="#f4f7f7"
          style={{ height: 30, width: 30, margin: 10 }}
          url="https://twitter.com/in/jaketrent"
        />
        <SocialIcon
          className="hover:animate-pulse"
          fg-color="gray"
          bgColor="white"
          style={{ height: 30, width: 30, margin: 10 }}
          url="https://github.com/in/jaketrent"
        />
        {/* <SocialIcon url="https://instagram.com/in/jaketrent" />
        <SocialIcon url="https://whatsapp.com/in/jaketrent" />
        <SocialIcon url="https://facebook.com/in/jaketrent" />
        <SocialIcon url="https://youtube.com/in/jaketrent" /> */}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          style={{ height: 30, width: 30, margin: 10 }}
          className="cursor-pointer hover:animate-pulse"
          network="email"
          fg-color="gray"
          bgColor="white"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  )
}

export default Header
