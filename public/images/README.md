# Images Directory Structure

This directory contains all static images for the TreeCare Pro website.

## Directory Structure

```
public/images/
├── hero/
│   └── main-hero.jpg           # Homepage hero image (600x400px recommended)
├── services/
│   ├── tree-removal.jpg        # Tree removal service (300x200px)
│   ├── tree-trimming.jpg       # Tree trimming service (300x200px)
│   └── stump-grinding.jpg      # Stump grinding service (300x200px)
└── pages/
    ├── tree-removal/
    │   ├── hero.jpg            # Tree removal page hero (800x400px)
    │   └── process.jpg         # Tree removal process (600x400px)
    ├── tree-trimming/
    │   ├── hero.jpg            # Tree trimming page hero (800x400px)
    │   └── techniques.jpg      # Trimming techniques (600x400px)
    └── stump-grinding/
        ├── hero.jpg            # Stump grinding page hero (800x400px)
        ├── equipment.jpg       # Equipment image (600x400px)
        └── before-after.jpg    # Before/after comparison (600x300px)
```

## Image Requirements

### File Formats
- **Preferred**: JPG for photos, PNG for graphics with transparency
- **WebP**: Use if you want better compression (modern browsers)

### Image Sizes
- **Hero Images**: 800x400px (2:1 aspect ratio)
- **Service Cards**: 300x200px (3:2 aspect ratio)
- **Page Images**: 600x400px (3:2 aspect ratio)
- **Before/After**: 600x300px (2:1 aspect ratio)

### Optimization
- **File Size**: Keep under 500KB per image
- **Quality**: 80-85% JPEG quality for good balance
- **Tools**: Use TinyPNG, ImageOptim, or similar for compression

## Adding New Images

1. **Place images** in the appropriate directory
2. **Use descriptive filenames** (e.g., `tree-removal-safety.jpg`)
3. **Update imageConfig.js** if changing paths
4. **Test** that images load correctly

## Stock Photo Suggestions

If you need stock photos, search for:
- "tree removal service"
- "arborist tree trimming"
- "stump grinding equipment"
- "professional tree care"
- "tree service truck"
- "chainsaw tree cutting"

## Image Attribution

Remember to:
- Use royalty-free images or purchase proper licenses
- Credit photographers if required
- Keep attribution info in this file if needed