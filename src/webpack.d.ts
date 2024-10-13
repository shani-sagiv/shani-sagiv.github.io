declare interface NodeRequire {
  context: (
    path: string,
    useSubdirectories?: boolean,
    regExp?: RegExp,
  ) => {
    keys: () => string[];
    (key: string): any;
  };
}
