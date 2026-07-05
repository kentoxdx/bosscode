"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export type Language = "en" | "th";

const heroImage =
  "https://i.pinimg.com/736x/00/0f/dc/000fdc1a8766064dc4e884a8edf3ee21.jpg";

type SiteContent = {
  nav: {
    home: string;
    portfolio: string;
    course: string;
    blog: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
    viewProject: string;
    items: {
      title: string;
      description: string;
      tech: string;
      href: string;
      image: string;
    }[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    stats: {
      value: string;
      label: string;
    }[];
    skillsTitle: string;
    skills: string[];
  };
  contributions: {
    eyebrow: string;
    title: string;
    description: string;
    learn: string;
    less: string;
    more: string;
    days: string[];
    months: string[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };
  course: {
    eyebrow: string;
    title: string;
    thaiTitle: string;
    description: string;
    points: string[];
    button: string;
    modulesTitle: string;
    modules: {
      title: string;
      description: string;
    }[];
  };
  blog: {
    eyebrow: string;
    title: string;
    description: string;
    read: string;
    posts: {
      slug: string;
      title: string;
      description: string;
      date: string;
      readingTime: string;
      content: string[];
    }[];
  };
  footer: {
    copyright: string;
    links: {
      label: "GitHub" | "Facebook" | "Instagram";
      href: string;
    }[];
  };
};

export const content = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      course: "Course",
      blog: "Blog",
    },
    hero: {
      eyebrow: "Web Developer / UI Designer",
      title: "I design stark, fast websites with manga-level impact.",
      description:
        "Minimal interfaces, sharp layouts, and thoughtful user flows built with Next.js, Tailwind CSS, and modern animation.",
      cta: "View Work",
      secondaryCta: "Course",
      imageAlt: "Black and white anime portrait placeholder",
    },
    portfolio: {
      eyebrow: "Selected Work",
      title: "Portfolio",
      description:
        "Two live projects built for real use cases, arranged like monochrome manga panels.",
      viewProject: "View Project",
      items: [
        {
          title: "Thai Chuay Thai Calculator",
          description:
            "A web app for calculating payment amounts in the Thai Chuay Thai project.",
          tech: "Next.js / Tailwind CSS / Vercel",
          href: "https://thai-cuy-thai.vercel.app/",
          image: "/projects/thai-chuay-thai.svg",
        },
        {
          title: "Student Product Board",
          description:
            "A posting web app where UDRU students can publish products for others to browse.",
          tech: "Next.js / React / Web App",
          href: "https://web-for-you-ecru.vercel.app/",
          image: "/projects/student-product-board.svg",
        },
        {
          title: "Food for Work",
          description:
            "A food-focused web app for browsing workplace meal options with a clean, practical interface.",
          tech: "Next.js / Tailwind CSS / Vercel",
          href: "https://foodforwork.vercel.app/",
          image: "/projects/sapp.png",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "A computer engineering student building sharp web experiences.",
      description:
        "Hello, my name is Boss. I am a Computer Engineering student at UDRU. I enjoy turning ideas into fast, clean, and useful websites with a strong sense of layout, motion, and real-world usability.",
      stats: [
        { value: "UDRU", label: "Computer Engineering" },
        { value: "AI", label: "Assisted workflow" },
        { value: "B/W", label: "Minimal visual system" },
      ],
      skillsTitle: "Core Stack",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
        "UI Design",
        "AI Workflow",
      ],
    },
    contributions: {
      eyebrow: "Activity",
      title: "Coding rhythm",
      description:
        "A manga-panel activity map inspired by GitHub contributions, showing the habit behind each shipped interface.",
      learn: "Learn how I count progress",
      less: "Less",
      more: "More",
      days: ["Mon", "Wed", "Fri"],
      months: [
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
      ],
    },
    cta: {
      eyebrow: "Start",
      title: "Have an idea? Let’s make it clean, fast, and memorable.",
      description:
        "I can help shape a website from rough idea to responsive, animated portfolio or web app.",
      button: "Start a Project",
    },
    course: {
      eyebrow: "Course",
      title: "Build Websites With AI",
      thaiTitle: "สอนเขียนเว็บด้วย AI",
      description:
        "Learn how to plan, design, and ship modern websites faster by using AI as a creative coding partner.",
      points: [
        "Prompting workflows for Next.js and Tailwind CSS",
        "Minimal UI systems that look professional",
        "Deploying polished portfolio projects",
      ],
      button: "Enroll Now",
      modulesTitle: "What You Will Learn",
      modules: [
        {
          title: "01 / Idea to Wireframe",
          description:
            "Turn a rough concept into a clean page structure and content system.",
        },
        {
          title: "02 / AI Frontend Workflow",
          description:
            "Use AI to generate, review, and improve production-ready components.",
        },
        {
          title: "03 / Ship the Portfolio",
          description:
            "Polish responsive states, animation, and deployment for real visitors.",
        },
      ],
    },
    blog: {
      eyebrow: "Writing",
      title: "Recent Blog Posts",
      description:
        "Short notes on minimalist UI, AI-assisted coding, and portfolio design.",
      read: "Read",
      posts: [
        {
          slug: "designing-with-less-noise",
          title: "Designing With Less Noise",
          description:
            "How monochrome interfaces can feel premium when spacing, type, and rhythm do the heavy lifting.",
          date: "UI Notes",
          readingTime: "3 min read",
          content: [
            "Minimal design is not about removing everything. It is about leaving only the pieces that help people understand, decide, and move forward.",
            "When a website uses only black, white, and gray, the small details become louder. Spacing, line height, borders, and contrast start doing the work that color usually does.",
            "For BOSSCODE, this means every section should feel intentional. A panel border is not decoration only; it gives the eye a place to land, like a clean manga frame.",
          ],
        },
        {
          slug: "ai-as-a-frontend-partner",
          title: "AI as a Frontend Partner",
          description:
            "A practical workflow for turning rough product ideas into shippable Next.js pages.",
          date: "Development",
          readingTime: "4 min read",
          content: [
            "AI is strongest when it works beside a developer, not instead of one. The developer still decides the product direction, checks the code, and protects the user experience.",
            "My workflow starts with structure: sections, states, content, and responsive behavior. After that, AI helps generate component ideas faster so I can spend more energy judging what feels right.",
            "The best results come from iteration. Ask for a first version, review the layout, improve the hierarchy, then test the page in a real browser.",
          ],
        },
        {
          slug: "portfolio-panels-that-convert",
          title: "Portfolio Panels That Convert",
          description:
            "Using manga-inspired composition to guide attention through project work.",
          date: "Case Study",
          readingTime: "3 min read",
          content: [
            "A portfolio should not feel like a storage room for old projects. It should guide visitors through the strongest proof of what you can build.",
            "Manga composition is useful because it controls pacing. Big panels create impact, smaller panels add detail, and sharp borders separate moments clearly.",
            "For project cards, I like showing the title, stack, short reason, and one direct action. The visitor should understand the project before they even click.",
          ],
        },
        {
          slug: "building-for-real-students",
          title: "Building for Real Students",
          description:
            "What student-focused web apps teach about clarity, trust, and simple flows.",
          date: "Product",
          readingTime: "4 min read",
          content: [
            "Student projects become more interesting when they solve a real problem for real people. A product board or calculator may look simple, but the details matter.",
            "The interface should explain itself quickly. Students should know where to post, what information is required, and what happens after they submit.",
            "Good student tools do not need heavy visuals. They need speed, trust, and a layout that respects the user’s time.",
          ],
        },
        {
          slug: "shipping-small-but-polished",
          title: "Shipping Small but Polished",
          description:
            "Why a focused website with finished details is better than a large unfinished idea.",
          date: "Workflow",
          readingTime: "3 min read",
          content: [
            "A small finished project teaches more than a huge project that never ships. The final ten percent is where polish, bugs, and real design decisions appear.",
            "I try to keep the first version focused: one purpose, one main flow, and a clean visual language. After that, improvements become easier to see.",
            "Shipping also builds confidence. Every deployed project becomes proof that an idea can leave the editor and become something people can open.",
          ],
        },
      ],
    },
    footer: {
      copyright: "All rights reserved.",
      links: [
        { label: "GitHub", href: "https://github.com/kentoxdx" },
        {
          label: "Facebook",
          href: "https://www.facebook.com/woramet.veningying.2024",
        },
        { label: "Instagram", href: "https://www.instagram.com/bosscode___/" },
      ],
    },
  },
  th: {
    nav: {
      home: "หน้าแรก",
      portfolio: "ผลงาน",
      course: "คอร์ส",
      blog: "บล็อก",
    },
    hero: {
      eyebrow: "นักพัฒนาเว็บ / นักออกแบบ UI",
      title: "ผมออกแบบเว็บไซต์ที่เรียบ คม และมีพลังแบบหน้าปกมังงะ",
      description:
        "สร้างอินเทอร์เฟซที่ใช้งานง่าย มีพื้นที่หายใจเยอะ และเคลื่อนไหวลื่นไหลด้วย Next.js, Tailwind CSS และแอนิเมชันสมัยใหม่",
      cta: "ดูผลงาน",
      secondaryCta: "คอร์สเรียน",
      imageAlt: "ภาพตัวละครอนิเมะขาวดำสำหรับธีมเว็บไซต์",
    },
    portfolio: {
      eyebrow: "ผลงานที่เลือก",
      title: "ผลงาน",
      description:
        "โปรเจกต์จริงที่ใช้งานได้ จัดวางด้วยอารมณ์แบบช่องมังงะขาวดำ",
      viewProject: "ดูโปรเจกต์",
      items: [
        {
          title: "เว็บไทยช่วยไทย",
          description:
            "เว็บใช้ในการคำนวณเงินที่ต้องจ่ายในโครงการไทยช่วยไทย",
          tech: "Next.js / Tailwind CSS / Vercel",
          href: "https://thai-cuy-thai.vercel.app/",
          image: "/projects/thai-chuay-thai.svg",
        },
        {
          title: "เว็บโพสต์สินค้าสำหรับนักศึกษา",
          description:
            "เว็บแอปที่ให้นักศึกษา UDRU โพสต์สินค้าให้คนอื่นเข้ามาดูได้",
          tech: "Next.js / React / Web App",
          href: "https://web-for-you-ecru.vercel.app/",
          image: "/projects/student-product-board.svg",
        },
        {
          title: "เว็บ Food for Work",
          description:
            "เว็บแอปเกี่ยวกับอาหารสำหรับดูตัวเลือกมื้ออาหารในการทำงาน ด้วยหน้าตาที่เรียบและใช้งานง่าย",
          tech: "Next.js / Tailwind CSS / Vercel",
          href: "https://foodforwork.vercel.app/",
          image: "/projects/sapp.png",
        },
      ],
    },
    about: {
      eyebrow: "เกี่ยวกับผม",
      title: "นักศึกษาวิศวะคอมพิวเตอร์ที่ชอบสร้างเว็บให้คม เรียบ และใช้งานจริง",
      description:
        "สวัสดีครับ ผมชื่อบอสส์ เป็นนักศึกษา วิศวะคอมพิวเตอร์ที่ UDRU ผมชอบเปลี่ยนไอเดียให้กลายเป็นเว็บไซต์ที่เร็ว สะอาด ใช้งานง่าย และมีสไตล์ชัดเจน ทั้งด้าน layout, motion และประสบการณ์ของผู้ใช้",
      stats: [
        { value: "UDRU", label: "วิศวะคอมพิวเตอร์" },
        { value: "AI", label: "ช่วยออกแบบและเขียนโค้ด" },
        { value: "B/W", label: "ระบบภาพขาวดำมินิมอล" },
      ],
      skillsTitle: "เครื่องมือหลัก",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
        "UI Design",
        "AI Workflow",
      ],
    },
    contributions: {
      eyebrow: "กิจกรรม",
      title: "จังหวะการเขียนโค้ด",
      description:
        "แผนที่กิจกรรมสไตล์ GitHub contribution ที่ปรับให้เป็นช่องมังงะ เพื่อเล่านิสัยการฝึกเขียนเว็บและพัฒนาโปรเจกต์",
      learn: "ดูวิธีนับความคืบหน้า",
      less: "น้อย",
      more: "มาก",
      days: ["จ.", "พ.", "ศ."],
      months: [
        "ก.ค.",
        "ส.ค.",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค.",
        "ม.ค.",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
      ],
    },
    cta: {
      eyebrow: "เริ่มโปรเจกต์",
      title: "มีไอเดียอยู่ไหม? มาทำให้มันเรียบ คม และน่าจดจำกัน",
      description:
        "ผมช่วยต่อยอดไอเดียให้กลายเป็น portfolio หรือ web app ที่ responsive มี animation และพร้อมใช้งานจริงได้",
      button: "เริ่มคุยโปรเจกต์",
    },
    course: {
      eyebrow: "คอร์สเรียน",
      title: "สอนเขียนเว็บด้วย AI",
      thaiTitle: "สอนเขียนเว็บด้วย AI",
      description:
        "เรียนรู้การวางแผน ออกแบบ และปล่อยเว็บไซต์สมัยใหม่ให้เร็วขึ้น โดยใช้ AI เป็นผู้ช่วยเขียนโค้ดและออกแบบ",
      points: [
        "เวิร์กโฟลว์การสั่งงาน AI สำหรับ Next.js และ Tailwind CSS",
        "ระบบ UI เรียบง่ายที่ดูมืออาชีพ",
        "การ deploy โปรเจกต์ portfolio ให้พร้อมใช้งานจริง",
      ],
      button: "สมัครเรียน",
      modulesTitle: "สิ่งที่จะได้เรียน",
      modules: [
        {
          title: "01 / ไอเดียสู่ Wireframe",
          description:
            "เปลี่ยนไอเดียคร่าว ๆ ให้เป็นโครงหน้าเว็บและระบบคอนเทนต์ที่ชัดเจน",
        },
        {
          title: "02 / Workflow เขียนเว็บด้วย AI",
          description:
            "ใช้ AI ช่วยสร้าง ตรวจ และปรับ component ให้พร้อมใช้งานจริง",
        },
        {
          title: "03 / ปล่อย Portfolio ขึ้นจริง",
          description:
            "เก็บ responsive, animation และ deployment ให้พร้อมรับผู้เข้าชม",
        },
      ],
    },
    blog: {
      eyebrow: "บทความ",
      title: "บล็อกล่าสุด",
      description:
        "บันทึกสั้น ๆ เรื่อง UI เรียบง่าย การเขียนเว็บด้วย AI และการออกแบบ Portfolio",
      read: "อ่าน",
      posts: [
        {
          slug: "designing-with-less-noise",
          title: "ออกแบบให้เรียบแต่ยังดูแพง",
          description:
            "ทำไมเว็บขาวดำถึงดูพรีเมียมได้ เมื่อ spacing, typography และจังหวะของหน้าเว็บลงตัว",
          date: "UI Notes",
          readingTime: "อ่าน 3 นาที",
          content: [
            "งานออกแบบที่เรียบไม่ได้แปลว่าต้องตัดทุกอย่างออกไปจนโล่ง แต่คือการเหลือไว้เฉพาะสิ่งที่ช่วยให้ผู้ใช้เข้าใจ ตัดสินใจ และไปต่อได้เร็วขึ้น",
            "เมื่อเว็บใช้แค่ขาว ดำ และเทา รายละเอียดเล็ก ๆ จะเด่นขึ้นทันที ทั้ง spacing, line height, border และ contrast ทุกอย่างต้องตั้งใจมากขึ้น",
            "สำหรับ BOSSCODE เส้นกรอบแบบ panel ไม่ใช่แค่ของตกแต่ง แต่มันช่วยให้สายตาหยุดพักและอ่านข้อมูลเป็นจังหวะ เหมือนช่องมังงะที่เล่าเรื่องทีละฉาก",
          ],
        },
        {
          slug: "ai-as-a-frontend-partner",
          title: "ใช้ AI เป็นคู่คิดฝั่ง Frontend",
          description:
            "เวิร์กโฟลว์สำหรับเปลี่ยนไอเดียคร่าว ๆ ให้กลายเป็นหน้าเว็บ Next.js ที่พร้อมส่งงาน",
          date: "Development",
          readingTime: "อ่าน 4 นาที",
          content: [
            "AI จะเก่งที่สุดตอนที่มันทำงานร่วมกับนักพัฒนา ไม่ใช่ทำแทนทั้งหมด นักพัฒนายังต้องตัดสินใจเรื่องทิศทาง ตรวจโค้ด และดูแลประสบการณ์ผู้ใช้",
            "เวิร์กโฟลว์ของผมเริ่มจากการจัดโครงก่อน เช่น section, state, content และ responsive behavior จากนั้นค่อยให้ AI ช่วยเร่งการสร้าง component",
            "ผลลัพธ์ที่ดีมาจากการวนปรับหลายรอบ ให้ AI สร้างเวอร์ชันแรก ตรวจ hierarchy เอง แล้วทดสอบหน้าเว็บจริงก่อนจบงาน",
          ],
        },
        {
          slug: "portfolio-panels-that-convert",
          title: "จัดผลงานแบบช่องมังงะ",
          description:
            "ใช้แรงบันดาลใจจากมังงะเพื่อพาคนดูไล่สายตาผ่านผลงานอย่างเป็นธรรมชาติ",
          date: "Case Study",
          readingTime: "อ่าน 3 นาที",
          content: [
            "Portfolio ไม่ควรรู้สึกเหมือนโกดังเก็บโปรเจกต์เก่า ๆ แต่ควรพาคนดูไล่ดูหลักฐานที่ดีที่สุดว่าเราสร้างอะไรได้",
            "องค์ประกอบแบบมังงะช่วยเรื่องจังหวะการมอง ช่องใหญ่สร้างแรงปะทะ ช่องเล็กเก็บรายละเอียด และเส้นกรอบช่วยแยกแต่ละช่วงให้ชัด",
            "สำหรับการ์ดผลงาน ผมชอบให้มีชื่อโปรเจกต์ tech stack เหตุผลสั้น ๆ และปุ่ม action เดียว คนดูควรเข้าใจงานก่อนกดเข้าไปด้วยซ้ำ",
          ],
        },
        {
          slug: "building-for-real-students",
          title: "สร้างเว็บให้คนใช้งานจริงในชีวิตนักศึกษา",
          description:
            "สิ่งที่เว็บสำหรับนักศึกษาสอนเรื่องความชัดเจน ความน่าเชื่อถือ และ flow ที่เรียบง่าย",
          date: "Product",
          readingTime: "อ่าน 4 นาที",
          content: [
            "โปรเจกต์นักศึกษาจะน่าสนใจขึ้นมากเมื่อมันแก้ปัญหาจริงให้คนจริง เว็บโพสต์สินค้า หรือเว็บคำนวณ อาจดูเรียบง่าย แต่รายละเอียดมีผลมาก",
            "อินเทอร์เฟซต้องอธิบายตัวเองให้เร็ว ผู้ใช้ควรรู้ว่าต้องกดตรงไหน ใส่ข้อมูลอะไร และหลังจากส่งแล้วจะเกิดอะไรขึ้น",
            "เครื่องมือสำหรับนักศึกษาไม่จำเป็นต้องมีภาพเยอะ สิ่งที่สำคัญกว่าคือความเร็ว ความไว้ใจ และ layout ที่ไม่ทำให้ผู้ใช้เสียเวลา",
          ],
        },
        {
          slug: "shipping-small-but-polished",
          title: "ทำโปรเจกต์เล็กให้เสร็จและดูดี",
          description:
            "ทำไมเว็บที่ scope เล็กแต่เก็บรายละเอียดครบ ถึงดีกว่าไอเดียใหญ่ที่ยังไม่เสร็จ",
          date: "Workflow",
          readingTime: "อ่าน 3 นาที",
          content: [
            "โปรเจกต์เล็กที่เสร็จจริงสอนเราได้มากกว่าโปรเจกต์ใหญ่ที่ยังไม่เคย deploy ช่วงท้ายของงานคือจุดที่เราเจอ polish, bug และ decision จริง",
            "ผมพยายามเริ่มจากเวอร์ชันแรกที่โฟกัสชัด มีเป้าหมายเดียว flow หลักเดียว และ visual language ที่คุมได้",
            "การปล่อยงานขึ้นจริงช่วยสร้างความมั่นใจ ทุกโปรเจกต์ที่ deploy แล้วคือหลักฐานว่าไอเดียออกจาก editor ไปเป็นสิ่งที่คนเปิดดูได้",
          ],
        },
      ],
    },
    footer: {
      copyright: "สงวนลิขสิทธิ์",
      links: [
        { label: "GitHub", href: "https://github.com/kentoxdx" },
        {
          label: "Facebook",
          href: "https://www.facebook.com/woramet.veningying.2024",
        },
        { label: "Instagram", href: "https://www.instagram.com/bosscode___/" },
      ],
    },
  },
} satisfies Record<Language, SiteContent>;

