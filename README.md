# NORWIT campaign report

Statický responzívny report pripravený na nasadenie cez Vercel alebo GitHub Pages na doméne `norwit.loyality.sk`.

## Obsah balíka

- `index.html` - hlavná stránka reportu
- `styles.css` - kompletný responzívny dizajn
- `report.js` - interaktivita reportu
- obrázky a logá použité na stránke
- `vercel.json` - konfigurácia pre Vercel
- `CNAME` - vlastná doména pre GitHub Pages
- `.github/workflows/deploy-pages.yml` - automatické nasadenie na GitHub Pages
- `404.html` - bezpečný návrat na report pri neznámej ceste

## Dôležité

Pre doménu `norwit.loyality.sk` vyberte iba jedného produkčného poskytovateľa: Vercel alebo GitHub Pages. Rovnaký DNS záznam nemôže smerovať na oboch naraz.

Podrobný postup je v súbore `DEPLOYMENT.md`.
