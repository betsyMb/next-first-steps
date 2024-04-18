import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "About Title",
    description: "About Description",
    keywords: ['About Page', 'Betsy', 'Info']
};

export default function AboutPage() {
    return (
        <>
            <span className={"text-5xl"}>About Page</span>
        </>
    )
}