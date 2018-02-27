const LOCAL_STORAGE_CHAR = {
  char: {
    class: 3,
    faction: 0,
    region: 'eu',
    thumb: 'sylvanas/92/99597404-avatar.jpg'
  }
}

export const LOCAL_STORAGE_ITEM = JSON.stringify({
  char: LOCAL_STORAGE_CHAR,
  ids: [1, 2, 3]
})

const LOCAL_STORAGE_PETS = JSON.stringify({
  char: LOCAL_STORAGE_CHAR,
  ids: [
    {
      id: 1,
      quality: 1
    },
    {
      id: 2,
      quality: 2
    },
    {
      id: 3,
      quality: 3
    }
  ]
})

export const LOCAL_STORAGE = {
  mounts: LOCAL_STORAGE_ITEM,
  pets: LOCAL_STORAGE_PETS
}
