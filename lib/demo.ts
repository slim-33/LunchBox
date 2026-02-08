import type { ScanResult, FridgeItem, UserStats, RecipeSuggestion, BarcodeProduct } from './types';

// Demo mode flag — toggle this for reliable demos without live API
export let DEMO_MODE = false;

export function setDemoMode(enabled: boolean) {
  DEMO_MODE = enabled;
}

export const DEMO_SCAN_RESULTS: Record<string, ScanResult> = {
  apple: {
    item_name: 'Red Apple',
    category: 'fruit',
    freshness_score: 8,
    freshness_description: 'This apple looks very fresh with vibrant red coloring and firm skin. No visible bruises or soft spots.',
    estimated_days_remaining: 7,
    storage_tips: [
      'Store in the refrigerator crisper drawer for maximum freshness',
      'Keep away from bananas and other ethylene-producing fruits',
      'Do not wash until ready to eat to prevent premature spoilage',
    ],
    visual_indicators: [
      'Vibrant red color with no brown patches',
      'Firm skin with natural shine',
      'No visible bruises or soft spots',
      'Stem is intact and green',
    ],
    sustainable_alternative: {
      name: 'Local Seasonal Pear',
      reason: 'Pears grown locally have 40% lower transport emissions and are in season right now',
      carbon_savings_percent: 40,
    },
    carbon_footprint: {
      item: 'apple',
      co2e_per_kg: 0.4,
      category: 'fruit',
      comparison: 'Low impact — equivalent to charging your phone 52 times',
      driving_equivalent_km: 2.5,
    },
  },
  banana: {
    item_name: 'Banana',
    category: 'fruit',
    freshness_score: 6,
    freshness_description: 'The banana is ripe with some brown spots developing. Best consumed within 2-3 days.',
    estimated_days_remaining: 3,
    storage_tips: [
      'Keep at room temperature until desired ripeness',
      'Separate from bunch to slow ripening',
      'Freeze overripe bananas for smoothies or baking',
    ],
    visual_indicators: [
      'Yellow skin with developing brown spots',
      'Slightly soft to touch',
      'Sweet aroma indicating peak ripeness',
    ],
    sustainable_alternative: {
      name: 'Local Berries',
      reason: 'Locally grown berries avoid the carbon cost of tropical fruit shipping',
      carbon_savings_percent: 35,
    },
    carbon_footprint: {
      item: 'banana',
      co2e_per_kg: 0.7,
      category: 'fruit',
      comparison: 'Low impact — equivalent to charging your phone 91 times',
      driving_equivalent_km: 4.3,
    },
  },
  broccoli: {
    item_name: 'Broccoli',
    category: 'vegetable',
    freshness_score: 9,
    freshness_description: 'Excellent freshness! Deep green florets are tight and firm with no yellowing.',
    estimated_days_remaining: 5,
    storage_tips: [
      'Store unwashed in a loose plastic bag in the refrigerator',
      'Use within 3-5 days for best quality',
      'Can be blanched and frozen for longer storage',
    ],
    visual_indicators: [
      'Deep green color throughout',
      'Tight, compact florets',
      'Firm stalks with no wilting',
      'No yellowing or flowering',
    ],
    sustainable_alternative: {
      name: 'Cabbage',
      reason: 'Cabbage has a lower water footprint and longer shelf life, reducing waste',
      carbon_savings_percent: 25,
    },
    carbon_footprint: {
      item: 'broccoli',
      co2e_per_kg: 0.9,
      category: 'vegetable',
      comparison: 'Low impact — equivalent to charging your phone 117 times',
      driving_equivalent_km: 5.6,
    },
  },
};

export const DEMO_FRIDGE_ITEMS: FridgeItem[] = [];

export const DEMO_STATS: UserStats = {
  total_scans: 0,
  total_carbon_saved: 0,
  current_streak: 0,
  best_streak: 0,
  sustainability_score: 0,
  badges: [
    { id: 'first_scan', name: 'First Scan', description: 'Scan your first item', icon: 'camera', earned: false },
    { id: 'streak_3', name: '3-Day Streak', description: 'Scan 3 days in a row', icon: 'fire', earned: false },
    { id: 'streak_7', name: 'Week Warrior', description: 'Scan 7 days in a row', icon: 'trophy', earned: false },
    { id: 'carbon_saver', name: 'Carbon Saver', description: 'Save 5kg of CO2', icon: 'leaf', earned: false },
    { id: 'fridge_master', name: 'Fridge Master', description: 'Track 10 items in fridge', icon: 'snowflake-o', earned: false },
    { id: 'recipe_explorer', name: 'Recipe Explorer', description: 'Generate 5 recipes', icon: 'cutlery', earned: false },
    { id: 'eco_warrior', name: 'Eco Warrior', description: 'Reach 80+ sustainability score', icon: 'globe', earned: false },
    { id: 'scanner_pro', name: 'Scanner Pro', description: 'Scan 50 items', icon: 'star', earned: false },
  ],
  weekly_carbon: [],
};

