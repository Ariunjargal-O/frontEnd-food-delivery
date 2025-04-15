"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  no: number;
  user:string[];
  foodOrderItems: string[];
  totalprice: number;
  foodOrderStatus: "Pending" | "Delivered" | "Cancelled";
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "No.",
    header: "No.",
  },
  {
    accessorKey: "email",
    header: "Costumer",
  },

  {
    accessorKey: "Food",
    header: "Food",
  },

  {
    accessorKey: "Date",
    header: "Date",
  },

  {
    accessorKey: "Total",
    header: "Total",
  },

  {
    accessorKey: "Delivery Address",
    header: "Delivery Address",
  },

  {
    accessorKey: "Delivery state",
    header: "Delivery state",
  },
];
