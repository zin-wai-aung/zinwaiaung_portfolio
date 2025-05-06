"use client";

import React from 'react'
import { Button, Timeline } from "flowbite-react";
import { FaAward } from 'react-icons/fa';
import Image from 'next/image';

const EducationTimelineUI = () => {
  return (
    <>
      <h1 className=" font-bold text-3xl md:text-4xl mb-5 dark:text-Darksecondary font-tangerine">
        Education & Certifications
      </h1>

      <Timeline>
        {/* SWD */}
        <Timeline.Item className=" bg-Darksecondary-muted/10 p-3 md:p-5 rounded-xl">
          <Timeline.Point icon={FaAward} />
          <Timeline.Content>
            <div className=" flex items-center gap-x-5">
              <Image
                src="/images/certificate/SWDcertificate.jpeg"
                alt="web certification"
                width={85}
                height={100}
                className=" rounded-lg"
              />
              <div>
                <Timeline.Title className="dark:text-Darksecondary text-[1rem] md:text-xl">
                  Special Web Design (SWD)
                </Timeline.Title>
                <p className="dark:text-Darksecondary-muted text-[.85rem] md:text-lg">
                  Issue on : 2020
                </p>
                <p className=" text-[.85rem] md:text-[1.15rem]">
                  Issue by :{" "}
                  <a
                    href="https://mms-it.com/"
                    target="_blank"
                    className=" font-grotesk font-bold underline"
                  >
                    MMSIT{" "}
                  </a>
                </p>
              </div>
            </div>
            <p className="dark:text-Darksecondary-muted mt-1">
              Completed a specialized course in modern frontend development,
              focusing on responsive design and creating user-friendly websites.
              Gained expertise in React, Next.js and modern web technologies.
            </p>
            <div className=" flex flex-col md:flex-row md:items-end gap-y-1 md:gap-x-3">
              <Button color="gray" className=" mt-3 text-nowrap">
                <a href="https://mms-it.com/verify" target="_blank">
                  Verify Certificate
                </a>
              </Button>
              <p className="">
                Verification Code:{" "}
                <span className=" font-bold">DB2FD5B71596</span>
              </p>
            </div>
          </Timeline.Content>
        </Timeline.Item>

        {/* Vue */}
        <Timeline.Item className=" bg-Darksecondary-muted/10 p-3 md:p-5 rounded-xl">
          <Timeline.Point icon={FaAward} />
          <Timeline.Content>
            <div className=" flex items-center gap-x-5">
              <Image
                src="/images/certificate/VueCertificate.png"
                alt="vue certification"
                width={90}
                height={100}
                className=" rounded-lg"
              />
              <div>
                <Timeline.Title className="dark:text-Darksecondary text-[1rem] md:text-xl">
                  Vue.js Certification
                </Timeline.Title>
                <p className="dark:text-Darksecondary-muted text-[.85rem] md:text-lg">
                  Issue on : March, 2023
                </p>
                <p className=" text-[.85rem] md:text-[1.15rem]">
                  Issue by :{" "}
                  <a
                    href="https://creativecodermm.com/"
                    target="_blank"
                    className=" font-grotesk font-bold underline"
                  >
                    Creative Coder
                  </a>
                </p>
              </div>
            </div>
            <p className="dark:text-Darksecondary-muted mt-1">
              Gained practical experience in building dynamic applications with
              Vue 3 and Firebase, learning core features like component
              architecture, state management, and backend integration.
            </p>
            <Button color="gray" className=" mt-3">
              <a
                href="https://creativecodermm.com/@azrbh544Zin"
                target="_blank"
              >
                View Certificate
              </a>
            </Button>
          </Timeline.Content>
        </Timeline.Item>

        {/* logo */}
        <Timeline.Item className=" bg-Darksecondary-muted/10 p-3 md:p-5 rounded-xl">
          <Timeline.Point icon={FaAward} />
          <Timeline.Content>
            <div className=" flex items-center gap-x-5">
              <Image
                src="/images/certificate/LogoCertificate.jpg"
                alt="logo certification"
                width={90}
                height={100}
                className=" rounded-lg"
              />
              <div>
                <Timeline.Title className="dark:text-Darksecondary text-[1rem] md:text-xl">
                  Logo Design Certification
                </Timeline.Title>
                <p className="dark:text-Darksecondary-muted text-[.85rem] md:text-lg">
                  Issue on : June 1, 2023
                </p>
                <p className="text-[.85rem] md:text-[1.15rem]">
                  Issue by :{" "}
                  <a
                    href="https://www.udemy.com/course/advancedlogodesign"
                    target="_blank"
                    className=" font-grotesk font-bold underline"
                  >
                    Udemy
                  </a>
                </p>
              </div>
            </div>
            <p className="dark:text-Darksecondary-muted mt-1">
              Certified by completing a comprehensive course that involved
              mastering advanced logo design techniques, including branding
              principles, typography, color theory and design execution.
            </p>
            <Button color="gray" className=" mt-3">
              <a
                href="https://www.udemy.com/certificate/UC-fba2f510-99a1-436b-831a-64f0c52f8303/"
                target="_blank"
              >
                View Certificate
              </a>
            </Button>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </>
  );
}

export default EducationTimelineUI