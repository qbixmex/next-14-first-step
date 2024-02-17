import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "This is the pricing page of the Next 14 framework.",
  robots: "index, follow",
};

const PricingPage = () => {
  return (
    <h1 className="text-6xl text-center">Pricing</h1>
  );
};

export default PricingPage;
