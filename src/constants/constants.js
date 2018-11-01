export const OPEN = 'open';
export const CLOSING = 'closing';
export const CLOSED = 'closed';

export const DROP_STATES = {
  OPEN, CLOSING, CLOSED
};

export const MONDAY = { label: "Monday", index: 1 };
export const TUESDAY = { label: "Tuesday", index: 2 };
export const WEDNESDAY = { label: "Wednesday", index: 3 };
export const THURDAY = { label: "Thursday", index: 4 };
export const FRIDAY = { label: "Friday", index: 5 };
export const SATURDAY = { label: "Saturday", index: 6 };
export const SUNDAY = { label: "Sunday", index: 0 };

export const WEEK = [
  MONDAY, TUESDAY, WEDNESDAY, THURDAY, FRIDAY, SATURDAY, SUNDAY,
];

const createOption = (id, label, value, children) => ({
  id, label, value, children,
})

const FILE = createOption('FILE', 'file', '\'\';', []);
const LIBRARY = createOption('LIBRARY', 'library', '\'\';', []);
const DEFAULT = createOption('DEFAULT', 'default', ' from', [LIBRARY, FILE]);
const LIST = createOption('LIST', 'list', '{  } from', [LIBRARY, FILE]);
const IMPORT = createOption('IMPORT', 'import', 'import', [DEFAULT, LIST])

const USE_STATE = createOption('USE_STATE', 'useState', 'const [] = useState();', []);
const USE_EFFECT = createOption('USE_EFFECT', 'useEffect', 'useEffect(()=>{});', []);
const HOOK = createOption('HOOK', 'hook', undefined, [USE_STATE, USE_EFFECT]);

export const MENU_OPTIONS = [
  IMPORT,
  HOOK,
];
