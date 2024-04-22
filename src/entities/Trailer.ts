export interface Trailer {
  image: string | undefined;
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}
