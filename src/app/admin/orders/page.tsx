"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { columns, Payment } from "@/app/admin/components/columns";

import { useEffect, useState } from "react";
import { BASE_URL } from "@/constnants";
import { DataTable } from "../components/data-table";

export type OrderType = {};

export default function AdminOrderSec () {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const data = async () => {
      const res = await fetch(`${BASE_URL}/food-orders/with-users`, {
        headers: { "Content-Type": "application/json" },
      });
      const dataFoodOrder = await res.json();

      console.log(dataFoodOrder.categories);

      setOrder(dataFoodOrder.categories);
      console.log(dataFoodOrder);
    };
    data();
  }, []);

  return (
    <div className="px-5 py-10">
      <div className="container py-10">
        <DataTable columns={columns} data={order} />
      </div>

      <div>
      
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
