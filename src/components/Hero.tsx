import React from "react"
import BackgroundCircle from "../components/BackgroundCircle"
import Image from "next/image"
import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"
type Props = {}
const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Khemraj Fekar",
      "Guy-who-love-Reading.tsx",
      "<ButLovesToCodeMore/>",
    ],
    // deleteSpeed: 50,
    loop: true,
    delaySpeed: 2500,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        style={{ borderRadius: "50%" }}
        src={"/a2.jpeg"}
        width={80}
        height={80}
        alt={"profilepic"}
      />
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px] mt-[-5px]">
        Software Engineer
      </h2>
      <h1>
        <span className="text-xl lg:text-4xl font-semibold">{text}</span>
        <Cursor cursorColor="cyan" />
      </h1>
      <div className="z-10">
        <Link href={"#about"}>
          <button type="button" className="heroButton">
            About
          </button>
        </Link>
        <Link href={"#experience"}>
          <button type="button" className="heroButton">
            Experience
          </button>
        </Link>
        <Link href={"#skills"}>
          <button type="button" className="heroButton">
            Skills
          </button>
        </Link>
        <Link href={"#projects"}>
          <button type="button" className="heroButton">
            Projects
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
