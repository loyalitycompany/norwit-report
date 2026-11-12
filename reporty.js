const reports = [
  {
    id: 'august', number: '08', month: 'August', year: '2026',
    eyebrow: 'FULL FUNNEL REPORT',
    title: 'Od pozornosti<br>k <em>dopytu.</em>',
    intro: 'Existujúci report prepája regionálne testovanie, remarketing a konverznú komunikáciu do jednej merateľnej zákazníckej cesty.',
    kpis: [
      ['Celková investícia', '522,11 €', 'Meta full funnel'],
      ['Impresie', '375 482', 'naprieč lievikom'],
      ['Kliknutia na odkaz', '1 049', 'prechody smerom na web'],
      ['BOF výsledok', '1 lead', 'prvé overenie nákupného signálu']
    ],
    metaTitle: 'Tri fázy. Jedna cesta zákazníka.',
    metaIntro: 'TOF vytvoril pozornosť, MOF priviedol publikum na web a BOF priniesol prvý lead.',
    metaMetrics: [
      ['TOF investícia', '368,72 €', 'regionálne kampane'],
      ['TOF impresie', '313 528', 'v troch regiónoch'],
      ['TOF interakcie', '1 034', 'pozornosť a engagement'],
      ['MOF landing page views', '624', 'pri cene 0,15 €'],
      ['BOF návštevy', '71', 'produktové publikum'],
      ['Video do 95 %', '393', 'dokončené prehratia']
    ],
    regionIntro: 'Porovnanie regiónov podľa existujúceho Full Funnel reportu.',
    regions: [
      {name:'Východ', value:'391', label:'interakcií', rows:[['Víťazná téma','Thwaites'],['Impresie','124 694'],['Dosah','37 229']]},
      {name:'Stred', value:'328', label:'interakcií', rows:[['Víťazná téma','Kubota'],['Rola','vyvážený výkon'],['Fáza','TOF']]},
      {name:'Západ', value:'315', label:'interakcií', rows:[['Víťazná téma','Kubota'],['Rola','produktový záujem'],['Fáza','TOF']]}
    ],
    highlight: {label:'NAJSILNEJŠÍ SPOLOČNÝ POZNATOK', title:'Video získalo 83 % TOF interakcií.', copy:'Výsledok vznikol pri 48 % TOF rozpočtu a pri priemernej cene 0,21 € za interakciu.', value:'860', valueLabel:'video interakcií'},
    googleTitle: 'Google zachytil aktívny záujem.',
    googleIntro: 'Google časť existujúceho reportu pracuje s dodanými dátami za júl 2026 a dopĺňa augustový Full Funnel pohľad.',
    googleTotals: [['Investícia','1 868 €','Google Ads'],['Kliknutia','10 718','aktívny záujem'],['Konverzie','122,4','vykázané akcie']],
    campaigns: [
      {type:'SEARCH',name:'Všeobecná',stats:[['Konverzie','29,91'],['CTR','8,29 %'],['CR','6,24 %']]},
      {type:'SEARCH',name:'KUBOTA',stats:[['Konverzie','20,5'],['CR','4,82 %'],['Rola','značka']]},
      {type:'LOKÁLNA',name:'Performance Max',stats:[['Konverzie','30'],['CR','8,57 %'],['Rola','lokálny dopyt']]},
      {type:'VIDEO',name:'Rozšírenie zásahu',stats:[['Kliknutia','4 711'],['Rola','pozornosť'],['Kanál','video']]}
    ],
    takeaways: [
      ['01','Video vytvára nové publikum','Najväčšiu časť TOF interakcií získal videoobsah pri menšej časti rozpočtu.'],
      ['02','Remarketing privádza návštevu','624 zobrazení cieľovej stránky potvrdilo funkčný prechod z predchádzajúceho záujmu na web.'],
      ['03','BOF priniesol prvý signál','Lead potvrdil, že správanie na produktových stránkach sa dá použiť ako signál nákupného záujmu.']
    ],
    note: 'Fázy používajú rozdielne remarketingové okná, preto nejde o jednu uzavretú kohortu. Google časť existujúceho reportu vychádza z dát za júl 2026.'
  },
  {
    id: 'september', number: '09', month: 'September', year: '2026',
    eyebrow: 'MESAČNÝ PERFORMANCE REPORT',
    title: 'Tri regióny ukázali<br><em>záujem o stroje.</em>',
    intro: 'September priniesol stabilnú regionálnu odozvu, efektívnu produktovú kampaň Kubota a konkrétne dopyty z Meta aj Google Ads.',
    kpis: [
      ['Meta investícia', '320,73 €', 'všetky Meta kampane'],
      ['Meta impresie', '147 988', 'zobrazenia reklám'],
      ['Google kliknutia', '6 288', 'aktívny záujem'],
      ['Vykázané akcie', '129,49', 'Google Ads']
    ],
    metaTitle: 'Regionálny obsah aj konkrétne kampane fungovali.',
    metaIntro: 'Meta zasiahla 69 673 ľudí, získala 575 kliknutí na odkaz, 207 návštev cieľovej stránky a dva formuláre.',
    metaMetrics: [
      ['Investícia', '320,73 €', 'celkový Meta spend'],
      ['Dosah', '69 673', 'ľudí'],
      ['Impresie', '147 988', 'zobrazení'],
      ['Link clicks', '575', 'kliknutí na odkaz'],
      ['Landing page views', '207', 'návštev stránky'],
      ['Formuláre', '2', 'konkrétne dopyty']
    ],
    regionIntro: 'Západ získal najviac interakcií, Kubota vo všetkých regiónoch častejšie privádzala publikum na web.',
    regions: [
      {name:'Východ', value:'214', label:'interakcií', rows:[['Kliknutia','35'],['LPV','15'],['Kubota / Thwaites','107 / 107']]},
      {name:'Stred', value:'199', label:'interakcií', rows:[['Kliknutia','33'],['LPV','13'],['Kubota / Thwaites','140 / 59']]},
      {name:'Západ', value:'229', label:'interakcií', rows:[['Kliknutia','36'],['LPV','10'],['Kubota / Thwaites','140 / 89']]}
    ],
    highlight: {label:'KUBOTA AKCIA', title:'Produktový obsah získal reakciu za priaznivú cenu.', copy:'Samostatná kampaň priniesla 17 kliknutí a 13 návštev cieľovej stránky.', value:'224', valueLabel:'interakcií · 0,12 €'},
    googleTitle: 'Vyhľadávanie zachytilo aktívny záujem.',
    googleIntro: 'Google Ads získal 6 288 kliknutí a 129,49 vykázanej konverzie pri investícii 1 530,28 €.',
    googleTotals: [['Investícia','1 530,28 €','Google Ads'],['Kliknutia','6 288','návštevy z kampaní'],['Akcie','129,49','vykázané konverzie']],
    campaigns: [
      {type:'SEARCH',name:'Všeobecná',stats:[['Kliknutia','662'],['Akcie','44'],['Investícia','384,87 €']]},
      {type:'SEARCH',name:'„Bager“',stats:[['Kliknutia','792'],['Akcie','29,99'],['Investícia','268,27 €']]},
      {type:'SEARCH',name:'KUBOTA',stats:[['Kliknutia','532'],['Akcie','35,5'],['Investícia','243,71 €']]},
      {type:'PERFORMANCE MAX',name:'Lokálna',stats:[['Kliknutia','742'],['Akcie','10'],['Investícia','223,21 €']]},
      {type:'DEMAND GEN',name:'Video',stats:[['Kliknutia','3 152'],['Akcie','7'],['Investícia','211,19 €']]},
      {type:'SEARCH',name:'PRAMAC',stats:[['Kliknutia','152'],['Akcie','2'],['Investícia','88,14 €']]},
      {type:'SEARCH',name:'RAVO + SCARAB',stats:[['Kliknutia','168'],['Akcie','1'],['Investícia','30,65 €']]}
    ],
    takeaways: [
      ['01','Kubota privádza publikum na web','Vo všetkých troch regiónoch získala väčšiu časť odkazových kliknutí.'],
      ['02','Západ vedie v interakciách','S 229 interakciami bol najsilnejším regionálnym výsledkom septembra.'],
      ['03','Search pokrýva viac úrovní dopytu','Všeobecné, produktové aj značkové kampane spoločne zachytávali aktívne vyhľadávanie.']
    ],
    note: 'Vykázané konverzie zahŕňajú rôzne typy meraných akcií. Ich obchodnú kvalitu treba potvrdiť podľa prijatých dopytov.'
  },
  {
    id: 'oktober', number: '10', month: 'Október', year: '2026',
    eyebrow: 'MESAČNÝ PERFORMANCE REPORT',
    title: 'Väčší objem.<br><em>Viac výsledkov.</em>',
    intro: 'Október rozšíril produktovú komunikáciu, zvýšil návštevnosť cieľových stránok a priniesol viac formulárov aj kontaktných akcií.',
    kpis: [
      ['Celková investícia', '3 377 €', 'Meta + Google Ads'],
      ['Meta formuláre', '6', 'trojnásobok septembra'],
      ['Google kliknutia', '10 012', '+59 % medzimesačne'],
      ['Meta impresie', '195 847', '+32 % medzimesačne']
    ],
    metaTitle: 'Viac návštev a viac formulárov.',
    metaIntro: 'Meta zvýšila návštevy cieľových stránok o 45 % a počet vykázaných formulárov z dvoch na šesť.',
    metaMetrics: [
      ['Investícia', '534,15 €', 'celkový Meta spend'],
      ['Dosah', '70 231', 'ľudí'],
      ['Impresie', '195 847', '+47 859'],
      ['Link clicks', '614', '+39 medzimesačne'],
      ['Landing page views', '301', '+45 %'],
      ['Formuláre', '6', '3× viac než v septembri']
    ],
    regionIntro: 'Regionálne interakcie vzrástli spolu na 1 531. Thwaites budoval pozornosť a Kubota častejšie privádzala návštevy webu.',
    regions: [
      {name:'Východ', value:'664', label:'interakcií', rows:[['Kliknutia','49'],['LPV','21'],['Kubota / Thwaites','285 / 379']]},
      {name:'Stred', value:'413', label:'interakcií', rows:[['Kliknutia','54'],['LPV','15'],['Kubota / Thwaites','186 / 227']]},
      {name:'Západ', value:'454', label:'interakcií', rows:[['Kliknutia','47'],['LPV','18'],['Kubota / Thwaites','220 / 234']]}
    ],
    highlight: {label:'KUBOTA AKCIA', title:'Trojnásobný objem reakcií pri stabilnej cene.', copy:'Kampaň priniesla 50 kliknutí a 33 návštev cieľovej stránky pri cene približne 0,11 € za interakciu.', value:'718', valueLabel:'interakcií v októbri'},
    googleTitle: 'Viac zachyteného záujmu naprieč portfóliom.',
    googleIntro: 'Google Ads priniesol 10 012 kliknutí a 143 rôznych meraných akcií pri investícii 2 842,96 €.',
    googleTotals: [['Investícia','2 842,96 €','Google Ads'],['Kliknutia','10 012','+59 % medzimesačne'],['Akcie','143','vykázané výsledky']],
    campaigns: [
      {type:'SEARCH',name:'Všeobecná',stats:[['Kliknutia','948'],['Akcie','48'],['Formuláre','14']]},
      {type:'SEARCH',name:'KUBOTA',stats:[['Kliknutia','480'],['Akcie','37'],['Formuláre','10']]},
      {type:'SEARCH',name:'„Bager“ + [bager]',stats:[['Kliknutia','935'],['Akcie','23'],['Formuláre','12']]},
      {type:'DEMAND GEN',name:'Video a kontakt',stats:[['Kliknutia','6 051'],['Akcie','16'],['Rast','+92 %']]},
      {type:'PERFORMANCE MAX',name:'Lokálny záujem',stats:[['Kliknutia','1 178'],['Trasa','12'],['Hovor','1']]},
      {type:'SEARCH',name:'PRAMAC',stats:[['Kliknutia','252'],['Akcie','6'],['Formuláre','4']]}
    ],
    takeaways: [
      ['01','Regionálny obsah výrazne rástol','Interakcie troch regiónov vzrástli oproti septembru o 139 %.'],
      ['02','Meta priniesla viac dopytov','Šesť vykázaných formulárov predstavuje trojnásobok septembrového výsledku.'],
      ['03','Google rozšíril objem návštevnosti','Viac než 10-tisíc kliknutí vytvorilo väčší objem kontaktov a dát pre ďalšiu optimalizáciu.']
    ],
    note: 'Formuláre, hovory, kliknutia na kontakt a žiadosti o trasu sú rozdielne typy akcií a pri obchodnom vyhodnotení sa posudzujú samostatne.'
  }
];

