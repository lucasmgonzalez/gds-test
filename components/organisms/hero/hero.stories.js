// Hero Story
import hero from './hero.twig';
import heroData from './hero.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Hero' };
export const Hero = () => hero(heroData);
