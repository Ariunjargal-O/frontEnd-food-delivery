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

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {  id: "92894",
//         no: 1,
//         user: "afsgd",
//         foodOrderItems: "sdg",
//         totalprice: 12344,
//         foodOrderStatus: {"Pending" | "Delivered" | "Cancelled";},
//       }
//   ];
// }
async function getData() {
    
}
export const AdminOrderSec = async () => {
  const data = await getData;
  return (
    <div>
      <div className="container mx-auto py-10">
        {/* <DataTable columns={columns}  /> */}
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
