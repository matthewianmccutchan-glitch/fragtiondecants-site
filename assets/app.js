
/* ===== Business settings — edit these ===== */
const SHOP = {
  name: "FragtionDecants",
  phone: "817-888-4754",  // customers text their order here
  email: "",      // e.g. "orders@example.com"
  payment: "",    // e.g. "Cash App $Fragtion · Venmo @Fragtion"
  zelle: { id: "817-888-4754", name: "Matthew McCutchan" },
  shipFee: 6,          // flat USPS Ground Advantage shipping
  freeShipAt: 75,      // free shipping at this subtotal or more
  shipDays: "1–2 business days",
  trioDiscount: 0.10   // 10% off when the cart has 3+ single 2ml decants
};
/* Product badges: "New", "Low stock", "Best seller", "Sold out" or "Coming soon"
   ("Sold out" and "Coming soon" disable ordering — delete a line when that bottle arrives) */
const BADGES = {
  // "Aventus": "Best seller",
  "Dior Homme Intense": "Coming soon",
  "MYSLF": "Coming soon",
};
/* "Just in" tag: the day each bottle arrived. The tag shows for JUST_IN_DAYS days, then drops off by itself. */
const JUST_IN_DAYS = 14;
const ARRIVED = {
  "Bleu de Chanel L’Exclusif":"2026-11-13","Absolute Aphrodisiac":"2026-11-13","Reflection Man":"2026-11-13","Oud Satin Mood":"2026-11-13",
  "Layton Exclusif":"2026-11-13","Alexandria II":"2026-11-13","1 Million Black":"2026-11-13","Angels’ Share":"2026-11-13","Green Irish Tweed":"2026-11-13",
  "Side Effect":"2026-11-13","Guidance":"2026-11-13","Blue Talisman":"2026-11-13","Eros EDP":"2026-11-13","Liquid Brun":"2026-11-13","Vulcan Feu":"2026-11-13",
  "Amber Empire":"2026-11-13","La Nuit de L’Homme":"2026-11-11","Island":"2026-11-14","Il Padrino":"2026-11-17","Cool Water":"2026-11-17"
};
/* Shop by occasion — edit which fragrances belong to each */
const OCCASIONS = {
  "Date Night": ["Sauvage Elixir","The One EDP","The One Parfum","La Nuit de L’Homme","Dior Homme Intense","Layton","Layton Exclusif","Althaïr","Naxos","Grand Soir","Baccarat Rouge 540 EDP","Angels’ Share","Side Effect","Absolute Aphrodisiac","Oud Satin Mood","Jazz Club","1 Million Black","Le Beau Le Parfum (EDP)","Eros EDP","Delina","I Will","Bleu de Chanel L’Exclusif","Paradigme Le Parfum","Guidance","Alexandria II","Il Padrino"],
  "Office": ["Prada L’Homme","Sedley","Greenley","Imagination","L’Immensité","Green Irish Tweed","Aventus","Explorer","Coach for Men EDT","L’Eau d’Issey Pour Homme","Reflection Man","MYSLF","Vibrato","Blue Talisman","Ralph’s Club New York","Pacific Chill","Cool Water"],
  "Gym & Casual": ["Dylan Blue","Eros Energy","Pacific Chill","Afternoon Swim","Sedley","L’Eau d’Issey Pour Homme","Coach for Men EDT","Vibrato","Explorer","Greenley","Erba Pura","MYSLF","Imagination","Blue Talisman","Cool Water"],
  "Wedding & Formal": ["Reflection Man","Dior Homme Intense","Aventus","Green Irish Tweed","Baccarat Rouge 540 EDP","Grand Soir","Delina","Oud Satin Mood","Alexandria II","Guidance","Outlands","Bleu de Chanel L’Exclusif","Imagination","L’Immensité","Layton","Prada L’Homme"]
};
/* Ready-made bundles: three 2ml decants at a set price */
const BUNDLES = [
  { n:"Fresh Starter Trio", hk:"Three crowd-pleasing fresh scents to start your rotation.", items:["Dylan Blue","Eros Energy","Sedley"], p:15 },
  { n:"Date Night Trio", hk:"Warm, sweet and magnetic: three proven night-out scents.", items:["Sauvage Elixir","Layton","Naxos"], p:24 },
  { n:"Niche Icons Trio", hk:"The legends everyone talks about, side by side.", items:["Aventus","Baccarat Rouge 540 EDP","Althaïr"], p:31 },
  { n:"Louis Vuitton Trio", hk:"Three LV signatures for a fraction of one bottle.", items:["Imagination","Pacific Chill","Afternoon Swim"], p:40 },
  { n:"Cozy Night Trio", hk:"Cognac, rum and tobacco: three fireside favorites for winter nights.", items:["Angels’ Share","Side Effect","Jazz Club"], p:26 },
  { n:"For Her Trio", hk:"Three crowd-pleasing scents she’ll love, gift-ready.", items:["Delina","Baccarat Rouge 540 EDP","Erba Pura"], p:28 }
];
/* Promo banner + free gift. Set on:false to turn it off */
const PROMO = { on:true, text:"Black Friday: free 2ml with every order of $40+", min:40, giftMax:5 };  // giftMax = highest 2ml price a customer can pick as the free gift
/* Real customer reviews only. Example: { q:"Smells exactly like the bottle!", who:"Jordan", scent:"Aventus" } */
const REVIEWS = [];
/* Homepage rows — edit these lists any time */
const NEW_ARRIVALS = ["Il Padrino","Cool Water","Island","Bleu de Chanel L’Exclusif","Absolute Aphrodisiac","Reflection Man","Fakhar Black","Oud Satin Mood","Angels’ Share","Outlands","Layton Exclusif","Alexandria II","Side Effect","Blue Talisman","Delina","Guidance","Green Irish Tweed","Erba Pura","Jazz Club","Dior Homme Intense","La Nuit de L’Homme","Prada L’Homme","I Will","1 Million Black","MYSLF","Eros EDP","Liquid Brun","Vulcan Feu","Amber Empire"];
const BEST_SELLERS = ["Aventus","Baccarat Rouge 540 EDP","Sauvage Elixir","Layton","Althaïr","Grand Soir","Paradigme Le Parfum","Imagination","Naxos"];
const FOR_HER = ["For Her Trio","Delina","Baccarat Rouge 540 EDP","Erba Pura","Grand Soir","Oud Satin Mood","Angels’ Share","Guidance","Blue Talisman","Pacific Chill","Afternoon Swim"];
const WINTER = ["Cozy Night Trio","Date Night Trio","Angels’ Share","Side Effect","Jazz Club","Oud Satin Mood","Outlands","Layton","Layton Exclusif","Althaïr","Naxos","Grand Soir","Sauvage Elixir","The One EDP","Gentleman Society Ambrée","Liquid Brun","Amber Empire","La Nuit de L’Homme","Alexandria II","Guidance","Dior Homme Intense","Bleu de Chanel L’Exclusif","Absolute Aphrodisiac","Il Padrino"];
const SLOGAN = "Try the bottle before you buy the bottle";
const SITE_URL = "https://fragtiondecants.netlify.app/";
/* US retail (list) price of a full bottle [dollars, ml], from brand sites and authorized retailers, Nov 2026. Edit any number here. */
const FULL = {"Il Padrino":[325,100],"Cool Water":[103,125],"Island":[40,100],"Bleu de Chanel L’Exclusif":[275,100],"Absolute Aphrodisiac":[345,90],"Reflection Man":[395,100],"Coach for Men EDT":[116,100],"Aventus":[510,100],"Green Irish Tweed":[490,100],"Sauvage Elixir":[265,100],"Dior Homme Intense":[173,100],"The One EDP":[170,100],"The One Parfum":[195,100],"Gentleman Society Ambrée":[168,100],"L’Eau d’Issey Pour Homme":[130,125],"Le Beau Le Parfum (EDP)":[169,125],"Afternoon Swim":[360,100],"Imagination":[360,100],"L’Immensité":[360,100],"Pacific Chill":[360,100],"Baccarat Rouge 540 EDP":[360,70],"Grand Soir":[275,70],"Oud Satin Mood":[340,70],"Explorer":[136,100],"Explorer Extreme":[146,100],"Althaïr":[400,125],"Greenley":[385,125],"Layton":[400,125],"Layton Exclusif":[460,125],"Sedley":[385,125],"Delina":[410,75],"Paradigme Le Parfum":[210,100],"Prada L’Homme":[136,100],"Ralph’s Club New York":[130,100],"Vibrato":[326,100],"Dylan Blue":[129,100],"Eros Energy":[149,100],"Eros EDP":[149,100],"Naxos":[230,100],"Alexandria II":[508,100],"Erba Pura":[230,100],"Angels’ Share":[415,100],"Side Effect":[420,90],"Blue Talisman":[355,100],"Guidance":[395,100],"Outlands":[475,100],"Jazz Club":[170,100],"I Will":[170,100],"1 Million Black":[140,100],"MYSLF":[170,100],"La Nuit de L’Homme":[130,100],"Liquid Brun":[66,100],"Vulcan Feu":[61,100],"Amber Empire":[61,100],"Fakhar Black":[45,100]};
/* Clone houses: kept in their own tab, out of every other tab, the homepage and the quiz */
const CLONE_HOUSES = ["French Avenue","Lattafa","Khadlaj"];
const INSPIRED = {
  "Liquid Brun":  { by:"Parfums de Marly Althaïr", go:"Althaïr" },
  "Vulcan Feu":   { by:"Stéphane Humbert Lucas 777 God of Fire" },
  "Amber Empire": { by:"Clive Christian Blonde Amber" },
  "Fakhar Black": { by:"Yves Saint Laurent Y Eau de Parfum" },
  "Island":       { by:"Jean Paul Gaultier Le Beau Le Parfum", go:"Le Beau Le Parfum (EDP)" }
};
/* ========================================== */

