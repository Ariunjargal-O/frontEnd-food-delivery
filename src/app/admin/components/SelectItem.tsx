import { SelectItem } from "@/components/ui/select";

export const SelectItemComp = ({ categoryName }: { categoryName: string }) => {
  return (
    <div>
      {" "}
      <SelectItem value={categoryName}>{categoryName}</SelectItem>
    </div>
  );
};

{
  /* {category.map(
    (cat: CateFoodType) => (
      <SelectItem
        key={cat._id}
        value={cat.categoryName}
      >
        {cat.categoryName}
      </SelectItem>
    )
  // ) */
}
