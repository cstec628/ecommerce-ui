import { Link, User } from "lucide-react";
import { Button } from "../ui/button";
import CartBadge from "../cart/CartBadge";

function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      {/* Cart */}
      <CartBadge />

      {/* Login */}
      <Button variant="ghost" size="icon" asChild>
        <Link href="/login" aria-label="Login">
          <User className="h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}

export default HeaderActions;
