'use client';
import React from 'react';
import { BsPhone } from 'react-icons/bs';
import { DiAndroid } from "react-icons/di";
import { LiaLinkedinIn } from 'react-icons/lia';
import { MdEmail } from 'react-icons/md';
import { PiPhone } from 'react-icons/pi';

const resumeData = {
    name: "Sushil Kumar",
    title: "Software Engineer Grade 2",
    contact: {
        email: "sushil124maurya@gmail.com",
        phone: "+91 8219479708",
        linkedin: "https://www.linkedin.com/in/sushil-maurya-6256b4154/",
    },
    summary: "Software Engineer with around 3.7 years of experience in web application development and project building. Experienced in working with US clients and developing high-quality web applications. Skilled in using various front-end and back-end technologies, as well as Project Management Tools.",
    experience: [
        { role: "Trainee", company: "Devarty Technologies", duration: "June 2019 - June 2019" },
        { role: "Intern", company: "InfoStride Technology", duration: "March 2021 - August 2021" },
        { role: "Software Engineer Grade-2", company: "InfoStride Technologies", duration: "August 2021 – Present" }
    ],
    education: {
        degree: "Bachelor of Technology in Computer Science Engineering",
        institution: "Chandigarh Engineering College at Landran, Mohali (Punjab Technical University)",
        duration: "June 2017 - June 2021"
    },
    skills: [
        { name: "Laravel", percentage: 90 },
        { name: "PHP", percentage: 85 },
        { name: "MySQL", percentage: 80 },
        { name: "MongoDB", percentage: 75 },
        { name: "Project Management", percentage: 70 },
        { name: "JavaScript", percentage: 80 }
    ],
    projects: [
        {
            name: "Facebook Hub",
            role: "Developer",
            teamSize: 4,
            technologies: ["ReactJS", "Rest API handling"],
            summary: "The Hub, conceived with local residents as a physical connect, work, learn space, has evolved into a virtual space which will transform into a physical space when possible.",
            responsibilities: ["Implementing APIs", "Managing Nexudus Dashboard", "Redesigning built-in templates"]
        },
        {
            name: "Witlingo Audio Stations",
            role: "Software Developer",
            teamSize: 6,
            technologies: ["Laravel", "Google Cloud API", "Laravel-admin"],
            summary: "This project is developed in Laravel and SQL is used as a database. It is basically an online platform for businesses to enable their customers to engage with them using voice and audio.",
            responsibilities: ["Designing the user flow and technical document", "Fixing bugs", "Adding new features like filter and manage data flow", "Managing Laravel admin"]
        },
        {
            name: "VETTED.Work",
            role: "Software Developer",
            teamSize: 11,
            technologies: ["Laravel", "Google Cloud API", "Metronic", "ReactJS", "MySQL", "MongoDB"],
            summary: "VETTED is a comprehensive platform that provides a complete solution for vendor management, project management, and HSE performance with its SafeWork Suite of HSE management modules.",
            responsibilities: ["Designing the flow for new requirements and DB design", "Code deployment and merging other developers' code", "Project manager and client handling"]
        },
        {
            name: "1-800-LIMO",
            role: "Software Developer",
            teamSize: 2,
            technologies: ["Laravel", "Google Cloud API", "Angular", "MySQL", "MongoDB"],
            summary: "1-800-LIMO.COM is a web-based digital sales platform that matches budget and quality-minded luxury travelers with friendly and attentive drivers with safe, reliable, on-time ground transportation anywhere around the world; in clean, comfortable, and well-maintained non-autonomous vehicles, at the lowest available rates.",
            responsibilities: ["Designing the flow for new requirements and DB design", "Code deployment and server handling", "Development"]
        }
    ]
};

const ProgressBar = ({ percentage }: { percentage: number }) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

const Resume = () => {
    return (
        <div className="bg-gray-100 text-gray-800 p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
                <header className="text-left pb-4 ">
                    <div className="title-div mb-2 border-0 border-b-2 py-2">
                        <h1 className="text-3xl font-bold text-gray-900">{resumeData.name}</h1>
                        <h2 className="text-xl text-gray-700">{resumeData.title}</h2>
                    </div>

                    <div className="text-sm md:text-[15px] flex flex-col lg:flex-row md:flex-row justify-between border-0 border-b-2 py-2">
                        <p className='flex align-middle gap-1 place-items-center'><MdEmail color='black' /> <a href={`mailto:${resumeData.contact.email}`} className="text-dark hover:underline hover:text-primary">{resumeData.contact.email}</a></p>
                        <p className='flex align-middle gap-1 place-items-center  hover:underline hover:text-primary'><BsPhone color='black' /> {resumeData.contact.phone}</p>
                        <p className='flex align-middle gap-1 place-items-center  hover:underline hover:text-primary'><LiaLinkedinIn color='black' /> <a href={resumeData.contact.linkedin} className="text-dark">{resumeData.contact.linkedin}</a></p>
                    </div>
                </header>

                <section className="mb-8">
                    <h3 className="text-3xl font-semibold mb-4">Summary</h3>
                    <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
                </section>

                <section className="mb-8">
                    <h3 className="text-3xl font-semibold mb-4">Professional Experience</h3>
                    <ul className="list-disc list-inside space-y-2">
                        {resumeData.experience.map((job, index) => (
                            <li key={index}>
                                <strong>{job.role}</strong> - {job.company} | <em>{job.duration}</em>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-8">
                    <h3 className="text-3xl font-semibold mb-4">Education</h3>
                    <p className="text-gray-700"><strong>{resumeData.education.degree}</strong></p>
                    <p className="text-gray-500">{resumeData.education.institution} | <em>{resumeData.education.duration}</em></p>
                </section>

                <section className="mb-8">
                    <h3 className="text-3xl font-semibold mb-4">Key Skills</h3>
                    {resumeData.skills.map((skill, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between text-gray-700">
                                <span>{skill.name}</span>
                                <span>{skill.percentage}%</span>
                            </div>
                            <ProgressBar percentage={skill.percentage} />
                        </div>
                    ))}
                </section>

                <section>
                    <h3 className="text-3xl font-semibold mb-4">Projects</h3>
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className="mb-6">
                            <h4 className="text-2xl font-bold text-gray-800">{project.name}</h4>
                            <p className="text-gray-700"><strong>Role:</strong> {project.role}</p>
                            <p className="text-gray-700"><strong>Team Size:</strong> {project.teamSize}</p>
                            <p className="text-gray-700"><strong>Technologies/Skills Used:</strong> {project.technologies.join(", ")}</p>
                            <p className="text-gray-700"><strong>Brief Project Summary:</strong> {project.summary}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Resume;
