/* ============================================================
   PUBLICATIONS  —  source of truth: Harvey CV, July 2026
   20 peer-reviewed papers + manuscripts in preparation/review.

   To add a paper, copy a block and edit it. Newest can go
   anywhere in the list — the page sorts by year automatically.

   Fields:
     year    (number, required. Use 9999 for in prep / in review —
              those group under their own heading at the top)
     title   (string, required)
     authors (string, required — "Harvey, J.A." is auto-bolded)
     journal (string, required)
     volume  (string, optional — e.g. "282: 110041")
     doi     (string, optional — just the DOI, no https://doi.org/)
     topics  (array — these become the filter buttons)
     note    (string, optional — small tag, e.g. "In review")
   ============================================================ */

window.PUBLICATIONS = [

  /* ---------- In preparation / in review ---------- */
  {
    year: 9999,
    title: "The gaps and opportunities for modeling avian influenza transmission",
    authors: "Yin, S., Prosser, D.J., Harvey, J.A., Xu, Y., Teitelbaum, C., Takekawa, J., Xiao, X.",
    journal: "In preparation",
    note: "In preparation",
    topics: ["Avian influenza"]
  },
  {
    year: 9999,
    title: "Limited sampling of breeding Common Terns in 2025 for IAV fails to identify antibodies",
    authors: "Prosser, D.J., Sullivan, J.D., Poulson, R.C., Mullinax, J.M., Abplanal, K., Brinker, D.F., Callahan, C.R., Harvey, J.A., Lamb, J., McGowan, P.C., O'Donnel, A.W., Paton, P.W.C., Stallknecht, D.E.",
    journal: "Waterbirds",
    note: "In review",
    topics: ["Avian influenza", "Host immune response"]
  },

  /* ---------- Peer-reviewed ---------- */
  {
    year: 2026,
    title: "A practical decision tool for marine bird mortality assessments",
    authors: "Harvey, J.A., Ramey, A.M., Avery-Gomm, S., Robertson, G.J., Romano, M.D., Mullinax, J.M., Boldenow, M.L., Pearson, S.F., Atkinson, P.W., Prosser, D.J.",
    journal: "Ornithological Applications",
    volume: "duag044",
    doi: "10.1093/ornithapp/duag044",
    topics: ["Conservation & decision science", "Avian influenza"]
  },
  {
    year: 2026,
    title: "Feathers and flu: meta-analysis of avian influenza host dynamics and future data needs to prioritize wildlife conservation",
    authors: "Harvey, J.A., Gonnerman, M., Yin, S., Kent, C., Cullen, J., Sullivan, J.D., Dain, J.B., Hill, N.J., Mullinax, J.M., Prosser, D.J.",
    journal: "Wildlife Monographs",
    volume: "225: e70015",
    doi: "10.1002/wmon.70015",
    topics: ["Avian influenza", "Conservation & decision science"]
  },
  {
    year: 2025,
    title: "Avian influenza infection and antibodies not identified in Eastern Wild Turkeys (Meleagris gallopavo silvestris) sampled in Delmarva, USA",
    authors: "Sullivan, J.D., Harvey, J.A., Poulson, R.L., Stallknecht, D.E., Long, R.C., Driscoll, C.P., Prosser, D.J., Mullinax, J.M.",
    journal: "Avian Diseases",
    volume: "69(1): 2–5",
    doi: "10.1637/aviandiseases-D-24-00077",
    topics: ["Avian influenza", "Host immune response"]
  },
  {
    year: 2025,
    title: "Highly pathogenic H5N1 in Double-crested Cormorants (Phalacrocorax auritus) of the Chesapeake Bay, USA",
    authors: "Harvey, J.A., Sullivan, J.D., Poulson, R.L., Carter, D.L., Driscoll, C.P., McGowan, P.C., Callahan, C.R., O'Donell, A.W.O., Mullinax, J.M., Stallknecht, D.E., Prosser, D.J.",
    journal: "Journal of Wildlife Diseases",
    volume: "61(2): 348–356",
    doi: "10.7589/JWD-D-24-00111",
    topics: ["Avian influenza"]
  },
  {
    year: 2024,
    title: "Reframing wildlife disease management problems using decision analysis",
    authors: "McEachran, M., Harvey, J.A., Mummah, R., Bletz, M., Teitelbaum, C., Rosenblatt, E., Rudolph, F.J., Arce, F.A., Yin, S., Prosser, D.J., Mosher, B.A., Mullinax, J.M., DiRenzo, G.V., Couret, J., Runge, C.M., Grant, E.H., Cook, J.D.",
    journal: "Conservation Biology",
    volume: "38: e14284",
    doi: "10.1111/cobi.14284",
    topics: ["Conservation & decision science"]
  },
  {
    year: 2024,
    title: "Urban living can rescue Darwin's finches from the lethal effects of invasive vampire flies",
    authors: "Knutie, S.K., Webster, C., Vaziri, G.J., Albert, L., Harvey, J.A., LaRue, M., Soldo, A., Koop, J.A.H., Chaves, J., Wegrzyn, J.L.",
    journal: "Global Change Biology",
    volume: "30: e17145",
    doi: "10.1111/gcb.17145",
    topics: ["Anthropogenic stressors", "Host–vector–pathogen dynamics"]
  },
  {
    year: 2023,
    title: "Effect of urbanization and parasitism on the gut microbiota of Darwin's finch nestlings",
    authors: "Solomon, G., Love, A., Vaziri, G.J., Harvey, J.A., Verrett, T.B., Chernicky, K., Simons, S., Albert, L., Chaves, J.A., Knutie, S.A.",
    journal: "Molecular Ecology",
    volume: "32: 6059–6069",
    doi: "10.1111/mec.17164",
    topics: ["Anthropogenic stressors", "Host immune response"]
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
    year: 2021,
    title: "Urban living can increase the reproductive success of Darwin's finches",
    authors: "Harvey, J.A., Chernicky, K., Simons, S., Verrett, T.B., Chaves, J.A., Knutie, S.A.",
    journal: "Ecology and Evolution",
    volume: "11: 5038–5048",
    doi: "10.1002/ece3.7360",
    topics: ["Anthropogenic stressors"]
  },
  {
    year: 2020,
    title: "Effect of introduced parasites on the survival and microbiota of nestling cactus finches (Geospiza scandens) in the Galápagos Islands",
    authors: "Addesso, A.M., Harvey, J.A., Vaziri, G.J., Verrett, T.B., Albert, L., Arthur, T., Chernicky, K., Simons, S.R., Chaves, J.A., Knutie, S.A.",
    journal: "Journal of Ornithology",
    volume: "161: 1011–1019",
    doi: "10.1007/s10336-020-01793-6",
    topics: ["Anthropogenic stressors", "Host–vector–pathogen dynamics"]
  },
  {
    year: 2019,
    title: "Phylogenetic structure of Holbrookia lacerata (Cope 1880) (Squamata: Phrynosomatidae): one species or two?",
    authors: "Hibbitts, T.J., Ryberg, W.A., Harvey, J.A., Voelker, G., Lawing, M.A., Adams, C.S., Neuharth, D.B., Dittmer, D.E., Duran, C.M., Wolaver, B.D., Pierre, J.P., Labay, B.J., Laduc, T.J.",
    journal: "Zootaxa",
    volume: "4619: 139–154",
    doi: "10.11646/zootaxa.4619.1.6",
    topics: ["Evolution & systematics"]
  },
  {
    year: 2019,
    title: "Host associations and climate influence avian haemosporidian distributions in Benin",
    authors: "Harvey, J.A., Voelker, G.",
    journal: "International Journal for Parasitology",
    volume: "49: 27–36",
    doi: "10.1016/j.ijpara.2018.07.004",
    topics: ["Avian malaria", "Host–vector–pathogen dynamics"]
  },
  {
    year: 2018,
    title: "The systematics and biogeography of the Bearded Greenbuls (Aves: Criniger) reveals the impact of the Plio-Pleistocene forest fragmentation of Afro-tropical avian diversity",
    authors: "Huntley, J.W., Harvey, J.A., Pavia, M., Boano, G., Voelker, G.",
    journal: "Zoological Journal of the Linnean Society",
    volume: "183: 672–686",
    doi: "10.1093/zoolinnean/zlx086",
    topics: ["Evolution & systematics"]
  },
  {
    year: 2017,
    title: "Avian haemosporidian detection across source materials: prevalence and genetic diversity",
    authors: "Harvey, J.A., Voelker, G.",
    journal: "Parasitology Research",
    volume: "116(12): 3361–3371",
    doi: "10.1007/s00436-017-5654-0",
    topics: ["Avian malaria", "Methods"]
  },
  {
    year: 2017,
    title: "So similar and yet so different: taxonomic status of Pallid Swift Apus pallidus and Common Swift Apus apus",
    authors: "Pellegrino, I., Cucco, M., Harvey, J.A., Liveratore, F., Pavia, M., Voelker, G., Boano, G.",
    journal: "Bird Study",
    volume: "3: 344–352",
    doi: "10.1080/00063657.2017.1359235",
    topics: ["Evolution & systematics"]
  },
  {
    year: 2016,
    title: "Diversity and distribution of avian haemosporidians in sub-Saharan Africa: an inter-regional biogeographic overview",
    authors: "Outlaw, D.C., Harvey, J.A., Drovetski, S., Voelker, G.",
    journal: "Parasitology",
    volume: "144(4): 394–402",
    doi: "10.1017/S0031182016001979",
    topics: ["Avian malaria", "Host–vector–pathogen dynamics"]
  },
  {
    year: 2015,
    title: "Genetic structure is inconsistent with subspecies designations in the Western Massasauga (Sistrurus tergeminus)",
    authors: "Ryberg, W.A., Harvey, J.A., Blick, A., Hibbitts, T.J., Voelker, G.",
    journal: "Journal of Fish and Wildlife Management",
    volume: "6: 350–359",
    doi: "10.3996/122014-JFWM-093",
    topics: ["Evolution & systematics"]
  },
  {
    year: 2014,
    title: "Does the niche breadth or trade-off hypothesis explain the abundance–occupancy relationship in avian Haemosporidia?",
    authors: "Drovetski, S., Aghayan, S.A., Mata, V.A., Lopes, R.J., Harvey, J.A., Voelker, G.",
    journal: "Molecular Ecology",
    volume: "23: 3322–3329",
    doi: "10.1111/mec.12744",
    topics: ["Avian malaria", "Host–vector–pathogen dynamics"]
  },
  {
    year: 2013,
    title: "Ocelot food habits and potential for competition with bobcats in southern Texas",
    authors: "Booth-Binczik, S.D., Bradley, R.D., Thompson, C.W., Bender, L.C., Huntley, J.W., Harvey, J.A., Laack, L.L., Mays, J.L.",
    journal: "The Southwestern Naturalist",
    volume: "58: 403–410",
    doi: "10.1894/0038-4909-58.4.403",
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
    topics: ["Avian influenza"]
  }
  ---------------------------------------------------------- */
];
