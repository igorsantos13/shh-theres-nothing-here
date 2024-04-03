import { NextResponse } from "next/server";
const drivers = ["max", "perez", "charles", "carlos"];

export async function GET(request: Request) {
  return NextResponse.json({ drivers });
}

export async function POST(request: Request) {
  const data = await request.json();

  drivers.push(data.driver);

  return NextResponse.json({});
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const index = searchParams.get("index");
  const data = await request.json();

  drivers[Number(index)] = data.driver;

  return NextResponse.json({});
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const index = searchParams.get("index");

  drivers.splice(Number(index), 1);

  return NextResponse.json({ message: "piloto deletado com sucesso" });
}
