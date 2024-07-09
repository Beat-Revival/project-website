import { UseMediaQuery } from '../hooks/UseMediaQuery';

export function isDesktop():boolean {
    const isDesktop:boolean = UseMediaQuery("(min-width: 1000px)");
    return isDesktop;
}