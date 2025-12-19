import { DynamicPage } from "@/components/dynamicPage/DynamicPage";
import AboutPage from "@/pages/aboutPage";

function page() {
  return (
    <DynamicPage>
      <AboutPage />
    </DynamicPage>
  );
}

export default page;
