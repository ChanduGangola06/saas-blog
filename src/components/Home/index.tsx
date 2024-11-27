import CallToAction from "./CallToAction";
import Counter from "./Counter";
import FAQ from "./FAQ";
import Features from "./Features";
import FeaturesWithImage from "./FeaturesWithImage";
import Hero from "./Hero";
import HomePricing from "./Pricing";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import { integrations } from "../../../integrations.config";
import Blog from "./Blog";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <FeaturesWithImage />
            <Counter />
            <CallToAction />
            <Testimonials />
            <HomePricing />
            <FAQ />
            <Newsletter />
            {integrations?.isSanityEnabled && <Blog />}
        </>
    );
}

export default HomePage;