import type { Experience, Keyword } from '@/types';
import angularLogo from '@/assets/images/logos/angular.svg';
import cssLogo from '@/assets/images/logos/css.svg';
import javascriptLogo from '@/assets/images/logos/javascript.svg';
import nextjsLogo from '@/assets/images/logos/nextjs.svg';
import phpLogo from '@/assets/images/logos/php.svg';
import reactLogo from '@/assets/images/logos/react.svg';
import tailwindLogo from '@/assets/images/logos/tailwind.svg';
import typescriptLogo from '@/assets/images/logos/typescript.svg';

export const getAboutData = (): Experience[] => [
  {
    id: 'modern-tech-stack',
    title: 'Modern Tech Stack',
    subtitle:
      'Building scalable products using popular frameworks and languages, like React and TypeScript, and practical AI integrations.',
    keywords: [
      { label: 'Next.js', logo: nextjsLogo },
      { label: 'TypeScript', logo: typescriptLogo },
      { label: 'JavaScript', logo: javascriptLogo },
      { label: 'React', logo: reactLogo },
      { label: 'Tailwind CSS', logo: tailwindLogo },
      { label: 'Angular', logo: angularLogo },
      { label: 'PHP', logo: phpLogo },
      { label: 'LLMs / Prompt Engineering' },
      { label: 'APIs' },
      { label: 'CSS', logo: cssLogo },
      { label: 'HTML' },
      { label: 'Node.js' },
    ],
    color: 'var(--color-primary)',
  },
  {
    id: 'design-engineering',
    title: 'Design Engineering',
    subtitle:
      'Bridging the gap between engineering and design by translating complex requirements into intuitive experiences.',
    keywords: [
      { label: 'Front-end' },
      { label: 'Core Web Vitals' },
      { label: 'UX/UI Design' },
      { label: 'Figma' },
      { label: 'User Research' },
      { label: 'Prototyping' },
      { label: 'Accessibility' },
      { label: 'Branding' },
    ],
    color: 'var(--color-primary)',
  },
  {
    id: 'production-ready-code',
    title: 'Production-Ready Code',
    subtitle:
      'Ensuring code is reliable and maintainable through rigorous testing and agile collaboration.',
    keywords: [
      { label: 'System Architecture' },
      { label: 'CI/CD Pipeline' },
      { label: 'Git' },
      { label: 'Scrum / Agile' },
      { label: 'Code Quality & Reviews' },
      { label: 'End-to-End Testing' },
      { label: 'Error Monitoring' },
      { label: 'Web Security' },
    ],
    color: 'var(--color-primary)',
  },
];

export const generateChatContext = (): string => {
  const aboutData = getAboutData();

  const aboutStrings: string[] = [];

  aboutData.forEach((item) => {
    let str = `${item.title || ''}`;

    if (item.subtitle) {
      str += `\n\n->Summary:\n- ${item.subtitle}`;
    }

    if (item.keywords && item.keywords.length > 0) {
      str += `\n\n->Keywords: ${item.keywords.map((k) => (typeof k === 'string' ? k : k.label)).join(', ')}`;
    }
    aboutStrings.push(str);
  });

  return (
    "-| Details from the 'About' section |-\n\n" + aboutStrings.join('\n\n')
  );
};
