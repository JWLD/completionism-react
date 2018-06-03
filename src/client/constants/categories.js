export const CATEGORIES = [
  {
    key: 'mounts',
    battleNet: true,
    icon: 'mountjournalportrait',
    idType: 'spell',
    name: 'Mounts',
    section: 'collections'
  },
  {
    key: 'pets',
    battleNet: true,
    icon: 'petjournalportrait',
    idType: 'npc',
    name: 'Pets',
    section: 'collections'
  },
  {
    key: 'toys',
    battleNet: false,
    icon: 'inv_misc_toy_05',
    idType: 'item',
    name: 'Toys',
    section: 'collections'
  },
  {
    key: 'alchemy',
    battleNet: true,
    icon: 'trade_alchemy',
    idType: 'spell',
    name: 'Alchemy',
    section: 'professions'
  },
  {
    key: 'blacksmithing',
    battleNet: true,
    icon: 'trade_blacksmithing',
    idType: 'spell',
    name: 'Blacksmithing',
    section: 'professions'
  },
  {
    key: 'cooking',
    battleNet: true,
    icon: 'inv_misc_food_15',
    idType: 'spell',
    name: 'Cooking',
    section: 'professions'
  },
  {
    key: 'enchanting',
    battleNet: true,
    icon: 'trade_engraving',
    idType: 'spell',
    name: 'Enchanting',
    section: 'professions'
  },
  {
    key: 'engineering',
    battleNet: true,
    icon: 'trade_engineering',
    idType: 'spell',
    name: 'Engineering',
    section: 'professions'
  },
  {
    key: 'inscription',
    battleNet: true,
    icon: 'inv_inscription_tradeskill01',
    idType: 'spell',
    name: 'Inscription',
    section: 'professions'
  },
  {
    key: 'jewelcrafting',
    battleNet: true,
    icon: 'inv_misc_gem_01',
    idType: 'spell',
    name: 'Jewelcrafting',
    section: 'professions'
  },
  {
    key: 'leatherworking',
    battleNet: true,
    icon: 'inv_misc_armorkit_17',
    idType: 'spell',
    name: 'Leatherworking',
    section: 'professions'
  },
  {
    key: 'tailoring',
    battleNet: true,
    icon: 'trade_tailoring',
    idType: 'spell',
    name: 'Tailoring',
    section: 'professions'
  }
]

export const CATEGORIES_BY_SECTION = CATEGORIES.reduce((acc, category) => {
  const sectionIndex = acc.findIndex(section => {
    return section.key === category.section
  })

  if (sectionIndex === -1) {
    acc.push({ key: category.section, categories: [category] })
  } else {
    acc[sectionIndex].categories.push(category)
  }

  return acc
}, [])