const menu = document.querySelector('#month-menu');
const view = document.querySelector('#report-view');

function cards(items) {
  return items.map((item, index) => `<article class="metric-card ${index >= items.length - 2 ? 'accent' : ''}"><span>${item[0]}</span><strong>${item[1]}</strong><p>${item[2]}</p></article>`).join('');
}

function renderReport(report, focus = false) {
  view.setAttribute('aria-labelledby', `month-${report.id}`);
  view.innerHTML = `
    <section class="report-hero">
      <div class="report-heading">
        <div><span class="month-badge"><i></i>${report.eyebrow}</span><h2>${report.month}<br><em>${report.year}</em></h2></div>
        <p>${report.intro}</p>
      </div>
      <div class="headline-kpis">${report.kpis.map(k => `<article><span>${k[0]}</span><strong>${k[1]}</strong><p>${k[2]}</p></article>`).join('')}</div>
    </section>

    <section class="report-section" id="meta">
      <div class="section-title"><div><span class="kicker">META ADS · ${report.month.toUpperCase()}</span><h3>${report.metaTitle}</h3></div><p>${report.metaIntro}</p></div>
      <div class="metrics-grid">${cards(report.metaMetrics)}</div>
      <div class="subheading"><h4>Výsledky podľa regiónov</h4><p>${report.regionIntro}</p></div>
      <div class="regions-grid">${report.regions.map(r => `<article class="region-card"><span>${r.name}</span><strong>${r.value}</strong><p>${r.label}</p><dl>${r.rows.map(row => `<div><dt>${row[0]}</dt><dd>${row[1]}</dd></div>`).join('')}</dl></article>`).join('')}</div>
      <div class="highlight-panel"><div><span class="kicker">${report.highlight.label}</span><h4>${report.highlight.title}</h4><p>${report.highlight.copy}</p></div><div class="highlight-number"><strong>${report.highlight.value}</strong><span>${report.highlight.valueLabel}</span></div></div>
    </section>

    <section class="report-section google-section" id="google">
      <div class="section-title"><div><span class="kicker">GOOGLE ADS · ${report.month.toUpperCase()}</span><h3>${report.googleTitle}</h3></div><p>${report.googleIntro}</p></div>
      <div class="google-totals">${report.googleTotals.map(g => `<article><span>${g[0]}</span><strong>${g[1]}</strong><p>${g[2]}</p></article>`).join('')}</div>
      <div class="campaign-list">${report.campaigns.map((c,i) => `<article class="campaign-card"><span class="campaign-no">${String(i+1).padStart(2,'0')}</span><div><small>${c.type}</small><h4>${c.name}</h4></div>${c.stats.map(s => `<div class="campaign-value"><span>${s[0]}</span><strong>${s[1]}</strong></div>`).join('')}</article>`).join('')}</div>
    </section>

    <section class="report-section takeaways" id="zaver">
      <div class="section-title"><div><span class="kicker">ZÁVER MESIACA</span><h3>Čo si z výsledkov odnášame.</h3></div><p>Najdôležitejšie signály pre ďalšie nastavenie kampaní a komunikácie.</p></div>
      <div class="takeaway-grid">${report.takeaways.map(t => `<article><span>${t[0]}</span><h4>${t[1]}</h4><p>${t[2]}</p></article>`).join('')}</div>
      <p class="report-note">${report.note}</p>
      ${nextReport(report)}
    </section>`;

  document.querySelectorAll('.month-button').forEach(button => button.setAttribute('aria-selected', String(button.dataset.month === report.id)));
  const activeButton = menu.querySelector(`[data-month="${report.id}"]`);
  activeButton?.scrollIntoView({block:'nearest', inline:'center'});
  history.replaceState(null, '', `#${report.id}`);
  if (focus) view.focus({preventScroll:true});
}

