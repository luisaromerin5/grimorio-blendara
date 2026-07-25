const fs = require('fs');
const path = require('path');

const ELEMENTS_FILE = path.join(__dirname, 'data', 'elements.json');
const elements = JSON.parse(fs.readFileSync(ELEMENTS_FILE, 'utf8'));

const translations = {
  1: {
    body_benefits_en: 'Chamomile is one of the most versatile and safest herbs in existence. Its anti-inflammatory and antispasmodic power makes it ideal for digestive issues like colic, gastritis, and indigestion. It is a gentle sedative that relieves insomnia and anxiety without creating dependency. Applied externally, it soothes skin irritations, eczema, and minor burns. It is also wonderful for tired or inflamed eyes (cold compresses).',
    spiritual_benefits_en: 'Chamomile is the herb of PEACE and PROSPERITY. It attracts financial abundance — it is said that washing your hands with chamomile tea before gambling brings luck. It calms agitated energy in the home, dissolves arguments. It promotes peaceful dreams and helps release accumulated emotional stress.',
    uses_en: 'Tea: 1 tablespoon dried flowers in hot water, 5-10 min. For digestion, calm, and sleep.\nCleansing bath: A generous handful of flowers in warm water. To attract peace and abundance.\nFacial steam: Flowers in boiling water, steam over face for 10 min. For sensitive skin and relaxation.\nCompress: Cold tea bags over puffy eyes.',
    precautions_en: 'May cause allergic reaction in people sensitive to the Asteraceae family (sunflowers, daisies, ragweed).'
  },
  2: {
    body_benefits_en: 'Calendula is the GREAT SKIN HEALER. Its wound-healing, antifungal, and anti-inflammatory properties make it a first-choice medicine for wounds, minor burns, dermatitis, baby rashes, and cracked skin. Internally (in moderate doses), it supports feminine health by regulating the menstrual cycle and relieving cramps.',
    spiritual_benefits_en: 'The solar flower par excellence, calendula brings PROTECTION and VISION. Placed under the bed, it induces prophetic dreams that reveal hidden truths. On the threshold of your home or window, it acts as a solar guardian that blocks negative energies. In legal matters, it attracts justice in your favor.',
    uses_en: 'Infused oil: Dried flowers in olive/almond oil for 4-6 weeks. For all skin conditions.\nGentle tea: A few flowers in hot water. For internal inflammation and menstrual regulation.\nCleansing bath: With fresh or dried flowers for solar protection, vitality, and confidence.\nPoultice: Crushed flowers directly on minor wounds.',
    precautions_en: 'Do not ingest during pregnancy (may stimulate uterine contractions).'
  },
  3: {
    body_benefits_en: 'Mint is INSTANT AWAKENING. An excellent digestive that relieves nausea, gas, irritable bowel syndrome, and stomach pain. As a decongestant, it opens airways instantly. It is a mild analgesic for headaches (applied to temples diluted in oil). It refreshes and energizes without caffeine.',
    spiritual_benefits_en: 'Herb of OPEN PATHS and PROSPERITY. Mint attracts money — placing fresh leaves in your wallet or a business cash register invites customers and sales. It awakens the mind for clear communication. It clears the blockages that prevent progress and clarity of thought.',
    uses_en: 'Tea: Fresh or dried leaves in hot water. For digestion, freshness, and energy.\nSteam: Leaves in boiling water, inhale vapor. For nasal congestion and mental clarity.\nCleansing bath: Abundant leaves to open paths, attract abundance, and refresh energy.\nTopical: Diluted essential oil on temples for headaches.',
    precautions_en: 'Avoid pure essential oil on children under 3 years (may cause respiratory spasm). Moderate during breastfeeding.'
  },
  4: {
    body_benefits_en: 'Mullein is the GUARDIAN OF THE LUNGS. Its expectorant and demulcent action makes it indispensable for chronic cough, bronchitis, asthma, chest congestion, and sore throat. It soothes and protects the mucous membranes of the respiratory system. It also has anti-inflammatory properties for ears (infused flower oil).',
    spiritual_benefits_en: 'Plant of COURAGE and ANCESTRAL PROTECTION. In ancient times, dried leaves were used as torch wicks — they illuminated the path in darkness, literally and symbolically. It drives away nightmares, banishes negative spirits, and gives courage to face the unknown. It is the plant of the spiritual warrior.',
    uses_en: 'Tea: Dried leaves in hot water, ALWAYS strain with fine cloth (the tiny hairs irritate the throat). For the entire respiratory system.\nSteam: Leaves in boiling water to open congested lungs.\nFlower oil: Fresh flowers in olive oil in the sun for 2 weeks. For ear pain (warm drops).\nSmudge: Dried leaves burned for space protection.',
    precautions_en: 'ALWAYS strain with a cloth filter — the microscopic leaf hairs can severely irritate the throat if not filtered out.'
  },
  5: {
    body_benefits_en: 'Sage is FEMININE MEDICINE par excellence. It regulates hormones, relieves menopausal hot flashes, and reduces excessive sweating. It is a potent antiseptic — sage gargles heal sore throats and oral infections. It also improves memory and cognitive function (studies support this).',
    spiritual_benefits_en: 'The MASTER OF ENERGY CLEANSING. There is no plant more recognized worldwide for purifying spaces, people, and objects. Sage smoke breaks stagnant energies, clears accumulated negativity, and completely renews the vibration of a space. Used when moving into a new home, after arguments, or when something "feels heavy."',
    uses_en: 'Smudge: Bundle of dried leaves lit, letting the smoke travel throughout the space.\nTea: For throat, hormonal regulation, and memory (not in excess).\nGargle: Concentrated infusion for oral infections and sore throat.\nCleansing bath: To cut energetic ties and completely renew the aura.',
    precautions_en: 'Do not use excessively during pregnancy or breastfeeding (reduces milk production). White sage (S. apiana) is sacred to Indigenous peoples of North America — use with respect and cultural awareness.'
  },
  6: {
    body_benefits_en: 'Rosemary is CIRCULATION AND MEMORY. It stimulates blood flow, improves concentration and memory retention (Greek students used it while studying). It relieves muscle and joint pain, stimulates hair growth and strengthens hair. It is a potent antioxidant that protects cells from aging.',
    spiritual_benefits_en: 'PROTECTION, PURIFICATION, and REMEMBRANCE. Rosemary protects the home with the same strength as sage — hung on the door, it blocks negative energy. It is used in funerals to remember those who have passed. It strengthens fidelity in relationships and clears the mind for making sound decisions.',
    uses_en: 'Tea: A sprig in hot water for circulation, digestion, and memory.\nRosemary water: Concentrated infusion for hair rinse (strengthens and adds shine).\nCleansing bath: For protection, mental clarity, and inner strength.\nSteam: For concentration and study, opening the mind.\nSmudge: Dried branches burned to purify just like sage.',
    precautions_en: 'Avoid high doses during pregnancy. Do not ingest essential oil. People with epilepsy should use with caution.'
  },
  7: {
    body_benefits_en: 'Hibiscus is a HEALTHY HEART. Studies show it naturally reduces blood pressure, lowers LDL cholesterol, and is rich in antioxidants and vitamin C. It is diuretic (reduces fluid retention), supports weight loss, and protects the liver. Its intense red color signals its richness in anthocyanins.',
    spiritual_benefits_en: 'Flower of SELF-LOVE, PASSION, and the DIVINE FEMININE. It opens the heart to receive and give love. Used in work of sacred sensuality, self-esteem, and to attract passionate relationships. It connects with the energy of Venus and the feminine creative power.',
    uses_en: 'Tea/Fresh water: Dried flowers in hot or cold water. For cardiovascular health and freshness.\nCleansing bath: Flowers in warm water for self-love, self-esteem, and attracting romance.\nFacial steam: For radiant, luminous skin — the antioxidants rejuvenate.\nSelf-love potion: Hibiscus tea with honey and cinnamon, drunk with intention.',
    precautions_en: 'May lower blood pressure excessively in people who are already hypotensive. Interacts with antihypertensive medications — consult your doctor.'
  },
  8: {
    body_benefits_en: 'Rue has antispasmodic properties and is an emmenagogue (stimulates menstruation). For external use, it works as an insect repellent and has antimicrobial action. Historically it was used to relieve joint pain and as a nerve tonic in minimal doses.',
    spiritual_benefits_en: 'The ABSOLUTE QUEEN OF PROTECTION in Latin American tradition. There is no more powerful plant for breaking the evil eye, envy, witchcraft, and sent negative energy. When a rue plant in your home dries up for no reason, it is said it "took away" something negative directed at you. It is the tireless guardian.',
    uses_en: 'Bundle behind the door: For permanent home protection.\nCleansing bath: Fresh branches in water to break envy, evil eye, and negative ties.\nRue water: To cleanse businesses and attract customers (mop with it).\nSmudge: Dried leaves burned to banish dark energies.\nLive plant: At the entrance of the home as an energetic guardian.',
    precautions_en: 'TOXIC for internal use. NEVER ingest during pregnancy — it is ABORTIVE. Use only externally or in extremely minimal amounts under supervision. May cause severe photosensitivity on skin (dermatitis with sun exposure). This is powerful medicine that demands respect.'
  },
  9: {
    body_benefits_en: 'Mugwort is LUNAR FEMININE MEDICINE. It regulates the menstrual cycle, relieves cramps and menstrual pain, stimulates digestion, and is antiparasitic. In Chinese medicine, it is the basis of moxibustion (a heat technique in acupuncture). It calms the nerves and relaxes the nervous system.',
    spiritual_benefits_en: 'The PLANT OF DREAMS AND INNER VISION. There is no herb more associated with lucid and prophetic dreams. It opens the door between the conscious and unconscious world. It enhances intuition, activates the third eye, and facilitates astral travel. It has been the companion of witches, seers, and dreamers since ancient times.',
    uses_en: 'Sachet under the pillow: Dried leaves in a cloth bag for lucid dreams.\nTea before bed: A light infusion to induce prophetic dreams and visions (one cup 30 min before).\nSmudge: To open intuitive portals and cleanse before divination rituals.\nCleansing bath: To connect with the divine feminine and awaken dormant intuition.',
    precautions_en: 'Do not use during pregnancy (it is an emmenagogue). Do not consume in prolonged excess. May intensify dreams — people with nighttime anxiety should start with very low doses.'
  },
  10: {
    body_benefits_en: 'Lavender is LIQUID PEACE. Its anxiolytic effect is backed by multiple studies — it reduces cortisol, lowers heart rate, and induces real relaxation. It relieves insomnia, tension headaches, and minor burns (one of the few essential oils that can be used directly on skin for burns). It is antiseptic and a gentle cicatrizant.',
    spiritual_benefits_en: 'HARMONY, PEACEFUL LOVE, and GENTLE PURIFICATION. Lavender calms arguments, harmonizes the aura after conflicts, and attracts relationships based on peace and mutual respect. It is the herb of sacred rest — remember that rest is also spiritual.',
    uses_en: 'Tea: Dried flowers in hot water for anxiety, insomnia, and general calm.\nEssential oil: In a diffuser for ambiance, on pillow for sleep, diluted for burns.\nCleansing bath: For deep emotional peace after difficult periods.\nSteam: To calm an agitated mind and meditate.\nSachets: In clothing drawers, under the pillow, in the car.',
    precautions_en: 'Generally very safe. Essential oil in excessive doses may have estrogenic effects; caution in prepubescent children with prolonged use.'
  },
  11: {
    body_benefits_en: 'Rose is BEAUTY FROM WITHIN. It is a gentle astringent that tones skin, reduces redness, and balances facial oil production. Rosehip (the fruit of the rose) is extremely rich in vitamin C and regenerates skin. Internally, petals in tea calm anxiety and support emotional heart health.',
    spiritual_benefits_en: 'LOVE IN ITS HIGHEST FORM. The rose vibrates at the highest frequency of love — self-love, romantic love, divine love, and universal compassion. It instantly elevates the vibration of any space. It connects with the divine feminine in all traditions. It is the universal offering that all benevolent energies accept.',
    uses_en: 'Rose water: For facial toner, love rituals, and cleansing altars.\nPetal tea: To calm the heart, anxiety, and open receptivity to love.\nCleansing bath: Petals in warm water for self-love, heart healing, and attracting romance.\nFacial steam: For radiant, luminous, youthful skin.\nOffering: Petals on the altar, in offering water, or scattered in ritual.',
    precautions_en: 'ALWAYS use organic/untreated roses for internal consumption or skin use. Florist roses are loaded with pesticides.'
  },
  12: {
    body_benefits_en: 'Arnica is the BRUISE HEALER. Its anti-inflammatory and analgesic power is exceptional for bruises, hematomas, post-trauma swelling, intense muscle pain, sprains, and joint pain. It accelerates recovery after surgeries and notably reduces visible inflammation.',
    spiritual_benefits_en: 'Plant of RESILIENCE AND RECOVERY. Just as it heals physical blows, arnica energetically helps heal the "blows of life" — traumas, disappointments, emotional falls. It strengthens the inner warrior spirit and the ability to rise after every fall.',
    uses_en: 'Oil/Topical cream: Apply over bruises, muscle pain, and inflammation (only on intact skin).\nCompress: Warm infusion applied with cloth over inflamed areas.\nFoot bath: For extreme tiredness and heavy legs.\nPoultice: For fresh bruises and blows.',
    precautions_en: 'EXTERNAL USE ONLY. It is toxic if ingested. NEVER apply on open wounds or broken skin. Do not use near eyes or mucous membranes. Internal use only in homeopathic form under professional supervision.'
  },
  13: {
    body_benefits_en: 'Lemon Balm is DEEP CALM. Its calming effect is gentle but effective — it reduces anxiety, improves sleep, and calms a racing heart. It is a POTENT ANTIVIRAL, especially against herpes simplex (cold sores and genital). It relieves digestive colic, spasms, and overactive thyroid problems.',
    spiritual_benefits_en: 'Herb of the HEALED HEART and SWEETNESS. It attracts true friendships and genuine relationships. It soothes grief, deep sadness, and the broken heart. It brings success without aggression — the type of prosperity that arrives with softness and grace.',
    uses_en: 'Tea: Fresh or dried leaves in hot water. For calm, digestion, and as a daily antiviral.\nCompress: Concentrated infusion applied on cold sore outbreaks (several times daily).\nSteam: For deep emotional calm and meditation.\nCleansing bath: To heal the heart after losses, breakups, or grief.\nSachets: To attract genuine love and loyal friendships.',
    precautions_en: 'May interfere with thyroid medications (especially levothyroxine). Consult your doctor if you take thyroid medication.'
  }
};

