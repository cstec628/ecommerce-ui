import { DynamicPage } from "@/components/dynamicPage/DynamicPage";
import AboutPage from "@/pages/aboutPage";

type Props = {};

function page({}: Props) {
  return (
    <DynamicPage>
      <AboutPage />
    </DynamicPage>
  );
}

export default page;
