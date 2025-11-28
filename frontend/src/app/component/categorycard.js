"use client";

export function CategoryCard({ name, count }) {
  return (
    <button>
      <span>{name}</span>
      <span>{count}</span>
    </button>
  );
}
