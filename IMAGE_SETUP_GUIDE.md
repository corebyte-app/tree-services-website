# Static Images Setup Guide

## Overview

The website is now configured to use static images stored in the codebase instead of placeholder URLs. Images should be placed in the `public/images/` directory.

## Directory Structure Created

```
public/images/
├── README.md                   # Detailed image requirements
├── hero/
│   └── main-hero.jpg          # Homepage hero (600x400px)
├── services/
│   ├── tree-removal.jpg       # Service card images (300x200px)
│   ├── tree-trimming.jpg
│   └── stump-grinding.jpg
└── pages/
    ├── tree-removal/
    │   ├── hero.jpg           # Page hero images (800x400px)
    │   └── process.jpg        # Content images (600x400px)
    ├── tree-trimming/
    │   ├── hero.jpg
    │   └── techniques.jpg
    └── stump-grinding/
        ├── hero.jpg
        ├── equipment.jpg
        └── before-after.jpg
```

## How to Add Your Images

### Step 1: Prepare Your Images
- **Resize** images to the recommended dimensions
- **Optimize** for web (keep under 500KB each)
- **Use descriptive filenames**

### Step 2: Place Images in Directories
Copy your images to the appropriate folders:
```bash
# Example:
cp your-hero-image.jpg public/images/hero/main-hero.jpg
cp tree-removal-photo.jpg public/images/services/tree-removal.jpg
```

### Step 3: Images Will Automatically Load
The website will automatically use your static images. If an image is missing, it falls back to placeholder images.

## Image Requirements

| Image Type | Dimensions | Location | Purpose |
|------------|------------|----------|---------|
| Hero Images | 800x400px | `hero/`, `pages/*/` | Main page headers |
| Service Cards | 300x200px | `services/` | Service thumbnails |
| Content Images | 600x400px | `pages/*/` | Supporting content |
| Before/After | 600x300px | `pages/stump-grinding/` | Comparison photos |

## Testing Your Images

1. **Add images** to the appropriate directories
2. **Start the development server**: `npm start`
3. **Check the website** - your images should display
4. **Missing images** will show placeholders (this is normal until you add them)

## Image Sources

### Free Stock Photos
- **Unsplash**: unsplash.com (search "tree service", "arborist")
- **Pexels**: pexels.com (search "tree removal", "chainsaw")
- **Pixabay**: pixabay.com (search "tree care", "landscaping")

### Paid Stock Photos
- **Shutterstock**: shutterstock.com
- **Getty Images**: gettyimages.com
- **Adobe Stock**: stock.adobe.com

### Taking Your Own Photos
- **Action shots** of your team working
- **Before/after** project photos
- **Equipment** and truck photos
- **Team** and company photos

## Image Optimization Tools

### Online Tools
- **TinyPNG**: tinypng.com (free compression)
- **Squoosh**: squoosh.app (Google's image optimizer)
- **ImageOptim**: imageoptim.com (Mac app)

### Batch Processing
```bash
# Using ImageMagick (if installed)
mogrify -resize 800x400 -quality 85 *.jpg
```

## Fallback System

The website includes a fallback system:
- **Primary**: Loads your static images from `/images/`
- **Fallback**: Shows placeholder if image is missing
- **No errors**: Website never breaks due to missing images

## Next Steps

1. **Gather or purchase** appropriate images
2. **Resize and optimize** them according to the specifications
3. **Place them** in the correct directories with the exact filenames
4. **Test** the website to ensure they display correctly
5. **Replace placeholders** gradually as you acquire better images

## File Naming Convention

Use descriptive, lowercase filenames with hyphens:
- ✅ `tree-removal-service.jpg`
- ✅ `professional-arborist.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `Tree Removal.jpg`

## Legal Considerations

- **Use royalty-free images** or purchase proper licenses
- **Credit photographers** if required by license
- **Avoid copyrighted images** without permission
- **Keep receipts** for purchased stock photos