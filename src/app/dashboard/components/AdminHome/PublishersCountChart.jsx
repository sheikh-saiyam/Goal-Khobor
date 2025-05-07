"use client"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"


export function PublishersCountChart({ data }) {
  // Normalize and aggregate data (e.g., combine "90min" and "90Min")
  const normalizedData = data.reduce((acc, item) => {
    const name = item.name.trim().toLowerCase()
    const existing = acc.find((entry) => entry.name.toLowerCase() === name)
    if (existing) {
      existing.count += item.count
    } else {
      acc.push({ name: item.name, count: item.count })
    }
    return acc
  }, [])

  // Sort by count descending
  normalizedData.sort((a, b) => b.count - a.count)

  // Prepare data for chart
  const chartData = normalizedData.map((item) => ({
    name: item.name,
    count: item.count,
  }))

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} tick={{ fontSize: 12 }} />
        <YAxis label={{ value: "Articles", angle: -90, position: "insideLeft", style: { textAnchor: "middle" } }} />
        <Tooltip
          formatter={(value) => [`${value} articles`, "Count"]}
          labelFormatter={(label) => `Publisher: ${label}`}
        />
        <Legend verticalAlign="top" />
        <Bar dataKey="count" name="Articles" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
