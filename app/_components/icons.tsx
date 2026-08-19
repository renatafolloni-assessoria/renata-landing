export const Icon = {
  WA: ({ cls = "w-5 h-5" }: { cls?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  Check: ({ cls = "w-3 h-3" }: { cls?: string }) => (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className={cls}>
      <polyline points="1.5,6 4.5,9 10.5,3" />
    </svg>
  ),
  Clock: ({ cls = "w-3 h-3" }: { cls?: string }) => (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
      <circle cx="6" cy="6" r="5" />
      <path d="M6 3.5V6l1.5 1.5" />
    </svg>
  ),
  Process: ({ cls = "w-5 h-5" }: { cls?: string }) => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={cls}>
      <rect x="3" y="4" width="14" height="12" rx="2" />
      <path d="M7 4V2M13 4V2M3 8h14M7 12h2M11 12h2" strokeLinecap="round" />
    </svg>
  ),
  Bolt: ({ cls = "w-5 h-5" }: { cls?: string }) => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={cls}>
      <path d="M11.5 2L4 11h6.5L8.5 18 16 9h-6.5L11.5 2z" strokeLinejoin="round" />
    </svg>
  ),
  Target: ({ cls = "w-5 h-5" }: { cls?: string }) => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={cls}>
      <circle cx="10" cy="10" r="7.5" />
      <circle cx="10" cy="10" r="3.5" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="10" y1="16" x2="10" y2="19" />
      <line x1="1" y1="10" x2="4" y2="10" />
      <line x1="16" y1="10" x2="19" y2="10" />
    </svg>
  ),
  Chart: ({ cls = "w-5 h-5" }: { cls?: string }) => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={cls}>
      <polyline points="2,14 6,10 10,12 16,5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="1" y1="18" x2="19" y2="18" strokeLinecap="round" />
    </svg>
  ),
  Info: ({ cls = "w-4 h-4" }: { cls?: string }) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
      <circle cx="8" cy="8" r="6.5" />
      <line x1="8" y1="5.5" x2="8" y2="5.6" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="7.5" x2="8" y2="11" strokeLinecap="round" />
    </svg>
  ),
};
