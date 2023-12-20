export interface CritterInterface {
  url: string;
  name: string;
  number: number;
  image_url: string;
  render_url: string;
  location?: string;
  shadow_size?: string;
  shadow_movement?: string;
  rarity: string;
  total_catch: number;
  sell_nook: number;
  sell_cj?: number;
  sell_flick?: number;
  tank_width: number;
  tank_length: number;
  catchphrases: string[];
  north: HemisphereDataT;
  south: HemisphereDataT;
}

export type HemisphereDataT = {
  availability_array: AvailabilityArrayT[];
  times_by_month: {
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    "10": string;
    "11": string;
    "12": string;
  };
  months: string;
  months_array: number[];
};

export type AvailabilityArrayT = {
  months: string;
  time: string;
};