const CATALOG = [{"n":"Coach for Men EDT","h":"Coach","d":"Juicy green nashi pear, bergamot and kumquat open bright and energetic, then cardamom, coriander and geranium add a warm, spicy twist. Vetiver, soft suede and ambergris finish it clean and woody. An easy, versatile everyday scent with laid-back New York cool, and a great value.","sz":[{"s":"2ml","p":4.0},{"s":"5ml","p":8.0},{"s":"10ml","p":16.0},{"s":"30ml","p":35.0}],"acc":["woody","aromatic","fruity","fresh spicy","citrus"],"no":{"t":"Green nashi pear, Bergamot, Kumquat","h":"Cardamom, Coriander, Geranium","b":"Vetiver, Suede, Ambergris"},"hk":"Fresh, fruity and effortlessly cool: crisp pear over smooth suede.","min":4.0,"c":"EDT"},{"n":"Aventus","h":"Creed","d":"Juicy pineapple, black currant and apple meet a smoky birch heart, drying down to oakmoss, ambroxan and musk. Fruity, woody and confident all at once, this is the scent that shaped a whole era of men's fragrance. Try it before you commit to a full bottle.","sz":[{"s":"2ml","p":14.0},{"s":"5ml","p":30.0},{"s":"10ml","p":51.0},{"s":"30ml","p":150.0}],"acc":["fruity","sweet","woody","leather","smoky"],"no":{"t":"Pineapple, Bergamot, Black currant, Apple","h":"Birch, Patchouli, Jasmine","b":"Musk, Oakmoss, Ambroxan, Cedarwood"},"hk":"The legend: smoky pineapple over birch and musk.","min":14.0,"c":"EDP"},{"n":"The One EDP","h":"Dolce & Gabbana","d":"Grapefruit, basil and coriander lead into ginger, cardamom and orange blossom before a smooth base of tobacco, amber and cedar. A classic date-night and cold-weather signature that smells expensive without trying too hard.","sz":[{"s":"2ml","p":5.0},{"s":"5ml","p":10.0},{"s":"10ml","p":20.0},{"s":"30ml","p":35.0}],"acc":["warm spicy","amber","tobacco","citrus","woody"],"no":{"t":"Grapefruit, Coriander, Basil","h":"Ginger, Cardamom, Orange blossom","b":"Amber, Tobacco, Cedarwood"},"hk":"Warm and sophisticated: tobacco and amber with a citrus spark.","min":5.0,"c":"EDP"},{"n":"The One Parfum","h":"Dolce & Gabbana","d":"Tarocco orange and black pepper give a bright, spicy start, then sage leads into a rich base of labdanum and tobacco. Denser and more ambery than the EDP, made for evenings and colder months.","sz":[{"s":"2ml","p":6.0},{"s":"5ml","p":11.0},{"s":"10ml","p":20.0},{"s":"30ml","p":53.0}],"acc":["warm spicy","amber","tobacco","citrus","aromatic"],"no":{"t":"Tarocco orange, Black pepper","h":"Sage","b":"Labdanum, Tobacco"},"hk":"The One, turned up: deeper, darker, smokier.","min":6.0,"c":"Parfum"},{"n":"Sauvage Elixir","h":"Dior","d":"Grapefruit hits first, then cinnamon, cardamom and nutmeg wrap around a heart of lavender. The drydown of licorice, sandalwood, amber and patchouli is dense and magnetic. Made for nights out, and a little goes a long way.","sz":[{"s":"2ml","p":10.0},{"s":"5ml","p":20.0},{"s":"10ml","p":39.0},{"s":"30ml","p":108.0}],"acc":["warm spicy","fresh spicy","woody","aromatic","lavender"],"no":{"t":"Grapefruit, Cinnamon, Cardamom, Nutmeg","h":"Lavender","b":"Licorice, Sandalwood, Amber, Patchouli, Vetiver"},"hk":"Sauvage at its richest: spice, lavender and licorice.","min":10.0,"c":"Elixir"},{"n":"Gentleman Society Ambrée","h":"Givenchy","d":"Clary sage, juniper and nutmeg open crisp and spiced before narcissus, iris and a blend of vetivers create a smooth, refined heart. Peru balsam, tobacco and vanilla finish it warm and ambery. Gentlemanly and a little smoky, it's ideal for fall and winter.","sz":[{"s":"2ml","p":5.0},{"s":"5ml","p":10.0},{"s":"10ml","p":20.0},{"s":"30ml","p":39.0}],"acc":["amber","woody","smoky","leather","balsamic"],"no":{"t":"Clary sage, Juniper, Nutmeg","h":"Iris, Narcissus, Vetiver, Sandalwood","b":"Peru balsam, Tobacco, Vanilla, Opoponax"},"hk":"Smoky vetiver and tobacco wrapped in warm amber.","min":5.0,"c":"EDP"},{"n":"Le Beau Le Parfum (EDP)","h":"Jean Paul Gaultier","d":"Pineapple, ginger and a touch of iris open bright, then creamy coconut and woods take over before a sweet base of tonka, sandalwood and ambergris. A sunny, vacation-in-a-bottle scent that turns heads in warm weather.","sz":[{"s":"2ml","p":5.0},{"s":"5ml","p":10.0},{"s":"10ml","p":20.0},{"s":"30ml","p":53.0}],"acc":["coconut","sweet","woody","tropical","fruity"],"no":{"t":"Pineapple, Ginger, Iris, Cypress","h":"Coconut, Woody notes","b":"Tonka bean, Sandalwood, Amber, Ambergris"},"hk":"Tropical, creamy and addictive: coconut and pineapple over tonka.","min":5.0,"c":"EDP"},{"n":"Imagination","h":"Louis Vuitton","d":"Citron, bergamot and orange sparkle over ginger, cinnamon and neroli, resting on black tea, ambroxan, guaiac wood and olibanum. Effortlessly elegant and fresh with a gentle spice, it's the kind of scent that just smells expensive.","sz":[{"s":"2ml","p":16.0},{"s":"5ml","p":36.0},{"s":"10ml","p":60.0},{"s":"30ml","p":180.0}],"acc":["citrus","fresh spicy","aromatic","woody","tea"],"no":{"t":"Citron, Bergamot, Orange","h":"Ginger, Cinnamon, Neroli","b":"Black tea, Ambroxan, Guaiac wood, Olibanum"},"hk":"Luminous citrus and black tea: fresh, clean, unmistakably luxe.","min":16.0,"c":"EDP"},{"n":"L’Immensité","h":"Louis Vuitton","d":"Zesty grapefruit and ginger meet airy water notes, sage, rosemary and geranium, then settle into amber, labdanum and ambroxan. Fresh but with real backbone, it's a sophisticated everyday scent from Louis Vuitton's men's line.","sz":[{"s":"2ml","p":16.0},{"s":"5ml","p":36.0},{"s":"10ml","p":60.0},{"s":"30ml","p":180.0}],"acc":["citrus","fresh spicy","aromatic","marine","amber"],"no":{"t":"Grapefruit, Ginger, Bergamot","h":"Water notes, Sage, Rosemary, Geranium","b":"Amber, Labdanum, Ambroxan"},"hk":"Wide-open freshness: grapefruit and ginger with ambery depth.","min":16.0,"c":"EDP"},{"n":"Pacific Chill","h":"Louis Vuitton","d":"Citron, lemon and orange mix with cooling mint and black currant, softened by apricot, basil, carrot seed and rose, then fig, dates and ambrette. Juicy, green and refreshing, it's a feel-good warm-weather scent for anyone.","sz":[{"s":"2ml","p":16.0},{"s":"5ml","p":36.0},{"s":"10ml","p":60.0},{"s":"30ml","p":180.0}],"acc":["citrus","aromatic","fruity","fresh","green"],"no":{"t":"Citron, Orange, Lemon, Mint, Black currant","h":"Apricot, Basil, Carrot seed, May rose","b":"Fig, Dates, Ambrette"},"hk":"California cool in a bottle: mint, citrus, fig and apricot.","min":16.0,"c":"Cologne"},{"n":"Afternoon Swim","h":"Louis Vuitton","d":"Mandarin, bergamot and orange burst bright and juicy, lifted by a zing of ginger and finished with salty, skin-like ambergris. Simple, joyful and easy to wear on hot days, it's unisex and an instant mood-booster.","sz":[{"s":"2ml","p":16.0},{"s":"5ml","p":36.0},{"s":"10ml","p":60.0},{"s":"30ml","p":180.0}],"acc":["citrus","fresh spicy","aromatic","marine","amber"],"no":{"t":"Mandarin, Bergamot, Orange","h":"Ginger","b":"Ambergris"},"hk":"Pure sunshine: a sparkling citrus splash with ginger.","min":16.0,"c":"Cologne"},{"n":"L’Eau d’Issey Pour Homme","h":"Issey Miyake","d":"Yuzu, lemon and bergamot open crisp and clean, with nutmeg, sage and water lily in the heart and a soft base of vetiver, sandalwood, cedar and musk. A '90s icon that still smells modern, and a great value.","sz":[{"s":"2ml","p":5.0},{"s":"5ml","p":10.0},{"s":"10ml","p":20.0},{"s":"30ml","p":35.0}],"acc":["citrus","aquatic","woody","fresh spicy","aromatic"],"no":{"t":"Yuzu, Lemon, Bergamot, Coriander","h":"Nutmeg, Sage, Water lily","b":"Vetiver, Sandalwood, Cedar, Musk, Tobacco"},"hk":"The original fresh aquatic: yuzu, water lily and clean woods.","min":5.0,"c":"EDT"},{"n":"Baccarat Rouge 540 EDP","h":"Maison Francis Kurkdjian","d":"Saffron and jasmine glow over a heart of amberwood and ambergris, while fir resin and cedar add that signature mineral, almost sugary sparkle. Recognizable from across the room, it's a luxe unisex statement scent.","sz":[{"s":"2ml","p":12.0},{"s":"5ml","p":25.0},{"s":"10ml","p":50.0},{"s":"30ml","p":150.0}],"acc":["amber","woody","warm spicy","floral","sweet"],"no":{"t":"Saffron, Jasmine","h":"Amberwood, Ambergris","b":"Fir resin, Cedar"},"hk":"The famous airy amber: saffron, jasmine and amberwood.","min":12.0,"c":"EDP"},{"n":"Grand Soir","h":"Maison Francis Kurkdjian","d":"Labdanum, benzoin and tonka build a warm, resinous amber, rounded out with smooth vanilla. Plush, glowing and cozy, it's a true evening scent for cold nights and special occasions.","sz":[{"s":"2ml","p":12.0},{"s":"5ml","p":30.0},{"s":"10ml","p":60.0},{"s":"30ml","p":180.0}],"acc":["amber","balsamic","vanilla","warm spicy","sweet"],"no":{"t":"Labdanum, Orange","h":"Lavender, Benzoin","b":"Amber, Vanilla, Tonka bean, Musk, Cedar"},"hk":"Amber at its finest: labdanum, benzoin and vanilla.","min":12.0,"c":"EDP"},{"n":"Explorer","h":"Montblanc","d":"Bergamot, pink pepper and clary sage open fresh, then vetiver and leather give it an earthy core over ambroxan, akigalawood and patchouli. A versatile woody everyday scent with a rugged edge, offering big character at a friendly price.","sz":[{"s":"2ml","p":5.0},{"s":"5ml","p":10.0},{"s":"10ml","p":15.0},{"s":"30ml","p":37.0}],"acc":["woody","aromatic","earthy","fresh spicy","leather"],"no":{"t":"Bergamot, Pink pepper, Clary sage","h":"Vetiver, Leather","b":"Ambroxan, Akigalawood, Patchouli"},"hk":"Adventurous and earthy: bergamot, vetiver and leather.","min":5.0,"c":"EDP"},{"n":"Explorer Extreme","h":"Montblanc","d":"Bergamot, cardamom and clary sage lead into lavender, patchouli and ambery Ambrofix, drying down to warm woods, leather and vetiver. Deeper and more intense than the original, it's built for fall nights.","sz":[{"s":"2ml","p":5.0},{"s":"5ml","p":10.0},{"s":"10ml","p":20.0},{"s":"30ml","p":39.0}],"acc":["woody","amber","leather","patchouli","aromatic"],"no":{"t":"Bergamot, Cardamom, Clary sage","h":"Lavender, Patchouli, Ambrofix","b":"Warm woods, Leather, Vetiver"},"hk":"Explorer, darker: patchouli, leather and warm woods.","min":5.0,"c":"Parfum"},{"n":"Althaïr","h":"Parfums de Marly","d":"Cinnamon, cardamom, orange blossom and bergamot open warm and inviting, before a heart of bourbon vanilla and elemi and a base of praline, musk, ambroxan and guaiac. Sweet without being sugary, it's a cozy, crowd-pleasing niche gourmand.","sz":[{"s":"2ml","p":9.0},{"s":"5ml","p":18.0},{"s":"10ml","p":35.0},{"s":"30ml","p":105.0}],"acc":["vanilla","sweet","warm spicy","amber","nutty"],"no":{"t":"Cinnamon, Cardamom, Orange blossom, Bergamot","h":"Bourbon vanilla, Elemi","b":"Praline, Musk, Ambroxan, Guaiac wood"},"hk":"Spiced vanilla praline: gourmand, warm and irresistible.","min":9.0,"c":"EDP"},{"n":"Greenley","h":"Parfums de Marly","d":"Apple, bergamot, mandarin and cardamom open bright and green, with violet leaf, cashmeran and petitgrain in the heart and cedar, oakmoss and musk underneath. A polished fresh scent for daytime that feels effortlessly classy.","sz":[{"s":"2ml","p":9.0},{"s":"5ml","p":18.0},{"s":"10ml","p":35.0},{"s":"30ml","p":105.0}],"acc":["green","fresh","citrus","fruity","woody"],"no":{"t":"Apple, Bergamot, Mandarin, Cardamom","h":"Violet leaf, Cashmeran, Petitgrain","b":"Cedar, Oakmoss, Musk"},"hk":"Crisp green apple and cashmeran: clean, fresh and refined.","min":9.0,"c":"EDP"},{"n":"Layton","h":"Parfums de Marly","d":"Crisp apple, lavender and bergamot open fresh, then geranium, violet and jasmine lead into a warm base of vanilla, cardamom, sandalwood and patchouli. Sweet, spicy and versatile from day to night, it's one of niche perfumery's most-loved crowd-pleasers.","sz":[{"s":"2ml","p":8.0},{"s":"5ml","p":17.0},{"s":"10ml","p":35.0},{"s":"30ml","p":105.0}],"acc":["vanilla","fruity","aromatic","warm spicy","floral"],"no":{"t":"Apple, Lavender, Bergamot, Mandarin","h":"Geranium, Violet, Jasmine","b":"Vanilla, Cardamom, Sandalwood, Patchouli"},"hk":"Apple, lavender and vanilla: a modern niche classic.","min":8.0,"c":"EDP"},{"n":"Sedley","h":"Parfums de Marly","d":"Spearmint, bergamot, grapefruit and lemon burst out cool and bright, with lavender, geranium and water notes in the heart over a soft woody-musk base. Clean and energizing, it's perfect for summer days and the gym bag.","sz":[{"s":"2ml","p":9.0},{"s":"5ml","p":19.0},{"s":"10ml","p":35.0},{"s":"30ml","p":105.0}],"acc":["fresh","citrus","aromatic","green","mint"],"no":{"t":"Spearmint, Bergamot, Grapefruit, Lemon","h":"Lavender, Geranium, Water notes","b":"Cedar, Sandalwood, Cashmeran, Musk"},"hk":"Icy spearmint and citrus: the ultimate clean, fresh scent.","min":9.0,"c":"EDP"},{"n":"Paradigme Le Parfum","h":"Prada","d":"Bergamot opens into a heart of geranium and leathery vanilla, then Peru balsam, benzoin, guaiac wood and amber build a smooth, resinous base. A sleek, modern evening scent and one of Prada's latest releases.","sz":[{"s":"2ml","p":9.0},{"s":"5ml","p":17.0},{"s":"10ml","p":33.0},{"s":"30ml","p":90.0}],"acc":["amber","woody","vanilla","balsamic","aromatic"],"no":{"t":"Bergamot","h":"Geranium, Vanilla","b":"Peru balsam, Benzoin, Guaiac wood, Amber"},"hk":"Prada's newest ambery woods: geranium, vanilla and balsam.","min":9.0,"c":"Parfum"},{"n":"Ralph’s Club New York","h":"Ralph Lauren","d":"Juicy blackcurrant, mandarin and bergamot open bright, lavender, geranium and sandalwood form a classic fougère heart, and fir balsam, oakmoss and vanilla finish it warm. Sharp, sophisticated and city-ready.","sz":[{"s":"2ml","p":6.0},{"s":"5ml","p":10.0},{"s":"10ml","p":20.0},{"s":"30ml","p":55.0}],"acc":["fruity","aromatic","lavender","woody","vanilla"],"no":{"t":"Blackcurrant, Mandarin, Bergamot","h":"Lavender, Geranium, Sandalwood","b":"Fir balsam, Oakmoss, Vanilla"},"hk":"Blackcurrant and lavender with a smooth vanilla finish.","min":6.0,"c":"EDP"},{"n":"Vibrato","h":"Sospiro","d":"Grapefruit and bergamot open bright alongside jasmine and magnolia, then ginger, herbal and powdery notes lead into musk, cedar, amber, patchouli and orris. Fresh, clean and quietly luxurious, it's a niche citrus that feels polished from first spray to drydown.","sz":[{"s":"2ml","p":9.0},{"s":"5ml","p":17.0},{"s":"10ml","p":32.0},{"s":"30ml","p":89.0}],"acc":["citrus","fresh spicy","powdery","musky","woody"],"no":{"t":"Grapefruit, Bergamot, Jasmine, Magnolia","h":"Ginger, Herbal notes, Powdery notes","b":"Musk, Cedar, Amber, Patchouli, Orris"},"hk":"Sparkling citrus over soft musk and iris.","min":9.0,"c":"EDP"},{"n":"Dylan Blue","h":"Versace","d":"Bergamot, grapefruit and fig leaf open fresh and zesty, with violet leaf, black pepper, patchouli and ambroxan in the heart and incense, musk, tonka and saffron below. A reliable daily go-to and a great place to start.","sz":[{"s":"2ml","p":4.0},{"s":"5ml","p":7.0},{"s":"10ml","p":12.0},{"s":"30ml","p":36.0}],"acc":["citrus","aromatic","fresh spicy","amber","woody"],"no":{"t":"Bergamot, Grapefruit, Fig leaf","h":"Violet leaf, Black pepper, Patchouli, Ambroxan","b":"Incense, Musk, Tonka bean, Saffron"},"hk":"Fresh and sporty: citrus, fig and incense.","min":4.0,"c":"EDT"},{"n":"Eros Energy","h":"Versace","d":"Bergamot, blood orange, lime and grapefruit meet pink pepper, black currant and white amber, grounded by patchouli, musk and oakmoss. Bright, juicy and energizing, it's the sunniest member of the Eros family.","sz":[{"s":"2ml","p":4.0},{"s":"5ml","p":7.0},{"s":"10ml","p":12.0}],"acc":["citrus","fresh","fruity","fresh spicy","woody"],"no":{"t":"Bergamot, Blood orange, Lime, Grapefruit","h":"Pink pepper, Black currant, White amber","b":"Patchouli, Musk, Oakmoss"},"hk":"A blast of citrus with a pink pepper kick.","min":4.0,"c":"EDP"},{"n":"Naxos","h":"Xerjoff","d":"Lavender, bergamot and lemon open aromatic, then golden honey, cinnamon, cashmeran and jasmine melt into tobacco leaf, tonka and vanilla. Warm, sweet and sophisticated, it's a niche tobacco-honey icon for cool evenings.","sz":[{"s":"2ml","p":9.0},{"s":"5ml","p":17.0},{"s":"10ml","p":30.0},{"s":"30ml","p":90.0}],"acc":["honey","tobacco","sweet","warm spicy","lavender"],"no":{"t":"Lavender, Bergamot, Lemon","h":"Honey, Cinnamon, Cashmeran, Jasmine","b":"Tobacco leaf, Tonka bean, Vanilla"},"hk":"Honey, tobacco and lavender: rich, sweet and unforgettable.","min":9.0,"c":"EDP"},{"n":"Layton Exclusif","h":"Parfums de Marly","sz":[{"s":"2ml","p":9.0},{"s":"5ml","p":19.0},{"s":"10ml","p":35.0},{"s":"30ml","p":105.0}],"acc":["woody","sweet","warm spicy","vanilla","oud"],"no":{"t":"Almond, Mandarin, Bergamot","h":"Rose, Geranium, Gardenia","b":"Oud, Guaiac wood, Vanilla, Coffee"},"hk":"Layton’s darker, richer big brother: oud, coffee and vanilla.","d":"Takes everything people love about Layton and turns the lights down. Creamy almond and bright mandarin open over a heart of rose and geranium, then the base goes deep: smoky oud, guaiac wood, roasted coffee and vanilla. Dense, sweet and dangerously smooth, a true cold-weather and late-night statement with huge performance.","min":9.0,"c":"EDP"},{"n":"Oud Satin Mood","h":"Maison Francis Kurkdjian","sz":[{"s":"2ml","p":12.0},{"s":"5ml","p":27.0},{"s":"10ml","p":51.0},{"s":"30ml","p":150.0}],"acc":["oud","rose","vanilla","sweet","balsamic"],"no":{"t":"Violet","h":"Bulgarian rose, Turkish rose","b":"Laotian oud, Vanilla, Benzoin"},"hk":"Velvet rose wrapped around soft, golden oud.","d":"Kurkdjian’s most opulent creation. Powdery violet and two rich roses melt into a plush, satin-smooth oud softened with vanilla and benzoin, so you get the luxury of oud without the harshness. Warm, enveloping and unmistakably expensive, it lingers on skin and clothes for hours. A showstopper for evenings and special occasions.","min":12.0,"c":"EDP"},{"n":"Angels’ Share","h":"Kilian","sz":[{"s":"2ml","p":12.0},{"s":"5ml","p":28.0},{"s":"10ml","p":51.0},{"s":"30ml","p":150.0}],"acc":["boozy","sweet","warm spicy","vanilla","woody"],"no":{"t":"Cognac","h":"Cinnamon, Tonka bean, Oak","b":"Praline, Vanilla, Sandalwood"},"hk":"Warm cognac, cinnamon and praline, like dessert by the fire.","d":"Named for the cognac that evaporates from the barrel as it ages. A rich pour of cognac opens over cinnamon and oak, then sinks into toasted praline, tonka and vanilla. Cozy, boozy and wildly addictive, it’s one of the most complimented winter scents out there. Perfect for holiday nights and date nights alike.","min":12.0,"c":"EDP"},{"n":"Green Irish Tweed","h":"Creed","sz":[{"s":"2ml","p":10.0},{"s":"5ml","p":23.0},{"s":"10ml","p":45.0},{"s":"30ml","p":120.0}],"acc":["green","fresh","aromatic","woody","powdery"],"no":{"t":"Lemon verbena, Iris","h":"Violet leaf","b":"Ambergris, Sandalwood"},"hk":"The original fresh green classic: cut grass and clean woods.","d":"A true icon since 1985 and the blueprint for countless fresh fragrances. Zesty lemon verbena and powdery iris open onto crisp violet leaf that smells like a freshly cut lawn on a cool morning, settling into soft sandalwood and ambergris. Clean, refined and gentlemanly, it’s a polished everyday signature from office to weekend.","min":10.0,"c":"EDP"},{"n":"Side Effect","h":"Initio","sz":[{"s":"2ml","p":10.0},{"s":"5ml","p":24.0},{"s":"10ml","p":39.0},{"s":"30ml","p":110.0}],"acc":["tobacco","boozy","sweet","warm spicy","vanilla"],"no":{"t":"Rum, Cinnamon, Saffron","h":"Tobacco","b":"Sandalwood, Hedione, Vanilla"},"hk":"Dark rum, tobacco and vanilla: smoky, sweet and seductive.","d":"A rich, intoxicating blend built to turn heads. Dark rum, cinnamon and saffron pour over smooth tobacco leaf, then sandalwood and a thick blanket of vanilla make it warm and silky. Boozy, sweet and smoky in perfect balance, with a sensual trail that lasts all night. Made for cold evenings, bars and anywhere you want to be remembered.","min":10.0,"c":"EDP"},{"n":"Alexandria II","h":"Xerjoff","sz":[{"s":"2ml","p":12.0},{"s":"5ml","p":26.0},{"s":"10ml","p":50.0},{"s":"30ml","p":150.0}],"acc":["woody","amber","warm spicy","sweet","oud"],"no":{"t":"Rosewood, Lavender, Apple, Cinnamon","h":"Rose, Lily of the valley, Cedar","b":"Oud, Amber, Sandalwood, Vanilla, Musk"},"hk":"Regal, spiced woods with apple, rose and soft oud.","d":"One of Xerjoff’s crown jewels. Crisp apple, lavender and cinnamon glow over rosewood, then a heart of rose and cedar leads into a luxurious base of oud, amber, sandalwood and vanilla. Rich and smooth rather than heavy, it smells polished, warm and undeniably expensive. A statement scent for fall, winter and formal nights.","min":12.0,"c":"EDP"},{"n":"Dior Homme Intense","h":"Dior","sz":[{"s":"2ml","p":5.0},{"s":"5ml","p":11.0},{"s":"10ml","p":22.0},{"s":"30ml","p":59.0}],"acc":["powdery","iris","woody","lavender","sweet"],"no":{"t":"Lavender","h":"Iris, Ambrette, Pear","b":"Cedar, Vetiver"},"hk":"Velvety iris and soft woods: elegance in a bottle.","d":"Widely considered one of the best designer fragrances ever made. Lavender opens onto a gorgeous heart of buttery, lipstick-soft iris with a touch of pear and ambrette, drying down to smooth cedar and vetiver. Powdery, refined and romantic, it’s the scent of a tailored suit. Ideal for date nights, dinners and cooler weather.","min":5.0,"c":"EDP"},{"n":"Blue Talisman","h":"Ex Nihilo","sz":[{"s":"2ml","p":15.0},{"s":"5ml","p":38.0},{"s":"10ml","p":72.0},{"s":"30ml","p":175.0}],"acc":["fruity","citrus","fresh","musky","woody"],"no":{"t":"Pear, Bergamot, Mandarin","h":"Orange blossom, Ginger","b":"Musk, Ambroxan, Woods"},"hk":"Juicy pear and bright citrus over clean, glowing musk.","d":"A modern niche crowd-pleaser from Paris. Juicy pear and sparkling bergamot burst open, warmed by a touch of ginger and orange blossom, then settle into a radiant, skin-like trail of musk and ambroxan. Fresh but never thin, effortlessly attractive and easy to wear anywhere. A luxury everyday scent that draws compliments.","min":15.0,"c":"Extrait de Parfum"},{"n":"Guidance","h":"Amouage","sz":[{"s":"2ml","p":14.0},{"s":"5ml","p":35.0},{"s":"10ml","p":59.0},{"s":"30ml","p":165.0}],"acc":["sweet","nutty","floral","fruity","woody"],"no":{"t":"Pear, Hazelnut","h":"Rose, Osmanthus, Frankincense","b":"Sandalwood, Vanilla"},"hk":"Creamy hazelnut and pear with a soft glow of incense.","d":"Amouage at its most addictive. Ripe pear and toasted hazelnut open sweet and creamy, then rose, apricot-like osmanthus and a wisp of frankincense add elegance before a smooth sandalwood and vanilla base. Gourmand without being sugary, rich, refined and long-lasting. A sophisticated signature for fall, winter and special nights.","min":14.0,"c":"EDP"},{"n":"Erba Pura","h":"Xerjoff","sz":[{"s":"2ml","p":9.0},{"s":"5ml","p":20.0},{"s":"10ml","p":35.0}],"acc":["fruity","sweet","citrus","musky","vanilla"],"no":{"t":"Sicilian orange, Lemon, Bergamot","h":"Fruits","b":"White musk, Vanilla, Amber"},"hk":"A bright bowl of fruit over sweet vanilla musk.","d":"One of the most famous fruity fragrances in niche perfumery. Sun-drenched Sicilian orange, lemon and bergamot burst into a basket of juicy fruits, then melt into soft white musk, amber and Madagascar vanilla. Loud, joyful and projecting, it fills a room and gets noticed. Fantastic in warm weather and for going out.","min":9.0,"c":"EDP"},{"n":"Jazz Club","h":"Maison Margiela","sz":[{"s":"2ml","p":8.0},{"s":"5ml","p":17.0},{"s":"10ml","p":30.0}],"acc":["tobacco","sweet","boozy","warm spicy","vanilla"],"no":{"t":"Pink pepper, Neroli, Lemon","h":"Rum, Clary sage, Vetiver","b":"Tobacco leaf, Vanilla, Styrax"},"hk":"A smoky lounge in a bottle: rum, tobacco and vanilla.","d":"Inspired by a late night in a Brooklyn jazz bar. Pink pepper and lemon open over a rich heart of rum and clary sage, then settle into warm tobacco leaf, vanilla bean and resinous styrax. Smooth, cozy and laid-back rather than heavy. A go-to for fall and winter evenings and one of the most loved Replica scents.","min":8.0,"c":"EDT"},{"n":"I Will","h":"Giorgio Armani","sz":[{"s":"2ml","p":6.0},{"s":"5ml","p":13.0},{"s":"10ml","p":26.0},{"s":"30ml","p":70.0}],"acc":["vanilla","woody","aromatic","leather","citrus"],"no":{"t":"Bergamot, Cardamom","h":"Lavender, Violet leaf, Sage","b":"Vanilla, Leather, Woody notes, Patchouli"},"hk":"Armani’s newest: bright bergamot over dark vanilla and leather.","d":"Armani’s brand-new flagship for men. Sparkling Calabrian bergamot and cardamom open over aromatic lavender and violet leaf, then it deepens into rich Madagascar vanilla and a smooth woody-leather accord. Fresh up top and warm, magnetic and long-lasting underneath. A versatile day-to-night scent that’s new on the scene.","min":6.0,"c":"EDP"},{"n":"1 Million Black","h":"Paco Rabanne","sz":[{"s":"2ml","p":6.0},{"s":"5ml","p":14.0},{"s":"10ml","p":27.0},{"s":"30ml","p":63.0}],"acc":["fruity","sweet","vanilla","woody","tropical"],"no":{"t":"Pineapple, Blood orange, Cardamom","h":"Vanilla, Coconut, Clary sage","b":"Ebony wood, Patchouli, Tonka bean"},"hk":"The newest 1 Million: roasted pineapple and vanilla gone after dark.","d":"A darker, sweeter, nighttime take on the legendary 1 Million. Roasted pineapple and blood orange open juicy and bright with a hint of cardamom, then an overdose of creamy vanilla and coconut leads into ebony woods, patchouli and tonka. Fruity, gourmand and attention-grabbing. Built for nights out and cooler weather.","min":6.0,"c":"EDP"},{"n":"Liquid Brun","h":"French Avenue","sz":[{"s":"2ml","p":4.0},{"s":"5ml","p":7.0},{"s":"10ml","p":12.0},{"s":"30ml","p":30.0}],"acc":["sweet","warm spicy","vanilla","amber","woody"],"no":{"t":"Cinnamon, Cardamom, Orange blossom, Bergamot","h":"Bourbon vanilla, Elemi","b":"Praline, Ambroxan, Musk, Guaiac wood"},"hk":"Spiced vanilla and praline for a fraction of the niche price.","d":"A warm, rich gourmand that punches far above its price. Cinnamon and cardamom open spicy and inviting, then sink into smooth bourbon vanilla, sweet praline and soft woods. Cozy, sweet and long-lasting with great projection. An easy blind-buy for anyone who loves warm vanilla scents in fall and winter.","min":4.0,"c":"EDP"},{"n":"Eros EDP","h":"Versace","sz":[{"s":"2ml","p":4.0},{"s":"5ml","p":8.0},{"s":"10ml","p":15.0},{"s":"30ml","p":40.0}],"acc":["sweet","fresh","aromatic","vanilla","woody"],"no":{"t":"Mint, Green apple, Lemon","h":"Tonka bean, Ambroxan, Geranium","b":"Vanilla, Sandalwood, Cedar, Vetiver"},"hk":"The famous Eros, deeper and smoother.","d":"The Eau de Parfum take on Versace’s best-selling Eros. Cool mint, green apple and lemon still open fresh and loud, but tonka and radiant ambroxan make the heart smoother, settling into creamy vanilla, sandalwood, cedar and vetiver. Sweet, sexy and a huge performer, it’s made for nights out, cooler weather and turning heads.","min":4.0,"c":"EDP"},{"n":"Vulcan Feu","h":"French Avenue","sz":[{"s":"2ml","p":4.0},{"s":"5ml","p":7.0},{"s":"10ml","p":12.0},{"s":"30ml","p":30.0}],"acc":["fruity","warm spicy","tropical","amber","woody"],"no":{"t":"Mango, Ginger, Lemon, Red berries","h":"Jasmine, Cedar, Coumarin","b":"Oud, Amber, Cypriol, Musk"},"hk":"Fiery mango and ginger over smoky amber woods.","d":"One of French Avenue’s most talked-about scents. Juicy mango, red berries and lemon collide with spicy ginger for a bright, fiery opening, then jasmine and cedar lead into a smoky base of amber, oud and musk. Tropical, bold and unique, with strong projection. Great for spring and summer days out.","min":4.0,"c":"EDP"},{"n":"Amber Empire","h":"French Avenue","sz":[{"s":"2ml","p":4.0},{"s":"5ml","p":7.0},{"s":"10ml","p":12.0},{"s":"30ml","p":30.0}],"acc":["amber","sweet","vanilla","woody","boozy"],"no":{"t":"Vanilla bean, Liqueur, Cashmere wood","h":"Amber, Cane sugar, Cedar","b":"Tonka bean, Labdanum, Sandalwood, Musk"},"hk":"Golden amber, vanilla and a splash of liqueur.","d":"A warm, glowing amber built for cold nights. Vanilla bean and a smooth liqueur accord open over cashmere wood, then golden amber and cane sugar add sweetness before a resinous base of labdanum, tonka, sandalwood and musk. Rich, cozy and long-lasting. Fantastic value for anyone who loves sweet, ambery scents.","min":4.0,"c":"EDP"},{"n":"MYSLF","h":"Yves Saint Laurent","sz":[{"s":"2ml","p":6.0},{"s":"5ml","p":14.0},{"s":"10ml","p":25.0},{"s":"30ml","p":69.0}],"acc":["floral","citrus","woody","fresh","aromatic"],"no":{"t":"Calabrian bergamot","h":"Orange blossom","b":"Ambrofix, Patchouli"},"hk":"Bright bergamot and orange blossom over clean modern woods.","d":"YSL’s modern take on masculinity, built around a rare men’s orange blossom. Sparkling Calabrian bergamot opens fresh and clean, then a smooth, luminous orange blossom heart settles into soft, warm ambrofix woods and a touch of patchouli. Easygoing, sophisticated and very wearable, it’s a perfect office and everyday scent that still feels special.","min":6.0,"c":"EDP"},{"n":"Prada L’Homme","h":"Prada","sz":[{"s":"2ml","p":5.0},{"s":"5ml","p":12.0},{"s":"10ml","p":24.0},{"s":"30ml","p":61.0}],"acc":["powdery","iris","fresh spicy","woody","amber"],"no":{"t":"Neroli, Black pepper, Carrot seeds","h":"Iris, Geranium, Violet, Mate","b":"Amber, Patchouli, Cedar, Sandalwood"},"hk":"Clean iris and soft spice: the ultimate “fresh out of the shower” scent.","d":"Prada’s modern classic and a true compliment-getter. Bright neroli and black pepper open crisp and clean, then a soft, powdery iris heart with violet, geranium and a touch of mate gives it that luxurious freshly-laundered feel, settling into smooth amber, cedar and sandalwood. Elegant, effortless and office-safe, it works anywhere, any season.","min":5.0,"c":"EDT"},{"n":"La Nuit de L’Homme","h":"Yves Saint Laurent","sz":[{"s":"2ml","p":5.0},{"s":"5ml","p":10.0},{"s":"10ml","p":19.0},{"s":"30ml","p":50.0}],"acc":["warm spicy","aromatic","lavender","woody","fresh spicy"],"no":{"t":"Cardamom","h":"Lavender, Virginia cedar, Bergamot","b":"Vetiver, Caraway"},"hk":"The legendary date-night classic: smooth cardamom and lavender.","d":"One of the most famous seduction scents ever made. A warm, glowing burst of cardamom opens over soft lavender, crisp bergamot and Virginia cedar, then settles into dry vetiver and caraway. Smooth, sexy and close to the skin, it’s made for evenings, dinners and getting close. A true fall and winter staple every collection should have.","min":5.0,"c":"EDT"},{"n":"Outlands","h":"Amouage","sz":[{"s":"2ml","p":18.0},{"s":"5ml","p":43.0},{"s":"10ml","p":72.0},{"s":"30ml","p":195.0}],"acc":["warm spicy","amber","balsamic","woody","citrus"],"no":{"t":"Frankincense, Cardamom, Sichuan pepper, Bergamot","h":"Saffron, Patchouli, Rose, Wormwood","b":"Vanilla, Amber, Oud, Labdanum, Benzoin"},"hk":"Amouage’s newest masterpiece: incense, spice and deep golden resins.","d":"An Extrait from Amouage that smells as grand as it sounds. Bright frankincense, cardamom and Sichuan pepper crackle over lemon and bergamot, then a rich heart of saffron, patchouli, rose and bitter wormwood leads into a deep, resinous base of vanilla, amber, oud, labdanum and benzoin. Powerful, luxurious and near-eternal on skin. A collector’s scent for fall and winter evenings.","min":18.0,"c":"Extrait de Parfum"},{"n":"Delina","h":"Parfums de Marly","sz":[{"s":"2ml","p":12.0},{"s":"5ml","p":26.0},{"s":"10ml","p":50.0},{"s":"30ml","p":150.0}],"acc":["rose","floral","fruity","sweet","powdery"],"no":{"t":"Rhubarb, Lychee, Bergamot","h":"Damask rose, Peony, Vanilla","b":"Cashmeran, Musk, Vetiver"},"hk":"The iconic pink rose: lychee, rhubarb and soft vanilla musk.","d":"One of the most loved women’s fragrances in niche perfumery. Tart rhubarb, juicy lychee and bergamot open bright and playful, then a lush heart of Damask rose and peony is softened with vanilla before settling into creamy cashmeran, musk and vetiver. Feminine, elegant and long-lasting with great projection. A guaranteed compliment-getter and a perfect gift.","min":12.0,"c":"EDP"},{"n":"Fakhar Black","h":"Lattafa","c":"EDP","sz":[{"s":"2ml","p":4.0},{"s":"5ml","p":7.0},{"s":"10ml","p":12.0},{"s":"30ml","p":30.0}],"acc":["aromatic","fresh spicy","lavender","woody","fruity"],"no":{"t":"Apple, Bergamot, Ginger","h":"Lavender, Sage, Juniper berries, Geranium","b":"Tonka bean, Cedar, Amberwood, Vetiver"},"hk":"Crisp apple and ginger over clean lavender woods, a polished everyday signature.","d":"One of Lattafa’s most popular men’s scents and a serious overachiever for the price. Crisp apple, bergamot and ginger open fresh and spicy, then an aromatic heart of lavender, sage and juniper leads into warm tonka, cedar, amberwood and vetiver. Clean, confident and versatile, it works for work, dates and everything in between, all year round.","min":4.0},{"n":"Reflection Man","h":"Amouage","c":"EDP","sz":[{"s":"2ml","p":10.0},{"s":"5ml","p":22.0},{"s":"10ml","p":43.0},{"s":"30ml","p":120.0}],"acc":["floral","woody","powdery","fresh spicy","aromatic"],"no":{"t":"Rosemary, Pink pepper, Bitter orange leaf","h":"Neroli, Jasmine, Orris, Ylang-ylang","b":"Sandalwood, Cedarwood, Vetiver, Patchouli"},"hk":"Creamy neroli and jasmine over smooth sandalwood: clean, classy and endlessly complimented.","d":"One of Amouage’s most loved and most wearable creations. Rosemary, pink pepper and bitter orange leaf open crisp and bright, then a creamy white-floral heart of neroli, jasmine, orris and ylang-ylang takes over before settling into smooth sandalwood, cedar, vetiver and patchouli. Clean, polished and effortlessly classy, with excellent longevity. A dressed-up signature for the office, weddings and date nights, spring through fall.","min":10.0},{"n":"Bleu de Chanel L’Exclusif","h":"Chanel","c":"Parfum","sz":[{"s":"2ml","p":11.0},{"s":"5ml","p":25.0},{"s":"10ml","p":45.0},{"s":"30ml","p":115.0}],"acc":["woody","amber","aromatic","leather","balsamic"],"no":{"t":"Citrus, Aromatic notes","h":"Sandalwood, Cistus labdanum","b":"Amber, Leather, Woody notes"},"hk":"The darkest, richest Bleu yet: creamy sandalwood, amber and a touch of leather.","d":"Chanel’s newest and most intense take on its famous Bleu, built like an extrait. The fresh citrus of the original steps back and creamy sandalwood takes the lead, wrapped in resinous, leathery labdanum and warm ambery woods. Smooth, deep and unmistakably expensive, with a trail that clings to skin and clothes for hours. A grown-up signature for evenings, date nights and cooler weather.","min":11.0},{"n":"Absolute Aphrodisiac","h":"Initio","c":"EDP","sz":[{"s":"2ml","p":11.0},{"s":"5ml","p":24.0},{"s":"10ml","p":39.0},{"s":"30ml","p":105.0}],"acc":["vanilla","amber","musky","leather","floral"],"no":{"t":"White flowers","h":"Vanilla, Amber","b":"Musk, Castoreum, Leather"},"hk":"Warm vanilla, amber and musk with a soft leather edge: built to pull people closer.","d":"One of Initio’s original head-turners. Creamy white flowers melt into a thick, golden blend of vanilla and amber, while musk, castoreum and a soft leather note give it a warm, skin-like pull. Sweet without being sugary, sensual and long-lasting, with a trail people notice when you walk past. Made for date nights, cold evenings and anywhere you want to be remembered.","min":11.0},{"n":"Island","h":"Khadlaj","c":"Extrait de Parfum","sz":[{"s":"2ml","p":4.0},{"s":"5ml","p":7.0},{"s":"10ml","p":12.0},{"s":"30ml","p":30.0}],"acc":["coconut","tropical","sweet","woody","amber"],"no":{"t":"Bergamot","h":"Coconut, Ginger, Pineapple","b":"Amber, Tonka bean, Sandalwood"},"hk":"Creamy coconut and pineapple over warm tonka: a beach vacation for a fraction of the price.","d":"Khadlaj’s tropical crowd-pleaser, and one of the best-known budget takes on the coconut beach scent. Bright bergamot opens into creamy coconut, juicy pineapple and a kick of ginger, then settles into a warm, sweet base of amber, tonka bean and sandalwood. It is an extrait, so it wears rich and lasts for hours. Sunny, addictive and easy to love in warm weather or on a night out.","min":4.0},{"n":"Cool Water","h":"Davidoff","c":"EDT","sz":[{"s":"2ml","p":4.0},{"s":"5ml","p":7.0},{"s":"10ml","p":12.0},{"s":"30ml","p":19.0}],"acc":["aquatic","fresh","aromatic","lavender","woody"],"no":{"t":"Mint, Lavender, Coriander, Sea notes","h":"Geranium, Jasmine, Neroli, Sandalwood","b":"Amber, Musk, Cedar, Oakmoss"},"hk":"The original ocean-fresh classic: cool mint and lavender over clean woods.","d":"The 1988 classic that started the whole fresh aquatic style. Cool mint, lavender and coriander open crisp and clean with a splash of sea air, then geranium, jasmine and sandalwood smooth it out before a soft base of amber, musk and cedar. Light, clean and instantly familiar, it is an easy everyday scent for the office, the gym and warm weather, at a price that makes it a no-brainer to try.","min":4.0},{"n":"Il Padrino","h":"Sospiro","c":"EDP","sz":[{"s":"2ml","p":9.0},{"s":"5ml","p":21.0},{"s":"10ml","p":36.0},{"s":"30ml","p":95.0}],"acc":["boozy","sweet","amber","woody","vanilla"],"no":{"t":"Dark rum, Amaretto, Blackcurrant, Bergamot","h":"Patchouli, Amber, Sandalwood","b":"Labdanum, Vanilla, Siam benzoin"},"hk":"Dark rum and amaretto over creamy sandalwood and vanilla: boozy, rich and commanding.","d":"Sospiro’s 2025 release, named for The Godfather and built to match. It opens with dark rum, amaretto and juicy blackcurrant, lifted by a touch of bergamot, then settles into a velvety heart of patchouli, amber and creamy sandalwood. Labdanum, vanilla and benzoin give it a warm, resinous finish that lasts for hours. Boozy, sweet and confident without being loud, it is made for cold nights, dinners and occasions where you want to be remembered.","min":9.0}];

