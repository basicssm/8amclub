export type Product = {
  id: string;
  type: "tee" | "hoodie" | "jogger" | "cap" | "patch";
  name: string;
  price: number;
  tag?: string;
  /** Photos: first is the main shot, second (optional) shows on hover. */
  images: string[];
  /** CSS object-position for cropping the photo inside the card. */
  pos?: string;
  sizes: string[];
  desc: string;
  /** Spanish copy */
  es: { name: string; desc: string };
};

export const FILTERS = ["all", "tee", "hoodie", "jogger", "cap", "patch"] as const;

const STD = ["S", "M", "L", "XL", "XXL"];
const CROP = ["XS", "S", "M", "L", "XL"];

const img = (name: string) => `/products/${name}.jpg`;

export const PRODUCTS: Product[] = [
  { id: "tee-black-m", type: "tee", name: "Tee Black", price: 20, tag: "Core",
    images: [img("tee-black-m-front"), img("tee-black-m-back")], sizes: STD,
    desc: "Heavyweight cotton, boxy fit. Small 8AM club on the chest, big one on the back.",
    es: { name: "Camiseta Negra",
      desc: "Algodón grueso, corte boxy. Un 8AM club pequeño en el pecho y uno enorme en la espalda." } },
  { id: "tee-white-m", type: "tee", name: "Tee White", price: 20,
    images: [img("tee-white-m-front"), img("tee-white-m-back")], sizes: STD,
    desc: "Same tee, bone white. Black ink, cracked and worn like it’s been to a hundred 8 AMs.",
    es: { name: "Camiseta Blanca",
      desc: "La misma camiseta, en blanco hueso. Tinta negra, agrietada y gastada como si hubiera pasado por cien 8 AM." } },
  { id: "crop-black", type: "tee", name: "Crop Tee Black", price: 20, tag: "New",
    images: [img("tee-black-w-front"), img("tee-black-w-back")], sizes: CROP,
    desc: "Cropped, relaxed and heavyweight. Made for the wall balls and the party after.",
    es: { name: "Crop Negra",
      desc: "Corta, holgada y de algodón grueso. Hecha para los wall balls y la fiesta de después." } },
  { id: "crop-white", type: "tee", name: "Crop Tee White", price: 20,
    images: [img("tee-white-w-front"), img("tee-white-w-back")], sizes: CROP,
    desc: "Cropped white, black ink. Small on the chest, loud on the back.",
    es: { name: "Crop Blanca",
      desc: "Crop blanca con tinta negra. Pequeña en el pecho, enorme en la espalda." } },
  { id: "hoodie", type: "hoodie", name: "Sunrise Hoodie", price: 30,
    images: [img("hoodie")], sizes: STD,
    desc: "Oversized black fleece. Small 8AM on the chest, giant one on the back.",
    es: { name: "Sudadera Sunrise",
      desc: "Sudadera negra oversize. Un 8AM pequeño en el pecho y uno gigante en la espalda." } },
  { id: "jogger", type: "jogger", name: "Sunrise Jogger", price: 30, tag: "New",
    images: [img("jogger")], sizes: STD,
    desc: "Black jogger pants in soft brushed cotton. Tapered legs, ribbed ankle cuffs, drawstring waist. Embroidered 8AM club on the thigh.",
    es: { name: "Pantalón Sunrise",
      desc: "Pantalón jogger negro de algodón suave cepillado. Pierna ajustada, puños acanalados en los tobillos y cordón en la cintura. 8AM club bordado en el muslo." } },
  { id: "cap", type: "cap", name: "8AM Cap", price: 28,
    images: [img("cap")], pos: "30% 50%", sizes: ["One size"],
    desc: "Washed black cotton, six panels, embroidered 8AM club. Hides the sleepy face.",
    es: { name: "Gorra 8AM",
      desc: "Algodón negro lavado, seis paneles, 8AM club bordado. Esconde la cara de sueño." } },
  { id: "patch", type: "patch", name: "8AM Patch", price: 9,
    images: [img("patch")], sizes: ["One size"],
    desc: "Embroidered, with velcro back. For your bag, your jacket, your kids’ backpack.",
    es: { name: "Parche 8AM",
      desc: "Bordado, con velcro por detrás. Para tu mochila, tu chaqueta, la mochila de tus hijos." } },
];
