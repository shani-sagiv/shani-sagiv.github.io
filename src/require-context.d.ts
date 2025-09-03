declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp,
    mode?: string
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
};