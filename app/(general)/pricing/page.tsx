import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Priging Title",
    description: "Pricing Description",
    keywords: ['About Page', 'Betsy', 'Info']
};

export default function PricingPage() {
    return (
        <>
            <span className={"text-5xl"}>Pricing pageÏ</span>
        </>
    )
}