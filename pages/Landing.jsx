import Dishes from "@/components/Dishes"
import HeroSection from "@/components/HeroSection"
import Menus from "@/components/Menus"

const Landing = () => {
  return (
    <section className=" ">
      <HeroSection />
      <Menus />
      <Dishes />
    </section>
  )
}

export default Landing