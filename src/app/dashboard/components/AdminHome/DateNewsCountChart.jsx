"use client"

import { useMemo } from "react"
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"



export default function DateNewsCountChart({ data =[] }) {
  const chartData = useMemo(() => {
    return [...data]
      .map((item) => ({
        date: item.date,
        count: item.count,
        formattedDate: new Date(item.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [data])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 25 }}>
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="formattedDate" tick={{ fontSize: 12 }} />
        <YAxis label={{ value: "Articles", angle: -90, position: "insideLeft", style: { textAnchor: "middle" } }} />
        <Tooltip formatter={(value) => [`${value} articles`, "Count"]} labelFormatter={(label) => `Date: ${label}`} />
        <Legend verticalAlign="top" />
        <Area
          type="monotone"
          dataKey="count"
          name="Articles Published"
          stroke="hsl(var(--primary))"
          fillOpacity={1}
          fill="url(#colorCount)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
