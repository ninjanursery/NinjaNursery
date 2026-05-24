# 🎌 NinjaNursery™ AI Agent

Premium anime baby lifestyle brand — AI-powered product idea generator.

**Features:** Market trends → Leonardo AI prompts → Product titles & descriptions → Pinterest copy → Google Sheets → Telegram & WhatsApp reminders.

---

## ⚡ Quick Setup (15 minutes total)

### Step 1 — GitHub Pages থেকে চালানো

1. GitHub-এ নতুন repository বানাও (যেকোনো নাম)
2. `index.html` ফাইলটা upload করো
3. Settings → Pages → Source: **main branch** → Save
4. কিছুক্ষণ পর তোমার site live: `https://yourusername.github.io/reponame`

---

### Step 2 — Gemini API Key

1. [Google AI Studio](https://aistudio.google.com/app/apikey) যাও
2. **Create API Key** ক্লিক করো
3. Key টা copy করো
4. Agent-এ **Gemini API Key** field-এ paste করো

---

### Step 3 — Google Sheets Setup (Apps Script)

1. [Google Sheets](https://sheets.google.com) এ নতুন spreadsheet বানাও
2. **Extensions → Apps Script** ক্লিক করো
3. সব default code delete করো
4. `apps-script.gs` ফাইলের সব code paste করো
5. **Deploy → New Deployment** ক্লিক করো
6. Type: **Web App** সিলেক্ট করো
7. Execute as: **Me**, Access: **Anyone** সিলেক্ট করো
8. **Deploy** ক্লিক করো
9. দেওয়া URL টা copy করো (https://script.google.com/macros/s/...)
10. Agent-এ **Google Apps Script URL** field-এ paste করো

> ⚠ "Anyone" access দিতে হবে, নইলে agent write করতে পারবে না।

---

### Step 4 — Telegram Bot Setup

1. Telegram-এ [@BotFather](https://t.me/BotFather) তে যাও
2. `/newbot` পাঠাও
3. Bot-এর নাম দাও: `NinjaNursery Agent`
4. Username দাও: `otakunest_youname_bot`
5. Bot token টা পাবে — copy করো (format: `123456789:ABCdef...`)
6. Agent-এ **Telegram Bot Token** field-এ paste করো

**Chat ID পাওয়ার জন্য:**
1. তোমার bot-কে একটা message পাঠাও
2. Browser-এ যাও: `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates`
3. `"chat":{"id":` এর পরের number টাই তোমার Chat ID
4. Agent-এ **Telegram Chat ID** field-এ paste করো

---

### Step 5 — WhatsApp Setup (CallMeBot — Free)

1. তোমার WhatsApp থেকে এই number-এ message করো: **+34 644 65 21 69**
2. Message: `I allow callmebot to send me messages`
3. কিছুক্ষণ পর তুমি পাবে: `API Activated for your phone. Your APIKEY is XXXXXX`
4. Agent-এ **WhatsApp Number** (তোমার নিজের number, +880...) ও **CallMeBot API Key** দাও

---

### Step 6 — Config Save করো

সব field পূরণ করে **💾 Save Config** ক্লিক করো। Config টা session-এ save থাকবে।

---

## 🚀 ব্যবহার করো

1. Collection, Product Type, Trend Focus সিলেক্ট করো
2. **▶ GENERATE** ক্লিক করো
3. Gemini AI ৪টা output generate করবে:
   - 📈 Market Trend + Design Idea
   - 🎨 Leonardo AI Prompt (সরাসরি Leonardo তে paste করো)
   - 🛍 Product Title + Description (Shopify তে paste করো)
   - 📌 Pinterest Copy (Pinterest তে paste করো)
4. **📊 Save to Google Sheets** — সব data sheet এ যাবে
5. **✈ Send to Telegram** — summary Telegram এ যাবে
6. **💬 Send to WhatsApp** — summary WhatsApp এ যাবে

---

## ⏰ Daily Reminder

1. Time সেট করো (যেমন 09:00)
2. Message লেখো
3. **+ Set Reminder** ক্লিক করো
4. প্রতিদিন ওই সময়ে Telegram + WhatsApp এ reminder আসবে

> ⚠ Page খোলা থাকতে হবে। চাইলে একটা tab pinned রাখো।

---

## 📁 Files

| File | কাজ |
|------|-----|
| `index.html` | পুরো AI Agent UI + logic |
| `apps-script.gs` | Google Sheets writer |
| `README.md` | এই guide |

---

## 🎌 Collections

| Collection | Anime |
|-----------|-------|
| Hidden Leaf Collection | Naruto |
| Tiny Sorcerer Series | Jujutsu Kaisen |
| Breath of Life Collection | Demon Slayer |
| Pirate Generation Capsule | One Piece |
| Judgment Day Series | Death Note |

---

*NinjaNursery™ AI Agent — Built with Gemini AI*