const PALETTE = {
  "Creed":"#c8b07a","Dolce & Gabbana":"#b5814b","Dior":"#3d4f70","Givenchy":"#a5672f","Jean Paul Gaultier":"#4b7aa0",
  "Louis Vuitton":"#8a6b45","Issey Miyake":"#9fc6d6","Maison Francis Kurkdjian":"#c0453a","Montblanc":"#6f7f86",
  "Parfums de Marly":"#7d5a9a","Prada":"#8d8d8d","Ralph Lauren":"#2f4f6f","Sospiro":"#9b3d55","Versace":"#2f6fb5",
  "Xerjoff":"#4fa3a0","Coach":"#3a3a3a","Kilian":"#1d1d1d","Initio":"#5a2a2a","Amouage":"#7a5a8c",
  "Ex Nihilo":"#3b6fa8","Maison Margiela":"#b9a27c","Giorgio Armani":"#2b2b2b","Paco Rabanne":"#1a1a1a","French Avenue":"#8a3b2b",
  "Yves Saint Laurent":"#3a3a3a","Chanel":"#1f2a44","Lattafa":"#6b5a2e","Khadlaj":"#2f7f86","Davidoff":"#2f6f9f"
};
/* Your own product photos go here: "Fragrance name": "data:image/jpeg;base64,..." */
const PHOTOS = {"Explorer Extreme":"assets/p/explorer-extreme","Bleu de Chanel L’Exclusif":"assets/p/bleu-de-chanel-l-exclusif","Sauvage Elixir":"assets/p/sauvage-elixir","Paradigme Le Parfum":"assets/p/paradigme-le-parfum","I Will":"assets/p/i-will","Ralph’s Club New York":"assets/p/ralph-s-club-new-york","Jazz Club":"assets/p/jazz-club","Prada L’Homme":"assets/p/prada-l-homme","Explorer":"assets/p/explorer","Le Beau Le Parfum (EDP)":"assets/p/le-beau-le-parfum-edp","Cool Water":"assets/p/cool-water","Island":"assets/p/island","Coach for Men EDT":"assets/p/coach-for-men-edt","Eros EDP":"assets/p/eros-edp","Eros Energy":"assets/p/eros-energy","1 Million Black":"assets/p/1-million-black","Dylan Blue":"assets/p/dylan-blue","The One EDP":"assets/p/the-one-edp","Liquid Brun":"assets/p/liquid-brun","L’Eau d’Issey Pour Homme":"assets/p/l-eau-d-issey-pour-homme","Fakhar Black":"assets/p/fakhar-black","Gentleman Society Ambrée":"assets/p/gentleman-society-ambree","Amber Empire":"assets/p/amber-empire","La Nuit de L’Homme":"assets/p/la-nuit-de-l-homme","Vulcan Feu":"assets/p/vulcan-feu","The One Parfum":"assets/p/the-one-parfum","Greenley":"assets/p/greenley","Erba Pura":"assets/p/erba-pura","Grand Soir":"assets/p/grand-soir","Althaïr":"assets/p/althair","Blue Talisman":"assets/p/blue-talisman","L’Immensité":"assets/p/l-immensite","Oud Satin Mood":"assets/p/oud-satin-mood","Pacific Chill":"assets/p/pacific-chill","Afternoon Swim":"assets/p/afternoon-swim","Imagination":"assets/p/imagination","Delina":"assets/p/delina","Layton Exclusif":"assets/p/layton-exclusif","Baccarat Rouge 540 EDP":"assets/p/baccarat-rouge-540-edp","Layton":"assets/p/layton","Green Irish Tweed":"assets/p/green-irish-tweed","Aventus":"assets/p/aventus","Naxos":"assets/p/naxos","Angels’ Share":"assets/p/angels-share","Il Padrino":"assets/p/il-padrino","Alexandria II":"assets/p/alexandria-ii","Vibrato":"assets/p/vibrato","Guidance":"assets/p/guidance","Side Effect":"assets/p/side-effect","Reflection Man":"assets/p/reflection-man","Absolute Aphrodisiac":"assets/p/absolute-aphrodisiac","Outlands":"assets/p/outlands","Sedley":"assets/p/sedley"};
const ACC = {
  "citrus":"#e8d44d","fresh":"#9fe0d6","fresh spicy":"#b7d96a","warm spicy":"#d8673b","woody":"#a87c52","amber":"#d9a441",
  "aromatic":"#7fb08a","sweet":"#e58fb0","fruity":"#f0a35b","leather":"#8a5a3c","smoky":"#9a948c","tobacco":"#b38a5a",
  "lavender":"#a98ad6","vanilla":"#efd9a8","balsamic":"#c58b4f","floral":"#f2a7c3","marine":"#5ab0d8","aquatic":"#6cc4e6",
  "green":"#79c267","earthy":"#8f7a55","patchouli":"#9b7b4f","tea":"#b9a36a","coconut":"#f1ead8","tropical":"#f2c14e",
  "powdery":"#e6cfd9","musky":"#d7cfe3","honey":"#e8b23c","nutty":"#c79a63","mint":"#8fe3b5",
  "oud":"#6b4a3a","rose":"#d96b84","boozy":"#b5651d","iris":"#b9a6d6"
};
const CONC={EDT:"Eau de Toilette",EDP:"Eau de Parfum"};
const accColor = a => ACC[a] || "#bfb6a8";
const $ = s => document.querySelector(s);
const money = n => "$" + (Number.isInteger(n) ? n : n.toFixed(2));
BUNDLES.forEach(b=>{
  const parts=b.items.map(n=>CATALOG.find(f=>f.n===n)).filter(Boolean);
  const reg=parts.reduce((t,f)=>t+f.sz[0].p,0);
  CATALOG.push({bundle:true,n:b.n,h:"Bundle",hk:b.hk,parts,reg,sz:[{s:"3 × 2ml",p:b.p}]});
});
CATALOG.forEach((f,i)=>{ f.id=i; f.min=Math.min(...f.sz.map(s=>s.p)); f.pick=0; f.badge=BADGES[f.n]||"";
  const _ad=ARRIVED[f.n]?(Date.now()-Date.parse(ARRIVED[f.n]+"T00:00:00"))/864e5:NaN; f.fresh=!f.badge&&_ad>=-1&&_ad<=JUST_IN_DAYS; if(f.fresh) f.badge="Just in";
  if(f.bundle&&!f.badge){ const p=f.parts.map(x=>BADGES[x.n]); f.badge=p.includes("Sold out")?"Sold out":p.includes("Coming soon")?"Coming soon":""; }
  f.locked=f.badge==="Sold out"||f.badge==="Coming soon"; f.clone=CLONE_HOUSES.includes(f.h); });

let house="Home", cart=[], view="cart", fulfil="Pickup", paywith="Zelle";
let cardLive=/^https?:$/.test(location.protocol);   // card checkout runs through /.netlify/functions/checkout; falls back to a texted Square link if it is unavailable
const cardNow=()=>paywith==="Card (Square)"&&cardLive;
/* PayPal: the button only appears once /.netlify/functions/paypal reports that the PayPal keys are set in Netlify */
let ppCfg=null, ppBtns=null, paidVia="Square";
const ppNow=()=>paywith==="PayPal"&&!!ppCfg;
const hostedPay=()=>cardNow()||ppNow();   // payment and shipping address are collected on Square's or PayPal's own page
function ppProbe(){ if(ppCfg!==null) return; ppCfg=false; if(!/^https?:$/.test(location.protocol)) return;
  fetch("/.netlify/functions/paypal").then(r=>r.ok?r.json():null).then(j=>{ if(!j||!j.configured||!j.clientId) return; ppCfg=j;
    if(view==="checkout"&&$("#drawer").classList.contains("on")){ save(); renderCheckout(); } }).catch(()=>{}); }
function ppSdk(){ if(window.paypal&&window.paypal.Buttons) return Promise.resolve(); if(ppSdk.p) return ppSdk.p;
  return ppSdk.p=new Promise((ok,no)=>{ const s=document.createElement("script");
    s.src="https://www.paypal.com/sdk/js?client-id="+encodeURIComponent(ppCfg.clientId)+"&currency=USD&intent=capture&components=buttons&enable-funding=venmo&disable-funding=card";
    s.onload=()=>ok(); s.onerror=()=>{ ppSdk.p=null; no(new Error("sdk")); }; document.head.appendChild(s); }); }
const ppBody=extra=>JSON.stringify(Object.assign({items:cart.map(c=>({n:CATALOG[c.id].n,s:CATALOG[c.id].sz[c.si].s,q:c.q})),fulfil,gift:giftOn()?gift:"",name:form.name,contact:form.contact,notes:form.notes,isGift:form.isGift,giftTo:form.isGift?form.giftTo:"",giftNote:form.isGift?form.giftNote:"",total:total()},extra));
const ppPost=body=>fetch("/.netlify/functions/paypal",{method:"POST",headers:{"Content-Type":"application/json"},body}).then(r=>r.json().catch(()=>({})).then(j=>({ok:r.ok,j})));
function ppRender(){ const box=$("#ppBtns"); if(!box) return; if(ppBtns&&ppBtns.close){ try{ppBtns.close();}catch(e){} } ppBtns=null;
  ppSdk().then(()=>{ if(!$("#ppBtns")||$("#ppBtns")!==box) return;
    ppBtns=window.paypal.Buttons({ style:{layout:"vertical",shape:"pill",height:46,label:"pay"},
      onClick:(d,a)=>{ save(); let ok=true; const chk=(cond,id)=>{ const el=$(id); if(el) el.style.display=cond?"none":"block"; if(!cond) ok=false; };
        chk(form.name.trim(),"#eName"); chk(form.contact.trim(),"#eContact"); if(!ok){ toast("Add your name and a way to reach you first.",3500); return a.reject(); } return a.resolve(); },
      createOrder:()=>ppPost(ppBody({action:"create"})).then(({ok,j})=>{ if(ok&&j.id) return j.id; toast(j.message||"PayPal checkout isn't available right now.",5000); throw new Error(j.error||"create"); }),
      onApprove:(d,a)=>ppPost(JSON.stringify({action:"capture",orderID:d.orderID})).then(({ok,j})=>{
        if(ok&&j.status==="COMPLETED"){ paidVia="PayPal"; cart.length=0; updateBadge(); view="paid"; render(); return; }
        if(j.error==="declined"&&a&&a.restart) return a.restart();
        toast(j.message||"PayPal couldn't complete the payment. You have not been charged.",6000); }),
      onError:()=>toast("PayPal didn't go through. You have not been charged. Try again or pick another way to pay.",6000) });
    box.innerHTML=""; return ppBtns.render(box); }).catch(()=>{ if($("#ppBtns")===box) box.innerHTML=`<p class="note" style="font-size:12.5px">PayPal didn't load. Check your connection, or pick another way to pay.</p>`; }); }
