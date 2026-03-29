/* eslint-disable @typescript-eslint/no-explicit-any */

export const cargarMenus = (menus: any[] = []) => {
  // 1. Construir mapa y anidar hijos en sus padres
  const map: Record<string, any> = {}
  menus.forEach(m => (map[m.id] = { ...m, children: [] }))
  menus.forEach(m => {
    if (m.padre_id && map[m.padre_id]) {
      map[m.padre_id].children.push(map[m.id])
    }
  })

  // 2. Solo raíces (sin padre), agrupadas por grupo
  const roots = menus.filter(m => !m.padre_id).map(m => map[m.id])
  return roots.reduce((grupos: any[], item: any) => {
    const existing = grupos.find((g: any[]) => g.some((o: any) => o.grupo === item.grupo))
    if (existing) existing.push(item)
    else grupos.push([item])
    return grupos
  }, [])
}
