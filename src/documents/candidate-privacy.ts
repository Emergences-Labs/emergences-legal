// =============================================================
// NeoWork Candidate Privacy Notice — the data-subject "layer 1" notice for
// people being assessed (distinct from the customer-facing Privacy Policy).
//
// DRAFTING BASELINE, NOT LEGAL ADVICE. Candidates are data subjects but not our
// customer, so GDPR Art 13/14 and CCPA notice-at-collection require a notice
// written to THEM, in plain language, at the point of collection. The employer
// is the controller; NeoWork is the processor. Counsel to review — especially
// the Art 14 third-party-source disclosure and the automated-decision framing.
//
// LIVE CALL (2026-11-12). Some assessments now include one live call with an
// AI, in the candidate's browser, using their camera and microphone. The
// notice says so and says what the call leaves behind. For counsel:
//   1. The provider that runs the call keeps its own recording and transcript,
//      and its API offers no way to delete them. The notice states that the
//      provider keeps a copy; it makes no promise about that copy's deletion.
//   2. The candidate agrees to the call being recorded on the screen shown
//      before the assessment starts. Check that wording against call-recording
//      consent laws and biometric-privacy laws (video and voice reach an AI
//      model; nothing is used to identify the candidate).
//
// DESKTOP CAPTURE IN FULL (2026-11-20, DRAFT — COUNSEL TO REVIEW, 待律师看).
// The invitation page now shows only a short version before the candidate
// agrees (four tiles and a link here), so this notice carries the full list.
// Each item states what the NeoWork desktop capture code does (desktop 0.3.31),
// written from the code and checked row by row; the code references are in
// Emergences-Labs/arena src/lib/invitations/captureDisclosure.js (notice
// recording_notice.2026-11-20.v4). There is no pause button: quitting the
// app is the pause, which is how "while paused, nothing is captured" on the
// invitation page is meant. Section 4's call paragraph now says what the code
// does: Hiring scores the call for the Employer (call-score.ts), and the
// competency rating can cite the candidate's words on the call (Arena BARS
// WORK_SAMPLE_CALL_RULE); the result score does not read the call.
//   HELD: the live-call part of section 1 (what is recorded, by whom, for how
//   long, and what the provider derives from video and voice) waits for the
//   call provider's answers. Our side keeps no call audio or video; the
//   provider records the session and its API cannot delete it.
//   Set the version and effective date to the publication date when merged.
//   Which version of this notice a candidate saw is not stored with their
//   consent. The consent row (arena invite_consent_events) stores the
//   invitation-page notice version and the time of agreeing, and this site
//   publishes this repository's main branch, so the git history at that time
//   gives the text that was in effect. Counsel: say if it must be stored
//   with each consent instead.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const CANDIDATE_PRIVACY_VERSION = "2026-11-20";
export const CANDIDATE_PRIVACY_EFFECTIVE_DATE = "November 20, 2026";

