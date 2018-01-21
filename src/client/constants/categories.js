export const COLLECTIONS = [
	{
		key: 'mounts',
		name: 'Mounts',
		icon: 'mountjournalportrait',
		battleNet: true,
		enabled: true
	},
	{
		key: 'pets',
		name: 'Pets',
		icon: 'petjournalportrait',
		battleNet: true,
		enabled: true
	},
	{
		key: 'toys',
		name: 'Toys',
		icon: 'inv_misc_toy_05',
		battleNet: false,
		enabled: true
	}
];

export const PRIMARY = [
	{
		key: 'alchemy',
		name: 'Alchemy',
		icon: 'trade_alchemy',
		battleNet: true,
		enabled: true
	},
	{
		key: 'blacksmithing',
		name: 'Blacksmithing',
		icon: 'trade_blacksmithing',
		battleNet: true,
		enabled: true
	},
	{
		key: 'enchanting',
		name: 'Enchanting',
		icon: 'trade_engraving',
		battleNet: true,
		enabled: true
	},
	{
		key: 'engineering',
		name: 'Engineering',
		icon: 'trade_engineering',
		battleNet: true,
		enabled: true
	},
	{
		key: 'inscription',
		name: 'Inscription',
		icon: 'inv_inscription_tradeskill01',
		battleNet: true,
		enabled: true
	},
	{
		key: 'jewelcrafting',
		name: 'Jewelcrafting',
		icon: 'inv_misc_gem_01',
		battleNet: true,
		enabled: true
	},
	{
		key: 'leatherworking',
		name: 'Leatherworking',
		icon: 'inv_misc_armorkit_17',
		battleNet: true,
		enabled: true
	},
	{
		key: 'tailoring',
		name: 'Tailoring',
		icon: 'trade_tailoring',
		battleNet: true,
		enabled: true
	}
];

const SECONDARY = [
	{
		key: 'archaeology',
		name: 'Archaeology',
		icon: 'trade_archaeology',
		battleNet: false,
		enabled: false
	},
	{
		key: 'cooking',
		name: 'Cooking',
		icon: 'inv_misc_food_15',
		battleNet: true,
		enabled: true
	},
	{
		key: 'firstaid',
		name: 'First Aid',
		icon: 'spell_holy_sealofsacrifice',
		battleNet: true,
		enabled: true
	},
	{
		key: 'mining',
		name: 'Mining',
		icon: 'trade_mining',
		battleNet: true,
		enabled: true
	}
];

export default {
	COLLECTIONS,
	PRIMARY,
	SECONDARY
};
