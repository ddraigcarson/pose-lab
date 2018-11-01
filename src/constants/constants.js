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

const createOption = (id, value, children) => ({
  id, value, children,
})

const FILE = createOption('FILE', 'file', []);
const LIBRARY = createOption('LIBRARY', 'library', []);
const DEFAULT = createOption('DEFAULT', 'default', [LIBRARY, FILE]);
const LIST = createOption('LIST', 'list', [LIBRARY, FILE]);
const IMPORT = createOption('IMPORT', 'import', [DEFAULT, LIST])

const USE_STATE = createOption('USE_STATE', 'useState', []);
const USE_EFFECT = createOption('USE_EFFECT', 'useEffect', []);
const HOOK = createOption('HOOK', 'hook', [USE_STATE, USE_EFFECT]);

export const MENU_OPTIONS = [
  IMPORT,
  HOOK,
];
