export type Service = {
  id: number;
  title: string;
  description: string;
};

async function getServices(): Promise<Service[]> {
  const response = await fetch("http://localhost:4000/api/services");

  if (!response.ok) throw new Error("Failed to fetch services");

  return response.json();
}

export default getServices;
