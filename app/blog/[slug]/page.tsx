"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import {
  BlogPostPageContent,
  content,
  Footer,
  Language,
  MangaLoader,
  Navbar,
} from "../../components/site";

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
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
      <BlogPostPageContent text={text} slug={params.slug} />
      <Footer text={text} />
    </main>
  );
}
