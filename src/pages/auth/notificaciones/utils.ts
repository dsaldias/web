/* eslint-disable @typescript-eslint/no-explicit-any */
export const columns: any = [
  { name: 'index', field: 'index', label: '#' },
  { name: 'id', field: 'id', label: 'ID' },
  { name: 'mensaje', field: 'mensaje', label: 'mensaje', with: '200' },
  { name: 'creado_por_id', field: 'creado_por_id', label: 'creado_por_id' },
  { name: 'desde', field: 'desde', label: 'desde' },
  { name: 'hasta', field: 'hasta', label: 'hasta' },
  { name: 'fecha_registro', field: 'fecha_registro', label: 'fecha_registro' },
  { name: 'opt', field: 'opt', label: '' },
]

export const toolbar = ($q: any) => [
  [
    {
      label: $q.lang.editor.align,
      icon: $q.iconSet.editor.align,
      fixedLabel: true,
      list: 'only-icons',
      options: ['left', 'center', 'right', 'justify'],
    },
    'bold',
    'italic',
    'strike',
    'underline',
    'token',
    // 'fullscreen',
  ],
  [
    /* {
      label: $q.lang.editor.formatting,
      icon: $q.iconSet.editor.formatting,
      list: 'no-icons',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
    }, */
    {
      // label: $q.lang.editor.fontSize,
      label: 'fuente',
      icon: $q.iconSet.editor.fontSize,
      fixedLabel: true,
      fixedIcon: true,
      list: 'no-icons',
      options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7'],
    },
    /* {
      label: $q.lang.editor.defaultFont,
      icon: $q.iconSet.editor.font,
      fixedIcon: true,
      list: 'no-icons',
      options: [
        'default_font',
        'arial',
        'arial_black',
        'comic_sans',
        'courier_new',
        'impact',
        'lucida_grande',
        'times_new_roman',
        'verdana',
      ],
    }, */
    'removeFormat',
  ],
  ['unordered', 'ordered' /* 'outdent', 'indent' */],

  // ['undo', 'redo'],
  ['viewsource'],
]
