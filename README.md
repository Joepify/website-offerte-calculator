# Website offerte calculator (indicatie)

Een kleine rekentool in gewoon HTML en JavaScript, zonder afhankelijkheden, die een prijsindicatie geeft voor een website, webshop of maatwerksoftware. De bedragen zijn de **publieke prijzen van Joepify**, exclusief btw. Het is een **indicatie, geen offerte**.

Open `index.html` in je browser. Er is geen server nodig, er worden geen cookies gezet en er verlaat niets je browser.

## Voor wie

- Ondernemers die vooraf een idee van het budget willen.
- Webbouwers die de rekenlogica willen hergebruiken of aanpassen voor hun eigen prijzen. Alle bedragen staan op een plek in `calculator.js` (object `PRIJZEN`).

## Wat zit erin

| Bestand | Doel |
|---|---|
| `index.html` | Het formulier en de weergave |
| `calculator.js` | De rekenlogica en de prijzen (werkt in de browser en in Node) |
| `test.js` | Tests, uitvoeren met `node test.js` |

## Welke prijzen worden gebruikt

Gecontroleerd op 4 november 2026 op de kostenpagina van Joepify en de [website kosten calculator](https://www.joepify.nl/website-kosten-berekenen?utm_source=github&utm_medium=readme&utm_campaign=website-offerte-calculator). Alle bedragen zijn exclusief btw.

| Onderdeel | Prijs |
|---|---|
| Starter (tot 5 pagina's) | €1.499 eenmalig |
| Growth (onbeperkt pagina's, uitgebreide SEO, 30 dagen nazorg) | €3.499 eenmalig |
| ZZP Starter (eenpagina-site, hosting en onderhoud inbegrepen) | €40 per maand over 24 maanden, of €60 per maand over 12 maanden |
| Webshop Start (Shopify of WooCommerce) | vanaf €2.495 |
| Webshop Groei | €3.995 |
| Webshop Maatwerk | vanaf €6.995 |
| Web applicatie | vanaf €4.999 |
| Bedrijfssysteem | vanaf €12.999 |
| Hosting en zakelijke e-mail | vanaf €9 per maand |
| WordPress onderhoud | €35, €69 of €129 per maand |
| Shopify beheer | vanaf €199 per maand |

Kies je iets waarvoor geen vast bedrag is gepubliceerd (bijvoorbeeld een koppeling met je boekhouding, meertaligheid of een overstap van een andere webshop), dan toont de tool "op offerte". Er wordt bewust geen bedrag verzonnen.

## Hoe wordt gerekend

1. **Website:** 1 pagina of 2 tot 5 pagina's geeft Starter, 6 pagina's of meer geeft Growth, en "uitgebreide SEO" ook Growth. Extra's zonder vast bedrag maken de bovengrens onzeker; dan toont de tool een bereik van Starter tot Growth.
2. **Webshop:** klein assortiment is Start, een vast assortiment met varianten is Groei, een groot assortiment, B2B of overstap is Maatwerk vanaf het genoemde bedrag.
3. **Software:** web app, bedrijfssysteem of op offerte.
4. **Eerste jaar:** bouwprijs plus 12 maanden hosting, onderhoud of beheer. Voorbeeld: Webshop Start met Shopify beheer: €2.495 + 12 × €199 = €4.883, plus het Shopify-abonnement, apps en transactiekosten (rechtstreeks aan Shopify). Dit komt overeen met het voorbeeld op de site.

## Aanpassen voor je eigen prijzen

Pas het object `PRIJZEN` in `calculator.js` aan, de teksten in `index.html`, en draai `node test.js`. Verwijder dan wel de verwijzingen naar Joepify en de datum van controle.

## Beperkingen

- Het is een indicatie. De uiteindelijke prijs hangt af van jouw situatie.
- Prijzen veranderen. Controleer ze op de bronpagina's voor je ze gebruikt.
- Domeinnaam en btw zitten er niet in.

## Laat het mij doen

Ik maak van deze indicatie een vaste prijs voor jouw situatie. Vaste prijs: vanaf €1.499 eenmalig, of €40 per maand met €0 vooraf (excl. btw). [Alle prijzen op een rij](https://www.joepify.nl/website-laten-maken-kosten?utm_source=github&utm_medium=readme&utm_campaign=website-offerte-calculator) of [stuur een WhatsApp-bericht](https://wa.me/31687195043?text=Hoi%20Ayoub%2C%20ik%20kom%20via%20GitHub%20%28website-offerte-calculator%29%20en%20wil%20hulp%20met%20website%20offerte.).

## Over Joepify

[Joepify](https://www.joepify.nl?utm_source=github&utm_medium=readme&utm_campaign=website-offerte-calculator) is een webbureau aan de Metaalhof 27 in Rotterdam. Ayoub Assaidi bouwt websites en webshops met een vaste prijs vooraf. Wil je een vaste prijs voor jouw situatie, lees dan de pagina met alle pakketten: [wat kost een website laten maken](https://www.joepify.nl/website-laten-maken-kosten?utm_source=github&utm_medium=readme&utm_campaign=website-offerte-calculator).

## English

A dependency-free HTML/JS calculator that shows a price indication for a website, web shop or custom software, using Joepify's public prices (excl. VAT, checked 4 Nov 2026). It is an indication, not a quote. Logic is in `calculator.js`, tests run with `node test.js`.

## Licentie

Code: MIT. Tekst: CC BY 4.0. Zie [LICENSE](LICENSE).
