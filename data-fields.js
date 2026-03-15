// ==========================================
// FIELDS — autocomplete & randomizer source data
// ==========================================
const FIELDS = {
  camera: ['action sports photography', 'aerial drone photography', 'beauty editorial photography', 'boudoir portrait photography', 'candid lifestyle photography', 'cinematic portrait photography', 'commercial campaign photography', 'documentary lifestyle photography', 'editorial fashion photography', 'environmental portrait photography', 'family portrait photography', 'fashion catalog photography', 'film-inspired portrait photography', 'fine art portrait photography', 'glamour portrait photography', 'high-end lifestyle photography', 'high-fashion editorial photography', 'indoor natural light photography', 'luxury campaign photography', 'magazine cover photography', 'moody portrait photography', 'newborn portrait photography', 'outdoor golden hour photography', 'petite studio portrait photography', 'professional portrait photography', 'raw street style photography', 'romantic portrait photography', 'runway backstage photography', 'soft natural light portrait photography', 'sports editorial photography', 'storytelling lifestyle photography', 'street style photography', 'studio beauty photography', 'studio portrait photography', 'travel editorial photography', 'vintage film photography', 'wedding portrait photography'],

  shot: ['3/4 view shot', 'Aerial shot', 'Bird\'s eye view', 'Close-up shot', 'Detail shot', 'Dutch angle shot', 'Environmental portrait', 'Establishing shot', 'Extreme close-up', 'Eye-level shot', 'Fish-eye shot', 'Full body portrait', 'Full length shot', 'Ground level shot', 'Head-and-shoulders portrait', 'High angle shot', 'Low angle shot', 'Macro shot', 'Medium close-up shot', 'Medium shot', 'Over-the-shoulder shot', 'Panoramic shot', 'Point-of-view shot', 'Profile shot', 'Rear view shot', 'Side profile portrait', 'Symmetrical front shot', 'Three-quarter portrait', 'Top-down shot', 'Waist-up portrait', 'Wide lifestyle shot'],

  gender: ['female', 'male'],

  pregnancy: ['heavily pregnant', 'not pregnant', 'pregnant'],

  age: ['baby', 'toddler', 'young child', 'child', 'preteen', 'early teen', 'mid teen', 'late teen', 'early twenties', 'mid twenties', 'late twenties', 'thirties', 'forties', 'fifties', 'sixties', 'seventies', 'eighties+'],

  hairColor: ['Ash blonde', 'Auburn', 'Black', 'Blonde', 'Blue', 'Brown', 'Burgundy', 'Caramel brown', 'Champagne blonde', 'Charcoal', 'Chestnut', 'Chocolate brown', 'Copper', 'Dark brown', 'Dirty blonde', 'Ginger', 'Gray', 'Green', 'Honey blonde', 'Indigo', 'Jet black', 'Lavender', 'Light brown', 'Lilac', 'Mahogany', 'Neon green', 'Ombre', 'Pastel blue', 'Pastel pink', 'Pink', 'Platinum blonde', 'Purple', 'Rainbow', 'Red', 'Rose gold', 'Sandy blonde', 'Silver', 'Strawberry blonde', 'Teal', 'White', 'Wine red'],

  hairLength: ['Chin-length', 'Ear-length', 'Hip-length', 'Long', 'Medium', 'Pixie length', 'Short', 'Shoulder-length', 'Very long', 'Very short', 'Waist-length'],

  hairStyle: ['Afro', 'Bangs', 'Beach waves', 'Blunt bob', 'Bob', 'Box braids', 'Braided', 'Braided crown', 'Bun', 'Buzz cut', 'Coily', 'Cornrows', 'Curly', 'Curtain bangs', 'Dreadlocks', 'Faux hawk', 'Feathered layers', 'Finger waves', 'Flowing', 'French braid', 'Half-up half-down', 'High bun', 'High ponytail', 'Layered', 'Locs', 'Loose curls', 'Low bun', 'Messy bun', 'Mohawk', 'Mullet', 'Pigtails', 'Pixie cut', 'Ponytail', 'Ringlets', 'Shag cut', 'Side braid', 'Sleek bob', 'Slicked back', 'Space buns', 'Straight', 'Tight curls', 'Top knot', 'Twists', 'Undercut', 'Updo', 'Voluminous', 'Wavy', 'Wet look', 'Wolf cut'],

  skin: ['Albino', 'Amber skin', 'Beige skin', 'Bronze skin', 'Brown skin', 'Caramel skin', 'Dark skin', 'Deep espresso skin', 'Fair skin', 'Freckled skin', 'Golden skin', 'Light brown skin', 'Medium tan skin', 'Olive skin', 'Pale skin', 'Porcelain skin', 'Rosy skin', 'Sun-kissed skin', 'Tan skin', 'Vitiligo skin', 'Warm brown skin'],

  occupation: ['Actor', 'Adventurer', 'Alchemist', 'Angel', 'Architect', 'Artist', 'Astronaut', 'Athlete', 'Baker', 'Ballerina', 'Barista', 'Biker', 'Bodyguard', 'Botanist', 'Boxer', 'Chef', 'Content creator', 'Cowgirl', 'Cyberpunk hacker', 'Dancer', 'Detective', 'DJ', 'Doctor', 'Engineer', 'Explorer', 'Fairy', 'Farmer', 'Fashion designer', 'Firefighter', 'Florist', 'Gamer', 'Goddess', 'Guide', 'Influencer', 'Journalist', 'Knight', 'Librarian', 'Mage', 'Makeup artist', 'Mechanic', 'Mermaid', 'Model', 'Motorcyclist', 'Musician', 'Ninja', 'Nurse', 'Painter', 'Paramedic', 'Photographer', 'Pilot', 'Princess', 'Professor', 'Queen', 'Researcher', 'Rockstar', 'Sailor', 'Samurai', 'Scientist', 'Singer', 'Skater', 'Soldier', 'Stylist', 'Superhero', 'Surfer', 'Teacher', 'Traveler', 'Warrior', 'Witch', 'Writer', 'Yoga instructor'],

  expression: ['Adoring', 'Amazed', 'Beaming', 'Bold', 'Bright smile', 'Calm', 'Cheerful', 'Confident', 'Contemplative', 'Coy smile', 'Curious', 'Defiant', 'Determined', 'Dreamy', 'Ecstatic', 'Elegant', 'Excited', 'Fierce', 'Focused', 'Gentle smile', 'Joyful', 'Laughing', 'Loving', 'Melancholic', 'Mysterious', 'Peaceful', 'Playful', 'Proud', 'Radiant smile', 'Regal', 'Relaxed', 'Serene', 'Serious', 'Shy', 'Smiling', 'Smirking', 'Soft smile', 'Stoic', 'Sultry', 'Surprised', 'Tender', 'Thoughtful', 'Wistful'],

  makeup: ['80s neon makeup', 'Airbrushed glam', 'Bold makeup', 'Bronzed makeup', 'Cat eye', 'Colorful eyeliner', 'Contour makeup', 'Cosplay makeup', 'Cyberpunk face decals', 'Dewy skin', 'Dramatic makeup', 'Editorial high-fashion', 'Everyday makeup', 'Face gems', 'Face paint', 'Glitter highlights', 'Glossy lips', 'Glowing skin', 'Gothic makeup', 'Graphic eyeliner', 'Light makeup', 'Minimal makeup', 'Monochrome makeup', 'Natural makeup', 'No makeup', 'Pastel makeup', 'Peach blush', 'Red lips', 'Retro makeup', 'Shimmer makeup', 'Smokey eye', 'Soft glam', 'Sun-kissed makeup', 'Tribal markings', 'Vintage makeup', 'Winged eyeliner'],

  clothingTheme: ['At Home', 'Autumn', 'Beach', 'Creative', 'Dining', 'Events', 'Fantasy', 'Fitness', 'Historical', 'Holiday', 'Jungle', 'Maternity', 'Nightlife', 'Office', 'Prehistoric', 'Shopping', 'Studio', 'Swimwear', 'Travel', 'Urban', 'Wedding'],

  clothingStyle: ['Fantasy / Armor', 'Layered', 'One-Piece', 'Swimwear', 'Two-Piece'],

  clothingPresetType: ['At Home', 'Autumn', 'Beach', 'Creative', 'Dining', 'Events', 'Fantasy', 'Fitness', 'Historical', 'Holiday', 'Jungle', 'Maternity', 'Nightlife', 'Office', 'Prehistoric', 'Shopping', 'Studio', 'Swimwear', 'Travel', 'Urban', 'Wedding'],
  clothingPreset: ['Autumn Harvest Set', 'Beach Cover-Up Set', 'Beach Lounge Set', 'Bikini Set', 'Boho Festival Set', 'Bridal Shower Set', 'Casual Coffee Run Set', 'Classic Office Set', 'Cozy At-Home Set', 'Date Night Dress Set', 'Enchanted Grove Set', 'Explorer Jungle Set', 'Fall Hiking Set', 'Fantasy Armor Set', 'Fitness Training Set', 'Flowing Party Dress Set', 'Garden Party Set', 'Holiday Glam Set', 'Jungle Adventure Set', 'Maternity Studio Set', 'Moonlit Sorceress Set', 'Picnic Day Set', 'Pool Party Set', 'Prehistoric Huntress Set', 'Resort Swim Set', 'Safari Linen Set', 'Ski Lodge Set', 'Smart Casual Office Set', 'Street Style Set', 'Studio Glam Set', 'Sunset Boardwalk Set', 'Tropical Waterfall Set', 'Travel Day Set', 'Urban Night Set', 'Wedding Day Set', 'Winter Coat Set'],

  onePiece: ['A-line dress', 'Apron dress', 'Armor', 'Asymmetric dress', 'Babydoll dress', 'Ball gown', 'Bathrobe', 'Beach cover-up', 'Beach dress', 'Bodycon dress', 'Bodysuit', 'Bustier dress', 'Caftan', 'Cape dress', 'Catsuit', 'Cocktail dress', 'Co-ord set', 'Corset dress', 'Corset gown', 'Cosplay outfit', 'Costume', 'Coveralls', 'Cover-up dress', 'Cyberpunk techwear', 'Duster coat dress', 'Elegant dress', 'Embroidered dress', 'Empire waist dress', 'Evening gown', 'Feathered gown', 'Figure skating dress', 'Fit-and-flare dress', 'Flamenco dress', 'Floral maxi dress', 'Floral sundress', 'Folk costume', 'Fringe dress', 'Gothic dress', 'Gown', 'Halter dress', 'Hanfu', 'Hooded robe', 'Jumpsuit', 'Kaftan', 'Kimono', 'Knitted dress', 'Lace dress', 'Latex bodysuit', 'Leather jumpsuit', 'Little black dress', 'Maternity dress', 'Maxi dress', 'Mermaid gown', 'Midi dress', 'Mini dress', 'Nightgown', 'Off-shoulder dress', 'One-piece swimsuit', 'Open-back dress', 'Overall shorts', 'Overalls', 'Pencil dress', 'Pinafore dress', 'Robe', 'Romper', 'Ruched dress', 'Ruffle dress', 'Sari', 'Sequin dress', 'Sheath dress', 'Shift dress', 'Shirt dress', 'Slip dress', 'Smock dress', 'Space suit', 'Strapless dress', 'Sundress', 'Superhero suit', 'Sweater dress', 'Swim cover-up', 'Swimdress', 'Tactical suit', 'Tiered dress', 'Toga', 'Tulle dress', 'Tuxedo jumpsuit', 'Uniform', 'Velvet dress', 'Velvet gown', 'Victorian gown', 'Vintage tea dress', 'Wedding dress', 'Witch robes', 'Wrap dress'],

  onePieceColor: ['Beige', 'Black', 'Blue', 'Blush pink', 'Bronze', 'Brown', 'Burgundy', 'Champagne', 'Charcoal', 'Chocolate', 'Copper', 'Coral', 'Cream', 'Dusty rose', 'Emerald green', 'Floral print', 'Forest green', 'Fuchsia', 'Gold', 'Gray', 'Green', 'Iridescent', 'Ivory', 'Lavender', 'Leopard print', 'Lilac', 'Magenta', 'Metallic', 'Mint', 'Mocha', 'Multicolor', 'Mustard', 'Navy blue', 'Neon orange', 'Olive', 'Orange', 'Pastel pink', 'Peach', 'Pearl white', 'Pink', 'Plum', 'Polka dot', 'Purple', 'Rainbow', 'Red', 'Rose gold', 'Royal blue', 'Sage green', 'Silver', 'Sky blue', 'Striped', 'Tan', 'Taupe', 'Turquoise', 'White', 'Wine red', 'Yellow'],

  onePieceFabric: ['Brocade', 'Burlap', 'Canvas', 'Cashmere', 'Chambray', 'Chiffon', 'Corduroy', 'Cotton', 'Crepe', 'Denim', 'Faux fur', 'Flannel', 'Fleece', 'Holographic foil', 'Jersey knit', 'Knit', 'Lace', 'Leather', 'Linen', 'Mesh', 'Neoprene', 'Nylon', 'Organza', 'PVC', 'Satin', 'Sequin', 'Silk', 'Spandex', 'Suede', 'Taffeta', 'Tulle', 'Tweed', 'Velvet', 'Wool'],

  top: ['Bikini top', 'Blazer', 'Blouse', 'Bolero jacket', 'Bralette', 'Button-up shirt', 'Camisole', 'Cape', 'Cardigan', 'Chainmail', 'Coat', 'Corset', 'Crop top', 'Denim jacket', 'Flannel shirt', 'Halter top', 'Henley shirt', 'Hoodie', 'Jacket', 'Kimono jacket', 'Leather jacket', 'Long-sleeve tee', 'Off-shoulder top', 'Oversized sweater', 'Polo shirt', 'Poncho', 'Rash guard', 'Shawl', 'Shirt', 'Sports bra', 'Sweater', 'Tankini top', 'T-shirt', 'Tank top', 'Trench coat', 'Triangle bikini top', 'Tunic top', 'Turtleneck', 'Utility jacket', 'V-neck shirt', 'Vest', 'Windbreaker', 'Wrap top'],

  topColor: ['Beige', 'Black', 'Blue', 'Blush pink', 'Brown', 'Burgundy', 'Champagne', 'Charcoal', 'Coral', 'Cream', 'Dusty rose', 'Emerald', 'Floral', 'Fuchsia', 'Gold', 'Gray', 'Green', 'Ivory', 'Khaki', 'Lavender', 'Leopard print', 'Lilac', 'Metallic', 'Mint', 'Mocha', 'Multicolor', 'Mustard', 'Navy', 'Olive', 'Orange', 'Pastel', 'Peach', 'Pink', 'Plum', 'Polka dot', 'Purple', 'Rainbow', 'Red', 'Rose gold', 'Sage', 'Silver', 'Sky blue', 'Striped', 'Tan', 'Taupe', 'Turquoise', 'White', 'Wine red', 'Yellow'],

  topFabric: ['Boucle', 'Cashmere', 'Chambray', 'Chiffon', 'Corduroy', 'Cotton', 'Crochet', 'Denim', 'Faux fur', 'Fleece', 'Fur', 'Jersey knit', 'Knit', 'Lace', 'Leather', 'Linen', 'Mesh', 'Neoprene', 'Nylon', 'Organza', 'Satin', 'Sequin', 'Silk', 'Spandex', 'Suede', 'Tulle', 'Velvet', 'Wool'],

  bottom: ['A-line skirt', 'Athletic shorts', 'Bikini bottoms', 'Bike shorts', 'Board shorts', 'Capri pants', 'Capris', 'Cargo pants', 'Chinos', 'Culottes', 'Denim shorts', 'Dress pants', 'Flared pants', 'Harem pants', 'High-waisted shorts', 'Jeans', 'Joggers', 'Leather pants', 'Leggings', 'Linen pants', 'Maxi skirt', 'Midi skirt', 'Mini skirt', 'Palazzo pants', 'Pencil skirt', 'Pleated skirt', 'Sarong', 'Shorts', 'Skater skirt', 'Skirt', 'Swim skirt', 'Sweatpants', 'Tattered jeans', 'Wide-leg pants', 'Yoga pants'],

  bottomColor: ['Beige', 'Black', 'Blue', 'Blush pink', 'Brown', 'Burgundy', 'Chocolate', 'Cream', 'Denim blue', 'Emerald', 'Gray', 'Green', 'Khaki', 'Lavender', 'Mocha', 'Navy', 'Olive', 'Orange', 'Pink', 'Plum', 'Purple', 'Red', 'Sage', 'Silver', 'Sky blue', 'Tan', 'Taupe', 'White', 'Wine red', 'Yellow'],

  bottomFabric: ['Cashmere', 'Chambray', 'Corduroy', 'Cotton', 'Denim', 'Faux leather', 'Fleece', 'Jersey knit', 'Knit', 'Lace', 'Leather', 'Linen', 'Mesh', 'Nylon', 'Satin', 'Sequin', 'Silk', 'Spandex', 'Suede', 'Tulle', 'Velvet', 'Wool'],

  outerwear: ['blazer', 'bolero jacket', 'cape', 'cardigan', 'coat', 'cropped jacket', 'denim jacket', 'hoodie', 'kimono jacket', 'leather jacket', 'poncho', 'shawl', 'trench coat', 'utility jacket', 'vest', 'windbreaker'],

  outerwearColor: ['Beige', 'Black', 'Blue', 'Blush pink', 'Brown', 'Burgundy', 'Champagne', 'Charcoal', 'Coral', 'Cream', 'Dusty rose', 'Emerald', 'Gold', 'Gray', 'Green', 'Ivory', 'Lavender', 'Mint', 'Navy', 'Olive', 'Peach', 'Pink', 'Plum', 'Purple', 'Red', 'Rose gold', 'Royal blue', 'Sage', 'Silver', 'Sky blue', 'Tan', 'Taupe', 'Turquoise', 'White', 'Yellow'],

  outerwearFabric: ['Cashmere', 'Chambray', 'Chiffon', 'Corduroy', 'Cotton', 'Denim', 'Faux fur', 'Fleece', 'Jersey knit', 'Knit', 'Lace', 'Leather', 'Linen', 'Mesh', 'Nylon', 'Satin', 'Silk', 'Suede', 'Tweed', 'Velvet', 'Wool'],

  hosiery: ['ankle socks', 'compression socks', 'fishnet stockings', 'footless tights', 'knee high socks', 'leg warmers', 'pantyhose', 'patterned tights', 'sheer stockings', 'sheer tights', 'thigh high stockings', 'wool socks'],

  hosieryColor: ['beige', 'black', 'blue', 'blush pink', 'brown', 'burgundy', 'charcoal', 'cream', 'gray', 'green', 'ivory', 'lavender', 'navy', 'nude', 'olive', 'pink', 'purple', 'red', 'tan', 'teal', 'white'],

  hosieryFabric: ['cashmere blend', 'cotton', 'fishnet', 'lace', 'merino wool', 'mesh', 'microfiber', 'nylon', 'ribbed knit', 'sheer nylon', 'silk blend', 'spandex blend', 'wool'],

  footwear: ['ankle boots', 'athletic sneakers', 'ballet flats', 'barefoot', 'combat boots', 'cowboy boots', 'dress shoes', 'espadrilles', 'flip flops', 'high heels', 'hiking boots', 'knee high boots', 'loafers', 'mary janes', 'moccasins', 'platform heels', 'running shoes', 'sandals', 'slip on shoes', 'snow boots', 'stilettos', 'wedges', 'work boots'],

  footwearColor: ['beige', 'black', 'blue', 'brown', 'burgundy', 'charcoal', 'cream', 'gold', 'gray', 'green', 'ivory', 'navy', 'pink', 'purple', 'red', 'silver', 'tan', 'teal', 'white', 'yellow'],

  footwearFabric: ['canvas', 'denim', 'fabric', 'faux leather', 'felt', 'knit', 'lace', 'leather', 'mesh', 'nubuck', 'patent leather', 'rubber', 'satin', 'suede', 'synthetic', 'velvet', 'wool'],

  accessories: ['Anklet', 'Aura glow', 'Backpack', 'Bangle bracelet', 'Baseball cap', 'Beaded necklace', 'Belt', 'Beret', 'Body chain', 'Bow tie', 'Bracelet', 'Brooch', 'Cape', 'Chain belt', 'Charm bracelet', 'Choker', 'Clutch bag', 'Cowboy hat', 'Crown', 'Crystal pendant', 'Cuff bracelet', 'Drop earrings', 'Ear cuff', 'Earrings', 'Elbow gloves', 'Embroidered bag', 'Fanny pack', 'Feather boa', 'Fedora hat', 'Flower crown', 'Gas mask', 'Glasses', 'Gloves', 'Gold chain', 'Hair bow', 'Hair clip', 'Hair pins', 'Handbag', 'Hat', 'Headband', 'Headphones', 'Hoop earrings', 'Jewelry', 'Knit beanie', 'Lace collar', 'Leather gloves', 'Leg holster', 'Locket necklace', 'Midi rings', 'Mini backpack', 'Monocle', 'Moon pendant', 'Neck scarf', 'Necklace', 'Pearl necklace', 'Rings', 'Sash', 'Scarf', 'Shoulder bag', 'Silk gloves', 'Silk scarf', 'Snake bracelet', 'Stacked bracelets', 'Stacked rings', 'Statement earrings', 'Straw hat', 'Sunglasses', 'Sword', 'Tennis bracelet', 'Tiara', 'Toe ring', 'Tote bag', 'Umbrella', 'Veil', 'Visor', 'Waist chain', 'Wand', 'Watch', 'Wide brim hat'],

  props: ['Acoustic guitar', 'Artifact', 'Baby blanket', 'Balloon', 'Balloons', 'Basket of fruit', 'Blanket', 'Book', 'Bouquet', 'Briefcase', 'Bubbles', 'Camera', 'Camp lantern', 'Candles', 'Canvas painting', 'Champagne glass', 'Coffee cup', 'Crystal ball', 'Deck of cards', 'Designer shopping bags', 'Dreamcatcher', 'Dumbbells', 'Envelope', 'Fairy lights', 'Film camera', 'Fishing rod', 'Flowers', 'Fruit bowl', 'Gift box', 'Guitar', 'Hockey stick', 'Horseback', 'Ice cream cone', 'Journal notebook', 'Jump rope', 'Kite', 'Lantern', 'Laptop', 'Luggage', 'Map', 'Microphone', 'Mirror', 'Musical instrument', 'Paint palette', 'Parasol', 'Phone', 'Picnic basket', 'Pillow', 'Polaroid camera', 'Pottery wheel', 'Purse', 'Rose', 'Scroll', 'Shield', 'Shopping bags', 'Single flower', 'Skateboard', 'Sketchbook', 'Smoothie cup', 'Snack box', 'Snowboard', 'Soccer ball', 'Sparkler', 'Staff', 'Stuffed animal', 'Suitcase', 'Sun hat', 'Surfboard', 'Tea cup', 'Teddy bear', 'Tennis racket', 'Towel', 'Trophy', 'Umbrella', 'Violin', 'Water bottle', 'Watering can', 'Wine glass', 'Yoga mat'],

  // New structured categories
  jewelry: ['Anklet', 'Bangle bracelet', 'Beaded necklace', 'Body chain', 'Bracelet', 'Brooch', 'Charm bracelet', 'Choker', 'Crystal pendant', 'Cuff bracelet', 'Drop earrings', 'Ear cuff', 'Earrings', 'Gold chain', 'Hoop earrings', 'Locket necklace', 'Midi rings', 'Moon pendant', 'Necklace', 'Pearl necklace', 'Rings', 'Snake bracelet', 'Stacked bracelets', 'Stacked rings', 'Statement earrings', 'Tennis bracelet', 'Tiara', 'Toe ring', 'Waist chain'],

  headwear: ['Baseball cap', 'Beret', 'Cowboy hat', 'Crown', 'Fedora hat', 'Flower crown', 'Hair bow', 'Hair clip', 'Hair pins', 'Headband', 'Knit beanie', 'Straw hat', 'Sun hat', 'Tiara', 'Veil', 'Visor', 'Wide brim hat'],

  holdingItem: ['Acoustic guitar', 'Balloon', 'Book', 'Bouquet', 'Bubbles', 'Camera', 'Champagne glass', 'Coffee cup', 'Crystal ball', 'Deck of cards', 'Dumbbells', 'Envelope', 'Film camera', 'Flowers', 'Gift box', 'Guitar', 'Ice cream cone', 'Journal notebook', 'Jump rope', 'Kite', 'Lantern', 'Laptop', 'Map', 'Microphone', 'Mirror', 'Paint palette', 'Parasol', 'Phone', 'Polaroid camera', 'Rose', 'Scroll', 'Shield', 'Single flower', 'Skateboard', 'Sketchbook', 'Smoothie cup', 'Sparkler', 'Staff', 'Stuffed animal', 'Tea cup', 'Teddy bear', 'Tennis racket', 'Umbrella', 'Violin', 'Wand', 'Water bottle', 'Wine glass'],

  sceneProp: ['Basket of fruit', 'Blanket', 'Briefcase', 'Candles', 'Canvas painting', 'Dreamcatcher', 'Fishing rod', 'Fruit bowl', 'Hockey stick', 'Luggage', 'Picnic basket', 'Pillow', 'Pottery wheel', 'Shopping bags', 'Snack box', 'Snowboard', 'Soccer ball', 'Suitcase', 'Surfboard', 'Towel', 'Trophy', 'Watering can', 'Yoga mat'],

  backgroundProp: ['Balloon arch', 'Bokeh lights', 'Canopy of vines', 'Confetti cloud', 'Fairy lights', 'Flower wall', 'Garden arch', 'Hanging lanterns', 'Neon sign', 'Northern lights', 'Petal rain', 'String lights', 'Vintage car', 'Waterfall', 'Wildflowers'],

  magicProp: ['Conjured fire', 'Crystal orb', 'Energy tendrils', 'Floating petals', 'Floating roses', 'Glowing aura', 'Glowing runes', 'Halo of light', 'Magical mist', 'Magic sparkles', 'Orbs of light', 'Spirit flames', 'Summoned lightning', 'Swirling leaves', 'Swirling stars'],

  environment: ['Abandoned amusement park', 'Abandoned asylum', 'Airport', 'Ancient Egypt', 'Ancient library', 'Ancient temple ruins', 'Apple orchard', 'Aquarium tunnel', 'Art gallery', 'Art studio', 'Astronomy observatory', 'Autumn forest', 'Backyard garden', 'Balcony overlook', 'Ballroom', 'Bamboo forest', 'Barn', 'Beach', 'Beach bonfire', 'Beach resort', 'Boardwalk', 'Bookstore', 'Botanical garden', 'Boutique', 'Butterfly garden', 'Cafe', 'Calm lake', 'Candy land', 'Canyon', 'Castle courtyard', 'Cathedral', 'Cave', 'Cherry blossom garden', 'Cherry blossom park', 'City alley', 'City rooftop', 'City street', 'Cliffside overlook', 'Cloud kingdom', 'Coastal village', 'Cobblestone alley', 'Concert hall', 'Conference room', 'Coral reef', 'Countryside', 'Cozy bedroom', 'Cozy fireplace', 'Cozy kitchen', 'Covered bridge', 'Cruise ship', 'Crystal cave', 'Cyberpunk alley', 'Dance studio', 'Desert dunes', 'Desert oasis', 'Drive-in theater', 'Dreamy greenhouse', 'Enchanted forest', 'Fairy garden', 'Farm', 'Farmhouse', 'Field', 'Floating island', 'Flower field', 'Flower market', 'Fog-covered moors', 'Forest cabin', 'Forest clearing', 'Forest waterfall', 'Futuristic city', 'Garden', 'Garden maze', 'Glacier', 'Gothic castle', 'Graffiti wall', 'Grand staircase', 'Greenhouse', 'Gym', 'Harbor', 'Historic townhouse', 'Home studio', 'Hospital', 'Hot air balloon', 'Hotel lobby', 'Ice cave', 'Indoor pool', 'Infinity pool', 'Irish countryside', 'Japanese tea house', 'Jungle', 'Koi pond', 'Laboratory', 'Lake dock', 'Lake reflections', 'Lakeside cabin', 'Lavender field', 'Library', 'Lighthouse', 'Lotus pond', 'Luxury penthouse', 'Luxury yacht', 'Market bazaar', 'Mars colony', 'Meadow', 'Medieval castle', 'Misty forest', 'Modern apartment', 'Modern living room', 'Monastery', 'Moonlit beach', 'Moroccan riad', 'Mountain peak', 'Mountain trail', 'Mountain waterfall', 'Mountains', 'Movie set', 'Museum', 'Music festival', 'Nature trail', 'Neon arcade', 'Night market', 'Nightclub', 'Oasis', 'Ocean', 'Office', 'Olive grove', 'Open field', 'Orchard', 'Orchard in bloom', 'Outdoor cinema', 'Palace', 'Parisian street', 'Park', 'Pier', 'Pink salt lake', 'Pine forest', 'Poolside lounge', 'Post-apocalyptic ruins', 'Pottery studio', 'Prairie', 'Pumpkin patch', 'Rain-slicked street', 'Rainforest', 'Ranch', 'Recording studio', 'Restaurant', 'Rice terraces', 'Rock concert', 'Rocky cliffs', 'Rolling hills', 'Rooftop bar', 'Rooftop garden', 'Rose garden', 'Sailboat', 'Salon', 'Sand dunes at dawn', 'Savanna', 'Secret garden', 'Ski resort', 'Snowy cabin', 'Snowy landscape', 'Spa', 'Space station', 'Spring meadow', 'Stable', 'Summer garden', 'Sunflower field', 'Swimming pool', 'Tea plantation', 'Temple', 'Terraced garden', 'Theater stage', 'Throne room', 'Tidal pool', 'Train station', 'Treehouse', 'Tropical beach', 'Tropical island', 'Tundra', 'Underground cavern', 'Underground speakeasy', 'Underwater', 'Urban garden', 'Urban loft', 'Urban street', 'Valley', 'Victorian parlor', 'Vineyard', 'Volcano summit', 'Water park', 'Waterfall', 'Watermill', 'Wheat field', 'Wildflower meadow', 'Winery', 'Winter wonderland', 'Yoga studio', 'Zen garden'],

  lighting: ['Aurora glow', 'Backlit sunset', 'Bioluminescent glow', 'Blue hour light', 'Blue water reflections', 'Bonfire light', 'Bright blue sky', 'Bright fluorescent', 'Bright gym lighting', 'Bright midday sunlight', 'Bright natural sunlight', 'Candlelight', 'Chandelier glow', 'Christmas lights', 'Cinematic lighting', 'Clinical lighting', 'Colorful neon lights', 'Cosmic glow', 'Cyberpunk neon', 'Dappled sunlight', 'Dawn light', 'Desert midday sun', 'Divine golden light', 'Dramatic side lighting', 'Dramatic stage light', 'Dramatic storm lighting', 'Dramatic sunset', 'Edison bulbs', 'Fairy lights', 'Fire glow', 'Flickering torchlight', 'Floating candles', 'Fog machine haze', 'Foggy atmosphere', 'Galaxy glow', 'Glittering sparkle', 'Golden hour sunset', 'Hazy light', 'Holographic signs', 'Lantern light', 'Laser beams', 'Lightning storm', 'Magical energy', 'Misty light', 'Moonlight', 'Natural daylight', 'Neon signs', 'Northern lights', 'Overcast light', 'Pink sunset glow', 'Purple magical energy', 'Ray tracing', 'Reflection light', 'Ring light', 'Rim lighting', 'Snow-reflected light', 'Soft diffused light', 'Soft morning light', 'Soft natural light', 'Soft studio lighting', 'Spotlights', 'Stage lighting', 'Starlight', 'String lights', 'Studio lighting', 'Sunbeam through window', 'Sunset city lights', 'Torch light', 'Twilight glow', 'Underwater sunbeams', 'Volumetric lighting', 'Warm amber lighting', 'Warm cafe lighting', 'Warm indoor lighting', 'Warm lamp light', 'Warm sunlight', 'Warm window light'],

  pose: [
    'Arms crossed over chest, feet shoulder-width apart',
    'Arms spread wide, feet planted firmly',
    'Back to camera, looking over right shoulder',
    'Blowing a kiss, weight on one hip',
    'Carrying shopping bags in both hands, walking forward',
    'Checking phone held in one hand, other hand relaxed at side',
    'Cradling belly with both hands, feet together',
    'Crouching down on both feet, knees bent',
    'Dancing with arms raised, one foot lifted',
    'Doing splits on the ground',
    'Drinking coffee from cup held in right hand',
    'Feeding birds with hand extended forward',
    'Floating on back in water, arms spread',
    'Gardening while kneeling on one knee',
    'Hands in jacket pockets, standing with feet together',
    'Holding coffee cup with both hands near face',
    'Holding flowers in one arm against chest',
    'Holding hands up to face, fingers touching cheeks',
    'Holding hat brim with one hand, other at side',
    'Hugging knees while sitting on ground',
    'Jumping mid-air with both feet off ground, arms up',
    'Kneeling gracefully on both knees, hands on thighs',
    'Laughing with head tilted back, one hand on chest',
    'Leaning against wall with one shoulder, arms relaxed',
    'Looking away thoughtfully, chin slightly raised',
    'Looking down softly, hands clasped in front',
    'Looking over shoulder, body angled away from camera',
    'Lying on back in field of flowers, arms spread',
    'Lying on side, head propped on hand',
    'Meditating cross-legged on ground, palms on knees',
    'Overhead stretch with both arms raised, feet together',
    'Painting on canvas, holding brush in right hand',
    'Picking flowers while bending forward slightly',
    'Playing guitar while seated, instrument on lap',
    'Pushing hair back with one hand, other on hip',
    'Reading book held in both hands',
    'Reclining on side, one elbow supporting upper body',
    'Relaxed pose with weight on one hip, arms loose',
    'Running lightly with natural stride, one foot forward',
    'Seated elegantly in chair, ankles crossed, hands on armrests',
    'Sitting comfortably with legs to one side, leaning on hand',
    'Sitting cross-legged on floor, hands in lap',
    'Spinning around with arms extended, dress flowing',
    'Standing confidently with feet shoulder-width apart, hands at sides',
    'Standing elegantly with one foot slightly forward, chin up',
    'Standing powerfully with wide stance, fists at sides',
    'Stretching arms overhead, standing on tiptoes',
    'Strolling with relaxed gait, one hand swinging',
    'Twirling dress hem with one hand while spinning',
    'Walking away from camera, natural stride',
    'Walking confidently toward camera, one foot forward mid-stride',
    'Walking naturally along path, arms swinging gently',
    'Walking on tiptoes with arms out for balance',
    'Warrior yoga pose with lunging front leg, arms extended',
    'Waving with one hand raised, other at side',
    'Windswept pose standing with hair blowing, feet planted',
    'Working on laptop while seated at desk',
    'Writing in journal while seated, pen in hand',
    'Yoga tree pose balanced on one foot, arms overhead'
  ],

  mood: ['adventurous exploratory mood', 'artistic creative mood', 'bold daring mood', 'calm tranquil mood', 'carefree lighthearted mood', 'cheerful bubbly mood', 'confident heroic mood', 'cozy intimate mood', 'dark brooding mood', 'dreamy ethereal mood', 'earthy grounded mood', 'elegant sophisticated mood', 'empowered confident mood', 'energetic vibrant mood', 'ethereal otherworldly mood', 'festive celebratory mood', 'fierce powerful mood', 'flirty playful mood', 'glamorous dazzling mood', 'happy relaxed mood', 'healthy active mood', 'introspective quiet mood', 'joyful happy mood', 'lively energetic mood', 'luxurious refined mood', 'magical whimsical mood', 'melancholic wistful mood', 'mysterious enchanting mood', 'nostalgic reflective mood', 'passionate intense mood', 'peaceful content mood', 'peaceful serene mood', 'playful adventurous mood', 'powerful bold mood', 'raw authentic mood', 'relaxed comfortable mood', 'romantic cozy mood', 'sensual alluring mood', 'soft feminine mood', 'soft whimsical mood', 'sporty dynamic mood', 'tender emotional mood', 'timeless classic mood', 'victorious triumphant mood', 'wild untamed mood']

};

