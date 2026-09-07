"""Check local links and fragments in the generated static documentation."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
import sys


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.links = []
        html = path.read_text(encoding="utf-8")
        # Common signs of UTF-8 text accidentally decoded with a Windows code page.
        if any(marker in html for marker in ("\ufffd", "\u00e2\u20ac", "\u00e2\u2020")):
            raise ValueError(f"Possible text encoding damage in {path}")
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])


root = Path(sys.argv[1] if len(sys.argv) > 1 else "dist").resolve()
pages = {path: Page(path) for path in root.rglob("*.html")}
if not pages:
    raise SystemExit(f"No built HTML found in {root}")
errors = []
checked = 0
for path, page in pages.items():
    relative = path.relative_to(root).as_posix()
    source = "/" + relative.removesuffix("index.html") if relative.endswith("index.html") else "/" + relative
    for href in page.links:
        parsed = urlsplit(href)
        if parsed.scheme or parsed.netloc:
            continue
        target_url = urlsplit(urljoin(source, href))
        target = root / unquote(target_url.path).lstrip("/")
        if target.is_dir():
            target = target / "index.html"
        elif not target.exists() and not target.suffix:
            target = target / "index.html"
        checked += 1
        if not target.exists():
            errors.append(f"{relative}: missing target {href}")
        elif target_url.fragment and target in pages and unquote(target_url.fragment) not in pages[target].ids:
            errors.append(f"{relative}: missing fragment {href}")
for error in errors:
    print(error)
print(f"Checked {checked} local links across {len(pages)} HTML pages; {len(errors)} errors.")
raise SystemExit(bool(errors))
