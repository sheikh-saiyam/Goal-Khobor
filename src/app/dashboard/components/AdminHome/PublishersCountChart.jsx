"use client";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
import useFetchAdminStatistics from "@/hooks/useFetchAdminStatistics";

const PublishersCountChart = () => {
  const [data, loading] = useFetchAdminStatistics();
  const publishersCount = data?.publisher_counts;
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!publishersCount || !chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Normalize and aggregate data (e.g., combine "90min" and "90Min")
    const normalizedData = publishersCount.reduce((acc, item) => {
      const name = item.name.trim().toLowerCase();
      const existing = acc.find((entry) => entry.name.toLowerCase() === name);
      if (existing) {
        existing.count += item.count;
      } else {
        acc.push({ name: item.name, count: item.count });
      }
      return acc;
    }, []);

    // Sort by count descending
    normalizedData.sort((a, b) => b.count - a.count);

    const labels = normalizedData.map((item) => item.name);
    const counts = normalizedData.map((item) => item.count);

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Number of News",
            data: counts,
            backgroundColor: "rgba(209, 213, 219, 0.2)", // gray-300 with opacity
            borderColor: "rgba(107, 114, 128, 1)", // gray-500
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "News Count",
              color: "#374151", // gray-700
            },
            ticks: {
              color: "#6B7280", // gray-500
            },
            grid: {
              color: "#E5E7EB", // gray-200
            },
          },
          x: {
            title: {
              display: true,
              text: "All News Publishers",
              color: "#374151", // gray-700
            },
            ticks: {
              autoSkip: false,
              maxRotation: 45,
              minRotation: 45,
              color: "#6B7280", // gray-500
            },
            grid: {
              display: false, // Hide x-axis grid lines for cleaner look
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              color: "#374151", // gray-700
            },
          },
          title: {
            display: true,
            text: "News Per Publisher",
            color: "#374151", // gray-700
            font: {
              size: 18,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [publishersCount]);

  // Loading skeleton resembling a bar chart
  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "400px",
          margin: "0 auto",
          position: "relative",
          backgroundColor: "#F3F4F6", // gray-100
          border: "1px solid #E5E7EB", // gray-200
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {/* Skeleton bars */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-end",
            height: "80%",
            padding: "20px",
          }}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: "8%",
                height: `${Math.random() * 70 + 20}%`, // Random height for variety
                backgroundColor: "#D1D5DB", // gray-300
                borderRadius: "4px",
                animation: "shimmer 1.5s infinite",
              }}
            />
          ))}
        </div>
        {/* Shimmer effect */}
        <style jsx>{`
          @keyframes shimmer {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0.6;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>
        {/* Loading text */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "20px",
            color: "#6B7280",
            fontSize: "18px",
          }}
        ></div>
      </div>
    );
  }

  if (!publishersCount || publishersCount.length === 0) {
    return <div>No publisher data available</div>;
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "400px",
        margin: "0 auto",
        backgroundColor: "#F3F4F6", // gray-100
        border: "1px solid #E5E7EB", // gray-200
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      <canvas ref={chartRef} />
    </div>
  );
};

export default PublishersCountChart;
