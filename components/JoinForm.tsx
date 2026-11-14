"use client";
import { useCart } from "./CartProvider";
import { useLang } from "./LangProvider";

export default function JoinForm() {
  const { toast } = useCart();
  const { t } = useLang();
  return (
    <form
      className="join__form"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: send the email to your newsletter provider (Mailchimp, Resend, Buttondown…)
        e.currentTarget.reset();
        toast(t.toast.joined);
      }}
    >
      <input type="email" placeholder={t.join.placeholder} required aria-label={t.join.emailAria} />
      <button className="btn">{t.join.button}</button>
    </form>
  );
}