export const CANDIDATE_PRIVACY_DOC: LegalDocument = {
  slug: "candidate-privacy",
  scope: "neohuman",
  title: "Candidate Privacy Notice",
  description:
    "For candidates: what NeoWork collects when you take an assessment, how " +
    "the AI evaluation works, and the rights you have.",
  version: CANDIDATE_PRIVACY_VERSION,
  effectiveDate: CANDIDATE_PRIVACY_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  ledgerExtra: [{ label: "Your role", value: "Data subject" }],
  summary: [
    {
      label: "AI helps evaluate",
      text: "Your work is assessed with AI to produce a descriptive report. A person at the employer makes the hiring decision — not the AI.",
    },
    {
      label: "The employer decides",
      text: "The organization that invited you controls your data and the process. NeoWork runs the assessment on their behalf.",
    },
    {
      label: "You have rights",
      text: "You can ask for a human review, an explanation, access to your data, a correction, deletion, or an alternative to an AI assessment.",
    },
  ],
  preamble:
    `This notice explains how your personal data is handled across the ` +
    `NeoHuman candidate platform (reskill.neo-human.ai), the ${PRODUCT_NAME} ` +
    `assessment app (app.neo-work.ai) and the ${PRODUCT_NAME} desktop app that ` +
    `assessments run in, and public Arena postings — all operated by ` +
    `${PRODUCT_NAME}. Two roles apply. For your NeoHuman account and profile — ` +
    `things you create yourself — ${PRODUCT_NAME} is responsible for your ` +
    `data. For an assessment, the organization behind it (the “Employer”) ` +
    `decides why you are being assessed and is the controller of the results ` +
    `it receives; ${PRODUCT_NAME} provides the assessment technology and ` +
    `processes your data on the Employer's instructions. For questions about a ` +
    `specific hiring process, contact the Employer; for questions about the ` +
    `platform, you can also contact us.`,
  sections: [
    {
      n: 1,
      title: "What we collect about you",
      blocks: [
        {
          kind: "list",
          items: [
            "Identity and contact details — your name and email, and your invitation.",
            "Your NeoHuman account and profile — the preferences, links, and experience you add yourself (target roles, salary floor, locations, skills, socials, imported positions).",
            "Identity verification — we store only the verification status and timestamps. Your documents and biometric data stay with our verification partner (Stripe Identity), which shows you its own consent and retention notice in the flow.",
            "Your work — the files, code, project, or video you submit for the assessment.",
            "A record of your assessment session, including how you worked with AI tools during the task — described in detail below.",
            "A live call, if your assessment includes one — the audio and video of the call while it runs, a recording of it, and a transcript of what was said.",
            "Professional background — details from a résumé you provide or, where applicable, from a public professional profile.",
            "The evaluation the platform generates about your work.",
            "Your pseudonymous handle, where you keep the public-profile option on.",
            "Technical data such as your IP address, used to keep the assessment secure.",
          ],
        },
        {
          kind: "sub",
          heading: "During an assessment session",
          text:
            `While you take an assessment, the ${PRODUCT_NAME} desktop app records ` +
            `and sends the following, from when you press Start until you submit. ` +
            `This is how the Employer sees how you worked, including how you used ` +
            `AI tools. Before you start, you are shown a short version of this ` +
            `list, with a link to this notice.`,
        },
        {
          kind: "list",
          items: [
            "Your screen — a video of one display. No sound is recorded.",
            "Every key you press — in every app, each key with the character it typed and when. A password field that your computer marks as secure usually keeps only the timing, or nothing at all. Not every password prompt is marked (a terminal’s, for example), and what you type there is recorded like any other typing.",
            "What you copy and paste — the full text on your clipboard each time it changes, whichever app put it there, and each time you paste with the keyboard, including text you copied before you pressed Start. Each comes with the app and window in front at that moment (for a paste, the one you paste into). Only text is read, not images or files, and the app is built to skip text that a password manager marks as hidden.",
            "Text on your screen — the text in the window you are using, read through your computer’s accessibility features and text recognition, including what is in the box you are typing in and the web address in a browser’s address bar. On Windows, text recognition reads that window’s part of the screen, so a notification or another window on top of it is read too. On a Mac, the app may also read a text box in another open app when its text changes.",
            "Apps, windows and clicks — which app is in front, its window title (a browser’s title often names the page), its icon, and where its program is installed on your computer. For each click: the app, the window and the button or field you clicked, but not where on the screen.",
            "Your use of AI tools — captured the same way as everything else: your prompts and the answers you see are part of the typing and screen record above, and the AI tools you used are identified from it.",
            "Screenshots in some assessments — still screenshots of your screen go to an AI in the app (a coach, or an examiner that may ask you questions): about once a minute while you are active, every two minutes while you are still until five minutes pass without input, more often while you type, click, scroll or switch apps, and each time you ask it something.",
            "Your computer — a random ID for this installation of the app; the app version; your operating system’s exact version, processor type and graphics card model; and, when more than one display is connected, each display’s name and size. The app’s diagnostic log is sent when you open Help or when something goes wrong, which can be before you press Start or after you submit. It can name the apps you used and buttons or fields on screen, and includes the computer’s memory and processor use, sleep and screen-lock times, the folders the app uses (which can contain your user name) and the invitation (your name, the assessment and the Employer). It is built to leave out window titles, typed text and copied text, but an error message or the name of a button or field kept in it can include text from your screen. When you agree to be recorded, and if you move to another computer, your IP address and browser details are stored.",
          ],
        },
        {
          kind: "p",
          text:
            "Not recorded by the desktop app: your microphone, your camera, sound, " +
            "your network traffic, and files you do not choose to submit. Mouse " +
            "movement is not logged on its own, but the screen video shows the " +
            "pointer. A live call, if your assessment includes one, uses your " +
            "camera and microphone in your browser (see below).",
        },
        {
          kind: "p",
          text:
            "To pause, quit the app: quitting stops the recording, and you can " +
            "come back and continue before the assessment is due. Recording ends " +
            "within seconds of quitting or submitting: a screen read already " +
            "under way may finish, and nothing is recorded after that. What was " +
            "already recorded finishes uploading (after you quit, the next time " +
            "you open the app).",
        },
        {
          kind: "p",
          text:
            "The record is uploaded while you work, and AI models can start " +
            "analyzing it while you are still working. They analyze it, together " +
            "with what you submit, to prepare a report for the Employer's hiring " +
            "team: they can run and test what you submit, judge which text you " +
            "wrote yourself, score your work, rate your skills on a scale of " +
            "levels, and flag a submission that breaks a rule of the task, which " +
            "invalidates it. An AI also checks the recording for private content " +
            "and decides which parts the hiring team sees, and the hiring team " +
            "can ask an AI questions about your session.",
        },
        {
          kind: "sub",
          heading: "If your assessment includes a live call",
          text:
            `Some assessments include one short live call. You are told before ` +
            `you start if yours does. You join the call in your browser, and ` +
            `you speak with an AI system that plays someone from the job, not ` +
            `with a person. The call uses your camera and microphone, and they ` +
            `are used only during that call. The call is recorded and ` +
            `transcribed, and the provider that runs it keeps its own copy of ` +
            `the recording and the transcript. The screen recording described ` +
            `above continues during the call, so it can show the call page, ` +
            `including your own picture. You can complete the written work ` +
            `without joining the call; the call is then not evaluated.`,
        },
      ],
    },
    {
      n: 2,
      title: "Personal content on your screen",
      blocks: [
        {
          kind: "p",
          text:
            "A screen recording can catch things that have nothing to do with " +
            "the assessment. We limit that in two ways:",
        },
        {
          kind: "list",
          items: [
            "On your computer: while a messaging, email, password-manager, or video-meeting app is in front, the desktop app blanks the recording and does not capture that app's text.",
            "Before anyone reviews it: the rest of the session is screened automatically with AI, and passages that show personal content — such as private messages, email, personal files, or account and identity pages — are removed before the Employer sees the recording or anything derived from it.",
          ],
        },
        {
          kind: "callout",
          label: "Please help",
          text:
            "Automated screening can miss things. Close personal apps, tabs, " +
            "messages and notifications before you start, quit the app if " +
            "something personal comes up, and do not type a real password while " +
            "you are recording: anything on your screen, and anything you type, " +
            "may be recorded.",
        },
      ],
    },
    {
      n: 3,
      title: "Where your data comes from",
      blocks: [
        {
          kind: "p",
          text:
            "Most data comes from you directly or from the Employer that invited " +
            "you. Some professional-background data may be obtained from a " +
            "third-party professional-data provider using a professional-profile " +
            "URL, rather than collected from you. Where that happens, this notice " +
            "is your notice of that source.",
        },
      ],
    },
    {
      n: 4,
      title: "How the AI evaluation works",
      blocks: [
        {
          kind: "p",
          text:
            "The platform uses AI to review your submitted work and produce " +
            "descriptive results — for example, how effectively you worked and a " +
            "set of competency indicators, each supported by specific evidence from " +
            "your work. It describes your demonstrated level; it does not label you " +
            "“hire” or “no-hire”.",
        },
        {
          kind: "callout",
          label: "A human decides",
          text:
            "The evaluation is one input. A person at the Employer reviews it and " +
            "makes the hiring decision. The evaluation is designed to flag " +
            "uncertain observations for human review rather than penalize them, " +
            "and never to infer protected characteristics.",
        },
        {
          kind: "p",
          text:
            "If your assessment includes a guide you can chat with, that guide " +
            "is an AI system, not a person. So is the person you speak with on " +
            "a live call.",
        },
        {
          kind: "p",
          text:
            "If your assessment includes a live call, AI reads its transcript " +
            "(the words and who said them, not the sound or the picture) and " +
            "notes, for each item on a list the Employer set, whether it " +
            "happened on the call, with quotes from the transcript as the " +
            "evidence. From those notes the Employer is shown a score for the " +
            "call. What you say on the call can also be quoted as evidence in " +
            "the rating of your skills. The call does not change the score of " +
            "the work you submit.",
        },
      ],
    },
    {
      n: 5,
      title: "Why your data is used",
      blocks: [
        {
          kind: "p",
          text:
            "Your data is used to run and evaluate the assessment for the " +
            "Employer's hiring decision, to keep the assessment secure and fair, " +
            "and to comply with law. It is not sold, and we never use it to train " +
            "or fine-tune AI models.",
        },
      ],
    },
    {
      n: 6,
      title: "Your rights",
      blocks: [
        {
          kind: "list",
          items: [
            "Ask for a human review of an evaluation and an explanation of how it was reached.",
            "Request a reasonable accommodation, or an alternative to an AI-based assessment.",
            "Access the personal data held about you, and receive a copy.",
            "Correct inaccurate data, or ask for your data to be deleted.",
            "Object to or restrict certain processing, and withdraw any consent you gave.",
          ],
        },
        {
          kind: "sub",
          heading: "How to exercise them",
          text:
            `Because the Employer controls your data, the fastest route is to ` +
            `contact them. You can also contact ${PRODUCT_NAME} at ` +
            `${LEGAL_CONTACTS.privacy}; we will help the Employer respond and, ` +
            `where we must act, respond within the time the law requires. ` +
            `Exercising a right will not be held against you.`,
        },
      ],
    },
    {
      n: 7,
      title: "How long your data is kept",
      blocks: [
        {
          kind: "p",
          text:
            "We keep your assessment data, including the recording and the " +
            "activity captured during an assessment session and the transcript " +
            "of a live call, until the Employer " +
            "deletes it or asks us to, or until we complete a verified request " +
            "from you to delete it — unless the law requires us to keep it or it " +
            "is needed for a legal claim. You can ask the Employer, or us, to " +
            "delete it at any time. Our Data Retention & Deletion Policy has the " +
            "details.",
        },
      ],
    },
    {
      n: 8,
      title: "Security and where data is processed",
      blocks: [
        {
          kind: "p",
          text:
            "We protect your data with encryption, access controls, and " +
            "monitoring, and use vetted service providers listed on our " +
            "Sub-processors page. Your data is stored in the United States, and " +
            "some of our providers may process it in other countries. When data " +
            "about people in the EEA, the UK, or Switzerland is transferred, we " +
            "rely on the EU–U.S. Data Privacy Framework where a provider is " +
            "certified, and otherwise on the European Commission's Standard " +
            "Contractual Clauses (with the UK Addendum).",
        },
      ],
    },
    {
      n: 9,
      title: "Contact",
      blocks: [
        {
          kind: "p",
          text:
            `Questions about your data on ${PRODUCT_NAME}: ` +
            `${LEGAL_CONTACTS.privacy}. If you are in the EEA or UK, you may also ` +
            `contact your local data-protection authority. For decisions about a ` +
            `specific role, contact the Employer that invited you.`,
        },
      ],
    },
  ],
  colophon:
    "This Candidate Privacy Notice sits alongside the employer's own privacy " +
    "notice and our Privacy Policy, and works with the Candidate Bill of Rights.",
};