function nextReport(report) {
  const index = reports.findIndex(item => item.id === report.id);
  const next = reports[index + 1];
  if (!next) return `<div class="next-report"><p><strong>Október je zatiaľ najnovší report.</strong><br>Ďalší mesiac sa zobrazí v rovnakom menu.</p></div>`;
  return `<div class="next-report"><p>Ďalší report: <strong>${next.month} ${next.year}</strong></p><button type="button" data-next="${next.id}">Otvoriť ${next.month.toLowerCase()} →</button></div>`;
}

function selectReport(id, focus = false) {
  const report = reports.find(item => item.id === id) || reports[0];
  renderReport(report, focus);
  const nextButton = view.querySelector('[data-next]');
  if (nextButton) nextButton.addEventListener('click', () => selectReport(nextButton.dataset.next, true));
}

menu.innerHTML = reports.map((report, index) => `<button class="month-button" id="month-${report.id}" role="tab" type="button" data-month="${report.id}" aria-selected="${index === 0}"><span class="month-number">${report.number}</span><span class="month-name">${report.month}</span><i class="month-status" aria-hidden="true"></i></button>`).join('');

menu.addEventListener('click', event => {
  const button = event.target.closest('[data-month]');
  if (button) selectReport(button.dataset.month, true);
});

menu.addEventListener('keydown', event => {
  const buttons = [...menu.querySelectorAll('[data-month]')];
  const current = buttons.indexOf(document.activeElement);
  if (current < 0 || !['ArrowDown','ArrowUp','ArrowRight','ArrowLeft','Home','End'].includes(event.key)) return;
  event.preventDefault();
  let next = current;
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (current + 1) % buttons.length;
  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (current - 1 + buttons.length) % buttons.length;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = buttons.length - 1;
  buttons[next].focus();
  selectReport(buttons[next].dataset.month);
});

const initial = location.hash.replace('#','');
selectReport(reports.some(report => report.id === initial) ? initial : 'august');
