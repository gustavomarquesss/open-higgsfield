import type { ModelEntry } from "./types";

export const wan3Reference: ModelEntry = {
  id: "wan-3-reference",
  surface: "video",
  label: "Wan 3.0 Reference",
  roles: { reference: 10, video: 5, audio: 5 },
  settings: {
    aspectRatio: {
      type: "enum",
      values: ["adaptive", "16:9", "4:3", "1:1", "3:4", "9:16"],
      default: "adaptive",
    },
    resolution: { type: "enum", values: ["480p", "720p", "1080p"], default: "720p" },
    duration: { type: "range", min: 2, max: 30, default: 5 },
    generateAudio: { type: "boolean", default: true },
  },
};
