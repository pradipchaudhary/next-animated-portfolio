import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
export const metadata: Metadata = {
    title: "Pradip Chaudhary - Full Stack Developer & Web Development Expert",
    description:
        "Pradip Chaudhary is a professional Full Stack Developer specializing in building responsive, high-performance web applications using modern technologies like React, Next.js, Node.js, and Tailwind CSS. Explore my portfolio for cutting-edge web development solutions.",
    keywords:
        "Pradip Chaudhary, Full Stack Developer, Web Development, React, Next.js, Node.js, JavaScript, Tailwind CSS, Frontend Development, Backend Development, Web Applications, SEO Expert",
    author: "Pradip Chaudhary",
    robots: "index, follow",

    // Open Graph Metadata for social media sharing (Facebook, LinkedIn, etc.)
    openGraph: {
        title: "Pradip Chaudhary - Full Stack Developer Portfolio",
        description:
            "Explore the portfolio of Pradip Chaudhary, a Full Stack Developer specializing in React, Next.js, Node.js, and more. Offering cutting-edge solutions for modern web development.",
        url: "https://pradipchaudhary.com.np/", // Make sure this is the correct URL
        siteName: "Pradip Chaudhary's Portfolio",
        images: [
            {
                url: "https://pradipchaudhary.com.np/og-image.jpg", // Replace with your own image URL
                width: 1200,
                height: 630,
                alt: "Pradip Chaudhary Portfolio Image",
            },
        ],
        type: "website",
    },

    // Twitter Card Metadata
    twitter: {
        card: "summary_large_image", // Use a large image for better visibility
        site: "@PradipChaudhary", // Twitter handle for your site
        creator: "@PradipChaudhary", // Your Twitter handle
        title: "Pradip Chaudhary - Full Stack Developer Portfolio",
        description:
            "Explore Pradip Chaudhary's professional portfolio, showcasing web development projects with expertise in React, Next.js, Node.js, and more.",
        image: "https://pradipchaudhary.com.np/og-image.jpg", // Use the correct URL for the image
    },

    // Structured Data for better SEO (JSON-LD)
    structuredData: {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Pradip Chaudhary",
        jobTitle: "Full Stack Developer",
        url: "https://pradipchaudhary.com.np/",
        image: "https://pradipchaudhary.com.np/profile-image.jpg", // Replace with your profile image
        sameAs: [
            "https://www.linkedin.com/in/pradipchaudhary/",
            "https://github.com/pradipchaudhary",
            "https://twitter.com/pradipchaudhary",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            areaServed: "NP",
            availableLanguage: "English",
            telephone: "+977-123-456-7890", // Your contact number
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: "Kathmandu, Nepal", // Your location
            addressLocality: "Kathmandu",
            addressCountry: "NP",
        },
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}