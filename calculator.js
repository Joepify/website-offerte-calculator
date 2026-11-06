/* Rekenlogica van de website-offerte-calculator.
 * Alle bedragen zijn de publieke prijzen van Joepify, exclusief btw.
 * Bron: https://www.joepify.nl/website-laten-maken-kosten en /website-kosten-berekenen (gecontroleerd 4 november 2026).
 * Dit is een indicatie, geen offerte. MIT-licentie. */
(function (root) {
  "use strict";

  var PRIJZEN = {
    starter: 1499,
    growth: 3499,
    webshopStart: 2495,
    webshopGroei: 3995,
    webshopMaatwerk: 6995,
    webApp: 4999,
    bedrijfssysteem: 12999,
    zzpStarterPerMaand24: 40,
    zzpStarterPerMaand12: 60,
    hostingPerMaand: 9,
    wpOnderhoudPerMaand: [35, 69, 129],
    shopifyBeheerPerMaand: 199
  };

  // Extra's waar Joepify geen vast bedrag voor publiceert: "op offerte".
  var OP_OFFERTE = ["meertalig", "boekhouding", "afspraken", "blog", "teksten-laten-maken", "overstap"];

  function bouw(inv) {
    var type = inv.type;
    var extras = inv.extras || [];
    var opOfferte = extras.filter(function (e) { return OP_OFFERTE.indexOf(e) !== -1; });
    var uitgebreideSeo = extras.indexOf("uitgebreide-seo") !== -1;
    var min, max, pakket, notitie = [];

    if (type === "website") {
      var p = inv.paginas;
      if (p === "1" || p === "2-5") {
        pakket = "Starter";
        min = PRIJZEN.starter;
        max = (uitgebreideSeo || opOfferte.length) ? PRIJZEN.growth : PRIJZEN.starter;
        if (uitgebreideSeo) { pakket = "Growth"; min = PRIJZEN.growth; max = PRIJZEN.growth; }
      } else {
        pakket = "Growth";
        min = max = PRIJZEN.growth;
      }
    } else if (type === "shopify" || type === "woocommerce") {
      var a = inv.assortiment;
      if (a === "klein") { pakket = "Webshop Start"; min = max = PRIJZEN.webshopStart; }
      else if (a === "vast") { pakket = "Webshop Groei"; min = max = PRIJZEN.webshopGroei; }
      else { pakket = "Webshop Maatwerk"; min = PRIJZEN.webshopMaatwerk; max = null; notitie.push("Grote shops, B2B en een overstap krijgen een vaste prijs op offerte."); }
      if (inv.overstap) { opOfferte.push("overstap"); }
    } else if (type === "software") {
      var s = inv.software;
      if (s === "app") { pakket = "Web applicatie"; min = PRIJZEN.webApp; max = null; }
      else if (s === "systeem") { pakket = "Bedrijfssysteem"; min = PRIJZEN.bedrijfssysteem; max = null; }
      else { pakket = "Maatwerk"; min = null; max = null; notitie.push("Een SaaS-platform of enterprise-omgeving krijgt een vaste prijs op offerte."); }
    } else {
      throw new Error("Onbekend type: " + type);
    }

    // Maandkosten bij Joepify (optioneel)
    var maand = 0, maandTekst = "Geen (eigen hosting of beheer)";
    if (inv.onderhoud === "hosting") { maand = PRIJZEN.hostingPerMaand; maandTekst = "Hosting en e-mail vanaf €9 per maand"; }
    else if (inv.onderhoud === "wp-basis") { maand = PRIJZEN.hostingPerMaand + PRIJZEN.wpOnderhoudPerMaand[0]; maandTekst = "Hosting plus WordPress onderhoud vanaf €9 + €35 per maand"; }
    else if (inv.onderhoud === "shopify-beheer") { maand = PRIJZEN.shopifyBeheerPerMaand; maandTekst = "Shopify beheer vanaf €199 per maand"; }

    var eersteJaarMin = min === null ? null : min + 12 * maand;
    var eersteJaarMax = max === null ? null : max + 12 * maand;

    // ZZP Starter: alleen voor een eenpagina-site
    var zzp = (type === "website" && inv.paginas === "1")
      ? { per24: PRIJZEN.zzpStarterPerMaand24, per12: PRIJZEN.zzpStarterPerMaand12 }
      : null;

    return {
      pakket: pakket,
      min: min,
      max: max,
      opOfferte: opOfferte,
      maandPerMaand: maand,
      maandTekst: maandTekst,
      eersteJaarMin: eersteJaarMin,
      eersteJaarMax: eersteJaarMax,
      zzp: zzp,
      notities: notitie,
      btw: "Alle bedragen zijn exclusief btw en je domeinnaam. Dit is een indicatie, geen offerte."
    };
  }

  function euro(n) {
    return "€" + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  var api = { PRIJZEN: PRIJZEN, bouw: bouw, euro: euro };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; }
  else { root.Calculator = api; }
})(typeof window !== "undefined" ? window : this);
