"use client";
import { useCart } from "./CartProvider";

export default function JoinForm() {
  const { toast } = useCart();
  return (
    <form
      className="join__form"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: send the email to your newsletter provider (Mailchimp, Resend, Buttondown…)
        e.currentTarget.reset();
        toast("You’re in. See you at 8.");
      }}
    >
      <input type="email" placeholder="your@email.com" required aria-label="Email" />
      <button className="btn">Get the drops</button>
    </form>
  );
}
