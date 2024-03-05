"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { InfiniteMovingCards } from "./ui/infinite_scroll";

const Testimonials = () => {
    return (
        <div id='testimonials'>
    <div className="h-[40rem] flex flex-col antialiased bg-gray-300 dark:bg-gray-300 dark:bg-grid-white/[0.05] items-center justify-center relative z-[-10]">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
        </div>
    )
}

const testimonials = [
    {
      quote:
        "I've been a member of the US gym for the past 6 months It's wonderful and I am satisfied with my overall changes I have noticed in me. Gym maintained proper hygiene, the trainer is really respectful and supportive.",
      name: "Mona Potabatti",
      title: "a month ago",
    },
    {
        quote:
          "Hello friends, US Gymnasium is a well organised programs and skilled trainer to get the best health to the client. Everything is pre planned starting from diet to each day workout plans. The equipments are all brand new and so cool, as soon as someone enters you will forget about laziness and just focus on building a healthy lifestyle",
        name: "Sadakat Khan",
        title: "a year ago",
      },
      {
        quote:
          "Hi, l am going to US Gymnasium from some days and the results are amazing. Here we will have a friendly environment where we play by doing workouts. Each and every plan is designed and then according to customers body the plans are executed.",
        name: "Dileep Kumar",
        title: "a year ago",
      },
      {
        quote:
          "All electric equipment’s and a lot of free space for CrossFit and Cardio. Friendly and knowledgeable trainers. All ladies batch available",
        name: "Aishwatya Soma",
        title: "2 years",
      },
  ];

export default Testimonials