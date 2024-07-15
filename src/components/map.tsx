"use client"

import {ComponentPropsWithoutRef, useEffect} from "react"
import {useMounted} from "@/lib/hooks"

export function LeafletMap(props: ComponentPropsWithoutRef<"div">) {
  const mounted = useMounted()

  useEffect(() => {
    if (!mounted) return
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    document.head.appendChild(link)

    const script = document.createElement("script")
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    script.onload = initMap
    document.body.appendChild(script)

    return () => {
      document.head.removeChild(link)
      document.body.removeChild(script)
    }
  }, [mounted])

  function initMap() {
    const L = window.L
    if (typeof L !== "undefined") {
      const map = L.map("map", {
        center: [54.9514628, -7.7191516],
        zoom: 6,
        dragging: false,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        tap: false,
        attributionControl: false,
        keyboard: false
      })

      L.control.attribution({prefix: false}).addTo(map)
      L.tileLayer(`https://tile.thunderforest.com/atlas/{z}/{x}/{y}{r}.png?apikey=${process.env.NEXT_PUBLIC_THUNDERFOREST_API_KEY}`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://www.thunderforest.com">Thunderforest</a>`
      }).addTo(map)

      const marker = L.marker([54.9514628, -7.7191516]).addTo(map)
      marker.bindPopup("PhilCare Ireland").openPopup()
    }
  }

  return <div id="map" {...props}></div>
}
