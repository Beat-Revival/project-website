import { useMediaQuery } from '../hooks/UseMediaQuery';

export function isDesktop():boolean {
    const isDesktop:boolean = useMediaQuery("(min-width: 1000px)");
    return isDesktop;
}