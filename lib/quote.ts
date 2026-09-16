export type QuotePayload = {
  name: string;
  phone: string;
  service: string;
  comment: string;
  consent: boolean;
};
export type QuoteResult = { mode: "demo" | "sent" };
export function validateQuote(p: QuotePayload) {
  const errors: Partial<Record<keyof QuotePayload, string>> = {};
  if (p.name.trim().length < 2)
    errors.name = "Укажите имя — не менее 2 символов.";
  const digits = p.phone.replace(/\D/g, "");
  if (!/^[+\d\s()\-]+$/.test(p.phone) || !/^([78]\d{10}|\d{10})$/.test(digits))
    errors.phone = "Введите российский номер: +7 и 10 цифр.";
  if (!p.service) errors.service = "Выберите услугу.";
  if (!p.consent) errors.consent = "Необходимо согласие на обработку данных.";
  return errors;
}
export async function submitQuote(
  _payload: QuotePayload,
): Promise<QuoteResult> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { mode: "demo" };
}