// ==========================================
// RANDOMIZER_CORE — de-duplicated sublists for randomizer picks
// ==========================================
const RANDOMIZER_CORE = {
  expression: ['Adoring', 'Amazed', 'Beaming', 'Bold', 'Calm', 'Cheerful', 'Confident', 'Contemplative', 'Curious', 'Defiant', 'Determined', 'Dreamy', 'Elegant', 'Excited', 'Fierce', 'Focused', 'Joyful', 'Laughing', 'Loving', 'Melancholic', 'Mysterious', 'Peaceful', 'Playful', 'Proud', 'Regal', 'Relaxed', 'Serene', 'Serious', 'Shy', 'Smiling', 'Smirking', 'Soft smile', 'Stoic', 'Sultry', 'Surprised', 'Tender', 'Thoughtful', 'Wistful'],
  hairStyle: ['Afro', 'Bangs', 'Beach waves', 'Bob', 'Box braids', 'Braided crown', 'Bun', 'Buzz cut', 'Coily', 'Cornrows', 'Curly', 'Curtain bangs', 'Dreadlocks', 'Faux hawk', 'Feathered layers', 'Finger waves', 'Flowing', 'French braid', 'Half-up half-down', 'High ponytail', 'Layered', 'Locs', 'Messy bun', 'Mohawk', 'Mullet', 'Pigtails', 'Pixie cut', 'Ponytail', 'Shag cut', 'Side braid', 'Slicked back', 'Space buns', 'Straight', 'Top knot', 'Twists', 'Undercut', 'Updo', 'Voluminous', 'Wavy', 'Wolf cut'],
  footwear: ['ankle boots', 'athletic sneakers', 'ballet flats', 'barefoot', 'combat boots', 'cowboy boots', 'dress shoes', 'espadrilles', 'flip flops', 'high heels', 'hiking boots', 'knee high boots', 'loafers', 'mary janes', 'moccasins', 'sandals', 'slip on shoes', 'snow boots', 'wedges', 'work boots'],
};
