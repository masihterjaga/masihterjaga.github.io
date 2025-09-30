// ========== GLOBAL DOM ELEMENTS CACHE ==========
const DOM_ELEMENTS = {
  topOfPage: document.getElementById('top'),
  atkType: document.getElementById('penCritSelect'),
  weapon: document.getElementById('weaponSelect'),
  wElem: document.getElementById('weaponElementSelect'),
  tSize: document.getElementById('targetSizeSelect'),
  tRace: document.getElementById('targetRaceSelect'),
  tAttr: document.getElementById('targetElementSelect'),
  tDef: document.getElementById('targetDefSelect'),
  blueSet: document.getElementById("blueSet"),
  blueSetLabel: document.getElementById("blueSetLabel"),
  vesperSet: document.getElementById("vesperSet"),
  vesperSetLabel: document.getElementById("vesperSetLabel"),
  whiteSet: document.getElementById("whiteSet"),
  whiteSetLabel: document.getElementById("whiteSetLabel"),
  tDefLabel: document.getElementById('tDefLabel'),
  atkTypeLabel: document.getElementById('atkTypeLabel'),
  weaponLabel: document.getElementById('weaponLabel'),
  wElemLabel: document.getElementById('wElemLabel'),
  tSizeLabel: document.getElementById('tSizeLabel'),
  tRaceLabel: document.getElementById('tRaceLabel'),
  tAttrLabel: document.getElementById('tAttrLabel'),
  pen: document.getElementById('pen'),
  crit: document.getElementById('crit'),
  dmgStack: document.getElementById('dmgStack'),
  dmgStackTips: document.getElementById('dmgStackTips'),
  dmg: document.getElementById('dmg'),
  elemEnh: document.getElementById('elemEnhance'),
  sizeEnh: document.getElementById('sizeEnhance'),
  race: document.getElementById('race'),
  attr: document.getElementById('attr'),
  penLabel: document.getElementById('penLabel'),
  critLabel: document.getElementById('critLabel'),
  dmgLabel: document.getElementById('dmgLabel'),
  elemEnhLabel: document.getElementById('elemEnhLabel'),
  sizeEnhLabel: document.getElementById('sizeLabel'),
  raceLabel: document.getElementById('raceLabel'),
  attrLabel: document.getElementById('attrLabel'),
  hasil: document.getElementById('hasil'),
  rec: document.getElementById('recommendations'),
  submit: document.getElementById('submitBtn'),
  resetRek: document.getElementById('resetRekomenBtn'),
  resetAll: document.getElementById('resetAllBtn'),
  testSpear: document.getElementById('testSpear'),
  testReaper: document.getElementById('testReaper'),
  snackbar: document.getElementById('snackbar'),
  log: document.getElementById("log"),
  openLog: document.getElementById("openLog"),
  closeLog: document.getElementById("closeLog")
};

// ======== UTILITY ========
const isEmpty = (v) => v === null || v === undefined || v === '';
const clearNumericInput = (el) => {
  if (el) el.value = '';
};

// ========== ROX DATA CONSTANTS ==========
const VESPER_SET = {
  0: 8,
  1: 16,
  2: 24,
  3: 32,
  4: 40,
  5: 48,
  6: 56,
  7: 64,
  8: 72,
  9: 80
};
const BLUE_SET = {
  3: {
    30: 5,
    40: 7.5,
    50: 10,
    60: 12.5,
    70: 15,
    80: 17.5,
    90: 20,
    100: 22.5,
    110: 25,
    120: 27.5,
    130: 30,
    140: 32.5,
    150: 35
  /*
    },
    8: {
      30: 5,
      40: 10,
      50: 15,
      60: 20,
      70: 25,
      80: 30,
      90: 35,
      100: 40,
      110: 45,
      120: 50,
      130: 55,
      140: 60,
      150: 65
  */ 
  }
};
const WHITE_SET = {
  "Tier 0": 30,
  "Tier 1": 36,
  "Tier 2": 42,
  "Tier 3": 48,
  "Tier 4": 54
}
// def stats from Nila
const DEFENSE_TABLE = {
  "0def": {
    def: 0,
    dmgred: 0
  },
  "Avg. MVP Lvl.130": {
    def: 182.27,
    dmgred: 148.10
  },
  "Avg. MINI Lvl.130": {
    def: 206.45,
    dmgred: 165.52
  },
  "Avg. MVP MINI Lvl.130": {
    def: 194.36,
    dmgred: 156.81
  },
  "Avg. MVP Lvl.140": {
    def: 155.32,
    dmgred: 191.35
  },
  "Avg. MINI Lvl.140": {
    def: 161.41,
    dmgred: 233.48
  },
  "Avg. MVP MINI Lvl.140": {
    def: 158.37,
    dmgred: 212.41
  },
  "Avg. MVP Lvl.150": {
    def: 191.03,
    dmgred: 283.92
  },
  "Avg. MINI Lvl.150": {
    def: 198.53,
    dmgred: 324.23
  },
  "Avg. MVP MINI Lvl.150": {
    def: 194.78,
    dmgred: 304.08
  },
  "Avg. Small MVP Lv.140": {
    def: 130.18,
    dmgred: 272.80,
    sizeMob: "Small"
  },
  "Avg. Medium MVP Lv.140": {
    def: 199.62,
    dmgred: 195.88,
    sizeMob: "Medium"
  },
  "Avg. Large MVP Lv.140": {
    def: 143.05,
    dmgred: 184.84,
    sizeMob: "Large"
  },
  "Avg. Small MINI Lv.140": {
    def: 161.12,
    dmgred: 225.97,
    sizeMob: "Small"
  },
  "Avg. Medium MINI Lv.140": {
    def: 148.23,
    dmgred: 212.13,
    sizeMob: "Medium"
  },
  "Avg. Large MINI Lv.140": {
    def: 178.61,
    dmgred: 267.37,
    sizeMob: "Large"
  },
  "Avg. Small MVP Lv.150": {
    def: 161.98,
    dmgred: 361.00,
    sizeMob: "Small"
  },
  "Avg. Medium MVP Lv.150": {
    def: 240.07,
    dmgred: 273.72,
    sizeMob: "Medium"
  },
  "Avg. Large MVP Lv.150": {
    def: 177.51,
    dmgred: 282.29,
    sizeMob: "Large"
  },
  "Avg. Small MINI Lv.150": {
    def: 198.01,
    dmgred: 312.15,
    sizeMob: "Small"
  },
  "Avg. Medium MINI Lv.150": {
    def: 182.88,
    dmgred: 304.72,
    sizeMob: "Medium"
  },
  "Avg. Large MINI Lv.150": {
    def: 219.08,
    dmgred: 359.67,
    sizeMob: "Large"
  },
  "Phreeoni Lv.140": {
    def: 106.98,
    dmgred: 204.60,
    sizeMob: "Large",
    raceMob: "Brute",
    attributeMob: "Neutral"
  },
  "Mistress Lv.140": {
    def: 130.18,
    dmgred: 272.80,
    sizeMob: "Small",
    raceMob: "Insect",
    attributeMob: "Wind"
  },
  "Eddga Lv.140": {
    def: 106.98,
    dmgred: 204.60,
    sizeMob: "Large",
    raceMob: "Brute",
    attributeMob: "Fire"
  },
  "Kraken Lv.140": {
    def: 130.18,
    dmgred: 272.80,
    sizeMob: "Large",
    raceMob: "Fish",
    attributeMob: "Water"
  },
  "Maya Lv.140": {
    def: 98.97,
    dmgred: 136.40,
    sizeMob: "Large",
    raceMob: "Insect",
    attributeMob: "Earth"
  },
  "Orc Hero Lv.140": {
    def: 82.47,
    dmgred: 136.40,
    sizeMob: "Large",
    raceMob: "Demi-Human",
    attributeMob: "Earth"
  },
  "Pharaoh Lv.140": {
    def: 98.97,
    dmgred: 136.40,
    sizeMob: "Large",
    raceMob: "Demi-Human",
    attributeMob: "Shadow"
  },
  "Orc Lord Lv.140": {
    def: 82.47,
    dmgred: 136.40,
    sizeMob: "Large",
    raceMob: "Demi-Human",
    attributeMob: "Earth"
  },
  "Doppelganger Lv.140": {
    def: 172.98,
    dmgred: 204.60,
    sizeMob: "Medium",
    raceMob: "Demon",
    attributeMob: "Shadow"
  },
  "Amon Ra Lv.140": {
    def: 106.98,
    dmgred: 204.60,
    sizeMob: "Large",
    raceMob: "Demi-Human",
    attributeMob: "Earth"
  },
  "Morroc Lv.140": {
    def: 131.97,
    dmgred: 136.40,
    sizeMob: "Large",
    raceMob: "Demon",
    attributeMob: "Shadow"
  },
  "Time Holder Lv.140": {
    def: 164.97,
    dmgred: 136.40,
    sizeMob: "Large",
    raceMob: "Demon",
    attributeMob: "Neutral"
  },
  "Tao Gunka Lv.140": {
    def: 172.98,
    dmgred: 204.60,
    sizeMob: "Large",
    raceMob: "Demon",
    attributeMob: "Neutral"
  },
  "Lost Dragon Lv.140": {
    def: 172.98,
    dmgred: 204.60,
    sizeMob: "Large",
    raceMob: "Dragon",
    attributeMob: "Shadow"
  },
  "Fallen Bishop Lv.140": {
    def: 164.97,
    dmgred: 136.40,
    sizeMob: "Medium",
    raceMob: "Demon",
    attributeMob: "Shadow"
  },
  "Lord of the Dead Lv.140": {
    def: 131.97,
    dmgred: 136.40,
    sizeMob: "Large",
    raceMob: "Demon",
    attributeMob: "Shadow"
  },
  "Arc Angeling Lv.140": {
    def: 164.97,
    dmgred: 136.40,
    sizeMob: "Medium",
    raceMob: "Angel",
    attributeMob: "Holy"
  },
  "Gioia Lv.140": {
    def: 212.68,
    dmgred: 272.80,
    sizeMob: "Large",
    raceMob: "Formless",
    attributeMob: "Wind"
  },
  "RSX-0806 Lv.140": {
    def: 238.66,
    dmgred: 202.00,
    sizeMob: "Medium",
    raceMob: "Formless",
    attributeMob: "Neutral"
  },
  "Nidhoggr's Shadow Lv.140": {
    def: 181.21,
    dmgred: 134.00,
    sizeMob: "Large",
    raceMob: "Dragon",
    attributeMob: "Shadow"
  },
  "Gloom Under Night Lv.140": {
    def: 306.00,
    dmgred: 300.00,
    sizeMob: "Large",
    raceMob: "Formless",
    attributeMob: "Ghost"
  },
  "Retribution Lv.140": {
    def: 256.50,
    dmgred: 300.00,
    sizeMob: "Medium",
    raceMob: "Angel",
    attributeMob: "Shadow"
  },
  "Dragon Fly Lv.140": {
    def: 106.98,
    dmgred: 204.60,
    sizeMob: "Small",
    raceMob: "Insect",
    attributeMob: "Wind"
  },
  "Eclipse Lv.140": {
    def: 130.18,
    dmgred: 272.80,
    sizeMob: "Small",
    raceMob: "Brute",
    attributeMob: "Neutral"
  },
  "Mastering Lv.140": {
    def: 130.18,
    dmgred: 272.80,
    sizeMob: "Medium",
    raceMob: "Plant",
    attributeMob: "Water"
  },
  "Ghostring Lv.140": {
    def: 106.98,
    dmgred: 204.60,
    sizeMob: "Medium",
    raceMob: "Demon",
    attributeMob: "Ghost"
  },
  "Toad Lv.140": {
    def: 98.97,
    dmgred: 136.40,
    sizeMob: "Small",
    raceMob: "Fish",
    attributeMob: "Water"
  },
  "King Dramoh Lv.140": {
    def: 82.47,
    dmgred: 136.40,
    sizeMob: "Large",
    raceMob: "Fish",
    attributeMob: "Water"
  },
  "Angeling Lv.140": {
    def: 98.97,
    dmgred: 136.40,
    sizeMob: "Medium",
    raceMob: "Angel",
    attributeMob: "Holy"
  },
  "Deviling Lv.140": {
    def: 82.47,
    dmgred: 136.40,
    sizeMob: "Medium",
    raceMob: "Demon",
    attributeMob: "Shadow"
  },
  "Dark Priest Lv.140": {
    def: 212.68,
    dmgred: 272.80,
    sizeMob: "Medium",
    raceMob: "Demon",
    attributeMob: "Undead"
  },
  "Vagabond Wolf Lv.140": {
    def: 172.98,
    dmgred: 204.60,
    sizeMob: "Medium",
    raceMob: "Brute",
    attributeMob: "Earth"
  },
  "Chimera Lv.140": {
    def: 172.98,
    dmgred: 204.60,
    sizeMob: "Large",
    raceMob: "Brute",
    attributeMob: "Fire"
  },
  "Mysteltainn Lv.140": {
    def: 172.98,
    dmgred: 204.60,
    sizeMob: "Large",
    raceMob: "Formless",
    attributeMob: "Shadow"
  },
  "Ogretooth Lv.140": {
    def: 212.68,
    dmgred: 306.35,
    sizeMob: "Medium",
    raceMob: "Formless",
    attributeMob: "Shadow"
  },
  "Necromancer Lv.140": {
    def: 131.97,
    dmgred: 150.75,
    sizeMob: "Medium",
    raceMob: "Undead",
    attributeMob: "Undead"
  },
  "Coelacanth Lv.140": {
    def: 139.98,
    dmgred: 204.60,
    sizeMob: "Large",
    raceMob: "Fish",
    attributeMob: "Water"
  },
  "Naght Sieger Lv.140": {
    def: 212.68,
    dmgred: 272.80,
    sizeMob: "Large",
    raceMob: "Demon",
    attributeMob: "Ghost"
  },
  "Observation Lv.140": {
    def: 146.68,
    dmgred: 272.80,
    sizeMob: "Medium",
    raceMob: "Angel",
    attributeMob: "Neutral"
  },
  "Skeggiold Lv.140": {
    def: 172.98,
    dmgred: 204.60,
    sizeMob: "Small",
    raceMob: "Angel",
    attributeMob: "Holy"
  },
  "Queen Scaraba Lv.140": {
    def: 212.30,
    dmgred: 268.70,
    sizeMob: "Small",
    raceMob: "Insect",
    attributeMob: "Earth"
  },
  "Faceworm Queen Lv.140": {
    def: 245.30,
    dmgred: 268.70,
    sizeMob: "Small",
    raceMob: "Insect",
    attributeMob: "Poison"
  },
  "Ktullanux Lv.140": {
    def: 256.50,
    dmgred: 542.27,
    sizeMob: "Large",
    raceMob: "Dragon",
    attributeMob: "Water"
  },
  "Shelter Lv.140": {
    def: 251.18,
    dmgred: 258.00,
    sizeMob: "Medium",
    raceMob: "Angel",
    attributeMob: "Holy"
  },
  "Phreeoni Lv.150": {
    def: 136.62,
    dmgred: 311.20,
    sizeMob: "Large",
    raceMob: "Brute",
    attributeMob: "Neutral"
  },
  "Mistress Lv.150": {
    def: 161.98,
    dmgred: 361.00,
    sizeMob: "Small",
    raceMob: "Insect",
    attributeMob: "Wind"
  },
  "Eddga Lv.150": {
    def: 136.62,
    dmgred: 311.20,
    sizeMob: "Large",
    raceMob: "Brute",
    attributeMob: "Fire"
  },
  "Kraken Lv.150": {
    def: 161.98,
    dmgred: 361.00,
    sizeMob: "Large",
    raceMob: "Fish",
    attributeMob: "Water"
  },
  "Maya Lv.150": {
    def: 118.76,
    dmgred: 186.70,
    sizeMob: "Large",
    raceMob: "Insect",
    attributeMob: "Earth"
  },
  "Orc Hero Lv.150": {
    def: 110.67,
    dmgred: 261.40,
    sizeMob: "Large",
    raceMob: "Demi-Human",
    attributeMob: "Earth"
  },
  "Pharaoh Lv.150": {
    def: 118.76,
    dmgred: 186.70,
    sizeMob: "Large",
    raceMob: "Demi-Human",
    attributeMob: "Shadow"
  },
  "Orc Lord Lv.150": {
    def: 110.67,
    dmgred: 261.40,
    sizeMob: "Large",
    raceMob: "Demi-Human",
    attributeMob: "Earth"
  },
  "Doppelganger Lv.150": {
    def: 214.62,
    dmgred: 311.20,
    sizeMob: "Medium",
    raceMob: "Demon",
    attributeMob: "Shadow"
  },
  "Amon Ra Lv.150": {
    def: 136.62,
    dmgred: 311.20,
    sizeMob: "Large",
    raceMob: "Demi-Human",
    attributeMob: "Earth"
  },
  "Morroc Lv.150": {
    def: 169.17,
    dmgred: 261.40,
    sizeMob: "Large",
    raceMob: "Demon",
    attributeMob: "Shadow"
  },
  "Time Holder Lv.150": {
    def: 196.76,
    dmgred: 186.70,
    sizeMob: "Large",
    raceMob: "Demon",
    attributeMob: "Neutral"
  },
  "Tao Gunka Lv.150": {
    def: 214.62,
    dmgred: 311.20,
    sizeMob: "Large",
    raceMob: "Demon",
    attributeMob: "Neutral"
  },
  "Lost Dragon Lv.150": {
    def: 214.62,
    dmgred: 311.20,
    sizeMob: "Large",
    raceMob: "Dragon",
    attributeMob: "Shadow"
  },
  "Fallen Bishop Lv.150": {
    def: 196.76,
    dmgred: 186.70,
    sizeMob: "Medium",
    raceMob: "Demon",
    attributeMob: "Shadow"
  },
  "Lord of the Dead Lv.150": {
    def: 169.17,
    dmgred: 261.40,
    sizeMob: "Large",
    raceMob: "Demon",
    attributeMob: "Shadow"
  },
  "Arc Angeling Lv.150": {
    def: 196.76,
    dmgred: 186.70,
    sizeMob: "Medium",
    raceMob: "Angel",
    attributeMob: "Holy"
  },
  "Gioia Lv.150": {
    def: 259.48,
    dmgred: 361.00,
    sizeMob: "Large",
    raceMob: "Formless",
    attributeMob: "Wind"
  },
  "RSX-0806 Lv.150": {
    def: 293.16,
    dmgred: 317.00,
    sizeMob: "Medium",
    raceMob: "Formless",
    attributeMob: "Neutral"
  },
  "Nidhoggr's Shadow Lv.150": {
    def: 228.13,
    dmgred: 266.00,
    sizeMob: "Large",
    raceMob: "Dragon",
    attributeMob: "Shadow"
  },
  "Gloom Under Night Lv.150": {
    def: 357.57,
    dmgred: 367.00,
    sizeMob: "Large",
    raceMob: "Formless",
    attributeMob: "Ghost"
  },
  "Retribution Lv.150": {
    def: 299.07,
    dmgred: 367.00,
    sizeMob: "Medium",
    raceMob: "Angel",
    attributeMob: "Shadow"
  },
  "Dragon Fly Lv.150": {
    def: 136.62,
    dmgred: 311.20,
    sizeMob: "Small",
    raceMob: "Insect",
    attributeMob: "Wind"
  },
  "Eclipse Lv.150": {
    def: 161.98,
    dmgred: 361.00,
    sizeMob: "Small",
    raceMob: "Brute",
    attributeMob: "Neutral"
  },
  "Mastering Lv.150": {
    def: 161.98,
    dmgred: 361.00,
    sizeMob: "Medium",
    raceMob: "Plant",
    attributeMob: "Water"
  },
  "Ghostring Lv.150": {
    def: 136.62,
    dmgred: 311.20,
    sizeMob: "Medium",
    raceMob: "Demon",
    attributeMob: "Ghost"
  },
  "Toad Lv.150": {
    def: 118.76,
    dmgred: 186.70,
    sizeMob: "Small",
    raceMob: "Fish",
    attributeMob: "Water"
  },
  "King Dramoh Lv.150": {
    def: 110.67,
    dmgred: 261.40,
    sizeMob: "Large",
    raceMob: "Fish",
    attributeMob: "Water"
  },
  "Angeling Lv.150": {
    def: 118.76,
    dmgred: 186.70,
    sizeMob: "Medium",
    raceMob: "Angel",
    attributeMob: "Holy"
  },
  "Deviling Lv.150": {
    def: 110.66,
    dmgred: 261.40,
    sizeMob: "Medium",
    raceMob: "Demon",
    attributeMob: "Shadow"
  },
  "Dark Priest Lv.150": {
    def: 259.48,
    dmgred: 361.00,
    sizeMob: "Medium",
    raceMob: "Demon",
    attributeMob: "Undead"
  },
  "Vagabond Wolf Lv.150": {
    def: 214.62,
    dmgred: 311.20,
    sizeMob: "Medium",
    raceMob: "Brute",
    attributeMob: "Earth"
  },
  "Chimera Lv.150": {
    def: 214.62,
    dmgred: 311.20,
    sizeMob: "Large",
    raceMob: "Brute",
    attributeMob: "Fire"
  },
  "Mysteltainn Lv.150": {
    def: 214.62,
    dmgred: 311.20,
    sizeMob: "Large",
    raceMob: "Formless",
    attributeMob: "Shadow"
  },
  "Ogretooth Lv.150": {
    def: 259.48,
    dmgred: 385.89,
    sizeMob: "Medium",
    raceMob: "Formless",
    attributeMob: "Shadow"
  },
  "Necromancer Lv.150": {
    def: 169.17,
    dmgred: 272.00,
    sizeMob: "Medium",
    raceMob: "Undead",
    attributeMob: "Undead"
  },
  "Coelacanth Lv.150": {
    def: 175.62,
    dmgred: 311.20,
    sizeMob: "Large",
    raceMob: "Fish",
    attributeMob: "Water"
  },
  "Naght Sieger Lv.150": {
    def: 259.48,
    dmgred: 361.00,
    sizeMob: "Large",
    raceMob: "Demon",
    attributeMob: "Ghost"
  },
  "Observation Lv.150": {
    def: 181.48,
    dmgred: 361.00,
    sizeMob: "Medium",
    raceMob: "Angel",
    attributeMob: "Neutral"
  },
  "Skeggiold Lv.150": {
    def: 214.62,
    dmgred: 311.20,
    sizeMob: "Small",
    raceMob: "Angel",
    attributeMob: "Holy"
  },
  "Queen Scaraba Lv.150": {
    def: 258.55,
    dmgred: 351.40,
    sizeMob: "Small",
    raceMob: "Insect",
    attributeMob: "Earth"
  },
  "Faceworm Queen Lv.150": {
    def: 297.55,
    dmgred: 351.40,
    sizeMob: "Small",
    raceMob: "Insect",
    attributeMob: "Poison"
  },
  "Ktullanux Lv.150": {
    def: 299.07,
    dmgred: 575.77,
    sizeMob: "Large",
    raceMob: "Dragon",
    attributeMob: "Water"
  },
  "Shelter Lv.150": {
    def: 293.16,
    dmgred: 317.00,
    sizeMob: "Medium",
    raceMob: "Angel",
    attributeMob: "Holy"
  }
};
const RACE_TYPES = ["Angel", "Demon", "Formless", "Insect", "Fish", "Demi-Human", "Undead", "Dragon", "Plant", "Brute"];
const ELEMENT_COUNTER_TABLE = {
  Neutral: {
    Neutral: 1,
    Fire: 1,
    Water: 1,
    Earth: 1,
    Wind: 1,
    Poison: 1,
    Holy: 1,
    Shadow: 1,
    Ghost: 0.70,
    Undead: 1
  },
  Fire: {
    Neutral: 1,
    Fire: 0.25,
    Water: 1,
    Earth: 1.25,
    Wind: 1,
    Poison: 1,
    Holy: 0.75,
    Shadow: 1,
    Ghost: 1,
    Undead: 1.125
  },
  Water: {
    Neutral: 1,
    Fire: 1.25,
    Water: 0.25,
    Earth: 1,
    Wind: 0.90,
    Poison: 1,
    Holy: 0.75,
    Shadow: 1,
    Ghost: 1,
    Undead: 1
  },
  Earth: {
    Neutral: 1,
    Fire: 0.90,
    Water: 1,
    Earth: 0.25,
    Wind: 1.25,
    Poison: 1,
    Holy: 0.75,
    Shadow: 1,
    Ghost: 1,
    Undead: 1
  },
  Wind: {
    Neutral: 1,
    Fire: 1,
    Water: 1.375,
    Earth: 0.90,
    Wind: 0.25,
    Poison: 1,
    Holy: 0.70,
    Shadow: 1,
    Ghost: 1,
    Undead: 1
  },
  Poison: {
    Neutral: 1,
    Fire: 1.125,
    Water: 1,
    Earth: 1.125,
    Wind: 1.125,
    Poison: 0,
    Holy: 0.75,
    Shadow: 0.50,
    Ghost: 1,
    Undead: -0.25
  },
  Holy: {
    Neutral: 1,
    Fire: 1,
    Water: 1,
    Earth: 1,
    Wind: 1,
    Poison: 1,
    Holy: 0,
    Shadow: 1.375,
    Ghost: 1,
    Undead: 1.375
  },
  Shadow: {
    Neutral: 1.125,
    Fire: 1,
    Water: 1,
    Earth: 1,
    Wind: 1,
    Poison: 0.50,
    Holy: 1.375,
    Shadow: 0,
    Ghost: 1,
    Undead: -0.25
  },
  Ghost: {
    Neutral: 0.90,
    Fire: 1,
    Water: 1,
    Earth: 1,
    Wind: 1,
    Poison: 1,
    Holy: 0.75,
    Shadow: 0.75,
    Ghost: 1.375,
    Undead: 1
  },
  Undead: {
    Neutral: 1,
    Fire: 1,
    Water: 1,
    Earth: 1,
    Wind: 1,
    Poison: 0.50,
    Holy: 1.375,
    Shadow: 0,
    Ghost: 1.25,
    Undead: 0
  }
};
const WEAPON_SIZE_MODIFIER_TABLE = {
  "Empty Handed": {
    Large: 0.5,
    Medium: 0.5,
    Small: 0.5
  },
  "One-Handed Sword": {
    Large: 0.75,
    Medium: 1,
    Small: 0.75
  },
  "Two-Handed Sword": {
    Large: 1,
    Medium: 0.75,
    Small: 0.75
  },
  "Two-Handed Spear": {
    Large: 1,
    Medium: 0.75,
    Small: 0.75
  },
  "Dagger": {
    Large: 0.75,
    Medium: 0.75,
    Small: 1
  },
  "Katar": {
    Large: 0.75,
    Medium: 1,
    Small: 0.75
  },
  "Light Knuckle": {
    Large: 0.75,
    Medium: 0.75,
    Small: 1
  },
  "Heavy Knuckle": {
    Large: 1,
    Medium: 0.75,
    Small: 0.75
  },
  "GS": {
    Large: 1,
    Medium: 1,
    Small: 1
  },
  "Ninja Sword": {
    Large: 1,
    Medium: 0.75,
    Small: 0.75
  },
  "Huuma Shuriken": {
    Large: 1,
    Medium: 1,
    Small: 1
  },
  "Tome": {
    Large: 0.75,
    Medium: 1,
    Small: 1
  },
  "Book": {
    Large: 1,
    Medium: 1,
    Small: 1
  },
  "Two-Handed Rod": {
    Large: 1,
    Medium: 1,
    Small: 1
  },
  "One-Handed Rod": {
    Large: 1,
    Medium: 1,
    Small: 1
  },
  "Mace": {
    Large: 1,
    Medium: 0.75,
    Small: 0.75
  },
  "One-Handed Axe": {
    Large: 0.75,
    Medium: 0.75,
    Small: 0.75
  },
  "Two-Handed Axe": {
    Large: 0.5,
    Medium: 0.75,
    Small: 0.75
  },
  "Bow": {
    Large: 0.75,
    Medium: 1,
    Small: 1
  },
  "Instrument": {
    Large: 0.75,
    Medium: 1,
    Small: 0.75
  },
  "Whip": {
    Large: 0.75,
    Medium: 1,
    Small: 0.75
  }
};

