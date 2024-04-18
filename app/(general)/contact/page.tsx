import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Title",
    description: "About Description",
    keywords: ['About Page', 'Betsy', 'Info']
};
export default function ContactPage() {
    return (
        <>
            <span className={"text-5xl"}>Contact pageÏ</span>
        </>
    )
}