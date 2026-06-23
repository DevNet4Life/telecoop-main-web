export interface Region {
  code: string;
  name: string;
}

export interface Province {
  code: string;
  name: string;
  region: string;
}

export interface Municipality {
  name: string;
  region: string;
  province: string;
  zipCode: string;
  barangays: string[];
  type: 'city' | 'municipality';
}

export const REGIONS: Region[] = [
  { code: "NCR", name: "National Capital Region (NCR)" },
  { code: "CAR", name: "Cordillera Administrative Region (CAR)" },
  { code: "I", name: "Region I - Ilocos Region" },
  { code: "II", name: "Region II - Cagayan Valley" },
  { code: "III", name: "Region III - Central Luzon" },
  { code: "IV-A", name: "Region IV-A - CALABARZON" },
  { code: "IV-B", name: "Region IV-B - MIMAROPA" },
  { code: "V", name: "Region V - Bicol Region" },
  { code: "VI", name: "Region VI - Western Visayas" },
  { code: "VII", name: "Region VII - Central Visayas" },
  { code: "VIII", name: "Region VIII - Eastern Visayas" },
  { code: "IX", name: "Region IX - Zamboanga Peninsula" },
  { code: "X", name: "Region X - Northern Mindanao" },
  { code: "XI", name: "Region XI - Davao Region" },
  { code: "XII", name: "Region XII - SOCCSKSARGEN" },
  { code: "XIII", name: "Region XIII - Caraga" },
  { code: "BARMM", name: "Bangsamoro Autonomous Region in Muslim Mindanao" }
];

export const PROVINCES: Province[] = [
  // NCR - No provinces, cities/municipalities are directly under NCR
  { code: "NCR-METRO", name: "Metro Manila", region: "NCR" },

  // CAR - Cordillera Administrative Region
  { code: "ABR", name: "Abra", region: "CAR" },
  { code: "APA", name: "Apayao", region: "CAR" },
  { code: "BEN", name: "Benguet", region: "CAR" },
  { code: "IFU", name: "Ifugao", region: "CAR" },
  { code: "KAL", name: "Kalinga", region: "CAR" },
  { code: "MOU", name: "Mountain Province", region: "CAR" },

  // Region I - Ilocos Region
  { code: "ILN", name: "Ilocos Norte", region: "I" },
  { code: "ILS", name: "Ilocos Sur", region: "I" },
  { code: "LUN", name: "La Union", region: "I" },
  { code: "PAN", name: "Pangasinan", region: "I" },

  // Region II - Cagayan Valley
  { code: "BAT", name: "Batanes", region: "II" },
  { code: "CAG", name: "Cagayan", region: "II" },
  { code: "ISA", name: "Isabela", region: "II" },
  { code: "NUV", name: "Nueva Vizcaya", region: "II" },
  { code: "QUI", name: "Quirino", region: "II" },

  // Region III - Central Luzon
  { code: "AUR", name: "Aurora", region: "III" },
  { code: "BAT", name: "Bataan", region: "III" },
  { code: "BUL", name: "Bulacan", region: "III" },
  { code: "NUE", name: "Nueva Ecija", region: "III" },
  { code: "PAM", name: "Pampanga", region: "III" },
  { code: "TAR", name: "Tarlac", region: "III" },
  { code: "ZAM", name: "Zambales", region: "III" },

  // Region IV-A - CALABARZON
  { code: "BAT", name: "Batangas", region: "IV-A" },
  { code: "CAV", name: "Cavite", region: "IV-A" },
  { code: "LAG", name: "Laguna", region: "IV-A" },
  { code: "QUE", name: "Quezon", region: "IV-A" },
  { code: "RIZ", name: "Rizal", region: "IV-A" },

  // Region IV-B - MIMAROPA
  { code: "MAR", name: "Marinduque", region: "IV-B" },
  { code: "OCC", name: "Occidental Mindoro", region: "IV-B" },
  { code: "ORI", name: "Oriental Mindoro", region: "IV-B" },
  { code: "PAL", name: "Palawan", region: "IV-B" },
  { code: "ROM", name: "Romblon", region: "IV-B" },

  // Region V - Bicol Region
  { code: "ALB", name: "Albay", region: "V" },
  { code: "CAN", name: "Camarines Norte", region: "V" },
  { code: "CAS", name: "Camarines Sur", region: "V" },
  { code: "CAT", name: "Catanduanes", region: "V" },
  { code: "MAS", name: "Masbate", region: "V" },
  { code: "SOR", name: "Sorsogon", region: "V" },

  // Region VI - Western Visayas
  { code: "AKL", name: "Aklan", region: "VI" },
  { code: "ANT", name: "Antique", region: "VI" },
  { code: "CAP", name: "Capiz", region: "VI" },
  { code: "GUI", name: "Guimaras", region: "VI" },
  { code: "ILO", name: "Iloilo", region: "VI" },
  { code: "NEG", name: "Negros Occidental", region: "VI" },

  // Region VII - Central Visayas
  { code: "BOH", name: "Bohol", region: "VII" },
  { code: "CEB", name: "Cebu", region: "VII" },
  { code: "NER", name: "Negros Oriental", region: "VII" },
  { code: "SIQ", name: "Siquijor", region: "VII" },

  // Region VIII - Eastern Visayas
  { code: "BIL", name: "Biliran", region: "VIII" },
  { code: "EAS", name: "Eastern Samar", region: "VIII" },
  { code: "LEY", name: "Leyte", region: "VIII" },
  { code: "NOR", name: "Northern Samar", region: "VIII" },
  { code: "SAM", name: "Samar", region: "VIII" },
  { code: "SOU", name: "Southern Leyte", region: "VIII" },

  // Region IX - Zamboanga Peninsula
  { code: "ZAN", name: "Zamboanga del Norte", region: "IX" },
  { code: "ZAS", name: "Zamboanga del Sur", region: "IX" },
  { code: "ZSI", name: "Zamboanga Sibugay", region: "IX" },

  // Region X - Northern Mindanao
  { code: "BUK", name: "Bukidnon", region: "X" },
  { code: "CAM", name: "Camiguin", region: "X" },
  { code: "LAN", name: "Lanao del Norte", region: "X" },
  { code: "MIS", name: "Misamis Occidental", region: "X" },
  { code: "MOR", name: "Misamis Oriental", region: "X" },

  // Region XI - Davao Region
  { code: "COM", name: "Davao de Oro", region: "XI" },
  { code: "DAO", name: "Davao del Norte", region: "XI" },
  { code: "DAS", name: "Davao del Sur", region: "XI" },
  { code: "DAV", name: "Davao Occidental", region: "XI" },
  { code: "DAR", name: "Davao Oriental", region: "XI" },

  // Region XII - SOCCSKSARGEN
  { code: "COT", name: "Cotabato", region: "XII" },
  { code: "SAR", name: "Sarangani", region: "XII" },
  { code: "SOU", name: "South Cotabato", region: "XII" },
  { code: "SUL", name: "Sultan Kudarat", region: "XII" },

  // Region XIII - Caraga
  { code: "AGU", name: "Agusan del Norte", region: "XIII" },
  { code: "AGS", name: "Agusan del Sur", region: "XIII" },
  { code: "DIN", name: "Dinagat Islands", region: "XIII" },
  { code: "SUR", name: "Surigao del Norte", region: "XIII" },
  { code: "SUS", name: "Surigao del Sur", region: "XIII" },

  // BARMM - Bangsamoro Autonomous Region
  { code: "BAS", name: "Basilan", region: "BARMM" },
  { code: "LAS", name: "Lanao del Sur", region: "BARMM" },
  { code: "MAG", name: "Maguindanao del Norte", region: "BARMM" },
  { code: "MAG2", name: "Maguindanao del Sur", region: "BARMM" },
  { code: "SLU", name: "Sulu", region: "BARMM" },
  { code: "TAW", name: "Tawi-Tawi", region: "BARMM" }
];