// ========== HELPER FUNCTIONS ==========
const cache = {
  weaponSize: new Map(),
  elementCounter: new Map(),
  defenseData: new Map()
};
function getWeaponSizeModifier(weapon = null, size = null) {
  // No caching for bulk - just return the table
  if (weapon === 'all' || weapon === null) {
    return WEAPON_SIZE_MODIFIER_TABLE;
  }
  
  // Cache single lookup: weapon + size combo
  const key = `${weapon}:${size}`;
  let result = cache.weaponSize.get(key);
  
  if (result === undefined) {
    const modMap = WEAPON_SIZE_MODIFIER_TABLE[weapon];
    result = modMap?.[size] ?? 1.0;
    cache.weaponSize.set(key, result);
  }
  
  return result;
}
function getElementCounter(weaponElem = null, targetElem = null) {
  // Return reference to table for bulk operations
  if (weaponElem === 'all' || weaponElem === null) {
    return ELEMENT_COUNTER_TABLE;
  }
  
  const target = targetElem || 'Neutral';
  const key = `${weaponElem}:${target}`;
  let result = cache.elementCounter.get(key);
  
  if (result === undefined) {
    const elemMap = ELEMENT_COUNTER_TABLE[weaponElem] || ELEMENT_COUNTER_TABLE['Neutral'];
    result = elemMap[target] ?? elemMap['Neutral'] ?? 1.0;
    cache.elementCounter.set(key, result);
  }
  
  return result;
}
function getTargetDefenseData(key = null) {
  // Return reference to table for bulk operations
  if (key === null) {
    return DEFENSE_TABLE;
  }
  
  let result = cache.defenseData.get(key);
  
  if (result === undefined) {
    result = DEFENSE_TABLE[key] || DEFENSE_TABLE["0def"];
    cache.defenseData.set(key, result);
  }
  
  return result;
}
function calculateAttackFactor(type, pen, crit, def = 0) {
  if (type === 'pen') {
    const rawPen = (pen || 0) - (def || 0);
    if (rawPen <= 0) return 0;
    const effPen = rawPen >= 150 ? (rawPen * 2 - 150) : rawPen;
    return effPen * 0.01;
  }
  
  if (type === 'crit') {
    return (crit || 0) * 0.01;
  }
  
  return 0;
}

// ======== CORE CALC ========
let isResultShown = false;
function calculateMultiplier(params) {
  // EXTRACT PARAMETERS
  const {
    atkType, pen, crit, dmg, sizeEnh, elemEnh, race, attr, weapon,
    tSize, wElem, tAttr, tRace, tDefKey, extras = {}
  } = params;

  // CALCULATE BASE FACTORS
  const { def, dmgred } = getTargetDefenseData(tDefKey);
  const atkF = calculateAttackFactor(atkType, pen, crit, def);
  const effDmgVal = dmg - dmgred;
  const sizeMod = getWeaponSizeModifier(weapon, tSize);
  const elemCtr = getElementCounter(wElem, tAttr);

  // CALCULATE BASE MULTIPLIER
  const baseMult = (1 + atkF) *
    (1 + effDmgVal * 0.01) *
    (sizeMod + sizeEnh * 0.01) *
    (elemCtr + elemEnh * 0.01) *
    (1 + (tAttr ? attr * 0.01 : 0)) *
    (1 + (tRace ? race * 0.01 : 0));

  // EXTRA GROUPS CONFIGURATION
  const extraGroups = {
    extra1: ['vesper', 'blue3', 'white', 'dmgStack', 'reaperValue'],
    extra2: ['blue8', 'spearValue']
  };

  const extraLabels = {
    vesper: 'Vesper',
    blue3: 'BlueGroup3',
    white: 'White',
    dmgStack: 'DmgStack',
    reaperValue: 'Reaper',
    blue8: 'BlueGroup8',
    spearValue: 'Spear'
  };

  // PROCESS EXTRA GROUP 1
  const extra1Items = [];
  let extra1Sum = 0;
  
  extraGroups.extra1.forEach(key => {
    const value = extras[key] || 0;
    if (value > 0) {
      const normalized = value * 0.01;
      extra1Sum += normalized;
      extra1Items.push({ key: extraLabels[key], type: 'extra1', value: normalized });
    }
  });

  const extra1Factor = 1 + extra1Sum;

  // PROCESS EXTRA GROUP 2
  const extra2Items = [];
  let extra2Sum = 0;
  
  extraGroups.extra2.forEach(key => {
    const value = extras[key] || 0;
    if (value > 0) {
      const normalized = value * 0.01;
      extra2Sum += normalized;
      extra2Items.push({ key: extraLabels[key], type: 'extra2', value: normalized });
    }
  });

  const extra2Factor = 1 + extra2Sum;

  // BUILD RESULT GROUPS
  const resultGroups = [
    ...extra1Items,
    ...(extra1Sum > 0 ? [{ type: 'extra1', sum: extra1Sum, factor: extra1Factor }] : []),
    ...extra2Items,
    ...(extra2Sum > 0 ? [{ type: 'extra2', sum: extra2Sum, factor: extra2Factor }] : [])
  ];

  // CALCULATE FINAL MULTIPLIER
  const totalFactor = extra1Factor * extra2Factor;
  const totalMult = baseMult * totalFactor;

  // DISPLAY FLAGS
  const isPenMode = atkType === 'pen';
  const includeRace = !!(tRace && race > 0);
  const includeAttr = !!(tAttr && attr > 0);
  const includeExtra = extra1Sum > 0;
  const includeExtraTwo = extra2Sum > 0;

  // BUILD FACTOR LIST
  const factorList = [
    {
      key: 'main',
      label: isPenMode ? 'Type (PEN)' : 'Type (CRIT)',
      val: isPenMode ? pen : crit,
      mult: 1 + atkF
    },
    {
      key: 'dmg',
      label: 'Final P/M DMG BNS',
      val: dmg,
      mult: 1 + effDmgVal * 0.01
    },
    {
      key: 'elem',
      label: 'Element',
      val: elemEnh,
      mult: elemCtr + elemEnh * 0.01,
      extra: `counter ${elemCtr}`
    },
    {
      key: 'size',
      label: 'Size',
      val: sizeEnh,
      mult: sizeMod + sizeEnh * 0.01,
      extra: `mod ${sizeMod}`
    },
    {
      key: 'race',
      label: 'Race',
      val: race,
      mult: 1 + race * 0.01,
      show: includeRace
    },
    {
      key: 'attr',
      label: 'Attribute',
      val: attr,
      mult: 1 + attr * 0.01,
      show: includeAttr
    },
    {
      key: 'extra',
      label: 'Extra#1',
      val: extra1Sum,
      mult: extra1Factor,
      show: includeExtra
    },
    {
      key: 'extraTwo',
      label: 'Extra#2',
      val: extra2Sum,
      mult: extra2Factor,
      show: includeExtraTwo
    }
  ];
  

  // RETURN RESULT
  return {
    mult: totalMult,
    def,
    dmgred,
    effDmgVal,
    atkF,
    sizeModifier: sizeMod,
    elementCounter: elemCtr,
    breakdownData: {
      factorList,
      isPenMode,
      includeRace,
      includeAttr,
      includeExtra,
      includeExtraTwo
    },
    parts: {
      baseMult,
      extraGroups: resultGroups,
      extra1Factor,
      extra2Factor,
      extra1Sum,
      extra2Sum
    }
  };
}
function getCurrentCalculationState() {
  // HELPER FUNCTIONS
  const safeNumber = (element) => element ? (Number(element.value) || 0) : 0;
  const safeString = (element) => element ? (element.value || '') : '';

  // EXTRACT BASIC VALUES
  const wElem = safeString(DOM_ELEMENTS.wElem);
  const tAttr = safeString(DOM_ELEMENTS.tAttr);

  // CALCULATE REAPER VALUE
  const isReaperActive = typeof isTestReaperActive !== 'undefined' && isTestReaperActive;
  const reaperValue = isReaperActive 
    ? ((wElem === tAttr) || (wElem === "Neutral" && !tAttr) ? 42 : 14)
    : 0;

  // CALCULATE SPEAR VALUE
  const isSpearActive = typeof isTestSpearActive !== 'undefined' && isTestSpearActive;
  const spearValue = isSpearActive ? 42 : 0;

  // DETECT BLUE GROUP TYPE
  let blue3 = 0;
  let blue8 = 0;

  const blueSet = DOM_ELEMENTS.blueSet;
  if (blueSet?.selectedIndex >= 0) {
    const selectedOption = blueSet.options[blueSet.selectedIndex];
    if (selectedOption) {
      const blueValue = safeNumber(blueSet);
      const optionText = selectedOption.textContent || "";
      
      if (optionText.includes('*3')) {
        blue3 = blueValue;
      } else if (optionText.includes('*8')) {
        blue8 = blueValue;
      }
    }
  }

  // COLLECT INPUT VALUES
  const cleanValues = {
    atkType: safeString(DOM_ELEMENTS.atkType),
    pen: safeNumber(DOM_ELEMENTS.pen),
    crit: safeNumber(DOM_ELEMENTS.crit),
    dmg: safeNumber(DOM_ELEMENTS.dmg),
    sizeEnh: safeNumber(DOM_ELEMENTS.sizeEnh),
    elemEnh: safeNumber(DOM_ELEMENTS.elemEnh),
    race: safeNumber(DOM_ELEMENTS.race),
    attr: safeNumber(DOM_ELEMENTS.attr),
    weapon: safeString(DOM_ELEMENTS.weapon),
    tSize: safeString(DOM_ELEMENTS.tSize),
    wElem,
    tAttr,
    tRace: safeString(DOM_ELEMENTS.tRace),
    tDefKey: safeString(DOM_ELEMENTS.tDef),
    vesper: safeNumber(DOM_ELEMENTS.vesperSet),
    white: safeNumber(DOM_ELEMENTS.whiteSet),
    dmgStack: safeNumber(DOM_ELEMENTS.dmgStack),
    blue3,
    blue8
  };

  // CALL CALCULATOR
  const result = calculateMultiplier({
    ...cleanValues,
    extras: {
      vesper: cleanValues.vesper,
      white: cleanValues.white,
      dmgStack: cleanValues.dmgStack,
      blue3: cleanValues.blue3,
      blue8: cleanValues.blue8,
      reaperValue,
      spearValue
    }
  });

  // RETURN COMBINED STATE
  return {
    ...cleanValues,
    penVal: cleanValues.pen,
    critVal: cleanValues.crit,
    dmgVal: cleanValues.dmg,
    sizeEnhVal: cleanValues.sizeEnh,
    elemEnhVal: cleanValues.elemEnh,
    raceVal: cleanValues.race,
    attrVal: cleanValues.attr,
    tDefKey: cleanValues.tDefKey,
    vesperVal: cleanValues.vesper,
    whiteVal: cleanValues.white,
    dmgStackVal: cleanValues.dmgStack,
    blueGroup3Val: cleanValues.blue3,
    blueGroup8Val: cleanValues.blue8,
    reaperValue,
    spearValue,
    ...result
  };
}
const processMainCalculation = (() => {
  let timeoutId = null;
  
  return () => {
    if (!validateRequiredFields()) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      DOM_ELEMENTS.submit.disabled = false;
      DOM_ELEMENTS.submit.textContent = "Calculate";
      return;
    }
    
    DOM_ELEMENTS.submit.disabled = true;
    DOM_ELEMENTS.submit.textContent = "Calculating...";
    
    if (timeoutId) clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      try {
        const calculationState = getCurrentCalculationState();
        
        if (!validateStatsVsTarget(calculationState)) {
          DOM_ELEMENTS.submit.disabled = false;
          DOM_ELEMENTS.submit.textContent = "Calculate";
          return;
        }
        isResultShown = true;
        lockAllInputs();
        bindInputLockGuard();        
        renderMultiplierBreakdown(calculationState);
        generateRecommendationTable(calculationState);
        
        [DOM_ELEMENTS.testReaper, DOM_ELEMENTS.testSpear, DOM_ELEMENTS.resetRek, DOM_ELEMENTS.resetAll]
          .forEach(btn => { if (btn) btn.disabled = false; });
        
        DOM_ELEMENTS.submit.disabled = true;
        DOM_ELEMENTS.submit.textContent = "Calculate";
      } catch (error) {
        console.error('Calculation error:', error);
        DOM_ELEMENTS.submit.disabled = false;
        DOM_ELEMENTS.submit.textContent = "Calculate";
        if (typeof showSnackbar === 'function') {
          showSnackbar('Calculation failed. Please check your inputs.');
        }
      } finally {
        timeoutId = null;
      }
    }, 300);
  };
})();

