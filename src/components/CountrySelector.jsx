import { Flag } from 'lucide-react'

export default function CountrySelector({ countries, selected, onSelect }) {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-6">
      <div className="flex items-center gap-2 mb-3">
        <Flag className="h-5 w-5 text-blue-600" />
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Seleziona la nazione</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {countries.map((c) => (
          <button
            key={c.code}
            onClick={() => onSelect(c.code)}
            className={`px-3 py-1.5 rounded-full border text-sm transition shadow-sm hover:shadow ${
              selected === c.code
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
            }`}
          >
            {c.flag} {c.name}
          </button>
        ))}
      </div>
    </section>
  )
}
