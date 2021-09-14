import JournalistView from "../components/JournalistView"
import HeroHomePage from "../components/HeroHomePage"
import TestimonySectionHomePage from "../components/TestimonySectionHomePage"

function HomePage () {
    return (
        <main>
            <HeroHomePage />
            <TestimonySectionHomePage />
            <JournalistView />
        </main>
    )
}

export default HomePage