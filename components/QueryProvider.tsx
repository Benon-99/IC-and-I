"use client"

import { QueryClientProvider ,QueryClient } from '@tanstack/react-query';

export default function QueryProvider({children}:{children:React.ReactNode}) {

    return(
        <QueryClientProvider client={new QueryClient()}>
            {children}
        </QueryClientProvider>
    )
}