declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare global {
  interface Document {
    body: HTMLElement;
  }
}
