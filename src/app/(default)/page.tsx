import Form from "@/components/form";
import Hero from "@/components/hero";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};
export default function Home() {
  return (
    <>
      <Hero />
      <Form />
      <Footer />
    </>
  );
}
