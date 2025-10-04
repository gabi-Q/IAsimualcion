
export interface AsteroidData {
  id: string;
  name: string;
  type: string;
  size: number; // relative size for rendering
  distanceFromSun: number; // relative distance for rendering
  realDistanceFromSun: number; // in million km
  orbitSpeed: number;
  textureUrl: string;
  diameter: number; // in km
  description: string;
  emoji: string;
  orbital_period_days: number;
  eccentricity: number;
  inclination_deg: number;
  semi_major_axis_au: number;
}

export interface CometData {
  id: string;
  name: string;
  type: string;
  size: number; // relative size for rendering
  distanceFromSun: number; // relative distance for rendering
  realDistanceFromSun: string; // can be a range
  orbitSpeed: number;
  textureUrl: string;
  diameter: number; // in km
  orbitalPeriod: string;
  description: string;
  emoji: string;

}


export const asteroids: AsteroidData[] = [
    {
        id: "ceres",
        name: "Ceres",
        type: "Dwarf Planet",
        size: 0.5,
        distanceFromSun: 28,
        realDistanceFromSun: 413.7,
        orbitSpeed: 0.01,
        textureUrl: "/textures/planets/2k_mercury.jpg",
        diameter: 940,
        description: "Ceres is the largest object in the asteroid belt between Mars and Jupiter and the only dwarf planet located in the inner Solar System.",
        emoji: "🪨",
        orbital_period_days: 1682,
        eccentricity: 0.075,
        inclination_deg: 10.59,
        semi_major_axis_au: 2.77
    },
    {
        id: "vesta",
        name: "Vesta",
        type: "Asteroid",
        size: 0.3,
        distanceFromSun: 30,
        realDistanceFromSun: 353.2,
        orbitSpeed: 0.012,
        textureUrl: "/textures/planets/2k_mercury.jpg",
        diameter: 525,
        description: "Vesta is the second-most-massive body in the asteroid belt, surpassed only by Ceres. It is a protoplanet, and its differentiated interior means that it has a layered structure.",
        emoji: "🪨",
        orbital_period_days: 1325,
        eccentricity: 0.088,
        inclination_deg: 7.13,
        semi_major_axis_au: 2.36
    }
];

export const comets: CometData[] = [
    {
        id: "halley",
        name: "Halley's Comet",
        type: "Short-period comet",
        size: 0.2,
        distanceFromSun: 35, // This will be an elliptical orbit, so this is just a representation
        realDistanceFromSun: "87.8 - 5240",
        orbitSpeed: 0.005, // variable
        textureUrl: "/textures/planets/2k_mars.jpg",
        diameter: 11,
        orbitalPeriod: "76 years",
        description: "Halley's Comet is arguably the most famous comet. It is a periodic comet and returns to Earth's vicinity about every 76 years, making it possible for a human to see it twice in their lifetime.",
        emoji: "☄️"
    }
];
