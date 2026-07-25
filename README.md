# Harvey Lab website

Static site for the Harvey Lab (Avian Disease Ecology, University of Rhode Island).
No build step, no framework, no dependencies — plain HTML, one CSS file, one JS file.
Open `index.html` in a browser and it works.

---

## Deploying to Netlify

**Option A — drag and drop (fastest).** Go to <https://app.netlify.com/drop> and drag this
whole folder in. Done. To point `jharvey.netlify.app` at it, change the site name in
Netlify → Site settings → Domain management.

**Option B — connect GitHub (recommended long term).**

1. Push this folder to a repo (e.g. replace the contents of `JAHarvey/research-group`).
2. In Netlify: Add new site → Import an existing project → pick the repo.
3. Build command: leave empty. Publish directory: `.` (already set in `netlify.toml`).
4. Every push to `main` redeploys automatically.

The contact form uses **Netlify Forms** and starts working the moment the site is on
Netlify — submissions appear under Forms in the Netlify dashboard. Turn on email
notifications there so you actually see them.

### Pointing aviandiseaselab.com at it

The site is already configured for `https://www.aviandiseaselab.com` (canonical tags,
sitemap, robots.txt, link previews).

1. Netlify → your site → **Domain management** → **Add a domain** → `aviandiseaselab.com`.
2. Netlify will offer to handle DNS. Easiest path: switch the nameservers at your
   registrar to the four Netlify nameservers it shows you. Alternatively keep your
   registrar's DNS and add a `CNAME` for `www` → `<your-site>.netlify.app` plus an
   `ALIAS`/`ANAME` (or Netlify's load balancer A record) for the apex.
3. Set `www.aviandiseaselab.com` as the **primary domain** so the apex redirects to it —
   that's what the canonical tags expect. If you'd rather run the bare
   `aviandiseaselab.com`, find-and-replace `https://www.aviandiseaselab.com` with
   `https://aviandiseaselab.com` across the HTML files, `sitemap.xml`, and `robots.txt`.
4. Netlify provisions a free Let's Encrypt certificate automatically. Turn on
   **Force HTTPS** once it's issued.
5. Keep `jharvey.netlify.app` alive as a redirect so old links and your CV keep working.

DNS changes usually resolve within an hour, occasionally up to 24.

---

## Adding your own content

### Photos (the biggest single upgrade)

The site is built to be image-forward but ships with gradient placeholders so nothing
looks broken. Drop in real photos and it transforms.

| What | Where to put it | Suggested size |
|---|---|---|
| Homepage hero | `assets/img/hero.jpg` | 2400 × 1400 px, landscape |
| Research theme images | `assets/img/research-*.jpg` | 1200 × 750 px |
| Team headshots | `assets/img/team/firstname-lastname.jpg` | 800 × 800 px, square |

For the hero, just adding the file is enough — `assets/css/site.css` already points at
`assets/img/hero.jpg`. Something with a bird and some breathing room on the left works
best, since the headline sits over the lower-left.

**Team photos are automatic.** Each person's card already points at a filename via
`data-photo`. Drop a square photo at that exact path and it appears on next page load —
no HTML editing at all. Until then the card shows their initials.

| Person | Save the photo as |
|---|---|
| Johanna Harvey | `assets/img/team/harvey.jpg` ✅ already added |
| Wenling (Abbey) Yang | `assets/img/team/abbey-yang.jpg` ✅ already added |
| Niel Bauer | `assets/img/team/niel-bauer.jpg` ✅ already added |
| Kathryn DeSantis | `assets/img/team/kathryn-desantis.jpg` |
| Miranda Lin | `assets/img/team/miranda-lin.jpg` ✅ already added |
| Thaina Nunes | `assets/img/team/thaina-nunes.jpg` ✅ already added |

The photos in your Notion directory can be downloaded from Notion directly (open the
person's page, click the image, download) and dropped in with these names.

For research theme images, find the element and swap the inline style. Example, in
`index.html`:

```html
<!-- before -->
<div class="theme__img" style="background-image:linear-gradient(150deg,#143a61,#2b6ea3)">

<!-- after -->
<div class="theme__img" style="background-image:url('assets/img/research-influenza.jpg')">
```

Team photos work the same way in `team.html`. Until a photo is added, the placeholder
shows the person's initials from the `data-initials` attribute.

### Your CV

`assets/files/Harvey_CV.pdf` is already in place and linked from the Team page (inline
link plus a download button), the Contact page, and the footer of every page. To update
it, just replace that file with a new one of the same name — no code changes.

### Email addresses — read this before adding one

No email address appears in plain form anywhere in the HTML. Addresses are written as
`name_at_uri.edu` and `site.js` assembles a working `mailto:` link when the page loads,
so scrapers reading the raw HTML find nothing usable while visitors still get a normal
clickable link.

**Never write a plain `mailto:` link.** Use this pattern instead:

```html
<a class="email" data-u="firstname.lastname" data-d="uri.edu">firstname.lastname_at_uri.edu</a>
```

The link text can also just be the word "Email" — the mailto still works either way.
Add `class="email btn btn--light"` if you want it styled as a button.

### Publications

Everything lives in **`assets/js/publications.js`**. Copy an existing block, edit it,
done. The page sorts by year and builds the topic filter buttons automatically from
whatever topics you use, so you never touch the HTML.

```js
{
  year: 2027,
  title: "Paper title here",
  authors: "Harvey, J.A., Coauthor, B.C.",   // "Harvey, J.A." is bolded automatically
  journal: "Journal Name",
  volume: "12: 345-360",                     // optional
  doi: "10.1000/example",                    // optional, no https://doi.org/ prefix
  note: "In review",                         // optional small tag
  topics: ["Avian influenza"]                // these become filter buttons
}
```

Several older papers have `doi: ""` because the DOI wasn't verified — fill those in when
convenient and the DOI links appear automatically.

### Team members

Open `team.html`. There's a commented-out `<article class="person">` template in the
graduate students section — copy it, fill it in, and delete the dashed `slot`
placeholders as real people replace them.

### News

Open `news.html` and copy an `<article class="news-item">` block to the top of the list.
The two most recent items are also mirrored on the homepage — update those by hand in
`index.html` when you want the front page to change.

---

## Editing the navigation

The header and footer are hard-coded on each page (this keeps the site fast and
searchable with no build step). If you add or rename a page, find-and-replace the nav
block across all nine HTML files. Nine files, one find-and-replace — it takes a minute.

---

## Design system

Colors are sampled from the lab logo and defined once at the top of
`assets/css/site.css`:

| Variable | Hex | Where it shows up |
|---|---|---|
| `--charcoal` | `#423d45` | Footer, dark sections, logo background |
| `--cream` | `#fbeccd` | Warm section backgrounds, stat numbers |
| `--blue` | `#2b6ea3` | Eyebrow labels, links, accents |
| `--blue-deep` | `#143a61` | Buttons, headings on dark, hero gradient |
| `--blue-pale` | `#b9cace` | Subtle accents on dark backgrounds |

Change any of these in one place and the whole site follows. Fonts are Fraunces
(headings) and Inter (body), loaded from Google Fonts.

---

## Files

```
index.html          Homepage
research.html       Four research themes + methods
team.html           PI, grad students, undergrads, alumni
publications.html   Filterable publication list
news.html           Lab news, newest first
outreach.html       Public engagement, talks, community science
press.html          Full popular-press coverage list
join.html           Recruiting + lab culture
contact.html        Contact info + Netlify form

assets/css/site.css         All styling
assets/js/site.js           Nav, scroll effects, publication rendering
assets/js/publications.js   Publication data — edit this one
assets/img/                 Logo + your photos
assets/files/               CV and other downloads

netlify.toml        Deploy config + security headers
robots.txt          Search engine directives
sitemap.xml         Update the URLs if you use a custom domain
```

---

## Things worth doing next

- Add real photos (hero, research, headshots) — biggest visual payoff
- Add `assets/files/Harvey_CV.pdf`
- Fill in missing DOIs in `assets/js/publications.js`
- Replace the dashed placeholder blocks on `team.html` as people join
- Add a Bluesky link in the footer if you want it alongside Google Scholar
- Update `sitemap.xml` and the `og:image` paths if you move to a custom domain
