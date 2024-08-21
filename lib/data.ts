import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import RentalMotor from "@/public/homepage.png";
import JelajahKalbar from "@/public/JelajahKalbar.png";
import HealthCare from "@/public/healthCare.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "SMK Raden Umar Said Kudus",
        location: "Kudus, Indonesia",
        description:
            "I studied at SMK Raden Umar Said Kudus, majoring in Software Engineering.",
        icon: React.createElement(LuGraduationCap),
        date: "2022 - Present",
    },
] as const;

export const projectsData = [
    {
        title: "Rental Motor Kudus",
        description:
            "This website is used to book motorcycles, I worked as a frontend developer on this project for 5 month. This project is the final project of the school",
        tags: ["Next.js 13", "React", "Tailwind CSS", "Framer Motion", "Shadcn"],
        imageUrl: RentalMotor,
    },
    {
        title: "JelajahKalbar",
        description:
            "I worked as a frontend developer on this project for 3 month. Users can learn about Kalimantan Barat Indonesia.",
        tags: ["HTML", "CSS", "Javascript"],
        imageUrl: JelajahKalbar,
    },
    {
        title: "HealthCare",
        description:
            "Next.js patient management website, using Appwrite as backend.",
        tags: ["Next.js 14", "Typescript", "Tailwind CSS", "Appwrite", "Framer Motion", "Shadcn"],
        imageUrl: HealthCare,
    }
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Laravel",
    "Tailwind",
    "MySQL",
    "Framer Motion",
] as const;