/* Collections — edit names or which fragrances belong to each */
const NICHE=["Creed","Maison Francis Kurkdjian","Parfums de Marly","Xerjoff","Sospiro","Louis Vuitton","Kilian","Initio","Amouage","Ex Nihilo"];
const COLLECTIONS = {
  "Home": f=>false,
  "Discovery Kits": f=>f.bundle,
  "New Arrivals": f=>NEW_ARRIVALS.includes(f.n),
  "Best Sellers": f=>BEST_SELLERS.includes(f.n),
  "For Her": f=>FOR_HER.includes(f.n),
  "Winter Picks": f=>WINTER.includes(f.n),
  "Saved": f=>favs.has(f.n),
  "All": f=>true,
  "Fresh & Citrus": f=>["Aventus","Imagination","L’Immensité","Pacific Chill","Afternoon Swim","Coach for Men EDT","L’Eau d’Issey Pour Homme","Greenley","Sedley","Vibrato","Dylan Blue","Eros Energy","Green Irish Tweed","Blue Talisman","Erba Pura","MYSLF","Eros EDP","Vulcan Feu","Fakhar Black","Reflection Man","Cool Water"].includes(f.n),
  "Warm & Spicy": f=>["The One EDP","The One Parfum","Sauvage Elixir","Gentleman Society Ambrée","Explorer","Explorer Extreme","Ralph’s Club New York","Prada L’Homme","Outlands","La Nuit de L’Homme","Layton Exclusif","Side Effect","Jazz Club","I Will","Dior Homme Intense","Bleu de Chanel L’Exclusif"].includes(f.n),
  "Sweet & Ambery": f=>["Le Beau Le Parfum (EDP)","Baccarat Rouge 540 EDP","Grand Soir","Althaïr","Layton","Paradigme Le Parfum","Naxos","Oud Satin Mood","Angels’ Share","Alexandria II","Guidance","1 Million Black","Liquid Brun","Amber Empire","Delina","Absolute Aphrodisiac","Island","Il Padrino"].includes(f.n),
  "Date Night": f=>OCCASIONS["Date Night"].includes(f.n),
  "Office": f=>OCCASIONS["Office"].includes(f.n),
  "Gym & Casual": f=>OCCASIONS["Gym & Casual"].includes(f.n),
  "Wedding & Formal": f=>OCCASIONS["Wedding & Formal"].includes(f.n),
  "Niche": f=>NICHE.includes(f.h),
  "Designer": f=>!f.bundle&&!NICHE.includes(f.h),
  "Under $5": f=>!f.bundle&&f.min<=5,
  "Clones": f=>f.clone
};
const inTab=(h,f)=> h==="Clones"?f.clone : h==="Saved"?favs.has(f.n) : h==="Under $5"?COLLECTIONS[h](f) : !f.clone&&COLLECTIONS[h](f);
/* favourites + saved cart live in this browser only */
const store={ get(k){ try{ return JSON.parse(localStorage.getItem(k)||"null"); }catch(e){ return null; } }, set(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} } };
const favs=new Set(store.get("fd_favs")||[]);
const slug=n=>n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const houses=Object.keys(COLLECTIONS);

let renderHouses; renderHouses=function(){
  $("#houses").innerHTML = houses.filter(h=>h!=="Saved"||favs.size||house==="Saved").map(h=>`<button class="chip ${h===house?'on':''}" data-h="${h}">${h==="Saved"?"♥ Saved":h}${h==="Home"?"":`<small>${CATALOG.filter(f=>inTab(h,f)).length}</small>`}</button>`).join("");
};
$("#houses").onclick=e=>{const b=e.target.closest(".chip"); if(!b)return; house=b.dataset.h; renderHouses(); renderGrid();};
$("#q").oninput=()=>{ if(house==="Home"&&$("#q").value.trim()){ house="All"; renderHouses(); } renderGrid(); }; $("#sort").onchange=renderGrid;

let brand="", _bh="";
const BRAND_TABS=["Niche","Designer"];
function renderBrands(){
  if(house!==_bh){ brand=""; _bh=house; }
  const on=BRAND_TABS.includes(house); $("#brandrow").hidden=!on; if(!on) return;
  const items=CATALOG.filter(f=>!f.bundle&&inTab(house,f)), by={};
  items.forEach(f=>by[f.h]=(by[f.h]||0)+1);
  if(brand&&!by[brand]) brand="";
  $("#brands").innerHTML=`<button class="chip sm ${brand?"":"on"}" data-b="">All ${house.toLowerCase()}<small>${items.length}</small></button>`+
    Object.keys(by).sort((a,b)=>a.localeCompare(b)).map(h=>`<button class="chip sm ${h===brand?"on":""}" data-b="${esc(h)}">${esc(h)}<small>${by[h]}</small></button>`).join("");
  const o=$("#brands .on"); if(o&&brand) o.scrollIntoView({inline:"center",block:"nearest"});
}
$("#brands").onclick=e=>{ const b=e.target.closest(".chip"); if(!b) return; brand=b.dataset.b; renderGrid(); };
function renderGrid(){
  renderBrands();
  document.body.classList.toggle("homeview",house==="Home");
  if(house==="Home"){ renderHome(); $("#count").textContent="Home"; $("#pos").textContent=""; return; }
  const q=$("#q").value.trim().toLowerCase();
  let list=CATALOG.filter(f=> q ? (house==="All"||inTab(house,f))&&(f.n+" "+f.h+" "+(INSPIRED[f.n]?INSPIRED[f.n].by:"")).toLowerCase().includes(q) : inTab(house,f));
  if(brand&&BRAND_TABS.includes(house)) list=list.filter(f=>f.h===brand);
  const s=$("#sort").value;
  list.sort((a,b)=> (s==="az"&&a.bundle!==b.bundle)?(a.bundle?-1:1) : s==="low"?a.min-b.min : s==="high"?b.min-a.min : (a.h+a.n).localeCompare(b.h+b.n));
  $("#count").textContent=`${brand&&BRAND_TABS.includes(house)?brand:house} · ${list.length} item${list.length===1?"":"s"}`; $("#grid").scrollLeft=0; setTimeout(navState,50);
  if(!list.length){$("#grid").innerHTML=`<div class="empty">No fragrances match that search.</div>`;return;}
  $("#grid").innerHTML=list.map(cardFor).join(""); fitCards($("#grid"));
}
const cardFor=f=>f.bundle?bundleCard(f):prodCard(f);
const prodCard=f=>`
    <article class="card" data-id="${f.id}">
      <div class="vis">
        <div class="vleft" style="background:radial-gradient(circle at 50% 55%, ${PALETTE[f.h]||'#777'}40, transparent 72%)">
          <span class="pricefrom">from ${money(f.min)}</span>${f.badge?`<span class="badge2 ${f.badge==="Sold out"?"out":f.badge==="Coming soon"?"soon":""}">${f.badge}</span>`:""}
          ${PHOTOS[f.n] ? `<img src="${PHOTOS[f.n]}.jpg" alt="${f.n}">` : `<div class="bottle"><div class="cap"></div><div class="neck"></div><div class="body"><div class="liq" style="background:linear-gradient(${PALETTE[f.h]||'#999'},${PALETTE[f.h]||'#999'}aa)"></div></div></div>`}
        </div>
        <div class="vline"></div>
        <div class="vright">
          <div><div class="ptitle" style="margin-bottom:6px">Main accords</div>
            <div class="acc">${f.acc.map((a,i)=>`<div class="bar" style="width:${[100,84,70,58,48][i]}%;background:${accColor(a)}">${a}</div>`).join("")}</div></div>
          <div class="notes">${f.no.k ? `<div><b>Key</b><span>${f.no.k}</span></div>` :
            `<div><b>Top</b><span>${f.no.t}</span></div><div><b>Heart</b><span>${f.no.h}</span></div><div><b>Base</b><span>${f.no.b}</span></div>`}</div>
        </div>
      </div>
      <div class="info">
        <div class="hrow"><div class="house">${f.h}${f.c?` · ${CONC[f.c]||f.c}`:""}</div>${cardIcons(f)}</div>
        <div class="name">${f.n}</div>
        ${FULL[f.n]?`<div class="fb">Full bottle retails for ${money(FULL[f.n][0])} (${FULL[f.n][1]}ml) · try it from ${money(f.min)}</div>`:""}
        <p class="hook">${f.hk}</p>
        <p class="desc" title="Tap to read more">${f.d}</p>
        ${f.clone?inspLine(f):similar(f).length?`<div class="sim">If you like this, try ${similar(f).map(s=>`<button class="simb" data-go="${s.id}">${s.n}</button>`).join(" or ")}</div>`:""}
        ${layerLine(f)}
        <div class="sizes">${f.sz.map((z,i)=>`<button class="size ${i===f.pick?'on':''}" data-i="${i}">${z.s}<small>${money(z.p)}</small></button>`).join("")}</div>
        ${addBtn(f)}
      </div>
    </article>`;
const cardIcons=f=>`<div class="icons"><button class="ic fav ${favs.has(f.n)?"on":""}" aria-label="${favs.has(f.n)?"Remove from saved":"Save"} ${esc(f.n)}" aria-pressed="${favs.has(f.n)}">${favs.has(f.n)?"♥":"♡"}</button><button class="ic share" aria-label="Share ${esc(f.n)}"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V3M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg></button></div>`;
async function shareItem(f){ const url=SITE_URL+(f.bundle?"kits.html":slug(f.n)+".html"), title=`${f.bundle?"":f.h+" "}${f.n} · FragtionDecants`;
  try{ if(navigator.share){ await navigator.share({title,text:`${title}, from ${money(f.min)}`,url}); return; } }catch(e){ if(e&&e.name==="AbortError") return; }
  try{ await navigator.clipboard.writeText(url); toast("Link copied"); }catch(e){ toast(url); } }
function toggleFav(f,btn){ favs.has(f.n)?favs.delete(f.n):favs.add(f.n); store.set("fd_favs",[...favs]);
  const on=favs.has(f.n); document.querySelectorAll(`.card[data-id="${f.id}"] .fav`).forEach(b=>{ b.classList.toggle("on",on); b.textContent=on?"♥":"♡"; b.setAttribute("aria-pressed",on); });
  toast(on?`${f.n} saved`:`${f.n} removed`); renderHouses(); if(house==="Saved") renderGrid(); }
function openHash(){ const h=decodeURIComponent(location.hash.slice(1)); if(!h) return; const f=CATALOG.find(x=>slug(x.n)===h); if(f) goTo(f.id); }
addEventListener("hashchange",openHash);
function inspLine(f){ const x=INSPIRED[f.n]; if(!x) return ""; const o=x.go&&CATALOG.find(g=>g.n===x.go);
  return `<div class="sim insp">Inspired by ${o?`<button class="simb" data-go="${o.id}">${esc(x.by)}</button>`:`<b>${esc(x.by)}</b>`}</div>`; }
const LAYER = {"Coach for Men EDT":[["Dylan Blue","fresher"],["Explorer","woodier"],["The One EDP","warmer"]],"Aventus":[["Sedley","fresher"],["Layton","sweeter"],["Erba Pura","fruitier"],["Greenley","greener"]],"The One EDP":[["Naxos","sweeter"],["Jazz Club","boozier"],["Dylan Blue","fresher"]],"The One Parfum":[["Grand Soir","richer"],["Jazz Club","boozier"],["La Nuit de L’Homme","spicier"]],"Sauvage Elixir":[["Althaïr","sweeter"],["Layton","creamier"],["Explorer Extreme","woodier"]],"Gentleman Society Ambrée":[["Grand Soir","richer"],["Naxos","sweeter"],["Explorer","fresher"]],"Le Beau Le Parfum (EDP)":[["Erba Pura","fruitier"],["Althaïr","creamier"],["Pacific Chill","fresher"],["Eros Energy","brighter"]],"Imagination":[["Sedley","fresher"],["Vibrato","softer"],["Baccarat Rouge 540 EDP","sweeter"],["Afternoon Swim","brighter"]],"L’Immensité":[["Imagination","brighter"],["Grand Soir","warmer"],["Dylan Blue","fresher"]],"Pacific Chill":[["Erba Pura","fruitier"],["Greenley","greener"],["Afternoon Swim","zestier"]],"Afternoon Swim":[["Pacific Chill","greener"],["Le Beau Le Parfum (EDP)","creamier"],["Imagination","deeper"]],"L’Eau d’Issey Pour Homme":[["Sedley","cooler"],["Prada L’Homme","softer"],["Explorer","woodier"]],"Baccarat Rouge 540 EDP":[["Delina","rosier"],["Grand Soir","warmer"],["Erba Pura","fruitier"],["Oud Satin Mood","deeper"]],"Grand Soir":[["Baccarat Rouge 540 EDP","brighter"],["Naxos","sweeter"],["Althaïr","creamier"],["Oud Satin Mood","rosier"]],"Explorer":[["Sedley","fresher"],["Coach for Men EDT","fruitier"],["The One EDP","warmer"]],"Explorer Extreme":[["Sauvage Elixir","spicier"],["Grand Soir","warmer"],["Explorer","fresher"]],"Althaïr":[["Naxos","richer"],["Layton","fresher"],["Sauvage Elixir","spicier"],["Angels’ Share","boozier"]],"Greenley":[["Sedley","cooler"],["Pacific Chill","zestier"],["Aventus","smokier"],["Green Irish Tweed","greener"]],"Layton":[["Sedley","fresher"],["Althaïr","sweeter"],["Naxos","richer"],["Layton Exclusif","deeper"]],"Sedley":[["Layton","sweeter"],["Greenley","greener"],["Aventus","smokier"],["Imagination","brighter"]],"Paradigme Le Parfum":[["Prada L’Homme","cleaner"],["Grand Soir","richer"],["Sauvage Elixir","spicier"]],"Ralph’s Club New York":[["I Will","creamier"],["Dylan Blue","fresher"],["La Nuit de L’Homme","spicier"]],"Vibrato":[["Imagination","brighter"],["Erba Pura","fruitier"],["Prada L’Homme","softer"]],"Dylan Blue":[["Eros Energy","zestier"],["The One EDP","warmer"],["Coach for Men EDT","fruitier"]],"Eros Energy":[["Dylan Blue","deeper"],["Le Beau Le Parfum (EDP)","creamier"],["Pacific Chill","greener"],["Eros EDP","sweeter"]],"Naxos":[["Althaïr","creamier"],["Jazz Club","boozier"],["Layton","fresher"],["Angels’ Share","boozier"]],"Layton Exclusif":[["Layton","fresher"],["Althaïr","sweeter"],["Grand Soir","warmer"],["Oud Satin Mood","rosier"]],"Oud Satin Mood":[["Delina","rosier"],["Grand Soir","warmer"],["Baccarat Rouge 540 EDP","brighter"]],"Angels’ Share":[["Jazz Club","smokier"],["Althaïr","creamier"],["Naxos","richer"],["Side Effect","deeper"]],"Green Irish Tweed":[["Greenley","fruitier"],["Sedley","cooler"],["Explorer","woodier"],["Aventus","smokier"]],"Side Effect":[["Jazz Club","smoother"],["Naxos","sweeter"],["Althaïr","creamier"],["Angels’ Share","boozier"]],"Alexandria II":[["Layton","fresher"],["Grand Soir","warmer"],["Naxos","sweeter"],["Oud Satin Mood","rosier"]],"Dior Homme Intense":[["Prada L’Homme","cleaner"],["Grand Soir","warmer"],["Althaïr","sweeter"],["Reflection Man","brighter"]],"Blue Talisman":[["Erba Pura","fruitier"],["Sedley","cooler"],["Vibrato","softer"],["Pacific Chill","zestier"]],"Guidance":[["Delina","rosier"],["Baccarat Rouge 540 EDP","brighter"],["Erba Pura","fruitier"],["Althaïr","creamier"]],"Erba Pura":[["Baccarat Rouge 540 EDP","warmer"],["Pacific Chill","fresher"],["Le Beau Le Parfum (EDP)","creamier"],["Delina","rosier"]],"Jazz Club":[["Naxos","sweeter"],["The One EDP","spicier"],["Althaïr","creamier"],["Angels’ Share","boozier"]],"I Will":[["Ralph’s Club New York","fresher"],["Althaïr","sweeter"],["Explorer Extreme","woodier"],["La Nuit de L’Homme","spicier"]],"1 Million Black":[["Le Beau Le Parfum (EDP)","creamier"],["Erba Pura","fruitier"],["Jazz Club","smokier"],["Althaïr","warmer"]],"Liquid Brun":[["Naxos","richer"],["Layton","fresher"],["Sauvage Elixir","spicier"]],"Eros EDP":[["Eros Energy","zestier"],["Dylan Blue","fresher"],["Althaïr","creamier"],["Le Beau Le Parfum (EDP)","fruitier"]],"Vulcan Feu":[["Erba Pura","fruitier"],["Le Beau Le Parfum (EDP)","creamier"],["Pacific Chill","fresher"]],"Amber Empire":[["Grand Soir","richer"],["Jazz Club","boozier"],["Baccarat Rouge 540 EDP","brighter"]],"MYSLF":[["Prada L’Homme","softer"],["Imagination","brighter"],["Sedley","cooler"],["Reflection Man","creamier"]],"Prada L’Homme":[["Paradigme Le Parfum","warmer"],["Vibrato","brighter"],["L’Eau d’Issey Pour Homme","fresher"],["Dior Homme Intense","deeper"]],"La Nuit de L’Homme":[["The One EDP","warmer"],["Ralph’s Club New York","fresher"],["Althaïr","sweeter"],["I Will","creamier"]],"Outlands":[["Grand Soir","richer"],["Sauvage Elixir","spicier"],["Imagination","brighter"]],"Delina":[["Baccarat Rouge 540 EDP","warmer"],["Erba Pura","fruitier"],["Oud Satin Mood","deeper"],["Guidance","sweeter"]],"Fakhar Black":[["Dylan Blue","fresher"],["Coach for Men EDT","fruitier"],["I Will","creamier"]],"Reflection Man":[["Prada L’Homme","softer"],["Sedley","fresher"],["Imagination","brighter"],["Dior Homme Intense","deeper"]],"Bleu de Chanel L’Exclusif":[["Sedley","fresher"],["Grand Soir","warmer"],["Reflection Man","creamier"],["Sauvage Elixir","spicier"]],"Island":[["Erba Pura","fruitier"],["Pacific Chill","fresher"],["Liquid Brun","warmer"],["Eros Energy","brighter"]],"Il Padrino":[["Angels’ Share","boozier"],["Naxos","sweeter"],["Vibrato","fresher"],["Grand Soir","warmer"]],"Cool Water":[["L’Eau d’Issey Pour Homme","crisper"],["Dylan Blue","deeper"],["Sedley","sharper"],["Prada L’Homme","cleaner"]],"Absolute Aphrodisiac":[["Side Effect","boozier"],["Baccarat Rouge 540 EDP","brighter"],["Naxos","richer"],["Delina","rosier"]]};
function layerLine(f){ const L=LAYER[f.n]; if(!L) return "";
  const c=L.map(([n,w])=>({g:CATALOG.find(x=>x.n===n),w})).filter(x=>x.g&&(f.clone||!x.g.clone));
  const av=c.filter(x=>!x.g.locked), pick=(av.length>=2?av:av.concat(c.filter(x=>x.g.locked))).slice(0,2);
  return pick.length?`<div class="sim lay">Layers with ${pick.map(x=>`<button class="simb" data-go="${x.g.id}">${x.g.n}</button><span class="fx"> (${x.w})</span>`).join(" · ")}</div>`:""; }
const _simc={};
function similar(f){ if(_simc[f.id]) return _simc[f.id];
  const w=x=>{const m={}; x.acc.forEach((a,i)=>m[a]=5-i); return m;}, A=w(f);
  const sc=CATALOG.filter(g=>!g.bundle&&!g.clone&&g.id!==f.id).map(g=>{const B=w(g); let s=0; for(const k in A) if(B[k]) s+=A[k]*B[k]; if(g.h===f.h) s+=4; if(!g.locked) s+=3; return {g,s};}).sort((a,b)=>b.s-a.s);
  return _simc[f.id]=sc.slice(0,2).map(x=>x.g); }
function fitCards(root){ requestAnimationFrame(()=>{ root.querySelectorAll(".card").forEach(c=>{ c.classList.remove("tight","tighter");
  if(c.scrollHeight>c.clientHeight+2){ c.classList.add("tight"); if(c.scrollHeight>c.clientHeight+2) c.classList.add("tighter"); } }); }); }
addEventListener("resize",()=>{ fitCards($("#grid")); fitCards($("#home")); });
function goTo(id){ house=CATALOG[id].clone?"Clones":"All"; $("#q").value=""; renderHouses(); renderGrid();
  setTimeout(()=>{ const c=$(`#grid .card[data-id="${id}"]`); if(!c) return; c.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}); c.classList.add("flash"); setTimeout(()=>c.classList.remove("flash"),1600); },80); }
function addBtn(f){
  if(f.badge==="Coming soon"){ const d=(SHOP.phone||"").replace(/\D/g,"");
    return `<a class="notify" href="sms:+1${d}?&body=${encodeURIComponent(`Hi! Please text me when ${f.bundle?"the "+f.n:f.n} is available.`)}">🔔 Notify me when it lands</a>`; }
  if(f.locked) return `<button class="add" disabled>${f.badge}</button>`;
  return `<button class="add">${f.bundle?`Add set · ${money(f.sz[0].p)}`:`Add ${f.sz[f.pick].s} · ${money(f.sz[f.pick].p)}`}</button>`;
}

