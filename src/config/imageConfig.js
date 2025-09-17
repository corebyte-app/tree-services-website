// Centralized image configuration
// Images are served from the public/images directory
// Update paths when you add actual images to public/images/

export const imageConfig = {
  // Homepage images
  hero: {
    main: "/images/hero/main-hero.jpg",
    alt: "Professional tree service team working on tree removal",
    fallback: "https://via.placeholder.com/600x400?text=Tree+Service+Hero",
  },

  // Service card images (used on homepage and services page)
  services: {
    treeRemoval: {
      url: "/images/services/tree-removal.jpg",
      alt: "Tree removal service with professional equipment",
      fallback: "https://via.placeholder.com/300x200?text=Tree+Removal",
    },
    treeTrimming: {
      url: "/images/services/tree-trimming.jpg",
      alt: "Tree trimming and pruning service",
      fallback: "https://via.placeholder.com/300x200?text=Tree+Trimming",
    },
    stumpGrinding: {
      url: "/images/services/stump-grinding.jpg",
      alt: "Stump grinding service with specialized equipment",
      fallback: "https://via.placeholder.com/300x200?text=Stump+Grinding",
    },
  },

  // Tree Removal page images
  treeRemoval: {
    hero: {
      url: "/images/pages/tree-removal/hero.jpg",
      alt: "Professional tree removal in residential area",
      fallback: "https://via.placeholder.com/800x400?text=Tree+Removal+Service",
    },
    process: {
      url: "/images/pages/tree-removal/process.jpg",
      alt: "Step-by-step tree removal process",
      fallback: "https://via.placeholder.com/600x400?text=Tree+Removal+Process",
    },
  },

  // Tree Trimming page images
  treeTrimming: {
    hero: {
      url: "/images/pages/tree-trimming/hero.jpg",
      alt: "Professional tree trimming and pruning",
      fallback:
        "https://via.placeholder.com/800x400?text=Tree+Trimming+Service",
    },
    techniques: {
      url: "/images/pages/tree-trimming/techniques.jpg",
      alt: "Professional tree trimming techniques",
      fallback: "https://via.placeholder.com/600x400?text=Trimming+Techniques",
    },
  },

  // Stump Grinding page images
  stumpGrinding: {
    hero: {
      url: "/images/pages/stump-grinding/hero.jpg",
      alt: "Professional stump grinding service",
      fallback:
        "https://via.placeholder.com/800x400?text=Stump+Grinding+Service",
    },
    equipment: {
      url: "/images/pages/stump-grinding/equipment.jpg",
      alt: "Professional stump grinding equipment",
      fallback:
        "https://via.placeholder.com/600x400?text=Stump+Grinding+Equipment",
    },
    beforeAfter: {
      url: "/images/pages/stump-grinding/before-after.jpg",
      alt: "Before and after stump removal comparison",
      fallback:
        "https://via.placeholder.com/600x300?text=Before+After+Stump+Removal",
    },
  },
};

// Helper function to get image with fallback
export const getImage = (path, fallback = null) => {
  const keys = path.split(".");
  let current = imageConfig;

  for (const key of keys) {
    if (current && current[key]) {
      current = current[key];
    } else {
      return (
        fallback || {
          url: "https://via.placeholder.com/300x200?text=Image+Not+Found",
          alt: "Image not available",
        }
      );
    }
  }

  return current;
};
