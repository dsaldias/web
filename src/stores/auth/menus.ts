/* eslint-disable @typescript-eslint/no-explicit-any */

export const cargarMenus = (menus = []) => {
  const menuItemsAgrupados = menus.reduce((grupos: any, item: any) => {
    const grupoId = item.grupo
    const grupoExistente = grupos.find((grupo: any) =>
      grupo.some((obj: any) => obj.grupo === grupoId),
    )

    if (grupoExistente) {
      grupoExistente.push(item)
    } else {
      grupos.push([item])
    }

    return grupos
  }, [])

  return menuItemsAgrupados
}
