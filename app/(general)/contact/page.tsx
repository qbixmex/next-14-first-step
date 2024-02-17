import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us for more information.",
  robots: "noindex, nofollow",
};

const ContactPage = () => {
  return (
    <h1 className="text-6xl text-center">Contact</h1>
  );
};

export default ContactPage;
