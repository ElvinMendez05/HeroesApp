import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"

export const SearchPage = () => {
  return (
     <>
      <CustomJumbotron title="Search for hero"
        description="Discover, explore, and manage your favorite superheroes and villains" />
      
       <CustomBreadcrumbs currentPage="Super Hero" 
       // breadcrumbs={[
        //   { label: 'Home1', to: '/' },
        //   { label: 'Home2', to: '/' },
        //   { label: 'Home3', to: '/' },
        // ]}
       />

      <HeroStats />
      
      {/* Filter and search */}
      <SearchControls/>
      </>
      
  )
}

export default SearchPage
