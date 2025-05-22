import { Children, useEffect, useState } from "react"
import { EVENTS } from "./consts"
import { match } from 'path-to-regexp'
import { getCurrentPath } from "./utils"

export function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(getCurrentPath())

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(getCurrentPath())
        }

        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)

        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    }, [])

    let routerParams = {}

    //add routes from children <Route /> components
    const routesFromChildren = Children.map(children, ({ props, type }) => {        
        const { name } = type
        const isRoute = name === 'Route'

        return isRoute ? props : null
    })
    const routesToUse = routes.concat(routesFromChildren).filter(Boolean) // filter removes null values
    
    const Page = routesToUse.find(({ path }) => {
        if(path === currentPath) return true

        const matcherUrl = match(path, { decode: decodeURIComponent }) // decodifica la url
        const matched = matcherUrl(currentPath) // compara la url con el path
        if (!matched) return false 

        routerParams = matched.params // guarda los params de la url
        return true

    })?.Component

    return Page 
    ? <Page routerParams={routerParams} /> 
    : <DefaultComponent routerParams={routerParams} />
}