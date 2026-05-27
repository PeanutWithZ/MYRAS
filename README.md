# MYRAS — Malaysia Robotics, AI & Automation Association

Official website for the Malaysia Robotics, AI & Automation Association (MYRAS), built as a static single-page website with dynamic HTML partials.

## Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript (ES6+)**
- **Bootstrap 5.3.2** — responsive layout and components (via CDN)
- **Google Fonts** — Inter (body), Poppins (headings)
- **FormSubmit.co** — serverless contact form backend
- No build tools, no npm, no framework — runs as plain static files

## Project Structure

```
MYRAS/
├── index.html              # Main entry point
├── css/
│   ├── variables.css       # Brand color tokens
│   ├── main.css            # Global styles
│   └── responsive.css      # Breakpoint overrides
├── js/
│   ├── partials.js         # Dynamic partial loader
│   ├── main.js             # Navbar scroll effect
│   ├── form.js             # Contact form handler
│   └── observer.js         # Navigation highlighting
├── partials/               # HTML section components
│   ├── announcement.html
│   ├── navbar.html
│   ├── hero.html
│   ├── about.html
│   ├── affiliations.html
│   ├── leadership.html
│   ├── services.html
│   ├── events.html
│   ├── membership.html
│   ├── gallery.html
│   ├── contact.html
│   └── footer.html
├── assets/
│   ├── images/             # Hero images and logos
│   ├── icons/              # Partner/affiliation logos
│   ├── gallery/            # Event and activity photos
│   ├── team/               # Leadership team photos
│   └── events/             # Event-specific media
└── etc/                    # PDFs, newsletters, and archived images
```

## Sections

| Partial | Description |
|---|---|
| `announcement.html` | Top notification bar |
| `navbar.html` | Sticky responsive navigation |
| `hero.html` | Carousel banner with YouTube video embed, stats, and CTA buttons |
| `about.html` | Organization overview and WiFT (Women in Future Technologies) program |
| `affiliations.html` | Global partner and affiliate logos |
| `leadership.html` | Team member cards |
| `services.html` | Programs: NRex, RoTDA, STEM RAI, and more |
| `events.html` | Upcoming and past event listings |
| `membership.html` | Six membership tier plans with benefits |
| `gallery.html` | Photo gallery of activities and partnerships |
| `contact.html` | Contact form, details, and map |
| `footer.html` | Site links, social media, copyright |

## Running Locally

This is a pure static site. Open it with any local server to avoid CORS issues with the partial loader:

**Using VS Code Live Server:**
Right-click `index.html` → "Open with Live Server"

**Using Python:**
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

> Opening `index.html` directly via `file://` will block the fetch-based partial loader in most browsers.

## Deployment

Deploy the entire project folder to any static web host (Netlify, Vercel, GitHub Pages, shared hosting, etc.). No build step is required.

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| Navy Blue | `#1a2547` | Primary |
| Red | `#cc2228` | Accents, CTAs |
| Gold | `#e8a820` | Highlights |
| Gray | `#8a9099` | Secondary text |

## Contact Form

The contact form is powered by [FormSubmit.co](https://formsubmit.co). To change the recipient email, update the form `action` URL in `partials/contact.html`.
