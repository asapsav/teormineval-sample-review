export function Navigation() {
  const links = [
    { href: "/findings", label: "Blog", internal: true },
    { href: "/inspect-ai-viewer/index.html", label: "Traces", internal: true },
    { href: "/logs/", label: "Console", internal: true },
    { href: "https://github.com/asapsav/TeorMininumEval", label: "GitHub", internal: false },
    { href: "https://airtable.com/appBIwEl9RwgXitoc/pagzxsqR1zDi7R6eh/form", label: "Submit Problem", internal: false },
  ]

  return (
    <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          {...(link.internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
