interface EventArgs {
  'model:sorted'?: string
   // ...其他事件code
  'blank:click': number
   // ...其他事件code
  scale: { sx: number; sy: number; ox: number; oy: number }
  resize: { width: number; height: number }
  translate: { tx: number; ty: number }
  onClick: () => {}
}

export type EventNames = Extract<keyof EventArgs, string>

const cache = []
cache.push('handler', 'context')

console.log(cache)