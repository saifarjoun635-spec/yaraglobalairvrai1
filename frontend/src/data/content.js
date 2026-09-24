export const COMPANY = {
    name: 'Yara Global Air',
    tagline: 'Climatisation · Chauffage · Réfrigération',
    phoneDisplay: '438-680-4054',
    phoneHref: 'tel:+14386804054',
    smsHref: 'sms:+14386804054',
    email: 'info@yaraglobalair.ca',
    emailHref: 'mailto:info@yaraglobalair.ca',
    emailPro: 'info@yaraglobalair.ca',
    emailProHref: 'mailto:info@yaraglobalair.ca',
    facebook: 'https://www.facebook.com/profile.php?id=100063757231349&locale=gl_ES#',
    address: 'Drummondville · Victoriaville · Centre-du-Québec',
    region: 'Drummondville · Victoriaville · Centre-du-Québec et la région de Québec',
};

export const SERVICES = [
    {
        id: 'nettoyage',
        num: '01',
        title: 'Nettoyage approfondi antibactérien',
        tagline: 'Un air plus sain, dès le premier nettoyage',
        description:
            "Un traitement minutieux de vos unités pour éliminer les accumulations de poussière, les moisissures et les bactéries. Ce service améliore instantanément la qualité de l'air intérieur, élimine les mauvaises odeurs et redonne à votre système son efficacité optimale.",
        points: [
            'Élimination de la poussière, des moisissures et des bactéries',
            "Qualité de l'air intérieur améliorée instantanément",
            'Fini les mauvaises odeurs',
            'Un système qui retrouve son efficacité optimale',
        ],
        icon: 'sparkles',
        image: '/assets/nettoyage.jpg',
    },
    {
        id: 'inspection',
        num: '02',
        title: 'Inspection technique',
        tagline: "L'état réel de vos équipements, sans surprise",
        description:
            "Une évaluation rigoureuse de l'état général de vos équipements CVC-R. Nous vérifions les composants clés, analysons le bon fonctionnement de l'appareil et repérons les signes d'usure avant qu'ils ne se transforment en problèmes majeurs.",
        points: [
            "Évaluation rigoureuse de l'état général de vos équipements",
            'Vérification des composants clés',
            "Analyse du bon fonctionnement de l'appareil",
            "Détection des signes d'usure avant qu'ils ne deviennent majeurs",
        ],
        icon: 'search',
        image: '/assets/inspection.webp',
    },
    {
        id: 'entretien',
        num: '03',
        title: 'Entretien préventif',
        tagline: 'Des équipements qui durent plus longtemps',
        description:
            'Une maintenance régulière et planifiée pour prolonger la durée de vie de vos thermopompes et systèmes de ventilation. Un entretien préventif rigoureux permet de maintenir une performance énergétique constante et de prévenir les pannes inattendues.',
        points: [
            'Maintenance régulière et planifiée',
            'Durée de vie prolongée de vos thermopompes et systèmes de ventilation',
            'Performance énergétique constante',
            'Prévention des pannes inattendues',
        ],
        icon: 'shield',
        image: '/assets/entretien-preventif.jpg',
    },
    {
        id: 'optimisation',
        num: '04',
        title: 'Optimisation',
        tagline: 'Plus de confort, moins de consommation',
        description:
            "L'ajustement et le réglage précis de vos installations pour maximiser leur rendement énergétique. Nous vous aidons à obtenir un confort thermique supérieur tout en réduisant votre consommation d'énergie.",
        points: [
            'Ajustement et réglage précis de vos installations',
            'Rendement énergétique maximisé',
            'Confort thermique supérieur',
            "Consommation d'énergie réduite",
        ],
        icon: 'gauge',
        image: '/assets/fluides.webp',
    },
];

