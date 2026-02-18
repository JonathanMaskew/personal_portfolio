import type { Experience } from '@/types';
import SkillsComputer from '@/components/About/SkillsComputer';
import SmileyLines from '@/assets/images/site-graphics/smiley-lines.svg';

export const getAboutData = (): Experience[] => [
  {
    id: 'modern-tech-stack',
    title: 'Modern Tech Stack',
    subtitle:
      'Building scalable products using popular frameworks and languages, like React and TypeScript, and practical AI integrations.',
    keywords: [
      'Next.js',
      'TypeScript',
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Angular',
      'PHP',
      'LLMs / Prompt Engineering',
      'APIs',
      'CSS',
      'HTML',
      'Node.js',
    ],
    color: 'var(--color-generic)',
    highlightChildren: (
      <div className="w-full flex items-end justify-center -mt-20">
        <SkillsComputer />
      </div>
    ),
  },
  {
    id: 'design-engineering',
    title: 'Design Engineering',
    subtitle:
      'Bridging the gap between engineering and design by translating complex requirements into intuitive experiences.',
    keywords: [
      'Front-end',
      'Core Web Vitals',
      'UX/UI Design',
      'Figma',
      'User Research',
      'Prototyping',
      'Accessibility',
      'Branding',
    ],
    color: 'var(--color-generic)',
    highlightChildren: (
      <img
        src={SmileyLines.src}
        alt="Smiley"
        className="absolute bottom-0 right-2 w-[40%] h-auto max-h-[220px] object-contain"
      />
    ),
  },
  {
    id: 'production-ready-code',
    title: 'Production-Ready Code',
    subtitle:
      'Ensuring code is reliable and maintainable through rigorous testing and agile collaboration.',
    keywords: [
      'System Architecture',
      'CI/CD Pipeline',
      'Git',
      'Scrum / Agile',
      'Code Quality & Reviews',
      'End-to-End Testing',
      'Error Monitoring',
      'Web Security',
    ],
    color: 'var(--color-generic)',
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
      str += `\n\n->Keywords: ${item.keywords.join(', ')}`;
    }
    aboutStrings.push(str);
  });

  return (
    "-| Details from the 'About' section |-\n\n" + aboutStrings.join('\n\n')
  );
};
