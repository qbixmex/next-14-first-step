import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is the about page of the Next 14 framework.",
  robots: "index, follow",
};

const AboutPage = () => {
  return (
    <h1 className="text-6xl text-center">About</h1>
  );
};

export default AboutPage;
