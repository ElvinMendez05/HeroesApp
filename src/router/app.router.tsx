import { createBrowserRouter } from "react-router";
import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { Search } from "lucide-react";

//const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));

export const appRouter = createBrowserRouter([
    
    {
        path: '/',
        element: <HeroesLayout/>,
        children: [
            {
              index: true,
              element: <HomePage />
            },
            {
              path: '/heroes/1',
              element: <HeroPage/>
            },
            {
              path: '/search',
              element: <Search />
            },
          ]
        },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
           {
            index: true,
            element: <AdminPage />
           }
        ]
    },
   
]) 