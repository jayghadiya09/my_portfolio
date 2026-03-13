declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      target: string | Element | Element[] | NodeListOf<Element> | string[],
      vars?: Record<string, any>
    );

    chars: Array<HTMLElement>;
    words: Array<HTMLElement>;
    lines: Array<HTMLElement>;
  }
}
