export type dictionaryAPI = {
  text: string;
  pos: string;
  ts: string;
  tr: [
    {
      text: string;
      pos: string;
      gen: string;
      fr: number | null;
    }
  ];
};
