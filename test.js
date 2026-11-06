// Run: node test.js
const assert = require("assert");
const c = require("./calculator.js");
let r = c.bouw({ type: "website", paginas: "2-5", extras: [], onderhoud: "geen" });
assert.deepStrictEqual([r.pakket, r.min, r.max], ["Starter", 1499, 1499]);
r = c.bouw({ type: "website", paginas: "2-5", extras: ["meertalig"], onderhoud: "hosting" });
assert.deepStrictEqual([r.min, r.max, r.eersteJaarMin, r.eersteJaarMax], [1499, 3499, 1607, 3607]);
r = c.bouw({ type: "website", paginas: "6-15", extras: [], onderhoud: "geen" });
assert.strictEqual(r.min, 3499);
r = c.bouw({ type: "website", paginas: "1", extras: [] });
assert.deepStrictEqual(r.zzp, { per24: 40, per12: 60 });
r = c.bouw({ type: "shopify", assortiment: "klein", onderhoud: "shopify-beheer" });
assert.strictEqual(r.eersteJaarMin, 4883); // klopt met het voorbeeld op de site: 2.495 + 12 x 199
r = c.bouw({ type: "woocommerce", assortiment: "vast" });
assert.strictEqual(r.min, 3995);
r = c.bouw({ type: "shopify", assortiment: "groot" });
assert.deepStrictEqual([r.min, r.max], [6995, null]);
r = c.bouw({ type: "software", software: "systeem" });
assert.strictEqual(r.min, 12999);
assert.strictEqual(c.euro(1499), "€1.499");
console.log("Alle tests geslaagd");
