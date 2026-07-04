"use client";

import { useState } from "react";
import {
  BlogPageContent,
  content,
  Footer,
  Language,
  MangaLoader,
  Navbar,
} from "../components/site";

export default function BlogPage() {
  const [language, setLanguage] = useState<Language>("en");
  const text = content[language];

  return (
    <main className="min-h-screen bg-white text-black">
      <MangaLoader />
      <Navbar
        text={text}
        language={language}
        onToggleLanguage={() =>
          setLanguage((current) => (current === "en" ? "th" : "en"))
        }
      />
      <BlogPageContent text={text} />
      <Footer text={text} />
    </main>
  );
}
