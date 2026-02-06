export {};

declare global {
  namespace React {
    type FC<P = {}> = (props: P) => any;
    type ReactNode = any;
    type FormEvent<T = Element> = any;
    type ChangeEvent<T = Element> = any;
    type MouseEvent<T = Element> = any;
    type KeyboardEvent<T = Element> = any;
    type CSSProperties = Record<string, any>;
    type RefObject<T> = { current: T | null };
    type Dispatch<A> = (value: A) => void;
    type SetStateAction<S> = S | ((prevState: S) => S);
  }

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    type Element = any;
  }
}

declare module 'react' {
  export type FC<P = {}> = (props: P) => any;
  export type ReactNode = any;
  export type FormEvent<T = Element> = any;
  export type ChangeEvent<T = Element> = any;
  export type MouseEvent<T = Element> = any;
  export type KeyboardEvent<T = Element> = any;
  export type CSSProperties = Record<string, any>;
  export type RefObject<T> = { current: T | null };
  export type Dispatch<A> = (value: A) => void;
  export type SetStateAction<S> = S | ((prevState: S) => S);
  export function useState<T>(initialState: T | (() => T)): [T, (value: T | ((prev: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export function useRef<T>(initialValue?: T): { current: T };
  export function createElement(type: any, props?: any, ...children: any[]): any;
  export function createContext<T>(defaultValue: T): any;
  export function useContext<T>(context: any): T;
  export const StrictMode: any;
  export const Fragment: any;
  export default React;
  const React: any;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom/client' {
  export function createRoot(container: Element): {
    render(element: any): void;
  };
}

declare module 'react-router-dom' {
  export const HashRouter: any;
  export const BrowserRouter: any;
  export const Routes: any;
  export const Route: any;
  export const Link: any;
  export const Navigate: any;
  export const Outlet: any;
  export const NavLink: any;
  export function useParams(): Record<string, string | undefined>;
  export function useNavigate(): (path: string) => void;
  export function useLocation(): { pathname: string; search: string; hash: string };
  export function useSearchParams(): [URLSearchParams, (params: URLSearchParams) => void];
}

declare module 'lucide-react' {
  const _default: any;
  export const FileText: any;
  export const BookOpen: any;
  export const User: any;
  export const Download: any;
  export const Layout: any;
  export const Edit3: any;
  export const Eye: any;
  export const CheckCircle: any;
  export const Zap: any;
  export const Shield: any;
  export const FileCheck: any;
  export const ArrowRight: any;
  export const ArrowLeft: any;
  export const Calendar: any;
  export const Tag: any;
  export const ChevronRight: any;
  export const ChevronDown: any;
  export const ChevronUp: any;
  export const Facebook: any;
  export const Twitter: any;
  export const Linkedin: any;
  export const Instagram: any;
  export const Mail: any;
  export const Phone: any;
  export const MapPin: any;
  export const Send: any;
  export const Plus: any;
  export const Trash2: any;
  export const Star: any;
  export const Award: any;
  export const Briefcase: any;
  export const GraduationCap: any;
  export const Globe: any;
  export const Heart: any;
  export const Clock: any;
  export const Users: any;
  export const Search: any;
  export const Menu: any;
  export const X: any;
  export const ExternalLink: any;
  export const Copy: any;
  export const Check: any;
  export const AlertCircle: any;
  export const Info: any;
  export const HelpCircle: any;
  export const Settings: any;
  export const Home: any;
  export const Layers: any;
  export const Grid: any;
  export const List: any;
  export const Filter: any;
  export const Code: any;
  export const Languages: any;
  export const MessageSquare: any;
  export const MessageCircle: any;
  export const Bell: any;
  export const Lock: any;
  export const Unlock: any;
  export const Key: any;
  export const Database: any;
  export const Server: any;
  export const Cloud: any;
  export const Monitor: any;
  export const Smartphone: any;
  export const Camera: any;
  export const Mic: any;
  export const Image: any;
  export const Video: any;
  export const Music: any;
  export const File: any;
  export const Folder: any;
  export const Archive: any;
  export const Printer: any;
  export const Share2: any;
  export const Link2: any;
  export const Bookmark: any;
  export const Save: any;
  export const Upload: any;
  export const RefreshCw: any;
  export const SortAsc: any;
  export const SortDesc: any;
}
