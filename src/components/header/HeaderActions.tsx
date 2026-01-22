import { Phone } from "lucide-react";
import { AppButton } from "../common/AppButton";
import { Typography } from "../typography/Typography";

function HeaderActions() {
  return (
    <div className="hidden md:flex items-center gap-2">
      <AppButton
        variant="primary"
        size="lg"
        className="mr-4"
        leftIcon={<Phone className="w-4 h-4" />}
      >
        <Typography className="text-white font-bold" as="span" variant="body">
          012 345 67 89
        </Typography>
      </AppButton>
    </div>
  );
}

export default HeaderActions;
