"use client";

import DOMPurify from "isomorphic-dompurify";
import { CalendarDays, Check, Copy, Send } from "lucide-react";
import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ContactFormData = {
  company: string;
  email: string;
  message?: string;
  name: string;
  phone?: string;
  subject: string;
};

type BusySlot = { end: string; start: string };
type CalendarAvailabilityPayload = { data?: { busy?: BusySlot[] } };
type CalendarEventPayload = {
  data?: { eventId?: string; htmlLink?: string; meetLink?: string };
};
type ApiErrorPayload = {
  error?: {
    fields?: Array<{ field: string; message: string }>;
    message?: string;
  };
  errors?: Array<{ field: string; message: string }>;
};

function formatDateInput(date: Date): string {
  return date.toISOString().slice(0, 16);
}

function slotLabel(slot: Date, locale: string): string {
  return slot.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function dateKey(date: Date): string {
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  return `${date.getFullYear()}-${month}-${day}`;
}

function dateLabel(date: Date, locale: string): string {
  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    weekday: "short",
  });
}

async function readApiError(
  response: Response,
  fallback: string,
): Promise<string> {
  const payload = (await response
    .json()
    .catch(() => null)) as ApiErrorPayload | null;
  const fields = payload?.error?.fields ?? payload?.errors ?? [];

  if (fields.length) {
    return fields.map((field) => field.message).join(" ");
  }

  return payload?.error?.message ?? fallback;
}

