"use client";
import { useState } from "react";
import { AnimatedBackground } from "../animated-background";

// Define roadmap item type
interface RoadmapItem {
  id: number;
  year: number | string;
  title: string;
  description: string;
  color: string;
  position?: "right";
}

export default function RoadmapTimeline() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const roadmapItems: RoadmapItem[] = [
    {
      id: 1,
      year: 2012,
      title: "POSITIVE CIRCLES",
      description: "Calicut, Manjeri,Malappuram,Perinthalmanna,Kottakkal, Nilambur",
      color: "bg-green-500"
    },
    {
      id: 2,
      year: 2013,
      title: "99 IDEA FACTORY",
      description: "Kerala's Largest Positive Transformation Society (Official Launching)",
      color: "bg-blue-500"
    },
    {
      id: 3,
      year: 2014,
      title: "PATRON SHIP CLUB",
      description: "10 Years Knowledge Commitment Support With in One Year",
      color: "bg-purple-600"
    },
    {
      id: 4,
      year: 2015,
      title: "Biz 2015",
      description: "Malabar Entrepreneurial Summit 2015 @Rose Launch Malappuram 1100 Participants",
      color: "bg-blue-500",
      position: "right"
    },
    {
      id: 5,
      year: 2016,
      title: "PEPTALK",
      description: "Kerala's First Peptalk Summit VP International Hall Manjeri 1250+ Participants",
      color: "bg-green-500",
      position: "right"
    },
    {
      id: 6,
      year: 2016,
      title: "Cruise Get Together",
      description: "52 Entrepreneurs on Singapore, Malaysia & Thailand at Royal Caribbean International ",
      color: "bg-purple-600",
      position: "right"
    },
    {
      id: 7,
      year: 2017,
      title: "Biz Dubai",
      description: "Middle East Entrepreneurial Colclave 400+ Delegates from Middle East and India",
      color: "bg-green-500"
    },
    {
      id: 8,
      year: 2018,
      title: "IDEATOUR EUROPE",
      description: "30+ Participants in Five European Countries , France, Germany, Netherlands, Belgium, Switzerland",
      color: "bg-blue-500"
    },
    {
      id: 9,
      year: 2019,
      title: "Global Kaizen Summit PEPTALK 2.0",
      description: "Faculties from I-JK, Japan, Thailand & Srilanka @Shifa Convention Centre Perinthalmanna 1000+ Participants",
      color: "bg-purple-600"
    },
    {
      id: 10,
      year: "2020-22",
      title: "R&D",
      description: "Research for SME's Practical Solutions",
      color: "bg-gray-500",
      position: "right"
    },
    {
      id: 11,
      year: 2023,
      title: "LAUNCHING",
      description: "Canbridge Academy An ecosystem between solution providers and solution seekers PRACTICAL SOLUTION PROVIDING PLATFORM",
      color: "bg-gray-500",
      position: "right"
    },
    {
      id: 12,
      year: 2024,
      title: "LAUNCHING SMART CEO",
      description: "Change, Entrepreneur, Organisationally ",
      color: "bg-purple-600",
      position: "right"
    },
    {
      id: 13,
      year: 2025,
      title: "STRATEGIC ALLIANCE",
      description: "CEO Corps Alliance Growth Collective",
      color: "bg-blue-500"
    },
    {
      id: 14,
      year: 2026,
      title: "SMART CEO Slogan",
      description: "Essential Guidance for Current Market: 1. Growth 2. Ensure Your Business Decision Making University for Decision",
      color: "bg-purple-600"
    },
    {
      id: 15,
      year: 2027,
      title: "MISSION 1000 SMEs",
      description: "Moving on its Mission to SMEs",
      color: "bg-green-500"
    }
  ];

  return (
    <div className="flex flex-col items-center text-primary min-h-screen py-8 px-4">
      <AnimatedBackground />
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-primary">ROAD MAP</h2>
      </div>

      <div className="relative w-full max-w-6xl">
        <div className="hidden sm:block absolute left-1/2 h-full w-1 bg-gray-400 transform -translate-x-1/2"></div>

        {roadmapItems.map((item) => {
          const isRight = item.position === "right";
          return (
            <div
              key={item.id}
              className={`relative mb-12 sm:w-1/2 w-full px-4 sm:px-8 ${
                isRight ? "sm:ml-auto sm:pr-16" : "sm:mr-auto sm:pl-16"
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={`hidden sm:block absolute top-4 w-6 h-6 rounded-full ${item.color} z-10`}
                style={{
                  left: isRight ? "-1.25rem" : "auto",
                  right: isRight ? "auto" : "-1.25rem"
                }}
              ></div>

              <div
                className={`hidden sm:block absolute top-4 w-4 h-4 transform -translate-y-1/2 ${
                  isRight ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
                }`}
                style={{
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderLeft: isRight ? "none" : "8px solid white",
                  borderRight: isRight ? "8px solid white" : "none"
                }}
              ></div>

              <div
                className={`rounded-lg p-5 shadow-md transition-transform duration-200 ${item.color} ${
                  hoveredItem === item.id ? "scale-105 shadow-xl" : ""
                }`}
              >
                <div className="text-xl font-bold">{item.year}</div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
