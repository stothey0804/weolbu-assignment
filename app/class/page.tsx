import { Card } from "@/components/ui/card";
import {
  ClassFilter,
  ClassList,
  ClassItem,
  ApplyBtn,
} from "../components/class";
import { TempClassList } from "@/lib/mockingData";

/**
 * /class - 강의 목록 컴포넌트
 */
export default function Page() {
  return (
    <main>
      <Card className="p-4">
        <ClassFilter />
        <ClassList>
          {TempClassList.length > 0 &&
            TempClassList.map((data) => (
              <ClassItem
                key={`class-item-${data.id ? data.id : ""}`}
                data={data}
              />
            ))}
        </ClassList>
        <ApplyBtn />
      </Card>
    </main>
  );
}