const miniBottle=h=>`<div class="bottle"><div class="cap"></div><div class="neck"></div><div class="body"><div class="liq" style="background:linear-gradient(${PALETTE[h]||'#999'},${PALETTE[h]||'#999'}aa)"></div></div></div>`;
function bundleCard(f){
  return `<article class="card" data-id="${f.id}">
    <div class="vis">
      <div class="vleft" style="background:radial-gradient(circle at 50% 55%, #c9a45c33, transparent 72%)">
        <span class="pricefrom">Save ${money(f.reg-f.sz[0].p)}</span>${f.badge?`<span class="badge2 ${f.badge==="Sold out"?"out":f.badge==="Coming soon"?"soon":""}">${f.badge}</span>`:""}
        <div class="trio ${f.parts.every(hasPic)?"tph":""}">${f.parts.every(hasPic)?f.parts.map(p=>pic(p)).join(""):f.parts.map(p=>miniBottle(p.h)).join("")}</div>
      </div>
      <div class="vline"></div>
      <div class="vright">
        <div class="ptitle">In this set · 2ml each</div>
        <div class="blist">${f.parts.map(p=>`<div><b>${p.n}</b><span>${p.h} · ${p.acc.slice(0,3).join(", ")}</span></div>`).join("")}</div>
      </div>
    </div>
    <div class="info">
      <div class="hrow"><div class="house">Discovery Kit</div>${cardIcons(f)}</div>
      <div class="name">${f.n}</div>
      <p class="hook">${f.hk}</p>
      <p class="desc">Three 2ml decants, hand-poured and boxed together. Bought separately: ${money(f.reg)}.</p>
      <div style="margin-top:auto;margin-bottom:12px;font-size:15px;font-weight:600"><span class="strike">${money(f.reg)}</span>${money(f.sz[0].p)}</div>
      ${addBtn(f)}
    </div>
  </article>`;
}
function cardClick(e){
  const card=e.target.closest(".card"); if(!card)return; const f=CATALOG[card.dataset.id];
  const sb=e.target.closest(".simb"); if(sb){ goTo(+sb.dataset.go); return; }
  const fv=e.target.closest(".fav"); if(fv){ toggleFav(f,fv); return; }
  if(e.target.closest(".share")){ shareItem(f); return; }
  if(e.target.closest(".notify")) return;
  const ds=e.target.closest(".desc"); if(ds){ ds.classList.toggle("open"); return; }
  const sz=e.target.closest(".size");
  if(sz){ f.pick=+sz.dataset.i; card.querySelectorAll(".size").forEach((b,i)=>b.classList.toggle("on",i===f.pick));
    if(!f.locked) card.querySelector(".add").textContent=`Add ${f.sz[f.pick].s} · ${money(f.sz[f.pick].p)}`; return; }
  const add=e.target.closest(".add");
  if(add){ if(add.disabled) return; addToCart(f.id,f.pick); add.classList.add("done"); const was=add.textContent; add.textContent="Added ✓";
    setTimeout(()=>{add.classList.remove("done"); add.textContent=was;},1200); }
};

$("#grid").onclick=cardClick; $("#home").onclick=e=>{
  const nb=e.target.closest(".hnav"); if(nb){ const r=nb.closest(".hsec").querySelector(".hrail"); r.scrollBy({left:(+nb.dataset.d)*r.clientWidth*0.9,behavior:"smooth"}); return; }
  const go=e.target.closest(".hall"); if(go){ house=go.dataset.h; renderHouses(); renderGrid(); return; }
  cardClick(e); };
const HOME_ROWS=[
  {t:"Discovery Kits", s:"Three 2ml decants, boxed together for less. The easiest way to find your next signature.", h:"Discovery Kits", list:()=>CATALOG.filter(f=>f.bundle).sort((a,b)=>(a.locked-b.locked)||a.sz[0].p-b.sz[0].p)},
  {t:"New Arrivals", s:"Just landed and landing this week. Text us for first dibs on anything marked Coming soon.", h:"New Arrivals", list:()=>NEW_ARRIVALS.map(n=>CATALOG.find(f=>f.n===n)).filter(f=>f&&!f.clone).sort((a,b)=>a.locked-b.locked)},
  {t:"Best Sellers", s:"The scents customers come back for again and again.", h:"Best Sellers", list:()=>BEST_SELLERS.map(n=>CATALOG.find(f=>f.n===n)).filter(Boolean)}
];
function renderHome(){
  $("#home").innerHTML=`<div class="wrap hero"><h1>${SLOGAN}</h1><p>Hand-poured decants of niche and designer fragrances · 2ml to 30ml</p></div>`+HOME_ROWS.map(r=>{ const l=r.list(); return `
    <section class="hsec">
      <div class="wrap hhead">
        <div><h2 class="htitle">${r.t}</h2><p class="hsub">${r.s}</p></div>
        <div class="hctl">
          <button class="hnav" data-d="-1" aria-label="Scroll ${r.t} left">‹</button>
          <button class="hnav" data-d="1" aria-label="Scroll ${r.t} right">›</button>
          <button class="hall" data-h="${r.h}">See all ${l.length} →</button>
        </div>
      </div>
      <div class="hrail">${l.map(cardFor).join("")}</div>
    </section>`; }).join("") + (REVIEWS.length?`<section class="hsec"><div class="wrap hhead"><div><h2 class="htitle">What customers say</h2><p class="hsub">Real words from real customers.</p></div></div>
      <div class="hrail">${REVIEWS.map(r=>`<figure class="rev"><blockquote>“${esc(r.q)}”</blockquote><figcaption>${esc(r.who)}${r.scent?` · <span>${esc(r.scent)}</span>`:""}</figcaption></figure>`).join("")}</div></section>`:"") + `<div class="wrap hfoot"><button class="hall big" data-h="All">Browse all ${CATALOG.filter(f=>!f.bundle).length} fragrances →</button></div>`;
  $("#home").scrollTop=0; fitCards($("#home"));
}

function addToCart(id,si){
  const ex=cart.find(c=>c.id===id&&c.si===si); if(ex) ex.q++; else cart.push({id,si,q:1});
  updateBadge(); toast(`${CATALOG[id].n} (${CATALOG[id].sz[si].s}) added`);
}
const subtotal=()=>cart.reduce((t,c)=>t+CATALOG[c.id].sz[c.si].p*c.q,0);
const twoMlUnits=()=>cart.filter(c=>!CATALOG[c.id].bundle&&CATALOG[c.id].sz[c.si].s==="2ml").reduce((t,c)=>t+c.q,0);
const discount=()=>{ if(twoMlUnits()<3) return 0; const base=cart.filter(c=>!CATALOG[c.id].bundle&&CATALOG[c.id].sz[c.si].s==="2ml").reduce((t,c)=>t+CATALOG[c.id].sz[c.si].p*c.q,0); return Math.round(base*SHOP.trioDiscount*100)/100; };
const shipping=()=> fulfil!=="Shipping"||!cart.length ? 0 : (subtotal()-discount()>=SHOP.freeShipAt ? 0 : SHOP.shipFee);
const total=()=>Math.round((subtotal()-discount()+shipping())*100)/100;
/* Cart progress: how far the order is from the free 2ml and from free shipping */
function goalHTML(){
  const amt=subtotal()-discount(), goals=[]; if(PROMO.on) goals.push({at:PROMO.min,ic:"🎁",lab:"Free 2ml"}); goals.push({at:SHOP.freeShipAt,ic:"🚚",lab:"Free shipping"});
  goals.sort((a,b)=>a.at-b.at); const max=goals[goals.length-1].at, next=goals.find(g=>amt<g.at), done=goals.filter(g=>amt>=g.at);
  const msg=next?`${done.length?`${done.map(g=>g.lab==="Free 2ml"?"Free 2ml decant":g.lab).join(" and ")} unlocked. `:""}Add <b>${money(Math.round((next.at-amt)*100)/100)}</b> more for ${next.lab==="Free 2ml"?"a free 2ml decant":"free shipping"}.`:`You've unlocked ${goals.map(g=>g.lab==="Free 2ml"?"a free 2ml decant":"free shipping").join(" and ")}.`;
  return `<div class="goal" role="status"><p class="gmsg">${msg}</p>
    <div class="gtrack" aria-hidden="true"><div class="gfill" style="width:${Math.min(100,Math.max(3,amt/max*100)).toFixed(1)}%"></div>${goals.map(g=>`<span class="gdot ${amt>=g.at?"on":""}" style="left:${(g.at/max*100).toFixed(1)}%">${g.ic}</span>`).join("")}</div>
    <div class="glabs" aria-hidden="true">${goals.map(g=>`<span class="${amt>=g.at?"on":""}" style="${g.at===max?"right:-6px":`left:${(g.at/max*100).toFixed(1)}%;transform:translateX(-50%)`}">${money(g.at)}</span>`).join("")}</div></div>`;
}
function totalsHTML(showShip){
  const d=discount(), sh=shipping();
  let h=`<div class="tl"><span>Subtotal</span><span>${money(subtotal())}</span></div>`;
  if(d) h+=`<div class="tl disc"><span>Trio deal (10% off 2ml decants)</span><span>−${money(d)}</span></div>`;
  else if(twoMlUnits()>0) h+=`<div class="tl" style="font-size:12.5px"><span>Add ${3-twoMlUnits()} more 2ml for 10% off</span><span></span></div>`;
  if(PROMO.on&&cart.length) h+= giftOn() ? `<div class="tl disc"><span>🎁 Free 2ml gift</span><span>Free</span></div>` : showShip ? `<div class="tl" style="font-size:12.5px"><span>Add ${money(PROMO.min-(subtotal()-discount()))} more for a free 2ml</span><span></span></div>` : "";
  if(showShip) h+= fulfil==="Shipping" ? `<div class="tl"><span>Shipping (USPS Ground)</span><span>${sh?money(sh):"Free"}</span></div>` : `<div class="tl"><span>Local pickup</span><span>Free</span></div>`;
  return h+`<div class="tot"><span>Total</span><span>${money(showShip?total():subtotal()-d)}</span></div>`;
}
const giftOn=()=>PROMO.on&&cart.length&&subtotal()-discount()>=PROMO.min;
let gift="";
const giftList=()=>CATALOG.filter(f=>!f.bundle&&!f.locked&&f.sz[0].s==="2ml"&&f.sz[0].p<=PROMO.giftMax).sort((a,b)=>(a.h+a.n).localeCompare(b.h+b.n));
const giftName=()=>{ const f=giftList().find(f=>f.n===gift); return f?`${f.h} ${f.n}`:""; };
const itemCount=()=>cart.reduce((t,c)=>t+c.q,0);
function saveCart(){ store.set("fd_cart",cart.map(c=>({n:CATALOG[c.id].n,s:CATALOG[c.id].sz[c.si].s,q:c.q}))); }
function loadCart(){ (store.get("fd_cart")||[]).forEach(x=>{ const f=CATALOG.find(g=>g.n===x.n); if(!f||f.locked) return; const si=f.sz.findIndex(z=>z.s===x.s); if(si<0||!(x.q>0)) return; cart.push({id:f.id,si,q:Math.min(20,Math.floor(x.q))}); }); }
function updateBadge(){ saveCart(); const n=itemCount(); $("#badge").textContent=n;
  const m=$("#mcart"); m.classList.toggle("empty",!n); document.body.classList.toggle("hascart",!!n);
  $("#mcartN").textContent=`${n} item${n===1?"":"s"} · ${money(subtotal()-discount())}`; $("#mcartT").textContent="View cart →";
  m.classList.add("bump"); setTimeout(()=>m.classList.remove("bump"),180); if($("#drawer").classList.contains("on")&&view==="cart") renderCart(); }

function openDrawer(v="cart"){ view=v; $("#drawer").classList.add("on"); $("#scrim").classList.add("on"); render(); }
function closeDrawer(){ $("#drawer").classList.remove("on"); $("#scrim").classList.remove("on"); }
$("#openCart").onclick=()=>openDrawer("cart"); $("#closeCart").onclick=closeDrawer; $("#scrim").onclick=closeDrawer;
function render(){ view==="cart"?renderCart(): view==="checkout"?renderCheckout(): view==="info"?renderInfo(): view==="paid"?renderPaid(): renderDone(); }

function renderCart(){
  $("#dtitle").textContent="Your cart";
  if(!cart.length){ $("#dbody").innerHTML=`<p class="note" style="text-align:center;padding:40px 0">Your cart is empty.<br>Pick a scent and size to get started.</p>`; $("#dfoot").innerHTML=""; return; }
  $("#dbody").innerHTML=goalHTML()+cart.map((c,i)=>{const f=CATALOG[c.id],z=f.sz[c.si];return `
    <div class="line"><div class="t"><b>${f.n}</b><span>${f.bundle?f.parts.map(p=>p.n).join(", "):f.h} · ${z.s} · ${money(z.p)} each</span></div>
    <div class="qty"><button data-a="-" data-i="${i}">−</button><span>${c.q}</span><button data-a="+" data-i="${i}">+</button></div>
    <div class="lp">${money(z.p*c.q)}</div></div>`}).join("");
  $("#dfoot").innerHTML=totalsHTML(false)+`<p class="note" style="margin:0 0 10px;font-size:12.5px">Shipping is ${money(SHOP.shipFee)} under ${money(SHOP.freeShipAt)}. Local pickup is always free.</p>
    <button class="primary" id="toCheckout">Checkout</button><button class="linkb" id="sgLink">Not sure which size? See the size guide</button>`;
  $("#sgLink").onclick=()=>{ openDrawer("info"); setTimeout(()=>{ const s=$("#sizeguide"); if(s) s.scrollIntoView({block:"start"}); },60); };
  $("#toCheckout").onclick=()=>{view="checkout";render();};
}
$("#dbody").addEventListener("click",e=>{
  const b=e.target.closest("[data-a]"); if(!b)return; const c=cart[b.dataset.i];
  c.q+= b.dataset.a==="+"?1:-1; if(c.q<=0) cart.splice(b.dataset.i,1); updateBadge(); renderCart();
});

const form={name:"",contact:"",address:"",notes:"",isGift:false,giftTo:"",giftNote:""};
function renderCheckout(){
  $("#dtitle").textContent="Checkout";
  $("#dbody").innerHTML=`
    <div class="field"><label>Your name *</label><input id="fName" autocomplete="name" autocapitalize="words" value="${esc(form.name)}"><div class="err" id="eName">Please add your name.</div></div>
    <div class="field"><label>Phone or Instagram/Email so we can reach you *</label><input id="fContact" autocomplete="tel" value="${esc(form.contact)}"><div class="err" id="eContact">Please add a way to reach you.</div></div>
    <div class="field"><label>How do you want it?</label><div class="seg"><button data-f="Pickup" class="${fulfil==='Pickup'?'on':''}">Local pickup · Free</button><button data-f="Shipping" class="${fulfil==='Shipping'?'on':''}">Ship · ${subtotal()-discount()>=SHOP.freeShipAt?"Free":money(SHOP.shipFee)}</button></div><p class="note" style="margin:8px 0 0;font-size:12.5px">${fulfil==="Shipping"?`Ships in ${SHOP.shipDays} by USPS Ground Advantage (US only).`:"We'll text you to set up a pickup time."}</p></div>
    <div class="field"><label>How do you want to pay?</label><div class="seg"><button data-p="Zelle" class="${paywith==='Zelle'?'on':''}">Zelle</button><button data-p="Card (Square)" class="${paywith==='Card (Square)'?'on':''}">${ppCfg?"Card":"Card · Square"}</button>${ppCfg?`<button data-p="PayPal" class="${paywith==='PayPal'?'on':''}">PayPal</button>`:""}</div><p class="note" style="margin:8px 0 0;font-size:12.5px">${paywith==="Zelle"?"Send by Zelle after we confirm your order.":ppNow()?"Pay now with PayPal or Venmo. You'll approve the payment in a PayPal window.":cardNow()?"Pay now on Square's secure checkout page: card, Apple Pay or Google Pay.":"We'll text you a secure Square payment link: card, Apple Pay or Google Pay."}</p></div>
    <div class="field giftbox ${form.isGift?"on":""}"><label class="gck"><input type="checkbox" id="fIsGift" ${form.isGift?"checked":""}><span>🎀 This order is a gift</span></label>
      ${form.isGift?`<div class="gfields"><label for="fGiftTo">Who is it for?</label><input id="fGiftTo" maxlength="60" autocapitalize="words" placeholder="Their name" value="${esc(form.giftTo)}">
        <label for="fGiftNote" style="margin-top:10px">Gift note (optional)</label><textarea id="fGiftNote" rows="2" maxlength="200" placeholder="We'll put your note in the box">${esc(form.giftNote)}</textarea>
        <p class="note" style="margin:8px 0 0;font-size:12.5px">We include your note and leave the prices out of the box.${fulfil==="Shipping"?" We can ship straight to them.":""}</p></div>`:""}</div>
    ${fulfil==="Shipping"&&hostedPay()?`<p class="note" style="margin:0 0 14px;font-size:12.5px">${ppNow()?`You'll pick ${form.isGift?"the recipient's":"your"} shipping address in PayPal.`:`You'll enter ${form.isGift?"the recipient's":"your"} shipping address on Square's checkout page.`}</p>`:""}
    <div class="field" id="addrWrap" style="display:${fulfil==='Shipping'&&!hostedPay()?'block':'none'}"><label>${form.isGift?"Ship to (their address, or yours) *":"Shipping address *"}</label><textarea id="fAddr" rows="3" autocomplete="street-address">${esc(form.address)}</textarea><div class="err" id="eAddr">Please add your shipping address.</div></div>
    ${giftOn()?`<div class="field"><label>🎁 Choose your free 2ml</label><select class="sel" id="fGift" style="width:100%;border-radius:12px;padding:12px">
      <option value="">Surprise me</option>${giftList().map(f=>`<option value="${esc(f.n)}" ${f.n===gift?"selected":""}>${esc(f.h)} · ${esc(f.n)}</option>`).join("")}</select></div>`:""}
    <div class="field"><label>Notes (optional)</label><textarea id="fNotes" rows="2" placeholder="Anything we should know?">${esc(form.notes)}</textarea></div>`;
  $("#dbody").querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{save(); fulfil=b.dataset.f; renderCheckout();});
  $("#dbody").querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>{save(); paywith=b.dataset.p; renderCheckout();});
  $("#fIsGift").onchange=()=>{ save(); renderCheckout(); if(form.isGift){ const g=$("#fGiftTo"); if(g) g.focus(); } };
  $("#dfoot").innerHTML=totalsHTML(true)+`
    ${ppNow()?`<div id="ppBtns" class="ppbtns"><p class="note" style="font-size:12.5px;text-align:center">Loading PayPal…</p></div>`:`<button class="primary" id="place">${cardNow()?`Pay ${money(total())} with card`:"Review &amp; send order"}</button>`}<button class="ghost" id="back">Back to cart</button>`;
  ppProbe(); if(ppNow()) ppRender();
  $("#back").onclick=()=>{save();view="cart";render();};
  if($("#place")) $("#place").onclick=()=>{ save(); let ok=true;
    const chk=(cond,id)=>{$(id).style.display=cond?"none":"block"; if(!cond) ok=false;};
    chk(form.name.trim(),"#eName"); chk(form.contact.trim(),"#eContact"); if(fulfil==="Shipping"&&!hostedPay()) chk(form.address.trim(),"#eAddr");
    if(!ok) return; if(cardNow()) payCard($("#place")); else {view="done";render();} };
}
async function payCard(btn){ const label=btn.textContent; btn.disabled=true; btn.textContent="Opening secure checkout…";
  try{ const r=await fetch("/.netlify/functions/checkout",{method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({items:cart.map(c=>({n:CATALOG[c.id].n,s:CATALOG[c.id].sz[c.si].s,q:c.q})),fulfil,gift:giftOn()?gift:"",name:form.name,contact:form.contact,notes:form.notes,isGift:form.isGift,giftTo:form.isGift?form.giftTo:"",giftNote:form.isGift?form.giftNote:"",total:total()})});
    const j=await r.json().catch(()=>({}));
    if(r.ok&&j.url){ store.set("fd_paying",1); location.href=j.url; return; }
    if(j.error==="price_changed"||j.error==="unavailable"||j.error==="bad_cart"){ btn.disabled=false; btn.textContent=label; toast(j.message||"Please refresh the page and try again.",5000); return; }
    throw new Error(j.error||r.status);
  }catch(e){ cardLive=false; renderCheckout(); toast("Card checkout isn't available right now. Send your order by text and we'll send you a payment link.",5000); } }
function renderPaid(){
  $("#dtitle").textContent="Thank you!";
  $("#dbody").innerHTML=`<div class="sq"><div class="zhead">${paidVia==="PayPal"?"":`<span class="sqlogo" aria-hidden="true"></span>`}<b>Payment received</b></div>
    <p class="znote">Your order is in and ${paidVia==="PayPal"?"PayPal":"Square"} has emailed your receipt. We'll text you to confirm ${"pickup or shipping"}, and orders ship in ${SHOP.shipDays}.</p></div>
    <p class="note">Questions about your order? Text us at ${SHOP.phone} and we'll sort it out.</p>`;
  $("#dfoot").innerHTML=`<button class="primary" id="keep">Keep shopping</button><a class="ghost" style="display:block;text-align:center;text-decoration:none" href="sms:+1${SHOP.phone.replace(/\D/g,"")}">Text us · ${SHOP.phone}</a>`;
  $("#keep").onclick=closeDrawer;
}
function save(){ if(!$("#fName"))return; form.name=$("#fName").value; form.contact=$("#fContact").value; form.notes=$("#fNotes").value;
  if($("#fIsGift")) form.isGift=$("#fIsGift").checked; if($("#fGiftTo")) form.giftTo=$("#fGiftTo").value; if($("#fGiftNote")) form.giftNote=$("#fGiftNote").value; if($("#fGift")) gift=$("#fGift").value; if($("#fAddr")) form.address=$("#fAddr").value; }
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

