import {
  House,
  Mail,
  File,
  User,
  GraduationCap,
  BriefcaseBusiness,
} from 'lucide-react';
import Link from 'next/link';

const jsLogo = (
  <svg
    width="37"
    height="50"
    viewBox="0 0 37 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2743 0.255687C21.8329 1.26316 23.8114 4.40105 25.9783 10.9017L18.0644 10.9017C17.6875 9.86538 16.4556 8.34585 14.2959 8.16955C9.67945 7.7927 7.1357 14.3876 13.1653 18.4387C15.1835 19.7947 27.7683 26.7295 26.9204 31.1575C26.4817 33.4484 27.8625 32.1938 27.8625 33.5128C27.8625 33.5128 14.843 42.9139 15.0496 42.7456C25.2246 34.4549 15.3782 28.6086 10.4332 25.7873C-4.26403 17.4024 1.2003 -2.47646 16.2743 0.255687Z"
      fill="white"
      fillOpacity="0.5"
    />
    <path
      d="M9.96209 50C-5.49049 50 1.12321 34.958 3.14159 30.9815C3.44671 30.3804 4.06535 30.0269 4.73948 30.0269H10.3091C11.2286 30.0269 11.7854 31.0764 11.2977 31.856C9.1152 35.3447 5.16601 42.6701 9.96209 43.4051C17.0787 44.4958 20.985 36.5134 20.985 30.0269C20.985 17.8735 18.0644 10.9017 18.0644 10.9017L9.79041 10.9017C8.94505 10.9017 8.20316 10.3387 7.97567 9.52452L7.23859 6.88657C6.90294 5.68529 7.80605 4.49525 9.05334 4.49525H33.6972C34.5814 4.49525 35.3467 5.11013 35.5372 5.97362L36.1191 8.61158C36.3785 9.78755 35.4833 10.9017 34.2791 10.9017L25.9783 10.9017C25.9783 10.9017 28.2393 17.1198 28.2393 30.0269C28.2393 34.5736 27.2972 50 9.96209 50Z"
      fill="white"
      style={{ mixBlendMode: 'luminosity' }}
    />
    <path
      d="M5.62971 26.7668L4.96731 28.1862C4.79242 28.561 5.06599 28.9906 5.47956 28.9906H8.22379C8.78004 28.9906 9.00182 28.2716 8.54223 27.9582L6.4604 26.5388C6.17243 26.3425 5.77711 26.451 5.62971 26.7668Z"
      fill="white"
      fillOpacity="0.5"
    />
  </svg>
);

export default function SidebarNav() {
  const iconSize = 18;
  const linkStyle = 'flex items-center gap-3';

  return (
    <aside className="h-screen w-[250] bg-gradient-to-r from-sky-500/50 to-transparent">
      <nav className="h-full w-full flex flex-col justify-between px-8 py-12">
        <div className="flex flex-col gap-10">
          {jsLogo}
          <div className="flex flex-col gap-4">
            <Link href="/" className={`${linkStyle}`}>
              <House size={`${iconSize}`} />
              <div>Overview</div>
            </Link>
            <Link href="/" className={`${linkStyle}`}>
              <BriefcaseBusiness size={`${iconSize}`} />
              <div>Work</div>
            </Link>
            <Link href="/" className={`${linkStyle}`}>
              <GraduationCap size={`${iconSize}`} />
              <div>Education</div>
            </Link>
            <Link href="/" className={`${linkStyle}`}>
              <User size={`${iconSize}`} />
              <div>About</div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/" className={`${linkStyle}`}>
            <File size={`${iconSize}`} />
            <div>Resume</div>
          </Link>
          <Link href="/" className={`${linkStyle}`}>
            <Mail size={`${iconSize}`} />
            <div>Email</div>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
