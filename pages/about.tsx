import ProfileCard from "@/components/about_card"
import NavigationBar from "@/components/navigation_bar"
import Head from "next/head"

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>Migo אודות </title>
                <meta name="description" content="Migo description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/migo.png" />
            </Head>
            <NavigationBar />
            <ProfileCard />
        </>
    )
}