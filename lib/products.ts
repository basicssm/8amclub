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
};

export const FILTERS = [
  { key: "all", label: "All" },
  { key: "tee", label: "Tees" },
  { key: "hoodie", label: "Hoodie" },
  { key: "jogger", label: "Jogger" },
  { key: "cap", label: "Cap" },
  { key: "patch", label: "Patch" },
] as const;

const STD = ["S", "M", "L", "XL", "XXL"];
const CROP = ["XS", "S", "M", "L", "XL"];

const img = (name: string) => `/products/${name}.jpg`;

export const PRODUCTS: Product[] = [
  { id: "tee-black-m", type: "tee", name: "Tee Black", price: 20, tag: "Core",
    images: [img("tee-black-m-front"), img("tee-black-m-back")], sizes: STD,
    desc: "Heavyweight cotton, boxy fit. Small 8AM club on the chest, big one on the back." },
  { id: "tee-white-m", type: "tee", name: "Tee White", price: 20,
    images: [img("tee-white-m-front"), img("tee-white-m-back")], sizes: STD,
    desc: "Same tee, bone white. Black ink, cracked and worn like it’s been to a hundred 8 AMs." },
  { id: "crop-black", type: "tee", name: "Crop Tee Black", price: 20, tag: "New",
    images: [img("tee-black-w-front"), img("tee-black-w-back")], sizes: CROP,
    desc: "Cropped, relaxed and heavyweight. Made for the wall balls and the party after." },
  { id: "crop-white", type: "tee", name: "Crop Tee White", price: 20,
    images: [img("tee-white-w-front"), img("tee-white-w-back")], sizes: CROP,
    desc: "Cropped white, black ink. Small on the chest, loud on the back." },
  { id: "hoodie", type: "hoodie", name: "Sunrise Hoodie", price: 30,
    images: [img("hoodie")], sizes: STD,
    desc: "Oversized black fleece. Small 8AM on the chest, giant one on the back." },
  { id: "jogger", type: "jogger", name: "Sunrise Jogger", price: 30, tag: "New",
    images: [img("jogger")], sizes: STD,
    desc: "Black brushed fleece, tapered fit, ribbed cuffs. Embroidered 8AM club on the thigh." },
  { id: "cap", type: "cap", name: "8AM Cap", price: 28,
    images: [img("cap")], pos: "30% 50%", sizes: ["One size"],
    desc: "Washed black cotton, six panels, embroidered 8AM club. Hides the sleepy face." },
  { id: "patch", type: "patch", name: "8AM Patch", price: 9,
    images: [img("patch")], sizes: ["One size"],
    desc: "Embroidered, with velcro back. For your bag, your jacket, your kids’ backpack." },
];
