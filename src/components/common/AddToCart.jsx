"use client";
import useCart from "@/utils/useCart";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import Button from "./Button";

export default function AddToCart({ itemToAdd }) {
  const { addToCart, isItemAlreadyInCart } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const handleAddToCart = () => {
    if (isItemAlreadyInCart(itemToAdd.id)) {
      addToCart(itemToAdd);
      toast(`Yeaa💃`, {
        description: `You’ve added more of ${itemToAdd.title.toUpperCase()} to your cart.`,
        action: {
          label: pathname === "/cart" ? "Close" : "View Cart",
          onClick: () => router.push("/cart"),
        },
      });
    } else {
      addToCart(itemToAdd);

      toast(`Great choice! 😁`, {
        description: `${itemToAdd.title.toUpperCase()} is now in your cart.`,
        action: {
          label: pathname === "/cart" ? "Close" : "View Cart",
          onClick: () => router.push("/cart"),
        },
      });
    }
  };
  return (
    <Button
      onClick={handleAddToCart}
      className="lg:text-base text-[10px] w-full h-10 px-0 py-0"
    >
      Add to Cart
    </Button>
  );
}