// ======== BREAKDOWN ========
function renderMultiplierBreakdown(calculationState) {
  if (!isResultShown) return;
  const resultContainer = DOM_ELEMENTS.hasil;
  const showFullPrecision = resultContainer?.dataset?.showFullPrecision === "1";
  
  const ITEM_LABELS = Object.freeze({
    'Vesper': 'Vesper SET',
    'BlueGroup3': 'Blue SET (Ferocity)', 
    'White': 'White SET (110*3)',
    'DmgStack': 'Final DMG BNS',
    'Reaper': 'Reaper Scythe',
    'BlueGroup8': 'Blue SET',
    'Spear': 'Divinity#1 Flash: Spear of Eternity'
  });

  const {
    mult, def, dmgred, penVal, critVal, dmgVal, wElem, tAttr, tSize, 
    weapon, parts = {}, atkType, tRace, vesperVal, blueGroup3Val, 
    blueGroup8Val, whiteVal, dmgStackVal, tDefKey, elementCounter, 
    sizeModifier, breakdownData = {}
  } = calculationState;

  const { extraGroups = [], extra1Factor = 1, extra2Factor = 1 } = parts;
  const { factorList = [], isPenMode = false } = breakdownData;

  const fmt = showFullPrecision ? (n => Number(n) || 0) : (n => parseFloat((Number(n) || 0).toFixed(2)));

  // Process extras
  const extras = { 
    extra1: { items: [], factor: extra1Factor, summary: null }, 
    extra2: { items: [], factor: extra2Factor, summary: null } 
  };
  
  extraGroups.forEach(group => {
    const type = group.type;
    if (!(type in extras)) return;
    if ('sum' in group && 'factor' in group) {
      extras[type].summary = group;
      extras[type].factor = group.factor;
    } else if ('key' in group && 'value' in group) {
      extras[type].items.push(group);
    } else if ('factor' in group && !('sum' in group) && !('key' in group)) {
      if (!extras[type].summary) extras[type].factor = group.factor;
    }
  });

  const el = (tag, props = {}, content = null) => {
    const element = document.createElement(tag);
    Object.entries(props).forEach(([key, value]) => {
      if (key === "class") element.className = value;
      else if (key === "text") element.textContent = value;
      else element.setAttribute(key, value);
    });
    if (content) {
      if (Array.isArray(content)) {
        const fragment = document.createDocumentFragment();
        content.forEach(item => {
          fragment.appendChild(typeof item === 'string' ? document.createTextNode(item) : item);
        });
        element.appendChild(fragment);
      } else {
        typeof content === 'string' ? element.textContent = content : element.appendChild(content);
      }
    }
    return element;
  };

  const factorTemplates = {
    main: (factor) => {
      if (isPenMode) {
        const basePen = penVal - def;
        const items = [`Raw PEN + Final PEN: ${fmt(penVal)}`, `Target DEF: ${fmt(def)}`];
        if (basePen >= 150) {
          const effectivePercent = (basePen * 2) - 150;
          items.push(
            `1.00 + ((( ${fmt(penVal)} - ${fmt(def)} ) × 2 ) - 150 ) / 100`, 
            { complex: `1.00 + ( ${fmt(effectivePercent)} / 100 ) → `, code: `×${fmt(factor.mult)}` }
          );
        } else {
          items.push({ complex: `1.00 + (( ${fmt(penVal)} - ${fmt(def)} ) / 100 ) → `, code: `×${fmt(factor.mult)}` });
        }
        return [`Attack Type: PEN vs ${tDefKey}`, items];
      }
      return [
        `Attack Type: CRIT vs ${tDefKey}`, 
        [`Crit DMG: ${fmt(critVal)}`, { complex: `1.00 + ( ${fmt(critVal)} / 100 ) → `, code: `×${fmt(factor.mult)}` }]
      ];
    },

    dmg: (factor) => [
      "Final P/M Damage Bonus",
      [
        `P/M BO: ${fmt(dmgVal)}`, 
        `Target Reduction: ${fmt(dmgred)}`, 
        { complex: `1.00 + (( ${fmt(dmgVal)} - ${fmt(dmgred)} ) / 100 ) → `, code: `×${fmt(factor.mult)}` }
      ]
    ],

    elem: (factor) => {
      const items = [
        `Counter: ${fmt(elementCounter)}`, 
        `${wElem} Enhance: ${fmt(factor.val)}`, 
        { complex: `${fmt(elementCounter)} + ${fmt(factor.val / 100)} → `, code: `×${fmt(factor.mult)}` }
      ];
      if (!tAttr) items.push("Tools assume target Neutral if you're not targeting any attribute.");
      return [`Element: ${wElem} vs ${tAttr || "Neutral"}`, items];
    },

    size: (factor) => [
      `Size: ${weapon} vs ${tSize}`,
      [
        `Modifier: ${fmt(sizeModifier)}`, 
        `${tSize} Enhance: ${fmt(factor.val)}`, 
        { complex: `${fmt(sizeModifier)} + ${fmt(factor.val / 100)} → `, code: `×${fmt(factor.mult)}` }
      ]
    ],

    race: (factor) => [
      `Race: ${tRace}`,
      [`DMG to ${tRace}: ${fmt(factor.val)}`, { complex: `1.00 + ( ${fmt(factor.val)} / 100 ) → `, code: `×${fmt(factor.mult)}` }]
    ],

    attr: (factor) => [
      `Attribute: ${tAttr}`,
      [`DMG to ${tAttr} Attribute: ${fmt(factor.val)}`, { complex: `1.00 + ( ${fmt(factor.val)} / 100 ) → `, code: `×${fmt(factor.mult)}` }]
    ],

    extra: (factor) => {
      const items = [];
      const extra1Data = extras.extra1;

      extra1Data.items.forEach(item => {
        const label = ITEM_LABELS[item.key] || item.key;

        if (item.key === 'Reaper') {
          items.push(`${label}: ${wElem} vs ${tAttr || 'Neutral'}`, `${fmt(item.value * 100)} / 100`);
          const elemMatch = (wElem && tAttr && wElem === tAttr) || (wElem === "Neutral" && !tAttr);
          items.push({
            note: elemMatch ? 
              "Elements match. Real bonus is 84% (10s duration / 20s CD), displayed here as(sume) 42% for 100% uptime." : 
              "Elements differ. Real bonus is 28% (10s duration / 20s CD), displayed here as(sume) 14% for 100% uptime."
          });
        } else {
          const displayValue = 
            (item.key === 'Vesper' && vesperVal) ? `${label}: ${vesperVal}` :
            (item.key === 'BlueGroup3' && blueGroup3Val) ? `${label}: ${blueGroup3Val}` :
            (item.key === 'White' && whiteVal) ? `${label}: ${whiteVal}` :
            `${label}: ${fmt(item.value * 100)}`;
          
          items.push(displayValue, `${fmt(item.value * 100)} / 100`);
        }
      });

      const summaryFactor = extra1Data.summary?.factor || extra1Data.factor;
      const individualValues = extra1Data.items.map(item => fmt(item.value));
      items.push({
        complex: `1 + ${individualValues.join(' + ')} → `,
        code: `×${fmt(summaryFactor)}`
      });

      return ["Extra#1: Final DMG Bonus", items];
    },

    extraTwo: (factor) => {
      const items = [];
      const extra2Data = extras.extra2;

      extra2Data.items.forEach(item => {
        const label = ITEM_LABELS[item.key] || item.key;
        const displayValue = (item.key === 'BlueGroup8' && blueGroup8Val) ? `${label}: ${blueGroup8Val}%` : label;
        items.push(displayValue, `${fmt(item.value * 100)} / 100`);

        if (item.key === 'Spear') {
          items.push({ note: "This bonus is shown as(sume) 100% uptime (actual bonus is 84%)." });
        }
      });

      const summaryFactor = extra2Data.summary?.factor || extra2Data.factor;
      const individualValues = extra2Data.items.map(item => fmt(item.value));
      items.push({
        complex: `1 + ${individualValues.join(' + ')} → `,
        code: `×${fmt(summaryFactor)}`
      });

      return ["Extra#2: Bonus DMG to MVP/MINI", items];
    }
  };

  const createFactorItem = (factor) => {
    if (factor.show === false) {
      return el("li", { text: `${factor.label}: ×1.00 (no stat)` });
    }

    const template = factorTemplates[factor.key];
    if (!template) {
      return el("li", {}, [
        `${factor.label}: ${fmt(factor.val)} → `,
        el("code", { text: `×${fmt(factor.mult)}` })
      ]);
    }

    const [title, itemsData] = template(factor);
    const listItems = itemsData.map(item => {
      if (typeof item === 'string') return el("li", { text: item });
      if (item.complex && item.code) return el("li", {}, [item.complex, el("code", { text: item.code })]);
      if (item.note) return el("li", { class: "note", text: item.note });
    }).filter(Boolean);

    const subList = el("ul");
    const fragment = document.createDocumentFragment();
    listItems.forEach(item => fragment.appendChild(item));
    subList.appendChild(fragment);

    return el("li", { text: title }, [subList]);
  };

  const createPrecisionToggle = () => {
    const btn = el("button", {
      type: "button",
      class: "toggle-precision",
      text: showFullPrecision ? "Beautify!" : "Want to see?"
    });

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (resultContainer?.dataset) {
        const newState = resultContainer.dataset.showFullPrecision === "1" ? "0" : "1";
        resultContainer.dataset.showFullPrecision = newState;
        renderMultiplierBreakdown(getCurrentCalculationState());
        if (typeof showSnackbar === 'function') {
          showSnackbar(newState === "1" ? "Precise numbers displayed" : "Rounded numbers displayed");
        }
      }
    });
    return btn;
  };

  const precisionBtn = createPrecisionToggle();
  const swapSelect = dropdownManager.createSwapSelect(calculationState, isPenMode);

  const factorListElement = el("ul", { class: "factor-breakdown" });
  const factorFragment = document.createDocumentFragment();
  factorList.map(createFactorItem).forEach(item => factorFragment.appendChild(item));
  factorListElement.appendChild(factorFragment);

  const multiplierParts = factorList.map(factor =>
    factor.show === false ? "× 1.00 (no " + factor.label.toLowerCase() + ")" : "× " + fmt(factor.mult));

  const targetInfo = [tSize, tRace, tAttr].filter(Boolean).join(" + ");

  const container = el("div", { id: "multiplier-breakdown", class: "multiplier-breakdown" });

  const mainContent = [
    el("blockquote", { class: "noted" }, [
      "By default, every factor starts at ×1.00. Numbers show how it changes with your stats.",
      el("br"), el("br"),
      "Values shown to two decimal places for readability. The final result is computed with full precision(",
      precisionBtn,
      "), so it may differ slightly if you recompute using the displayed (rounded) numbers."
    ]),
    factorListElement,
    el("hr", { class: "separ" }),
    el("div", { id: "swap-wrapper", class: "breakdown-swap-wrapper" }, [swapSelect]),
    el("p", {}, ["Your multiplier to ", el("i", { text: `${targetInfo} (${tDefKey})` }), ":"]),
    el("blockquote", { class: "noted" }, [
      `1.00 ${multiplierParts.join(" ")} = `,
      el("code", { text: `×${fmt(mult)}` }),
      el("br"), el("br"),
      "Only base multipliers! Real output depends on class, skills, buffs (vesper, blue and white stack), and more. More accurate? Just use ",
      el("a", {
        class: "job-sim",
        target: "_blank", 
        href: "//discord.com/channels/784407151342256148/909016309218541568/1407521807459811328",
        text: "job sim!"
      }),
      el("br"), el("br"),
      "Avg 130, Necro, Ogre, Ktul defs less accurate than others!",
      el("br"), el("br"), 
      "In the table, an upward arrow means higher than your stat, a square means roughly equal (±3%), and a downward means lower."
    ])
  ];

  const contentFragment = document.createDocumentFragment();
  mainContent.forEach(item => contentFragment.appendChild(item));
  container.appendChild(contentFragment);

  resultContainer.innerHTML = "";
  resultContainer.appendChild(container);
}

