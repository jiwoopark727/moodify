export type SpotifyTrack = {
  id: string;
  name: string;
  preview_url: string | null;
  artists: {
    name: string;
  }[];
  album: {
    images: {
      url: string;
    }[];
  };
};
