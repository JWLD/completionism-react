const ALL_CATEGORIES = [
  // collections
  {
    key: 'mounts',
    name: 'Mounts',
    icon: 'mountjournalportrait',
    battleNet: true,
    enabled: true,
    section: 'collections'
  },
  {
    key: 'pets',
    name: 'Pets',
    icon: 'petjournalportrait',
    battleNet: true,
    enabled: true,
    section: 'collections'
  },
  {
    key: 'toys',
    name: 'Toys',
    icon: 'inv_misc_toy_05',
    battleNet: false,
    enabled: true,
    section: 'collections'
  },
  // primary professions
  {
    key: 'alchemy',
    name: 'Alchemy',
    icon: 'trade_alchemy',
    battleNet: true,
    enabled: true,
    section: 'primary'
  },
  {
    key: 'blacksmithing',
    name: 'Blacksmithing',
    icon: 'trade_blacksmithing',
    battleNet: true,
    enabled: true,
    section: 'primary'
  },
  {
    key: 'enchanting',
    name: 'Enchanting',
    icon: 'trade_engraving',
    battleNet: true,
    enabled: true,
    section: 'primary'
  },
  {
    key: 'engineering',
    name: 'Engineering',
    icon: 'trade_engineering',
    battleNet: true,
    enabled: true,
    section: 'primary'
  },
  {
    key: 'inscription',
    name: 'Inscription',
    icon: 'inv_inscription_tradeskill01',
    battleNet: true,
    enabled: true,
    section: 'primary'
  },
  {
    key: 'jewelcrafting',
    name: 'Jewelcrafting',
    icon: 'inv_misc_gem_01',
    battleNet: true,
    enabled: true,
    section: 'primary'
  },
  {
    key: 'leatherworking',
    name: 'Leatherworking',
    icon: 'inv_misc_armorkit_17',
    battleNet: true,
    enabled: true,
    section: 'primary'
  },
  {
    key: 'tailoring',
    name: 'Tailoring',
    icon: 'trade_tailoring',
    battleNet: true,
    enabled: true,
    section: 'primary'
  },
  // secondary professions
  {
    key: 'archaeology',
    name: 'Archaeology',
    icon: 'trade_archaeology',
    battleNet: false,
    enabled: false,
    section: 'secondary'
  },
  {
    key: 'cooking',
    name: 'Cooking',
    icon: 'inv_misc_food_15',
    battleNet: true,
    enabled: true,
    section: 'secondary'
  },
  {
    key: 'mining',
    name: 'Mining',
    icon: 'trade_mining',
    battleNet: true,
    enabled: true,
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