// ======== RECOMMENDATION ========
const RECOMMENDATION_CONFIG = {
  randomMode: 'clamp',
  maxAttempts: 500,
  centerScale: 0.25,
  jitter: 0.12,
  jitterStep: 0.025,
  jitterStepEvery: 35,
  jitterMax: 0.50,
  clampMaxFraction: 3.5,
  clampMaxAbsolute: 0.20,
  upDownThreshold: 2,
  raceAttrCap: 310,
  raceAttrSoloCap: 250,
  raceAttrTol: 6,
  smallThreshold: 115,
  smallMin: 85,
  smallExp: 0.75,
  ratioMin: 0.32,
  ratioMax: 0.64,
  ratioNoise: 0.12,
  bias: {
    main: 1.0,
    dmg: 0.95,
    elem: 0.90,
    size: 0.90,
    race: 0.72,
    attr: 0.72
  },
  cats: [
    { label: '6-12%', min: 1.06, max: 1.12 },
    { label: '18-24%', min: 1.18, max: 1.24 },
    { label: '32-48%', min: 1.32, max: 1.48 },
    { label: '64-128%', min: 1.64, max: 2.28 }
  ],
  forSmallCats: [
    { label: '84-168%', min: 1.84, max: 2.68 },
    { label: '180-270%', min: 2.80, max: 3.70 },
    { label: '320-480%', min: 4.32, max: 5.80 },
    { label: '510-720%', min: 6.10, max: 8.20 }
  ],
  randomCache: { values: new Array(100), index: 0 }
};
function calculateRecommendationWeights(params) {
  const { includeRace, includeAttr, baseMain, baseDmg, baseElem, baseSize, baseRace, baseAttr } = params;
  const bias = RECOMMENDATION_CONFIG.bias;

  const weights = [
    baseMain * bias.main,
    baseDmg * bias.dmg,
    baseElem * bias.elem,
    baseSize * bias.size
  ];

  const maxWeight = Math.max(...weights, 1);
  const normalizedWeights = weights.map(w => w / maxWeight);
  const coreSum = normalizedWeights.reduce((sum, w) => sum + w, 0) || 1;

  const coreShare = (includeRace || includeAttr) ? 0.8 : 1.0;
  const additionalShare = 1 - coreShare;

  const finalWeights = {
    main: (normalizedWeights[0] / coreSum) * coreShare,
    dmg: (normalizedWeights[1] / coreSum) * coreShare,
    elem: (normalizedWeights[2] / coreSum) * coreShare,
    size: (normalizedWeights[3] / coreSum) * coreShare,
    race: 0,
    attr: 0
  };

  if (includeRace || includeAttr) {
    const effectiveRace = includeRace
      ? Math.max(Math.pow(baseRace, RECOMMENDATION_CONFIG.smallExp), RECOMMENDATION_CONFIG.smallMin)
      : 0;
    const effectiveAttr = includeAttr
      ? Math.max(Math.pow(baseAttr, RECOMMENDATION_CONFIG.smallExp), RECOMMENDATION_CONFIG.smallMin)
      : 0;

    const raceAvailable = includeRace && effectiveRace > 0 && effectiveRace < RECOMMENDATION_CONFIG.raceAttrCap;
    const attrAvailable = includeAttr && effectiveAttr > 0 && effectiveAttr < RECOMMENDATION_CONFIG.raceAttrCap;

    if (raceAvailable && attrAvailable) {
      const combinedSum = effectiveRace + effectiveAttr;
      finalWeights.race = (effectiveRace / combinedSum) * additionalShare;
      finalWeights.attr = (effectiveAttr / combinedSum) * additionalShare;
    } else if (raceAvailable) {
      finalWeights.race = additionalShare;
    } else if (attrAvailable) {
      finalWeights.attr = additionalShare;
    } else {
      const redistribution = additionalShare * 0.25;
      finalWeights.main += redistribution;
      finalWeights.dmg += redistribution;
      finalWeights.elem += redistribution;
      finalWeights.size += redistribution;
    }
  }

  const totalSum = Object.values(finalWeights).reduce((sum, w) => sum + w, 0) || 1;
  Object.keys(finalWeights).forEach(key => {
    finalWeights[key] /= totalSum;
  });

  return finalWeights;
}
function generateRecommendationTable(gameState) {
  if (!isResultShown) return;

  const getRandomValue = () => {
    if (RECOMMENDATION_CONFIG.randomCache.index >= RECOMMENDATION_CONFIG.randomCache.values.length) {
      for (let i = 0; i < 100; i++) {
        RECOMMENDATION_CONFIG.randomCache.values[i] = Math.random();
      }
      RECOMMENDATION_CONFIG.randomCache.index = 0;
    }
    return RECOMMENDATION_CONFIG.randomCache.values[RECOMMENDATION_CONFIG.randomCache.index++];
  };

  const generateRandomValue = (baseValue, jitter = RECOMMENDATION_CONFIG.jitter) => {
    const mode = RECOMMENDATION_CONFIG.randomMode;

    if (mode === 'clamp') {
      const delta = (getRandomValue() * 2 - 1) * jitter;
      const maxClamp = Math.min(
        RECOMMENDATION_CONFIG.clampMaxFraction * jitter,
        RECOMMENDATION_CONFIG.clampMaxAbsolute
      );
      const clampedDelta = Math.max(Math.min(delta, maxClamp), -maxClamp);
      return Math.max(0, baseValue * (1 + clampedDelta));
    }

    if (mode === 'normal') {
      let u1 = 0, u2 = 0;
      while (u1 === 0) u1 = getRandomValue();
      while (u2 === 0) u2 = getRandomValue();
      const normalValue = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
      return Math.max(0, baseValue * (1 + normalValue * jitter * 0.5));
    }

    const delta = (getRandomValue() * 2 - 1) * jitter;
    return Math.max(0, baseValue * (1 + delta));
  };

  const applySmallValueAdjustment = (value, raceValue, attrValue) => {
    const combinedTotal = raceValue + attrValue;
    const isSmall = combinedTotal > 0 && combinedTotal < RECOMMENDATION_CONFIG.smallThreshold;
    return isSmall
      ? Math.max(Math.pow(value, RECOMMENDATION_CONFIG.smallExp), RECOMMENDATION_CONFIG.smallMin)
      : value;
  };

  const getMaxAllowedValue = (userValue, capLimit, tolerance, isSmall) => {
    if (userValue >= capLimit) {
      return isSmall ? capLimit + tolerance : userValue + tolerance;
    }
    return capLimit;
  };

  const avoidCapLimit = (value, capLimit) => {
    if (value < capLimit) return value;
    const offset = capLimit * (0.01 + getRandomValue() * 0.02);
    return capLimit - offset;
  };

  const avoidRoundTen = (value) => {
    const rounded = Math.round(value);
    return rounded % 10 === 0 ? rounded + 1 : rounded;
  };

  const getCellClass = (currentValue, baseValue) => {
    const diff = Math.round(+currentValue || 0) - Math.round(+baseValue || 0);
    if (diff >= RECOMMENDATION_CONFIG.upDownThreshold) return 'up';
    if (diff <= -RECOMMENDATION_CONFIG.upDownThreshold) return 'down';
    return 'neutral';
  };

  const originalMultiplier = +gameState.mult || 1;
  const recommendationContainer = DOM_ELEMENTS.rec;
  recommendationContainer.innerHTML = '';

  const shouldIncludeRace = !!(gameState.tRace) && (+gameState.raceVal || 0) > 0;
  const shouldIncludeAttr = !!(gameState.tAttr) && (+gameState.attrVal || 0) > 0;
  const isPenetrationMode = gameState.atkType === 'pen';

  const userStats = {
    main: isPenetrationMode ? (+gameState.penVal || 0) : (+gameState.critVal || 0),
    dmg: +gameState.dmgVal || 0,
    size: +gameState.sizeEnhVal || 0,
    elem: +gameState.elemEnhVal || 0,
    attr: shouldIncludeAttr ? (+gameState.attrVal || 0) : 0,
    race: shouldIncludeRace ? (+gameState.raceVal || 0) : 0
  };

  const statWeights = calculateRecommendationWeights({
    includeRace: shouldIncludeRace,
    includeAttr: shouldIncludeAttr,
    baseMain: userStats.main,
    baseDmg: userStats.dmg,
    baseElem: userStats.elem,
    baseSize: userStats.size,
    baseRace: userStats.race,
    baseAttr: userStats.attr
  });

  const centerScale = RECOMMENDATION_CONFIG.centerScale;
  const centeredValues = {
    main: userStats.main * (1 + statWeights.main * centerScale),
    dmg: userStats.dmg * (1 + statWeights.dmg * centerScale),
    elem: userStats.elem * (1 + statWeights.elem * centerScale),
    size: userStats.size * (1 + statWeights.size * centerScale)
  };

  const adjustedRace = shouldIncludeRace 
    ? applySmallValueAdjustment(userStats.race, userStats.race, userStats.attr) 
    : 0;
  const adjustedAttr = shouldIncludeAttr 
    ? applySmallValueAdjustment(userStats.attr, userStats.race, userStats.attr) 
    : 0;

  const centeredRaceValue = shouldIncludeRace 
    ? Math.min(adjustedRace * (1 + statWeights.race * centerScale), RECOMMENDATION_CONFIG.raceAttrCap) 
    : 0;
  const centeredAttrValue = shouldIncludeAttr 
    ? Math.min(adjustedAttr * (1 + statWeights.attr * centerScale), RECOMMENDATION_CONFIG.raceAttrCap) 
    : 0;

  const baseExtras = {
    blue3: +gameState.blueGroup3Val || 0,
    blue8: +gameState.blueGroup8Val || 0,
    vesper: +gameState.vesperVal || 0,
    white: +gameState.whiteVal || 0,
    dmgStack: +gameState.dmgStackVal || 0,
    reaperValue: +gameState.reaperValue || 0,
    spearValue: +gameState.spearValue || 0
  };

  const calculateRaceAttrValues = (currentJitter) => {
    let raceValue = 0;
    let attrValue = 0;

    if (shouldIncludeAttr && shouldIncludeRace) {
      const userTotal = userStats.race + userStats.attr;
      const boostedTotal = adjustedRace + adjustedAttr;
      const isSmall = userTotal > 0 && userTotal < RECOMMENDATION_CONFIG.smallThreshold;
      const maxTotal = getMaxAllowedValue(userTotal, RECOMMENDATION_CONFIG.raceAttrCap, RECOMMENDATION_CONFIG.raceAttrTol, isSmall);

      const randomTotal = avoidCapLimit(Math.min(generateRandomValue(boostedTotal, currentJitter), maxTotal), maxTotal);
      const ratio = RECOMMENDATION_CONFIG.ratioMin + getRandomValue() * (RECOMMENDATION_CONFIG.ratioMax - RECOMMENDATION_CONFIG.ratioMin);

      raceValue = randomTotal * ratio;
      attrValue = randomTotal * (1 - ratio);

      const actualSum = raceValue + attrValue;
      if (actualSum > maxTotal) {
        const scale = avoidCapLimit(maxTotal, maxTotal) / actualSum;
        raceValue *= scale;
        attrValue *= scale;
      }
    } else if (shouldIncludeRace || shouldIncludeAttr) {
      const userSingle = shouldIncludeRace ? userStats.race : userStats.attr;
      const boostedSingle = shouldIncludeRace ? adjustedRace : adjustedAttr;
      const isSmall = userSingle > 0 && userSingle < RECOMMENDATION_CONFIG.smallThreshold;
      const maxSingle = getMaxAllowedValue(userSingle, RECOMMENDATION_CONFIG.raceAttrSoloCap, RECOMMENDATION_CONFIG.raceAttrTol, isSmall);

      const generatedValue = avoidCapLimit(Math.min(generateRandomValue(boostedSingle, currentJitter), maxSingle), maxSingle);

      if (shouldIncludeRace) {
        raceValue = generatedValue;
      } else {
        attrValue = generatedValue;
      }
    }

    return { raceValue, attrValue };
  };

  const generateRecommendationRow = (currentJitter) => {
    const statValues = {
      pen: +gameState.penVal || 0,
      crit: +gameState.critVal || 0,
      dmg: generateRandomValue(centeredValues.dmg, currentJitter),
      elem: generateRandomValue(centeredValues.elem, currentJitter),
      size: generateRandomValue(centeredValues.size, currentJitter)
    };

    if (isPenetrationMode) {
      statValues.pen = generateRandomValue(centeredValues.main, currentJitter);
    } else {
      statValues.crit = generateRandomValue(centeredValues.main, currentJitter);
    }

    const { raceValue, attrValue } = calculateRaceAttrValues(currentJitter);

    const { mult: calculatedMultiplier } = calculateMultiplier({
      atkType: isPenetrationMode ? 'pen' : 'crit',
      pen: +statValues.pen || 0,
      crit: +statValues.crit || 0,
      dmg: +statValues.dmg || 0,
      sizeEnh: +statValues.size || 0,
      elemEnh: +statValues.elem || 0,
      race: +raceValue || 0,
      attr: +attrValue || 0,
      weapon: gameState.weapon || '',
      tSize: gameState.tSize || '',
      wElem: gameState.wElem || '',
      tAttr: gameState.tAttr || '',
      tRace: gameState.tRace || '',
      tDefKey: gameState.tDefKey || '',
      extras: baseExtras
    });

    return {
      mainVal: avoidRoundTen(isPenetrationMode ? statValues.pen : statValues.crit),
      dmgVal: avoidRoundTen(statValues.dmg),
      elemVal: avoidRoundTen(statValues.elem),
      sizeVal: avoidRoundTen(statValues.size),
      raceVal: shouldIncludeRace ? avoidRoundTen(raceValue) : null,
      attrVal: shouldIncludeAttr ? avoidRoundTen(attrValue) : null,
      newMultiplier: calculatedMultiplier
    };
  };

  const hasSmallCombined = shouldIncludeRace && shouldIncludeAttr &&
    (userStats.race + userStats.attr > 0 && userStats.race + userStats.attr < RECOMMENDATION_CONFIG.smallThreshold);
  const categories = hasSmallCombined ? RECOMMENDATION_CONFIG.forSmallCats : RECOMMENDATION_CONFIG.cats;

  const columnHeaders = ['STAT', isPenetrationMode ? 'PEN' : 'CRIT', 'P/M BO', 'Element', 'Size'];
  if (shouldIncludeRace) columnHeaders.push('Race');
  if (shouldIncludeAttr) columnHeaders.push('Attribute');
  columnHeaders.push('Multiplier', '\u0394');

  const tableFragments = [];

  for (const category of categories) {
    const uniqueKeys = new Set();
    const uniqueDeltas = new Set();
    const uniqueValues = {
      main: new Set(),
      dmg: new Set(),
      elem: new Set(),
      size: new Set(),
      attr: new Set(),
      race: new Set()
    };

    const acceptedRows = [];
    let attempts = 0;
    let currentJitter = RECOMMENDATION_CONFIG.jitter;

    while (acceptedRows.length < 5 && attempts < RECOMMENDATION_CONFIG.maxAttempts) {
      attempts++;

      const candidate = generateRecommendationRow(currentJitter);

      if (candidate.newMultiplier <= originalMultiplier) continue;

      const ratio = candidate.newMultiplier / originalMultiplier;
      if (ratio < category.min || ratio > category.max) continue;

      const rowKey = `${candidate.mainVal}|${candidate.dmgVal}|${candidate.elemVal}|${candidate.sizeVal}|${candidate.raceVal || '-'}|${candidate.attrVal || '-'}`;
      if (uniqueKeys.has(rowKey)) continue;

      if (
        uniqueValues.main.has(candidate.mainVal) ||
        uniqueValues.dmg.has(candidate.dmgVal) ||
        uniqueValues.elem.has(candidate.elemVal) ||
        uniqueValues.size.has(candidate.sizeVal) ||
        (shouldIncludeAttr && uniqueValues.attr.has(candidate.attrVal)) ||
        (shouldIncludeRace && uniqueValues.race.has(candidate.raceVal))
      ) {
        continue;
      }

      if (
        candidate.mainVal > userStats.main &&
        candidate.dmgVal > userStats.dmg &&
        candidate.elemVal > userStats.elem &&
        candidate.sizeVal > userStats.size &&
        (!shouldIncludeRace || candidate.raceVal > userStats.race) &&
        (!shouldIncludeAttr || candidate.attrVal > userStats.attr)
      ) {
        continue;
      }

      const deltaPercent = ((candidate.newMultiplier - originalMultiplier) / originalMultiplier) * 100;
      const roundedDelta = Number(deltaPercent.toFixed(1));
      if (uniqueDeltas.has(roundedDelta)) continue;

      uniqueKeys.add(rowKey);
      uniqueDeltas.add(roundedDelta);
      uniqueValues.main.add(candidate.mainVal);
      uniqueValues.dmg.add(candidate.dmgVal);
      uniqueValues.elem.add(candidate.elemVal);
      uniqueValues.size.add(candidate.sizeVal);
      if (shouldIncludeAttr) uniqueValues.attr.add(candidate.attrVal);
      if (shouldIncludeRace) uniqueValues.race.add(candidate.raceVal);

      acceptedRows.push({
        main: candidate.mainVal,
        dmg: candidate.dmgVal,
        elem: candidate.elemVal,
        size: candidate.sizeVal,
        attr: candidate.attrVal,
        race: candidate.raceVal,
        newMultiplier: candidate.newMultiplier,
        deltaPercent: deltaPercent
      });

      if (acceptedRows.length < 5 && attempts % RECOMMENDATION_CONFIG.jitterStepEvery === 0) {
        currentJitter = Math.min(currentJitter + RECOMMENDATION_CONFIG.jitterStep, RECOMMENDATION_CONFIG.jitterMax);
      }
    }

    if (acceptedRows.length === 0) continue;

    acceptedRows.sort((a, b) => {
      if (b.deltaPercent !== a.deltaPercent) return b.deltaPercent - a.deltaPercent;
      if (b.newMultiplier !== a.newMultiplier) return b.newMultiplier - a.newMultiplier;
      return b.main - a.main;
    });

    const table = document.createElement('table');
    table.className = 'recommend-table';
    table.innerHTML = `<caption>Increase ${category.label}</caption>`;

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = columnHeaders.map(h => `<th>${h}</th>`).join('');
    table.appendChild(headerRow);

    const tbody = document.createElement('tbody');

    for (let i = 0; i < acceptedRows.length; i++) {
      const row = acceptedRows[i];
      const tr = document.createElement('tr');

      let html = `<td class="build">BUILD#${i + 1}</td>`;
      html += `<td><span class="${getCellClass(row.main, userStats.main)}">${row.main}</span></td>`;
      html += `<td><span class="${getCellClass(row.dmg, userStats.dmg)}">${row.dmg}</span></td>`;
      html += `<td><span class="${getCellClass(row.elem, userStats.elem)}">${row.elem}</span></td>`;
      html += `<td><span class="${getCellClass(row.size, userStats.size)}">${row.size}</span></td>`;

      if (shouldIncludeRace) {
        html += `<td><span class="${getCellClass(row.race, userStats.race)}">${row.race}</span></td>`;
      }
      if (shouldIncludeAttr) {
        html += `<td><span class="${getCellClass(row.attr, userStats.attr)}">${row.attr}</span></td>`;
      }

      html += `<td class="mult">x${row.newMultiplier.toFixed(2)}</td>`;
      html += `<td class="delta">+${row.deltaPercent.toFixed(1)}%</td>`;

      tr.innerHTML = html;
      tbody.appendChild(tr);
    }

    const userRow = document.createElement('tr');
    userRow.className = 'your-stats-values';

    let userHTML = '<td class="yours-label">YOURS</td>';
    userHTML += `<td><span>${userStats.main}</span></td>`;
    userHTML += `<td><span>${userStats.dmg}</span></td>`;
    userHTML += `<td><span>${userStats.elem}</span></td>`;
    userHTML += `<td><span>${userStats.size}</span></td>`;

    if (shouldIncludeRace) userHTML += `<td><span>${userStats.race}</span></td>`;
    if (shouldIncludeAttr) userHTML += `<td><span>${userStats.attr}</span></td>`;

    userHTML += `<td class="mult current-mult">x${gameState.mult.toFixed(2)}</td>`;
    userHTML += '<td class="delta current-delta">-</td>';

    userRow.innerHTML = userHTML;
    tbody.appendChild(userRow);

    table.appendChild(tbody);

    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    wrapper.appendChild(table);
    tableFragments.push(wrapper);
  }

  for (const fragment of tableFragments) {
    recommendationContainer.appendChild(fragment);
  }
}
function regenerateRecommendations() {
  if (!isResultShown) return;
  const recalcState = getCurrentCalculationState();
  generateRecommendationTable(recalcState);
}

