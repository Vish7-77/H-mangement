export const DOC_IMAGE_URI =
  "https://static.vecteezy.com/system/resources/previews/026/797/673/original/male-doctor-3d-profession-avatars-illustrations-png.png";
export const PAT_IMAGE_URI =
  "https://static.vecteezy.com/system/resources/previews/028/238/588/original/old-man-teacher-face-3d-profession-avatars-free-png.png";
export const GET_ROLES = {
  PAT: "Patient",
  DOC: "Doctor",
};

export const TIMINGS = [
  "12:00AM-1:00PM",
  "2:00PM-3:00PM",
  "4:00AM-5:00PM",
  "6:00AM-7:00PM",
];

export function filterTimings(dumTimings) {
  return TIMINGS.filter((timing) => !dumTimings.includes(timing));
}
