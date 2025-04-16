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
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/constnants";

export type OrderType = {};

export const AdminOrderSec = () => {
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
    <div>
      <div className="container py-10">
        <DataTable columns={columns} data={order} />
      </div>

      <div>
        hi
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
