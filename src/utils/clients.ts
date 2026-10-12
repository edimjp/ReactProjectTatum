interface Client {
  img: string;
  name: string;
  company: string;
  role: string;
  field: string;
}

const clients: Client[] = [
  {
    img: "../assets/images/manuel_inauen.jpg",
    name: "Manuel Inauen",
    company: "Kollabo AG",
    role: "Founder & CEO",
    field: "HR Digital Platform",
  },
  {
    img: "../assets/images/fabian_muller.jpg",
    name: "Fabian Müller",
    company: "Enzian Health",
    role: "Co-founder",
    field: "Healthcare",
  },
  {
    img: "../assets/images/anthony_ajose.jpg",
    name: "Anthony A. Ajose",
    company: "HealthX ",
    role: "Founder and Director",
    field: "Healthcare",
  },
  {
    img: "../assets/images/tillmann_lang.jpg",
    name: "Dr. Tillmann Lang",
    company: "Yova AG ",
    role: "Co-founder & CEO",
    field: "Climate Fintech",
  },
  {
    img: "../assets/images/osh_agabi.jpg",
    name: "Osh Agabi",
    company: "Koniku ",
    role: "Founder, CEO & CTO",
    field: "Biotechnology",
  },
  {
    img: "../assets/images/fabien_michel_langlet.jpg",
    name: "Fabien Michel Langlet",
    company: "Sensilia ",
    role: "CEO & Founder",
    field: "Nutraceuticals and Wellness",
  },
  {
    img: "../assets/images/paul_mola.jpg",
    name: "Paul Mola",
    company: "Roswell Biotech ",
    role: "Founder, President & CEO",
    field: "Biotechnology",
  },
  {
    img: "../assets/images/kerim_derhalli.jpg",
    name: "Kerim Derhalli",
    company: "INVSTR LTD ",
    role: "CEO",
    field: "Fintech / SaaS",
  },
  {
    img: "../assets/images/jed_morley.jpg",
    name: "Jed Morley",
    company: "Backstory ",
    role: "Founder & CEO",
    field: "Brand Consultancy",
  },
];

export default clients;
