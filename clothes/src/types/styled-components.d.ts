import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: "dark" | "light";
    colors: {
      background: string;
      text: string;
    };
  }
}
