"use client"

import { useMounted } from "@/hooks/use-mounted"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import { Icons } from "./icons"

function Dark() {
  const { systemTheme, theme, setTheme } = useTheme()
  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark")

  const isMounted = useMounted()
  if (!isMounted) return null

  return (
    <>
      {isDark ? (
        <Icons.sun
          onClick={() => setTheme("light")}
          className="h-6 w-6 cursor-pointer "
        />
      ) : (
        <Icons.moon
          onClick={() => setTheme("dark")}
          className="h-6 w-6 cursor-pointer text-slate-900"
        />
      )}
    </>
  )
}

export default Dark
