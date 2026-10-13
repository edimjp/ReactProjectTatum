import manuelImage from "../assets/images/manuel_inauen.jpg";
import fabianImage from "../assets/images/fabian_muller.jpg";
import anthonyImage from "../assets/images/anthony_ajose.jpg";
import tillmannImage from "../assets/images/tillmann_lang.jpg";
import oshImage from "../assets/images/osh_agabi.jpg";
import fabienImage from "../assets/images/fabien_michel_langlet.jpg";
import paulImage from "../assets/images/paul_mola.jpg";
import kerimImage from "../assets/images/kerim_derhalli.jpg";
import jedImage from "../assets/images/jed_morley.jpg";

export interface ClientRecord {
  img: string;
  name: string;
  company: string;
  role: string;
  field: string;
}

export const clients: ClientRecord[] = [
  {
    img: manuelImage,
    name: "Manuel Inauen",
    company: "Kollabo AG",
    role: "Founder & CEO",
    field: "HR Digital Platform",
  },
  {
    img: fabianImage,
    name: "Fabian Müller",
    company: "Enzian Health",
    role: "Co-founder",
    field: "Healthcare",
  },
  {
    img: anthonyImage,
    name: "Anthony A. Ajose",
    company: "HealthX ",
    role: "Founder and Director",
    field: "Healthcare",
  },
  {
    img: tillmannImage,
    name: "Dr. Tillmann Lang",
    company: "Yova AG ",
    role: "Co-founder & CEO",
    field: "Climate Fintech",
  },
  {
    img: oshImage,
    name: "Osh Agabi",
    company: "Koniku ",
    role: "Founder, CEO & CTO",
    field: "Biotechnology",
  },
  {
    img: fabienImage,
    name: "Fabien Michel Langlet",
    company: "Sensilia ",
    role: "CEO & Founder",
    field: "Nutraceuticals and Wellness",
  },
  {
    img: paulImage,
    name: "Paul Mola",
    company: "Roswell Biotech ",
    role: "Founder, President & CEO",
    field: "Biotechnology",
  },
  {
    img: kerimImage,
    name: "Kerim Derhalli",
    company: "INVSTR LTD ",
    role: "CEO",
    field: "Fintech / SaaS",
  },
  {
    img: jedImage,
    name: "Jed Morley",
    company: "Backstory ",
    role: "Founder & CEO",
    field: "Brand Consultancy",
  },
];