export const MUNICIPALITIES: Municipality[] = [
  // NCR - National Capital Region (Metro Manila)
  {
    name: "Manila",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1000",
    type: "city",
    barangays: ["Barangay 1", "Barangay 2", "Barangay 3", "Ermita", "Intramuros", "Malate", "Paco", "Pandacan", "Port Area", "Quiapo", "Sampaloc", "San Miguel", "San Nicolas", "Santa Ana", "Santa Cruz", "Santa Mesa", "Tondo"]
  },
  {
    name: "Quezon City",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1100",
    type: "city",
    barangays: ["Alicia", "Bagong Pag-asa", "Bahay Toro", "Balingasa", "Bungad", "Damar", "Damong Maliit", "Del Monte", "Duyan-Duyan", "Escopa", "Gulod", "Holy Spirit", "Kamuning", "Laging Handa", "Maharlika", "Malaya", "Mariana", "Masambong", "Milagrosa", "Novaliches Proper"]
  },
  {
    name: "Makati",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1200",
    type: "city",
    barangays: ["Bel-Air", "Cembo", "Comembo", "Dasmariñas", "Forbes Park", "Guadalupe Nuevo", "Guadalupe Viejo", "Kasilawan", "La Paz", "Magallanes", "Olympia", "Palanan", "Pembo", "Pinagkaisahan", "Pio del Pilar", "Poblacion", "Rizal", "San Antonio", "San Isidro", "San Lorenzo"]
  },
  {
    name: "Pasig",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1600",
    type: "city",
    barangays: ["Bagong Ilog", "Bagong Katipunan", "Bambang", "Buting", "Caniogan", "Dela Paz", "Kalawaan", "Kapasigan", "Malinao", "Manggahan", "Maybunga", "Oranbo", "Palatiw", "Pinagbuhatan", "Rosario", "Sagad", "San Antonio", "San Joaquin", "San Jose", "San Miguel"]
  },
  {
    name: "Taguig",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1630",
    type: "city",
    barangays: ["Bagumbayan", "Bambang", "Calzada", "Central Bicutan", "Central Signal Village", "Fort Bonifacio", "Hagonoy", "Ibayo-Tipas", "Katuparan", "Ligid-Tipas", "Lower Bicutan", "Maharlika Village", "Napindan", "New Lower Bicutan", "North Daang Hari", "North Signal Village", "Palingon", "Pinagsama", "San Miguel", "Santa Ana"]
  },
  {
    name: "Pasay",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1300",
    type: "city",
    barangays: ["Barangay 1", "Barangay 2", "Barangay 3", "Barangay 4", "Barangay 5", "Barangay 6", "Barangay 7", "Barangay 8", "Barangay 9", "Barangay 10", "Barangay 11", "Barangay 12", "Barangay 13", "Barangay 14", "Barangay 15", "Barangay 16", "Barangay 17", "Barangay 18", "Barangay 19", "Barangay 20"]
  },
  {
    name: "Caloocan",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1400",
    type: "city",
    barangays: ["Bagong Silang", "Camarin", "Grace Park East", "Grace Park West", "Kaybiga", "Llano", "Longos", "Maysilo", "Maypajo", "Monumento", "Morning Breeze", "Novaliches North", "Novaliches South", "Sangandaan", "Talipapa", "Tandang Sora", "Tatalon", "Ugong Norte", "Ugong Sur", "Unang Sigaw"]
  },
  {
    name: "Las Piñas",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1740",
    type: "city",
    barangays: ["Almanza Dos", "Almanza Uno", "B.F. International Village", "Daniel Fajardo", "Elias Aldana", "Ilaya", "Manuyo Dos", "Manuyo Uno", "Pamplona Dos", "Pamplona Tres", "Pamplona Uno", "Pilar", "Pulang Lupa Dos", "Pulang Lupa Uno", "Talon Dos", "Talon Kuatro", "Talon Singko", "Talon Tres", "Talon Uno", "Zapote"]
  },
  {
    name: "Muntinlupa",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1770",
    type: "city",
    barangays: ["Alabang", "Ayala Alabang", "Buli", "Cupang", "Poblacion", "Putatan", "Sucat", "Tunasan", "Bayanan"]
  },
  {
    name: "Parañaque",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1700",
    type: "city",
    barangays: ["B.F. Homes", "Baclaran", "Don Bosco", "Don Galo", "La Huerta", "Marcelo Green Village", "Merville", "Moonwalk", "San Antonio", "San Dionisio", "San Isidro", "San Martin de Porres", "Santo Niño", "Sun Valley", "Tambo", "Vitalez"]
  },
  {
    name: "Valenzuela",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1440",
    type: "city",
    barangays: ["Arkong Bato", "Bagbaguin", "Bignay", "Bisig", "Canumay East", "Canumay West", "Coloong", "Dalandanan", "Gen. T. de Leon", "Kapasigan", "Karuhatan", "Lawang Bato", "Lingunan", "Mabolo", "Malanday", "Malinta", "Mapulang Lupa", "Marulas", "Maysan", "Palasan"]
  },
  {
    name: "Marikina",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1800",
    type: "city",
    barangays: ["Barangka", "Calumpang", "Concepcion Dos", "Concepcion Uno", "Fortune", "Industrial Valley Complex", "Jesus de la Peña", "Malanday", "Marikina Heights", "Nangka", "Parang", "San Roque", "Santa Elena", "Santo Niño", "Tanong", "Tumana"]
  },
  {
    name: "Malabon",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1470",
    type: "city",
    barangays: ["Acacia", "Baritan", "Bayan-bayanan", "Catmon", "Concepcion", "Dampalit", "Flores", "Hulong Duhat", "Ibaba", "Longos", "Maysilo", "Muzon", "Niugan", "Panghulo", "Potrero", "San Agustin", "Santolan", "Tanong", "Tinajeros", "Tonsuya"]
  },
  {
    name: "Navotas",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1485",
    type: "city",
    barangays: ["Bagumbayan North", "Bagumbayan South", "Bangkulasi", "Daanghari", "Navotas East", "Navotas West", "North Bay Boulevard North", "North Bay Boulevard South", "San Jose", "San Rafael Village", "San Roque", "Sipac-Almacen", "Tangos North", "Tangos South"]
  },
  {
    name: "San Juan",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1500",
    type: "city",
    barangays: ["Addition Hills", "Balong-Bato", "Batis", "Corazon de Jesus", "Ermitaño", "Greenhills", "Halo-halo", "Isabelita", "Little Baguio", "Maytunas", "Onse", "Pasadeña", "Pedro Cruz", "Progreso", "Rivera", "Salapan", "San Perfecto", "Santa Lucia", "Tibagan", "West Crame"]
  },
  {
    name: "Mandaluyong",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1550",
    type: "city",
    barangays: ["Addition Hills", "Bagong Silang", "Barangka Drive", "Barangka Ibaba", "Barangka Ilaya", "Barangka Itaas", "Buayang Bato", "Burol", "Daang Bakal", "Hagdang Bato Itaas", "Hagdang Bato Libis", "Harapin ang Bukas", "Highway Hills", "Hulo", "Mabini-J. Rizal", "Malamig", "Mauway", "Namayan", "New Zañiga", "Old Zañiga"]
  },
  {
    name: "Pateros",
    region: "NCR",
    province: "NCR-METRO",
    zipCode: "1620",
    type: "municipality",
    barangays: ["Aguho", "Magtanggol", "Martires del '96", "Poblacion", "San Pedro", "San Roque", "Santa Ana", "Santo Rosario-Kanluran", "Santo Rosario-Silangan", "Tabacalera"]
  },

  // Region III - Central Luzon - Bulacan Province
  {
    name: "Malolos",
    region: "III",
    province: "BUL",
    zipCode: "3000",
    type: "city",
    barangays: ["Anilao", "Atlag", "Babatnin", "Bagna", "Bagong Nayon", "Balanga", "Balayong", "Bangkal", "Barihan", "Bulihan", "Bungahan", "Caingin", "Calero", "Caliligawan", "Canalate", "Caniogan", "Catmon", "Cofradia", "Dakila", "Guinhawa"]
  },
  {
    name: "Meycauayan",
    region: "III",
    province: "BUL",
    zipCode: "3020",
    type: "city",
    barangays: ["Bahay Pare", "Bancal", "Banga", "Calvario", "Camalig", "Iba", "Langka", "Lias", "Libtong", "Malhacan", "Pantoc", "Perez", "Poblacion", "St. Francis", "Tugatog", "Ubihan", "Zamora"]
  },
  {
    name: "San Jose del Monte",
    region: "III",
    province: "BUL",
    zipCode: "3023",
    type: "city",
    barangays: ["Assumption", "Bagong Buhay I", "Bagong Buhay II", "Bagong Buhay III", "Ciudad Real", "Dulong Bayan", "Fatima I", "Fatima II", "Fatima III", "Fatima IV", "Fatima V", "Gaya-gaya", "Kaybanban", "Kaypian", "Lawang Pare", "Maharlika", "Minuyan", "Minuyan Proper", "Muzon", "Paradise III"]
  },
  {
    name: "Marilao",
    region: "III",
    province: "BUL",
    zipCode: "3019",
    type: "municipality",
    barangays: ["Abangan Norte", "Abangan Sur", "Lambakin", "Lias", "Loma de Gato", "Patubig", "Poblacion", "Prenza I", "Prenza II", "Santa Rosa I", "Santa Rosa II", "Saog", "Tabing Ilog"]
  },
  {
    name: "Bocaue",
    region: "III",
    province: "BUL",
    zipCode: "3018",
    type: "municipality",
    barangays: ["Antipona", "Batia", "Biñang 1st", "Biñang 2nd", "Bolacan", "Bundukan", "Duhat", "Igulot", "Lolomboy", "Poblacion", "Sulucan", "Tambobong", "Turo", "Wakas"]
  },
  {
    name: "Balagtas",
    region: "III",
    province: "BUL",
    zipCode: "3016",
    type: "municipality",
    barangays: ["Balagtas", "Borol 1st", "Borol 2nd", "Dalig", "Longos", "Panginay", "Poblacion", "Pulong Gubat", "San Juan", "Santol", "Taal", "Wawa"]
  },
  {
    name: "Guiguinto",
    region: "III",
    province: "BUL",
    zipCode: "3015",
    type: "municipality",
    barangays: ["Daungan", "Ilang-ilang", "Malis", "Pangkalan", "Poblacion", "Pritil", "Pulong Gubat", "Santa Rita", "Tabang", "Tuktukan"]
  },
  {
    name: "Plaridel",
    region: "III",
    province: "BUL",
    zipCode: "3004",
    type: "municipality",
    barangays: ["Banga 1st", "Banga 2nd", "Bulihan", "Culianin", "Cutcut 1st", "Cutcut 2nd", "Sipac", "Tabang", "Poblacion", "Rueda"]
  },
  {
    name: "Pulilan",
    region: "III",
    province: "BUL",
    zipCode: "3005",
    type: "municipality",
    barangays: ["Balatong", "Dampol 1st", "Dampol 2nd", "Dulong Malabon", "Inaon", "Longos", "Poblacion", "Pulo", "Santa Peregrina", "Santo Cristo", "Tinejal"]
  },
  {
    name: "Calumpit",
    region: "III",
    province: "BUL",
    zipCode: "3003",
    type: "municipality",
    barangays: ["Balungao", "Calumpang", "Caniogan", "Iba O Este", "Longos", "Meysulao", "Palapat", "Poblacion", "Pungo", "San Jose", "Santa Lucia", "Sucad"]
  },
  {
    name: "Hagonoy",
    region: "III",
    province: "BUL",
    zipCode: "3002",
    type: "municipality",
    barangays: ["Carillo", "Iba", "Mercado", "Palapat", "Poblacion", "Pugad", "Sagrada", "San Agustin", "San Isidro", "San Miguel", "San Nicolas", "San Pablo", "San Pascual", "Santa Monica", "Santo Niño", "Santo Rosario", "Tampok", "Tibag", "Tigbe", "Ubihan"]
  },
  {
    name: "Paombong",
    region: "III",
    province: "BUL",
    zipCode: "3001",
    type: "municipality",
    barangays: ["Binakod", "Masukol", "Pinalagdan", "Poblacion", "San Isidro", "San Jose", "San Roque", "San Vicente", "Santa Cruz", "Sulivan"]
  },

  // Region III - Central Luzon - Pampanga Province
  {
    name: "San Fernando",
    region: "III",
    province: "PAM",
    zipCode: "2000",
    type: "city",
    barangays: ["Alasas", "Baliti", "Balete", "Calulut", "Del Carmen", "Del Pilar", "Del Rosario", "Dolores", "Juliana", "Lara", "Lourdes", "Magliman", "Maimpis", "Malino", "Malpitic", "Panipuan", "Poblacion", "Pulung Cacutud", "Quebiawan", "San Agustin"]
  },
  {
    name: "Angeles",
    region: "III",
    province: "PAM",
    zipCode: "2009",
    type: "city",
    barangays: ["Agapito del Rosario", "Amsic", "Balibago", "Capaya", "Claro M. Recto", "Cuayan", "Cutcut", "Lourdes Northwest", "Malabanas", "Malabanias", "Margot", "Mining", "Ninoy Aquino", "Pampang", "Pulungbulu", "Pulung Maragul", "Salapungan", "Santa Teresita", "Santa Trinidad", "Sapalibutad"]
  },
  {
    name: "Mabalacat",
    region: "III",
    province: "PAM",
    zipCode: "2010",
    type: "city",
    barangays: ["Atlu-Bola", "Cacutud", "Camachiles", "Dapdap", "Dau", "Dolores", "Duquit", "Katarungan", "Mabiga", "Macabacle", "Poblacion", "San Francisco", "San Joaquin", "Santa Ines", "Santa Maria", "Sapang Biabas", "Tabun"]
  },
  {
    name: "Mexico",
    region: "III",
    province: "PAM",
    zipCode: "2021",
    type: "municipality",
    barangays: ["Acli", "Anao", "Bagong Sikat", "Buenavista", "Camuning", "Concepcion", "Lagundi", "Masamat", "Poblacion", "Pulung Santol", "San Jose", "San Roque", "Santa Maria", "Santo Tomas", "Sindalan"]
  },
  {
    name: "Porac",
    region: "III",
    province: "PAM",
    zipCode: "2008",
    type: "municipality",
    barangays: ["Babo Pangulo", "Babo Sacan", "Bacolor", "Camias", "Cangatba", "Dolores", "Hacienda Dolores", "Jalung", "Mancatian", "Mitla", "Poblacion", "Pulung Santol", "Santa Cruz", "Villa Maria"]
  },

  // Region IV-A - CALABARZON - Cavite Province
  {
    name: "Dasmariñas",
    region: "IV-A",
    province: "CAV",
    zipCode: "4114",
    type: "city",
    barangays: ["Bagong Bayan", "Burol I", "Burol II", "Burol III", "Langkaan I", "Langkaan II", "Lupon", "Paliparan I", "Paliparan II", "Paliparan III", "Poblacion I", "Poblacion II", "Poblacion III", "Poblacion IV", "Salawag", "Sampaloc I", "Sampaloc II", "Sampaloc III", "Sampaloc IV", "San Agustin I"]
  },
  {
    name: "Bacoor",
    region: "IV-A",
    province: "CAV",
    zipCode: "4102",
    type: "city",
    barangays: ["Alima", "Annalyn", "Daang Bukid", "Gaba", "Habay I", "Habay II", "Kaingin", "Ligas I", "Ligas II", "Ligas III", "Maliksi I", "Maliksi II", "Maliksi III", "Molino I", "Molino II", "Molino III", "Molino IV", "Molino V", "Molino VI", "Molino VII"]
  },
  {
    name: "Imus",
    region: "IV-A",
    province: "CAV",
    zipCode: "4103",
    type: "city",
    barangays: ["Alapan I-A", "Alapan I-B", "Alapan II-A", "Alapan II-B", "Anabu I-A", "Anabu I-B", "Anabu I-C", "Anabu I-D", "Anabu I-E", "Anabu I-F", "Anabu I-G", "Anabu II-A", "Anabu II-B", "Anabu II-C", "Anabu II-D", "Anabu II-E", "Anabu II-F", "Bayan Luma I", "Bayan Luma II", "Bayan Luma III"]
  },
  {
    name: "General Trias",
    region: "IV-A",
    province: "CAV",
    zipCode: "4107",
    type: "city",
    barangays: ["Alingaro", "Arnaldo", "Bagumbayan", "Biclatan", "Buenavista I", "Buenavista II", "Buenavista III", "Corregidor", "Dulong Bayan", "Gov. Ferrer", "Javalera", "Manggahan", "Navarro", "Ninety Six", "Pasong Camachile I", "Pasong Camachile II", "Pasong Kawayan I", "Pasong Kawayan II", "Pinagtipunan", "Poblacion"]
  },
  {
    name: "Kawit",
    region: "IV-A",
    province: "CAV",
    zipCode: "4104",
    type: "municipality",
    barangays: ["Batong Dalig", "Binakayan-Kanluran", "Binakayan-Silangan", "Kaingen", "Manggahan", "Panamitan", "Poblacion", "Putik", "San Sebastian", "Santa Isabel", "Tabon I", "Tabon II", "Tabon III", "Toclong", "Wakas"]
  },
  {
    name: "Rosario",
    region: "IV-A",
    province: "CAV",
    zipCode: "4106",
    type: "municipality",
    barangays: ["Kanluran", "Ligtong I", "Ligtong II", "Ligtong III", "Ligtong IV", "Muzon I", "Muzon II", "Poblacion", "Salinas I", "Salinas II", "Salinas III", "Salinas IV", "Sapa I", "Sapa II", "Silangan I", "Silangan II", "Tejeros Convention", "Timalan I", "Timalan II", "Wawa I"]
  },

  // Region IV-A - CALABARZON - Laguna Province
  {
    name: "Calamba",
    region: "IV-A",
    province: "LAG",
    zipCode: "4027",
    type: "city",
    barangays: ["Bagong Kalsada", "Banadero", "Banlic", "Bañadero", "Bucal", "Bunggo", "Canlubang", "Halang", "Hornalan", "Kay-Anlog", "La Mesa", "Laguerta", "Lawa", "Lecheria", "Lingga", "Looc", "Mabato", "Makiling", "Mapagong", "Masili"]
  },
  {
    name: "Santa Rosa",
    region: "IV-A",
    province: "LAG",
    zipCode: "4026",
    type: "city",
    barangays: ["Aplaya", "Balibago", "Caingin", "Dila", "Dita", "Don Jose", "Ibaba", "Kanluran", "Labas", "Macabling", "Malitlit", "Malusak", "Market Area", "Pooc", "Pulong Santa Cruz", "Santo Domingo", "Sinalhan", "Tagapo", "Silangan", "Macalamcam-A"]
  },
  {
    name: "Biñan",
    region: "IV-A",
    province: "LAG",
    zipCode: "4024",
    type: "city",
    barangays: ["Bungahan", "Canlalay", "Casile", "De La Paz", "Ganado", "Langkiwa", "Loma", "Malaban", "Malamig", "Mamplasan", "Platero", "Poblacion", "San Antonio", "San Francisco", "San Jose", "San Vicente", "Santa Rosa", "Santo Domingo", "Santo Niño", "Soro-soro"]
  },
  {
    name: "San Pedro",
    region: "IV-A",
    province: "LAG",
    zipCode: "4023",
    type: "city",
    barangays: ["Alaminos", "Bagong Silang", "Calendola", "Chrysanthemum", "Cuyab", "Estrella", "G.S.I.S.", "Landayan", "Laram", "Magsaysay", "Maharlika", "Nueva", "Pacita I", "Pacita II", "Poblacion", "Riverside", "Rosario", "Sampaguita Village", "San Antonio", "San Roque"]
  },
  {
    name: "Cabuyao",
    region: "IV-A",
    province: "LAG",
    zipCode: "4025",
    type: "city",
    barangays: ["Baclaran", "Banay-banay", "Banlic", "Bigaa", "Butong", "Casile", "Diezmo", "Gulod", "Mamatid", "Marinig", "Niugan", "Pittland", "Poblacion Dos", "Poblacion Tres", "Poblacion Uno", "Pulo", "Sala", "San Isidro"]
  },

  // Region IV-A - CALABARZON - Rizal Province
  {
    name: "Antipolo",
    region: "IV-A",
    province: "RIZ",
    zipCode: "1870",
    type: "city",
    barangays: ["Bagong Nayon", "Beverly Hills", "Cupang", "Dalig", "dela Paz", "Inarawan", "Mayamot", "San Isidro", "San Jose", "San Roque", "Santa Cruz", "Santo Niño", "Taktak", "San Luis", "Mambugan", "Muntindilaw", "Calawis", "Bagong Silang"]
  },
  {
    name: "Cainta",
    region: "IV-A",
    province: "RIZ",
    zipCode: "1900",
    type: "municipality",
    barangays: ["Dayap", "San Andres", "San Isidro", "San Juan", "Santo Domingo", "Santo Niño", "Felix"]
  },
  {
    name: "Taytay",
    region: "IV-A",
    province: "RIZ",
    zipCode: "1920",
    type: "municipality",
    barangays: ["Bagumbayan", "Bambang", "Dalig", "Dolores", "Kalinawan", "Muzon", "Poblacion", "San Isidro", "San Juan", "Santa Ana"]
  },

  // Region VII - Central Visayas - Cebu Province
  {
    name: "Cebu City",
    region: "VII",
    province: "CEB",
    zipCode: "6000",
    type: "city",
    barangays: ["Apas", "Busay", "Capitol Site", "Cogon Pardo", "Day-as", "Guadalupe", "Kamputhaw", "Lahug", "Mabolo", "Pardo", "Poblacion", "Talamban", "Tisa", "Zapatera", "Kalunasan", "Banawa", "Carreta", "Centro", "Cogon Ramos", "Duljo Fatima"]
  },
  {
    name: "Mandaue",
    region: "VII",
    province: "CEB",
    zipCode: "6014",
    type: "city",
    barangays: ["Alang-alang", "Bakilid", "Banilad", "Basak", "Cabancalan", "Cambaro", "Canduman", "Casili", "Casuntingan", "Centro", "Cubacub", "Guizo", "Ibabao-Estancia", "Jagobiao", "Labogon", "Looc", "Maguikay", "Mantuyong", "Opao", "Pakna-an"]
  },
  {
    name: "Lapu-Lapu",
    region: "VII",
    province: "CEB",
    zipCode: "6015",
    type: "city",
    barangays: ["Agus", "Babag", "Bankal", "Basak", "Buaya", "Canjulao", "Caw-oy", "Gun-ob", "Ibo", "Looc", "Mactan", "Maribago", "Marigondon", "Pajac", "Pangan-an", "Poblacion", "Punta Engaño", "Pusok", "Subabasbas", "Talima"]
  },
  {
    name: "Talisay",
    region: "VII",
    province: "CEB",
    zipCode: "6045",
    type: "city",
    barangays: ["Biasong", "Bulacao", "Cadulawan", "Camp Lapu-Lapu", "Candulawan", "Cansojong", "Dumlog", "Jaclupan", "Lagtang", "Lawaan I", "Lawaan II", "Lawaan III", "Linao", "Maghaway", "Manipis", "Mohon", "Poblacion", "Pooc", "San Isidro", "San Roque"]
  },

  // Region XI - Davao Region - Davao del Sur Province
  {
    name: "Davao City",
    region: "XI",
    province: "DAS",
    zipCode: "8000",
    type: "city",
    barangays: ["Agdao", "Buhangin", "Bunawan", "Calinan", "Marilog", "Paquibato", "Poblacion", "Talomo", "Toril", "Tugbok", "Baguio", "Bankerohan", "Bucana", "Cabantian", "Catalunan Grande", "Catalunan Pequeño", "Centro", "Dumoy", "Eden", "Ilang"]
  },

  // Region I - Ilocos Region - Ilocos Norte
  {
    name: "Laoag",
    region: "I",
    province: "ILN",
    zipCode: "2900",
    type: "city",
    barangays: ["Balacad", "Balatong", "Barit", "Bengcag", "Buttong", "Calayab", "Camangaan", "Cavit", "Darayday", "Dibua", "Gabu Norte", "Gabu Sur", "Lagui-Sail", "Nalbo", "Nangalisan", "Pila", "Poblacion", "San Matias", "Santa Angela", "Vira"]
  },
  {
    name: "Batac",
    region: "I",
    province: "ILN",
    zipCode: "2906",
    type: "city",
    barangays: ["Ablan Sarat", "Acosta", "Baay", "Baligat", "Biningan", "Caunayan", "Dariwdiw", "Magnuang", "Maipalig", "Palpalokada", "Poblacion", "Quiling Norte", "Quiling Sur", "Rayuray", "Sumader", "Tabudtaburan", "Tabidero", "Valdez", "Windoro"]
  },

  // Region I - Ilocos Region - Ilocos Sur
  {
    name: "Vigan",
    region: "I",
    province: "ILS",
    zipCode: "2700",
    type: "city",
    barangays: ["Ayusan Norte", "Ayusan Sur", "Barangay I", "Barangay II", "Barangay III", "Barangay IV", "Barangay V", "Barangay VI", "Barangay VII", "Barangay VIII", "Barangay IX", "Beddeng Daya", "Beddeng Laud", "Bongtolan", "Bulala", "Cabalangegan", "Camangaan", "Capangpangan", "Paoa", "Paratong"]
  },
  {
    name: "Candon",
    region: "I",
    province: "ILS",
    zipCode: "2710",
    type: "city",
    barangays: ["Allangigan", "Amguid", "Bagani Campo", "Bagani Gabor", "Bagani Tocgo", "Bagani Ubbog", "Balingaoan", "Banayoyo", "Bugnay", "Calaoa-an", "Caterman", "Langlangca", "Oaig-Daya", "Oaig-Laud", "Palacpalac", "Pamutic", "Pila", "Poblacion", "Salvador", "San Agustin"]
  },

  // Region II - Cagayan Valley - Cagayan
  {
    name: "Tuguegarao",
    region: "II",
    province: "CAG",
    zipCode: "3500",
    type: "city",
    barangays: ["Atulayan Norte", "Atulayan Sur", "Bagay", "Buntun", "Caggay", "Caritan Centro", "Caritan Norte", "Caritan Sur", "Centro 1", "Centro 2", "Centro 3", "Centro 4", "Centro 5", "Centro 6", "Centro 7", "Centro 8", "Centro 9", "Centro 10", "Centro 11", "Centro 12"]
  },

  // Region II - Cagayan Valley - Isabela
  {
    name: "Ilagan",
    region: "II",
    province: "ISA",
    zipCode: "3300",
    type: "city",
    barangays: ["Alibagu", "Andarayan", "Bagumbayan", "Bliss Village", "Buenavista", "Cabisera", "Camarao", "Camamaoran", "Centro Poblacion", "Daddungan", "Fugu", "Guinatan", "Maconacon", "Malalam", "Rang-ay", "Roxas", "San Antonio", "Santa Catalina", "Santa Victoria", "Villa Imelda"]
  },
  {
    name: "Santiago",
    region: "II",
    province: "ISA",
    zipCode: "3311",
    type: "city",
    barangays: ["Abra", "Alibagu", "Ambalatungan", "Angad", "Balintocatoc", "Bannawag", "Baringin Norte", "Baringin Sur", "Batal", "Buneg", "Cabulay", "Calao East", "Calao West", "Centro East", "Centro West", "Divisoria", "Malvar", "Naggasican", "Plaridel", "Rosario"]
  },

  // Add more municipalities for other provinces as needed...
  // For brevity, I'll add representative samples for each major province

  // Region V - Bicol Region - Albay
  {
    name: "Legazpi",
    region: "V",
    province: "ALB",
    zipCode: "4500",
    type: "city",
    barangays: ["Arimbay", "Bagumbayan", "Banquerohan", "Bigaa", "Bonot", "Bogtong", "Buraguis", "Cabangan", "Cabarian", "Dap-dap", "Dinagaan", "Estanza", "Gogon", "Hacienda", "Homapon", "Ilawod", "Kapantawan", "Lapu-lapu", "Letre", "Mabinit"]
  },

  // Region VI - Western Visayas - Iloilo
  {
    name: "Iloilo City",
    region: "VI",
    province: "ILO",
    zipCode: "5000",
    type: "city",
    barangays: ["Alabanza", "Bakhaw", "Balabago", "Balantang", "Baldoza", "Banuyao", "Batiano", "Bolilao", "Buhang", "Buntatala", "Calajunan", "Calaparan", "Calahunan", "Calubihan", "Casama-an", "Cubay", "Cuartero", "Danao", "Desamparados", "Dungon A"]
  },

  // Region VIII - Eastern Visayas - Leyte
  {
    name: "Tacloban",
    region: "VIII",
    province: "LEY",
    zipCode: "6500",
    type: "city",
    barangays: ["Abucay", "Bagacay", "Baras", "Burauen", "Cabalawan", "Caibaan", "Calvaryhill", "Candahug", "Capangpangan", "Caraycaray", "Diit", "Downtown", "Fatima", "Humirang", "Magsaysay", "Marasbaras", "New Kawayan", "Old Kawayan", "Palacios", "Poblacion"]
  },

  // Region X - Northern Mindanao - Misamis Oriental
  {
    name: "Cagayan de Oro",
    region: "X",
    province: "MOR",
    zipCode: "9000",
    type: "city",
    barangays: ["Agusan", "Baikingon", "Balulang", "Bayabas", "Bayanga", "Bugo", "Bulua", "Camaman-an", "Canitoan", "Carmen", "Consolacion", "Cugman", "Dansolihon", "F.S. Catanico", "Gusa", "Iponan", "Kauswagan", "Lapasan", "Lumbia", "Macabalan"]
  }
];