export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const contributionLevels = Array.from({ length: 52 * 7 }, (_, index) => {
  const week = Math.floor(index / 7);
  const day = index % 7;
  const lateSprint = week > 44 && [0, 1, 3, 5].includes(day);
  const portfolioPush = week > 46 && week < 50 && [2, 4, 6].includes(day);
  const weeklyPractice = week % 6 === 0 && [1, 3].includes(day);
  const quietBuild = week % 9 === 2 && day === 5;

  if (lateSprint && week % 2 === 0) return 4;
  if (portfolioPush) return 3;
  if (lateSprint || weeklyPractice) return 2;
  if (quietBuild) return 1;
  return 0;
});

function contributionCellClass(level: number) {
  if (level === 4) return "border-black bg-black";
  if (level === 3) return "border-zinc-700 bg-zinc-700";
  if (level === 2) return "border-zinc-500 bg-zinc-500";
  if (level === 1) return "border-zinc-300 bg-zinc-300";
  return "border-zinc-200 bg-zinc-100";
}

export function SectionLabel({
  children,
  invert = false,
}: {
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <p
      className={`mb-5 inline-block border px-3 py-1 text-xs font-bold uppercase ${
        invert ? "border-white text-white" : "border-black text-black"
      }`}
    >
      {children}
    </p>
  );
}

