declare module "*.css" {
  const styles: {
    readonly [key: string]: string;
  };
  export default styles;
}

declare global {
  interface Document {
    body: HTMLElement;
  }
}
