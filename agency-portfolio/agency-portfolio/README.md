# A&G Web Solutions — Portfolio Website

A premium, fully responsive static portfolio website for a Nigerian web design agency.

## Folder Structure

```
agency-portfolio/
├── index.html          ← Homepage
├── about.html          ← About page
├── services.html       ← Services + pricing
├── portfolio.html      ← Portfolio with filter
├── contact.html        ← Contact form + WhatsApp
│
├── projects/
│   ├── restaurant.html   ← Lagos Spice Kitchen case study
│   ├── real-estate.html  ← PrimeNest Realty case study
│   ├── school.html       ← Bright Future Academy case study
│   └── automobile.html   ← Velocity Motors case study
│
├── css/
│   ├── style.css         ← All core styles & components
│   ├── animations.css    ← Scroll-reveal & keyframes
│   └── responsive.css    ← Breakpoints (1024px, 768px, 480px)
│
├── js/
│   ├── navbar.js         ← Sticky nav, hamburger, active links
│   ├── animations.js     ← IntersectionObserver scroll reveals
│   ├── portfolio-filter.js ← Category filter on portfolio page
│   └── main.js           ← FAQ accordion, contact form, WhatsApp
│
└── assets/
    └── images/           ← Add your real images here
```

## Quick Customization

### 1. Update your WhatsApp number
Search for `2348000000000` across all files and replace with `2348061158652`.

### 2. Update contact details
In all HTML files, replace:
- `hello@agwebsolutions.com.ng` → `thequantumdeveloper1@gmail.com`
- `+234 800 000 0000` → `0806 115 8652`
- `Ilorin, Kwara State, Nigeria` → your location

### 3. Update pricing (services.html)
Find the `.pricing-grid` section and update the ₦ amounts.

### 4. Add real images
Drop images into `assets/images/` and reference them in the HTML like:
```html
<img src="assets/images/your-photo.jpg" alt="Description"/>
```

### 5. Update agency name
If you're customizing for a different client, find-replace `A&G Web Solutions` across all files.

## Deployment

This is a pure static site — no build step needed.

**Options:**
- Upload the entire folder to any web host via FTP/cPanel
- Deploy to Netlify: drag the folder to netlify.com/drop
- Deploy to GitHub Pages: push to a repo and enable Pages

**Before going live:**
- [ ] Replace all placeholder WhatsApp numbers
- [ ] Replace all placeholder contact details
- [ ] Add real project screenshots/images
- [ ] Update meta descriptions in each HTML file
- [ ] Update the copyright year if needed

## Tech Stack

- HTML5 (semantic)
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (no dependencies)
- Google Fonts (Syne + DM Sans)

## Browser Support

Chrome, Firefox, Safari, Edge — all modern browsers. IE not supported.

---
Built by A&G Web Solutions · Ilorin, Nigeria
