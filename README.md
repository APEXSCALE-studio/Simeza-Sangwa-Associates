# Simeza-Sangwa-Associate
# Simeza, Sangwa & Associates

Official website for **Simeza, Sangwa & Associates** — one of Zambia's leading full-service law firms specialising in both contentious and non-contentious business law, headquartered in Lusaka.

Built with pure HTML, CSS, and JavaScript. No frameworks. No build tools. No dependencies. Upload anywhere and it works.

---

## 🌐 Live Preview

> Deploy and paste your live URL here.

---

## 📁 Project Structure

```
simeza-sangwa/
│
├── index.html            # All page structure and content
│
├── css/
│   └── style.css         # All styling, layout, animations, responsive design
│
├── js/
│   └── main.js           # Navigation, WhatsApp, call modal, countdown timer
│
└── images/
    ├── logo.png
    ├── tommy-lungu.jpg         → Mwelwa Simeza (Senior Partner)
    ├── david-mwansa.jpg        → Chanda Sangwa (Senior Partner)
    ├── emmanuel-phiri.jpg      → Kalumba Nkonde (Principal Associate)
    ├── grace-mutale.jpg        → Natasha Mbewe (Senior Associate)
    ├── patricia-banda.jpg      → Bwalya Mutati (Senior Associate)
    ├── chisomo-tembo.jpg       → Lombe Chileshe (Associate)
    ├── naledi-zulu.jpg         → Mutinta Hamusonde (Associate)
    ├── legal-consultation.jpg
    ├── scales-gavel.jpg
    ├── courtroom.jpg
    ├── family-law.jpg
    ├── medical-negligence.jpg
    ├── corporate-law.jpg
    └── document-signing.jpg
```

---

## ✨ Features

- **WhatsApp-first contact** — every button and CTA opens a pre-filled WhatsApp message directly to the firm
- **8 Practice Areas** with individual WhatsApp enquiry buttons per service
- **Meet the Team** — 7 attorney profiles with photos, titles, specialities, and direct WhatsApp links
- **Why Us section** — side-by-side comparison vs other firms with 6 detailed reason cards
- **Urgency trigger** — live countdown timer with free consultation slot counter
- **Call modal** — works in all browsers including sandboxed WebViews (spck editor compatible)
- **Google Maps** — exact office pin at Vitumbiko, Stand 4713, Corner United Nations & Ngumbo Road, Lusaka
- **Fully responsive** — mobile, tablet, and desktop optimised
- **Smooth scroll navigation** — JavaScript-powered, works in all environments
- **Scroll animations** — elements animate in as the user scrolls
- **Active nav highlighting** — current section highlighted as you scroll
- **Zero dependencies** — no npm, no frameworks, no build step required

---

## 📋 Practice Areas

| # | Service |
|---|---|
| 01 | Advisory Services |
| 02 | Company Secretarial |
| 03 | Corporate Advisory Services |
| 04 | Corporate Finance |
| 05 | Energy, Mining & Natural Resources |
| 06 | Legal Services |
| 07 | Property & Conveyance |
| 08 | Receivership & Insolvency |

---

## 👨‍⚖️ Legal Team

| Name | Title | Speciality |
|---|---|---|
| Mwelwa Simeza | Senior Partner | Corporate Advisory & Finance |
| Chanda Sangwa | Senior Partner | Commercial Law & Transactions |
| Kalumba Nkonde | Principal Associate | Court Litigation & Dispute Resolution |
| Natasha Mbewe | Senior Associate | Property & Conveyance |
| Bwalya Mutati | Senior Associate | Energy, Mining & Natural Resources |
| Lombe Chileshe | Associate | Company Secretarial & Compliance |
| Mutinta Hamusonde | Associate | Receivership & Insolvency |

---

## 🚀 Deployment

### GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder `/`
4. Site will be live at `https://yourusername.github.io/repo-name`

### Netlify *(Recommended — fastest)*
1. Go to [netlify.com](https://netlify.com)
2. Click **Add new site → Deploy manually**
3. Drag and drop the project folder
4. Live in under 30 seconds

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import the GitHub repo
3. No configuration needed — deploys automatically on every push

### cPanel / Traditional Hosting
1. Upload all files into `public_html`
2. Keep the folder structure exactly as shown above
3. Access via your domain immediately

---

## ✏️ How to Update Content

### Change phone number
Search and replace `+260211227484` and `260211227484` in both `index.html` and `main.js`.

### Change WhatsApp number
Search for `wa.me/260211227484` in `main.js` and replace with the new number. No `+` sign in the URL.

### Update office address
Search for `Vitumbiko` in `index.html` — appears in both the Location and Contact sections.

### Add or remove a practice area
Find the `practice-grid` div in `index.html`. Each service card follows this pattern:

```html
<div class="practice-card anim-el" onclick="waEnquire('Service Name')">
  <img src="images/your-image.jpg" alt="Service Name" class="practice-card-img">
  <div class="practice-num">01</div>
  <div class="practice-title">Service Name</div>
  <div class="practice-desc">Description of the service.</div>
  <button class="practice-wa-btn">💬 Enquire on WhatsApp</button>
</div>
```

Also update the dropdown in the WhatsApp message builder form to match.

### Update a lawyer profile
Find the **Meet the Team** section in `index.html`. Each card follows this pattern:

```html
<div class="team-name">Full Name</div>
<div class="team-title">Job Title</div>
<div class="team-spec">Speciality</div>
<p class="team-bio">Biography here.</p>
```

### Swap a team photo
Replace the image file in the `images/` folder keeping the same filename, or update the `src` in the relevant team card in `index.html`.

### Update the countdown timer deadline
In `main.js`, find the `updateTimer` function. The deadline is automatically set to the end of each Friday. To change it, modify the `deadline` variable.

---

## 📞 Contact Details

| | |
|---|---|
| **Phone** | +260 211 227 484 |
| **WhatsApp** | +260 211 227 484 |
| **Office** | Vitumbiko, Stand 4713, Corner United Nations & Ngumbo Road, Lusaka 10101, Zambia |
| **Hours** | Mon–Fri 08:00–17:30 · Sat 09:00–13:00 |

---

## 🎨 Design System

| Element | Value |
|---|---|
| **Primary Accent** | Navy Blue `#1B4F8A` |
| **Accent Hover** | Steel Blue `#2E6DB4` |
| **Background** | Deep Dark `#07080F` |
| **Card Background** | `#131525` |
| **Text** | Off-White `#E8E4DC` |
| **Muted Text** | `#9E9A90` |
| **Heading Font** | Libre Baskerville (serif) |
| **Body Font** | Lato (sans-serif) |
| **Accent Font** | Crimson Pro (serif) |

---

## 🛠 Built With

- HTML5
- CSS3 (custom properties, grid, flexbox, clip-path, animations)
- Vanilla JavaScript (ES5 compatible)
- Google Fonts (Libre Baskerville, Lato, Crimson Pro)
- Google Maps Embed API

---

## 📄 License

This website was built exclusively for **Simeza, Sangwa & Associates**. All rights reserved. Not for redistribution or reuse without written permission from the firm.

---

*Built by [TOMMY / APEXSCALE-STUDIO] — Zambian Web Developer*
*For web development enquiries: [+260775690659]*
