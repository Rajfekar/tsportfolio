import React from "react"
import { motion } from "framer-motion"
type Props = {}
import Image from "next/image"
const About = ({}: Props) => {
  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        About
      </h3>
      <Image
        style={{ borderRadius: "50%", marginTop: "6rem" }}
        src={"/a2.jpeg"}
        width={120}
        height={120}
        alt={"profilepic"}
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font semibold">
          Here is a{" "}
          <span className="underline decoration-cyan-300">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          i am khemraj fekar. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Dolorum odio, maiores at eum eligendi possimus
          voluptatum cum iure excepturi! Nam voluptatem repellendus aspernatur,
          quis sunt harum odio! Reprehenderit quibusdam quo asperiores unde
          cupiditate labore nihil eveniet veniam? Facere tenetur vero
          reprehenderit cumque ullam debitis provident quod enim possimus!
          Accusamus velit voluptatibus, unde id cumque accusantium laboriosam
          reiciendis omnis temporibus voluptatem.
        </p>
      </div>
    </motion.div>
  )
}

export default About