// ======== FLASH ======
let isTestReaperActive = false;
let isTestSpearActive = false;
let isFlashActive = false;
let currentAnimatingWeapon = null;
const isMobile = () => window.innerWidth < 480; // snackbar use this too
const debounceMap = new Map();
function smoothDebounce(fn, delay, key) {
  const existing = debounceMap.get(key);
  if (existing) {
    clearTimeout(existing);
  }
  
  const timeoutId = setTimeout(() => {
    debounceMap.delete(key);
    fn();
  }, delay);
  
  debounceMap.set(key, timeoutId);
}
const LIGHTNING_STYLES = {
  flash: 'lightning-flash-overlay',
  lightning: 'lightning-icon'
};
const TIMING = {
  buttonCooldown: 1600,
  flashTrigger: 150,
  calculationDelayOn: 950, // Execute saat sustained glow phase - perfect sync (OFF → ON)
  calculationDelayOff: 100, // Instant response tanpa delay (ON → OFF)
  animationDuration: 1800,
  emergencyCleanup: 2200
};
function simulateFlash(event) {
  const btn = event?.currentTarget;
  if (!btn || btn.disabled) return;
  
  // Temporary disable untuk prevent spam
  btn.disabled = true;
  setTimeout(() => {
    btn.disabled = false;
  }, TIMING.buttonCooldown);
  
  const isReaper = btn === DOM_ELEMENTS.testReaper;
  const prefix = isReaper ? 'reaper' : 'spear';
  const oppositePrefix = isReaper ? 'spear' : 'reaper';
  
  // Capture state SEBELUM toggle untuk deteksi transisi
  const wasActive = isReaper ? isTestReaperActive : isTestSpearActive;
  
  // Update state (toggle) - SELALU JALAN
  if (isReaper) {
    isTestReaperActive = !isTestReaperActive;
    btn.classList.toggle('activated', isTestReaperActive);
  } else {
    isTestSpearActive = !isTestSpearActive;
    btn.classList.toggle('activated', isTestSpearActive);
  }
  
  const isNowActive = isReaper ? isTestReaperActive : isTestSpearActive;
  const isTransitionToOn = !wasActive && isNowActive;
  
  // FORCE CANCEL hanya flow animasi & delay calc dari weapon lain (state tetap jalan)
  if (isTransitionToOn && currentAnimatingWeapon && currentAnimatingWeapon !== prefix) {
    // Cancel HANYA debounce animasi dan calculation dari weapon yang sedang animasi
    const cancelFlash = debounceMap.get(`${oppositePrefix}-flash`);
    const cancelCalc = debounceMap.get(`${oppositePrefix}-calc`);
    
    if (cancelFlash) {
      clearTimeout(cancelFlash);
      debounceMap.delete(`${oppositePrefix}-flash`);
    }
    if (cancelCalc) {
      clearTimeout(cancelCalc);
      debounceMap.delete(`${oppositePrefix}-calc`);
    }

  }
  
  // Set current animating weapon jika OFF→ON
  if (isTransitionToOn) {
    currentAnimatingWeapon = prefix;
    
    // Clear setelah animasi selesai
    setTimeout(() => {
      if (currentAnimatingWeapon === prefix) {
        currentAnimatingWeapon = null;
      }
    }, TIMING.calculationDelayOn + 100);
  }
  
  // Trigger flash animation HANYA jika OFF → ON
  if (isTransitionToOn) {
    smoothDebounce(triggerPulseFlash, TIMING.flashTrigger, `${prefix}-flash`);
    DOM_ELEMENTS.submit.textContent = "Calculating...";
  }
  
  // Main calculation timing:
  // - OFF → ON: execute saat animasi hampir selesai (dramatisasi)
  // - ON → OFF: langsung execute tanpa delay animasi
  // Calculation SELALU execute untuk weapon ini, hanya timing yang beda
  const calcDelay = isTransitionToOn ? TIMING.calculationDelayOn : TIMING.calculationDelayOff;
  
  smoothDebounce(() => {
    if (typeof processMainCalculation === 'function') {
      processMainCalculation();
    }
  }, calcDelay, `${prefix}-calc`);
  
  // Snackbar notification
  if (typeof showSnackbar === 'function') {
    const weaponName = isReaper ? 'Reaper' : 'Spear';
    const status = isNowActive ? 'Flash Active' : 'Off';
    showSnackbar(`${weaponName} ${status}`);
  }
}
function triggerPulseFlash() {
  // Guard: hanya untuk mobile
  if (!isMobile()) {
    return;
  }
  
  // Guard: prevent double execution
  if (isFlashActive) return;
  
  isFlashActive = true;
  
  // Use RAF untuk smooth animation
  requestAnimationFrame(() => {
    const flash = document.createElement('div');
    const lightning = document.createElement('div');
    
    // Apply CSS classes
    flash.className = LIGHTNING_STYLES.flash;
    lightning.className = LIGHTNING_STYLES.lightning;
    
    flash.appendChild(lightning);
    
    // DOM insertion dengan error handling
    try {
      document.body.appendChild(flash);
    } catch (e) {
      console.warn('Flash DOM insertion failed', e);
      isFlashActive = false;
      return;
    }
    
    // Cleanup function
    const cleanup = () => {
      if (flash.parentNode) {
        flash.parentNode.removeChild(flash);
      }
      isFlashActive = false;
    };
    
    // Primary cleanup: saat animasi selesai
    setTimeout(cleanup, TIMING.animationDuration);
    
    // Emergency fallback cleanup
    setTimeout(() => {
      if (isFlashActive && flash.parentNode) {
        cleanup();
      }
    }, TIMING.emergencyCleanup);
  });
}

// ========== DROPDOWN ==========
class DropdownManager {
  constructor(config = {}) {
    // Precomputed constants
    this.constants = {
      formKeys: ['vesperSet', 'whiteSet', 'blueSet', 'tRace', 'tAttr', 'atkType', 'wElem', 'tSize', 'tDef', 'weapon', 'pen', 'crit'],
      mobMapping: { 'sizeMob': 'tSize', 'raceMob': 'tRace', 'attributeMob': 'tAttr' },
      disableButtons: ['resetAll', 'resetRek', 'testSpear', 'testReaper'],
      relatedFields: { 'tSize': 'sizeEnh', 'tRace': 'race', 'tAttr': 'attr' },
      calcFields: ['dmg', 'dmgStack', 'sizeEnh', 'race', 'attr', 'elemEnh'],
      setKeys: ['blueSet', 'vesperSet', 'whiteSet']
    };

    // Single source of truth untuk semua konfigurasi
    this.config = {
      formKeys: this.constants.formKeys,
      mobMapping: this.constants.mobMapping,
      disableButtons: this.constants.disableButtons,
      relatedFields: this.constants.relatedFields,
      calculationFields: this.constants.calcFields,
      
      labels: {
        static: {
          blueSetLabel: "Blue SET", 
          vesperSetLabel: "Vesper SET", 
          whiteSetLabel: "White SET (110*3)",
          atkTypeLabel: "Attack Type", 
          weaponLabel: "Weapon", 
          wElemLabel: "Weapon Element",
          tSizeLabel: "Target Size", 
          tRaceLabel: "Target Race", 
          tAttrLabel: "Target Attribute",
          tDefLabel: "MVP/MINI", 
          penLabel: "P/M PEN %", 
          critLabel: "Critical DMG Bonus %",
          elemEnhLabel: "Element Enhance %", 
          sizeLabel: "DMG to Size %", 
          raceLabel: "Race",
          attrLabel: "Attribute", 
          dmgLabel: "Final P/M Damage Bonus %", 
          dmgStackLabel: "Extra: Final Damage Stack %"
        },
        dynamic: {
          vesper: { "48": "BRO?!", "56": "REALY?!", "64": "Wake UP!", "72": "STOP Dreaming!", "80": "F2P DETECTED!" },
          white: { "36": "Why?", "42": "Still dreging yaa", "48": "PFTTT!!", "54": "Have a Nice Day!" }
        }
      },

      // Unified dropdown + field configurations
      fields: {
        atkType: { 
          type: 'dropdown',
          options: [{ value: "pen", label: "P/M PEN" }, { value: "crit", label: "CRIT" }], 
          placeholder: "Select Attack Type",
          onClear: ['pen', 'crit'],
          onUpdate: 'updateAttackTypeUI'
        },
        tSize: { type: 'dropdown', options: ["Small", "Medium", "Large"], placeholder: "Select Target Size" },
        tRace: { type: 'dropdown', options: () => RACE_TYPES, placeholder: "skip race", onClear: ['race'] },
        tAttr: { type: 'dropdown', options: () => Object.keys(getElementCounter()), placeholder: "skip attribute", onClear: ['attr'] },
        weapon: { type: 'dropdown', options: () => Object.keys(getWeaponSizeModifier()), placeholder: "Select Weapon Type" },
        wElem: { type: 'dropdown', options: () => Object.keys(getElementCounter()), placeholder: "Select Attribute" },
        tDef: { type: 'dropdown', options: () => Object.keys(getTargetDefenseData()), placeholder: "Select target", special: 'target' },
        vesperSet: { type: 'set', generator: 'vesper' },
        whiteSet: { type: 'set', generator: 'white' },
        blueSet: { type: 'set', generator: 'blue' },
        
        // Conditional fields dengan unified config
        race: { 
          type: 'conditional',
          dependsOn: 'tRace',
          active: (race) => ({ label: `DMG to ${race}`, placeholder: `dmg to ${race.toLowerCase()} %` }),
          default: { label: "Race", placeholder: "select target race first" }
        },
        attr: { 
          type: 'conditional',
          dependsOn: 'tAttr',
          active: (attr) => ({ label: `DMG to ${attr} Attribute`, placeholder: `dmg to ${attr.toLowerCase()} attribute %` }),
          default: { label: "Attribute", placeholder: "select target attribute first" }
        },
        elemEnh: { 
          type: 'conditional',
          dependsOn: 'wElem',
          active: (elem) => ({ label: `${elem} Enhance %`, placeholder: `${elem.toLowerCase()} enhance` }),
          default: { label: "Element Enhance %", placeholder: "select weapon attribute first" }
        },
        sizeEnh: { 
          type: 'conditional',
          dependsOn: 'tSize',
          active: (size) => ({ label: `DMG to ${size} %`, placeholder: `dmg to ${size.toLowerCase()}` }),
          default: { label: "DMG to Size %", placeholder: "select target size first" }
        },
        dmg: { 
          type: 'conditional',
          dependsOn: 'atkType',
          active: () => ({ placeholder: "final p/m damage bonus" }),
          default: { placeholder: "select attack type first" }
        },
        dmgStack: { 
          type: 'conditional',
          dependsOn: 'atkType',
          active: () => ({ placeholder: "final damage bonus/stack %" }),
          default: { placeholder: "select attack type first" }
        }
      },

      // Precomputed set generators
      setGenerators: {
        vesper: () => [{ value: "", label: "skip vesper set" }, ...Object.entries(VESPER_SET).map(([tier, val]) => ({ value: val, label: `Tier ${tier}` }))],
        white: () => [{ value: "", label: "skip white set" }, ...Object.entries(WHITE_SET).map(([tier, val]) => ({ value: val, label: tier }))],
        blue: () => [{ value: "", label: "skip blue set" }, ...Object.entries(BLUE_SET).flatMap(([multiplier, levels]) => Object.entries(levels).map(([lvl, val]) => ({ value: val, label: `Level ${lvl}*${multiplier}` })))]
      },

      // Event mapping untuk efisiensi
      eventMap: {
        'penCritSelect': 'atkType',
        'weaponSelect': 'weapon', 
        'weaponElementSelect': 'wElem',
        'targetSizeSelect': 'tSize',
        'targetRaceSelect': 'tRace',
        'targetElementSelect': 'tAttr'
      },

      // ...config
    };

    this.state = {
      selectionOrder: [],
      lockStates: new Map(),
      isDestroyed: false,
      isSwapping: false,
      updateTimer: null,
      listeners: new Map()
    };

    this.init();
  }

  // Unified listener management dengan proper cleanup
  addListener(element, event, handler) {
    if (!element) return;
    const key = `${element.id || Math.random()}-${event}`;
    if (this.state.listeners.has(key)) return;
    
    element.addEventListener(event, handler, { passive: true });
    this.state.listeners.set(key, { element, event, handler });
  }

  cleanup() {
    this.state.listeners.forEach(({ element, event, handler }) => {
      element?.removeEventListener(event, handler);
    });
    this.state.listeners.clear();
    clearTimeout(this.state.updateTimer);
  }

  init() {
    if (this.state.isDestroyed) return;
    this.populateAllDropdowns();
    this.bindEvents();
    this.updateAll();
    this.syncThreeSets();
  }

  // Unified form data
  getFormData() {
    return this.config.formKeys.reduce((data, key) => {
      const el = DOM_ELEMENTS[key];
      if (el) {
        data[key] = el.value || '';
        if (el.tagName === 'SELECT' && el.selectedOptions[0]) {
          data[`${key}Text`] = el.selectedOptions[0].textContent;
        }
      }
      return data;
    }, {});
  }

  getTargetData(targetKey) {
    if (!targetKey) return null;
    const rawData = getTargetDefenseData(targetKey);
    if (!rawData) return null;

    // Konsisten: enrich semua mob props dengan DOM fallback
    // Prioritas: lookup table dulu, baru DOM
    return {
      ...rawData,
      sizeMob: rawData.sizeMob || DOM_ELEMENTS.tSize?.value || "",
      raceMob: rawData.raceMob || DOM_ELEMENTS.tRace?.value || "",
      attributeMob: rawData.attributeMob || DOM_ELEMENTS.tAttr?.value || ""
    };
  }

  getCurrentTarget() {
    const targetKey = DOM_ELEMENTS.tDef?.value;
    return targetKey ? { key: targetKey, data: this.getTargetData(targetKey) } : null;
  }

  // Unified dropdown population
  populateAllDropdowns() {
    Object.entries(this.config.fields).forEach(([key, config]) => {
      if (config.type !== 'dropdown' && config.type !== 'set') return;
      
      const el = DOM_ELEMENTS[key];
      if (!el) return;

      if (config.generator) {
        this.populateOptions(el, this.config.setGenerators[config.generator]());
      } else {
        const options = typeof config.options === 'function' ? config.options() : config.options;
        this.populateOptions(el, options, config.placeholder);
      }
    });
  }

  populateOptions(select, options, placeholder) {
    if (!select) return;
    const fragment = document.createDocumentFragment();
    
    if (placeholder) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = placeholder;
      fragment.appendChild(opt);
    }
    
    options.forEach(optData => {
      const opt = document.createElement('option');
      opt.value = typeof optData === "string" ? optData : optData.value;
      opt.textContent = typeof optData === "string" ? optData : optData.label;
      if (optData.disabled) opt.disabled = true;
      fragment.appendChild(opt);
    });
    