const dispName=f=>`${(f.n.startsWith(f.h)||(" "+f.n+" ").includes(" "+f.h+" "))?"":f.h+" "}${f.n}${f.c&&!f.n.includes(f.c)?" "+f.c:""}`;
function orderText(){
  const lines=cart.map(c=>{const f=CATALOG[c.id],z=f.sz[c.si];return f.bundle?`• ${c.q} × ${f.n} (${f.parts.map(p=>p.n).join(", ")} · 2ml each) — ${money(z.p*c.q)}`:`• ${c.q} × ${dispName(f)} (${z.s}) — ${money(z.p*c.q)}`;});
  const d=discount(), sh=shipping();
  return `New order for ${SHOP.name}\n\n${lines.join("\n")}\n\nSubtotal: ${money(subtotal())}`+(d?`\nTrio deal: −${money(d)}`:"")+(fulfil==="Shipping"?`\nShipping: ${sh?money(sh):"Free"}`:"")+`\nTotal: ${money(total())}\n\nName: ${form.name}\nContact: ${form.contact}\nMethod: ${fulfil}\nPay with: ${paywith}`+(giftOn()?`\nFree 2ml gift: ${giftName()||"Surprise me (your pick)"}`:"")+
    (form.isGift?`\nGift order: Yes${form.giftTo.trim()?` (for ${form.giftTo.trim()})`:""}`+(form.giftNote.trim()?`\nGift note: ${form.giftNote.trim()}`:""):"")+
    (fulfil==="Shipping"?`\nShip to: ${form.address}`:"")+(form.notes.trim()?`\nNotes: ${form.notes}`:"");
}
function renderDone(){
  $("#dtitle").textContent="Send your order";
  const txt=orderText(), enc=encodeURIComponent(txt);
  const digits=(SHOP.phone||"").replace(/\D/g,"");
  let contact = SHOP.phone
    ? `<div class="contact">📱 Text your order to <b>${SHOP.phone}</b>. Tap <b>Text my order</b> below, or copy it and paste it into a message.`+
      (SHOP.email?`<br>✉️ Or email: <a href="mailto:${SHOP.email}?subject=${encodeURIComponent("Order from "+form.name)}&body=${enc}">${SHOP.email}</a>`:"")+`</div>`
    : `<div class="contact">Copy your order and send it to ${SHOP.name} wherever you message us.</div>`;
  $("#dbody").innerHTML=`<p class="note">Almost done! Text your order to us below. We'll confirm availability and your total, then you can pay ${paywith==="Zelle"?"by Zelle":paywith==="PayPal"?"with PayPal":"with a Square payment link"}.</p>
    <div class="summary" id="sum"></div>${contact}
    ${paywith==="Card (Square)"?`<div class="sq">
      <div class="zhead"><span class="sqlogo" aria-hidden="true"></span><b>Pay with Square</b><span class="ztot">${money(total())}</span></div>
      <p class="znote">Once we confirm your order, we'll text you a secure Square payment link. Pay with any debit or credit card, Apple Pay or Google Pay. Your card details go straight to Square and are never shared with us.</p>
    </div>`:""}
    ${paywith==="Zelle"&&SHOP.zelle&&SHOP.zelle.id?`<div class="zelle">
      <div class="zhead"><span class="zlogo">Z</span><b>Pay with Zelle</b><span class="ztot">${money(total())}</span></div>
      <div class="zrow"><span>Send to</span><b>${SHOP.zelle.id}</b><button class="zcopy" id="zcopy">Copy</button></div>
      <div class="zrow"><span>Name shown</span><b>${esc(SHOP.zelle.name)}</b></div>
      <div class="zrow"><span>Memo</span><b>${esc(form.name)} – FragtionDecants</b></div>
      <p class="znote">Make sure the name matches before you send. Wait for us to confirm your order and total first, and put your name in the memo so we can match your payment.</p>
    </div>`:""}
    ${SHOP.payment?`<div class="contact"><b>Payment:</b> ${esc(SHOP.payment)}<br><span style="color:var(--mute);font-size:13px">Please wait for our confirmation before paying.</span></div>`:""}`;
  $("#sum").textContent=txt;
  $("#dfoot").innerHTML=(digits?`<a class="primary" style="display:block;text-align:center;text-decoration:none" href="sms:+1${digits}?&body=${enc}" target="_blank" rel="noopener">Text my order to ${SHOP.phone}</a><button class="ghost" id="copy">Copy order</button>`:`<button class="primary" id="copy">Copy order</button>`)+`<button class="ghost" id="edit">Edit order</button>`;
  $("#copy").onclick=async()=>{ try{ await navigator.clipboard.writeText(txt); $("#copy").textContent="Copied ✓"; toast("Order copied, now paste it in a message to us"); }
    catch(e){ const r=document.createRange(); r.selectNodeContents($("#sum")); const s=getSelection(); s.removeAllRanges(); s.addRange(r); toast("Text selected, press copy"); } };
  $("#edit").onclick=()=>{view="checkout";render();};
  const zc=$("#zcopy"); if(zc) zc.onclick=async()=>{ try{ await navigator.clipboard.writeText(SHOP.zelle.id.replace(/\D/g,"")); zc.textContent="Copied ✓"; }catch(e){ toast("Number: "+SHOP.zelle.id); } };
}

function renderInfo(){
  $("#dtitle").textContent="About & FAQ";
  $("#dfoot").innerHTML=`<a class="primary" style="display:block;text-align:center;text-decoration:none" href="sms:+1${SHOP.phone.replace(/\D/g,"")}">Text us · ${SHOP.phone}</a><a class="ghost" style="display:block;text-align:center;text-decoration:none" href="https://instagram.com/fragtiondecants" target="_blank" rel="noopener">Follow @fragtiondecants on Instagram</a>`;
  $("#dbody").innerHTML=`
  <div class="info-sec"><h3>Our promise</h3><ul>
    <li><b>100% authentic.</b> Every decant comes from a genuine full bottle bought from established fragrance retailers, or straight from Louis Vuitton boutiques.</li>
    <li><b>Hand-poured, never watered down.</b> Each decant is poured fresh from the original bottle into a new, clean atomizer.</li>
    <li><b>Labeled and sealed.</b> You always know exactly what you got and how much.</li></ul></div>
  <div class="info-sec"><h3>How ordering works</h3><ul>
    <li>Pick your scents and sizes and head to checkout.</li>
    <li><b>Card:</b> pay right away on Square's secure checkout page (Apple Pay and Google Pay work too).</li>
    <li><b>Zelle:</b> text us your order from checkout, and we'll confirm availability and your total before you send.</li>
    <li>Then we pour and ship, or set up your pickup.</li></ul></div>
  <div class="info-sec" id="sizeguide"><h3>Size guide</h3>
    <table class="sg"><thead><tr><th>Size</th><th>About</th><th>At 3 sprays a day</th><th>Best for</th></tr></thead><tbody>
    <tr><td>2ml</td><td>20 sprays</td><td>About a week</td><td>Testing a new scent</td></tr>
    <tr><td>5ml</td><td>50 sprays</td><td>2–3 weeks</td><td>Wearing it for a while</td></tr>
    <tr><td>10ml</td><td>100 sprays</td><td>About a month</td><td>A scent you already love</td></tr>
    <tr><td>30ml</td><td>300 sprays</td><td>About 3 months</td><td>Your signature, travel-ready</td></tr></tbody></table>
    <p class="note" style="margin-top:8px;font-size:12.5px">Spray counts are approximate. Bigger sizes cost less per ml.</p></div>
  <div class="info-sec"><h3>Shipping &amp; pickup</h3><ul>
    <li><b>Shipping:</b> ${money(SHOP.shipFee)} flat via USPS Ground Advantage. <b>Free on orders ${money(SHOP.freeShipAt)}+.</b></li>
    <li><b>Ships in ${SHOP.shipDays}</b> after payment. Delivery usually takes 2–5 business days.</li>
    <li><b>Local pickup is free.</b> We'll text you to set a time.</li>
    <li>US only. Perfume is flammable, so by law it can only travel by ground: no air or international shipping.</li></ul></div>
  <div class="info-sec faq"><h3>FAQ</h3>
    <details><summary>Are these real?</summary><p>Yes. Every decant is poured from an authentic, full-size bottle of the exact fragrance listed. No fakes, no dilution.</p></details>
    <details><summary>Will it smell the same as the full bottle?</summary><p>It's the exact same juice, poured straight from the original bottle, so it smells identical.</p></details>
    <details><summary>How long does a decant last?</summary><p>A 2ml is about 20 sprays, roughly a week of daily wear. A 5ml lasts 2–3 weeks, a 10ml about a month, and a 30ml around 3 months. See the size guide above.</p></details>
    <details><summary>What's the Trio deal?</summary><p>Add any three or more single 2ml decants and you automatically get 10% off them. The ready-made bundles are already discounted.</p></details>
    <details><summary>How do I pay?</summary><p>Two ways: <b>Zelle</b> or <b>card through Square</b>. Choose Card at checkout to pay on Square's secure checkout page with any debit or credit card, Apple Pay or Google Pay. If card checkout is ever unavailable, we'll text you a Square payment link instead. With Zelle, please wait for our confirmation text before sending.</p></details>
    <details><summary>Is paying by card safe?</summary><p>Yes. Card payments go through Square's secure checkout, so your card number is never shared with us.</p></details>
    <details><summary>What's in the Clones tab?</summary><p>Clone houses like French Avenue, Lattafa and Khadlaj make their own fragrances inspired by famous, more expensive scents. Ours are poured from authentic bottles of those brands, and each listing names the scent it's inspired by. They're kept in their own tab so you always know exactly what you're getting. Everything outside that tab is the original fragrance.</p></details>
    <details><summary>What does "Coming soon" mean?</summary><p>Those bottles are on their way to us. You can browse the notes and prices now, and they'll open for ordering as soon as they arrive. Want first dibs? Text us and we'll let you know.</p></details>
    ${PROMO.on?`<details><summary>How does the free 2ml work?</summary><p>${PROMO.text}. Once your cart hits ${money(PROMO.min)} (after any discounts), a free 2ml is added to your order. At checkout, choose your gift from our list of in-stock scents, or pick "Surprise me" and we'll choose one we think you'll love.</p></details>`:""}
    <details><summary>Something wrong with my order?</summary><p>Text us at ${SHOP.phone} and we'll make it right.</p></details>
  </div>`;
}
$("#openInfo").onclick=()=>openDrawer("info");

/* ---- Scent quiz ---- */
const VIBES={
  fresh:["citrus","fresh","aquatic","marine","green","mint","fresh spicy","aromatic","tea","musky"],
  warm:["warm spicy","tobacco","leather","amber","woody","smoky","balsamic","patchouli","earthy","lavender","oud","boozy"],
  sweet:["vanilla","sweet","honey","coconut","fruity","tropical","nutty","powdery","floral","amber","rose","iris","boozy"]
};
const QS=[
  {k:"who",q:"Who is it for?",o:[["masc","Me, something masculine","Classic men's scents"],["fem","Me, something feminine","Florals, fruits and soft sweets"],["any","Anyone, unisex is great","Scents that work on everyone"],["gift","It's a gift","Safe bets people love"]]},
  {k:"when",q:"When will you wear it most?",o:[["day","Daytime, work or school","Clean and easygoing"],["night","Nights out and dates","Turn some heads"],["any","A bit of everything","One scent that does it all"]]},
  {k:"season",q:"What time of year?",o:[["warm","Spring and summer","Light enough for the heat"],["cold","Fall and winter","Rich and cozy"],["all","Year-round","Works in any weather"]]},
  {k:"vibe",q:"Which sounds most like you?",o:[["fresh","Fresh & clean","Citrus, sea breeze, crisp mint"],["warm","Warm & bold","Spice, woods, leather, tobacco"],["sweet","Sweet & cozy","Vanilla, amber, honey, fruit"],["lux","Rich & luxurious","Oud, rose, incense, resins"]]},
  {k:"note",q:"Pick a note you love",o:[["citrus","Citrus & fresh","Bergamot, lemon, green notes"],["vanilla","Vanilla & gourmand","Vanilla, praline, tonka"],["woods","Woods & oud","Cedar, sandalwood, oud, smoke"],["floral","Florals","Rose, iris, lavender"],["spice","Spice & booze","Cinnamon, tobacco, rum, cognac"],["fruit","Fruity","Apple, pineapple, pear, berries"]]},
  {k:"power",q:"How loud should it be?",o:[["soft","Subtle","Close to the skin, office-safe"],["mid","Noticeable","People catch it when they're near"],["loud","Beast mode","Fills a room and lasts all day"]]},
  {k:"budget",q:"What do you want to spend on a 2ml?",o:[["low","Under $6","Great designer picks"],["mid","Up to $10","The niche favorites"],["any","Show me the best","Including luxury houses"]]}
];
const VIBES2=Object.assign({},VIBES,{lux:["oud","rose","balsamic","amber","leather","smoky","boozy","iris"]});
const NOTES={citrus:["citrus","fresh","aquatic","marine","green","mint","tea"],vanilla:["vanilla","sweet","honey","nutty","coconut","powdery"],
  woods:["woody","oud","smoky","earthy","patchouli","balsamic","leather"],floral:["floral","rose","iris","powdery","lavender"],
  spice:["warm spicy","fresh spicy","tobacco","boozy","amber"],fruit:["fruity","tropical","citrus"]};
/* Quiz tuning: who each scent suits, and how strong it wears */
const FEM=["Delina"];
const UNISEX=["Baccarat Rouge 540 EDP","Grand Soir","Pacific Chill","Afternoon Swim","Oud Satin Mood","Angels’ Share","Side Effect","Alexandria II","Erba Pura","Blue Talisman","Guidance","Outlands","Vulcan Feu","Amber Empire","Naxos","Layton Exclusif","Absolute Aphrodisiac","Island","Il Padrino"];
const STRONG=["Sauvage Elixir","The One Parfum","Le Beau Le Parfum (EDP)","Paradigme Le Parfum","Explorer Extreme","Baccarat Rouge 540 EDP","Grand Soir","Althaïr","Layton","Layton Exclusif","Oud Satin Mood","Angels’ Share","Side Effect","Alexandria II","Outlands","Guidance","Erba Pura","Naxos","Aventus","Liquid Brun","Vulcan Feu","Amber Empire","1 Million Black","I Will","Eros EDP","Gentleman Society Ambrée","Bleu de Chanel L’Exclusif","Absolute Aphrodisiac","Island","Il Padrino"];
const SOFT=["Coach for Men EDT","L’Eau d’Issey Pour Homme","Explorer","Dylan Blue","La Nuit de L’Homme","Prada L’Homme","Afternoon Swim","Pacific Chill","Imagination","L’Immensité","Green Irish Tweed","Jazz Club","MYSLF","Cool Water"];
let qa={}, qi=0;
function openQuiz(){ qa={}; qi=0; $("#quiz").classList.add("on"); renderQuiz(); }
function closeQuiz(){ $("#quiz").classList.remove("on"); }
$("#openQuiz").onclick=openQuiz; $("#qClose").onclick=closeQuiz;
$("#quiz").onclick=e=>{ if(e.target.id==="quiz") closeQuiz(); };
function renderQuiz(){
  if(qi<QS.length){ const s=QS[qi];
    $("#qBody").innerHTML=`<div class="qstep">Question ${qi+1} of ${QS.length}</div><div class="qbar"><i style="width:${qi/QS.length*100}%"></i></div><div class="qq">${s.q}</div>
      <div class="qopts">${s.o.map(o=>`<button class="qopt" data-v="${o[0]}">${o[1]}<small>${o[2]}</small></button>`).join("")}</div>
      ${qi?`<button class="ghost" id="qBack">← Back</button>`:""}`;
    $("#qBody").querySelectorAll(".qopt").forEach(b=>b.onclick=()=>{ qa[s.k]=b.dataset.v; qi++; renderQuiz(); });
    if(qi) $("#qBack").onclick=()=>{ qi--; renderQuiz(); };
    return; }
  const res=quizPick();
  $("#qBody").innerHTML=`<div class="qstep">Your matches</div><div class="qq">Start with these three</div>
    <div class="qres">${res.map(f=>`<div class="qcard">${pic(f)}<div class="t"><b>${f.n}</b><span>${f.h} · 2ml ${money(f.sz[0].p)}</span><em>${f.hk}</em></div><button data-id="${f.id}">Add 2ml</button></div>`).join("")}</div>
    <button class="ghost" id="qAll">Add all three · ${money(res.reduce((t,f)=>t+f.sz[0].p,0))} (10% off applies)</button>
    <button class="ghost" id="qAgain">Retake the quiz</button>`;
  $("#qBody").querySelectorAll(".qcard button").forEach(b=>b.onclick=()=>{ addToCart(+b.dataset.id,0); b.textContent="Added ✓"; });
  $("#qAll").onclick=()=>{ res.forEach(f=>addToCart(f.id,0)); closeQuiz(); openDrawer("cart"); };
  $("#qAgain").onclick=openQuiz;
}
function quizPick(){
  const pool=CATALOG.filter(f=>!f.bundle&&!f.locked&&!f.clone);
  const cap=qa.budget==="low"?5.99:qa.budget==="mid"?10:1e9;
  const heavy=a=>VIBES.warm.includes(a)||VIBES.sweet.includes(a);
  const score=f=>{ let s=0;
    f.acc.forEach((a,i)=>{ const w=5-i;
      if(VIBES2[qa.vibe]&&VIBES2[qa.vibe].includes(a)) s+=w*2;
      if(NOTES[qa.note]&&NOTES[qa.note].includes(a)) s+=w*1.6;
      if(qa.when==="day"&&VIBES.fresh.includes(a)) s+=w*0.6;
      if(qa.when==="night"&&heavy(a)) s+=w*0.6;
      if(qa.season==="warm"){ if(VIBES.fresh.includes(a)) s+=w*0.8; else if(heavy(a)&&!VIBES.fresh.includes(a)) s-=w*0.3; }
      if(qa.season==="cold"&&heavy(a)) s+=w*0.8; });
    const lvl=STRONG.includes(f.n)?"loud":SOFT.includes(f.n)?"soft":"mid";
    if(qa.power){ if(lvl===qa.power) s+=6; else if(lvl!=="mid"&&qa.power!=="mid") s-=6; }
    const fem=FEM.includes(f.n), uni=UNISEX.includes(f.n);
    if(qa.who==="masc"&&fem) s-=100;
    if(qa.who==="fem") s+= fem?30:uni?16:-16;
    if(qa.who==="any"&&uni) s+=5;
    if(qa.who==="gift"&&BEST_SELLERS.includes(f.n)) s+=6;
    return s; };
  const ranked=pool.map(f=>({f,s:score(f)})).sort((a,b)=>b.s-a.s);
  const within=ranked.filter(x=>x.f.sz[0].p<=cap);
  return (within.length>=3?within:ranked).slice(0,3).map(x=>x.f);
}

let tt; function toast(m,ms=1800){ const t=$("#toast"); t.textContent=m; t.classList.add("on"); clearTimeout(tt); tt=setTimeout(()=>t.classList.remove("on"),ms); }

const rail=$("#grid");
function step(){ const c=rail.querySelector(".card"); return c? (c.offsetWidth+16)*Math.max(1,Math.floor(rail.clientWidth/(c.offsetWidth+16))) : rail.clientWidth; }
function posState(){ const cards=[...rail.querySelectorAll(".card")]; if(!cards.length){$("#pos").textContent="";return;}
  const mid=rail.scrollLeft+rail.clientWidth/2; let i=0; cards.forEach((c,k)=>{ if(c.offsetLeft<=mid) i=k; });
  $("#pos").textContent=`${i+1} / ${cards.length}`; }
function navState(){ posState(); $("#prev").disabled = rail.scrollLeft<8; $("#next").disabled = rail.scrollLeft+rail.clientWidth >= rail.scrollWidth-8; }
$("#prev").onclick=()=>rail.scrollBy({left:-step()}); $("#next").onclick=()=>rail.scrollBy({left:step()});
rail.addEventListener("scroll",navState,{passive:true}); addEventListener("resize",navState);
rail.addEventListener("wheel",e=>{ if(Math.abs(e.deltaY)>Math.abs(e.deltaX) && !e.target.closest(".card")?.matches(":hover .card")){ rail.scrollLeft+=e.deltaY; e.preventDefault(); } },{passive:false});
$("#mcart").onclick=()=>openDrawer("cart");
const _rh=renderHouses; renderHouses=function(){ _rh(); const on=$("#houses .on"); if(on) on.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}); };
if(PROMO.on){ let hide=false; try{ hide=sessionStorage.getItem("promoX")==="1"; }catch(e){}
  if(!hide){ $("#promoText").textContent=PROMO.text; $("#promo").hidden=false; }
  $("#promoX").onclick=()=>{ $("#promo").hidden=true; try{ sessionStorage.setItem("promoX","1"); }catch(e){} }; }


/* ================= v2: multi-page storefront ================= */
const PAGE=document.body.dataset.page||"home", ITEM=document.body.dataset.item||"";
const pageEl=$("#page");
const urlFor=f=>f.bundle?"kits.html":slug(f.n)+".html";
const shopUrl=(c,b)=>"shop.html"+((c||b)?"#"+[c?"c="+encodeURIComponent(c):"",b?"brand="+encodeURIComponent(b):""].filter(Boolean).join("&"):"");   // filters live in the #hash so links work on any host
const prods=()=>CATALOG.filter(f=>!f.bundle);
const CHK=`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`;
const smsHref=body=>`sms:+1${SHOP.phone.replace(/\D/g,"")}${body?"?&body="+encodeURIComponent(body):""}`;
goTo=function(id){ location.href=urlFor(CATALOG[id]); };

/* ---- product photos: real bottle photo where we have one, drawn bottle otherwise ---- */
const hasPic=f=>!!PHOTOS[f.n];
const pic=(f,big)=>hasPic(f)?`<img class="pic" src="${PHOTOS[f.n]}${big?"":"-s"}.jpg" alt="${esc(f.h)} ${esc(f.n)} bottle with decant vials" loading="${big?"eager":"lazy"}" decoding="async" width="16" height="15">`:miniBottle(f.h);
/* ---- tiles ---- */
const badgeHTML=f=>f.badge?`<span class="badge2 ${f.badge==="Sold out"?"out":f.badge==="Coming soon"?"soon":""}">${f.badge}</span>`:"";
const kitTile=f=>`<article class="tile"><a class="tlink" href="kits.html">
    <div class="tvis ${f.parts.every(hasPic)?"ph":""}" style="background:radial-gradient(circle at 50% 60%, #c9a45c33, transparent 72%)">${badgeHTML(f)}<div class="trio">${f.parts.every(hasPic)?f.parts.map(p=>pic(p)).join(""):f.parts.map(p=>miniBottle(p.h)).join("")}</div></div>
    <div class="tinfo"><div class="house">Discovery Kit</div><div class="tname">${esc(f.n)}</div><div class="tacc">${f.parts.map(p=>esc(p.n)).join(" · ")}</div></div></a>
  <div class="tfoot"><span class="tprice"><span class="strike">${money(f.reg)}</span><b>${money(f.sz[0].p)}</b></span>${f.locked?`<span class="tsoon">${f.badge}</span>`:`<button class="tadd" data-id="${f.id}" aria-label="Add ${esc(f.n)} to cart">+ Add</button>`}</div></article>`;
