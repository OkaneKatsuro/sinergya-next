import About1 from "@/components/about1";
import About2 from "@/components/about2";
import Anket from "@/components/anket";
import Faq from "@/components/faq";
import Form from "@/components/form";
import Hero from "@/components/hero";
import QrBlock from "@/components/qrblock";
import Towns from "@/components/towns";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};
export default function Home() {
  return (
    <>
      <Hero />
      <About1 />
      <About2 />
      <Faq />
      <Towns />
      <Anket />
      <QrBlock />
      <Form />
      <Footer />
    </>
  );
}
