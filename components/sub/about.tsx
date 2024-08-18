'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className='mb-28 max-w-[45rem]
            text-center leading-8 scroll-mt-28 sm:mb-40'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>
                Hello! I am a student at the age of 17, currently studying web development in extra class SMK (senior high),
                year 3. My passion is <i>coding</i>, I already developed a few websites using <b>Next.Js, React and Tailwind CSS</b> In multiple project.
                A junior web developer by profession, A learner who follows the trends and technology based on today's needs in Human computer interaction.
                I am someone who bounces back as quickly as They takes off, someone who is never <b>late</b> to a challenge.
                I am a <b>team player</b> and very good in <b>communication skills</b> which helps me to work together with people.
                I wanna always be a better coder and further learning to keep up with the fast pace of technology evolution, as front-end.
            </p>
            <p>
                In any case, in my spare time I play games and learn soft skills which are useful with frontend technologies and spend time with cats.
                I am consistently searching for methods to <i>move in that path of my best self every single day</i>.
            </p>
            {/* <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Accounting</span>, I decided to pursue my
                passion for programming. I enrolled in a coding bootcamp and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with TypeScript and Prisma. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p> */}

            {/* <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching movies, and playing with my dog. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">history and philosophy</span>. I'm also
                learning how to play the guitar.
            </p> */}
        </motion.section>
    )
}
