export function DatasetTable() {
  const data = [
    { category: "Field Theory", total: 3, answers: 3, solutions: 2 },
    { category: "Math 1", total: 15, answers: 12, solutions: 2 },
    { category: "Math 2", total: 12, answers: 7, solutions: 7 },
    { category: "Mechanics", total: 2, answers: 1, solutions: 1 },
    { category: "Quantum Mechanics", total: 1003, answers: 693, solutions: 690 },
    { category: "Quantum Electrodynamics", total: 0, answers: 0, solutions: 0 },
    { category: "Statistical Physics I", total: 0, answers: 0, solutions: 0 },
    { category: "Continuum Mechanics", total: 0, answers: 0, solutions: 0 },
    { category: "Electrodynamics of Continuous Media", total: 0, answers: 0, solutions: 0 },
    { category: "Statistical Physics II", total: 0, answers: 0, solutions: 0 },
    { category: "Physical Kinetics", total: 0, answers: 0, solutions: 0 },
  ]

  const totals = data.reduce(
    (acc, row) => ({
      total: acc.total + row.total,
      answers: acc.answers + row.answers,
      solutions: acc.solutions + row.solutions,
    }),
    { total: 0, answers: 0, solutions: 0 },
  )

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
            <th className="text-center py-3 px-4 font-medium text-gray-900">Problems</th>
            <th className="text-center py-3 px-4 font-medium text-gray-900">Answers</th>
            <th className="text-center py-3 px-4 font-medium text-gray-900">Solutions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.category} className={index !== data.length - 1 ? "border-b border-gray-100" : ""}>
              <td className="py-3 px-4 text-gray-700">{row.category}</td>
              <td className="py-3 px-4 text-center text-gray-700">{row.total}</td>
              <td className="py-3 px-4 text-center text-gray-700">{row.answers}</td>
              <td className="py-3 px-4 text-center text-gray-700">{row.solutions}</td>
            </tr>
          ))}
          <tr className="border-t-2 border-gray-200 bg-gray-50 font-medium">
            <td className="py-3 px-4 text-gray-900">TOTAL</td>
            <td className="py-3 px-4 text-center text-gray-900">{totals.total}</td>
            <td className="py-3 px-4 text-center text-gray-900">{totals.answers}</td>
            <td className="py-3 px-4 text-center text-gray-900">{totals.solutions}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