export interface MembershipPlan {
  id: string;
  name: string;
  speed: string;
  price: number;
  membershipFee: number;
  shareCapital: number;
  features: string[];
  recommended?: boolean;
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic Plan",
    speed: "15 Mbps",
    price: 899,
    membershipFee: 2000,
    shareCapital: 5000,
    features: [
      "15 Mbps download / 5 Mbps upload",
      "Unlimited data usage",
      "Basic technical support",
      "Community Wi-Fi access",
      "Cooperative voting rights"
    ]
  },
  {
    id: "standard",
    name: "Standard Plan",
    speed: "25 Mbps",
    price: 1299,
    membershipFee: 2000,
    shareCapital: 5000,
    features: [
      "25 Mbps download / 10 Mbps upload",
      "Unlimited data usage",
      "Priority technical support",
      "Community Wi-Fi access",
      "Cooperative voting rights",
      "Free installation"
    ],
    recommended: true
  },
  {
    id: "premium",
    name: "Premium Plan",
    speed: "50 Mbps",
    price: 1899,
    membershipFee: 2000,
    shareCapital: 5000,
    features: [
      "50 Mbps download / 25 Mbps upload",
      "Unlimited data usage",
      "24/7 priority technical support",
      "Community Wi-Fi access",
      "Enhanced cooperative voting rights",
      "Free installation & router",
      "Monthly network optimization"
    ]
  },
  {
    id: "business",
    name: "Business Plan",
    speed: "100 Mbps",
    price: 2999,
    membershipFee: 5000,
    shareCapital: 15000,
    features: [
      "100 Mbps download / 50 Mbps upload",
      "Unlimited data usage",
      "Dedicated business support",
      "Static IP address",
      "Business cooperative membership",
      "Free installation & enterprise router",
      "Monthly network reports",
      "Priority network access"
    ]
  }
];

