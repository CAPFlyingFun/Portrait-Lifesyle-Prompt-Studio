// ==========================================
// ENV_CATEGORIES — maps environment names to category keys
// ==========================================
const ENV_CATEGORIES = {
  beach: ['Beach', 'Beach resort', 'Boardwalk', 'Tropical beach', 'Tropical island', 'Ocean', 'Pier', 'Harbor', 'Coastal village', 'Cruise ship', 'Luxury yacht', 'Sailboat', 'Moonlit beach', 'Beach bonfire', 'Tidal pool', 'Poolside lounge', 'Swimming pool', 'Infinity pool', 'Treasure island', 'Zanzibar beach', 'Bora Bora overwater bungalow', 'Caribbean harbor village', 'Cape Town waterfront', 'Sydney harbor bridge', 'Fiji tropical lagoon', 'Amalfi Coast terrace'],
  nature: ['Park', 'Garden', 'Meadow', 'Spring meadow', 'Wildflower meadow', 'Flower field', 'Lavender field', 'Sunflower field', 'Rose garden', 'Botanical garden', 'Countryside', 'Rolling hills', 'Field', 'Prairie', 'Wheat field', 'Backyard garden', 'Cherry blossom garden', 'Cherry blossom park', 'Olive grove', 'Orchard', 'Apple orchard', 'Vineyard', 'Summer garden', 'Nature trail', 'Secret garden', 'Butterfly garden', 'Terraced garden', 'Rooftop garden', 'Urban garden', 'Zen garden', 'Fairy garden', 'Koi pond', 'Lotus pond', 'Mushroom grove', 'Tropical rainforest canopy', 'Wildflower cottage', 'Bali rice terrace', 'Singapore botanical gardens', 'Scottish highlands', 'Tuscan vineyard hill', 'Yosemite valley floor', 'Sedona red rocks', 'New Zealand mountain valley', 'Cherry blossom tunnel', 'Spring flower arch', 'Maple forest in autumn', 'Tropical fruit grove', 'Oasis palm grove'],
  forest: ['Forest clearing', 'Pine forest', 'Autumn forest', 'Bamboo forest', 'Enchanted forest', 'Forest cabin', 'Forest waterfall', 'Rainforest', 'Jungle', 'Treehouse', 'Misty forest', 'Amazon canopy bridge', 'Borneo jungle hut', 'Cloud forest canopy', 'Dense bamboo thicket', 'Jungle river crossing', 'Jungle rope bridge', 'Mangrove swamp', 'Tropical bioluminescent bay', 'Kyoto bamboo path', 'Jungle temple steps'],
  mountain: ['Mountain peak', 'Mountain trail', 'Mountain waterfall', 'Mountains', 'Cliffside overlook', 'Rocky cliffs', 'Canyon', 'Valley', 'Glacier', 'Tundra', 'Volcano summit', 'Nordic fjord', 'Desert canyon at sunset', 'Gold rush mine', 'Sunset cliff edge', 'Himalayan monastery', 'Swiss Alps chalet', 'Norwegian fjord village', 'Machu Picchu sunrise', 'Alaskan glacier bay', 'Niagara Falls overlook'],
  snow: ['Snowy landscape', 'Snowy cabin', 'Winter wonderland', 'Ski resort', 'Ice cave', 'Ice skating rink', 'Snow-covered village square'],
  urban: ['City street', 'City rooftop', 'City alley', 'Urban street', 'Urban loft', 'Modern apartment', 'Modern living room', 'Parisian street', 'Night market', 'Boutique', 'Cobblestone alley', 'Graffiti wall', 'Neon arcade', 'Rain-slicked street', 'Cyberpunk nightclub', 'Wild West saloon', 'Frontier town', 'Anime city street', 'Carnival midway', 'Hong Kong neon skyline', 'Seoul neon district', 'Tokyo Shibuya crossing', 'Bangkok floating market', 'Mumbai street market', 'Shanghai waterfront', 'Amsterdam canal bridge', 'Barcelona Gothic Quarter', 'Prague old town square', 'Venice canal gondola', 'Havana colorful street', 'New Orleans French Quarter', 'Nashville honky tonk street', 'Times Square NYC', 'Hollywood red carpet', 'Rio carnival street', 'Vietnamese lantern street', 'London phone booth', 'Route 66 desert road', 'Marrakech riad courtyard'],
  indoor_cozy: ['Cozy bedroom', 'Cozy kitchen', 'Cozy fireplace', 'Farmhouse', 'Lakeside cabin', 'Historic townhouse', 'Victorian parlor', 'Candlelit study room', 'Cozy country kitchen', 'Norse longhouse', 'Norse village', 'Viking longhouse', 'Japanese ryokan room', 'Vintage bookshop', 'Grand library reading room', 'Ornate mirror hallway'],
  formal: ['Ballroom', 'Concert hall', 'Hotel lobby', 'Grand staircase', 'Palace', 'Cathedral', 'Museum', 'Restaurant', 'Winery', 'Theater stage', 'Castle courtyard', 'Gothic university hallway', 'Old stone library', 'Vienna opera house steps', 'Art deco theater lobby', 'Baroque chapel', 'Edinburgh castle overlook', 'Rome Colosseum steps', 'Beijing forbidden city'],
  office: ['Office', 'Conference room', 'Library', 'Bookstore'],
  fantasy: ['Gothic castle', 'Medieval castle', 'Throne room', 'Cloud kingdom', 'Floating island', 'Ancient temple ruins', 'Underground cavern', 'Temple', 'Monastery', 'Crystal cave', 'Gothic cathedral ruins', 'Haunted mansion', 'Cemetery at midnight', 'Catacombs', 'Mount Olympus', 'Ancient Greek temple', 'Egyptian pyramid chamber', 'Secret underground lair', 'Floating sky castle', 'Ancient spirit forest', 'Destroyed cityscape', 'Cherry blossom shrine', 'Angkor Wat sunrise', 'Petra canyon entrance', 'Jerusalem old city', 'Cenote underground pool', 'Jungle temple steps'],
  fitness: ['Gym', 'Yoga studio', 'Spa', 'Dance studio', 'Indoor pool'],
  nightlife: ['Nightclub', 'Rooftop bar', 'Rock concert', 'Recording studio', 'Underground speakeasy', 'Music festival', 'Speakeasy cocktail bar', 'Night garden with lanterns'],
  studio: ['Art studio', 'Home studio', 'Movie set', 'Salon', 'Pottery studio', 'Industrial loft space'],
  scifi: ['Futuristic city', 'Cyberpunk alley', 'Space station', 'Mars colony', 'Laboratory', 'Post-apocalyptic ruins', 'Astronomy observatory', 'Steampunk airship dock', 'Victorian clockwork factory', 'Steam-powered city', 'Holographic plaza', 'Neon corridor', 'Underground hacker den', 'Brass workshop', 'Rooftop infinity pool', 'Penthouse rooftop terrace'],
  water: ['Underwater', 'Aquarium tunnel', 'Calm lake', 'Lake dock', 'Waterfall', 'Coral reef', 'Lake reflections', 'Watermill', 'Caribbean cove', 'Sunken shipwreck', 'Pirate ship deck', 'Great Barrier Reef shallows', 'Tropical lagoon', 'Cenote underground pool', 'Amazon river dock', 'Foggy morning dock'],
  desert: ['Desert dunes', 'Desert oasis', 'Sand dunes at dawn', 'Sahara star camp', 'Moroccan desert camp', 'Bedouin tent camp', 'Desert moonrise', 'Monument Valley road', 'Sahara sand sea', 'Salt flats mirror', 'Sandstone arch formation', 'White sands desert', 'Desert campfire circle', 'Dubai desert safari', 'Desert canyon at sunset', 'Australian outback road', 'African savanna sunset', 'Serengeti grassland', 'Cairo marketplace', 'Istanbul grand bazaar', 'Greek island harbor', 'Rio de Janeiro overlook', 'Victoria Falls overlook']
};