export const DEMO_SCAN_HISTORY: ScanResult[] = [];

export const DEMO_RECIPES: RecipeSuggestion[] = [
  {
    title: 'Banana Spinach Smoothie Bowl',
    description: 'A nutritious smoothie bowl using your expiring bananas and spinach — zero waste, maximum flavor!',
    ingredients: [
      '2 ripe bananas (frozen or fresh)',
      '1 cup fresh spinach',
      '1/2 cup yogurt',
      '1 tablespoon honey',
      'Toppings: granola, berries, chia seeds',
    ],
    steps: [
      'Blend bananas, spinach, yogurt, and honey until smooth',
      'Pour into a bowl',
      'Top with granola, berries, and chia seeds',
      'Serve immediately',
    ],
    carbon_savings: 'Saves ~0.8 kg CO2 by using items that would otherwise be wasted',
    prep_time: '10 minutes',
  },
  {
    title: 'Quick Chicken Stir-Fry with Broccoli',
    description: 'Use up your chicken breast and broccoli in this fast, healthy stir-fry.',
    ingredients: [
      '500g chicken breast, sliced',
      '1 head broccoli, cut into florets',
      '2 cloves garlic, minced',
      '2 tbsp soy sauce',
      '1 tbsp olive oil',
      'Rice for serving',
    ],
    steps: [
      'Heat olive oil in a large pan over high heat',
      'Cook chicken slices for 5-6 minutes until golden',
      'Add broccoli and garlic, stir-fry for 3-4 minutes',
      'Add soy sauce and toss to coat',
      'Serve over rice',
    ],
    carbon_savings: 'Saves ~1.2 kg CO2 by preventing chicken and broccoli waste',
    prep_time: '20 minutes',
  },
  {
    title: 'Apple & Yogurt Parfait',
    description: 'A simple, delicious way to use your apples and yogurt before they expire.',
    ingredients: [
      '2 apples, diced',
      '2 cups yogurt',
      '1/4 cup granola',
      '1 tbsp honey',
      'Cinnamon to taste',
    ],
    steps: [
      'Layer yogurt in glasses or jars',
      'Add diced apple pieces',
      'Sprinkle with granola and cinnamon',
      'Drizzle with honey',
      'Repeat layers and serve',
    ],
    carbon_savings: 'Saves ~0.5 kg CO2 by using expiring dairy and fruit',
    prep_time: '5 minutes',
  },
];

// In-memory fridge store for demo mode persistence
let demoFridgeStore: FridgeItem[] | null = null;

function ensureDemoFridgeStore(): FridgeItem[] {
  if (!demoFridgeStore) {
    demoFridgeStore = DEMO_FRIDGE_ITEMS.map(item => ({ ...item }));
  }
  return demoFridgeStore;
}

export function getDemoFridgeItems(): FridgeItem[] {
  return ensureDemoFridgeStore().map(item => ({ ...item }));
}

export function addDemoFridgeItem(item: Omit<FridgeItem, '_id'>): FridgeItem {
  const store = ensureDemoFridgeStore();
  const newItem: FridgeItem = { ...item, _id: `demo-${Date.now()}` };
  store.push(newItem);
  return { ...newItem };
}

export function removeDemoFridgeItem(id: string): void {
  const store = ensureDemoFridgeStore();
  const idx = store.findIndex(i => i._id === id);
  if (idx !== -1) store.splice(idx, 1);
}

export const DEMO_BARCODE: BarcodeProduct = {
  name: 'Organic Whole Milk',
  brand: 'Happy Farms',
  eco_score: 'b',
  eco_score_value: 62,
  nutri_score: 'a',
  ingredients: 'Organic whole milk, Vitamin D3',
  origin: 'USA',
  packaging: 'Carton, Plastic cap',
  categories: 'Dairy, Milk, Organic',
  carbon_footprint: {
    co2_total: 3.15,
    co2_agriculture: 2.12,
    co2_processing: 0.31,
    co2_packaging: 0.22,
    co2_transportation: 0.28,
    co2_distribution: 0.14,
    co2_consumption: 0.08,
  },
};
