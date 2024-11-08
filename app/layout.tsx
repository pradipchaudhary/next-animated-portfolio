import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Software Engineer & Open Source Contributor - Pradip Chaudhary",
    description:
        "Pradip Chaudhary is a passionate software engineer and dedicated open-source contributor, driven by a relentless pursuit of excellence in technology. With a strong background in software development, Pradip brings a wealth of expertise in building robust and scalable applications. He is committed to the principles of open-source software, actively contributing to various projects and communities to foster collaboration and innovation. Through his contributions, Pradip strives to make meaningful impacts in the world of technology, empowering others and advancing the boundaries of what's possible. This metadata was generated by create next app.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <>{children}</>
            </body>
        </html>
    );
}