// ==========================================
// AFFINITY — contextual accessory/footwear/makeup/props pools per environment category
// ==========================================
const AFFINITY = {
  beach: {
    footwear: ['sandals', 'flip flops', 'espadrilles', 'barefoot', 'wedges'],
    accessories: ['Sunglasses', 'Hat', 'Anklet', 'Bracelet', 'Hair clip', 'Straw hat'],
    props: ['Towel', 'Umbrella', 'Sun hat', 'Water bottle', 'Picnic basket', 'Surfboard', 'Ice cream cone'],
    makeup: ['Sun-kissed makeup', 'Bronzed makeup', 'Natural makeup', 'Dewy skin', 'Glossy lips', 'No makeup', 'Minimal makeup']
  },
  nature: {
    footwear: ['sandals', 'ankle boots', 'ballet flats', 'espadrilles', 'barefoot', 'athletic sneakers', 'moccasins'],
    accessories: ['Flower crown', 'Hat', 'Sunglasses', 'Bracelet', 'Necklace', 'Hair bow', 'Headband', 'Straw hat', 'Wide brim hat'],
    props: ['Bouquet', 'Flowers', 'Single flower', 'Picnic basket', 'Book', 'Blanket', 'Camera', 'Watering can', 'Basket of fruit', 'Kite'],
    makeup: ['Natural makeup', 'Dewy skin', 'Sun-kissed makeup', 'Light makeup', 'Minimal makeup', 'Peach blush', 'No makeup']
  },
  forest: {
    footwear: ['hiking boots', 'ankle boots', 'combat boots', 'work boots', 'moccasins', 'athletic sneakers'],
    accessories: ['Backpack', 'Hat', 'Scarf', 'Flower crown', 'Bracelet', 'Compass pendant', 'Leather bracer'],
    props: ['Lantern', 'Camp lantern', 'Camera', 'Book', 'Staff', 'Blanket', 'Map', 'Compass', 'Binoculars'],
    makeup: ['Natural makeup', 'No makeup', 'Minimal makeup', 'Dewy skin', 'Sun-kissed makeup']
  },
  mountain: {
    footwear: ['hiking boots', 'combat boots', 'work boots', 'ankle boots', 'athletic sneakers'],
    accessories: ['Backpack', 'Scarf', 'Hat', 'Sunglasses', 'Gloves', 'Knit beanie', 'Compass pendant'],
    props: ['Camera', 'Water bottle', 'Camp lantern', 'Blanket', 'Map', 'Binoculars', 'Compass', 'Telescope'],
    makeup: ['Natural makeup', 'No makeup', 'Sun-kissed makeup', 'Minimal makeup']
  },
  snow: {
    footwear: ['snow boots', 'ankle boots', 'combat boots', 'knee high boots'],
    accessories: ['Scarf', 'Gloves', 'Knit beanie', 'Hat', 'Earrings'],
    props: ['Blanket', 'Coffee cup', 'Tea cup', 'Lantern', 'Umbrella', 'Sparkler'],
    makeup: ['Dewy skin', 'Natural makeup', 'Soft glam', 'Red lips', 'Minimal makeup']
  },
  urban: {
    footwear: ['athletic sneakers', 'ankle boots', 'high heels', 'loafers', 'slip on shoes', 'combat boots', 'mary janes'],
    accessories: ['Sunglasses', 'Watch', 'Handbag', 'Headphones', 'Necklace', 'Earrings', 'Belt', 'Baseball cap', 'Fanny pack'],
    props: ['Coffee cup', 'Phone', 'Shopping bags', 'Camera', 'Skateboard', 'Book', 'Smoothie cup'],
    makeup: ['Everyday makeup', 'Bold makeup', 'Smokey eye', 'Cat eye', 'Natural makeup', 'Winged eyeliner', 'Red lips']
  },
  indoor_cozy: {
    footwear: ['barefoot', 'slip on shoes', 'ballet flats', 'moccasins'],
    accessories: ['Bracelet', 'Rings', 'Necklace', 'Hair clip', 'Glasses'],
    props: ['Book', 'Coffee cup', 'Tea cup', 'Blanket', 'Pillow', 'Candles', 'Stuffed animal', 'Journal notebook', 'Hourglass', 'Ancient tome', 'Quill pen', 'Pocket watch'],
    makeup: ['No makeup', 'Minimal makeup', 'Natural makeup', 'Dewy skin', 'Light makeup']
  },
  formal: {
    footwear: ['high heels', 'stilettos', 'dress shoes', 'mary janes', 'wedges', 'ballet flats'],
    accessories: ['Pearl necklace', 'Drop earrings', 'Clutch bag', 'Bracelet', 'Necklace', 'Rings', 'Tiara', 'Veil', 'Watch', 'Tennis bracelet', 'Laurel wreath', 'Pocket watch chain'],
    props: ['Champagne glass', 'Wine glass', 'Bouquet', 'Candles', 'Rose', 'Mirror', 'Hourglass', 'Quill pen'],
    makeup: ['Soft glam', 'Red lips', 'Smokey eye', 'Dramatic makeup', 'Contour makeup', 'Bold makeup', 'Shimmer makeup']
  },
  office: {
    footwear: ['high heels', 'loafers', 'dress shoes', 'ballet flats', 'mary janes'],
    accessories: ['Watch', 'Glasses', 'Pearl necklace', 'Earrings', 'Belt', 'Handbag', 'Shoulder bag'],
    props: ['Laptop', 'Book', 'Briefcase', 'Coffee cup', 'Phone', 'Journal notebook'],
    makeup: ['Natural makeup', 'Everyday makeup', 'Light makeup', 'Minimal makeup', 'Soft glam']
  },
  fantasy: {
    footwear: ['knee high boots', 'ankle boots', 'barefoot', 'combat boots', 'mary janes'],
    accessories: ['Crown', 'Tiara', 'Sword', 'Wand', 'Aura glow', 'Cape', 'Veil', 'Body chain', 'Flower crown', 'Crystal pendant', 'Moon pendant', 'Viking armband', 'Hero cape', 'Laurel wreath', 'Leather bracer', 'Crossbow quiver', 'Compass pendant', 'Finger armor rings'],
    props: ['Crystal ball', 'Staff', 'Shield', 'Artifact', 'Candles', 'Lantern', 'Fairy lights', 'Scroll', 'Dreamcatcher', 'Torch', 'Ancient tome', 'Potion bottle', 'Horn', 'Spell book', 'Treasure chest'],
    makeup: ['Dramatic makeup', 'Gothic makeup', 'Glitter highlights', 'Face gems', 'Face paint', 'Editorial high-fashion', 'Cosplay makeup']
  },
  fitness: {
    footwear: ['running shoes', 'athletic sneakers', 'barefoot', 'slip on shoes'],
    accessories: ['Headband', 'Watch', 'Hair clip', 'Bracelet'],
    props: ['Yoga mat', 'Water bottle', 'Dumbbells', 'Towel', 'Jump rope', 'Smoothie cup'],
    makeup: ['No makeup', 'Minimal makeup', 'Dewy skin', 'Natural makeup', 'Glowing skin']
  },
  nightlife: {
    footwear: ['high heels', 'stilettos', 'platform heels', 'ankle boots', 'combat boots'],
    accessories: ['Statement earrings', 'Choker', 'Body chain', 'Clutch bag', 'Hoop earrings', 'Rings', 'Headphones', 'Gold chain', 'Ear cuff'],
    props: ['Champagne glass', 'Wine glass', 'Microphone', 'Phone', 'Sparkler'],
    makeup: ['Smokey eye', 'Bold makeup', 'Dramatic makeup', 'Glitter highlights', '80s neon makeup', 'Red lips', 'Graphic eyeliner']
  },
  studio: {
    footwear: ['high heels', 'barefoot', 'ballet flats', 'stilettos', 'ankle boots'],
    accessories: ['Jewelry', 'Earrings', 'Necklace', 'Bracelet', 'Hair clip', 'Veil', 'Lace collar'],
    props: ['Mirror', 'Flowers', 'Bouquet', 'Candles', 'Fairy lights', 'Film camera', 'Paint palette', 'Polaroid camera'],
    makeup: ['Soft glam', 'Airbrushed glam', 'Natural makeup', 'Dewy skin', 'Editorial high-fashion', 'Contour makeup']
  },
  scifi: {
    footwear: ['combat boots', 'ankle boots', 'athletic sneakers', 'work boots', 'knee high boots'],
    accessories: ['Gas mask', 'Headphones', 'Glasses', 'Belt', 'Gloves', 'Body chain', 'Leg holster', 'Monocle', 'Steampunk goggles', 'Pocket watch chain'],
    props: ['Laptop', 'Phone', 'Camera', 'Artifact', 'Compass', 'Telescope', 'Binoculars', 'Hourglass'],
    makeup: ['Cyberpunk face decals', 'Graphic eyeliner', 'Bold makeup', '80s neon makeup', 'Monochrome makeup', 'No makeup']
  },
  water: {
    footwear: ['barefoot', 'sandals', 'flip flops'],
    accessories: ['Anklet', 'Bracelet', 'Necklace', 'Hair clip', 'Toe ring', 'Pirate tricorn hat', 'Sailor hat'],
    props: ['Towel', 'Water bottle', 'Single flower', 'Fishing rod', 'Compass', 'Treasure map', 'Binoculars'],
    makeup: ['No makeup', 'Dewy skin', 'Natural makeup', 'Glossy lips', 'Minimal makeup']
  },
  desert: {
    footwear: ['sandals', 'ankle boots', 'cowboy boots', 'hiking boots', 'combat boots', 'work boots'],
    accessories: ['Sunglasses', 'Scarf', 'Hat', 'Cowboy hat', 'Wide brim hat', 'Bracelet', 'Compass pendant'],
    props: ['Map', 'Compass', 'Water bottle', 'Lantern', 'Camera', 'Blanket', 'Camp lantern', 'Telescope'],
    makeup: ['Sun-kissed makeup', 'Bronzed makeup', 'Natural makeup', 'No makeup', 'Minimal makeup', 'Dewy skin']
  }
};

