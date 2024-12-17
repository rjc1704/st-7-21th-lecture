import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import PokemonList from "./_components/PokemonList";
import { getPokemons } from "@/api/getPokemons";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons(),
  });
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-red-600">
        포켓몬 리스트
      </h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PokemonList />
      </HydrationBoundary>
    </div>
  );
}
