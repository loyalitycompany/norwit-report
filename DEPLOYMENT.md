# Nasadenie na norwit.loyality.sk

## Možnosť A - Vercel

1. Vytvorte nový GitHub repozitár a nahrajte doň celý obsah tohto priečinka.
2. Vo Verceli zvoľte **Add New > Project** a importujte repozitár.
3. Framework ponechajte ako **Other**. Build Command aj Output Directory nechajte prázdne.
4. Projekt nasaďte.
5. Vo **Settings > Domains** pridajte `norwit.loyality.sk`.
6. V DNS správe domény `loyality.sk` vytvorte záznam:
   - typ: `CNAME`
   - názov/host: `norwit`
   - cieľ: `cname.vercel-dns.com`
7. Ak Vercel zobrazí iný cieľ, použite presne hodnotu uvedenú vo Verceli. Po overení DNS sa HTTPS aktivuje automaticky.

Každý ďalší push do vetvy `main` vytvorí nové nasadenie.

## Možnosť B - GitHub Pages

1. Vytvorte nový GitHub repozitár a nahrajte doň celý obsah tohto priečinka.
2. V repozitári otvorte **Settings > Pages**.
3. V časti **Build and deployment** vyberte zdroj **GitHub Actions**.
4. Workflow v `.github/workflows/deploy-pages.yml` automaticky nasadí stránku po pushi do `main`.
5. V DNS správe domény vytvorte záznam:
   - typ: `CNAME`
   - názov/host: `norwit`
   - cieľ: `<github-pouzivatel>.github.io`
6. V **Settings > Pages > Custom domain** potvrďte `norwit.loyality.sk` a po overení aktivujte **Enforce HTTPS**.

Súbor `CNAME` už obsahuje správnu doménu.

## Aktualizácie

Pri ďalšej úprave nahraďte zmenené HTML, CSS, JavaScript alebo obrázky a odošlite nový commit do vetvy `main`. Vercel aj GitHub Pages vykonajú nasadenie automaticky.
