import Navbar from "@/components/modules/Navbar/Navbar";
import Banner from "@/components/templates/Index/Banner/Banner";
import Latest from "@/components/templates/Index/Latest/Latest";
import Promote from "@/components/templates/Index/Promote/Promote";
import Footer from "@/components/modules/Footer/Footer";
import Articles from "@/components/templates/Index/Articles/Articles";
import { authUser } from "@/utils/auth";

export default async function Home() {
  let user = await authUser();

 
  return (
    <div className="">
      <Navbar isLogin={user ? true : false} />
      <Banner />
      <Latest />
      <Promote />
      <Articles />
      <Footer />
    </div>
  );
}
