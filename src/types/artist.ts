export interface IDataApiArtist {
  id: any;
  link: string;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  data: any;
  position: number;
  radio: boolean;
  tracklist: string;
  type: string;
}

export interface IArtistState {
  artist: IDataApiArtist | null;
}

export interface IPerformer {
  performer: IDataApiArtist[];
}
