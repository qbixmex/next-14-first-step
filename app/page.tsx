import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next 14 Framework",
  description: "Next js is a great framework for building web applications.",
  robots: "index, follow",
};

const Home = () => {
  return (
    <main className="p-24">
      <h1 className="text-center text-6xl">Next 14</h1>
    </main>
  );
};

export default Home;