// ==========================================
// CLOTHING_PRESETS — outfit preset definitions
// ==========================================
const CLOTHING_PRESETS = {
  'Beach Cover-Up Set': { tags:['Beach', 'Swimwear', 'Travel'], clothingTheme:'Beach', clothingStyle:'One-Piece', onePiece:'swim cover-up', hosiery:'', footwear:'sandals' },
  'Beach Lounge Set': { tags:['Beach', 'Travel'], clothingTheme:'Beach', clothingStyle:'Two-Piece', top:'camisole', bottom:'shorts', hosiery:'', footwear:'espadrilles' },
  'Bikini Set': { tags:['Beach', 'Swimwear'], clothingTheme:'Swimwear', clothingStyle:'Swimwear', top:'bikini top', bottom:'bikini bottoms', hosiery:'', footwear:'flip flops' },
  'Boho Festival Set': { tags:['Creative', 'Events'], clothingTheme:'Creative', clothingStyle:'Layered', top:'crop top', bottom:'maxi skirt', outerwear:'kimono jacket', hosiery:'', footwear:'ankle boots' },
  'Casual Coffee Run Set': { tags:['At Home', 'Shopping', 'Travel'], clothingTheme:'At Home', clothingStyle:'Layered', top:'cardigan', bottom:'jeans', outerwear:'utility jacket', hosiery:'ankle socks', footwear:'athletic sneakers' },
  'Classic Office Set': { tags:['Office'], clothingTheme:'Office', clothingStyle:'Layered', top:'blouse', bottom:'dress pants', outerwear:'blazer', hosiery:'pantyhose', footwear:'high heels' },
  'Cozy At-Home Set': { tags:['At Home'], clothingTheme:'At Home', clothingStyle:'Two-Piece', top:'oversized sweater', bottom:'leggings', hosiery:'wool socks', footwear:'barefoot' },
  'Date Night Dress Set': { tags:['Dining', 'Events', 'Nightlife'], clothingTheme:'Nightlife', clothingStyle:'One-Piece', onePiece:'cocktail dress', hosiery:'sheer tights', footwear:'stilettos' },
  'Enchanted Grove Set': { tags:['Fantasy'], clothingTheme:'Fantasy', clothingStyle:'Layered', top:'corset', bottom:'maxi skirt', outerwear:'cape', hosiery:'thigh high stockings', footwear:'mary janes' },
  'Explorer Jungle Set': { tags:['Jungle', 'Travel'], clothingTheme:'Jungle', clothingStyle:'Layered', top:'button-up shirt', bottom:'cargo pants', outerwear:'utility jacket', hosiery:'ankle socks', footwear:'hiking boots' },
  'Fantasy Armor Set': { tags:['Fantasy'], clothingTheme:'Fantasy', clothingStyle:'Fantasy / Armor', onePiece:'armor', hosiery:'thigh high stockings', footwear:'knee high boots' },
  'Fitness Training Set': { tags:['Fitness'], clothingTheme:'Fitness', clothingStyle:'Two-Piece', top:'sports bra', bottom:'leggings', hosiery:'ankle socks', footwear:'running shoes' },
  'Flowing Party Dress Set': { tags:['Events', 'Nightlife', 'Studio'], clothingTheme:'Events', clothingStyle:'One-Piece', onePiece:'maxi dress', hosiery:'sheer tights', footwear:'high heels' },
  'Jungle Adventure Set': { tags:['Jungle', 'Prehistoric'], clothingTheme:'Jungle', clothingStyle:'Layered', top:'tank top', bottom:'shorts', outerwear:'utility jacket', hosiery:'knee high socks', footwear:'combat boots' },
  'Maternity Studio Set': { tags:['Maternity', 'Studio'], clothingTheme:'Maternity', clothingStyle:'One-Piece', onePiece:'maternity dress', hosiery:'', footwear:'barefoot' },
  'Moonlit Sorceress Set': { tags:['Fantasy', 'Nightlife'], clothingTheme:'Fantasy', clothingStyle:'Fantasy / Armor', onePiece:'witch robes', hosiery:'sheer tights', footwear:'ankle boots' },
  'Prehistoric Huntress Set': { tags:['Jungle', 'Prehistoric'], clothingTheme:'Prehistoric', clothingStyle:'Layered', top:'crop top', bottom:'sarong', outerwear:'shawl', hosiery:'leg warmers', footwear:'knee high boots' },
  'Resort Swim Set': { tags:['Beach', 'Swimwear'], clothingTheme:'Swimwear', clothingStyle:'Swimwear', onePiece:'one-piece swimsuit', hosiery:'', footwear:'sandals' },
  'Safari Linen Set': { tags:['Jungle', 'Travel'], clothingTheme:'Jungle', clothingStyle:'Layered', top:'button-up shirt', bottom:'high-waisted shorts', outerwear:'vest', hosiery:'ankle socks', footwear:'ankle boots' },
  'Smart Casual Office Set': { tags:['Office', 'Shopping'], clothingTheme:'Office', clothingStyle:'Layered', top:'blouse', bottom:'pencil skirt', outerwear:'cardigan', hosiery:'pantyhose', footwear:'mary janes' },
  'Studio Glam Set': { tags:['Studio'], clothingTheme:'Studio', clothingStyle:'One-Piece', onePiece:'slip dress', hosiery:'sheer tights', footwear:'stilettos' },
  'Sunset Boardwalk Set': { tags:['Beach', 'Travel'], clothingTheme:'Beach', clothingStyle:'One-Piece', onePiece:'sundress', hosiery:'', footwear:'wedges' },
  'Travel Day Set': { tags:['Travel'], clothingTheme:'Travel', clothingStyle:'Layered', top:'t-shirt', bottom:'joggers', outerwear:'jacket', hosiery:'ankle socks', footwear:'slip on shoes' },
  'Tropical Waterfall Set': { tags:['Beach', 'Jungle', 'Swimwear'], clothingTheme:'Swimwear', clothingStyle:'Swimwear', top:'bikini top', bottom:'sarong', hosiery:'', footwear:'sandals' },
  'Autumn Harvest Set': { tags:['Autumn', 'Nature', 'Seasons'], clothingTheme:'Autumn', clothingStyle:'Layered', top:'flannel shirt', bottom:'high-waisted shorts', outerwear:'cardigan', hosiery:'knee high socks', footwear:'ankle boots' },
  'Bridal Shower Set': { tags:['Wedding', 'Events'], clothingTheme:'Wedding', clothingStyle:'One-Piece', onePiece:'slip dress', hosiery:'sheer tights', footwear:'ballet flats' },
  'Fall Hiking Set': { tags:['Autumn', 'Nature', 'Travel'], clothingTheme:'Autumn', clothingStyle:'Layered', top:'henley shirt', bottom:'cargo pants', outerwear:'windbreaker', hosiery:'wool socks', footwear:'hiking boots' },
  'Garden Party Set': { tags:['Events', 'Nature'], clothingTheme:'Events', clothingStyle:'One-Piece', onePiece:'midi dress', hosiery:'sheer tights', footwear:'wedges' },
  'Holiday Glam Set': { tags:['Holiday', 'Events', 'Nightlife'], clothingTheme:'Holiday', clothingStyle:'One-Piece', onePiece:'sequin dress', hosiery:'sheer tights', footwear:'high heels' },
  'Picnic Day Set': { tags:['At Home', 'Nature'], clothingTheme:'At Home', clothingStyle:'One-Piece', onePiece:'sundress', hosiery:'', footwear:'espadrilles' },
  'Pool Party Set': { tags:['Beach', 'Swimwear'], clothingTheme:'Swimwear', clothingStyle:'Two-Piece', top:'bikini top', bottom:'bikini bottoms', hosiery:'', footwear:'flip flops' },
  'Ski Lodge Set': { tags:['Travel', 'Winter'], clothingTheme:'Travel', clothingStyle:'Layered', top:'turtleneck', bottom:'leggings', outerwear:'coat', hosiery:'wool socks', footwear:'snow boots' },
  'Street Style Set': { tags:['Urban', 'Shopping'], clothingTheme:'Urban', clothingStyle:'Layered', top:'crop top', bottom:'jeans', outerwear:'leather jacket', hosiery:'ankle socks', footwear:'athletic sneakers' },
  'Urban Night Set': { tags:['Urban', 'Nightlife'], clothingTheme:'Urban', clothingStyle:'Two-Piece', top:'halter top', bottom:'leather pants', hosiery:'', footwear:'stilettos' },
  'Wedding Day Set': { tags:['Wedding', 'Events'], clothingTheme:'Wedding', clothingStyle:'One-Piece', onePiece:'wedding dress', hosiery:'sheer tights', footwear:'stilettos' },
  'Winter Coat Set': { tags:['Travel', 'Seasons'], clothingTheme:'Travel', clothingStyle:'Layered', top:'turtleneck', bottom:'dress pants', outerwear:'trench coat', hosiery:'pantyhose', footwear:'ankle boots' },
  'Steampunk Explorer Set': { tags:['Steampunk', 'Creative'], clothingTheme:'Steampunk', clothingStyle:'Layered', top:'blouse', bottom:'high-waisted shorts', outerwear:'vest', hosiery:'thigh high stockings', footwear:'ankle boots' },
  'Cyberpunk Street Set': { tags:['Cyberpunk', 'Urban'], clothingTheme:'Cyberpunk', clothingStyle:'Layered', top:'crop top', bottom:'leather pants', outerwear:'utility jacket', hosiery:'', footwear:'combat boots' },
  'Gothic Romance Set': { tags:['Gothic', 'Fantasy'], clothingTheme:'Gothic', clothingStyle:'One-Piece', onePiece:'Gothic dress', hosiery:'thigh high stockings', footwear:'ankle boots' },
  'Western Cowgirl Set': { tags:['Western', 'Travel'], clothingTheme:'Western', clothingStyle:'Layered', top:'flannel shirt', bottom:'jeans', outerwear:'vest', hosiery:'ankle socks', footwear:'cowboy boots' },
  'Greek Goddess Set': { tags:['Mythology', 'Fantasy'], clothingTheme:'Mythology', clothingStyle:'One-Piece', onePiece:'toga', hosiery:'', footwear:'barefoot' },
  'Superhero Cape Set': { tags:['Superhero', 'Fantasy'], clothingTheme:'Superhero', clothingStyle:'One-Piece', onePiece:'superhero suit', hosiery:'', footwear:'knee high boots' },
  'Pirate Queen Set': { tags:['Pirate', 'Historical'], clothingTheme:'Pirate', clothingStyle:'Layered', top:'blouse', bottom:'cargo pants', outerwear:'coat', hosiery:'knee high socks', footwear:'knee high boots' },
  'Viking Shield Maiden Set': { tags:['Viking', 'Fantasy'], clothingTheme:'Viking', clothingStyle:'One-Piece', onePiece:'armor', hosiery:'thigh high stockings', footwear:'knee high boots' },
  'Cottagecore Garden Set': { tags:['Cottagecore', 'Nature'], clothingTheme:'Cottagecore', clothingStyle:'One-Piece', onePiece:'sundress', hosiery:'ankle socks', footwear:'espadrilles' },
  'Sci-Fi Commander Set': { tags:['Sci-Fi', 'Fantasy'], clothingTheme:'Sci-Fi', clothingStyle:'One-Piece', onePiece:'space suit', hosiery:'', footwear:'combat boots' },
  'Dark Academia Set': { tags:['Dark Academia', 'Historical'], clothingTheme:'Dark Academia', clothingStyle:'Layered', top:'turtleneck', bottom:'wide-leg pants', outerwear:'blazer', hosiery:'pantyhose', footwear:'loafers' },
  'Anime Style Set': { tags:['Anime', 'Creative'], clothingTheme:'Anime', clothingStyle:'One-Piece', onePiece:'kimono', hosiery:'ankle socks', footwear:'mary janes' },
  'World Traveler Set': { tags:['Travel', 'Nature'], clothingTheme:'Travel', clothingStyle:'Layered', top:'button-up shirt', bottom:'linen pants', outerwear:'utility jacket', hosiery:'ankle socks', footwear:'ankle boots' },
  'Desert Explorer Set': { tags:['Western', 'Travel'], clothingTheme:'Western', clothingStyle:'Layered', top:'tank top', bottom:'cargo pants', outerwear:'vest', hosiery:'ankle socks', footwear:'hiking boots' },
  'Rainy Day Cozy Set': { tags:['At Home', 'Autumn'], clothingTheme:'At Home', clothingStyle:'Layered', top:'turtleneck', bottom:'jeans', outerwear:'trench coat', hosiery:'wool socks', footwear:'ankle boots' },
  'Tropical Island Set': { tags:['Beach', 'Travel', 'Swimwear'], clothingTheme:'Beach', clothingStyle:'One-Piece', onePiece:'sundress', hosiery:'', footwear:'sandals' }
};
