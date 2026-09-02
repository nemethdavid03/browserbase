import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Itt lekérdezhetnéd az adatot a PostgreSQL-ből (pl. Prisma-val)
    // const data = await prisma.posts.findMany();

    const data = [
      { id: 1, title: "Első bejegyzés", status: "active" },
      { id: 2, title: "Második bejegyzés", status: "pending" },
    ];

    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Hiba történt az adatok lekérdezése közben.",
      },
      { status: 500 },
    );
  }
}
