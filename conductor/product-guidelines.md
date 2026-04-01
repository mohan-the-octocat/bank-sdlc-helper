# Product Guidelines - Bank SDLC Gemini Extension

## Tone and Voice
- **Empowering and Helpful:** The extension should guide users through complex banking SDLC processes with clarity and encouragement.
- **Supportive Language:** Use active verbs and positive framing to enable developers rather than strictly dictating actions.

## User Experience (CLI)
- **Markdown-First:** All complex output should be formatted as clean, readable Markdown for easy integration and archival.
- **Interactive Feedback:** Employ visual elements like spinners, progress bars, and color-coded status messages to provide real-time feedback during long-running tasks.
- **Unified Command Set:** Maintain a consistent command structure (`gemini bank-sdlc:<team>:<task>`) across all modules to ensure a predictable user experience.

## AI Behavioral Protocol
- **Explain-First Philosophy:** Before performing any modification or generating a substantial artifact, the AI MUST provide a brief, high-level explanation of its intent and rationale.
- **Transparent Reasoning:** Always link generated code or documentation back to the source requirement or technical standard that necessitated it.

## Language and Formatting
- **Standard English:** All user-facing text, logs, and generated documentation must be written in clear, professional English.
- **Consistency:** Adhere to common technical English conventions for software engineering and banking terminology.