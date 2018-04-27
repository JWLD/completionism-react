const ALL_CATEGORIES = [
  // collections
  {
    key: 'mounts',
    battleNet: true,
    enabled: true,
    icon: 'mountjournalportrait',
    idType: 'spell',
    name: 'Mounts',
    section: 'collections'
  },
  {
    key: 'pets',
    battleNet: true,
    enabled: true,
    icon: 'petjournalportrait',
    idType: 'npc',
    name: 'Pets',
    section: 'collections'
  },
  {
    key: 'toys',
    battleNet: false,
    enabled: true,
    icon: 'inv_misc_toy_05',
    idType: 'item',
    name: 'Toys',
    section: 'collections'
  },
  // primary professions
  {
    key: 'alchemy',
    battleNet: true,
    enabled: true,
    icon: 'trade_alchemy',
    idType: 'spell',
    name: 'Alchemy',
    section: 'primary'
  },
  {
    key: 'blacksmithing',
    battleNet: true,
    enabled: true,
    icon: 'trade_blacksmithing',
    idType: 'spell',
    name: 'Blacksmithing',
    section: 'primary'
  },
  {
    key: 'enchanting',
    battleNet: true,
    enabled: true,
    icon: 'trade_engraving',
    idType: 'spell',
    name: 'Enchanting',
    section: 'primary'
  },
  {
    key: 'engineering',
    battleNet: true,
    enabled: true,
    icon: 'trade_engineering',
    idType: 'spell',
    name: 'Engineering',
    section: 'primary'
  },
  {
    key: 'inscription',
    battleNet: true,
    enabled: true,
    icon: 'inv_inscription_tradeskill01',
    idType: 'spell',
    name: 'Inscription',
    section: 'primary'
  },
  {
    key: 'jewelcrafting',
    battleNet: true,
    enabled: true,
    icon: 'inv_misc_gem_01',
    idType: 'spell',
    name: 'Jewelcrafting',
    section: 'primary'
  },
  {
    key: 'leatherworking',
    battleNet: true,
    enabled: true,
    icon: 'inv_misc_armorkit_17',
    idType: 'spell',
    name: 'Leatherworking',
    section: 'primary'
  },
  {
    key: 'tailoring',
    battleNet: true,
    enabled: true,
    icon: 'trade_tailoring',
    idType: 'spell',
    name: 'Tailoring',
    section: 'primary'
  },
  // secondary professions
  {
    key: 'archaeology',
    battleNet: false,
    enabled: false,
    icon: 'trade_archaeology',
    idType: 'spell',
    name: 'Archaeology',
    section: 'secondary'
  },
  {
    key: 'cooking',
    battleNet: true,
    enabled: true,
    icon: 'inv_misc_food_15',
    idType: 'spell',
    name: 'Cooking',
    section: 'secondary'
  },
  {
    key: 'mining',
    battleNet: true,
    enabled: true,
    icon: 'trade_mining',
    idType: 'spell',
    name: 'Mining',
    section: 'secondary'
  }
]

const CATEGORIES = ALL_CATEGORIES.filter(category => category.enabled)

export const BY_SECTION = CATEGORIES.reduce((acc, category) => {
  const categorySection = category.section

  if (!acc[categorySection]) {
    acc[categorySection] = [category]
  } else {
    acc[categorySection].push(category)
  }

  return acc
}, {})

export default CATEGORIES
