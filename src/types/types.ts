interface IArtist {
  name: string;
}

interface IImage {
  url: string;
  height: number;
  width: number;
}

interface IAlbum {
  images: IImage[];
}

export interface ITrack {
  album: IAlbum;
  artists: IArtist[];
  id: string;
  name: string;
}