export default function ContactForm() {
  const { i18n, t } = useTranslation();
  const language = i18n.language.startsWith("fr") ? "fr" : "en";
  const locale = language === "fr" ? "fr-FR" : "en-US";
  const copy = {
    en: {
      available: "Available slots",
      availableDates: "Available dates",
      checking: "Checking...",
      checkSlots: "Find a slot",
      consent: "I agree to receive product updates and tips (optional)",
      copied: "Copied",
      copyInvite: "Copy invitation link",
      details: "Your details",
      end: "End",
      intro:
        "Tell us what you want to query, where the documents live, and how strict the deployment boundary needs to be.",
      meeting: "Meeting",
      meetingCta: "See available 15-minute slots",
      meetingRemove: "Remove meeting",
      noSlots:
        "No available slots were returned for the next few business days.",
      note: "This will create a 15-minute Google Meet invitation.",
      privacy: "Privacy Policy",
      schedule: "Send and schedule",
      scheduling: "Scheduling...",
      start: "Start",
      success:
        "Meeting scheduled. You will receive the calendar invite by email.",
      unavailable: "Calendar unavailable. You can still send the message.",
    },
    fr: {
      available: "Créneaux disponibles",
      availableDates: "Dates disponibles",
      checking: "Vérification...",
      checkSlots: "Trouver un créneau",
      consent:
        "Je souhaite recevoir des actualités et conseils produits (optionnel)",
      copied: "Copié",
      copyInvite: "Copier le lien d'invitation",
      details: "Vos coordonnées",
      end: "Fin",
      intro:
        "Dites-nous quels documents vous voulez interroger, où ils vivent, et quel niveau de contrôle le déploiement doit respecter.",
      meeting: "Rendez-vous",
      meetingCta: "Voir les créneaux disponibles",
      meetingRemove: "Retirer le rendez-vous",
      noSlots:
        "Aucun créneau disponible n'a été renvoyé pour les prochains jours ouvrés.",
      note: "Cela créera une invitation Google Meet de 15 minutes.",
      privacy: "Politique de confidentialité",
      schedule: "Envoyer et planifier",
      scheduling: "Planification...",
      start: "Début",
      success:
        "Rendez-vous planifié. Vous recevrez l'invitation calendrier par email.",
      unavailable:
        "Calendrier indisponible. Vous pouvez toujours envoyer le message.",
    },
  }[language];

  const [form, setForm] = useState<ContactFormData>({
    company: "",
    email: "",
    message: "",
    name: "",
    phone: "",
    subject: "",
  });
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [busy, setBusy] = useState<BusySlot[]>([]);
  const [rangeStart] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(9, 0, 0, 0);
    return formatDateInput(date);
  });
  const [rangeEnd] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 8);
    date.setHours(18, 0, 0, 0);
    return formatDateInput(date);
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [slotsVisible, setSlotsVisible] = useState(false);
  const [status, setStatus] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [meetLink, setMeetLink] = useState("");
  const [copiedInvite, setCopiedInvite] = useState(false);

  const slots = useMemo(() => {
    const output: Date[] = [];
    const cursor = new Date(rangeStart);
    const end = new Date(rangeEnd);

    cursor.setMinutes(Math.ceil(cursor.getMinutes() / 15) * 15, 0, 0);

    while (cursor < end) {
      const slotEnd = new Date(cursor);
      slotEnd.setMinutes(slotEnd.getMinutes() + 15);
      const day = cursor.getDay();
      const hour = cursor.getHours();
      const overlaps = busy.some(
        (item) => new Date(item.start) < slotEnd && new Date(item.end) > cursor,
      );

      if (day !== 0 && day !== 6 && hour >= 9 && hour < 18 && !overlaps) {
        output.push(new Date(cursor));
      }

      cursor.setMinutes(cursor.getMinutes() + 15);
    }

    return output;
  }, [busy, rangeEnd, rangeStart]);

  const availableDates = useMemo(() => {
    const dates = new Map<string, Date>();

    slots.forEach((slot) => {
      const key = dateKey(slot);

      if (!dates.has(key)) {
        dates.set(key, slot);
      }
    });

    return Array.from(dates, ([key, date]) => ({ date, key }));
  }, [slots]);

  const selectedDateSlots = useMemo(
    () => slots.filter((slot) => dateKey(slot) === selectedDate),
    [selectedDate, slots],
  );

  useEffect(() => {
    if (!slotsVisible || selectedDate || !availableDates.length) {
      return;
    }

    setSelectedDate(availableDates[0].key);
  }, [availableDates, selectedDate, slotsVisible]);

  const fieldClass =
    "w-full border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-300 dark:border-neutral-800 dark:bg-neutral-950";

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const checkAvailability = async () => {
    setIsChecking(true);
    setStatus("");
    setSelectedDate("");
    setSelectedSlot("");
    setSlotsVisible(false);
    try {
      const response = await fetch("/api/workspace/calendar/availability", {
        body: JSON.stringify({
          end: new Date(rangeEnd).toISOString(),
          start: new Date(rangeStart).toISOString(),
          timezone: "Europe/Paris",
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(await readApiError(response, copy.unavailable));
      }

      const result = (await response.json()) as CalendarAvailabilityPayload;
      setBusy(result.data?.busy ?? []);
      setSlotsVisible(true);
    } catch (error) {
      setBusy([]);
      setStatus(error instanceof Error ? error.message : copy.unavailable);
    } finally {
      setIsChecking(false);
    }
  };

  const showAvailability = () => {
    void checkAvailability();
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSending(true);
    setStatus("");
    setMeetLink("");

    const safe = {
      company: DOMPurify.sanitize(form.company),
      email: DOMPurify.sanitize(form.email),
      marketingConsent,
      message: DOMPurify.sanitize(form.message ?? ""),
      name: DOMPurify.sanitize(form.name),
      phone: DOMPurify.sanitize(form.phone ?? ""),
      subject: DOMPurify.sanitize(form.subject),
    };

    try {
      if (!selectedSlot) {
        setStatus(
          language === "fr"
            ? "Veuillez sélectionner un créneau."
            : "Please select a time slot.",
        );
        return;
      }

      const start = new Date(selectedSlot);
      const end = new Date(start);
      end.setMinutes(end.getMinutes() + 15);
      const response = await fetch("/api/workspace/calendar/events", {
        body: JSON.stringify({
          attendees: [safe.email],
          company: safe.company,
          description: safe.message
            ? `${safe.company}\n${safe.message}`
            : safe.company,
          email: safe.email,
          end: end.toISOString(),
          name: safe.name,
          start: start.toISOString(),
          summary: `${t("contact.meeting.title")} - ${
            safe.company || safe.name
          }`,
          timezone: "Europe/Paris",
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(
          await readApiError(response, t("contact.form.statusSendError")),
        );
      }

      const payload = ((await response.json()) as CalendarEventPayload).data;
      setMeetLink(payload?.meetLink ?? payload?.htmlLink ?? "");
      setCopiedInvite(false);
      setStatus(copy.success);

      setForm({
        company: "",
        email: "",
        name: "",
        phone: "",
        subject: "",
      });
      setMarketingConsent(false);
      setSelectedSlot("");
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : t("contact.form.statusSendError"),
      );
    } finally {
      setIsSending(false);
    }
  };

  const copyInvitationLink = async () => {
    if (!meetLink) {
      return;
    }

    await navigator.clipboard.writeText(meetLink);
    setCopiedInvite(true);
    window.setTimeout(() => setCopiedInvite(false), 1800);
  };

  return (
    <form className="space-y-7" onSubmit={handleSubmit}>
      <p className="border-l-2 border-orange-500 pl-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
        {copy.intro}
      </p>

      <section>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
          {copy.details}
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            className={fieldClass}
            maxLength={60}
            name="name"
            onChange={handleChange}
            placeholder={t("contact.form.namePlaceholder")}
            required
            type="text"
            value={form.name}
          />
          <input
            className={fieldClass}
            maxLength={80}
            name="company"
            onChange={handleChange}
            placeholder={t("contact.form.companyPlaceholder")}
            required
            type="text"
            value={form.company}
          />
          <input
            className={fieldClass}
            maxLength={120}
            name="email"
            onChange={handleChange}
            placeholder={t("contact.form.emailPlaceholder")}
            required
            type="email"
            value={form.email}
          />
          <input
            className={fieldClass}
            maxLength={30}
            name="phone"
            onChange={handleChange}
            placeholder={t("contact.form.phonePlaceholder")}
            type="tel"
            value={form.phone}
          />
        </div>
      </section>

      <section>
        <Select
          onValueChange={(value) =>
            setForm((current) => ({ ...current, subject: value }))
          }
          value={form.subject}
        >
          <SelectTrigger className="w-full rounded-none border border-neutral-200 bg-white px-4 py-3 text-sm dark:border-neutral-800 dark:bg-neutral-950">
            <SelectValue placeholder={t("contact.form.subjectPlaceholder")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="information">
              {t("contact.form.subjectInformation")}
            </SelectItem>
            <SelectItem value="partnership">
              {t("contact.form.subjectPartnership")}
            </SelectItem>
            <SelectItem value="other">
              {t("contact.form.subjectOther")}
            </SelectItem>
            <SelectItem value="api">{t("contact.form.subjectApi")}</SelectItem>
            <SelectItem value="virtual-partner">
              {t("contact.form.subjectVirtualPartner")}
            </SelectItem>
          </SelectContent>
        </Select>
        <textarea
          aria-label={t("contact.form.messagePlaceholder")}
          className={`${fieldClass} mt-3 max-h-56 min-h-32 resize-y`}
          maxLength={1000}
          name="message"
          onChange={handleChange}
          placeholder={t("contact.form.messagePlaceholder")}
          value={form.message ?? ""}
        />
      </section>

      <section>
        <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
          <CalendarDays className="h-4 w-4 text-orange-500" />
          {copy.meeting}
        </h3>
        <button
          className="inline-flex w-full items-center justify-center gap-2 border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
          disabled={isChecking}
          onClick={showAvailability}
          type="button"
        >
          <CalendarDays className="h-4 w-4" />
          {isChecking ? copy.checking : copy.meetingCta}
        </button>
        {slotsVisible || selectedSlot ? (
          <div className="mt-3">
            {slotsVisible && availableDates.length ? (
              <div className="mt-3 space-y-3">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                    {copy.availableDates}
                  </p>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {availableDates.map(({ date, key }) => {
                      const selected = selectedDate === key;

                      return (
                        <button
                          key={key}
                          className={
                            selected
                              ? "border border-orange-500 bg-orange-50 px-3 py-2 text-left text-sm font-semibold text-orange-700 dark:border-orange-400 dark:bg-orange-500/15 dark:text-orange-200"
                              : "border border-neutral-200 bg-white px-3 py-2 text-left text-sm font-medium text-neutral-600 hover:border-orange-200 hover:text-orange-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
                          }
                          onClick={() => {
                            setSelectedDate(key);
                            setSelectedSlot("");
                          }}
                          type="button"
                        >
                          {dateLabel(date, locale)}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedDateSlots.length ? (
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                      {copy.available}
                    </p>
                    <div className="grid gap-2 sm:grid-cols-4">
                      {selectedDateSlots.map((slot) => {
                        const iso = slot.toISOString();
                        const selected = selectedSlot === iso;

                        return (
                          <button
                            key={iso}
                            className={
                              selected
                                ? "border border-orange-500 bg-orange-50 px-3 py-2 text-left text-sm font-semibold text-orange-700 dark:border-orange-400 dark:bg-orange-500/15 dark:text-orange-200"
                                : "border border-neutral-200 bg-white px-3 py-2 text-left text-sm font-medium text-neutral-600 hover:border-orange-200 hover:text-orange-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
                            }
                            onClick={() => setSelectedSlot(iso)}
                            type="button"
                          >
                            {slotLabel(slot, locale)}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : slotsVisible ? (
              <p className="mt-3 border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300">
                {copy.noSlots}
              </p>
            ) : null}
          </div>
        ) : null}
        {selectedSlot ? (
          <p className="mt-2 flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
            <Check className="h-3.5 w-3.5 text-orange-500" />
            {copy.note}
          </p>
        ) : null}
      </section>

      <div className="space-y-4 border-t border-neutral-200 pt-5 dark:border-neutral-800">
        <div className="flex items-start gap-3">
          <input
            checked={marketingConsent}
            className="mt-0.5 h-4 w-4 shrink-0 accent-orange-500"
            id="marketing-consent"
            onChange={(e) => setMarketingConsent(e.target.checked)}
            type="checkbox"
          />
          <label
            className="text-xs leading-5 text-neutral-500 dark:text-neutral-400"
            htmlFor="marketing-consent"
          >
            {copy.consent}
          </label>
        </div>

        <div className="rounded border border-neutral-200 bg-neutral-50 px-3 py-2.5 dark:border-neutral-800 dark:bg-neutral-900/50">
          <p className="text-xs leading-5 text-neutral-500 dark:text-neutral-400">
            {language === "fr"
              ? "Nous traitons vos données (nom, email, entreprise, téléphone) pour répondre à votre demande et planifier un rendez-vous via Google Calendar. Base légale : intérêt légitime. Données conservées 36 mois après le dernier contact. Vous pouvez accéder, rectifier ou supprimer vos données à tout moment."
              : "We process your data (name, email, company, phone) to respond to your inquiry and schedule a meeting via Google Calendar. Legal basis: legitimate interest. Data retained 36 months after last contact. You may access, rectify or delete your data at any time."}{" "}
            <a
              className="text-orange-600 underline underline-offset-2 hover:text-orange-700 dark:text-orange-400"
              href="/privacy"
              rel="noopener noreferrer"
              target="_blank"
            >
              {copy.privacy}
            </a>
            {language === "fr"
              ? ". Vous pouvez saisir la CNIL."
              : ". You may lodge a complaint with the CNIL."}
          </p>
        </div>
      </div>

      <button
        className="inline-flex w-full items-center justify-center gap-2 bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:opacity-50"
        disabled={isSending}
        type="submit"
      >
        <Send className="h-4 w-4" />
        {isSending ? copy.scheduling : copy.schedule}
      </button>

      {status ? (
        <p className="border border-neutral-200 bg-white px-4 py-3 text-center text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300">
          {status}
        </p>
      ) : null}
      {meetLink ? (
        <div className="grid gap-2 sm:grid-cols-2">
          <a
            className="block border border-orange-200 bg-orange-50 px-4 py-3 text-center text-sm font-semibold text-orange-700"
            href={meetLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {language === "fr" ? "Ouvrir l'invitation" : "Open invitation"}
          </a>
          <button
            className="inline-flex items-center justify-center gap-2 border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-orange-300 hover:text-orange-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
            onClick={copyInvitationLink}
            type="button"
          >
            <Copy className="h-4 w-4" />
            {copiedInvite ? copy.copied : copy.copyInvite}
          </button>
        </div>
      ) : null}
    </form>
  );
}
