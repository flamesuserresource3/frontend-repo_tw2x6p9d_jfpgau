import { Calendar } from 'lucide-react'

function yearFrom(dateStr) {
  if (!dateStr) return null
  const y = parseInt(String(dateStr).slice(0, 4), 10)
  return Number.isNaN(y) ? null : y
}

export default function Timeline({ leaders }) {
  if (!leaders || leaders.length === 0) return null

  const years = leaders.flatMap((l) => [yearFrom(l.termStart), yearFrom(l.termEnd) ?? yearFrom(l.termStart)])
  const minYear = Math.min(...years.filter(Boolean))
  const maxYear = Math.max(...years.filter(Boolean))
  const totalSpan = Math.max(1, maxYear - minYear + 1)

  return (
    <section className="max-w-6xl mx-auto px-4 mt-8">
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="h-5 w-5 text-indigo-600" />
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Linea temporale dei Capi di Stato</h3>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-4 overflow-x-auto">
        <div className="relative min-w-[640px]">
          {/* Axis */}
          <div className="h-2 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-full" />
          {/* Segments */}
          <div className="relative -mt-2 h-0">
            {leaders.map((l, idx) => {
              const start = yearFrom(l.termStart) ?? minYear
              const end = yearFrom(l.termEnd) ?? start
              const left = ((start - minYear) / totalSpan) * 100
              const width = (Math.max(1, end - start + 1) / totalSpan) * 100
              return (
                <div
                  key={idx}
                  className="absolute -top-2 h-6 rounded-full shadow-sm"
                  style={{ left: `${left}%`, width: `${width}%`, background: 'linear-gradient(90deg, #2563eb, #7c3aed)' }}
                >
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-white px-2 py-1 rounded border border-gray-200 shadow">
                    {l.name} • {start}
                    {end && end !== start ? `–${end}` : ''}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Labels */}
          <div className="mt-6 flex justify-between text-xs text-gray-500">
            <span>{minYear}</span>
            <span>{maxYear}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
