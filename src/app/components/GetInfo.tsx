import { useMediaQuery } from '../hooks/use-media-query';

export function isDesktop():boolean {
    const isDesktop:boolean = useMediaQuery("(min-width: 1000px)");
    return isDesktop;
}