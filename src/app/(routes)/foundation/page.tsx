import { AppButton } from "@/components/common/AppButton";
import { DynamicPage } from "@/components/dynamicPage/DynamicPage";
import { Container } from "@/components/grids/container/container";
import { Typography } from "@/components/typography/Typography";
import { MoveRight, Phone } from "lucide-react";

function page() {
  return (
    <DynamicPage>
      <Container>
        <div className="mb-10">
          <Typography as="h1" variant="h1">
            This is a Heading 1
          </Typography>
          <Typography as="h2" variant="h2">
            This is a Heading 2
          </Typography>
          <Typography as="h3" variant="h3">
            This is a Heading 3
          </Typography>
          <Typography as="h4" variant="h4">
            This is a Heading 4
          </Typography>
          <Typography as="h5" variant="h5">
            This is a Heading 5
          </Typography>
          <Typography as="h6" variant="h6">
            This is a Heading 6
          </Typography>
        </div>
        <div className="mb-10">
          <Typography as="p" variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </Typography>
        </div>
        <div className="mb-10">
          <Typography as="p" variant="bodySm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </Typography>
        </div>
        <div className="mb-10">
          <Typography as="p" variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </Typography>
        </div>
      </Container>
      <Container>
        <div className="mb-10">
          <Typography
            className="text-main-900"
            as="h1"
            variant="h1"
            weight="bold"
          >
            Button
          </Typography>
        </div>

        {/* phone */}
        <div className="mt-10">
          <AppButton
            variant="primary"
            size="lg"
            className="mr-4"
            leftIcon={<Phone className="w-4 h-4" />}
          >
            <Typography
              className="text-white font-bold"
              as="span"
              variant="body"
            >
              012 345 67 89
            </Typography>
          </AppButton>
        </div>

        {/* categories name */}
        <div className="mt-10">
          <AppButton
            className="cursor-pointer"
            variant="outline"
            size="xl"
            rightIcon={<MoveRight className="w-4 h-4 z-2" />}
          >
            <Typography
              className="text-main-800 font-medium z-2  transition-all group-hover:text-white"
              as="span"
              variant="body"
            >
              Xem thêm
            </Typography>
          </AppButton>
        </div>

        <div className="mt-10 p-10 w-[400px] h-[150px] bg-amber-100">
          <AppButton className="cursor-pointer" variant="secondary" size="xxl">
            <Typography
              className="text-main1-950 font-bold z-2  transition-all group-hover:text-main-800"
              as="span"
              variant="h4"
            >
              Tòa nhà văn phòng
            </Typography>
          </AppButton>
        </div>

        {/* Tag name */}
        <div className="my-10 flex items-center gap-4">
          <AppButton
            className="cursor-pointer"
            variant="secondaryActive"
            size="xl"
          >
            <Typography className="text-white" as="span" variant="body">
              Tất cả
            </Typography>
          </AppButton>
          <AppButton className="cursor-pointer" variant="secondary" size="lg">
            <Typography
              className="text-main2-500 font-regular z-2  transition-all group-hover:text-white"
              as="span"
              variant="body"
            >
              Quận 1
            </Typography>
          </AppButton>
        </div>
      </Container>
    </DynamicPage>
  );
}

export default page;
