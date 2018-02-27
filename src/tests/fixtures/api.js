export const BNET_CHARACTER_DATA = {
  char: {
    class: 3,
    faction: 0,
    region: 'eu',
    thumb: 'sylvanas/92/99597404-avatar.jpg'
  },
  collections: {
    mounts: [1, 2, 3],
    pets: [1, 2, 3]
  }
}

export const REALM_DATA = [
  {
    name: 'Aegwynn',
    slug: 'aegwynn'
  },
  {
    name: 'Aerie Peak',
    slug: 'aerie-peak'
  },
  {
    name: 'Agamaggan',
    slug: 'agamaggan'
  }
]

export const MOUNT_ENTRY = {
  id: 1,
  name: 'Black Horse',
  source: 102,
  content: 1,
  sub1: 'Dungeon',
  sub2: null,
  added: 1,
  quality: 4,
  faction: 2,
  bmah: null,
  class: null,
  icon: 'inv_horse'
}

export const CATEGORY_DATA = [
  MOUNT_ENTRY,
  MOUNT_ENTRY,
  {
    ...MOUNT_ENTRY,
    id: 100,
    source: 103
  }
]