const translations2 = {
  14: {
    body_benefits_en: 'Eucalyptus is FREE BREATHING. It is the most powerful natural decongestant that exists. It opens airways instantly, fights sinusitis, bronchitis, colds, and flu. It is antiseptic, febrifuge (lowers fever), and expectorant. An indispensable ally during cold season.',
    spiritual_benefits_en: 'HEALING and ENERGETIC RENEWAL. Eucalyptus cleanses the energy of illness — both physical and energetic. It is used to "cleanse" someone who has been sick or in contact with sick people. It renews the vitality of spaces that feel stagnant or "dead."',
    uses_en: 'Steam/Vaporization: Leaves in boiling water, inhale with towel over head. For severe congestion.\nCleansing bath: To cleanse illness energy and renew vitality.\nSmudge: Dried leaves burned to purify closed spaces (especially sick rooms).\nChest oil: Diluted in carrier oil, rub on chest for better breathing.\nIn the shower: A eucalyptus bundle hung in the shower — the steam releases its oils.',
    precautions_en: 'Do not apply pure essential oil on the face of children under 3 years. Do not ingest essential oil. People with severe asthma should use with caution (may be counterproductive).'
  },
  15: {
    body_benefits_en: 'Jasmine is SENSUALITY AND CALM. Its aroma is a natural antidepressant that elevates mood and reduces anxiety. It has antispasmodic properties and has been used in feminine health to facilitate childbirth and relieve menstrual pain. It improves sleep quality and relaxes deep nervous tension.',
    spiritual_benefits_en: 'DIVINE LOVE and SACRED MOON. Jasmine attracts true love and kindred souls — not just any love, but the one that is destined. It is the flower of the moon and the night. It elevates spiritual vibration, awakens feminine intuition, and connects with sacred sensuality. The moon\'s preferred offering.',
    uses_en: 'Essential oil: For love rituals, sacred seduction, and self-esteem (in diffuser or diluted on skin).\nGentle tea: Flowers in hot water to calm nerves and elevate mood.\nCleansing bath: To attract true love, awaken intuition, and connect with lunar energy.\nMoon offering: Fresh flowers in water under the full moon.\nOn the pillow: Dried flowers for prophetic dreams about love.',
    precautions_en: 'Pure essential oil is very expensive — distrust options that are too cheap (probably synthetic). Do not ingest essential oil. For spiritual use, always prefer natural.'
  },
  16: {
    body_benefits_en: 'Cinnamon is HEALING FIRE. It regulates blood sugar (helps type 2 diabetics), is a potent antimicrobial, stimulates circulation, warms the body from within, improves digestion, and has thermogenic action (speeds metabolism). It is antioxidant and strengthens the immune system.',
    spiritual_benefits_en: 'Cinnamon is INSTANT ABUNDANCE and ACCELERATION. It is the spice that most quickly attracts money and prosperity. It accelerates ANY spiritual work — add cinnamon and everything works faster. It ignites passion, attracts business success, and opens doors of opportunity. The best-known ritual: blow cinnamon powder toward the inside of your door on the first day of each month.',
    uses_en: 'Tea: Stick or powder in hot water for circulation, digestion, and inner warmth.\nFirst-of-the-month ritual: Blow cinnamon powder from outside toward the inside of your front door every month.\nCleansing bath: For abundance, success, and igniting passion.\nSmudge: Sticks burned to activate a space\'s energy and attract prosperity.\nIn your wallet: Powder in a small paper to attract money.',
    precautions_en: 'CASSIA cinnamon (the most common and cheapest) contains coumarin that can damage the liver in excessive use. Prefer CEYLON cinnamon for frequent consumption. May irritate skin in high concentration.'
  },
  17: {
    body_benefits_en: 'Cloves are NATURAL ANALGESIA. They contain eugenol, one of the most potent natural analgesics — the classic remedy for toothaches. They are antiseptic, intestinal antiparasitic, improve digestion, and strengthen the immune system. They have antifungal properties that fight candida.',
    spiritual_benefits_en: 'Cloves are the GOSSIP SILENCER and the PROSPERITY MAGNET. Cloves are chewed to "close mouths" — to silence people who speak ill of you. They protect against declared envy. Combined with cinnamon, it is one of the most powerful mixtures for attracting money and abundance.',
    uses_en: 'Tea: 3-4 cloves in hot water for digestion and parasites (no more, it\'s very strong).\nToothache: Whole clove or clove oil applied directly on the aching tooth.\nCleansing bath: To cut gossip, silence enemies, and protect your reputation.\nSmudge with cinnamon: For abundance and dual protection.\nIn your wallet: 3 cloves to attract constant money.',
    precautions_en: 'The essential oil is VERY concentrated — always dilute for topical use. May irritate the stomach in excess. Do not use clove oil prolongedly on gums (can damage tissue).'
  },
  18: {
    body_benefits_en: 'Elderberry is POWERFUL IMMUNITY. It is one of the most studied natural antivirals — it significantly reduces the duration and severity of flu and colds. Rich in vitamin C, antioxidants, and flavonoids. It strengthens the immune system both preventively and actively.',
    spiritual_benefits_en: 'Elderberry is the ANCESTRAL TREE of protection. In European tradition, it is known as "the witch\'s tree" — a magical tree that connects with earth spirits and ancestors. Planting an elder in the garden protects the entire house. It has the energy of the wise grandmother who protects and heals everything.',
    uses_en: 'Syrup: Berries cooked with honey and spices. Take daily for immunity (especially in fall/winter).\nTea: Dried berries (always cooked first) for colds and immune strengthening.\nCleansing bath: For ancestral protection and connection with the wisdom of the elders.\nOffering: To the guardian spirits of home and family.',
    precautions_en: 'RAW berries are TOXIC (contain cyanogenic glycosides). ALWAYS cook before consuming. Raw leaves, bark, and seeds are toxic — do not ingest. Only use ripe (black/purple) cooked berries, or the flowers.'
  },
  19: {
    body_benefits_en: 'Lemon is DETOXIFICATION AND VITALITY. It alkalizes the body (paradoxically, despite being acidic), supports the liver in its purifying function, is rich in vitamin C, antibacterial, and improves iron absorption. It stimulates digestion, clears skin, and strengthens general immunity.',
    spiritual_benefits_en: 'Lemon is RADICAL CUT AND CLEANSING. It is the fruit that "absorbs" and neutralizes negative energy like a sponge. Used to detect envy (it is cut open and "read"), to cut negative ties, and to cleanse the aura of others\' burdens. A lemon rolled over the body "sweeps" all negativity.',
    uses_en: 'Lemon water: On an empty stomach for daily body detoxification.\nCleansing bath: Lemon juice in water to cut all negativity at the root.\nHome cleansing: Cut lemons in the corners of the house to absorb negative energy (change every 7 days).\nSteam with peel: Grated peel in hot water for clarity and renewal.\nReading: Cut a lemon after passing it over the body — its state reveals the energy it absorbed.',
    precautions_en: 'May erode dental enamel with excessive use (drink with a straw). Juice on skin + sun exposure causes SEVERE BURNS (phytophotodermatitis). Wash hands well after handling if you will be exposed to sun.'
  },
  20: {
    body_benefits_en: 'Oats are NUTRITION AND RESTORATION. An exceptional emollient for skin — it soothes eczema, dermatitis, dry and irritated skin (colloidal oat baths are recognized medicine). Internally, it nourishes the nervous system, reduces cholesterol, stabilizes blood sugar, and provides fiber and sustained energy.',
    spiritual_benefits_en: 'Oats represent EARTHLY ABUNDANCE and STABILITY. They attract sustenance — not sudden wealth, but the constant, secure prosperity of food that never runs out. They connect with gratitude toward the earth and all it provides. They are grounding: they anchor you when you feel unstable.',
    uses_en: 'Oat bath: Ground oats in a stocking/cloth bag inside the tub. For irritated skin and gentle protection.\nOatstraw tea: The dried straw in infusion for an exhausted nervous system.\nSteam with oats: For sensitive, reactive, or inflamed skin.\nSachets: Oat grains in small bags for constant household prosperity.\nEarth offering: Scatter oats in the garden as gratitude.',
    precautions_en: 'Celiac individuals must verify the oats are certified gluten-free (cross-contamination with wheat is common).'
  },
  21: {
    body_benefits_en: 'Rice — especially its WATER — is gentle medicine. Rice water is an astringent that tones skin, reduces pores, hydrates and adds luminosity to hair. It is a demulcent that calms irritated stomachs and diarrhea. Rich in starches that soften and protect sensitive skin.',
    spiritual_benefits_en: 'Rice is FERTILITY, ABUNDANCE, and ANCESTRAL BLESSING. It has been thrown at weddings for fertility since time immemorial. It attracts constant prosperity to the home — a jar of rice in the kitchen that never empties symbolizes that abundance will never be lacking. It protects and blesses.',
    uses_en: 'Rice water: Soak rice in water 30 min - 24 hrs. For skin, hair, and stomach.\nCleansing bath: Rice water in the bath for abundance and blessings.\nIn the corners: Small piles of rice in home corners for protection and prosperity.\nAbundance ritual: A jar of rice in the kitchen with a coin inside, always keep it full.\nSmudge: Toasted rice burned for purification (Eastern tradition).',
    precautions_en: 'No significant contraindications for external use.'
  },
  22: {
    body_benefits_en: 'Salt is MINERAL PURIFICATION. A natural antiseptic for wounds and throat (gargling), exfoliant that removes dead cells, nasal decongestant (saline washes), and in baths (especially Epsom salts) it relaxes muscles and relieves pain. It remineralizes and balances skin.',
    spiritual_benefits_en: 'Salt is the FUNDAMENTAL PILLAR of all spiritual protection and cleansing. It is the substance that most quickly absorbs and neutralizes negative energy. It creates impenetrable barriers against entities and dark vibrations. It is universal — ALL world traditions recognize it as a purifier and protector.',
    uses_en: 'Cleansing bath: A handful of coarse salt in water for deep spiritual cleansing (the most powerful).\nLines at doors and windows: So nothing negative enters the space.\nIn corners: Small plates of salt that absorb negativity (change weekly).\nGargle: Salt in warm water for infected throat.\nExfoliating scrub: Fine salt with oil for renewed skin.',
    precautions_en: 'Do not use on open wounds (stings intensely). Rinse well after spiritual salt baths (can dry out skin). Moisturize afterwards.'
  },
  23: {
    body_benefits_en: 'Magnesium is DEEP RESTORATION. A muscle relaxant that relieves cramps, tension, and fibromyalgia. It reduces stress and cortisol through skin absorption. It improves sleep quality, detoxifies the body, and relieves inflammation. It is the mineral that most people are deficient in.',
    spiritual_benefits_en: 'Magnesium is GROUNDING AND LETTING GO. It provides deep grounding — it brings you back to your body when you are scattered. It energetically helps RELEASE what no longer serves: patterns, relationships, repetitive thoughts. It recalibrates the energy body after intense experiences.',
    uses_en: 'Bath: 2 cups of Epsom salts in hot tub, soak for minimum 20 min for absorption.\nFoot soak: Foot bath with salts for quick grounding and relief for tired legs.\nCombined with oils: Add lavender, eucalyptus, or rosemary to the bath for dual effect.\nPost-ritual: Magnesium bath after intense cleansings to restore the body.',
    precautions_en: 'Do not use excessively in people with kidney problems. Do not ingest without medical supervision. People with low blood pressure should be careful (may relax too much).'
  },
  24: {
    body_benefits_en: 'Mint crystals are CONCENTRATED POTENCY. Topical analgesics that numb muscle and joint pain on contact. Powerful decongestants that open airways instantly. They refresh and calm itching. They are mint in its purest, most potent form.',
    spiritual_benefits_en: 'INSTANT MENTAL CLARITY and ACTIVATION. Mint crystals awaken the mind like a ray of light. They open the third eye, clear confusion, and attract new, fresh ideas. Use them when you need to think with absolute clarity or make an important decision.',
    uses_en: 'Steam: 2-3 crystals (NO more) in boiling water for severe congestion or mental clarity.\nFoot bath: A few crystals in cold water to refresh and energize.\nIn oil: Dissolved in carrier oil for massage on painful areas.\nMeditation: Gentle vapor to open the third eye and clarify the mind.',
    precautions_en: 'EXTREMELY CONCENTRATED. Use minimal amounts (2-3 crystals maximum). Keep FAR from eyes (vapor irritates intensely). DO NOT use on children under 6 years. May cause cold burn in direct contact with undiluted skin.'
  },
  25: {
    body_benefits_en: 'Frankincense is SACRED ANTI-INFLAMMATION. Modern studies confirm its potent anti-inflammatory properties — it helps with arthritis, chronic pain, and autoimmune problems. It is immunomodulatory, has antitumoral properties (under research), and deeply calms the nervous system.',
    spiritual_benefits_en: 'THE CONNECTION WITH THE DIVINE. It is the sacred resin par excellence, used in ALL spiritual traditions of the world — from Egyptian temples to Catholic churches, mosques, and pagan rituals. It elevates vibration to its highest point, purifies with the force of the sacred, connects with God/Goddess/Source, and deepens any meditation or prayer.',
    uses_en: 'Smudge: Resin on burning charcoal for maximum purification and spiritual elevation.\nMeditation: Burn during practice to deepen divine connection.\nPrayer: Accompanies any petition or gratitude.\nDiluted oil: For joint pain and inflammation (dilute in carrier oil).\nSteam bath: For deep spiritual connection.',
    precautions_en: 'Excessive smoke in unventilated spaces can irritate airways. Ensure adequate ventilation.'
  },
  26: {
    body_benefits_en: 'Tiger Eye is not ingested or applied medicinally, but in crystal therapy it is associated with strengthening the digestive system (solar plexus), stabilizing vital energy, and reducing anxiety through its weight and texture in the hand (tactile grounding).',
    spiritual_benefits_en: 'WARRIOR PROTECTION and PERSONAL EMPOWERMENT. Tiger Eye is the stone of courage, confidence, and personal power. It protects against the evil eye and envy. It gives courage to face challenges, attracts prosperity through ACTION (not passive abundance — it is the stone of the one who works and conquers). It strengthens will and determination.',
    uses_en: 'Carry it: In pocket or as jewelry for daily protection and confidence.\nIn business: Near the cash register to attract customers and success.\nMeditation: On the solar plexus to strengthen will and personal power.\nProsperity altar: On the altar next to golden candles and cinnamon.\nInterviews/meetings: In your pocket to project confidence.',
    precautions_en: 'Cleanse with smudge (sage, palo santo, or frankincense) or under moonlight. Charge in sunlight (it is a solar stone) for a few hours. Do not submerge in salt water for prolonged periods (may damage the polish).'
  }
};

// Merge translations into elements
Object.assign(translations, translations2);

elements.forEach(el => {
  if (translations[el.id]) {
    Object.assign(el, translations[el.id]);
  }
});

fs.writeFileSync(ELEMENTS_FILE, JSON.stringify(elements, null, 2));
console.log(`✦ Translated ${Object.keys(translations).length} elements to English.`);