export const ARTICLES = [
    {
        slug: 'preparer-thermopompe-hiver',
        title: "Comment préparer votre thermopompe pour l'hiver québécois",
        tag: 'Entretien',
        date: '12 juin 2026',
        readTime: '5 min',
        excerpt:
            "Glace sur l'unité extérieure, cycles de dégivrage, dégagement à prévoir : voici comment arriver en novembre l'esprit tranquille.",
        image: '/assets/entretien.webp',
        body: [
            "Au Québec, une thermopompe travaille fort. Entre les nuits à -25 °C et les redoux de mars, votre système enchaîne les cycles de chauffage et de dégivrage. Un peu de préparation à l'automne fait toute la différence entre un hiver confortable et une panne au pire moment.",
            "Commencez par l'essentiel : dégagez l'unité extérieure. Laissez au moins 50 cm d'espace tout autour, coupez la végétation qui s'approche et assurez-vous que l'unité est surélevée pour éviter qu'elle ne s'ensable dans la neige et la glace.",
            "Côté intérieur, nettoyez ou remplacez les filtres. Des filtres obstrués forcent le compresseur, réduisent le rendement et peuvent faire grimper votre facture d'électricité de 15 à 25 %. C'est le geste le plus simple et le plus rentable de la saison.",
            "Surveillez ensuite les signes faibles : un bruit inhabituel, un cycle de dégivrage trop fréquent, de la glace qui s'accumule sur les serpentins ou une air soufflée tiède plutôt que chaude. Ces symptômes indiquent souvent qu'un réglage est nécessaire ou qu'un capteur est fatigué.",
            "Enfin, rien ne remplace un entretien professionnel annuel. Une inspection complète — pressions, codes d'erreur, état des serpentins — permet de corriger les petits problèmes avant qu'ils ne deviennent des pannes coûteuses en pleine vague de froid.",
        ],
    },
    {
        slug: 'signes-climatiseur-entretien',
        title: "5 signes que votre thermopompe a besoin d'un entretien",
        tag: 'Conseils',
        date: '28 mai 2026',
        readTime: '4 min',
        excerpt:
            'Bruit, odeurs, facture qui grimpe : votre thermopompe vous parle. Apprenez à reconnaître les signaux avant la panne estivale.',
        image: '/assets/signes.jpg',
        body: [
            'Une thermopompe en mode froid ne tombe presque jamais en panne sans avertissement. Voici les cinq signaux que nos techniciens observent le plus souvent avant un bris complet.',
            "1. L'air est moins froid qu'avant. Si le système tourne plus longtemps pour atteindre la même température, les serpentins sont probablement encrassés ou le système a besoin d'être réglé.",
            "2. Des odeurs d'humidité ou de moisi. Elles trahissent une accumulation de contaminants dans l'unité murale — un problème de confort, mais aussi de qualité de l'air pour votre famille.",
            '3. Des bruits nouveaux : cliquetis, sifflement, vibration. Chaque son a sa cause — ventilateur désaxé, compresseur fatigué, débris dans l\'unité — et chacune se règle plus facilement tôt que tard.',
            "4. La facture d'électricité grimpe sans explication. Un système sale peut consommer jusqu'à 30 % de plus pour le même confort.",
            "5. De l'eau qui coule de l'unité intérieure. Le drain de condensats est probablement bloqué — une intervention rapide évite les dégâts d'eau sur vos murs. Si vous reconnaissez l'un de ces signes, un nettoyage approfondi redonnera à votre système son rendement d'origine.",
        ],
    },
    {
        slug: 'thermopompe-murale-ou-centrale',
        title: 'Thermopompe murale ou centrale : laquelle choisir ?',
        tag: 'Guide',
        date: '21 avril 2026',
        readTime: '5 min',
        excerpt:
            'Deux technologies, deux philosophies de confort. Les vrais critères pour choisir selon votre bâtiment et votre budget.',
        image: '/assets/murale-ou-centrale.jpg',
        fit: 'contain',
        body: [
            "C'est LA question qu'on nous pose le plus souvent. La réponse dépend d'abord de votre bâtiment, pas de la technologie.",
            'La thermopompe murale (mini-split) brille dans les maisons sans conduits de ventilation : duplex, triplex, condos et maisons plus anciennes. Installation rapide, excellent rendement énergétique, contrôle par zone — vous ne climatisez que les pièces que vous utilisez.',
            "La thermopompe centrale s'intègre à un réseau de conduits existant. Elle distribue l'air uniformément dans toute la maison, reste discrète et convient particulièrement aux grandes surfaces et aux constructions récentes déjà équipées d'un système central.",
            "Côté budget, la murale coûte généralement moins cher à installer si vous n'avez pas de conduits. La centrale devient avantageuse quand les conduits existent déjà. Dans les deux cas, les subventions disponibles au Québec (LogisVert d'Hydro-Québec) peuvent réduire sensiblement la facture — nous vous guidons dans les démarches.",
            "Le meilleur choix reste celui fait sur place : une visite d'évaluation permet de mesurer la charge thermique réelle de votre bâtiment et de dimensionner l'équipement correctement. Ni trop puissant, ni trop juste — exactement ce qu'il faut.",
        ],
    },
];

export const MARQUEE_ITEMS = [
    'Entretien préventif',
    'Thermopompes murales & centrales',
    'Diagnostic écoénergétique',
    'Climatisation & réfrigération',
    'Nettoyage antibactérien',
    'Service de proximité',
    'Optimisation énergétique — 438-680-4054',
];

export const ABOUT_TEXT = {
    title: 'À propos de Yara Global Air',
    tagline: "L'expert de votre confort thermique et écoresponsable dans le Centre-du-Québec.",
    paragraphs: [
        "Fondée avec la volonté d'offrir un service irréprochable, Yara Global Air est une entreprise spécialisée dans les solutions de confort pour le secteur résidentiel. Nous intervenons au quotidien auprès des particuliers (propriétaires de maisons, duplex, triplex et condos) ainsi que des PME (bureaux, commerces de détail et restaurants) pour leur offrir des prestations de haute qualité en climatisation, réfrigération, ventilation et chauffage (CVC-R).",
    ],
};

export const VISION_TEXT = {
    title: 'Notre vision',
    lead: "Nous aspirons à être la référence incontournable de notre région grâce à un savoir-faire technique rigoureux et un service de proximité incomparable. Notre travail repose sur des valeurs fortes :",
    values: [
        {
            title: 'Professionnalisme et Qualité',
            text: "Une maîtrise technique approfondie et l'utilisation d'équipements de pointe pour des résultats durables.",
            icon: 'award',
        },
        {
            title: 'Intégrité et Transparence',
            text: 'Des conseils honnêtes et axés uniquement sur vos besoins réels.',
            icon: 'handshake',
        },
        {
            title: 'Service à la clientèle',
            text: 'Une approche humaine, une écoute active et un suivi rigoureux.',
            icon: 'heart',
        },
        {
            title: "Protection de l'environnement",
            text: "Un engagement écoresponsable concret à travers l'optimisation énergétique de vos systèmes, pour un confort durable qui consomme moins.",
            icon: 'leaf',
        },
    ],
};
