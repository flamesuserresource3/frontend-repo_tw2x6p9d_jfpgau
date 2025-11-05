import { Crown, Calendar, Info } from 'lucide-react'

function TradingCard({ leader, onSelect }) {
  return (
    <button
      onClick={() => onSelect?.(leader)}
      className="group relative rounded-xl p-4 bg-white border border-gray-200 shadow-sm hover:shadow-md transition text-left"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-indigo-500/10 group-hover:to-purple-500/10 transition" />
      <div className="relative flex items-start gap-4">
        <img
          src={leader.image}
          alt={leader.name}
          className="h-24 w-24 rounded-lg object-cover ring-2 ring-white shadow"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-lg font-semibold leading-tight">{leader.name}</h4>
            {leader.role && (
              <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                <Crown className="h-3 w-3" />
                {leader.role}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{leader.highlights}</p>
          <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>
              {leader.termStart}
              {leader.termEnd ? ` – ${leader.termEnd}` : ''}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <span className="inline-flex items-center gap-1 text-xs text-blue-600 group-hover:text-blue-700">
          <Info className="h-4 w-4" />
          Dettagli
        </span>
      </div>
    </button>
  )
}

export default function LeadersGrid({ leaders, onSelect }) {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {leaders.map((l, i) => (
          <TradingCard key={`${l.name}-${i}`} leader={l} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}