    select.innerHTML = '';
    select.appendChild(fragment);
  }

  // Unified field state management
  setFieldState(element, disabled, activeText = '', inactiveText = '') {
    if (!element) return;
    
    element.disabled = disabled;
    element.placeholder = disabled ? inactiveText : activeText;
    
    const wrapper = element.closest('.input-wrap');
    if (wrapper) {
      wrapper.classList.toggle('locked', disabled);
      if (!disabled) wrapper.removeAttribute('data-temp-unlocked');
    }
  }

  clearFields(fieldIds) {
    for (let i = 0; i < fieldIds.length; i++) {
      const el = DOM_ELEMENTS[fieldIds[i]];
      if (el) el.value = '';
    }
  }

  // Unified mob properties handling
  applyMobProperties(targetData, mode = 'standard', lockOverride = null) {

    if (!targetData) return;
    
    Object.entries(this.config.mobMapping).forEach(([mobProp, domKey]) => {
      const el = DOM_ELEMENTS[domKey];
      if (!el) return;

      const targetValue = targetData[mobProp];
      const shouldLock = this.shouldLock(domKey, targetValue, mode, lockOverride);

      el.value = shouldLock ? targetValue : "";
      el.disabled = shouldLock;
      this.state.lockStates.set(domKey, shouldLock);
      
      const wrapper = el.closest('.input-wrap');
      if (wrapper) wrapper.classList.toggle('locked', shouldLock);

      // Clear related fields if not locked
      if (!shouldLock && !targetValue) {
        const relatedKey = this.config.relatedFields[domKey];
        if (relatedKey && DOM_ELEMENTS[relatedKey]) {
          const relatedField = DOM_ELEMENTS[relatedKey];
          relatedField.value = "";
          const relatedWrapper = relatedField.closest('.input-wrap');
          if (relatedWrapper) {
            relatedWrapper.classList.remove('locked');
            relatedWrapper.setAttribute('data-temp-unlocked', '1');
          }
        }
      }
    });
  }

  shouldLock(domKey, targetValue, mode, lockOverride) {
    if (lockOverride !== null) return lockOverride;
    const selectedKey = DOM_ELEMENTS.tDef?.value || "";
    
    return mode === 'swap' ? !!targetValue : (targetValue && !selectedKey.includes("Lvl."));
  }

  // Unified event binding - OPTIMIZED
  bindEvents() {
    // Single change handler untuk semua dropdown dengan early return
    this.addListener(document, 'change', (e) => {
      if (isResultShown) return;
      
      const fieldKey = this.config.eventMap[e.target.id];
      
      // Handle target change
      if (e.target === DOM_ELEMENTS.tDef) {
        this.handleTargetChange();
        return;
      }
      
      // Handle set changes
      if (this.constants.setKeys.includes(e.target.id)) {
        this.recordSelection(e.target);
        this.syncThreeSets();
        this.scheduleUpdate();
        return;
      }
      
      // Handle mapped fields
      if (fieldKey) {
        const fieldConfig = this.config.fields[fieldKey];
        if (fieldConfig?.onClear) this.clearFields(fieldConfig.onClear);
        if (fieldConfig?.onUpdate === 'updateAttackTypeUI') this.updateAttackTypeUI();
        this.scheduleUpdate();
      }
    });
  }

  handleTargetChange() {
    if (this.state.isSwapping) return;
    
    const selectedKey = DOM_ELEMENTS.tDef?.value;
    if (!selectedKey) return;

    const targetData = this.getTargetData(selectedKey);
    if (targetData) {
      
      this.applyMobProperties(targetData);
      this.syncBreakdownSwap(selectedKey);
      this.scheduleUpdate();
    }
  }

  recordSelection(selectEl) {
    const formData = this.getFormData();
    const wasCycleComplete = this.state.selectionOrder.length >= 3 || 
      (formData.blueSet && (formData.blueSetText || "").includes("*8"));

    if (!selectEl?.value) {
      this.state.selectionOrder = this.state.selectionOrder.filter(el => el !== selectEl);
      return;
    }

    this.state.selectionOrder = wasCycleComplete ? [selectEl] : 
      this.state.selectionOrder.includes(selectEl) ? this.state.selectionOrder : 
      [...this.state.selectionOrder, selectEl];
  }

  // Unified three sets sync
  syncThreeSets() {
    const setElements = this.constants.setKeys.map(k => DOM_ELEMENTS[k]).filter(Boolean);
    const formData = this.getFormData();
    const blueIs8x = (formData.blueSetText || "").includes("*8");

    // Reset all options
    setElements.forEach(el => Array.from(el.options).forEach(opt => opt.disabled = false));

    if (formData.blueSet && blueIs8x) {
      // Blue 8x selected, disable others
      [DOM_ELEMENTS.vesperSet, DOM_ELEMENTS.whiteSet].forEach(el => {
        if (el) {
          Array.from(el.options).forEach(opt => opt.disabled = !!opt.value);
          el.value = "";
        }
      });
    } else {
      // Normal sync logic
      if (this.state.selectionOrder.length > 0) {
        Array.from(DOM_ELEMENTS.blueSet?.options || []).forEach(opt => {
          if (opt.value && opt.textContent.includes("*8")) opt.disabled = true;
        });
      }

      if (this.state.selectionOrder.length >= 2) {
        setElements.filter(el => !this.state.selectionOrder.includes(el)).forEach(el => {
          Array.from(el.options).forEach(opt => opt.disabled = !!opt.value);
          el.value = "";
        });
      }

      // Handle disabled blue selection
      if (DOM_ELEMENTS.blueSet?.value && DOM_ELEMENTS.blueSet.selectedOptions[0]?.disabled) {
        DOM_ELEMENTS.blueSet.value = "";
        this.state.selectionOrder = this.state.selectionOrder.filter(el => el !== DOM_ELEMENTS.blueSet);
      }
    }
  }

  // Unified update system
  updateAll() {
    const formData = this.getFormData();
    this.updateStaticLabels();
    this.updateDynamicLabels(formData);
    this.updateConditionalFields(formData);
    this.updateAttackTypeUI();
  }

  updateStaticLabels() {
    Object.entries(this.config.labels.static).forEach(([key, label]) => {
      if (DOM_ELEMENTS[key]) DOM_ELEMENTS[key].textContent = label;
    });
  }

  updateDynamicLabels(formData) {
    if (DOM_ELEMENTS.vesperSetLabel) {
      DOM_ELEMENTS.vesperSetLabel.textContent = this.config.labels.dynamic.vesper[formData.vesperSet] || "Vesper SET";
    }
    if (DOM_ELEMENTS.whiteSetLabel) {
      DOM_ELEMENTS.whiteSetLabel.textContent = this.config.labels.dynamic.white[formData.whiteSet] || "White SET (110*3)";
    }
  }

  updateConditionalFields(formData) {
    Object.entries(this.config.fields).forEach(([key, config]) => {
      if (config.type !== 'conditional') return;
      
      const input = DOM_ELEMENTS[key];
      const label = DOM_ELEMENTS[`${key}Label`];
      const conditionValue = formData[config.dependsOn];
      
      if (!input || !config.active || !config.default) return;
      
      const settings = conditionValue ? config.active(conditionValue) : config.default;
      const isActive = !!conditionValue;
      
      input.disabled = !isActive;
      input.placeholder = settings.placeholder;
      if (label && settings.label) label.textContent = settings.label;
    });
  }

  updateAttackTypeUI() {
    const atkType = this.getFormData().atkType;
    const penGroup = document.querySelector('.form-group.pen-group');
    const critGroup = document.querySelector('.form-group.crit-group');

    [penGroup, critGroup].forEach(group => group?.classList.add('hidden'));

    if (atkType === 'pen' && penGroup) {
      penGroup.classList.remove('hidden');
      this.setFieldState(DOM_ELEMENTS.pen, false, 'total converted raw pen + final pen...');
      this.setFieldState(DOM_ELEMENTS.crit, true);
    } else if (atkType === 'crit' && critGroup) {
      critGroup.classList.remove('hidden');
      this.setFieldState(DOM_ELEMENTS.crit, false, 'critical damage bonus...');
      this.setFieldState(DOM_ELEMENTS.pen, true);
    } else {
      this.setFieldState(DOM_ELEMENTS.pen, true);
      this.setFieldState(DOM_ELEMENTS.crit, true);
    }
  }

  scheduleUpdate() {
    clearTimeout(this.state.updateTimer);
    this.state.updateTimer = setTimeout(() => {
      this.updateAll();
      this.state.updateTimer = null;
    }, 50);
  }

  // Swap functionality (same logic, streamlined flow)
  determineSwapMode(prevKey, nextKey) {
    if (!prevKey || !nextKey || nextKey === prevKey) return 'none';
    const prevData = this.getTargetData(prevKey);
    const nextData = this.getTargetData(nextKey);
    if (!prevData || !nextData) return 'manual';

    // Get raw data from lookup table (no DOM enrichment)
    const prevRaw = getTargetDefenseData(prevKey) || {};
    const nextRaw = getTargetDefenseData(nextKey) || {};
    
    // Current DOM state untuk validasi compatibility
    const currentDOM = {
      sizeMob: DOM_ELEMENTS.tSize?.value || "",
      raceMob: DOM_ELEMENTS.tRace?.value || "",
      attributeMob: DOM_ELEMENTS.tAttr?.value || ""
    };

    // Check setiap mob property untuk detect conflict
    for (const [mobProp] of Object.entries(this.config.mobMapping)) {
      const prevValue = prevRaw[mobProp];
      const nextValue = nextRaw[mobProp];
      const domValue = currentDOM[mobProp];

      // Case 1: Both defined but different → CONFLICT
      if (prevValue && nextValue && prevValue !== nextValue) return 'manual';
      
      // Case 2: Next has value, prev doesn't → check DOM compatibility
      if (!prevValue && nextValue && domValue && domValue !== nextValue) {
        return 'manual';
      }
      
      // Case 3: Prev has value, next doesn't → OK, bawa prev value (auto)
    }
    
    return 'auto';
  }

  executeSwap(nextKey, state, isPenMode) {
    const swapMode = this.determineSwapMode(this.getCurrentTarget()?.key, nextKey);
    if (swapMode === 'none') return;

    this.state.isSwapping = true;

    // Reset states and update target
    this.resetGlobalStates();
    if (DOM_ELEMENTS.tDef) DOM_ELEMENTS.tDef.value = nextKey;
    this.syncBreakdownSwap(nextKey);

    const targetData = this.getTargetData(nextKey);
    if (!targetData) {
      this.state.isSwapping = false;
      return;
    }

    if (swapMode === 'auto') {
      // Auto swap: apply properties and calculate
      this.applyMobProperties(targetData, 'swap');
      // Reset states and update target
      typeof processMainCalculation === 'function' && processMainCalculation();
      typeof showSnackbar === 'function' && showSnackbar('Auto calc triggered!');
      this.scheduleUpdate();
    } else {
      // Manual swap: apply properties, unlock fields, update UI
      this.applyMobPropertiesForManualSwap(targetData);
      this.unlockFieldsForManualSwap(isPenMode);
      this.updateUIForManualSwap(state, isPenMode);
      this.scheduleUpdate();
    }

    this.state.isSwapping = false;
  }

  applyMobPropertiesForManualSwap(targetData) {

    Object.entries(this.config.mobMapping).forEach(([mobProp, domKey]) => {
      const el = DOM_ELEMENTS[domKey];
      if (!el) return;

      // Unified logic: gunakan targetData yang sudah dienrich dari getTargetData()
      el.value = targetData[mobProp] || "";
      el.disabled = true;
      this.state.lockStates.set(domKey, true);
      
      const wrapper = el.closest('.input-wrap');
      if (wrapper) wrapper.classList.add('locked');
    });
  }

  unlockFieldsForManualSwap(isPenMode) {
    const fields = [...this.config.calculationFields, isPenMode ? "pen" : "crit"];
    fields.forEach(fieldName => {
      const field = DOM_ELEMENTS[fieldName];
      if (!field) return;

      const wrapper = field.closest(".input-wrap");
      if (wrapper?.querySelector('input[type="number"]')) {
        wrapper.classList.remove("locked");
        wrapper.dataset.tempUnlocked = "1";
      }
      field.disabled = false;
    });

    typeof unbindInputLockGuard === 'function' && unbindInputLockGuard();
  }

  updateUIForManualSwap(state, isPenMode) {
    // Update button states
    if (DOM_ELEMENTS.submit) DOM_ELEMENTS.submit.disabled = false;
    this.config.disableButtons.forEach(btnId => {
      if (DOM_ELEMENTS[btnId]) DOM_ELEMENTS[btnId].disabled = true;
    });

    // Clear results
    if (DOM_ELEMENTS.hasil) {
      DOM_ELEMENTS.hasil.dataset.specificMode = "0";
      DOM_ELEMENTS.hasil.textContent = 'Input your stats to see the result...';
    }
    if (DOM_ELEMENTS.rec) {
      DOM_ELEMENTS.rec.textContent = 'Balancing stat recommendations for a higher output multiplier.';
    }

    // Focus and validate
    const focusElement = isPenMode ? DOM_ELEMENTS.pen : DOM_ELEMENTS.crit;
    typeof scrollAndFocusElement === 'function' && 
      scrollAndFocusElement(focusElement, "Target swapped - please verify stats and recalculate!");

    typeof validateRequiredFields === 'function' && validateRequiredFields();
    typeof validateStatsVsTarget === 'function' && validateStatsVsTarget(state);
  }

  syncBreakdownSwap(targetKey) {
    const swapDropdown = document.querySelector('#breakdown-swap');
    if (swapDropdown && swapDropdown.value !== targetKey) {
      swapDropdown.value = targetKey;
    }
  }

  resetGlobalStates() {
    // Direct reset untuk semua global flags
    if (typeof isResultShown !== 'undefined') isResultShown = false;
    if (typeof isTestReaperActive !== 'undefined') isTestReaperActive = false;
    if (typeof isTestSpearActive !== 'undefined') isTestSpearActive = false;
    if (typeof isFlashActive !== 'undefined') isFlashActive = false;
    if (typeof keyboardListenersAdded !== 'undefined') keyboardListenersAdded = false;

    // Reset button states
    ['testSpear', 'testReaper'].forEach(btnId => {
      DOM_ELEMENTS[btnId]?.classList.remove('activated');
    });
  }

  createSwapSelect(state, isPenMode) {
    const select = document.createElement("select");
    select.id = "breakdown-swap";
    select.className = "breakdown-swap";

    const pen = +(state.penVal);
    const dmg = +(state.dmgVal);
    const currentKey = this.getCurrentTarget()?.key;
    const allTargetData = getTargetDefenseData();

    const options = Object.keys(allTargetData).map(key => {
      const data = allTargetData[key];
      const def = +(data?.def || 0);
      const dmgred = +(data?.dmgred || 0);
      const insufficient = dmg <= dmgred || (isPenMode && pen <= def);
      const swapMode = this.determineSwapMode(currentKey, key);
      const disabled = swapMode === 'auto' && insufficient;

      const text = disabled ? `${key} (cant auto calc)` : key;
      return `<option value="${key}"${disabled ? ' disabled' : ''}>${text}</option>`;
    });

    select.innerHTML = options.join('');
    select.value = state.tDefKey || "0def";

    if (!select.hasAttribute('data-dropdown-bound')) {
      select.onchange = () => this.executeSwap(select.value, state, isPenMode);
      select.setAttribute('data-dropdown-bound', 'true');
    }

    return select;
  }

  getSelectionOrder() {
    return this.state.selectionOrder;
  }

  destroy() {
    this.state.isDestroyed = true;
    this.state.isSwapping = false;
    this.cleanup();
    this.state.selectionOrder = [];
    this.state.lockStates.clear();
  }
}
const dropdownManager = new DropdownManager();

// ======== VALIDATION =========
class ValidationSSoT {
  constructor() {
    this.INVALID_CLASS = 'invalid-value';
    this.listeners = new Map();
    this.touchedFields = new Set();
    this.snackbarCooldowns = new Set();
    this.isInitialized = false;
    this.autoInit();
  }
  
  // Field type utilities
  isPenOrDmg = e => ['pen', 'dmg'].includes(e?.id);
  isRelatedNumeric = e => ['race', 'attr'].includes(e?.id);
  isNumeric = e => e?.type === 'number' || e?.classList.contains('numeric-input') ||
    this.isPenOrDmg(e) || this.isRelatedNumeric(e);
  isValidNumber = v => !isNaN(+v) && isFinite(+v);
  normalizeInput = v => String(v).replace(/[^\d.,]/g, '').replace(/,/g, '.').replace(/\.{2,}/g, '.').replace(/^\./, '0.').replace(/\.$/, '');
  
  // Listener management
  addListener(element, event, handler) {
    if (!element?.id) return false;
    const key = `${element.id}-${event}`;
    if (this.listeners.has(key)) return false;
    element.addEventListener(event, handler);
    this.listeners.set(key, { element, event, handler });
    return true;
  }
  
  removeListeners() {
    this.listeners.forEach(({ element, event, handler }) => element.removeEventListener(event, handler));
    this.listeners.clear();
  }
  
  // Message utilities
  showMessage = msg => typeof showSnackbar === 'function' && showSnackbar(msg);
  canShowSnackbar(elementId) {
    if (this.snackbarCooldowns.has(elementId)) return false;
    this.snackbarCooldowns.add(elementId);
    setTimeout(() => this.snackbarCooldowns.delete(elementId), 2000);
    return true;
  }
  
  // Core validation
  validateField(element, showMessages = false) {
    const value = element.value?.trim() || '';
    const isRelated = this.isRelatedNumeric(element);
    
    // Related field logic (race/attr depends on tRace/tAttr)
    if (isRelated) {
      const dropdown = element.id === 'race' ? DOM_ELEMENTS.tRace : DOM_ELEMENTS.tAttr;
      if (!dropdown?.value && !value) return { isValid: true, reason: 'related_empty' };
      if (dropdown?.value && !value) return { isValid: false, reason: 'related_required' };
    }
    
    // Basic validation
    if (!value) return { isValid: false, reason: 'empty' };
    if (this.isNumeric(element) && !this.isValidNumber(value)) return { isValid: false, reason: 'invalid_number' };
    
    const numValue = +value;
    const [min, max] = [element.getAttribute('min'), element.getAttribute('max')];
    
    // Range validation
    if (min && numValue < +min) {
      if (showMessages && this.canShowSnackbar(element.id)) {
        const fieldName = element.getAttribute('data-field-name') || element.id || 'Field';
        this.showMessage(`${fieldName} must be at least ${min}`);
      }
      return { isValid: false, reason: 'below_min' };
    }
    
    if (max && numValue > +max) {
      showMessages && this.canShowSnackbar(element.id) && this.showMessage('what are you doing?');
      return { isValid: false, reason: 'above_max' };
    }
    
    // Threshold validation for pen/dmg
    if (this.isPenOrDmg(element)) {
      const defData = getTargetDefenseData(DOM_ELEMENTS.tDef?.value);
      const threshold = element.id === 'pen' ? (+(defData?.def) || 0) : (+(defData?.dmgred) || 0);
      
      if (numValue <= threshold) {
        if (showMessages && this.canShowSnackbar(element.id)) {
          const minRequired = (threshold + 8).toFixed(2);
          const fieldType = element.id === 'pen' ? 'Final PEN' : 'Final P/M Bonus';
          const targetLabel = DOM_ELEMENTS.tDef?.options?.[DOM_ELEMENTS.tDef.selectedIndex]?.textContent || 'target';
          this.showMessage(`Need at least ${minRequired} ${fieldType} vs ${targetLabel}`);
        }
        return { isValid: false, reason: 'threshold_not_met' };
      }
    }
    
    return { isValid: true };
  }
  
  updateFieldState = (element, isValid) => {
    this.touchedFields.has(element.id) && element.classList.toggle(this.INVALID_CLASS, !isValid);
  };
  
  // Field setup
  setupField(element) {
    const validateHandler = (showMessages = false) => {
      const result = this.validateField(element, showMessages);
      this.updateFieldState(element, result.isValid);
    };
    
    const normalizeHandler = () => {
      if (this.isNumeric(element)) {
        const normalized = this.normalizeInput(element.value);
        normalized !== element.value && (element.value = normalized);
      }
    };
    
    // Event listeners
    this.addListener(element, 'focus', () => this.touchedFields.add(element.id));
    this.addListener(element, 'input', () => (normalizeHandler(), validateHandler(false)));
    this.addListener(element, 'blur', () => validateHandler(true));
    this.addListener(element, 'change', () => validateHandler(true));
  }
  
  // Initialization
  checkReady = () => typeof DOM_ELEMENTS !== 'undefined' && DOM_ELEMENTS;
  
