import { NavigationLink as Link } from "./NavigationLink";
export function Logo() {
  // Text wordmark placeholder. Source catalog logo says «Чистая Работа», not Highwash.
  return (
    <Link className="logo" href="/" aria-label="Highwash — главная">
      <span className="logo-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>
        HIGH<span className="logo-light">WASH</span>
        <small>КЛИНИНГ И ВЫСОТНЫЕ РАБОТЫ</small>
      </span>
    </Link>
  );
}
