import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

export const Theme = createContext<any>(null)

export default function ThemeProvider({ children }: any) {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const value = {
        isDarkMode,
        setIsDarkMode
    }
    // useEffect(() => {
    //     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {

    //     }
    // }, [])
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])
    return (
        <Theme.Provider value={value}>
            {children}
        </Theme.Provider>
    )
}
