# CrispIt - Smart Produce Freshness Scanner

CrispIt helps you pick the freshest fruits and vegetables at the grocery store using your phone's camera and AI. Scan produce to get instant freshness ratings, track your food's shelf life, and reduce food waste.

## What It Does

**Scan & Assess**  
Point your camera at produce and get an instant freshness score from 0-100, plus tips on what to look for when picking the best items.

**Track Your Fridge**  
Add items to your virtual fridge to track how many days they have left before they go bad. Get storage tips to keep things fresh longer.

**Carbon Awareness**  
See the environmental impact of your food choices and get suggestions for more sustainable alternatives.

**Build Your Collection**  
Discover and collect different produce items like Pokémon. Track your stats and learn about the food you buy.

**AI Assistant**  
Chat with an AI that can answer questions about food storage, recipes, and freshness tips.

## Key Features

- Live camera scanning with instant AI analysis
- Freshness scores with color-coded indicators
- Shelf life tracking for items in your fridge
- Barcode scanning for packaged foods
- Carbon footprint information
- Sustainable swap recommendations
- Chat assistant for food questions
- Works on both iPhone and Android

## Getting Started

1. **Install Expo Go** on your phone (free from App Store or Play Store)

2. **Set up your API keys:**
   - Get an OpenRouter API key at https://openrouter.ai
   - Create a free MongoDB Atlas account at https://mongodb.com
   - Add your keys to the `.env` file

3. **Install and run:**
```bash
   npm install
   npm start
```

4. **Scan the QR code** with Expo Go and start scanning produce!

## How to Use

### Scanning Produce
1. Open the Scanner tab
2. Point your camera at an apple, banana, or other produce
3. Get instant feedback on freshness, storage tips, and carbon impact
4. Add to your fridge to track shelf life

### Scanning Packaged Items
1. Switch to Barcode Mode in the Scanner tab
2. Scan the barcode on packaged foods
3. Get nutrition info and storage recommendations
4. Add to your fridge to keep track of what you have

### Managing Your Fridge
- View all items and their remaining shelf life
- Items turning orange or red need to be eaten soon
- Tap the trash icon to remove items you've used
- See your carbon receipt to understand environmental impact

### Checking Your Stats
- View total scans and unique items discovered
- Track carbon awareness over time
- See how many different produce types you've tried
- Monitor your average freshness scores

## Requirements

- iOS 13+ or Android 8+
- Internet connection for AI scanning
- Camera permissions
- About 50MB of storage space

## Built With

- Expo (React Native framework)
- OpenRouter AI for produce analysis
- MongoDB Atlas for cloud storage
- Expo Camera for scanning

Scan smarter, waste less, and shop with confidence. 🥬