function SocialIcon({ label }: { label: SiteContent["footer"]["links"][number]["label"] }) {
  const commonProps = {
    className: "h-5 w-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  if (label === "GitHub") {
    return (
      <svg {...commonProps}>
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.1.79-.25.79-.56v-2.17c-3.2.69-3.87-1.37-3.87-1.37-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.11-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18A10.8 10.8 0 0 1 12 6.05c.98 0 1.95.13 2.87.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.13v3.2c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg {...commonProps}>
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2V8.6h-1.25c-1.23 0-1.62.77-1.62 1.56v1.9h2.76l-.44 2.91h-2.32V22C18.34 21.24 22 17.08 22 12.06Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.95 1.55a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
    </svg>
  );
}

export function MangaLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1550);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-white text-black"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:18px_18px]" />
          <motion.div
            animate={{ x: ["-120%", "120%"] }}
            transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
            className="absolute inset-y-0 w-1/3 skew-x-[-18deg] bg-black/10"
          />
          <div className="absolute inset-x-0 top-1/2 h-px bg-black/40" />
          <div className="absolute left-8 top-8 h-16 w-24 border-l border-t border-black" />
          <div className="absolute bottom-8 right-8 h-16 w-24 border-b border-r border-black" />

          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative mx-5 w-full max-w-xl border border-black bg-white p-6 text-center shadow-[10px_10px_0_#000]"
          >
            <p className="text-xs font-bold uppercase text-zinc-500">
              Loading chapter
            </p>
            <h2 className="mt-4 text-5xl font-bold uppercase leading-none sm:text-7xl">
              BOSSCODE
            </h2>
            <div className="mx-auto mt-6 h-2 max-w-xs overflow-hidden border border-black bg-white">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.05, ease: "easeInOut", repeat: Infinity }}
                className="h-full w-2/3 bg-black"
              />
            </div>
            <p className="mt-5 text-xs font-bold uppercase text-zinc-600">
              Manga portfolio film
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function Navbar({
  text,
  language,
  onToggleLanguage,
}: {
  text: SiteContent;
  language: Language;
  onToggleLanguage: () => void;
}) {
  const navItems = [
    { label: text.nav.home, href: "/" },
    { label: text.nav.portfolio, href: "/#portfolio" },
    { label: text.nav.course, href: "/course" },
    { label: text.nav.blog, href: "/blog" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-sm font-bold uppercase">
          BOSSCODE
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-zinc-700 transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={onToggleLanguage}
          className="border border-black px-4 py-2 text-xs font-bold uppercase transition hover:bg-black hover:text-white"
          aria-label="Toggle language"
        >
          {language === "en" ? "EN / TH" : "TH / EN"}
        </button>
      </nav>
    </header>
  );
}

export function Hero({ text }: { text: SiteContent }) {
  return (
    <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="min-w-0 max-w-3xl"
      >
        <motion.div variants={fadeInUp}>
          <SectionLabel>{text.hero.eyebrow}</SectionLabel>
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="text-5xl font-bold uppercase leading-[1.05] text-black sm:text-7xl lg:text-8xl"
        >
          {text.hero.title}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-8 max-w-2xl text-base leading-8 text-zinc-700 sm:text-lg"
        >
          {text.hero.description}
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/#portfolio"
            className="border border-black bg-black px-6 py-3 text-sm font-bold uppercase text-white transition hover:bg-white hover:text-black"
          >
            {text.hero.cta}
          </Link>
          <Link
            href="/course"
            className="border border-black px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-black hover:text-white"
          >
            {text.hero.secondaryCta}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative aspect-[4/5] overflow-hidden border border-black bg-zinc-100"
      >
        <Image
          src={heroImage}
          alt={text.hero.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0_48%,rgba(0,0,0,0.1)_48%_50%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 border-r border-t border-black bg-white px-5 py-3 text-xs font-bold uppercase">
          01 / Monochrome
        </div>
      </motion.div>
    </section>
  );
}

export function About({ text }: { text: SiteContent }) {
  return (
    <section className="border-t border-black bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="min-w-0 max-w-3xl"
        >
          <SectionLabel>{text.about.eyebrow}</SectionLabel>
          <h2 className="text-4xl font-bold uppercase leading-[1.12] text-black sm:text-6xl">
            {text.about.title}
          </h2>
          <p className="mt-7 text-base leading-8 text-zinc-700 sm:text-lg">
            {text.about.description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
          className="grid gap-5"
        >
          <motion.div
            variants={staggerContainer}
            className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1"
          >
            {text.about.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                transition={{ duration: 0.55 }}
                className="group border border-black p-5 transition hover:bg-black hover:text-white"
              >
                <p className="text-3xl font-bold uppercase">{stat.value}</p>
                <p className="mt-2 text-xs font-bold uppercase text-zinc-500 group-hover:text-zinc-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.55 }}
            className="border border-black p-6"
          >
            <h3 className="text-xl font-bold uppercase">
              {text.about.skillsTitle}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {text.about.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-black px-3 py-2 text-xs font-bold uppercase text-black transition hover:bg-black hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function ContributionGraph({ text }: { text: SiteContent }) {
  return (
    <section className="border-t border-black bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="min-w-0 max-w-3xl"
        >
          <SectionLabel>{text.contributions.eyebrow}</SectionLabel>
          <h2 className="text-4xl font-bold uppercase leading-[1.12] text-black sm:text-6xl">
            {text.contributions.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-700">
            {text.contributions.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mt-12 overflow-hidden border border-black bg-zinc-950 p-4 text-white shadow-[8px_8px_0_#000]"
        >
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[720px]">
              <div className="ml-8 grid grid-cols-12 gap-3 text-xs font-semibold text-zinc-200">
                {text.contributions.months.map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>

              <div className="mt-2 grid grid-cols-[2rem_1fr] gap-3">
                <div className="grid grid-rows-7 gap-1 text-xs font-bold text-zinc-200">
                  <span />
                  <span>{text.contributions.days[0]}</span>
                  <span />
                  <span>{text.contributions.days[1]}</span>
                  <span />
                  <span>{text.contributions.days[2]}</span>
                  <span />
                </div>

                <div className="grid grid-flow-col grid-rows-7 gap-1">
                  {contributionLevels.map((level, index) => (
                    <span
                      key={`${level}-${index}`}
                      className={`h-3 w-3 border ${contributionCellClass(level)}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-zinc-400">
                <span>{text.contributions.learn}</span>
                <div className="flex items-center gap-2">
                  <span>{text.contributions.less}</span>
                  {[0, 1, 2, 3, 4].map((level) => (
                    <span
                      key={level}
                      className={`h-3 w-3 border ${contributionCellClass(level)}`}
                      aria-hidden="true"
                    />
                  ))}
                  <span>{text.contributions.more}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Portfolio({ text }: { text: SiteContent }) {
  return (
    <section id="portfolio" className="border-t border-black bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="min-w-0 max-w-2xl"
        >
          <SectionLabel>{text.portfolio.eyebrow}</SectionLabel>
          <h2 className="text-4xl font-bold uppercase text-black sm:text-6xl">
            {text.portfolio.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-700">
            {text.portfolio.description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-14 grid gap-5 lg:grid-cols-2"
        >
          {text.portfolio.items.map((project, index) => (
            <motion.article
              key={project.href}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="group grid overflow-hidden border border-black bg-white md:grid-cols-[0.95fr_1.05fr]"
            >
              <div className="relative min-h-72 overflow-hidden border-b border-black bg-zinc-100 md:border-b-0 md:border-r">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 mix-blend-difference transition duration-500 group-hover:bg-white/90" />
                <span className="absolute left-4 top-4 border border-black bg-white px-3 py-1 text-xs font-bold">
                  0{index + 2}
                </span>
              </div>
              <div className="flex min-h-72 flex-col justify-between p-6">
                <div>
                  <p className="text-xs font-bold uppercase text-zinc-500">
                    {project.tech}
                  </p>
                  <h3 className="mt-5 text-2xl font-bold uppercase leading-[1.15] text-black sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-700">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-fit border border-black px-4 py-2 text-xs font-bold uppercase text-black transition hover:bg-black hover:text-white"
                >
                  {text.portfolio.viewProject}
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function HomeCta({ text }: { text: SiteContent }) {
  return (
    <section className="border-t border-black bg-white px-5 py-24 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl border border-black bg-black p-7 text-white sm:p-10 lg:p-14"
      >
        <p className="mb-5 inline-block border border-white px-3 py-1 text-xs font-bold uppercase">
          {text.cta.eyebrow}
        </p>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-4xl text-4xl font-bold uppercase leading-[1.12] sm:text-6xl">
              {text.cta.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">
              {text.cta.description}
            </p>
          </div>
          <a
            href="https://www.facebook.com/woramet.veningying.2024"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit border border-white bg-white px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-black hover:text-white"
          >
            {text.cta.button}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function CoursePageContent({ text }: { text: SiteContent }) {
  return (
    <section className="min-h-screen bg-black px-5 pb-24 pt-28 text-white sm:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={fadeInUp} className="min-w-0 max-w-4xl">
          <SectionLabel invert>{text.course.eyebrow}</SectionLabel>
          <h1 className="text-5xl font-bold uppercase leading-[1.05] sm:text-7xl lg:text-8xl">
            {text.course.title}
          </h1>
          <p className="mt-6 text-2xl font-bold text-zinc-300">
            {text.course.thaiTitle}
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-200">
            {text.course.description}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={fadeInUp} className="border border-white p-6 sm:p-8">
            <ul className="grid gap-3">
              {text.course.points.map((point) => (
                <li key={point} className="border border-white/40 px-4 py-3 text-sm text-zinc-100">
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="mailto:hello@example.com?subject=Enroll%20Now"
              className="mt-8 inline-flex border border-white bg-white px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-black hover:text-white"
            >
              {text.course.button}
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="border border-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold uppercase">
              {text.course.modulesTitle}
            </h2>
            <div className="mt-7 grid gap-4">
              {text.course.modules.map((module) => (
                <article key={module.title} className="border border-white/40 p-5">
                  <h3 className="text-lg font-bold uppercase">{module.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    {module.description}
                  </p>
                </article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function BlogPageContent({ text }: { text: SiteContent }) {
  return (
    <section className="min-h-screen bg-white px-5 pb-24 pt-28 text-black sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="min-w-0 max-w-3xl"
        >
          <SectionLabel>{text.blog.eyebrow}</SectionLabel>
          <h1 className="text-5xl font-bold uppercase leading-[1.05] sm:text-7xl">
            {text.blog.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-zinc-700 sm:text-lg">
            {text.blog.description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {text.blog.posts.map((post, index) => (
            <motion.div
              key={post.slug}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex min-h-80 flex-col justify-between border border-black p-6 transition hover:bg-black hover:text-white"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-current pb-4 text-xs font-bold uppercase">
                    <span>{post.date}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <h2 className="mt-7 text-2xl font-bold uppercase leading-[1.15]">
                    {post.title}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-zinc-700 transition group-hover:text-zinc-200">
                    {post.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-xs font-bold uppercase">
                  <span>{text.blog.read}</span>
                  <span>{post.readingTime}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function BlogPostPageContent({
  text,
  slug,
}: {
  text: SiteContent;
  slug: string;
}) {
  const post = text.blog.posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="min-h-screen bg-white px-5 pb-24 pt-28 text-black sm:px-8">
        <div className="mx-auto max-w-4xl border border-black p-8">
          <SectionLabel>{text.blog.eyebrow}</SectionLabel>
          <h1 className="text-4xl font-bold uppercase">Post not found</h1>
          <Link
            href="/blog"
            className="mt-8 inline-flex border border-black px-5 py-3 text-sm font-bold uppercase transition hover:bg-black hover:text-white"
          >
            Back to blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="min-h-screen bg-white px-5 pb-24 pt-28 text-black sm:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto max-w-4xl"
      >
        <motion.div variants={fadeInUp}>
          <Link
            href="/blog"
            className="mb-8 inline-flex border border-black px-4 py-2 text-xs font-bold uppercase transition hover:bg-black hover:text-white"
          >
            Back / Blog
          </Link>
          <div className="border border-black bg-black p-6 text-white sm:p-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase text-zinc-300">
              <span>{post.date}</span>
              <span className="h-px w-8 bg-white" />
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold uppercase leading-[1.12] sm:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">
              {post.description}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-8 grid gap-5"
        >
          {post.content.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              variants={fadeInUp}
              transition={{ duration: 0.55 }}
              className="border border-black p-6 text-base leading-8 text-zinc-800 sm:text-lg sm:leading-9"
            >
              <span className="mb-4 block text-xs font-bold uppercase text-zinc-500">
                Panel 0{index + 1}
              </span>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </article>
  );
}

export function Footer({ text }: { text: SiteContent }) {
  return (
    <footer className="border-t border-black bg-white px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 BOSSCODE. {text.footer.copyright}</p>
        <div className="flex flex-wrap gap-3">
          {text.footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center border border-black text-black transition hover:bg-black hover:text-white"
              aria-label={link.label}
            >
              <SocialIcon label={link.label} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}