export interface ContributionOption {
  id: string;
  title: string;
  description: string;
  timeCommitment: string;
  skillsRequired?: string[];
}

export const CONTRIBUTION_OPTIONS: ContributionOption[] = [
  {
    id: "technical-volunteer",
    title: "Technical Volunteer",
    description: "Help with network maintenance, installations, and technical support",
    timeCommitment: "4-8 hours per month",
    skillsRequired: ["Basic networking", "Computer troubleshooting", "Equipment handling"]
  },
  {
    id: "community-educator",
    title: "Community Educator",
    description: "Teach digital literacy and help neighbors with technology",
    timeCommitment: "2-4 hours per month",
    skillsRequired: ["Teaching/training", "Patience", "Communication skills"]
  },
  {
    id: "cooperative-governance",
    title: "Cooperative Governance",
    description: "Participate in board meetings, planning, and decision-making",
    timeCommitment: "2-3 hours per month",
    skillsRequired: ["Leadership", "Communication", "Cooperative principles"]
  },
  {
    id: "community-outreach",
    title: "Community Outreach",
    description: "Help recruit new members and promote cooperative benefits",
    timeCommitment: "3-5 hours per month",
    skillsRequired: ["Communication", "Social networking", "Presentation skills"]
  },
  {
    id: "financial-planning",
    title: "Financial Planning & Management",
    description: "Assist with budgeting, financial planning, and accounting",
    timeCommitment: "4-6 hours per month",
    skillsRequired: ["Accounting", "Financial analysis", "Budgeting"]
  },
  {
    id: "equipment-maintenance",
    title: "Equipment & Infrastructure",
    description: "Help maintain physical infrastructure and equipment",
    timeCommitment: "6-10 hours per month",
    skillsRequired: ["Physical maintenance", "Basic electrical", "Safety protocols"]
  }
];