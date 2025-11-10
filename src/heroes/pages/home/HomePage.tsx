import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"
import { useMemo } from "react"

import { Heart,} from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"

import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"


export const HomePage = () => {
  
  //searchParam 
  const [searchParams, setSearchParams] = useSearchParams()
  
  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6'; 
  //Validation on activeTab using a memo
  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains']
    return validTabs.includes(activeTab) ? activeTab : 'all'
  }, [activeTab])

  const {data: heroesResponse} = useQuery({
      queryKey: ['heroes', {page, limit}], //It's mandatory to use the argments page and limit as key 
      queryFn: () => getHeroesByPageAction(+page, +limit),
      staleTime: 1000 * 60 * 5,
    })
  
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title="SuperHero App" 
        description="Discover, explore, and manage your favorite superheroes and villains" 
        />

        <CustomBreadcrumbs currentPage="Super Hero" />

        {/* Stats Dashboard */}
        <HeroStats/>

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'all');
              return prev;
            })}
            >
              All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2"
            onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'favorites');
              return prev;
            })}
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>

            <TabsTrigger value="heroes" onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'heroes');
              return prev;
            })}
            > Heroes (12)</TabsTrigger>

            <TabsTrigger value="villains" onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'villains');
              return prev;
            })}
            > Villains (2)</TabsTrigger>
          </TabsList>
    
            <TabsContent value="all">
              <h1> All charapters </h1>
                <HeroGrid heroes={heroesResponse?.heroes ?? []}/>
            </TabsContent>

            <TabsContent value="favorites">
              <h1> Favorites </h1>
                <HeroGrid heroes={[]}/>
            </TabsContent>

            <TabsContent value="heroes">
              <h1> Heroes </h1>
                <HeroGrid heroes={[]}/>
            </TabsContent>

            <TabsContent value={"villains"}>
              <h1> Villains </h1>
                <HeroGrid heroes={[]}/>
            </TabsContent>
      </Tabs>

        {/* Pagination */}
        <CustomPagination totalPage={heroesResponse?.pages ?? 1}/>
      </>
    </>
  )
}