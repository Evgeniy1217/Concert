export interface IApiTrackAlbum {
  cover: string;
  cover_big: string;
  cover_medium: string;
  cover_small: string;
  cover_xl: string;
  id: number;
  md5_image: string;
  title: string;
  tracklist: string;
  type: string;
}

export interface IApiTrackArtist {
  artist: {
    id: number;
    link: string;
    name: string;
    title: string;
    picture: string;
    picture_big: string;
    picture_medium: string;
    picture_small: string;
    picture_xl: string;
    preview: string;
    radio: true;
    tracklist: string;
    type: string;
  };
}

export interface IDataApiTrack {
  album: IApiTrackAlbum[];
  artist: IApiTrackArtist[];
  duration: number;
  explicit_content_cover: number;
  explicit_content_lyrics: number;
  explicit_lyrics: true;
  id: number;
  link: string;
  md5_image: string;
  position: number;
  preview: string;
  rank: number;
  title: string;
  title_short: string;
  title_version: string;
  type: string;
  data: any;
}

export interface ITrackState {
  track: IDataApiTrack | null;
}
