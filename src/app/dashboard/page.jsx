import { getUserAction } from "@/action/auth-action";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default async function Page() {
  const { user, error } = await getUserAction();
  return (
    <div>
      {error}
      {user && (
        <Card className="w-full max-w-sm p-4 shadow-lg">
          <CardHeader className="flex flex-col items-center gap-2">
            <Image
              src={user.image}
              width={150}
              height={150}
              alt={user.firstName}
            />
            <h2 className="text-lg font-semibold">
              {user.firstName} {user.lastName}
            </h2>
          </CardHeader>
          <CardContent className=" space-y-2">
            <p className="text-sm text-gray-600">🗓️ {user.age} tahun</p>
            <p className="text-sm text-gray-600">📧 {user.email}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