  init() {
    if (this.isInitialized || !this.checkReady()) return false;
    
    // Setup all fields
    ['atkType', 'weapon', 'wElem', 'tDef', 'tSize', 'pen', 'crit', 'dmg', 'elemEnh', 'sizeEnh', 'race', 'attr', 'dmgStack']
    .map(key => DOM_ELEMENTS[key])
      .filter(Boolean)
      .forEach(element => this.setupField(element));
    
    // Setup threshold monitoring for pen/dmg
    DOM_ELEMENTS.tDef && this.addListener(DOM_ELEMENTS.tDef, 'change', () => {
      [DOM_ELEMENTS.pen, DOM_ELEMENTS.dmg]
      .filter(el => el?.value.trim())
        .forEach(el => {
          const result = this.validateField(el, this.canShowSnackbar(el.id));
          this.updateFieldState(el, result.isValid);
        });
    });
    
    return this.isInitialized = true;
  }
  
  autoInit() {
    if (document.readyState === 'complete') return this.init();
    const initHandler = () => this.init();
    document.readyState === 'loading' && document.addEventListener('DOMContentLoaded', initHandler);
    window.addEventListener('load', initHandler);
  }
  
  // Public validation methods
  validateAllRequired() {
    const fields = [
      { el: DOM_ELEMENTS.atkType, name: 'Attack Type' },
      { el: DOM_ELEMENTS.weapon, name: 'Weapon Type' },
      { el: DOM_ELEMENTS.wElem, name: 'Weapon Attribute' },
      { el: DOM_ELEMENTS.tDef, name: 'Target Boss' },
      { el: DOM_ELEMENTS.tSize, name: 'Target Size' },
      { el: DOM_ELEMENTS.pen, name: 'Final P M PEN %', condition: () => DOM_ELEMENTS.atkType?.value === 'pen' },
      { el: DOM_ELEMENTS.crit, name: 'Critical DMG Bonus %', condition: () => DOM_ELEMENTS.atkType?.value === 'crit' },
      { el: DOM_ELEMENTS.dmg, name: 'Final P M DMG Bonus %' },
      { el: DOM_ELEMENTS.elemEnh, name: 'Element Enhance %' },
      { el: DOM_ELEMENTS.sizeEnh, name: 'DMG to Size %' },
      { el: DOM_ELEMENTS.race, name: 'DMG to Race %', condition: () => DOM_ELEMENTS.race && !DOM_ELEMENTS.race.disabled },
      { el: DOM_ELEMENTS.attr, name: 'DMG to Attribute %', condition: () => DOM_ELEMENTS.attr && !DOM_ELEMENTS.attr.disabled },
      { el: DOM_ELEMENTS.dmgStack, name: 'Final DMG Bonus %' }
    ];
    
    for (const field of fields) {
      if (!field.el || (field.condition && !field.condition())) continue;
      
      this.touchedFields.add(field.el.id);
      const result = this.validateField(field.el, this.canShowSnackbar(field.el.id));
      this.updateFieldState(field.el, result.isValid);
      
      if (!result.isValid) {
        typeof scrollAndFocusElement === 'function' && scrollAndFocusElement(field.el);
        return false;
      }
    }
    return true;
  }
  
  validateStats(state, focusedElement = null) {
    const elements = [
      ...(state?.atkType?.toLowerCase() === 'pen' && DOM_ELEMENTS.pen ? [DOM_ELEMENTS.pen] : []),
      ...(DOM_ELEMENTS.dmg ? [DOM_ELEMENTS.dmg] : [])
    ];
    
    for (const element of elements) {
      this.touchedFields.add(element.id);
      const result = this.validateField(element, this.canShowSnackbar(element.id));
      this.updateFieldState(element, result.isValid);
      
      if (!result.isValid && (focusedElement === element || !focusedElement)) {
        typeof scrollAndFocusElement === 'function' && scrollAndFocusElement(element);
        return false;
      }
    }
    return true;
  }
  
  destroy() {
    this.removeListeners();
    [this.touchedFields, this.snackbarCooldowns].forEach(set => set.clear());
    this.isInitialized = false;
  }
}
const ValidationSSoTInstance = new ValidationSSoT();
const normalizeNumericInput = (el, pastedValue) => {
  if (!el) return;
  const normalized = ValidationSSoTInstance.normalizeInput(pastedValue ?? el.value);
  el.value = normalized;
  const result = ValidationSSoTInstance.validateField(el, ValidationSSoTInstance.isPenOrDmg(el));
  ValidationSSoTInstance.updateFieldState(el, result.isValid);
};
const validateRequiredFields = () => ValidationSSoTInstance.validateAllRequired();
const validateStatsVsTarget = (state, focusedElement = null) => ValidationSSoTInstance.validateStats(state, focusedElement);

// ========== SAFE SYSTEM ==========
const PASSIVE_SUPPORT = (() => {
  let supported = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        supported = true;
        return false;
      }
    });
    window.addEventListener('test-passive', () => {}, opts);
    window.removeEventListener('test-passive', () => {}, opts);
  } catch (_) {}
  return supported;
})();
const POINTER_SUPPORT = 'PointerEvent' in window;
const opts = PASSIVE_SUPPORT ? {
  passive: false
} : false;
function showLockedInputMessage(event) {
  const target = event?.currentTarget;
  if (!target?.classList?.contains('locked')) return;

  const now = Date.now();
  if (target._lastLockTimestamp && (now - target._lastLockTimestamp) < 500) return;
  target._lastLockTimestamp = now;

  event?.cancelable && (event.preventDefault(), event.stopPropagation());

  if (!window._lastSnackbarTime || (now - window._lastSnackbarTime) > 3000) {
    window._lastSnackbarTime = now;
    typeof showSnackbar === 'function' && showSnackbar("Your Stats Locked!");
  }
}
function bindInputLockGuard(wrapElement) {
  if (!wrapElement?.nodeType || wrapElement.hasAttribute?.('data-lock-bound')) return;

  const listeners = POINTER_SUPPORT ? [
    ['pointerdown', showLockedInputMessage, opts]
  ] : [
    ['touchstart', showLockedInputMessage, opts],
    ['click', showLockedInputMessage, false]
  ];

  listeners.forEach(([type, handler, opt]) => wrapElement.addEventListener(type, handler, opt));
  wrapElement._lockListeners = listeners;
  wrapElement.setAttribute('data-lock-bound', '1');
}
function unbindInputLockGuard(wrapElement) {
  if (!wrapElement?.nodeType || !wrapElement.hasAttribute?.('data-lock-bound')) return;

  wrapElement._lockListeners?.forEach(([type, handler, opt]) => {
    try {
      wrapElement.removeEventListener(type, handler, opt);
    } catch (_) {}
  });

  delete wrapElement._lockListeners;
  delete wrapElement._lastLockTimestamp;
  wrapElement.removeAttribute('data-lock-bound');
}
function lockAllInputs() {
  document.querySelectorAll('.input-wrap').forEach(wrapper => {
    if (!wrapper?.nodeType) return;

    const elements = wrapper.querySelectorAll('input, select, textarea');
    if (!elements.length) return;

    elements.forEach(el => el?.nodeType && (el.disabled = true));
    wrapper.classList.add('locked');
    bindInputLockGuard(wrapper);
  });
}
function unlockAllInputs() {
  document.querySelectorAll('.input-wrap').forEach(wrapper => {
    if (!wrapper?.nodeType) return;

    const elements = wrapper.querySelectorAll('input, select, textarea');
    if (!elements.length) return;

    elements.forEach(el => el?.nodeType && (el.disabled = false));
    wrapper.classList.remove('locked');
    unbindInputLockGuard(wrapper);
  });
}

// ========== NOTIFICATION SYSTEM ==========
let snackbarTimer = null;
let keyboardListenersAdded = false;
function showSnackbar(text) {
  const sb = DOM_ELEMENTS.snackbar;
  if (!sb) return;
  sb.textContent = text;
  clearTimeout(snackbarTimer);
  sb.classList.remove('show');
  sb.offsetHeight; // Force reflow
  sb.classList.add('show');
  if (isMobile() && !keyboardListenersAdded) {
    keyboardListenersAdded = true;
    const input = document.querySelector('input[type=number]');
    
    if (window.visualViewport) {
      const updatePosition = () => {
        const offset = window.innerHeight - (window.visualViewport.height || window.innerHeight);
        sb.style.bottom = `${80 + offset}px`;
      };
      ['resize', 'scroll'].forEach(event => {
        window.visualViewport.addEventListener(event, updatePosition, { passive: true });
      });
    } else if (input) {
      input.addEventListener('focusin', () => sb.style.bottom = '300px');
      input.addEventListener('focusout', () => sb.style.bottom = '16px');
    }
  }
  
  snackbarTimer = setTimeout(() => sb.classList.remove('show'), 3000);
}
function scrollAndFocusElement(el, msg) {
  if (msg) showSnackbar(msg);
  
  const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  
  if (!el.disabled) {
    el.focus({ preventScroll: true });
  }
  
  return false;
}
const TOOLTIP_CONFIG = {
  "#dmgStackTips": "<strong>Final DMG Bonus</strong> and <strong>F. P/M DMG BONUS</strong> are two <strong>different</strong> things! Look for it in your <strong>detailed stats</strong> where it shows as <strong>Final Damage Stack</strong> or <strong>Final Damage Bonus</strong>. Make sure you don't have any buffs active. Can't find it? Just set 0.",
  "#targetRaceTips": "Specific MVP/MINi will <strong>auto sync and lock</strong> this option. Select <strong>Avg Lvl Boss</strong> if you want to target spesific race!",
  "#targetAttrTips": "also same with race.",
  "#dmgRaceTips": "Unlocked when target race selected, minimum valid value is 0.",
  "#dmgAttrTips": "same condition with dmg to race"
};
function createTooltip(triggerElement, content) {
  if (!triggerElement || !content) return;
  
  // Setup tooltip element
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip-wrap";
  tooltip.innerHTML = content;
  document.body.appendChild(tooltip);
  
  let isVisible = false;
  let hideTimer = null;
  
  // Position calculation
  const updatePosition = () => {
    const rect = triggerElement.getBoundingClientRect();
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    
    // Measure tooltip dimensions
    tooltip.style.cssText = 'visibility:hidden;display:block';
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;
    tooltip.style.cssText = '';
    
    // Calculate position
    const centerX = rect.left + scrollX + (rect.width / 2);
    const maxLeft = window.innerWidth - tooltipWidth - 16;
    const left = Math.max(16, Math.min(centerX - (tooltipWidth / 2), maxLeft));
    let top = rect.top + scrollY - tooltipHeight - 12;
    
    // Flip if needed
    if (top < 16 + scrollY) {
      top = rect.bottom + scrollY + 12;
      tooltip.classList.add('flipped');
    } else {
      tooltip.classList.remove('flipped');
    }
    
    tooltip.style.transform = `translate(${left}px, ${top}px)`;
  };
  
  // Show/hide handlers
  const show = () => {
    if (isVisible) return;
    clearTimeout(hideTimer);
    updatePosition();
    isVisible = true;
    tooltip.classList.add('show');
  };
  
  const hide = () => {
    if (!isVisible) return;
    tooltip.classList.remove('show');
    isVisible = false;
  };
  
  const toggle = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    isVisible ? hide() : show();
  };
  
  // Event handlers
  const handleOutsideClick = (e) => {
    if (!isVisible) return;
    if (!triggerElement.contains(e.target) && !tooltip.contains(e.target)) {
      hide();
    }
  };
  
  const handleKeydown = (e) => {
    if (e.key === "Escape" && isVisible) {
      hide();
    } else if ((e.key === "Enter" || e.key === " ") && e.target === triggerElement) {
      e.preventDefault();
      toggle(e);
    }
  };
  
  const throttledPosition = () => {
    if (!isVisible) return;
    clearTimeout(hideTimer);
    hideTimer = setTimeout(updatePosition, 16);
  };
  
  // Attach event listeners
  triggerElement.addEventListener("click", toggle);
  triggerElement.addEventListener("touchend", (e) => {
    e.preventDefault();
    toggle(e);
  }, { passive: false });
  
  document.addEventListener("click", handleOutsideClick);
  document.addEventListener("touchend", handleOutsideClick, { passive: true });
  document.addEventListener("keydown", handleKeydown);
  
  ['resize', 'scroll'].forEach(event => {
    window.addEventListener(event, throttledPosition, { passive: true });
  });
}
function setupTooltips(config) {
  Object.entries(config).forEach(([selector, content]) => {
    try {
      // Normalize selector ke array of elements
      const elements = typeof selector === 'string' ?
        document.querySelectorAll(selector) :
        selector instanceof Element ?
        [selector] :
        [];
      
      elements.forEach(el => {
        if (el instanceof Element) {
          createTooltip(el, content);
        }
      });
    } catch (error) {
    // silent error
    }
  });
}
setupTooltips(TOOLTIP_CONFIG);

// ======== STICKY HANDLER ========
class StickyHandler {
  constructor() {
    // Core state
    this.state = {
      isActive: false,
      isCollapsed: false,
      isMobile: false,
      animating: false
    };
    
    // Constants
    this.config = {
      MOBILE_BREAKPOINT: 480,
      BUTTON_HEIGHT: 56,
      ANIMATION_DELAY: 60,
      TRANSITION_DURATION: 300,
      DOM_REINJECT_DELAY: 50,
      OBSERVER_DEBOUNCE: 16,
      RESIZE_DEBOUNCE: 100,
      LABEL_TRANSITION: 200,
      TEXT_UPDATE_DELAY: 200,
      CLEANUP_DELAY: 320
    };
    
    // Element selectors
    this.selectors = {
      resetRek: 'resetRekomenBtn',
      resetAll: 'resetAllBtn', 
      swapBoss: 'breakdown-swap',
      stickyStart: () => DOM_ELEMENTS?.hasil,
      testSpear: () => DOM_ELEMENTS?.testSpear,
      testReaper: () => DOM_ELEMENTS?.testReaper
    };
    
    // Button configurations
    this.buttonOrder = ['toggleBtn', 'swapBoss', 'testSpear', 'testReaper', 'resetRek', 'resetAll', 'backBtn'];
    this.textButtons = ['resetRek', 'resetAll', 'testSpear', 'testReaper'];
    this.controlButtons = [
      { id: 'toggleStickyBtn', class: 'sticky-toggle', key: 'toggleBtn', handler: 'handleToggle' },
      { id: 'backToHasilBtn', class: 'sticky-back', key: 'backBtn', handler: 'handleBack' }
    ];
    
    // Internal collections
    this.elements = new Map();
    this.timeouts = new Map();
    this.boundListeners = new Map();
    
    // RAF handles
    this.scrollRAF = null;
    
    // Observer
    this.observer = null;
    
    // Initialization flag
    this.initialized = false;
    
    this.init();
  }

  // === ELEMENT MANAGEMENT ===
  
  initElements() {
    this.elements.clear();
    
    // Get elements by selector
    Object.entries(this.selectors).forEach(([key, selector]) => {
      const element = typeof selector === 'function' 
        ? selector() 
        : document.getElementById(selector);
        
      if (element) {
        this.elements.set(key, element);
        this.storeOriginalText(element, key);
        
        // Mark breakdown-swap for sticky preservation
        if (key === 'swapBoss' && this.state.isActive && this.state.isMobile) {
          element.dataset.stickyPreserve = 'true';
        }
      }
    });
    
    this.createControlButtons();
  }

  storeOriginalText(element, key) {
    if (this.textButtons.includes(key) && !element.dataset.originalText) {
      element.dataset.originalText = element.textContent.trim() || '';
    }
  }

  createControlButtons() {
    this.controlButtons.forEach(({ id, class: className, key, handler }) => {
      let button = document.getElementById(id);
      if (!button) {
        button = document.createElement('button');
        button.id = id;
        button.className = className;
        document.body.appendChild(button);
      }
      
      this.elements.set(key, button);
      this.bindButtonEvent(button, handler);
    });
    
    // Set initial toggle state
    const toggleBtn = this.elements.get('toggleBtn');
    if (toggleBtn) {
      toggleBtn.dataset.collapse = 'false';
    }
  }

  bindButtonEvent(button, handlerName) {
    if (!button.dataset.bound) {
      button.addEventListener('click', (e) => this[handlerName](e));
      button.dataset.bound = 'true';
    }
  }

  getOrderedButtons() {
    return this.buttonOrder.map(key => this.elements.get(key)).filter(Boolean);
  }

  // === EVENT HANDLERS ===
  
  handleToggle = (e) => {
    e.preventDefault();
    if (this.state.animating) return;
    
    this.state.animating = true;
    this.state.isCollapsed = !this.state.isCollapsed;
    
    const toggleBtn = this.elements.get('toggleBtn');
    if (toggleBtn) {
      toggleBtn.dataset.collapse = String(this.state.isCollapsed);
    }
    
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    this.applySticky();
    this.scheduleTimeout('animationEnd', () => {
      this.state.animating = false;
    }, this.config.TRANSITION_DURATION);
  }

