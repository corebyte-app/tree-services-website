// Centralized business information configuration
// Update these values with your actual business details

export const businessConfig = {
  // Company Information
  company: {
    name: "Skyline Tree Services",
    tagline:
      "Small enough to care about each job, skilled enough to meet every challenge",
    description:
      "Licensed and insured tree care professionals serving your area",
  },

  // Contact Information
  contact: {
    phone: "0212782898",
    email: "93676779@qq.com",
    website: "www.treecarepro.com",
  },

  // Business Address
  address: {
    street: "123 Main Street",
    city: "Auckland",
    state: "New Zealand",
    zipCode: "12345",
    // Full formatted address
    get full() {
      return `${this.street}, ${this.city}, ${this.state} ${this.zipCode}`;
    },
  },

  // Service Areas - Auckland Specific
  serviceAreas: [
    "North Shore",
    "West Auckland",
    "South Auckland",
    "East Auckland",
    "Central Auckland",
    "Waitakere",
    "Manukau",
    "Papakura",
    "Franklin",
    "Rodney"
  ],

  // Property Types Served
  propertyTypes: [
    "Residential Properties",
    "Commercial Properties",
    "Industrial Sites",
    "Schools & Institutions",
    "Parks & Council Land",
    "Retirement Villages"
  ],

  // Business Hours
  hours: {
    weekdays: "Monday - Friday: 7:00 AM - 6:00 PM",
    saturday: "Saturday: 8:00 AM - 4:00 PM",
    sunday: "Sunday: Closed",
  },

  // Credentials & Certifications
  credentials: {
    licensed: true,
    insured: true,
    yearsExperience: "15+",
    certifications: [
      "Licensed Tree Care Professional",
      "Fully Insured & Bonded",
      "ISA Certified Arborist",
      "Safety Certified",
    ],
  },

  // Social Media (optional)
  social: {
    facebook: "", // Add URL when available
    instagram: "", // Add URL when available
    google: "", // Google My Business URL
    yelp: "", // Yelp business page URL
  },

  // Business Features
  features: {
    freeEstimates: true,
    fullyInsured: true,
    experiencedTeam: true,
    cleanupIncluded: true,
    satisfactionGuaranteed: true,
  },

  // Legal Information
  legal: {
    licenseNumber: "TC-2024-001", // Replace with actual license
    insuranceProvider: "ABC Insurance Company", // Replace with actual provider
    bondNumber: "BOND-123456", // Replace with actual bond number
  },
};

// Helper functions to get formatted information
export const getFormattedPhone = () => {
  return businessConfig.contact.phone;
};

export const getFormattedAddress = () => {
  return businessConfig.address.full;
};

export const getContactEmail = () => {
  return businessConfig.contact.email;
};

export const getCompanyName = () => {
  return businessConfig.company.name;
};

export const getTagline = () => {
  return businessConfig.company.tagline;
};
