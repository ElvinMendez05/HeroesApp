import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Filter, Grid, Plus, Search, SortAsc } from "lucide-react"

export const SearchControls = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input placeholder="Search heroes, villains, powers, teams..." className="pl-12 h-12 text-lg bg-white" />
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <Button variant="outline" className="h-12 bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>

            <Button variant="outline" className="h-12 bg-transparent">
              <SortAsc className="h-4 w-4 mr-2" />
              Sort by Name
            </Button>

            <Button variant="outline" className="h-12 bg-transparent">
              <Grid className="h-4 w-4" />
            </Button>

            <Button className="h-12">
              <Plus className="h-4 w-4 mr-2" />
              Add Character
            </Button>
          </div>
        </div>
    </>
  )
}