const tile=f=>f.bundle?kitTile(f):`<article class="tile">
  <button class="ic fav tfav ${favs.has(f.n)?"on":""}" data-id="${f.id}" aria-label="${favs.has(f.n)?"Remove from saved":"Save"} ${esc(f.n)}" aria-pressed="${favs.has(f.n)}">${favs.has(f.n)?"♥":"♡"}</button>
  <a class="tlink" href="${urlFor(f)}">
    <div class="tvis ${hasPic(f)?"ph":""}" style="background:radial-gradient(circle at 50% 60%, ${PALETTE[f.h]||"#777"}40, transparent 72%)">${badgeHTML(f)}${pic(f)}</div>
    <div class="tinfo"><div class="house">${esc(f.h)}</div><div class="tname">${esc(f.n)}</div>${f.clone&&INSPIRED[f.n]?`<div class="tinsp">Inspired by ${esc(INSPIRED[f.n].by)}</div>`:`<div class="tacc">${f.acc.slice(0,3).join(" · ")}</div>`}</div>
  </a>
  <div class="tfoot"><span class="tprice">from <b>${money(f.min)}</b></span>${f.locked?`<span class="tsoon">${f.badge}</span>`:`<button class="tadd" data-id="${f.id}" aria-label="Add ${esc(f.n)} ${f.sz[0].s} to cart">+ ${f.sz[0].s}</button>`}</div>
</article>`;
const railHTML=(title,sub,list,href,linkText)=>list.length?`<section class="sect"><div class="wrap shead"><div><h2>${title}</h2>${sub?`<p>${sub}</p>`:""}</div>${href?`<a class="more" href="${href}">${linkText||"See all"} →</a>`:""}</div><div class="vrail">${list.map(tile).join("")}</div></section>`:"";
const seenList=skip=>(store.get("fd_seen")||[]).map(n=>CATALOG.find(f=>f.n===n)).filter(f=>f&&f.n!==skip).slice(0,8);

pageEl.addEventListener("click",e=>{
  const ta=e.target.closest(".tadd"); if(ta){ addToCart(+ta.dataset.id,0); ta.classList.add("done"); const w=ta.textContent; ta.textContent="Added ✓"; setTimeout(()=>{ ta.classList.remove("done"); ta.textContent=w; },1100); return; }
  const tf=e.target.closest(".tfav"); if(tf){ const f=CATALOG[+tf.dataset.id]; toggleFav(f,tf); const on=favs.has(f.n);
    document.querySelectorAll(`.tfav[data-id="${f.id}"]`).forEach(b=>{ b.classList.toggle("on",on); b.textContent=on?"♥":"♡"; b.setAttribute("aria-pressed",on); b.setAttribute("aria-label",(on?"Remove from saved ":"Save ")+f.n); });
    if(PAGE==="shop"){ renderHouses(); if(house==="Saved") renderGrid(); } return; }
  cardClick(e);
});

/* ---- text signup (Netlify Forms, with a text-to-join fallback) ---- */
const signupHTML=big=>`<div class="signup"><div><h2>${big?"Get first dibs by text":"Text alerts"}</h2><p>New arrivals, restocks and subscriber-only deals, a few texts a month. No spam.</p></div>
  <form class="sform" novalidate><div class="row"><input type="text" name="name" placeholder="First name" autocomplete="given-name" aria-label="First name"><input type="tel" name="phone" placeholder="Mobile number" autocomplete="tel" inputmode="tel" aria-label="Mobile number" required></div>
  <label class="ck"><input type="checkbox" name="consent"><span>I agree to receive marketing texts from ${SHOP.name} at this number. Consent isn't a condition of purchase. Msg &amp; data rates may apply. Reply STOP to opt out.</span></label>
  <button type="submit">Sign me up</button><div class="msg" role="status"></div></form></div>`;
document.addEventListener("submit",async e=>{
  const form=e.target.closest(".sform"); if(!form) return; e.preventDefault();
  const name=form.elements.name.value.trim().slice(0,40), d=form.elements.phone.value.replace(/\D/g,"").replace(/^1(?=\d{10}$)/,""), msg=form.querySelector(".msg"), btn=form.querySelector("button");
  const fail=t=>{ msg.className="msg err"; msg.textContent=t; };
  if(d.length!==10) return fail("Please enter a 10-digit US mobile number.");
  if(!form.elements.consent.checked) return fail("Please tick the box so we have your OK to text you.");
  btn.disabled=true; btn.textContent="Signing you up…"; let sent=false;
  try{ const r=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({"form-name":"text-signup",name,phone:d,consent:"yes",page:PAGE}).toString()}); sent=r.ok&&/^https?:$/.test(location.protocol); }catch(err){}
  if(sent){ form.innerHTML=`<div class="msg">You're on the list${name?", "+esc(name):""}. We'll text you from ${SHOP.phone} when something new lands.</div>`; }
  else { btn.disabled=false; btn.textContent="Sign me up"; msg.className="msg"; msg.innerHTML=`One more step: <a href="${smsHref("JOIN"+(name?" - "+name:""))}" style="color:var(--gold2)">tap here to text JOIN to ${SHOP.phone}</a> and you're in.`; }
});

/* ---- shop + clones ---- */
const OCC=Object.keys(OCCASIONS);
const OCC_SUB={"Date Night":"Warm, sweet and magnetic scents made for close company.","Office":"Clean and polished: noticed without being loud.","Gym & Casual":"Light, fresh and easy for everyday wear.","Wedding & Formal":"Elegant scents that dress up with you."};
const OCC_SHORT={"Date Night":"Warm and magnetic","Office":"Clean and polished","Gym & Casual":"Light and easy","Wedding & Formal":"Elegant and dressed-up"};
const SHOP_TABS=["All","New Arrivals","Best Sellers","For Her","Winter Picks",...OCC,"Fresh & Citrus","Warm & Spicy","Sweet & Ambery","Niche","Designer","Under $5","Saved"];
const TAB_SUB={"All":"Every fragrance on the menu, from 2ml testers to 30ml travel sizes.","New Arrivals":"Just landed and landing soon. Anything marked Coming soon opens for orders the day it arrives.","Best Sellers":"The scents customers come back for again and again.","For Her":"Feminine and unisex favorites that make easy gifts.","Winter Picks":"Warm, rich scents built for cold weather.","Fresh & Citrus":"Bright, clean and easy to wear in the heat.","Warm & Spicy":"Spice, woods and amber with real presence.","Sweet & Ambery":"Vanilla, honey and amber: cozy and crowd-pleasing.","Niche":"Small-house perfumery, without the full-bottle price.","Designer":"The big names, in sizes that let you try before you commit.","Under $5":"Decants that start at $5 or less.","Saved":"The scents you hearted.",...OCC_SUB};
let vbrand="";
renderHouses=function(){ if(PAGE!=="shop") return;
  $("#houses").innerHTML=SHOP_TABS.filter(h=>h!=="Saved"||favs.size||house==="Saved").map(h=>`<button class="chip ${h===house?"on":""}" data-h="${h}">${h==="Saved"?"♥ Saved":h}<small>${prods().filter(f=>inTab(h,f)).length}</small></button>`).join("");
  const on=$("#houses .on"), box=$("#houses"); if(on) box.scrollLeft=Math.max(0,on.offsetLeft-box.clientWidth/2+on.offsetWidth/2); };
const hay=f=>(f.n+" "+f.h+" "+f.acc.join(" ")+" "+(f.no.k||[f.no.t,f.no.h,f.no.b].join(" "))+" "+(INSPIRED[f.n]?INSPIRED[f.n].by:"")).toLowerCase();
renderGrid=function(){
  const box=$("#tiles"); if(!box) return;
  const q=$("#q").value.trim().toLowerCase();
  let list=PAGE==="clones"?CATALOG.filter(f=>f.clone):CATALOG.filter(f=>!f.bundle&&((q&&house==="All")||inTab(house,f)));
  if(q) list=list.filter(f=>hay(f).includes(q));
  if(vbrand) list=list.filter(f=>f.h===vbrand);
  const s=$("#sort").value, bs=n=>{ const i=BEST_SELLERS.indexOf(n); return i<0?99:i; };
  list.sort((a,b)=> s==="low"?a.min-b.min : s==="high"?b.min-a.min : s==="az"?(a.h+a.n).localeCompare(b.h+b.n) : (a.locked-b.locked)||(bs(a.n)-bs(b.n))||(a.h+a.n).localeCompare(b.h+b.n));
  if(PAGE==="shop"){
    $("#shopTitle").textContent=vbrand||(house==="All"?"All fragrances":house);
    $("#shopSub").textContent=vbrand?`Every ${vbrand} decant we carry.`:(TAB_SUB[house]||"");
    const hp=[house!=="All"?"c="+encodeURIComponent(house):"",vbrand?"brand="+encodeURIComponent(vbrand):"",q?"q="+encodeURIComponent($("#q").value.trim()):""].filter(Boolean).join("&");
    try{ history.replaceState(null,"",location.pathname+location.search+(hp?"#"+hp:"")); }catch(e){}
  }
  $("#vcount").textContent=`${list.length} fragrance${list.length===1?"":"s"}`+(q?` for “${$("#q").value.trim()}”`:"");
  box.innerHTML=list.length?list.map(tile).join(""):`<p class="none">${house==="Saved"&&!q?"Nothing saved yet. Tap the heart on any fragrance to keep it here.":`Nothing matches that yet. <a href="${smsHref("Hi! Can you get ")}" style="color:var(--gold2)">Text us to request a fragrance</a>.`}</p>`;
};
function readShopHash(){
  const p=new URLSearchParams(location.hash.slice(1)), c=p.get("c"), b=p.get("brand");
  house=SHOP_TABS.includes(c)?c:"All";
  vbrand=b&&[...$("#brandSel").options].some(o=>o.value===b)?b:""; $("#brandSel").value=vbrand;
  $("#q").value=p.get("q")||"";
  return p;
}
function initShop(){
  const hs=[...new Set(prods().filter(f=>!f.clone).map(f=>f.h))].sort((a,b)=>a.localeCompare(b));
  $("#brandSel").innerHTML=`<option value="">All brands</option>`+hs.map(h=>`<option value="${esc(h)}">${esc(h)} (${prods().filter(f=>f.h===h).length})</option>`).join("");
  const p=readShopHash();
  addEventListener("hashchange",()=>{ readShopHash(); renderHouses(); renderGrid(); scrollTo(0,0); });
  $("#brandSel").onchange=()=>{ vbrand=$("#brandSel").value; if(vbrand&&house!=="All"){ house="All"; } renderHouses(); renderGrid(); };
  $("#houses").addEventListener("click",()=>{ if(vbrand){ vbrand=""; $("#brandSel").value=""; renderGrid(); } });
  renderHouses(); renderGrid();
  if(p.has("focus")) setTimeout(()=>$("#q").focus(),50);
}

/* ---- product page ---- */
function related(f,n){
  const w=x=>{ const m={}; x.acc.forEach((a,i)=>m[a]=5-i); return m; }, A=w(f);
  return CATALOG.filter(g=>!g.bundle&&g.id!==f.id&&(f.clone||!g.clone)).map(g=>{ const B=w(g); let s=0; for(const k in A) if(B[k]) s+=A[k]*B[k]; if(g.h===f.h) s+=4; if(!g.locked) s+=3; if(f.clone&&g.clone) s+=6; return {g,s}; }).sort((a,b)=>b.s-a.s).slice(0,n).map(x=>x.g).sort((a,b)=>a.locked-b.locked);
}
function renderProduct(f){
  const seen=(store.get("fd_seen")||[]).filter(n=>n!==f.n); store.set("fd_seen",[f.n,...seen].slice(0,9));
  const tmp=document.createElement("div"); tmp.innerHTML=prodCard(f);
  let vis=tmp.querySelector(".vis").outerHTML;
  if(hasPic(f)){ const v=tmp.querySelector(".vis"); v.querySelector(".vleft").remove(); v.querySelector(".vline").remove(); v.classList.add("nopic");
    vis=`<div class="pdl"><div class="pphoto"><span class="pricefrom">from ${money(f.min)}</span>${badgeHTML(f)}${pic(f,true)}</div>${v.outerHTML}</div>`; }
  const pm=f.sz.map(z=>({s:z.s,v:z.p/parseFloat(z.s)})), lo=pm.reduce((a,b)=>b.v<a.v?b:a), hi=pm[0];
  const has2=f.sz.some(z=>z.s==="2ml");
  pageEl.innerHTML=`<div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a> › <a href="${f.clone?"clones.html":"shop.html"}">${f.clone?"Clones":"Shop"}</a> › <a href="${f.clone?"clones.html":shopUrl("",f.h)}">${esc(f.h)}</a> › ${esc(f.n)}</nav>
    <article class="card pd" data-id="${f.id}">
      ${vis}
      <div class="info">
        <div class="hrow"><div class="house">${esc(f.h)}${f.c?` · ${CONC[f.c]||f.c}`:""}</div>${cardIcons(f)}</div>
        <h1 class="pname">${esc(f.n)}</h1>
        <p class="hook">${f.hk}</p>
        ${FULL[f.n]?`<div class="fb">Full bottle retails for ${money(FULL[f.n][0])} (${FULL[f.n][1]}ml) · try it from ${money(f.min)}</div>`:""}
        <div class="sizes">${f.sz.map((z,i)=>`<button class="size ${i===f.pick?"on":""}" data-i="${i}">${z.s}<small>${money(z.p)}</small></button>`).join("")}</div>
        ${f.sz.length>1&&lo.s!==hi.s?`<p class="permil">Best value: ${lo.s} at ${money(Math.round(lo.v*100)/100)} per ml (${hi.s} is ${money(Math.round(hi.v*100)/100)} per ml).</p>`:""}
        ${addBtn(f)}
        <ul class="perks">
          <li>${CHK}<span><b>100% authentic.</b> Hand-poured from the original bottle into a new atomizer.</span></li>
          <li>${CHK}<span>Ships in ${SHOP.shipDays}. ${money(SHOP.shipFee)} flat, free at ${money(SHOP.freeShipAt)}+, or free local pickup.</span></li>
          ${has2&&!f.locked?`<li>${CHK}<span>Add any three 2ml decants and get 10% off them.</span></li>`:""}
          ${f.locked?`<li>${CHK}<span>${f.badge==="Coming soon"?"This bottle is on its way to us. Tap Notify me and we'll text you the day it lands.":"Sold out for now. Tap Notify me and we'll text you when it's back."}</span></li>`:""}
        </ul>
        <h2>About this scent</h2>
        <p class="pdesc">${f.d}</p>
        ${f.clone?inspLine(f):""}
        ${f.clone&&INSPIRED[f.n]&&INSPIRED[f.n].go&&CATALOG.find(g=>g.n===INSPIRED[f.n].go)?`<p class="sim plinks"><a href="compare.html#a=${slug(f.n)}&b=${slug(INSPIRED[f.n].go)}">Compare it side by side with ${esc(INSPIRED[f.n].go)} →</a></p>`:""}
        ${layerLine(f)}
        <p class="sim plinks"><a href="compare.html#a=${slug(f.n)}">Compare with another scent →</a>${has2&&!f.locked&&!f.clone?`<a href="build.html#p=${slug(f.n)}">Start a trio with this →</a>`:""}</p>
        <p class="sim" style="margin-top:14px">New to decants? <a href="guide.html" style="color:var(--gold2)">See the size guide</a>.</p>
      </div>
    </article></div>
    ${railHTML("You may also like","",related(f,8))}
    ${railHTML("Recently viewed","",seenList(f.n))}`;
}

