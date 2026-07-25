/* ============================================================
   PUBLICATIONS
   To add a paper, copy a block and edit it. Newest can go
   anywhere in the list — the page sorts by year automatically.

   Fields:
     year    (number, required)
     title   (string, required)
     authors (string, required — "Harvey, J.A." is auto-bolded)
     journal (string, required)
     volume  (string, optional — e.g. "282: 110041")
     doi     (string, optional — just the DOI, no https://doi.org/)
     topics  (array — these become the filter buttons)
     note    (string, optional — small tag, e.g. "In prep")
   ============================================================ */

window.PUBLICATIONS = [
  {
    year: 2026,
    title: "Decision guidance on approaches for assessing loss during marine bird mortality events",
    authors: "Harvey, J.A., Ramey, A.M., Avery-Gomm, S., Robertson, G.J., Romano, M.D., Mullinax, J.M., Boldenow, M.L., Pearson, S.F., Atkinson, P.W., Prosser, D.J.",
    journal: "Ornithological Applications",
    volume: "duag044",
    doi: "10.1093/ornithapp/duag044",
    topics: ["Conservation & decision science", "Avian influenza"]
  },
  {
    year: 2026,
    title: "Feathers and flu: identifying data gaps in avian influenza host dynamics to prioritize wildlife conservation",
    authors: "Harvey, J.A., Gonnerman, M., Yin, S., Kent, C., Cullen, J., Sullivan, J.D., Dain, J.B., Hill, N.J., Mullinax, J.M., Prosser, D.J.",
    journal: "Wildlife Monographs",
    volume: "225",
    doi: "10.1002/wmon.70015",
    topics: ["Avian influenza", "Conservation & decision science"]
  },
  {
    year: 2023,
    title: "The changing dynamics of highly pathogenic avian influenza H5N1: next steps for science and management in North America",
    authors: "Harvey, J.A., Mullinax, J.M., Runge, M.C., Prosser, D.J.",
    journal: "Biological Conservation",
    volume: "282: 110041",
    doi: "10.1016/j.biocon.2023.110041",
    topics: ["Avian influenza", "Conservation & decision science"]
  },
  {
    year: 2023,
    title: "Effect of RNA preservation methods on RNA quantity and quality of field collected avian whole blood",
    authors: "Harvey, J.A., Knutie, S.A.",
    journal: "Avian Biology Research",
    doi: "10.1177/17581559231169179",
    topics: ["Methods", "Host immune response"]
  },
  {
    year: 2023,
    title: "Effect of urbanization and parasitism on the gut microbiota of Darwin's finch nestlings",
    authors: "Solomon, G., Love, A., Vaziri, G., Harvey, J.A., Verrett, T., Chernicky, K., Simons, S., Albert, L., Chaves, J., Knutie, S.A.",
    journal: "Molecular Ecology",
    doi: "",
    topics: ["Anthropogenic stressors", "Host immune response"]
  },
  {
    year: 2021,
    title: "Urban living influences the nesting success of Darwin's finches in the Galápagos Islands",
    authors: "Harvey, J.A., Chernicky, K., Simons, S.R., Verrett, T.B., Chaves, J.A., Knutie, S.A.",
    journal: "Ecology and Evolution",
    volume: "11: 5038–5048",
    doi: "10.1002/ece3.7360",
    topics: ["Anthropogenic stressors"]
  },
  {
    year: 2020,
    title: "Effect of introduced parasites on the survival and microbiota of nestling cactus finches (Geospiza scandens) in the Galápagos Islands",
    authors: "Addesso, A.M., Harvey, J.A., Vaziri, G.J., Verrett, T.B., Albert, L., Arthur, C., Chernicky, K., Simons, S.R., Chaves, J., Knutie, S.A.",
    journal: "Journal of Ornithology",
    doi: "",
    topics: ["Anthropogenic stressors", "Host–vector–pathogen dynamics"]
  },
  {
    year: 2019,
    title: "Host associations and climate influence avian haemosporidian distributions in Benin",
    authors: "Harvey, J.A., Voelker, G.",
    journal: "International Journal for Parasitology",
    volume: "49: 27–36",
    doi: "10.1016/j.ijpara.2018.07.004",
    topics: ["Host–vector–pathogen dynamics", "Avian malaria"]
  },
  {
    year: 2019,
    title: "Phylogenetic structure of Holbrookia lacerata (Cope 1880) (Squamata: Phrynosomatidae): one species or two?",
    authors: "Hibbitts, T.J., Ryberg, W.A., Harvey, J.A., Voelker, G., Lawing, A.M., Adams, C.S., Neuharth, D.B., Dittmer, D.E., Duran, C.M., Wolaver, B.D., et al.",
    journal: "Zootaxa",
    doi: "",
    topics: ["Evolution & systematics"]
  },
  {
    year: 2018,
    title: "The systematics and biogeography of the Bearded Greenbuls (Aves: Criniger) reveals the impact of Plio-Pleistocene forest fragmentation on Afro-tropical avian diversity",
    authors: "Huntley, J.W., Harvey, J.A., Pavia, M., Boano, G., Voelker, G.",
    journal: "Zoological Journal of the Linnean Society",
    doi: "",
    topics: ["Evolution & systematics"]
  },
  {
    year: 2017,
    title: "Avian haemosporidian detection across source materials: prevalence and genetic diversity",
    authors: "Harvey, J.A., Voelker, G.",
    journal: "Parasitology Research",
    doi: "",
    topics: ["Avian malaria", "Methods"]
  },
  {
    year: 2017,
    title: "Diversity and distribution of avian haemosporidians in sub-Saharan Africa: an inter-regional biogeographic overview",
    authors: "Outlaw, D.C., Harvey, J.A., Drovetski, S.V., Voelker, G.",
    journal: "Parasitology",
    doi: "",
    topics: ["Avian malaria", "Host–vector–pathogen dynamics"]
  },
  {
    year: 2017,
    title: "So similar and yet so different: taxonomic status of Pallid Swift Apus pallidus and Common Swift Apus apus",
    authors: "Pellegrino, I., Cucco, M., Harvey, J.A., Liberatore, F., Pavia, M., Voelker, G., Boano, G.",
    journal: "Bird Study",
    doi: "",
    topics: ["Evolution & systematics"]
  },
  {
    year: 2015,
    title: "Genetic structure is inconsistent with subspecies designations in the western massasauga Sistrurus tergeminus",
    authors: "Ryberg, W.A., Harvey, J.A., Blick, A., Hibbitts, T.J., Voelker, G.",
    journal: "Journal of Fish and Wildlife Management",
    doi: "",
    topics: ["Evolution & systematics"]
  },
  {
    year: 2014,
    title: "Does the niche breadth or trade-off hypothesis explain the abundance–occupancy relationship in avian Haemosporidia?",
    authors: "Drovetski, S.V., Aghayan, S.A., Mata, V.A., Lopes, R.J., Mode, N.A., Harvey, J.A., Voelker, G.",
    journal: "Molecular Ecology",
    doi: "",
    topics: ["Avian malaria", "Host–vector–pathogen dynamics"]
  },
  {
    year: 2013,
    title: "Food habits of ocelots and potential for competition with bobcats in southern Texas",
    authors: "Bradley, R.D., Thompson, C.W., Bender, L.C., Huntley, J.W., Harvey, J.A., Laack, L.L., Booth-Binczik, S.D., Mays, J.L.",
    journal: "The Southwestern Naturalist",
    doi: "",
    topics: ["Evolution & systematics"]
  }

  /* ---- Template for a new entry — copy, uncomment, edit ----
  ,{
    year: 2027,
    title: "Paper title goes here",
    authors: "Harvey, J.A., et al.",
    journal: "Journal Name",
    volume: "12: 345-360",
    doi: "",
    note: "In review",
    topics: ["Conservation & decision science"]
  }
  ---------------------------------------------------------- */
];
