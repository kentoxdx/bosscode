"use client";

import { useState } from "react";
import {
  content,
  CoursePageContent,
  Footer,
  Language,
  MangaLoader,
  Navbar,
} from "../components/site";

export default function CoursePage() {
  const [language, setLanguage] = useState<Language>("en");
  const text = content[language];

  return (
    <main className="min-h-screen bg-black text-white">
      <MangaLoader />
      <Navbar
        text={text}
        language={language}
        onToggleLanguage={() =>
          setLanguage((current) => (current === "en" ? "th" : "en"))
        }
      />
      <CoursePageContent text={text} />
      <Footer text={text} />
    </main>
  );
}
