const paths = {
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  mapPin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  wallet: <><path d="M4 7h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13"/><path d="M16 14h5"/></>,
  lightbulb: <><path d="M9 18h6M10 22h4"/><path d="M8.5 15.5C7 14.3 6 12.4 6 10a6 6 0 0 1 12 0c0 2.4-1 4.3-2.5 5.5-.8.6-1.5 1.2-1.5 2.5h-4c0-1.3-.7-1.9-1.5-2.5Z"/></>,
  trophy: <><path d="M8 21h8M12 17v4M6 4h12v5a6 6 0 0 1-12 0V4Z"/><path d="M6 6H3v2a4 4 0 0 0 4 4M18 6h3v2a4 4 0 0 1-4 4"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  rocket: <><path d="M4.5 16.5 3 21l4.5-1.5M14 5l5 5M13 6c2-3 5-4 8-4 0 3-1 6-4 8l-6 6-5-5 6-6Z"/><path d="M9 15c-1.5 0-3 1.5-3 3M7 17l-2 2"/></>,
  arrowRight: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
  arrowUpRight: <><path d="M7 17 17 7M7 7h10v10"/></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
  x: <><path d="m6 6 12 12M18 6 6 18"/></>,
  chevronDown: <path d="m6 9 6 6 6-6"/>,
  fileText: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></>,
  bug: <><path d="M9 4V2M15 4V2M8 8H3M21 8h-5M8 13H3M21 13h-5M9 18v4M15 18v4"/><rect x="7" y="4" width="10" height="16" rx="5"/><path d="M7 10h10"/></>,
  zap: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  music: <><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></>,
  brain: <><path d="M9 4.5A3.5 3.5 0 0 0 5.5 8 3.5 3.5 0 0 0 6 15a3.5 3.5 0 0 0 3 5.5M15 4.5A3.5 3.5 0 0 1 18.5 8 3.5 3.5 0 0 1 18 15a3.5 3.5 0 0 1-3 5.5M9 4.5v15M15 4.5v15M9 9h6M9 15h6"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  phone: <path d="M7 3h3l1.5 4-2 1.5a14 14 0 0 0 5 5L16 12l4 1.5v3c0 1.1-.9 2-2 2C10.3 18.5 5.5 13.7 5.5 6c0-1.7.8-3 1.5-3Z"/>,
  external: <><path d="M14 3h7v7M21 3l-9 9"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>,
};

export default function Icon({ name, size = 20, strokeWidth = 1.8, className = "" }) {
  const content = paths[name] ?? paths.globe;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      {content}
    </svg>
  );
}
