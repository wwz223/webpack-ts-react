declare module "*.css" {
  const styles: {
    readonly [key: string]: string;
  };
  export default styles;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare global {
  interface Document {
    body: HTMLElement;
  }
}
