"use client";
import { useId, useRef, useState } from "react";
import { ArrowUpRight, Check, LoaderCircle, RotateCcw } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { submitQuote, validateQuote, type QuotePayload } from "@/lib/quote";
export function QuoteForm({
  initialService = "",
  compact = false,
}: {
  initialService?: string;
  compact?: boolean;
}) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<
    Partial<Record<keyof QuotePayload, string>>
  >({});
  const [state, setState] = useState<
    "idle" | "sending" | "demo" | "sent" | "error"
  >("idle");
  const [failure, setFailure] = useState("");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const data = new FormData(event.currentTarget);
    const payload: QuotePayload = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      service: String(data.get("service") || ""),
      comment: String(data.get("comment") || ""),
      consent: data.get("consent") === "on",
    };
    const nextErrors = validateQuote(payload);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const field = Object.keys(nextErrors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${field}"]`)?.focus();
      return;
    }
    setState("sending");
    try {
      const result = await submitQuote(payload);
      setState(result.mode);
    } catch (error) {
      setFailure(
        error instanceof Error
          ? error.message
          : "Ошибка отправки. Попробуйте ещё раз.",
      );
      setState("error");
    }
  }
  if (state === "demo" || state === "sent")
    return (
      <div className="form-success" role="status" aria-live="polite">
        <div className="success-icon">
          <Check size={26} />
        </div>
        <h3>
          {state === "demo" ? "Всё заполнено верно" : "Заявка отправлена"}
        </h3>
        <p>
          {state === "demo"
            ? "Это демонстрационная форма портфолио. Данные проверены в браузере, никуда не отправлены и не сохранены."
            : "Спасибо! Мы свяжемся с вами по указанному номеру, чтобы обсудить объект."}
        </p>
        <button
          type="button"
          className="reset-form"
          onClick={() => setState("idle")}
        >
          <RotateCcw size={14} />
          Заполнить ещё раз
        </button>
      </div>
    );
  return (
    <form
      ref={formRef}
      onSubmit={submit}
      noValidate
      className={`quote-form ${compact ? "compact" : ""}`}
      aria-label="Форма расчёта стоимости"
    >
      <div className="form-fields">
        <div className="field">
          <label htmlFor={`${id}-name`}>
            Ваше имя <span>*</span>
          </label>
          <input
            id={`${id}-name`}
            name="name"
            placeholder="Как к вам обращаться"
            autoComplete="name"
            maxLength={80}
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
          />
          {errors.name && (
            <span id={`${id}-name-error`} className="field-error">
              {errors.name}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor={`${id}-phone`}>
            Телефон <span>*</span>
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            name="phone"
            placeholder="+7 (___) ___-__-__"
            autoComplete="tel"
            maxLength={24}
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
          />
          {errors.phone && (
            <span id={`${id}-phone-error`} className="field-error">
              {errors.phone}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor={`${id}-service`}>
            Что нужно сделать <span>*</span>
          </label>
          <select
            id={`${id}-service`}
            name="service"
            defaultValue={initialService}
            required
            aria-invalid={!!errors.service}
            aria-describedby={
              errors.service ? `${id}-service-error` : undefined
            }
          >
            <option value="" disabled>
              Выберите услугу
            </option>
            <option value="consultation">Нужна консультация</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.service && (
            <span id={`${id}-service-error`} className="field-error">
              {errors.service}
            </span>
          )}
        </div>
        <div className="field comment-field">
          <label htmlFor={`${id}-comment`}>
            Об объекте <span className="optional">необязательно</span>
          </label>
          <textarea
            id={`${id}-comment`}
            name="comment"
            placeholder="Адрес, площадь, высота или особенности работ"
            rows={compact ? 3 : 1}
            maxLength={2000}
          />
        </div>
      </div>
      <div className="form-bottom">
        <div>
          <label className="consent">
            <input
              type="checkbox"
              name="consent"
              required
              aria-invalid={!!errors.consent}
              aria-describedby={
                errors.consent ? `${id}-consent-error` : undefined
              }
            />
            <span>
              Согласен на{" "}
              <Link href="/privacy/">обработку персональных данных</Link>
            </span>
          </label>
          {errors.consent && (
            <span id={`${id}-consent-error`} className="field-error">
              {errors.consent}
            </span>
          )}
        </div>
        <button className="button" type="submit" disabled={state === "sending"}>
          {state === "sending" ? (
            <>
              Проверяем <LoaderCircle className="spin" size={19} />
            </>
          ) : (
            <>
              Получить расчёт <ArrowUpRight size={19} />
            </>
          )}
        </button>
      </div>
      <p className="demo-note">
        Демо для портфолио. Используйте вымышленные данные: отправка и
        сохранение отключены.
      </p>
      {state === "error" && (
        <p className="field-error" role="alert">
          {failure}
        </p>
      )}
    </form>
  );
}
