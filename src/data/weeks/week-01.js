import { desc } from "framer-motion/client";

export default {
  id: 1,
  title: "Reco du 29 décembre 2025",
  recos: [
    {
      id: 1,
      name: "Hip-Hop",
      description: "Du lourd pour commencer la semaine.",
      track: {
        title: "Ciel",
        artist: "Nosnow",
        description: "Un morceau qui te transporte dans les nuages.",
        cover: "/assets/nosnow.jpg",
        audio: "/assets/nosnow.mp3",
        spotify: "https://open.spotify.com/track/...",
      },
    },
    {
      id: 2,
      name: "Jazz",
      description: "Un petit air de sax pour adoucir ton lundi.",
      track: {
        title: "Jammin’",
        artist: "Grover Washington Jr.",
        description: "Un classique du jazz pour te détendre.",
        cover: "/assets/jazz.jpg",
        audio: "/assets/jammin.mp3",
        spotify: "https://open.spotify.com/track/...",
      },
    },
    {
      id: 3,
      name: "Rock",
      description: "Un classique indémodable à fond les amplis.",
      track: {
        title: "Take Me Out",
        artist: "Franz Ferdinand",
        cover: "/assets/poly.JPG",
        description: "Un hymne rock pour te donner de l'énergie.",
        audio: "/assets/takemeout.mp3",
        spotify: "https://open.spotify.com/track/...",
      },
    },
    {
      id: 4,
      name: "Mystère",
      description: "Une surprise à découvrir 🎁",
      track: {
        title: "???",
        artist: "Inconnu",
        cover: "/assets/marc.jpg",
        description: "Un morceau mystère pour pimenter ta journée.",
        audio: "/assets/marc1.wav",
        spotify: "https://open.spotify.com/track/...",
      },
    },
  ],
};