  handleBack = (e) => {
    e.preventDefault();
    const stickyStart = this.elements.get('stickyStart');
    if (stickyStart) {
      stickyStart.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }

  handleScroll = () => {
    if (!this.scrollRAF) {
      this.scrollRAF = requestAnimationFrame(() => {
        this.updateSticky();
        this.scrollRAF = null;
      });
    }
  }

  handleResize = () => {
    this.scheduleTimeout('resize', () => {
      this.updateSticky();
    }, this.config.RESIZE_DEBOUNCE);
  }

  // === TIMEOUT MANAGEMENT ===
  
  scheduleTimeout(key, callback, delay) {
    this.clearTimeout(key);
    this.timeouts.set(key, setTimeout(callback, delay));
  }

  clearTimeout(key) {
    const timeout = this.timeouts.get(key);
    if (timeout) {
      clearTimeout(timeout);
      this.timeouts.delete(key);
    }
  }

  clearAllTimeouts() {
    this.timeouts.forEach(timeout => clearTimeout(timeout));
    this.timeouts.clear();
  }

  // === STICKY LOGIC ===
  
  updateMobileState() {
    const newIsMobile = window.innerWidth <= this.config.MOBILE_BREAKPOINT;
    const changed = newIsMobile !== this.state.isMobile;
    this.state.isMobile = newIsMobile;
    return changed;
  }

  updateSticky() {
    const mobileChanged = this.updateMobileState();
    
    // Desktop: always disable sticky
    if (!this.state.isMobile) {
      if (mobileChanged || this.state.isActive) {
        this.state.isActive = false;
        this.removeSticky();
      }
      return;
    }

    // Mobile: check sticky trigger
    const stickyStart = this.elements.get('stickyStart');
    if (!stickyStart) return;

    const rect = stickyStart.getBoundingClientRect();
    const shouldBeActive = rect.top <= 0;
    
    // Only update if state changed
    if (shouldBeActive !== this.state.isActive) {
      this.state.isActive = shouldBeActive;
      
      if (this.state.isActive) {
        this.applySticky();
      } else {
        this.removeSticky();
      }
    }
  }



  applySticky() {
    const buttons = this.getOrderedButtons();
    if (buttons.length === 0) return;
    
    const wasSticky = buttons[0].classList.contains('sticky');
    
    buttons.forEach((button, index) => {
      const isToggle = button === this.elements.get('toggleBtn');
      const translateY = this.state.isCollapsed ? 0 : -(index * this.config.BUTTON_HEIGHT);
      const opacity = (this.state.isCollapsed && !isToggle) ? '0.4' : '1';
      
      // Add sticky class only once
      if (!button.classList.contains('sticky')) {
        button.classList.add('sticky');
      }
      
      button.classList.toggle('collapsed', this.state.isCollapsed);
      
      if (!wasSticky) {
        this.animateButtonIn(button, index, translateY);
      } else {
        this.updateButtonPosition(button, translateY, opacity);
      }
    });
    
    // Update text after initial animation
    const textDelay = wasSticky ? 0 : this.config.TEXT_UPDATE_DELAY;
    this.scheduleTimeout('textUpdate', () => {
      this.updateButtonText();
    }, textDelay);
  }

  animateButtonIn(button, index, translateY) {
    // Start from below
    button.style.cssText = `
      transform: translate3d(0, 50px, 0);
      opacity: 0;
      transition: none;
    `;
    
    // Animate to position with staggered delay
    this.scheduleTimeout(`buttonIn-${index}`, () => {
      button.style.cssText = `
        transform: translate3d(0, ${translateY}px, 0);
        opacity: 1;
        transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
      `;
    }, index * this.config.ANIMATION_DELAY);
  }

  updateButtonPosition(button, translateY, opacity) {
    button.style.cssText = `
      transform: translate3d(0, ${translateY}px, 0);
      opacity: ${opacity};
    `;
  }

  removeSticky() {
    const buttons = this.getOrderedButtons();
    if (buttons.length === 0) return;
    
    // Animate out
    buttons.forEach(button => {
      if (button.classList.contains('sticky')) {
        button.style.cssText = `
          transform: translate3d(0, 0, 0);
          opacity: 0.3;
          transition: transform 300ms ease, opacity 200ms ease;
        `;
      }
    });

    // Clean up after animation
    this.scheduleTimeout('cleanup', () => {
      this.cleanupSticky(buttons);
    }, this.config.CLEANUP_DELAY);
  }

  cleanupSticky(buttons) {
    buttons.forEach(button => {
      button.classList.remove('sticky', 'collapsed');
      button.style.cssText = '';
      
      // Restore original text
      if (button.dataset.originalText) {
        button.textContent = button.dataset.originalText;
      }
    });
  }

  updateButtonText() {
    const isActive = this.state.isActive;
    
    this.textButtons.forEach(key => {
      const button = this.elements.get(key);
      if (button) {
        button.textContent = isActive ? '' : (button.dataset.originalText || '');
      }
    });
  }

  // === STATE PRESERVATION ===
  
  preserveSwapState() {
    const swapElement = this.elements.get('swapBoss');
    if (!swapElement || swapElement.tagName !== 'SELECT') return null;
    
    const computed = window.getComputedStyle(swapElement);
    const classList = swapElement.classList;
    
    return {
      value: swapElement.value,
      transform: computed.transform,
      opacity: computed.opacity,
      isSticky: classList.contains('sticky'),
      isCollapsed: classList.contains('collapsed')
    };
  }

  restoreSwapState(state) {
    if (!state) return;
    
    const swapElement = this.elements.get('swapBoss');
    if (!swapElement || swapElement.tagName !== 'SELECT') return;
    
    // Restore value
    if (state.value) {
      swapElement.value = state.value;
    }
    
    // Restore position instantly
    swapElement.style.cssText = `
      transform: ${state.transform};
      opacity: ${state.opacity};
      transition: none;
    `;
    
    // Restore classes
    if (state.isSticky) {
      swapElement.classList.add('sticky');
    }
    if (state.isCollapsed) {
      swapElement.classList.add('collapsed');
    }
  }

  // === EVENT LISTENERS ===
  
  setupEventListeners() {
    const eventConfigs = [
      { target: window, event: 'scroll', handler: this.handleScroll },
      { target: window, event: 'resize', handler: this.handleResize }
    ];
    
    eventConfigs.forEach(({ target, event, handler }) => {
      const key = `${target === window ? 'window' : 'element'}-${event}`;
      
      if (!this.boundListeners.has(key)) {
        target.addEventListener(event, handler, { passive: true });
        this.boundListeners.set(key, { target, event, handler });
      }
    });
  }

  removeEventListeners() {
    this.boundListeners.forEach(({ target, event, handler }) => {
      target.removeEventListener(event, handler);
    });
    this.boundListeners.clear();
  }

  // === DOM OBSERVER ===
  
  setupDOMObserver() {
    if (typeof MutationObserver === 'undefined' || this.observer) return;
    
    this.observer = new MutationObserver((mutations) => {
      // Quick check: only process if breakdown-swap reinjected
      let swapReinjected = false;
      
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.id === 'breakdown-swap' || 
              (node.nodeType === 1 && node.querySelector && node.querySelector('#breakdown-swap'))) {
            swapReinjected = true;
            break;
          }
        }
        if (swapReinjected) break;
      }
      
      if (!swapReinjected) {
        // No swap reinject, quick update
        this.scheduleTimeout('observer', () => this.updateSticky(), this.config.OBSERVER_DEBOUNCE);
        return;
      }
      
      this.scheduleTimeout('observer', () => {
        // Preserve breakdown-swap state only
        const swapState = this.preserveSwapState();
        
        this.initElements();
        
        // Force sticky state if breakdown-swap was reinjected and should be sticky
        if (this.state.isMobile && this.state.isActive) {
          // Restore swap state immediately
          if (swapState) {
            this.restoreSwapState(swapState);
          }
          
          // Apply sticky with smooth transition
          this.scheduleTimeout('domReinject', () => {
            this.applySticky();
          }, this.config.DOM_REINJECT_DELAY);
        } else {
          this.updateSticky();
        }
      }, this.config.OBSERVER_DEBOUNCE);
    });
    
    this.observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
  }

  // === LIFECYCLE ===
  
  init() {
    const setup = () => {
      if (this.initialized) return;
      
      this.initElements();
      this.setupEventListeners();
      this.setupDOMObserver();
      this.updateSticky();
      
      this.initialized = true;
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setup, { once: true });
    } else {
      setup();
    }
  }

  destroy() {
    // Clear all managed timeouts
    this.clearAllTimeouts();
    
    // Cancel animation frame
    if (this.scrollRAF) {
      cancelAnimationFrame(this.scrollRAF);
      this.scrollRAF = null;
    }
    
    // Remove event listeners
    this.removeEventListeners();
    
    // Disconnect observer
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    
    // Clear collections
    this.elements.clear();
    
    this.initialized = false;
  }

  // === STATIC INITIALIZER ===
  
  static initialize() {
    if (typeof window !== 'undefined' && !window.stickyHandler) {
      window.stickyHandler = new StickyHandler();
    }
    return window.stickyHandler;
  }
}
const stickyHandler = new StickyHandler();

// ======== ACCORDION =========
(function() {
  // Precompute constants
  const duration = 320;
  const easing = 'cubic-bezier(0.25, 0.8, 0.25, 1)';
  const transition = `max-height ${duration}ms ${easing}, opacity ${duration}ms ease-out`;
  
  // Centralized state and listener management
  const instances = new Map();
  const listeners = new Set();
  
  const addListener = (element, event, handler, options = false) => {
    element.addEventListener(event, handler, options);
    listeners.add({ element, event, handler, options });
  };
  
  const removeAllListeners = () => {
    listeners.forEach(({ element, event, handler, options }) => {
      element.removeEventListener(event, handler, options);
    });
    listeners.clear();
  };
  
  // Animation state management
  const createInstance = (details, summary, content) => {
    let isAnimating = false;
    let currentAnimation = null;
    
    const cleanup = () => {
      if (currentAnimation) {
        cancelAnimationFrame(currentAnimation);
        currentAnimation = null;
      }
      isAnimating = false;
    };
    
    const setStyles = (maxHeight, opacity = 1) => {
      Object.assign(content.style, { maxHeight, opacity: opacity.toString() });
    };
    
    const animate = (isOpening) => {
      if (isAnimating) return;
      isAnimating = true;
      cleanup();
      
      if (isOpening) {
        // Opening sequence
        details.setAttribute('open', '');
        setStyles('0px', 0.3);
        
        currentAnimation = requestAnimationFrame(() => {
          const targetHeight = content.scrollHeight + 'px';
          setStyles(targetHeight, 1);
          
          const handleOpen = () => {
            setStyles('none', 1);
            isAnimating = false;
          };
          
          content.addEventListener('transitionend', handleOpen, { once: true });
        });
      } else {
        // Closing sequence
        const currentHeight = content.scrollHeight + 'px';
        setStyles(currentHeight, 1);
        
        currentAnimation = requestAnimationFrame(() => {
          setStyles('0px', 0.3);
          
          const handleClose = () => {
            details.removeAttribute('open');
            isAnimating = false;
          };
          
          content.addEventListener('transitionend', handleClose, { once: true });
        });
      }
    };
    
    return { animate, cleanup, get isAnimating() { return isAnimating; } };
  };
  
  // Process all details elements
  const processDetails = () => {
    document.querySelectorAll('details').forEach(details => {
      const summary = details.querySelector('summary');
      const content = details.querySelector('.body');
      
      if (!summary || !content || instances.has(details)) return;
      
      // Apply base styles once
      Object.assign(content.style, {
        transition,
        overflow: 'hidden',
        maxHeight: details.hasAttribute('open') ? 'none' : '0px',
        opacity: details.hasAttribute('open') ? '1' : '0.3'
      });
      
      const instance = createInstance(details, summary, content);
      instances.set(details, instance);
      
      // Event handler
      const handleClick = (e) => {
        e.preventDefault();
        if (instance.isAnimating) return;
        
        const isOpen = details.hasAttribute('open');
        instance.animate(!isOpen);
      };
      
      addListener(summary, 'click', handleClick);
    });
  };
  
  // Initialize
  processDetails();
  
  // Auto-reinitialize for dynamic content
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        requestAnimationFrame(processDetails);
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Cleanup management
  const destroy = () => {
    observer.disconnect();
    instances.forEach(instance => instance.cleanup());
    instances.clear();
    removeAllListeners();
  };
  
  addListener(window, 'beforeunload', destroy);
  
  // Global cleanup
  if (window.accordionCleanup) window.accordionCleanup();
  window.accordionCleanup = destroy;
  
  return { destroy, reinitialize: processDetails };
})();

// ======== LOG ========
(function() {
  const { log, openLog, closeLog } = DOM_ELEMENTS || {};
  if (!log) return;
  
  // Precompute elements and styles
  const content = log.querySelector('.modal-content, .log-content, .modal-body') || log.firstElementChild;
  const duration = 280;
  const easing = 'cubic-bezier(0.25, 0.8, 0.25, 1)';
  
  // Precompute base styles
  const baseStyles = {
    modal: {
      display: 'none',
      transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}, backdrop-filter ${duration}ms ${easing}`,
      transformOrigin: 'center'
    },
    content: content ? {
      transition: `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`
    } : null
  };
  
  // Apply base styles once
  Object.assign(log.style, baseStyles.modal);
  if (content) Object.assign(content.style, baseStyles.content);
  
  let isVisible = false;
  let animationId = null;
  let hideTimeout = null;
  
  // Centralized listener management
  const listeners = new Map();
  
  const addListener = (element, event, handler, options = false) => {
    if (!element) return;
    const key = `${element.constructor.name}-${event}`;
    element.addEventListener(event, handler, options);
    listeners.set(key, { element, event, handler, options });
  };
  
  const removeAllListeners = () => {
    listeners.forEach(({ element, event, handler, options }) => {
      element.removeEventListener(event, handler, options);
    });
    listeners.clear();
  };
  
  // Animation functions
  const cleanup = () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
  };
  
  const hide = () => {
    if (!isVisible) return;
    isVisible = false;
    cleanup();
    
    Object.assign(log.style, {
      opacity: '0',
      transform: 'scale(0.96)',
      backdropFilter: 'blur(0px)',
      backgroundColor: 'transparent'
    });
    
    if (content) {
      Object.assign(content.style, {
        transform: 'translateY(-8px) scale(0.98)',
        opacity: '0.5'
      });
    }
    
    hideTimeout = setTimeout(() => {
      if (!isVisible) log.style.display = 'none';
    }, duration);
  };
  
  const show = () => {
    if (isVisible) return;
    isVisible = true;
    cleanup();
    
    log.style.display = 'flex';
    
    animationId = requestAnimationFrame(() => {
      Object.assign(log.style, {
        opacity: '1',
        transform: 'scale(1)',
        backdropFilter: 'blur(6px)',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
      });
      
      if (content) {
        Object.assign(content.style, {
          transform: 'translateY(0) scale(1)',
          opacity: '1'
        });
      }
    });
  };
  
  // Event handlers
  const handleOpen = (e) => {
    e.stopPropagation();
    show();
  };
  
  const handleKeydown = (e) => {
    if (e.key === 'Escape' && isVisible) hide();
  };
  
  const handleOutsideClick = (e) => {
    if (isVisible && content && !content.contains(e.target) && e.target !== openLog) {
      hide();
    }
  };
  
  // Setup listeners
  addListener(openLog, 'click', handleOpen);
  addListener(closeLog, 'click', hide);
  addListener(document, 'keydown', handleKeydown);
  addListener(document, 'click', handleOutsideClick);
  
  // Cleanup on page unload or when needed
  const destroy = () => {
    cleanup();
    removeAllListeners();
  };
  
  addListener(window, 'beforeunload', destroy);
  
  // Expose destroy method for manual cleanup
  if (window.modalAnimationCleanup) window.modalAnimationCleanup();
  window.modalAnimationCleanup = destroy;
  
  return { show, hide, destroy };
})();

// ======== EVENT BINDING ========
(function bindAllEventListeners() {
  // Prevent multiple bindings
  if (bindAllEventListeners.bound) return;
  bindAllEventListeners.bound = true;
  
  // Define button bindings with their handlers
  const buttonBindings = new Map([
    [DOM_ELEMENTS.testSpear, simulateFlash],
    [DOM_ELEMENTS.testReaper, simulateFlash],
    [DOM_ELEMENTS.submit, processMainCalculation],
    [DOM_ELEMENTS.resetRek, () => {
      regenerateRecommendations();
      showSnackbar?.("Table Refreshed!");
    }],
    [DOM_ELEMENTS.resetAll, resetAllData]
  ]);
  
  // Bind events efficiently
  buttonBindings.forEach((handler, element) => {
    if (element?.addEventListener) {
      element.addEventListener('click', handler);
      
      // Reset test button states
      if (element === DOM_ELEMENTS.testSpear || element === DOM_ELEMENTS.testReaper) {
        element.classList.remove('activated');
      }
    }
  });
})();

// ======== CACHE MANAGEMENT ========
function clearCache(type = null) {
  const shouldClearCache = confirm('Also clear calculation cache?');
  const message = shouldClearCache ? 'Stats and Cache Cleared!' : 'Stats Cleared!';
  
  scrollAndFocusElement(DOM_ELEMENTS.topOfPage, message);
  
  if (!shouldClearCache) return;
  
  if (type) {
    // Clear specific cache type
    cache[type]?.clear?.();
    if (type in randomCache) {
      randomCache[type] = Array.isArray(randomCache[type]) ? [] : 0;
    }
  } else {
    // Clear all caches
    Object.values(cache).forEach(cacheInstance => cacheInstance?.clear?.());
    Object.assign(randomCache, { values: [], index: 0 });
  }
}

// ======== RESET ========
function resetAllData() {
  if (!confirm('Reset all data and inputs?')) return;
  
  clearCache();
  
  // Clear all inputs and selects
  ['input', 'select'].forEach(selector => {
    document.querySelectorAll(selector).forEach(element => element.value = '');
  });
  
  // Reset result displays
  const defaultMessages = new Map([
    [DOM_ELEMENTS.hasil, 'Input your stats to see the result...'],
    [DOM_ELEMENTS.rec, 'Balancing stat recommendations for a higher output multiplier.']
  ]);
  defaultMessages.forEach((message, element) => {
    if (element) element.textContent = message;
  });
  
  // Reset button states
  const buttonStates = new Map([
    [DOM_ELEMENTS.submit, { disabled: false }],
    [DOM_ELEMENTS.resetRek, { disabled: true }],
    [DOM_ELEMENTS.resetAll, { disabled: true }],
    [DOM_ELEMENTS.testSpear, { disabled: true }],
    [DOM_ELEMENTS.testReaper, { disabled: true }]
  ]);
  buttonStates.forEach((state, button) => {
    if (button) Object.assign(button, state);
  });
  
  // Reset UI classes
  DOM_ELEMENTS.openLog?.classList.remove('locked');
  [DOM_ELEMENTS.testSpear, DOM_ELEMENTS.testReaper].forEach(button => {
    button?.classList.remove('activated');
  });
  
  // Reset application flags
  Object.assign(window, {
    isResultShown: false,
    isTestReaperActive: false,
    isTestSpearActive: false,
    isFlashActive: false,
    keyboardListenersAdded: false
  });
  
  // Reset input states and event handlers
  if (typeof unlockAllInputs === 'function') unlockAllInputs();
  if (typeof unbindInputLockGuard === 'function') unbindInputLockGuard();
}
