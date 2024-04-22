import Navbar from "@/components/modules/Navbar/Navbar"
import Banner from "@/components/templates/Index/Banner/Banner"
import Latest from "@/components/templates/Index/Latest/Latest"
import Promote from "@/components/templates/Index/Promote/Promote"
import Footer from "@/components/modules/Footer/Footer"

export default function Home() {
  return (
    <div className=''>
     <Navbar/>
     <Banner/>
     <Latest/>
     <Promote/>
     <Footer/>
    </div>
  )
}
