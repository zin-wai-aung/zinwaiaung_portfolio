"use client";

import React from 'react'
import {  Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import { TbArrowUpRight } from "react-icons/tb";
import ListUI from './reusable/ListUI';

const WorkTimelineUI = () => {
  return (
    <>
      <h1 className=" font-bold text-3xl md:text-4xl mb-5 dark:text-Darksecondary font-tangerine">
        Work Experience
      </h1>
      <Timeline>
        <Timeline.Item className=" bg-Darksecondary-muted/10  group p-5 rounded-xl">
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <div className=" flex items-start justify-between">
              <div className="">
                <Timeline.Time className="dark:text-Darksecondary-muted">
                  March 2021 - Present{" "}
                </Timeline.Time>
                <Timeline.Title className=" dark:text-Darksecondary">
                  Frontend Developer | Logo & Graphic Designer
                </Timeline.Title>
                <Timeline.Title className=" font-robotoslab dark:text-primary">
                  @ IT Creation
                </Timeline.Title>
              </div>
              <p className=" text-2xl hover:text-Lightsecondary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all">
                <a href="https://itcreation.netlify.app/" target="_blank">
                  <TbArrowUpRight />
                </a>
              </p>
            </div>
            <Timeline.Body className="dark:text-Darksecondary-muted">
              <ul className=" mt-3 space-y-3">
                <ListUI
                  isTimeline={true}
                  listDetail={
                    "Founded IT Creation to provide creative designs, delivering 300+ logos with a strong focus on customer satisfaction."
                  }
                />
                <ListUI
                  isTimeline={true}
                  listDetail={
                    "Transitioned into frontend development, combining design and technical skills to deliver user-friendly websites."
                  }
                />
                <ListUI
                  isTimeline={true}
                  listDetail={
                    "Shared tutorials and insights on design and development techniques, helping others enhance their creative and technical skills."
                  }
                />
              </ul>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item className=" bg-Darksecondary-muted/10 group p-5 rounded-xl">
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <div className=" flex items-start justify-between">
              <div className="">
                <Timeline.Time className=" dark:text-Darksecondary-muted">
                  {" "}
                  2024 - Present{" "}
                </Timeline.Time>
                <Timeline.Title className=" dark:text-Darksecondary">
                  Full Stack Developer
                </Timeline.Title>
                <Timeline.Title className=" font-robotoslab dark:text-primary">
                  @ Cre8tionNet{" "}
                </Timeline.Title>
              </div>
              <p className=" text-2xl hover:text-Lightsecondary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all">
                <a href="https://cre8tionnet.up.railway.app/" target="_blank">
                  <TbArrowUpRight />
                </a>
              </p>
            </div>
            <Timeline.Body className="dark:text-Darksecondary-muted">
              <ul className=" mt-3 space-y-3">
                <ListUI
                  isTimeline={true}
                  listDetail={
                    "Launched Cre8tion Net, a digital asset platform that allows creators to sell and share resources."
                  }
                />
                <ListUI
                  isTimeline={true}
                  listDetail={
                    "Created a unique platform where creators can upload and sell their work alongside free resources."
                  }
                />
                <ListUI
                  isTimeline={true}
                  listDetail={
                    "Facilitated a community-driven approach, allowing contributors to earn through their creative work."
                  }
                />
              </ul>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </>
  );
}

export default WorkTimelineUI