/* ---- pages ---- */
function renderHomeV2(){
  const cnt=h=>prods().filter(f=>inTab(h,f)).length, nClone=prods().filter(f=>f.clone).length;
  const cats=[["New Arrivals","Just landed and landing soon"],["Best Sellers","What customers reorder"],["For Her","Feminine and unisex favorites"],["Winter Picks","Warm scents for cold nights"],["Niche","Small-house perfumery"],["Designer","The big names"],["Under $5","Easy first tries"]];
  const best=BEST_SELLERS.map(n=>CATALOG.find(f=>f.n===n)).filter(Boolean);
  const fresh=NEW_ARRIVALS.map(n=>CATALOG.find(f=>f.n===n)).filter(f=>f&&!f.clone).sort((a,b)=>a.locked-b.locked);
  const kits=CATALOG.filter(f=>f.bundle).sort((a,b)=>(a.locked-b.locked)||a.sz[0].p-b.sz[0].p);
  const hs=[...new Set(prods().filter(f=>!f.clone).map(f=>f.h))].sort((a,b)=>a.localeCompare(b));
  pageEl.innerHTML=`<div class="wrap vhero"><h1>${SLOGAN}</h1><p>Hand-poured decants of ${prods().length} niche and designer fragrances, from 2ml testers to 30ml travel sizes.</p>
      <div class="cta"><a class="btn gold" href="shop.html">Shop all fragrances</a><a class="btn" href="quiz.html">Find your scent</a></div>
      <div class="trust"><div>${CHK}<span><b>100% authentic</b>Poured from genuine full bottles</span></div><div>${CHK}<span><b>Hand-poured fresh</b>New atomizer, labeled and sealed</span></div><div>${CHK}<span><b>Ships in ${SHOP.shipDays}</b>Or free local pickup</span></div><div>${CHK}<span><b>Free shipping at ${money(SHOP.freeShipAt)}</b>${money(SHOP.shipFee)} flat under that</span></div></div></div>
    <section class="sect"><div class="wrap"><div class="shead"><div><h2>Shop by category</h2></div></div>
      <div class="cats">${cats.map(([h,s])=>`<a class="cat" href="${shopUrl(h)}"><b>${h}</b><span>${s} · ${cnt(h)}</span></a>`).join("")}<a class="cat" href="clones.html"><b>Clones</b><span>Inspired-by alternatives · ${nClone}</span></a></div></div></section>
    <section class="sect"><div class="wrap"><div class="shead"><div><h2>Shop by occasion</h2></div></div>
      <div class="cats occ">${OCC.map(h=>`<a class="cat" href="${shopUrl(h)}"><b>${h}</b><span>${OCC_SHORT[h]} · ${cnt(h)}</span></a>`).join("")}</div></div></section>
    ${railHTML("Best Sellers","The scents customers come back for again and again.",best,shopUrl("Best Sellers"))}
    ${railHTML("New Arrivals","Just landed and landing this week.",fresh,shopUrl("New Arrivals"))}
    ${railHTML("Discovery Kits","Three 2ml decants boxed together for less.",kits,"kits.html","All kits")}
    <div class="wrap"><div class="callout"><p><b>Build your own trio.</b> Pick any three 2ml decants on one screen and 10% comes off automatically.</p><a class="btn gold" href="build.html">Build my trio</a></div></div>
    <section class="sect"><div class="wrap"><div class="shead"><div><h2>How it works</h2></div><a class="more" href="guide.html">Size guide →</a></div>
      <div class="steps"><div><b>Pick your sizes</b><p>Try any scent from 2ml to 30ml. Not sure where to start? Take the quiz or grab a discovery kit.</p></div><div><b>Check out your way</b><p>Pay by card on Square's secure checkout, or choose Zelle and text us your order.</p></div><div><b>We pour and ship</b><p>Hand-poured from authentic bottles and shipped in ${SHOP.shipDays}, or pick up locally for free.</p></div></div></div></section>
    <section class="sect"><div class="wrap"><div class="shead"><div><h2>Shop by brand</h2></div><a class="more" href="brands.html">All brands →</a></div>
      <div class="bchips">${hs.map(h=>`<a class="chip" href="${shopUrl("",h)}">${esc(h)}</a>`).join("")}</div></div></section>
    ${REVIEWS.length?`<section class="sect"><div class="wrap shead"><div><h2>What customers say</h2></div></div><div class="vrail">${REVIEWS.map(r=>`<figure class="rev"><blockquote>“${esc(r.q)}”</blockquote><figcaption>${esc(r.who)}${r.scent?` · <span>${esc(r.scent)}</span>`:""}</figcaption></figure>`).join("")}</div></section>`:""}
    ${railHTML("Recently viewed","",seenList(""))}
    <section class="sect"><div class="wrap">${signupHTML(true)}</div></section>`;
}
function renderKits(){
  const kits=CATALOG.filter(f=>f.bundle).sort((a,b)=>(a.locked-b.locked)||a.sz[0].p-b.sz[0].p);
  pageEl.innerHTML=`<div class="wrap"><div class="shopbar"><h1>Discovery Kits</h1><p class="sub">Three 2ml decants, hand-poured and boxed together for less than buying them one by one. The easiest way to find your next signature, and an easy gift.</p></div>
    <div class="kgrid">${kits.map(bundleCard).join("")}</div>
    <div class="callout"><p><b>Build your own trio.</b> Pick any three 2ml decants on one screen and 10% comes off automatically.</p><a class="btn gold" href="build.html">Build my trio</a></div></div>`;
}
function renderBrands(){ }
function renderBrandsPage(){
  const all=prods().filter(f=>!f.clone), by={}; all.forEach(f=>(by[f.h]=by[f.h]||[]).push(f));
  const grp=(t,test)=>{ const hs=Object.keys(by).filter(test).sort((a,b)=>a.localeCompare(b)); return hs.length?`<section class="sect"><div class="shead"><div><h2>${t}</h2></div></div><div class="bgrid">${hs.map(h=>`<a class="bcard" href="${shopUrl("",h)}"><b>${esc(h)}</b><span>${by[h].length} scent${by[h].length===1?"":"s"} · from ${money(Math.min(...by[h].map(f=>f.min)))}</span></a>`).join("")}</div></section>`:""; };
  const ch=[...new Set(prods().filter(f=>f.clone).map(f=>f.h))].sort();
  pageEl.innerHTML=`<div class="wrap"><div class="shopbar"><h1>Shop by brand</h1><p class="sub">${Object.keys(by).length} houses, every one poured from authentic bottles.</p></div>
    ${grp("Niche houses",h=>NICHE.includes(h))}${grp("Designer houses",h=>!NICHE.includes(h))}
    ${ch.length?`<section class="sect"><div class="shead"><div><h2>Clone houses</h2><p>Inspired-by fragrances, kept on their own page so you always know what you're getting.</p></div></div><div class="bgrid">${ch.map(h=>`<a class="bcard" href="clones.html"><b>${esc(h)}</b><span>${(n=>n+(n===1?" scent":" scents"))(prods().filter(f=>f.h===h).length)}</span></a>`).join("")}</div></section>`:""}</div>`;
}
function renderClones(){
  pageEl.innerHTML=`<div class="wrap"><div class="shopbar"><h1>Clones</h1><p class="sub">Clone houses like ${CLONE_HOUSES.join(" and ")} make their own fragrances inspired by famous, pricier scents. Ours are poured from authentic bottles of those brands, and every listing names the scent it's inspired by. Everything outside this page is the original fragrance.</p></div>
    <p class="count" id="vcount"></p><div class="tiles" id="tiles"></div></div>`;
  renderGrid();
}
function renderQuizPage(){
  pageEl.innerHTML=`<div class="wrap vhero"><h1>Find your scent</h1><p>Seven quick questions about who it's for, when you'll wear it and what you like. We'll match you with three decants to start with.</p>
    <div class="cta"><button class="btn gold" id="quizGo">Start the quiz</button><a class="btn" href="kits.html">Or try a discovery kit</a></div></div>
    ${railHTML("Popular starting points","",BEST_SELLERS.map(n=>CATALOG.find(f=>f.n===n)).filter(Boolean),shopUrl("Best Sellers"))}`;
  $("#quizGo").onclick=openQuiz; openQuiz();
}
function renderAbout(){
  renderInfo(); const html=$("#dbody").innerHTML; $("#dbody").innerHTML=""; $("#dfoot").innerHTML="";
  pageEl.innerHTML=`<div class="wrap prose"><h1 class="ph1">About &amp; FAQ</h1><p class="psub">${SHOP.name} pours authentic niche and designer fragrances into small sizes, so you can wear a scent for a week before you spend full-bottle money on it.</p>${html}
    <div class="info-sec"><h3>Request a fragrance</h3><p>Looking for something we don't carry yet? <a href="${smsHref("Hi! Can you get ")}">Text us the name</a> and we'll tell you if we can bring it in.</p></div>
    <div class="info-sec"><h3>Share the love</h3><p>Send a friend our way. When they order, you both get a free 2ml decant. Just have them mention your name at checkout.</p></div>
    <div class="info-sec">${signupHTML(false)}</div></div>`;
  if(location.hash.length>1){ const el=document.getElementById(location.hash.slice(1)); if(el) setTimeout(()=>el.scrollIntoView({block:"start"}),60); }
}
function renderGuide(){
  const pair=(a,b)=>{ const x=CATALOG.find(f=>f.n===a), y=CATALOG.find(f=>f.n===b); return x&&y?`<li><a href="${urlFor(x)}">${esc(x.n)}</a> + <a href="${urlFor(y)}">${esc(y.n)}</a></li>`:""; };
  pageEl.innerHTML=`<div class="wrap prose"><h1 class="ph1">Decant guide</h1><p class="psub">Everything you need to pick a size, wear it well and make it last.</p>
    <div class="info-sec" id="sizes"><h3>Which size should I get?</h3>
      <table class="sg"><thead><tr><th>Size</th><th>About</th><th>At 3 sprays a day</th><th>Best for</th></tr></thead><tbody>
      <tr><td>2ml</td><td>20 sprays</td><td>About a week</td><td>Testing a new scent</td></tr><tr><td>5ml</td><td>50 sprays</td><td>2–3 weeks</td><td>Wearing it for a while</td></tr>
      <tr><td>10ml</td><td>100 sprays</td><td>About a month</td><td>A scent you already love</td></tr><tr><td>30ml</td><td>300 sprays</td><td>About 3 months</td><td>Your signature, travel-ready</td></tr></tbody></table>
      <p class="note" style="margin-top:8px;font-size:12.5px">Spray counts are approximate. Bigger sizes cost less per ml, and every product page shows the per-ml price.</p></div>
    <div class="info-sec"><h3>What do EDT, EDP and Parfum mean?</h3><p>They describe how concentrated the fragrance oil is. As a rule of thumb, an <b>Eau de Toilette</b> is lighter and fresher, an <b>Eau de Parfum</b> is richer and lasts longer, and a <b>Parfum, Extrait or Elixir</b> is the densest version. It's a guide, not a guarantee: some EDTs outlast some EDPs, which is exactly why trying a decant first makes sense.</p></div>
    <div class="info-sec"><h3>How to make a scent last</h3><ul><li>Spray on moisturized skin. Dry skin lets fragrance fade faster.</li><li>Aim for warm spots: neck, chest and inner elbows.</li><li>Let it dry on its own. Rubbing your wrists together dulls the opening.</li><li>One spray on your shirt or jacket holds scent for hours.</li></ul></div>
    <div class="info-sec"><h3>How to layer two scents</h3><p>Layering means wearing two fragrances together to make something your own. Spray the heavier, sweeter one first and the fresher one on top, one spray each to start. Every product page lists two scents it layers well with. A few pairs to try:</p>
      <ul>${pair("Aventus","Sedley")}${pair("Layton","Althaïr")}${pair("Baccarat Rouge 540 EDP","Delina")}${pair("Naxos","Jazz Club")}</ul></div>
    <div class="info-sec"><h3>How to store a decant</h3><ul><li>Keep it somewhere cool and dark, away from windows and car dashboards.</li><li>Stand it upright with the cap on.</li><li>Stored well, a decant keeps for a long time, but it's made to be worn. Enjoy it.</li></ul></div>
    <div class="info-sec"><h3>Not sure where to start?</h3><p><a href="quiz.html">Take the 7-question quiz</a>, pick up a <a href="kits.html">discovery kit</a>, or browse the <a href="${shopUrl("Best Sellers")}">best sellers</a>.</p></div></div>`;
}
/* ---- build your own trio: any three 2ml decants, 10% off (same Trio deal the cart applies) ---- */
let trio=[];
function renderBuild(){
  const pool=prods().filter(f=>!f.clone&&!f.locked&&f.sz[0].s==="2ml").sort((a,b)=>(a.h+a.n).localeCompare(b.h+b.n));
  const fams=["All","Fresh & Citrus","Warm & Spicy","Sweet & Ambery"]; let fam="All";
  (new URLSearchParams(location.hash.slice(1)).get("p")||"").split(",").forEach(s=>{ const f=pool.find(x=>slug(x.n)===s); if(f&&trio.length<3&&!trio.includes(f.id)) trio.push(f.id); });
  pageEl.innerHTML=`<div class="wrap"><div class="shopbar"><h1>Build your own trio</h1><p class="sub">Pick any three 2ml decants and 10% comes off automatically. Mix houses, mix moods, make it yours.</p>
      <div class="vtools"><input class="search" id="bq" type="search" placeholder="Search by name, brand or note" aria-label="Search fragrances"></div>
      <div class="tabs" id="bfam" role="group" aria-label="Scent family"></div></div>
    <p class="count" id="bcount"></p><div class="bpick" id="bpick"></div>
    <p class="note bnote">Clones count toward the trio deal too: add their 2ml sizes from the <a href="clones.html" style="color:var(--gold2)">Clones page</a>. Want a ready-made set instead? See the <a href="kits.html" style="color:var(--gold2)">Discovery Kits</a>.</p></div>
    <div class="btray" id="btray" role="region" aria-label="Your trio"></div>`;
  const tray=()=>{ const picks=trio.map(id=>CATALOG[id]), reg=picks.reduce((t,f)=>t+f.sz[0].p,0), off=Math.round(reg*SHOP.trioDiscount*100)/100, full=picks.length===3;
    $("#btray").innerHTML=`<div class="wrap btin"><div class="bslots">${[0,1,2].map(i=>picks[i]?`<button class="bslot on" data-rm="${picks[i].id}" aria-label="Remove ${esc(picks[i].n)}"><span>${esc(picks[i].n)}</span><i aria-hidden="true">×</i></button>`:`<span class="bslot">Pick ${i+1}</span>`).join("")}</div>
      <div class="bsum">${full?`<span class="strike">${money(reg)}</span><b>${money(Math.round((reg-off)*100)/100)}</b><small>You save ${money(off)}</small>`:`<b>${picks.length?money(reg):"10% off"}</b><small>${picks.length?`${3-picks.length} more for 10% off`:"when you pick three"}</small>`}</div>
      <button class="btn gold" id="baddall" ${full?"":"disabled"}>${full?"Add trio to cart":`Pick ${3-picks.length} more`}</button></div>`; };
  const grid=()=>{ const q=$("#bq").value.trim().toLowerCase(), list=pool.filter(f=>(fam==="All"||COLLECTIONS[fam](f))&&(!q||hay(f).includes(q)));
    $("#bfam").innerHTML=fams.map(h=>`<button class="chip ${h===fam?"on":""}" data-fam="${h}" aria-pressed="${h===fam}">${h}</button>`).join("");
    $("#bcount").textContent=`${list.length} scent${list.length===1?"":"s"} to choose from`;
    $("#bpick").innerHTML=list.length?list.map(f=>{ const on=trio.includes(f.id); return `<button class="ptile ${on?"on":""}" data-pick="${f.id}" aria-pressed="${on}" ${!on&&trio.length>=3?'aria-disabled="true"':""}>
      <span class="pb" style="background:radial-gradient(circle at 50% 60%, ${PALETTE[f.h]||"#777"}40, transparent 72%)">${pic(f)}</span>
      <span class="pt"><small>${esc(f.h)}</small><b>${esc(f.n)}</b><i>${f.acc.slice(0,3).join(" · ")}</i></span>
      <span class="pp">${money(f.sz[0].p)}</span><span class="pk" aria-hidden="true">${on?"✓":"+"}</span></button>`; }).join(""):`<p class="none">Nothing matches that. Try a different word.</p>`; };
  $("#bq").oninput=grid;
  $("#bfam").onclick=e=>{ const b=e.target.closest("[data-fam]"); if(!b) return; fam=b.dataset.fam; grid(); };
  $("#bpick").onclick=e=>{ const b=e.target.closest("[data-pick]"); if(!b) return; const id=+b.dataset.pick, i=trio.indexOf(id);
    if(i>=0) trio.splice(i,1); else if(trio.length>=3){ toast("Your trio is full. Remove one to swap it."); return; } else trio.push(id);
    grid(); tray(); };
  $("#btray").onclick=e=>{ const r=e.target.closest("[data-rm]"); if(r){ trio=trio.filter(id=>id!==+r.dataset.rm); grid(); tray(); return; }
    if(e.target.closest("#baddall")&&trio.length===3){ trio.forEach(id=>{ const ex=cart.find(c=>c.id===id&&c.si===0); if(ex) ex.q=Math.min(20,ex.q+1); else cart.push({id,si:0,q:1}); });
      trio=[]; updateBadge(); grid(); tray(); toast("Trio added. 10% off is applied in your cart."); openDrawer("cart"); } };
  grid(); tray();
}

/* ---- compare two scents side by side ---- */
function renderCompare(){
  const all=prods(), find=s=>all.find(f=>slug(f.n)===s), p=new URLSearchParams(location.hash.slice(1));
  let A=find(p.get("a"))||CATALOG.find(f=>f.n===BEST_SELLERS[0])||all[0], B=find(p.get("b"));
  if(!p.get("a")&&!B) B=CATALOG.find(f=>f.n===BEST_SELLERS[1]);
  if(!B||B===A) B=related(A,8).find(g=>!g.locked&&g!==A)||all.find(f=>f!==A);
  const opts=sel=>{ const hs=[...new Set(all.filter(f=>!f.clone).map(f=>f.h))].sort((a,b)=>a.localeCompare(b)), o=f=>`<option value="${slug(f.n)}" ${f===sel?"selected":""}>${esc(f.n)}</option>`;
    return hs.map(h=>`<optgroup label="${esc(h)}">${all.filter(f=>f.h===h).map(o).join("")}</optgroup>`).join("")+`<optgroup label="Clones">${all.filter(f=>f.clone).map(o).join("")}</optgroup>`; };
  const wear=f=>STRONG.includes(f.n)?"Bold and long-lasting":SOFT.includes(f.n)?"Soft, close to the skin":"Moderate, easy to wear";
  const occ=f=>{ const o=OCC.filter(k=>OCCASIONS[k].includes(f.n)); if(WINTER.includes(f.n)) o.push("Winter"); return o.length?o.join(", "):"Everyday wear"; };
  const draw=()=>{
    const shared=A.acc.filter(a=>B.acc.includes(a)), cheap=A.min===B.min?null:(A.min<B.min?A:B);
    const head=f=>`<div class="ccol chead"><a class="cvis ${hasPic(f)?"ph":""}" href="${urlFor(f)}" style="background:radial-gradient(circle at 50% 60%, ${PALETTE[f.h]||"#777"}40, transparent 72%)" aria-label="${esc(f.n)}">${f.badge?`<span class="badge2 ${f.badge==="Sold out"?"out":f.badge==="Coming soon"?"soon":""}">${f.badge}</span>`:""}${pic(f)}</a>
      <div class="house">${esc(f.h)}</div><a class="cname" href="${urlFor(f)}">${esc(f.n)}</a><p class="chook">${f.hk}</p>${f.clone&&INSPIRED[f.n]?`<p class="cinsp">Inspired by ${esc(INSPIRED[f.n].by)}</p>`:""}</div>`;
    const row=(lab,fn)=>`<div class="clab">${lab}</div><div class="ccol">${fn(A)}</div><div class="ccol">${fn(B)}</div>`;
    const prices=f=>`<table class="cpr">${f.sz.map(z=>`<tr><td>${z.s}</td><td><b>${money(z.p)}</b></td><td>${money(Math.round(z.p/parseFloat(z.s)*100)/100)}/ml</td></tr>`).join("")}</table>`;
    $("#cmp").innerHTML=`<p class="csum">${shared.length?`<b>In common:</b> ${shared.join(", ")}.`:"<b>No main accords in common</b>, so they wear very differently."}${cheap?` <b>Cheaper to try:</b> ${esc(cheap.n)} (2ml from ${money(cheap.min)}).`:""}</p>
      <div class="cgrid">${head(A)}${head(B)}
      ${row("Type",f=>`${f.c?(CONC[f.c]||f.c):"Fragrance"}${f.clone?" · clone":NICHE.includes(f.h)?" · niche":" · designer"}`)}
      ${row("Main accords",f=>`<div class="acc">${f.acc.map((a,i)=>`<div class="bar ${shared.includes(a)?"sh":""}" style="width:${[100,88,76,66,58][i]}%;background:${accColor(a)}">${a}</div>`).join("")}</div>`)}
      ${row("Top notes",f=>esc(f.no.t||f.no.k||"—"))}${row("Heart notes",f=>esc(f.no.h||"—"))}${row("Base notes",f=>esc(f.no.b||"—"))}
      ${row("How it wears",wear)}${row("Good for",occ)}
      ${row("Decant prices",prices)}
      ${row("Full bottle",f=>FULL[f.n]?`${money(FULL[f.n][0])} for ${FULL[f.n][1]}ml`:"—")}
      <div class="ccol cact">${cact(A)}</div><div class="ccol cact">${cact(B)}</div></div>`;
    try{ history.replaceState(null,"",location.pathname+location.search+`#a=${slug(A.n)}&b=${slug(B.n)}`); }catch(e){}
  };
  const cact=f=>f.locked?`<span class="tsoon">${f.badge}</span><a class="clink" href="${urlFor(f)}">View details</a>`:`<button class="tadd" data-id="${f.id}" aria-label="Add ${esc(f.n)} ${f.sz[0].s} to cart">+ ${f.sz[0].s} · ${money(f.sz[0].p)}</button><a class="clink" href="${urlFor(f)}">View details</a>`;
  pageEl.innerHTML=`<div class="wrap"><div class="shopbar"><h1>Compare two scents</h1><p class="sub">Accords, notes and prices side by side, so you can pick the one to try first. Or try both.</p>
      <div class="cpick"><select class="sel" id="cA" aria-label="First fragrance">${opts(A)}</select><button class="cswap" id="cSwap" aria-label="Swap the two fragrances">⇄</button><select class="sel" id="cB" aria-label="Second fragrance">${opts(B)}</select></div></div>
    <div id="cmp"></div></div>`;
  const pickNew=(which,s)=>{ const f=find(s); if(!f) return; if(which==="A"){ if(f===B) B=A; A=f; } else { if(f===A) A=B; B=f; } $("#cA").value=slug(A.n); $("#cB").value=slug(B.n); draw(); };
  $("#cA").onchange=e=>pickNew("A",e.target.value); $("#cB").onchange=e=>pickNew("B",e.target.value);
  $("#cSwap").onclick=()=>{ [A,B]=[B,A]; $("#cA").value=slug(A.n); $("#cB").value=slug(B.n); draw(); };
  draw();
}
function renderNotFound(){
  pageEl.innerHTML=`<div class="wrap vhero"><h1>That page wandered off</h1><p>The link may be old, or the scent may have moved. Everything we pour is one tap away.</p>
    <div class="cta"><a class="btn gold" href="shop.html">Shop all fragrances</a><a class="btn" href="index.html">Back to home</a></div></div>${railHTML("Best Sellers","",BEST_SELLERS.map(n=>CATALOG.find(f=>f.n===n)).filter(Boolean),shopUrl("Best Sellers"))}`;
}

/* ---- chrome: menu, tab bar, badges ---- */
const NAV=[["Shop","shop.html","shop"],["Brands","brands.html","brands"],["Kits","kits.html","kits"],["Clones","clones.html","clones"],["Guide","guide.html","guide"],["About","about.html","about"]];
$("#mainnav").innerHTML=NAV.map(([t,u,p])=>`<a href="${u}" class="${p===PAGE?"on":""}"${p===PAGE?' aria-current="page"':""}>${t}</a>`).join("");
$("#menuList").innerHTML=`<h3>Shop</h3><a href="shop.html">All fragrances<small>${prods().filter(f=>!f.clone).length}</small></a>`+["New Arrivals","Best Sellers","For Her","Winter Picks","Niche","Designer","Under $5"].map(h=>`<a href="${shopUrl(h)}">${h}<small>${prods().filter(f=>inTab(h,f)).length}</small></a>`).join("")+
  `<a href="kits.html">Discovery Kits<small>${CATALOG.filter(f=>f.bundle).length}</small></a><a href="build.html">Build your own trio<small>10% off</small></a><a href="clones.html">Clones<small>${prods().filter(f=>f.clone).length}</small></a><a href="brands.html">Shop by brand</a><a href="${shopUrl("Saved")}">♥ Saved<small>${favs.size}</small></a>
   <h3>By occasion</h3>${OCC.map(h=>`<a href="${shopUrl(h)}">${h}<small>${prods().filter(f=>inTab(h,f)).length}</small></a>`).join("")}
   <h3>Help</h3><a href="quiz.html">Find your scent quiz</a><a href="compare.html">Compare two scents</a><a href="guide.html">Decant guide</a><a href="about.html">About &amp; FAQ</a><a href="${smsHref("")}">Text us · ${SHOP.phone}</a><a href="https://instagram.com/fragtiondecants" target="_blank" rel="noopener">Instagram · @fragtiondecants</a>`;
const menu=$("#menu"), menuBtn=$("#menuBtn");
const setMenu=on=>{ menu.classList.toggle("on",on); menuBtn.setAttribute("aria-expanded",on); document.documentElement.style.overflow=on?"hidden":""; };
menuBtn.onclick=()=>setMenu(!menu.classList.contains("on")); $("#menuClose").onclick=()=>setMenu(false);
addEventListener("keydown",e=>{ if(e.key==="Escape"&&menu.classList.contains("on")) setMenu(false); });
document.querySelectorAll(".tabbar [data-p]").forEach(a=>{ if(a.dataset.p===PAGE||(a.dataset.p==="shop"&&["product","clones","brands","compare"].includes(PAGE))||(a.dataset.p==="kits"&&PAGE==="build")) a.classList.add("on"); });
$("#tabCart").onclick=()=>openDrawer("cart");
$("#openInfo").onclick=()=>{ location.href="about.html"; };
const _ub=updateBadge; updateBadge=function(){ _ub(); const n=itemCount(), tb=$("#tabBadge"); tb.textContent=n; tb.dataset.n=n; };
if(!["home","about"].includes(document.body.dataset.page)) $("#signupFoot").innerHTML=signupHTML(false);

/* ---- boot ---- */
const paidBack=/[?&]paid=1\b/.test(location.search);
if(paidBack&&store.get("fd_paying")){ store.set("fd_cart",[]); store.set("fd_paying",0); }
loadCart();
if(PAGE==="home"&&location.hash.length>1){ const h=decodeURIComponent(location.hash.slice(1)), old=CATALOG.find(x=>!x.bundle&&slug(x.n)===h); if(old) location.replace(urlFor(old)); }
const itemF=ITEM?CATALOG.find(f=>f.n===ITEM):null;
({ home:renderHomeV2, shop:initShop, kits:renderKits, build:renderBuild, compare:renderCompare, clones:renderClones, brands:renderBrandsPage, quiz:renderQuizPage, about:renderAbout, guide:renderGuide, product:()=>itemF?renderProduct(itemF):renderNotFound(), notfound:renderNotFound }[PAGE]||renderNotFound)();
updateBadge();
if(paidBack){ try{ history.replaceState(null,"",location.pathname); }catch(e){} openDrawer("paid"); }
