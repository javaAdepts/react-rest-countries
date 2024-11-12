export type countryType = {
  name: string;
};

export type countryName = {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
    };
  };
};
