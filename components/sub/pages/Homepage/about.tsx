'use client';

import React from 'react';
import SectionHeading from '../../section-heading';
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
                year 3. My passion is <i>coding</i>, I already developed a few websites using <b>Next.Js, React and Tailwind CSS</b> in multiple projects.
                A junior web developer by profession, a learner who follows the trends and technology based on today&apos;s needs in Human computer interaction.
                I am someone who bounces back as quickly as they take off, someone who is never <b>late</b> to a challenge.
                I am a <b>team player</b> and very good in <b>communication skills</b>, which helps me to work together with people.
                I always strive to be a better coder and continue learning to keep up with the fast pace of technology evolution, especially in front-end development.
            </p>
            <p>
                In any case, in my spare time I play games and learn soft skills that are useful with frontend technologies, and spend time with cats.
                I am consistently searching for methods to <i>move in the direction of my best self every single day</i>.
            </p>
        </motion.section>
    );
}
